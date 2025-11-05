/**
 * 좋아요 서비스 API
 *
 * Firebase Realtime Database와 상호작용하는 좋아요 관련 함수들을 제공합니다.
 * 게시글 및 댓글 좋아요 추가, 취소, 상태 확인 기능을 구현합니다.
 *
 * 데이터 구조 (Flat Style - 통합 좋아요):
 * /likes/
 *   post-<post-id>-<uid>: 1      # 게시글 좋아요
 *   comment-<comment-id>-<uid>: 1 # 댓글 좋아요
 *
 * /posts/
 *   <post-id>/
 *     likeCount: 3        # 총 좋아요 개수 (집계됨)
 *
 * /comments/
 *   <comment-id>/
 *     likeCount: 5        # 총 좋아요 개수 (집계됨)
 *
 * 사용 예시:
 * import { addLike, removeLike, checkLikeStatus, listenToLikeStatus, toggleLike, getLikes } from '$lib/services/like';
 *
 * // 게시글 좋아요 추가
 * const result = await addLike('post', 'post-id-123', 'user-uid-456');
 *
 * // 댓글 좋아요 추가
 * const result = await addLike('comment', 'comment-id-789', 'user-uid-456');
 *
 * // 게시글 좋아요 취소
 * const result = await removeLike('post', 'post-id-123', 'user-uid-456');
 *
 * // 게시글 좋아요 상태 확인
 * const isLiked = await checkLikeStatus('post', 'post-id-123', 'user-uid-456');
 *
 * // 게시글 좋아요 토글 (추가/취소)
 * const result = await toggleLike('post', 'post-id-123', 'user-uid-456');
 *
 * // 게시글의 모든 좋아요 조회
 * const likes = await getLikes('post', 'post-id-123');
 *
 * // 실시간 게시글 좋아요 상태 구독
 * const unsubscribe = listenToLikeStatus('post', 'post-id-123', 'user-uid-456', (isLiked) => {
 *   console.log('좋아요 상태:', isLiked);
 * });
 */

import { database } from '../utils/firebase.js';
import { ref, get, update, increment, onValue, off, query, orderByKey, startAt, endAt } from 'firebase/database';
import { handleFirebaseError } from '../utils/error-handler.js';
import type {
  AddLikeResult,
  RemoveLikeResult,
  ToggleLikeResult,
  Like,
  PostLike,
  LikeStatusCallback,
  LikeType
} from '../types/like';
import type { UserId, FirebaseKey } from '../types/common';

/**
 * 게시글 또는 댓글에 좋아요를 추가합니다.
 *
 * @param type - 좋아요 타입 ('post' 또는 'comment')
 * @param nodeId - 게시글 ID 또는 댓글 ID
 * @param userId - 사용자 UID
 * @returns 좋아요 추가 결과 (success, error)
 *
 * 기능:
 * - `/likes/{type}-{nodeId}-{uid}` 경로에 값 1 저장
 * - `/posts/{nodeId}/likeCount` 또는 `/comments/{nodeId}/likeCount` 를 +1 증가
 * - 한 번의 update 호출로 두 경로 동시 업데이트
 * - 중복 방지: 같은 사용자가 이미 좋아요를 눌렀으면 덮어쓰기 (값은 항상 1)
 *
 * 사용 예시:
 * ```typescript
 * // 게시글 좋아요
 * const result = await addLike('post', 'post-abc123', 'user-xyz789');
 *
 * // 댓글 좋아요
 * const result = await addLike('comment', 'comment-def456', 'user-xyz789');
 *
 * if (result.success) {
 *   console.log('좋아요를 추가했습니다.');
 * }
 * ```
 */
