/**
 * 댓글 서비스 API
 *
 * Firebase Realtime Database와 상호작용하는 댓글 관련 함수들을 제공합니다.
 * 댓글 생성, 조회, 수정, 삭제 기능을 구현합니다.
 *
 * 데이터 구조:
 * /comments/
 *   {postId}/
 *     {commentId}/
 *       uid: "사용자 UID"
 *       content: "댓글 내용"
 *       depth: 1 (댓글 깊이, 1부터 시작, 최대 12)
 *       order: "00001,0000,000,000,000,000,000,000,000,000,000,000"
 *       parentId: null (부모 댓글 ID, 첫 번째 레벨은 null)
 *       createdAt: 1234567890 (Unix timestamp 밀리초)
 *       updatedAt: 1234567890 (Unix timestamp 밀리초)
 *
 * 참고:
 * - 댓글 작성자 정보(displayName, photoUrl)는 author 필드로 저장하지 않고,
 *   실시간으로 /users/{uid}/ 경로에서 가져와서 화면에 표시합니다.
 * - 카테고리 정보는 게시글 ID만으로 댓글을 조회할 수 있으므로 경로에 포함하지 않습니다.
 *
 * 사용 예시:
 * import { createTopLevelComment } from '$lib/services/comment.js';
 *
 * // 첫 번째 레벨 댓글 생성
 * const result = await createTopLevelComment('post-id-123', 'community', 'user-uid-456', '댓글 내용입니다.');
 */

import { database } from '../utils/firebase.js';
import { ref, push, set, get, runTransaction } from 'firebase/database';
import { handleFirebaseError } from '../utils/error-handler.js';

/**
 * 첫 번째 레벨 댓글의 order 생성
 * @param {number} noOfComments - 현재 게시글의 총 댓글 수
 * @returns {string} order 문자열
 *
 * order 형식:
 * - L0 (첫 번째 레벨): 5자리 (00000~99999)
 * - L1 (두 번째 레벨): 4자리 (0000~9999)
 * - L2~L11 (세 번째 레벨 이후): 3자리 (000~999)
 *
 * 예시:
 * - createFirstLevelOrder(1) => "00001,0000,000,000,000,000,000,000,000,000,000,000"
 * - createFirstLevelOrder(2) => "00002,0000,000,000,000,000,000,000,000,000,000,000"
 */
function createFirstLevelOrder(noOfComments) {
  // 기본 order 문자열 생성 (모두 0으로 초기화)
  // L0: 5자리, L1: 4자리, L2~L11: 3자리
  const parts = ['00000', '0000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000'];

  // depth 0 (첫 번째 레벨)에 noOfComments 값 추가
  const computed = 0 + noOfComments;
  parts[0] = String(computed).padStart(5, '0');  // 5자리로 패딩

  return parts.join(',');
}

/**
 * 자식 댓글의 order 생성
 * @param {string} parentOrder - 부모 댓글의 order 문자열
 * @param {number} parentDepth - 부모 댓글의 depth (1부터 시작)
 * @param {number} noOfComments - 현재 게시글의 총 댓글 수
 * @returns {string} order 문자열
 *
 * 예시:
 * - parentOrder = "00001,0000,000,...", parentDepth = 1, noOfComments = 6
 *   => "00001,0006,000,000,000,000,000,000,000,000,000,000"
 * - parentOrder = "00001,0006,000,...", parentDepth = 2, noOfComments = 10
 *   => "00001,0006,010,000,000,000,000,000,000,000,000,000"
 */
function createChildOrder(parentOrder, parentDepth, noOfComments) {
  // depth가 12 이상이면 부모 order를 그대로 반환
  if (parentDepth >= 12) {
    return parentOrder;
  }

  // order 문자열을 배열로 분리
  const parts = parentOrder.split(',');

  // 자식의 depth는 부모 depth와 동일한 인덱스 사용
  // (depth는 1부터 시작하지만, 배열 인덱스는 0부터 시작하므로)
  const childDepth = parentDepth;  // 배열 인덱스로 사용

  // 현재 depth의 값에 noOfComments 추가
  const currentValue = parseInt(parts[childDepth]);
  const computed = currentValue + noOfComments;

  // depth에 따라 패딩 자릿수 결정
  // L1 (두 번째 레벨): 4자리, L2 이후: 3자리
  let padding = 3;  // 기본값: 3자리
  if (childDepth === 1) {
    padding = 4;  // 두 번째 레벨은 4자리
  }

  parts[childDepth] = String(computed).padStart(padding, '0');

  return parts.join(',');
}

/**
 * 첫 번째 레벨 댓글 작성
 *
 * @param {string} postId - 게시글 ID
 * @param {string} postCategory - 게시글 카테고리 (commentCount 업데이트용)
 * @param {string} userId - 작성자 UID
 * @param {string} content - 댓글 내용
 * @returns {Promise<{success: boolean, commentId?: string, error?: string}>}
 *
 * 기능:
 * - 새 댓글을 `/comments/{postId}/` 경로에 저장 (카테고리 없이 postId만 사용)
 * - 자동으로 commentId 생성 (Firebase push key)
 * - order 필드 생성 (5자리 첫 레벨)
 * - createdAt, updatedAt 자동 설정 (현재 시간)
 * - 게시글의 commentCount 증가 (트랜잭션 사용)
 * - author 필드는 저장하지 않음 (UI에서 /users/{uid}/ 에서 실시간으로 가져옴)
 *
 * 사용 예시:
 * const result = await createTopLevelComment(
 *   'post-abc123',
 *   'community',
 *   'user-uid-456',
 *   '첫 번째 댓글입니다.'
 * );
 *
 * if (result.success) {
 *   console.log('댓글 ID:', result.commentId);
 * }
 */
