/**
 * 좋아요 서비스 API
 *
 * Firebase Realtime Database와 상호작용하는 좋아요 관련 함수들을 제공합니다.
 * 게시글 좋아요 추가, 취소, 상태 확인 기능을 구현합니다.
 *
 * 데이터 구조 (Flat Style):
 * /post-likes/
 *   <post-id>-<uid>: 1   # 좋아요 상태 (값: 1)
 *
 * /posts/
 *   <post-id>/
 *     likeCount: 3        # 총 좋아요 개수 (집계됨)
 *
 * 사용 예시:
 * import { addLike, removeLike, checkLikeStatus, listenToLikeStatus } from '$lib/services/like';
 *
 * // 좋아요 추가
 * const result = await addLike('post-id-123', 'user-uid-456');
 *
 * // 좋아요 취소
 * const result = await removeLike('post-id-123', 'user-uid-456');
 *
 * // 좋아요 상태 확인
 * const isLiked = await checkLikeStatus('post-id-123', 'user-uid-456');
 *
 * // 실시간 좋아요 상태 구독
 * const unsubscribe = listenToLikeStatus('post-id-123', 'user-uid-456', (isLiked) => {
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
  PostLike,
  LikeStatusCallback
} from '../types/like';
import type { UserId, FirebaseKey } from '../types/common';

/**
 * 게시글에 좋아요를 추가합니다.
 *
 * @param postId - 게시글 ID
 * @param userId - 사용자 UID
 * @returns 좋아요 추가 결과 (success, error)
 *
 * 기능:
 * - `/post-likes/{postId}-{uid}` 경로에 값 1 저장
 * - `/posts/{postId}/likeCount` 를 +1 증가
 * - 한 번의 update 호출로 두 경로 동시 업데이트
 * - 중복 방지: 같은 사용자가 이미 좋아요를 눌렀으면 덮어쓰기 (값은 항상 1)
 *
 * 사용 예시:
 * ```typescript
 * const result = await addLike('post-abc123', 'user-xyz789');
 *
 * if (result.success) {
 *   console.log('좋아요를 추가했습니다.');
 * }
 * ```
 */