export async function addLike(
  type: LikeType,
  nodeId: FirebaseKey,
  userId: UserId
): Promise<AddLikeResult> {
  try {
    // nodeId에서 앞의 '-' 제거 (Firebase의 오래된 push 키 형식 대응)
    // 예: '-0dDmxbWZZ1LChg3FkPg' → '0dDmxbWZZ1LChg3FkPg'
    // 이렇게 하면 'post--0dDmxb...' 대신 'post-0dDmxb...'가 됩니다
    const cleanNodeId = nodeId.startsWith('-') ? nodeId.substring(1) : nodeId;

    // 업데이트할 경로와 값 준비
    const updates: Record<string, any> = {};

    // 1. /likes/{type}-{cleanNodeId}-{uid} 에 값 1 저장
    updates[`likes/${type}-${cleanNodeId}-${userId}`] = 1;

    // 2. /{type}s/{nodeId}/likeCount 를 +1 증가
    // 'post' → 'posts', 'comment' → 'comments'
    // ⚠️ 주의: Firebase 경로에는 원본 nodeId를 사용해야 합니다
    const collectionPath = type === 'post' ? 'posts' : 'comments';
    updates[`${collectionPath}/${nodeId}/likeCount`] = increment(1);

    // 한 번의 update로 두 경로 동시 업데이트
    await update(ref(database), updates);

    // ✅ 좋아요 추가 성공
    return {
      success: true
    };
  } catch (error) {
    // ❌ 좋아요 추가 실패
    const errorInfo = handleFirebaseError(error, 'addLike');
    return {
      success: false,
      error: errorInfo.key,  // i18n 키 반환
      errorMessage: errorInfo.message  // 원본 메시지 (디버깅용)
    };
  }
}

/**
 * 게시글 또는 댓글에서 좋아요를 취소합니다.
 *
 * @param type - 좋아요 타입 ('post' 또는 'comment')
 * @param nodeId - 게시글 ID 또는 댓글 ID
 * @param userId - 사용자 UID
 * @returns 좋아요 취소 결과 (success, error)
 *
 * 기능:
 * - `/likes/{type}-{nodeId}-{uid}` 경로를 삭제 (null로 설정)
 * - `/posts/{nodeId}/likeCount` 또는 `/comments/{nodeId}/likeCount` 를 -1 감소
 * - 한 번의 update 호출로 두 경로 동시 업데이트
 *
 * 사용 예시:
 * ```typescript
 * // 게시글 좋아요 취소
 * const result = await removeLike('post', 'post-abc123', 'user-xyz789');
 *
 * // 댓글 좋아요 취소
 * const result = await removeLike('comment', 'comment-def456', 'user-xyz789');
 *
 * if (result.success) {
 *   console.log('좋아요를 취소했습니다.');
 * }
 * ```
 */
export async function removeLike(
  type: LikeType,
  nodeId: FirebaseKey,
  userId: UserId
): Promise<RemoveLikeResult> {
  try {
    // nodeId에서 앞의 '-' 제거 (Firebase의 오래된 push 키 형식 대응)
    const cleanNodeId = nodeId.startsWith('-') ? nodeId.substring(1) : nodeId;

    // 업데이트할 경로와 값 준비
    const updates: Record<string, any> = {};

    // 1. /likes/{type}-{cleanNodeId}-{uid} 삭제 (null로 설정)
    updates[`likes/${type}-${cleanNodeId}-${userId}`] = null;

    // 2. /{type}s/{nodeId}/likeCount 를 -1 감소
    // 'post' → 'posts', 'comment' → 'comments'
    // ⚠️ 주의: Firebase 경로에는 원본 nodeId를 사용해야 합니다
    const collectionPath = type === 'post' ? 'posts' : 'comments';
    updates[`${collectionPath}/${nodeId}/likeCount`] = increment(-1);

    // 한 번의 update로 두 경로 동시 업데이트
    await update(ref(database), updates);

    // ✅ 좋아요 취소 성공
    return {
      success: true
    };
  } catch (error) {
    // ❌ 좋아요 취소 실패
    const errorInfo = handleFirebaseError(error, 'removeLike');
    return {
      success: false,
      error: errorInfo.key,  // i18n 키 반환
      errorMessage: errorInfo.message  // 원본 메시지 (디버깅용)
    };
  }
}

/**
 * 사용자의 좋아요 여부를 확인합니다.
 *
 * @param type - 좋아요 타입 ('post' 또는 'comment')
 * @param nodeId - 게시글 ID 또는 댓글 ID
 * @param userId - 사용자 UID
 * @returns true: 좋아요 누름, false: 안 누름
 *
 * 기능:
 * - `/likes/{type}-{nodeId}-{uid}` 경로 존재 여부 확인
 * - 한 번의 get 호출로 빠르게 확인
 *
 * 사용 예시:
 * ```typescript
 * // 게시글 좋아요 상태 확인
 * const isLiked = await checkLikeStatus('post', 'post-abc123', 'user-xyz789');
 *
 * // 댓글 좋아요 상태 확인
 * const isLiked = await checkLikeStatus('comment', 'comment-def456', 'user-xyz789');
 *
 * if (isLiked) {
 *   console.log('이미 좋아요를 눌렀습니다.');
 * } else {
 *   console.log('아직 좋아요를 누르지 않았습니다.');
 * }
 * ```
 */