export async function createTopLevelComment(postId, postCategory, userId, content) {
  try {
    // 1. 현재 게시글의 commentCount 가져오기
    const postRef = ref(database, `posts/${postCategory}/${postId}`);
    const postSnapshot = await get(postRef);
    const currentCommentCount = postSnapshot.val()?.commentCount || 0;

    // 2. 새 댓글 ID 생성 (카테고리 없이 postId만 사용)
    const commentsRef = ref(database, `comments/${postId}`);
    const newCommentRef = push(commentsRef);

    // 3. order 생성 (첫 번째 레벨)
    const noOfComments = currentCommentCount + 1;
    const order = createFirstLevelOrder(noOfComments);

    // 4. 댓글 데이터 생성
    // 참고: author 필드는 저장하지 않고, UI에서 /users/{uid}/ 경로에서 실시간으로 가져옴
    const commentData = {
      uid: userId,
      content: content,
      depth: 1,  // 첫 번째 레벨은 depth 1
      order: order,
      parentId: null,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };

    // 5. 댓글 저장 및 게시글의 commentCount 증가 (트랜잭션 사용 권장)
    await runTransaction(postRef, (post) => {
      if (post) {
        post.commentCount = (post.commentCount || 0) + 1;
      }
      return post;
    });

    await set(newCommentRef, commentData);

    // ✅ 댓글 생성 성공
    return {
      success: true,
      commentId: newCommentRef.key
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
 * 자식 댓글 (대댓글) 작성
 *
 * @param {string} postId - 게시글 ID
 * @param {string} postCategory - 게시글 카테고리 (commentCount 업데이트용)
 * @param {string} parentCommentId - 부모 댓글 ID
 * @param {string} userId - 작성자 UID
 * @param {string} content - 댓글 내용
 * @returns {Promise<{success: boolean, commentId?: string, error?: string}>}
 *
 * 기능:
 * - 부모 댓글의 자식으로 댓글 작성
 * - order 필드 생성 (부모 order 기반)
 * - depth는 부모 depth + 1
 * - 최대 깊이 12단계까지 지원
 *
 * 사용 예시:
 * const result = await createChildComment(
 *   'post-abc123',
 *   'community',
 *   'comment-parent-id',
 *   'user-uid-456',
 *   '대댓글입니다.'
 * );
 */
export async function createChildComment(postId, postCategory, parentCommentId, userId, content) {
  try {
    // 1. 부모 댓글 정보 가져오기 (카테고리 없이 postId만 사용)
    const parentRef = ref(database, `comments/${postId}/${parentCommentId}`);
    const parentSnapshot = await get(parentRef);
    const parentComment = parentSnapshot.val();

    if (!parentComment) {
      throw new Error('부모 댓글을 찾을 수 없습니다.');
    }

    // 2. 현재 게시글의 commentCount 가져오기
    const postRef = ref(database, `posts/${postCategory}/${postId}`);
    const postSnapshot = await get(postRef);
    const currentCommentCount = postSnapshot.val()?.commentCount || 0;

    // 3. 새 댓글 ID 생성 (카테고리 없이 postId만 사용)
    const commentsRef = ref(database, `comments/${postId}`);
    const newCommentRef = push(commentsRef);

    // 4. order 생성 (자식 댓글)
    const noOfComments = currentCommentCount + 1;
    const order = createChildOrder(parentComment.order, parentComment.depth, noOfComments);

    // 5. 댓글 데이터 생성
    // 참고: author 필드는 저장하지 않고, UI에서 /users/{uid}/ 경로에서 실시간으로 가져옴
    const commentData = {
      uid: userId,
      content: content,
      depth: parentComment.depth + 1,  // 부모 depth + 1
      order: order,
      parentId: parentCommentId,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };

    // 6. depth가 12를 초과하는지 확인
    if (commentData.depth > 12) {
      throw new Error('댓글 깊이는 최대 12단계까지만 지원됩니다.');
    }

    // 7. 댓글 저장 및 게시글의 commentCount 증가
    await runTransaction(postRef, (post) => {
      if (post) {
        post.commentCount = (post.commentCount || 0) + 1;
      }
      return post;
    });

    await set(newCommentRef, commentData);

    // ✅ 댓글 생성 성공
    return {
      success: true,
      commentId: newCommentRef.key
    };
  } catch (error) {
    // ❌ 댓글 생성 실패
    const errorInfo = handleFirebaseError(error, 'createChildComment');
    return {
      success: false,
      error: errorInfo.key,  // i18n 키 반환
      errorMessage: errorInfo.message  // 원본 메시지 (디버깅용)
    };
  }
}
