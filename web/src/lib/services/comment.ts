/**
 * 댓글 서비스 API
 *
 * Firebase Realtime Database와 상호작용하는 댓글 관련 함수들을 제공합니다.
 * 댓글 생성, 조회, 계층 구조 관리 기능을 구현합니다.
 *
 * 데이터 구조 (Flat Style):
 * /comments/
 *   <comment-id>/
 *     postId: "게시글 ID"
 *     uid: "사용자 UID"
 *     content: "댓글 내용"
 *     depth: 1~12 (댓글 깊이)
 *     order: "abc-def-ghi" (계층적 정렬 문자열)
 *     parentId: "부모 댓글 ID" (최상위는 null)
 *     createdAt: 1234567890 (Unix timestamp 밀리초)
 *     updatedAt: 1234567890 (Unix timestamp 밀리초)
 *
 * 사용 예시:
 * import { createTopLevelComment, createChildComment, listenToComments } from '$lib/services/comment';
 *
 * // 최상위 댓글 생성
 * const result = await createTopLevelComment('post-id-123', 'user-uid', '첫 번째 댓글');
 *
 * // 대댓글 생성
 * const childResult = await createChildComment('comment-id-456', 'user-uid', '대댓글입니다');
 *
 * // 게시글 댓글 실시간 조회
 * const unsubscribe = listenToComments('post-id-123', (comments) => {
 *   console.log(comments);
 * });
 */

import { database } from '../utils/firebase.js';
import { ref, push, get, update, increment, query, orderByChild, equalTo, onValue, off } from 'firebase/database';
import { handleFirebaseError } from '../utils/error-handler.js';
import type {
  CreateTopLevelCommentParams,
  CreateChildCommentParams,
  CreateCommentResult,
  CommentsCallback
} from '../types/comment';
import type { FirebaseKey } from '../types/common';

/**
 * 랜덤 알파벳 3자리 문자열을 생성합니다.
 * 계층적 정렬을 위한 order 문자열 생성에 사용됩니다.
 *
 * @returns 랜덤 알파벳 3자리 문자열 (예: 'abc', 'xyz')
 *
 * 기능:
 * - a-z 소문자 알파벳 26글자 중 3개를 랜덤 선택
 * - order 필드의 각 세그먼트로 사용됨
 *
 * 예시:
 * - getRandomSegment() → 'mno'
 * - getRandomSegment() → 'def'
 */
