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

import { database } from "../utils/firebase.js";
import {
  ref,
  push,
  get,
  update,
  query,
  orderByChild,
  startAt,
  endAt,
  onValue,
  off,
} from "firebase/database";
import { handleFirebaseError } from "../utils/error-handler.js";
import type {
  CreateTopLevelCommentParams,
  CreateChildCommentParams,
  CreateCommentResult,
  CommentsCallback,
} from "../types/comment";
import type { FirebaseKey } from "../types/common";

/**
 * order 문자열을 파싱하여 각 레벨의 인덱스 배열로 변환합니다.
 * postId 접두사가 있는 경우 제거하고 숫자 부분만 파싱합니다.
 *
 * @param orderString - 쉼표로 구분된 order 문자열 (예: "post-abc123-00001,0002,003" 또는 "00001,0002,003")
 * @returns 각 레벨의 인덱스 배열 (예: [1, 2, 3])
 *
 * 예시:
 * - parseOrder("post-abc123-00001,0000,000") → [1, 0, 0]
 * - parseOrder("00003,0005,002") → [3, 5, 2] (하위 호환)
 */
function parseOrder(orderString: string): number[] {
  // postId 접두사가 있는 경우 제거 (형식: "<post-id>-00001,0000,000,...")
  // 마지막 하이픈 이후의 숫자 부분만 추출
  let numberPart = orderString;
  const lastDashIndex = orderString.lastIndexOf("-");
  if (lastDashIndex !== -1 && lastDashIndex < orderString.length - 1) {
    // 하이픈 다음에 숫자가 있는 경우 (postId 접두사로 판단)
    const afterDash = orderString.substring(lastDashIndex + 1);
    if (/^\d/.test(afterDash)) {
      // 하이픈 다음이 숫자로 시작하면 postId 접두사가 있는 것으로 판단
      numberPart = afterDash;
    }
  }

  return numberPart.split(",").map((segment) => parseInt(segment, 10));
}

/**
 * 인덱스 배열을 order 문자열로 변환합니다.
 * 각 레벨에 맞는 자릿수로 패딩하고, postId 접두사를 추가합니다.
 *
 * @param postId - 게시글 ID (접두사로 사용)
 * @param indices - 각 레벨의 인덱스 배열 (예: [1, 2, 3])
 * @returns postId 접두사가 포함된 order 문자열 (예: "post-abc123-00001,0002,003")
 *
 * 기능:
 * - postId를 접두사로 추가 (하이픈으로 구분)
 * - 0번 인덱스(L0): 5자리 (00001)
 * - 1번 인덱스(L1): 4자리 (0001)
 * - 2번 이상(L2+): 3자리 (001)
 *
 * 예시:
 * - formatOrder("post-abc123", [1, 0, 0]) → "post-abc123-00001,0000,000"
 * - formatOrder("xyz", [3, 5, 2]) → "xyz-00003,0005,002"
 */
function formatOrder(postId: string, indices: number[]): string {
  const numberPart = indices
    .map((index, level) => {
      if (level === 0) return String(index).padStart(5, "0"); // L0: 5자리
      if (level === 1) return String(index).padStart(4, "0"); // L1: 4자리
      return String(index).padStart(3, "0"); // L2+: 3자리
    })
    .join(",");

  return `${postId}-${numberPart}`;
}

/**
 * 초기 order 배열을 생성합니다.
 * 전체 12레벨까지 0으로 초기화합니다.
 *
 * @returns 12개의 0으로 초기화된 배열 [0, 0, 0, ..., 0]
 *
 * 예시:
 * - createInitialOrder() → [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 */