export async function checkLikeStatus(
  type: LikeType,
  nodeId: FirebaseKey,
  userId: UserId
): Promise<boolean> {
  try {
    // nodeId에서 앞의 '-' 제거 (Firebase의 오래된 push 키 형식 대응)
    const cleanNodeId = nodeId.startsWith('-') ? nodeId.substring(1) : nodeId;

    // 좋아요 경로: /likes/{type}-{cleanNodeId}-{uid}
    const likeRef = ref(database, `likes/${type}-${cleanNodeId}-${userId}`);

    // 경로 존재 여부 확인
    const snapshot = await get(likeRef);

    // true: 좋아요 누름, false: 안 누름
    return snapshot.exists();
  } catch (error) {
    // ❌ 조회 실패 시 false 반환
    console.error('좋아요 상태 확인 실패:', error);
    return false;
  }
}

/**
 * 사용자의 좋아요 상태를 실시간으로 감시합니다.
 * 데이터 변경 시 자동으로 callback을 호출합니다.
 *
 * @param type - 좋아요 타입 ('post' 또는 'comment')
 * @param nodeId - 게시글 ID 또는 댓글 ID
 * @param userId - 사용자 UID
 * @param callback - 좋아요 상태 변경 시 호출될 콜백
 * @returns 리스너 해제 함수 (언마운트 시 호출 필수)
 *
 * 기능:
 * - `/likes/{type}-{nodeId}-{uid}` 경로를 실시간으로 감시
 * - 좋아요 상태 변경 시 자동으로 callback 호출
 * - Unsubscribe 함수 반환 (메모리 누수 방지)
 *
 * 사용 예시:
 * ```typescript
 * import { onMount } from 'svelte';
 * import { listenToLikeStatus } from '$lib/services/like';
 *
 * let isLiked = $state(false);
 *
 * onMount(() => {
 *   // 게시글 좋아요 상태 리스너 설정
 *   const unsubscribe = listenToLikeStatus('post', 'post-abc123', 'user-xyz789', (liked) => {
 *     console.log('좋아요 상태:', liked);
 *     isLiked = liked;
 *   });
 *
 *   // 컴포넌트 언마운트 시 리스너 해제 (중요!)
 *   return () => unsubscribe();
 * });
 * ```
 */
export function listenToLikeStatus(
  type: LikeType,
  nodeId: FirebaseKey,
  userId: UserId,
  callback: LikeStatusCallback
): () => void {
  try {
    // nodeId에서 앞의 '-' 제거 (Firebase의 오래된 push 키 형식 대응)
    const cleanNodeId = nodeId.startsWith('-') ? nodeId.substring(1) : nodeId;

    // 좋아요 경로: /likes/{type}-{cleanNodeId}-{uid}
    const likeRef = ref(database, `likes/${type}-${cleanNodeId}-${userId}`);

    // 실시간 리스너 등록
    onValue(likeRef, (snapshot) => {
      // true: 좋아요 누름, false: 안 누름
      callback(snapshot.exists());
    });

    // ⚠️ 중요: 리스너 해제 함수 반환
    // 컴포넌트 언마운트 시 메모리 누수 방지를 위해 반드시 호출
    return () => {
      off(likeRef);
    };
  } catch (error) {
    // ❌ 리스너 등록 실패
    console.error('좋아요 상태 구독 실패:', error);
    callback(false);

    // 해제 함수 반환 (에러 발생 시에도)
    return () => {
      // 정리 작업
    };
  }
}

/**
 * 특정 게시글 또는 댓글의 모든 좋아요를 조회합니다.
 *
 * @param type - 좋아요 타입 ('post' 또는 'comment')
 * @param nodeId - 게시글 ID 또는 댓글 ID
 * @returns 좋아요 목록
 *
 * 기능:
 * - `/likes/` 경로에서 `{type}-{nodeId}` 로 시작하는 모든 키 조회
 * - orderByKey() + startAt/endAt 쿼리로 효율적으로 조회
 * - 키에서 uid 추출하여 반환
 *
 * 사용 예시:
 * ```typescript
 * // 게시글 좋아요 목록 조회
 * const likes = await getLikes('post', 'post-abc123');
 *
 * // 댓글 좋아요 목록 조회
 * const likes = await getLikes('comment', 'comment-def456');
 *
 * console.log('좋아요 개수:', likes.length);
 * likes.forEach(like => {
 *   console.log('좋아요 누른 사용자:', like.uid);
 * });
 * ```
 */