export async function addLike(
  postId: FirebaseKey,
  userId: UserId
): Promise<AddLikeResult> {
  try {
    // 업데이트할 경로와 값 준비
    const updates: Record<string, any> = {};

    // 1. /post-likes/{postId}-{uid} 에 값 1 저장
    updates[`post-likes/${postId}-${userId}`] = 1;

    // 2. /posts/{postId}/likeCount 를 +1 증가
    updates[`posts/${postId}/likeCount`] = increment(1);

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
 * 게시글에서 좋아요를 취소합니다.
 *
 * @param postId - 게시글 ID
 * @param userId - 사용자 UID
 * @returns 좋아요 취소 결과 (success, error)
 *
 * 기능:
 * - `/post-likes/{postId}-{uid}` 경로를 삭제 (null로 설정)
 * - `/posts/{postId}/likeCount` 를 -1 감소
 * - 한 번의 update 호출로 두 경로 동시 업데이트
 *
 * 사용 예시:
 * ```typescript
 * const result = await removeLike('post-abc123', 'user-xyz789');
 *
 * if (result.success) {
 *   console.log('좋아요를 취소했습니다.');
 * }
 * ```
 */
export async function removeLike(
  postId: FirebaseKey,
  userId: UserId
): Promise<RemoveLikeResult> {
  try {
    // 업데이트할 경로와 값 준비
    const updates: Record<string, any> = {};

    // 1. /post-likes/{postId}-{uid} 삭제 (null로 설정)
    updates[`post-likes/${postId}-${userId}`] = null;

    // 2. /posts/{postId}/likeCount 를 -1 감소
    updates[`posts/${postId}/likeCount`] = increment(-1);

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
 * @param postId - 게시글 ID
 * @param userId - 사용자 UID
 * @returns true: 좋아요 누름, false: 안 누름
 *
 * 기능:
 * - `/post-likes/{postId}-{uid}` 경로 존재 여부 확인
 * - 한 번의 get 호출로 빠르게 확인
 *
 * 사용 예시:
 * ```typescript
 * const isLiked = await checkLikeStatus('post-abc123', 'user-xyz789');
 *
 * if (isLiked) {
 *   console.log('이미 좋아요를 눌렀습니다.');
 * } else {
 *   console.log('아직 좋아요를 누르지 않았습니다.');
 * }
 * ```
 */
export async function checkLikeStatus(
  postId: FirebaseKey,
  userId: UserId
): Promise<boolean> {
  try {
    // 좋아요 경로: /post-likes/{postId}-{uid}
    const likeRef = ref(database, `post-likes/${postId}-${userId}`);

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
 * @param postId - 게시글 ID
 * @param userId - 사용자 UID
 * @param callback - 좋아요 상태 변경 시 호출될 콜백
 * @returns 리스너 해제 함수 (언마운트 시 호출 필수)
 *
 * 기능:
 * - `/post-likes/{postId}-{uid}` 경로를 실시간으로 감시
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
 *   // 좋아요 상태 리스너 설정
 *   const unsubscribe = listenToLikeStatus('post-abc123', 'user-xyz789', (liked) => {
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
  postId: FirebaseKey,
  userId: UserId,
  callback: LikeStatusCallback
): () => void {
  try {
    // 좋아요 경로: /post-likes/{postId}-{uid}
    const likeRef = ref(database, `post-likes/${postId}-${userId}`);

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
 * 특정 게시글의 모든 좋아요를 조회합니다.
 *
 * @param postId - 게시글 ID
 * @returns 좋아요 목록
 *
 * 기능:
 * - `/post-likes/` 경로에서 특정 postId로 시작하는 모든 키 조회
 * - orderByKey() + startAt/endAt 쿼리로 효율적으로 조회
 * - 키에서 uid 추출하여 반환
 *
 * 사용 예시:
 * ```typescript
 * const likes = await getPostLikes('post-abc123');
 *
 * console.log('좋아요 개수:', likes.length);
 * likes.forEach(like => {
 *   console.log('좋아요 누른 사용자:', like.uid);
 * });
 * ```
 */
export async function getPostLikes(
  postId: FirebaseKey
): Promise<PostLike[]> {
  try {
    // /post-likes/ 경로 참조
    const likesRef = ref(database, 'post-likes');

    // postId로 시작하는 모든 키 조회
    const likesQuery = query(
      likesRef,
      orderByKey(),
      startAt(`${postId}-`),
      endAt(`${postId}-\uf8ff`)
    );

    // 쿼리 실행
    const snapshot = await get(likesQuery);
    const likes: PostLike[] = [];

    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        // 키에서 uid 추출: "postId-uid" -> uid
        const key = childSnapshot.key;
        if (key) {
          const uid = key.substring(postId.length + 1);
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
 * @param postId - 게시글 ID
 * @param userId - 사용자 UID
 * @returns 토글 결과 (success, isLiked, error)
 *
 * 기능:
 * - 현재 좋아요 상태를 확인하여 자동으로 추가 또는 취소
 * - isLiked: true (좋아요 추가됨), false (좋아요 취소됨)
 *
 * 사용 예시:
 * ```typescript
 * const result = await toggleLike('post-abc123', 'user-xyz789');
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
  postId: FirebaseKey,
  userId: UserId
): Promise<ToggleLikeResult> {
  try {
    // 1. 현재 좋아요 상태 확인
    const isCurrentlyLiked = await checkLikeStatus(postId, userId);

    // 2. 좋아요 상태에 따라 추가 또는 취소
    let result: AddLikeResult | RemoveLikeResult;
    if (isCurrentlyLiked) {
      // 이미 좋아요를 눌렀으면 취소
      result = await removeLike(postId, userId);
    } else {
      // 아직 좋아요를 누르지 않았으면 추가
      result = await addLike(postId, userId);
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
