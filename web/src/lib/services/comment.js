/**
 * 댓글 서비스 API
 *
 * Firebase Realtime Database와 상호작용하는 댓글 관련 함수들을 제공합니다.
 * 댓글 생성, 조회, 수정, 삭제 기능을 구현합니다.
 *
 * 데이터 구조 (Flat Style):
 * /comments/
 *   <comment-id>/
 *     postId: "게시글 ID" (소속 게시글 추적)
 *     uid: "사용자 UID"
 *     content: "댓글 내용"
 *     depth: 1 (댓글 깊이, 1부터 시작, 최대 12)
 *     order: "00001,0000,000,000,000,000,000,000,000,000,000,000"
 *     parentId: null (부모 댓글 ID, 첫 번째 레벨은 null)
 *     createdAt: 1234567890 (Unix timestamp 밀리초)
 *     updatedAt: 1234567890 (Unix timestamp 밀리초)
 *
 * 참고:
 * - 댓글 작성자 정보(displayName, photoUrl)는 author 필드로 저장하지 않고,
 *   실시간으로 /users/{uid}/ 경로에서 가져와서 화면에 표시합니다.
 * - postId 필드를 통해 어느 게시글에 속하는지 추적합니다 (flat style).
 *
 * 사용 예시:
 * import { createTopLevelComment } from '$lib/services/comment.js';
 *
 * // 첫 번째 레벨 댓글 생성
 * const result = await createTopLevelComment('post-id-123', 'user-uid-456', '댓글 내용입니다.');
 */

import { database } from '../utils/firebase.js';
import { ref, push, set, get, query, orderByChild, equalTo, onValue, off } from 'firebase/database';
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
 * @param {number} siblingCount - 같은 부모를 가진 형제 댓글들의 수
 * @returns {string} order 문자열
 *
 * 예시:
 * - parentOrder = "00001,0000,000,...", parentDepth = 1, siblingCount = 1 (첫 번째 자식)
 *   => "00001,0001,000,000,000,000,000,000,000,000,000,000"
 * - parentOrder = "00001,0001,000,...", parentDepth = 2, siblingCount = 1 (첫 번째 손자)
 *   => "00001,0001,001,000,000,000,000,000,000,000,000,000"
 * - parentOrder = "00001,0001,000,...", parentDepth = 2, siblingCount = 2 (두 번째 손자)
 *   => "00001,0001,002,000,000,000,000,000,000,000,000,000"
 */