function createInitialOrder(): number[] {
  return Array(12).fill(0);
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
  const { postId, userId, content, urls } = params;

  try {
    // 현재 시간 (Unix timestamp 밀리초)
    const now = Date.now();

    // 1. 같은 게시글의 댓글들을 order 필드로 조회하여 최대 L0 인덱스 찾기
    // order 형식: "<post-id>-00001,0000,000,..."
    const commentsRef = ref(database, "comments");
    const topLevelQuery = query(
      commentsRef,
      orderByChild("order"),
      startAt(`${postId}-`),
      endAt(`${postId}-z`)
    );
    const snapshot = await get(topLevelQuery);

    let maxL0Index = 0;
    if (snapshot.exists()) {
      // 모든 댓글을 순회하며 depth=1인 댓글의 L0 인덱스 찾기
      snapshot.forEach((childSnapshot) => {
        const comment = childSnapshot.val();
        if (comment.depth === 1 && comment.order) {
          const indices = parseOrder(comment.order);
          const l0Index = indices[0];
          if (l0Index !== undefined && l0Index > maxL0Index) {
            maxL0Index = l0Index;
          }
        }
      });
    }

    // 2. 다음 L0 인덱스 계산
    const nextL0Index = maxL0Index + 1;

    // 3. order 배열 생성 (L0에만 nextL0Index, 나머지는 0)
    const orderIndices = createInitialOrder();
    orderIndices[0] = nextL0Index;

    // 4. order 문자열 생성 (postId 접두사 포함)
    // 예: "post-abc123-00001,0000,000,000,000,000,000,000,000,000,000,000"
    const orderString = formatOrder(postId, orderIndices);

    // 댓글 객체 생성
    const commentData: any = {
      postId: postId,
      uid: userId,
      content: content,
      depth: 1, // 최상위 댓글
      order: orderString, // "00001,0000,000,000,000,000,000,000,000,000,000,000"
      parentId: null, // 부모 없음
      createdAt: now,
      updatedAt: now,
    };

    // 첨부 파일 URL 추가 (있는 경우)
    if (urls && urls.length > 0) {
      commentData.urls = urls;
    }

    // 5. 새 댓글 생성 (push key 미리 생성)
    const newCommentRef = push(commentsRef);
    const commentId = newCommentRef.key;

    if (!commentId) {
      throw new Error("Failed to generate comment ID");
    }

    // 2. 업데이트할 경로와 값 준비
    const updates: Record<string, any> = {};

    // 댓글 데이터 저장
    updates[`comments/${commentId}`] = commentData;

    // ⚠️ commentCount 증가는 Cloud Functions에서 처리 (onCommentCreate)
    // Firebase Cloud Functions가 aggregate 연산의 단일 진실 공급원(Single Source of Truth)이므로
    // 클라이언트에서는 commentCount를 증가시키지 않습니다.

    // 3. 한 번의 update로 업데이트 실행
    await update(ref(database), updates);

    // ✅ 댓글 생성 성공
    return {
      success: true,
      commentId: commentId,
    };
  } catch (error) {
    // ❌ 댓글 생성 실패
    const errorInfo = handleFirebaseError(error, "createTopLevelComment");
    return {
      success: false,
      error: errorInfo.key, // i18n 키 반환
      errorMessage: errorInfo.message, // 원본 메시지 (디버깅용)
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
  const { parentCommentId, userId, content, urls } = params;

  try {
    // 1. 부모 댓글 정보 조회
    const parentCommentRef = ref(database, `comments/${parentCommentId}`);
    const parentSnapshot = await get(parentCommentRef);

    if (!parentSnapshot.exists()) {
      // 부모 댓글이 존재하지 않음
      return {
        success: false,
        error: "error.comment.parentNotFound",
        errorMessage: "Parent comment not found",
      };
    }

    const parentComment = parentSnapshot.val();
    const parentDepth = parentComment.depth || 1;
    const parentOrder = parentComment.order || "";
    const postId = parentComment.postId;

    // 2. depth 검증 (최대 12까지)
    const newDepth = parentDepth + 1;
    if (newDepth > 12) {
      // 최대 깊이 초과
      return {
        success: false,
        error: "error.comment.maxDepthExceeded",
        errorMessage: "Maximum comment depth exceeded (12)",
      };
    }

    // 3. 부모의 order를 파싱하여 인덱스 배열로 변환
    const parentIndices = parseOrder(parentOrder);

    // 4. 같은 게시글의 댓글들을 order 필드로 조회하여 형제 댓글의 최대 인덱스 찾기
    // order 형식: "<post-id>-00001,0000,000,..."
    const commentsRef = ref(database, "comments");
    const siblingsQuery = query(
      commentsRef,
      orderByChild("order"),
      startAt(`${postId}-`),
      endAt(`${postId}-z`)
    );
    const siblingsSnapshot = await get(siblingsQuery);

    let maxCurrentDepthIndex = 0;
    if (siblingsSnapshot.exists()) {
      // 형제 댓글들을 순회하며 현재 depth에서의 최대 인덱스 찾기
      siblingsSnapshot.forEach((childSnapshot) => {
        const sibling = childSnapshot.val();
        // 같은 부모를 가진 댓글들만 확인
        if (sibling.parentId === parentCommentId && sibling.order) {
          const siblingIndices = parseOrder(sibling.order);
          // newDepth는 1부터 시작하므로, 배열 인덱스는 newDepth - 1
          const currentDepthIndex = siblingIndices[newDepth - 1];
          if (currentDepthIndex !== undefined && currentDepthIndex > maxCurrentDepthIndex) {
            maxCurrentDepthIndex = currentDepthIndex;
          }
        }
      });
    }

    // 5. 다음 인덱스 계산
    const nextIndex = maxCurrentDepthIndex + 1;

    // 6. 새로운 order 배열 생성
    const newIndices = [...parentIndices];
    newIndices[newDepth - 1] = nextIndex;

    // 7. order 문자열 생성 (postId 접두사 포함)
    // 예: "post-abc123-00001,0002,003,..."
    const newOrder = formatOrder(postId, newIndices);

    // 8. 현재 시간
    const now = Date.now();

    // 9. 댓글 객체 생성
    const commentData: any = {
      postId: postId,
      uid: userId,
      content: content,
      depth: newDepth,
      order: newOrder, // 올바른 계층적 정렬 문자열
      parentId: parentCommentId,
      createdAt: now,
      updatedAt: now,
    };

    // 첨부 파일 URL 추가 (있는 경우)
    if (urls && urls.length > 0) {
      commentData.urls = urls;
    }

    // 10. 새 댓글 생성 (push key 미리 생성, commentsRef 재사용)
    const newCommentRef = push(commentsRef);
    const commentId = newCommentRef.key;

    if (!commentId) {
      throw new Error("Failed to generate comment ID");
    }

    // 7. 업데이트할 경로와 값 준비
    const updates: Record<string, any> = {};

    // 댓글 데이터 저장
    updates[`comments/${commentId}`] = commentData;

    // ⚠️ commentCount 증가는 Cloud Functions에서 처리 (onCommentCreate)
    // Firebase Cloud Functions가 aggregate 연산의 단일 진실 공급원(Single Source of Truth)이므로
    // 클라이언트에서는 commentCount를 증가시키지 않습니다.

    // 8. 한 번의 update로 업데이트 실행
    await update(ref(database), updates);

    // ✅ 대댓글 생성 성공
    return {
      success: true,
      commentId: commentId,
    };
  } catch (error) {
    // ❌ 대댓글 생성 실패
    const errorInfo = handleFirebaseError(error, "createChildComment");
    return {
      success: false,
      error: errorInfo.key, // i18n 키 반환
      errorMessage: errorInfo.message, // 원본 메시지 (디버깅용)
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
 * - orderByChild('order') + startAt/endAt으로 postId 기반 범위 쿼리
 * - Firebase가 order 필드로 자동 정렬하여 반환 (계층적 순서 유지)
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
    const commentsRef = ref(database, "comments");

    // 쿼리 생성: order 필드로 postId 범위 쿼리
    // order 형식: "<post-id>-00001,0000,000,..."
    // startAt과 endAt으로 특정 postId로 시작하는 댓글들만 조회
    const commentsQuery = query(
      commentsRef,
      orderByChild("order"),
      startAt(`${postId}-`),
      endAt(`${postId}-z`)
    );

    // 실시간 리스너 등록
    onValue(commentsQuery, (snapshot) => {
      if (snapshot.exists()) {
        // 데이터 존재: 댓글 배열로 변환
        const commentsData: any[] = [];
        snapshot.forEach((childSnapshot) => {
          commentsData.push({
            commentId: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        // Firebase가 이미 order로 정렬된 결과를 반환하므로 추가 정렬 불필요
        // 계층적 순서가 자동으로 유지됨:
        // "post-abc123-00001,0000,000,..." (첫 번째 댓글)
        // "post-abc123-00001,0001,000,..." (첫 번째 댓글의 첫 번째 답글)
        // "post-abc123-00002,0000,000,..." (두 번째 댓글)

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
    console.error("댓글 조회 실패:", error);
    callback([]);

    // 해제 함수 반환 (에러 발생 시에도)
    return () => {
      // 정리 작업
    };
  }
}

/**
 * 댓글을 수정합니다.
 *
 * @param commentId - 댓글 ID
 * @param updates - 수정할 필드들 { content }
 * @returns 수정 결과 (success, error)
 *
 * 주의사항:
 * - commentCount가 0보다 크면 수정 불가 (자식 댓글이 있는 경우)
 * - 수정 시 updatedAt 필드를 자동으로 갱신
 *
 * 사용 예시:
 * ```typescript
 * const result = await updateComment('comment-abc123', {
 *   content: '수정된 댓글 내용'
 * });
 *
 * if (result.success) {
 *   console.log('댓글 수정 완료');
 * } else {
 *   console.error('수정 실패:', result.error);
 * }
 * ```
 */
export async function updateComment(
  commentId: FirebaseKey,
  updates: { content: string; urls?: string[] }
): Promise<CreateCommentResult> {
  try {
    // 1. 댓글 정보 조회 (commentCount 확인)
    const commentRef = ref(database, `comments/${commentId}`);
    const commentSnapshot = await get(commentRef);

    if (!commentSnapshot.exists()) {
      return {
        success: false,
        error: "error.comment.notFound",
        errorMessage: "Comment not found",
      };
    }

    const commentData = commentSnapshot.val();
    const commentCount = commentData.commentCount || 0;

    // 2. commentCount 체크 (자식 댓글이 있으면 수정 불가)
    if (commentCount > 0) {
      return {
        success: false,
        error: "댓글이달려있어수정불가",
        errorMessage: "Cannot update comment with child comments",
      };
    }

    // 3. 댓글 수정
    const now = Date.now();
    const updateData: Record<string, any> = {};
    updateData[`comments/${commentId}/content`] = updates.content;
    updateData[`comments/${commentId}/updatedAt`] = now;

    // 첨부 파일 URL 업데이트 (있는 경우)
    if (updates.urls !== undefined) {
      if (updates.urls.length > 0) {
        updateData[`comments/${commentId}/urls`] = updates.urls;
      } else {
        // urls가 빈 배열이면 필드 삭제 (null로 설정)
        updateData[`comments/${commentId}/urls`] = null;
      }
    }

    await update(ref(database), updateData);

    // ✅ 댓글 수정 성공
    return {
      success: true,
      commentId,
    };
  } catch (error) {
    // ❌ 댓글 수정 실패
    const errorInfo = handleFirebaseError(error, "updateComment");
    return {
      success: false,
      error: errorInfo.key, // i18n 키 반환
      errorMessage: errorInfo.message, // 원본 메시지 (디버깅용)
    };
  }
}

/**
 * 댓글을 삭제합니다.
 *
 * @param commentId - 댓글 ID
 * @returns 삭제 결과 (success, error)
 *
 * 주의사항:
 * - commentCount가 0보다 크면 삭제 불가 (자식 댓글이 있는 경우)
 * - 삭제 시 게시글의 commentCount, 부모 댓글의 commentCount, 카테고리 통계, 전체 통계는 Cloud Functions에서 자동으로 감소됨
 *
 * 사용 예시:
 * ```typescript
 * const result = await deleteComment('comment-abc123');
 *
 * if (result.success) {
 *   console.log('댓글 삭제 완료');
 * } else {
 *   console.error('삭제 실패:', result.error);
 * }
 * ```
 */
export async function deleteComment(
  commentId: FirebaseKey
): Promise<CreateCommentResult> {
  try {
    // 1. 댓글 정보 조회 (commentCount 확인)
    const commentRef = ref(database, `comments/${commentId}`);
    const commentSnapshot = await get(commentRef);

    if (!commentSnapshot.exists()) {
      return {
        success: false,
        error: "error.comment.notFound",
        errorMessage: "Comment not found",
      };
    }

    const commentData = commentSnapshot.val();
    const commentCount = commentData.commentCount || 0;

    // 2. commentCount 체크 (자식 댓글이 있으면 삭제 불가)
    if (commentCount > 0) {
      return {
        success: false,
        error: "댓글이달려있어삭제불가",
        errorMessage: "Cannot delete comment with child comments",
      };
    }

    // 3. 댓글 삭제
    // ⚠️ commentCount 감소는 Cloud Functions에서 자동으로 처리됨
    // - 게시글의 commentCount -1 (onCommentDelete)
    // - 부모 댓글의 commentCount -1 (parentId가 있는 경우)
    // - 카테고리 통계 업데이트
    // - 전체 통계 업데이트
    await update(ref(database), {
      [`comments/${commentId}`]: null,
    });

    // ✅ 댓글 삭제 성공
    return {
      success: true,
      commentId,
    };
  } catch (error) {
    // ❌ 댓글 삭제 실패
    const errorInfo = handleFirebaseError(error, "deleteComment");
    return {
      success: false,
      error: errorInfo.key, // i18n 키 반환
      errorMessage: errorInfo.message, // 원본 메시지 (디버깅용)
    };
  }
}