export async function getLikes(
  type: LikeType,
  nodeId: FirebaseKey
): Promise<Like[]> {
  try {
    // nodeId에서 앞의 '-' 제거 (Firebase의 오래된 push 키 형식 대응)
    const cleanNodeId = nodeId.startsWith('-') ? nodeId.substring(1) : nodeId;

    // /likes/ 경로 참조
    const likesRef = ref(database, 'likes');

    // {type}-{cleanNodeId}로 시작하는 모든 키 조회
    const likesQuery = query(
      likesRef,
      orderByKey(),
      startAt(`${type}-${cleanNodeId}-`),
      endAt(`${type}-${cleanNodeId}-\uf8ff`)
    );

    // 쿼리 실행
    const snapshot = await get(likesQuery);
    const likes: Like[] = [];

    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        // 키에서 uid 추출: "{type}-{cleanNodeId}-uid" -> uid
        const key = childSnapshot.key;
        if (key) {
          const uid = key.substring(`${type}-${cleanNodeId}-`.length);
          likes.push({
            uid: uid,
            value: childSnapshot.val()
          });
        }
      });
    }

    // ✅ 좋아요 목록 반환
    return likes;
  } catch (error) {
    // ❌ 조회 실패
    console.error('좋아요 목록 조회 실패:', error);
    return [];
  }
}

/**
 * 좋아요 토글 (추가 또는 취소)
 *
 * @param type - 좋아요 타입 ('post' 또는 'comment')
 * @param nodeId - 게시글 ID 또는 댓글 ID
 * @param userId - 사용자 UID
 * @returns 토글 결과 (success, isLiked, error)
 *
 * 기능:
 * - 현재 좋아요 상태를 확인하여 자동으로 추가 또는 취소
 * - isLiked: true (좋아요 추가됨), false (좋아요 취소됨)
 *
 * 사용 예시:
 * ```typescript
 * // 게시글 좋아요 토글
 * const result = await toggleLike('post', 'post-abc123', 'user-xyz789');
 *
 * // 댓글 좋아요 토글
 * const result = await toggleLike('comment', 'comment-def456', 'user-xyz789');
 *
 * if (result.success) {
 *   if (result.isLiked) {
 *     console.log('좋아요를 추가했습니다.');
 *   } else {
 *     console.log('좋아요를 취소했습니다.');
 *   }
 * }
 * ```
 */
export async function toggleLike(
  type: LikeType,
  nodeId: FirebaseKey,
  userId: UserId
): Promise<ToggleLikeResult> {
  try {
    // 1. 현재 좋아요 상태 확인
    const isCurrentlyLiked = await checkLikeStatus(type, nodeId, userId);

    // 2. 좋아요 상태에 따라 추가 또는 취소
    let result: AddLikeResult | RemoveLikeResult;
    if (isCurrentlyLiked) {
      // 이미 좋아요를 눌렀으면 취소
      result = await removeLike(type, nodeId, userId);
    } else {
      // 아직 좋아요를 누르지 않았으면 추가
      result = await addLike(type, nodeId, userId);
    }

    // 3. 결과 반환
    if (result.success) {
      return {
        success: true,
        isLiked: !isCurrentlyLiked  // 새로운 상태
      };
    } else {
      return {
        success: false,
        isLiked: isCurrentlyLiked,  // 기존 상태 유지
        error: result.error,
        errorMessage: result.errorMessage
      };
    }
  } catch (error) {
    // ❌ 토글 실패
    const errorInfo = handleFirebaseError(error, 'toggleLike');
    return {
      success: false,
      isLiked: false,
      error: errorInfo.key,
      errorMessage: errorInfo.message
    };
  }
}

// ============================================================================
// 하위 호환성을 위한 래퍼 함수들
// ============================================================================

/**
 * @deprecated getPostLikes 대신 getLikes('post', nodeId)를 사용하세요.
 *
 * 특정 게시글의 모든 좋아요를 조회합니다.
 *
 * @param postId - 게시글 ID
 * @returns 좋아요 목록
 */
export async function getPostLikes(postId: FirebaseKey): Promise<PostLike[]> {
  return getLikes('post', postId);
}