function getRandomSegment(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < 3; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * 최상위 댓글을 생성합니다.
 *
 * @param params - 댓글 생성 파라미터 { postId, userId, content }
 * @returns 생성 결과 (success, commentId, error)
 *
 * 기능:
 * - 새 댓글을 `/comments/` 경로에 저장 (flat style)
 * - depth: 1 (최상위 댓글)
 * - parentId: null
 * - order: 랜덤 3자리 문자열 (예: 'abc')
 * - `/posts/{postId}/commentCount` 를 +1 증가
 * - 한 번의 update 호출로 두 경로 동시 업데이트
 *
 * 사용 예시:
 * ```typescript
 * const result = await createTopLevelComment({
 *   postId: 'post-abc123',
 *   userId: 'user-xyz789',
 *   content: '좋은 글 감사합니다!'
 * });
 *
 * if (result.success) {
 *   console.log('댓글 ID:', result.commentId);
 * }
 * ```
 */
export async function createTopLevelComment(
  params: CreateTopLevelCommentParams
): Promise<CreateCommentResult> {
  const { postId, userId, content } = params;

  try {
    // 현재 시간 (Unix timestamp 밀리초)
    const now = Date.now();

    // 랜덤 order 생성 (3자리: 'abc')
    const orderSegment = getRandomSegment();

    // 댓글 객체 생성
    const commentData = {
      postId: postId,
      uid: userId,
      content: content,
      depth: 1,  // 최상위 댓글
      order: orderSegment,  // 'abc'
      parentId: null,  // 부모 없음
      createdAt: now,
      updatedAt: now
    };

    // 1. 새 댓글 생성 (push key 미리 생성)
    const commentsRef = ref(database, 'comments');
    const newCommentRef = push(commentsRef);
    const commentId = newCommentRef.key;

    if (!commentId) {
      throw new Error('Failed to generate comment ID');
    }

    // 2. 업데이트할 경로와 값 준비
    const updates: Record<string, any> = {};

    // 댓글 데이터 저장
    updates[`comments/${commentId}`] = commentData;

    // 게시글 댓글 개수 증가
    updates[`posts/${postId}/commentCount`] = increment(1);

    // 3. 한 번의 update로 두 경로 동시 업데이트
    await update(ref(database), updates);

    // ✅ 댓글 생성 성공
    return {
      success: true,
      commentId: commentId
    };
  } catch (error) {
    // ❌ 댓글 생성 실패
    const errorInfo = handleFirebaseError(error, 'createTopLevelComment');
    return {
      success: false,
      error: errorInfo.key,  // i18n 키 반환
      errorMessage: errorInfo.message  // 원본 메시지 (디버깅용)
    };
  }
}

/**
 * 대댓글을 생성합니다.
 *
 * @param params - 대댓글 생성 파라미터 { parentCommentId, userId, content }
 * @returns 생성 결과 (success, commentId, error)
 *
 * 기능:
 * - 부모 댓글 정보 조회 (postId, depth, order)
 * - depth 검증 (최대 12까지)
 * - 새 order 생성: 부모 order + '-' + 랜덤 3자리 (예: 'abc-def')
 * - `/comments/` 경로에 저장
 * - `/posts/{postId}/commentCount` 를 +1 증가
 * - 한 번의 update 호출로 두 경로 동시 업데이트
 *
 * 사용 예시:
 * ```typescript
 * const result = await createChildComment({
 *   parentCommentId: 'comment-abc123',
 *   userId: 'user-xyz789',
 *   content: '감사합니다!'
 * });
 *
 * if (result.success) {
 *   console.log('대댓글 ID:', result.commentId);
 * }
 * ```
 */
export async function createChildComment(
  params: CreateChildCommentParams
): Promise<CreateCommentResult> {
  const { parentCommentId, userId, content } = params;

  try {
    // 1. 부모 댓글 정보 조회
    const parentCommentRef = ref(database, `comments/${parentCommentId}`);
    const parentSnapshot = await get(parentCommentRef);

    if (!parentSnapshot.exists()) {
      // 부모 댓글이 존재하지 않음
      return {
        success: false,
        error: 'error.comment.parentNotFound',
        errorMessage: 'Parent comment not found'
      };
    }

    const parentComment = parentSnapshot.val();
    const parentDepth = parentComment.depth || 1;
    const parentOrder = parentComment.order || '';
    const postId = parentComment.postId;

    // 2. depth 검증 (최대 12까지)
    const newDepth = parentDepth + 1;
    if (newDepth > 12) {
      // 최대 깊이 초과
      return {
        success: false,
        error: 'error.comment.maxDepthExceeded',
        errorMessage: 'Maximum comment depth exceeded (12)'
      };
    }

    // 3. 현재 시간
    const now = Date.now();

    // 4. 랜덤 order 생성
    const orderSegment = getRandomSegment();
    const newOrder = `${parentOrder}-${orderSegment}`;

    // 5. 댓글 객체 생성
    const commentData = {
      postId: postId,
      uid: userId,
      content: content,
      depth: newDepth,
      order: newOrder,  // 부모 order + '-' + 랜덤 3자리
      parentId: parentCommentId,
      createdAt: now,
      updatedAt: now
    };

    // 6. 새 댓글 생성 (push key 미리 생성)
    const commentsRef = ref(database, 'comments');
    const newCommentRef = push(commentsRef);
    const commentId = newCommentRef.key;

    if (!commentId) {
      throw new Error('Failed to generate comment ID');
    }

    // 7. 업데이트할 경로와 값 준비
    const updates: Record<string, any> = {};

    // 댓글 데이터 저장
    updates[`comments/${commentId}`] = commentData;

    // 게시글 댓글 개수 증가
    updates[`posts/${postId}/commentCount`] = increment(1);

    // 8. 한 번의 update로 두 경로 동시 업데이트
    await update(ref(database), updates);

    // ✅ 대댓글 생성 성공
    return {
      success: true,
      commentId: commentId
    };
  } catch (error) {
    // ❌ 대댓글 생성 실패
    const errorInfo = handleFirebaseError(error, 'createChildComment');
    return {
      success: false,
      error: errorInfo.key,  // i18n 키 반환
      errorMessage: errorInfo.message  // 원본 메시지 (디버깅용)
    };
  }
}

/**
 * 특정 게시글의 모든 댓글을 실시간으로 감시합니다.
 * 데이터 변경 시 자동으로 callback을 호출합니다.
 *
 * @param postId - 게시글 ID
 * @param callback - 댓글 목록 변경 시 호출될 콜백
 * @returns 리스너 해제 함수 (언마운트 시 호출 필수)
 *
 * 기능:
 * - 특정 게시글의 댓글을 실시간으로 감시 (flat style)
 * - orderByChild('postId') + equalTo 쿼리로 게시글별 필터링
 * - order 필드로 계층적 정렬 (부모 → 자식 순서)
 * - 데이터 변경 시 자동으로 callback 호출
 * - Unsubscribe 함수 반환 (메모리 누수 방지)
 *
 * 사용 예시:
 * ```typescript
 * import { onMount } from 'svelte';
 * import { listenToComments } from '$lib/services/comment';
 *
 * let comments = $state([]);
 *
 * onMount(() => {
 *   // 게시글 댓글 리스너 설정
 *   const unsubscribe = listenToComments('post-abc123', (newComments) => {
 *     console.log('댓글 목록:', newComments);
 *     comments = newComments;
 *   });
 *
 *   // 컴포넌트 언마운트 시 리스너 해제 (중요!)
 *   return () => unsubscribe();
 * });
 * ```
 */
export function listenToComments(
  postId: FirebaseKey,
  callback: CommentsCallback
): () => void {
  try {
    // Firebase 경로: /comments/ (flat style)
    const commentsRef = ref(database, 'comments');

    // 쿼리 생성: postId로 필터링
    const commentsQuery = query(
      commentsRef,
      orderByChild('postId'),
      equalTo(postId)
    );

    // 실시간 리스너 등록
    onValue(commentsQuery, (snapshot) => {
      if (snapshot.exists()) {
        // 데이터 존재: 댓글 배열로 변환
        const commentsData: any[] = [];
        snapshot.forEach((childSnapshot) => {
          commentsData.push({
            commentId: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        // order 필드로 정렬 (계층적 순서: 'abc', 'abc-def', 'abc-def-ghi', 'abc-xyz', 'mno')
        commentsData.sort((a, b) => {
          const orderA = a.order || '';
          const orderB = b.order || '';
          return orderA.localeCompare(orderB);
        });

        // 콜백 호출
        callback(commentsData);
      } else {
        // 데이터 없음: 빈 배열 반환
        callback([]);
      }
    });

    // ⚠️ 중요: 리스너 해제 함수 반환
    // 컴포넌트 언마운트 시 메모리 누수 방지를 위해 반드시 호출
    return () => {
      off(commentsRef);
    };
  } catch (error) {
    // ❌ 리스너 등록 실패
    console.error('댓글 조회 실패:', error);
    callback([]);

    // 해제 함수 반환 (에러 발생 시에도)
    return () => {
      // 정리 작업
    };
  }
}