function createChildOrder(parentOrder, parentDepth, siblingCount) {
  // depth가 12 이상이면 부모 order를 그대로 반환
  if (parentDepth >= 12) {
    return parentOrder;
  }

  // order 문자열을 배열로 분리
  const parts = parentOrder.split(',');

  // 자식의 depth는 부모 depth와 동일한 인덱스 사용
  // (depth는 1부터 시작하지만, 배열 인덱스는 0부터 시작하므로)
  const childDepth = parentDepth;  // 배열 인덱스로 사용

  // 같은 부모를 가진 형제 댓글들의 순서 번호 설정
  // (siblingCount는 이미 1부터 시작하는 값)
  const computed = siblingCount;

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
 * @param {string} userId - 작성자 UID
 * @param {string} content - 댓글 내용
 * @returns {Promise<{success: boolean, commentId?: string, error?: string}>}
 *
 * 기능:
 * - 새 댓글을 `/comments/` 경로에 저장 (flat style)
 * - postId 필드에 소속 게시글 ID 저장
 * - 자동으로 commentId 생성 (Firebase push key)
 * - order 필드 생성 (5자리 첫 레벨, 형제 댓글 수 기반)
 * - createdAt, updatedAt 자동 설정 (현재 시간)
 * - 게시글의 commentCount는 Firebase Cloud Functions에서 자동 증가됨
 * - author 필드는 저장하지 않음 (UI에서 /users/{uid}/ 에서 실시간으로 가져옴)
 *
 * 사용 예시:
 * const result = await createTopLevelComment(
 *   'post-abc123',
 *   'user-uid-456',
 *   '첫 번째 댓글입니다.'
 * );
 *
 * if (result.success) {
 *   console.log('댓글 ID:', result.commentId);
 * }
 */
export async function createTopLevelComment(postId, userId, content) {
  try {
    // 1. 해당 게시글의 첫 번째 레벨 댓글 수 조회 (parentId가 null인 댓글들)
    // order 생성을 위해 같은 레벨의 형제 댓글 수를 세어야 함
    const commentsRef = ref(database, 'comments');
    const commentsQuery = query(
      commentsRef,
      orderByChild('postId'),
      equalTo(postId)
    );
    const commentsSnapshot = await get(commentsQuery);

    let topLevelCommentCount = 0;
    if (commentsSnapshot.exists()) {
      // 모든 댓글을 순회하며 첫 번째 레벨 댓글 개수 세기 (parentId === null)
      commentsSnapshot.forEach((childSnapshot) => {
        const comment = childSnapshot.val();
        if (comment.parentId === null || comment.parentId === undefined) {
          topLevelCommentCount++;
        }
      });
    }

    // 새로 추가될 댓글의 순서 번호 (1부터 시작)
    const newTopLevelNumber = topLevelCommentCount + 1;

    // 2. 새 댓글 ID 생성 (flat style: /comments/ 경로)
    const newCommentRef = push(commentsRef);

    // 3. order 생성 (첫 번째 레벨)
    const order = createFirstLevelOrder(newTopLevelNumber);

    // 4. 댓글 데이터 생성
    // 참고: author 필드는 저장하지 않고, UI에서 /users/{uid}/ 경로에서 실시간으로 가져옴
    const commentData = {
      postId: postId,  // 소속 게시글 ID (flat style 필수 필드)
      uid: userId,
      content: content,
      depth: 1,  // 첫 번째 레벨은 depth 1
      order: order,
      parentId: null,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };

    // 5. 댓글 저장
    // 참고: commentCount는 Firebase Cloud Functions에서 자동으로 증가됨
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
 * @param {string} parentCommentId - 부모 댓글 ID
 * @param {string} userId - 작성자 UID
 * @param {string} content - 댓글 내용
 * @returns {Promise<{success: boolean, commentId?: string, error?: string}>}
 *
 * 기능:
 * - 부모 댓글의 자식으로 댓글 작성 (flat style)
 * - 부모 댓글의 postId 상속
 * - order 필드 생성 (부모 order 기반, 형제 댓글 수 기반)
 * - depth는 부모 depth + 1
 * - 최대 깊이 12단계까지 지원
 * - 게시글의 commentCount는 Firebase Cloud Functions에서 자동 증가됨
 *
 * 사용 예시:
 * const result = await createChildComment(
 *   'comment-parent-id',
 *   'user-uid-456',
 *   '대댓글입니다.'
 * );
 */
export async function createChildComment(parentCommentId, userId, content) {
  try {
    // 1. 부모 댓글 정보 가져오기 (flat style: commentId로 직접 접근)
    const parentRef = ref(database, `comments/${parentCommentId}`);
    const parentSnapshot = await get(parentRef);
    const parentComment = parentSnapshot.val();

    if (!parentComment) {
      throw new Error('부모 댓글을 찾을 수 없습니다.');
    }

    // 2. 같은 부모를 가진 형제 댓글들의 수 조회
    // (같은 parentId를 가진 댓글들의 개수를 세어서 새 댓글의 순서 결정)
    const commentsRef = ref(database, 'comments');
    const siblingsQuery = query(
      commentsRef,
      orderByChild('parentId'),
      equalTo(parentCommentId)
    );
    const siblingsSnapshot = await get(siblingsQuery);

    let siblingCount = 0;
    if (siblingsSnapshot.exists()) {
      siblingCount = siblingsSnapshot.size;
    }

    // 새로 추가될 댓글의 순서 번호 (1부터 시작)
    const newSiblingNumber = siblingCount + 1;

    // 3. 새 댓글 ID 생성 (flat style: /comments/ 경로)
    const newCommentRef = push(commentsRef);

    // 4. order 생성 (자식 댓글)
    const order = createChildOrder(parentComment.order, parentComment.depth, newSiblingNumber);

    // 5. 댓글 데이터 생성
    // 참고: author 필드는 저장하지 않고, UI에서 /users/{uid}/ 경로에서 실시간으로 가져옴
    const commentData = {
      postId: parentComment.postId,  // 부모 댓글의 postId 상속 (flat style 필수 필드)
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

    // 7. 댓글 저장
    // 참고: commentCount는 Firebase Cloud Functions에서 자동으로 증가됨
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

/**
 * 게시글의 댓글 목록을 실시간으로 감시합니다.
 * 데이터 변경 시 자동으로 callback을 호출합니다.
 *
 * @param {string} postId - 게시글 ID
 * @param {(comments: Array) => void} callback - 댓글 목록 변경 시 호출될 콜백
 * @returns {() => void} 리스너 해제 함수 (언마운트 시 호출 필수)
 *
 * 기능:
 * - 특정 게시글의 댓글을 실시간으로 감시 (flat style)
 * - postId로 댓글 필터링하고 order 필드로 정렬 (클라이언트 측)
 * - 데이터 변경 시 자동으로 callback 호출
 * - Unsubscribe 함수 반환 (메모리 누수 방지)
 *
 * 사용 예시:
 * ```javascript
 * import { onMount } from 'svelte';
 * import { listenToComments } from '$lib/services/comment.js';
 *
 * let comments = $state([]);
 *
 * onMount(() => {
 *   // 댓글 리스너 설정
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
export function listenToComments(postId, callback) {
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
    const listener = onValue(commentsQuery, (snapshot) => {
      if (snapshot.exists()) {
        // 데이터 존재: 댓글 배열로 변환
        const commentsData = [];
        snapshot.forEach((childSnapshot) => {
          commentsData.push({
            commentId: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        // order 필드로 정렬 (클라이언트 측)
        commentsData.sort((a, b) => a.order.localeCompare(b.order));

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
