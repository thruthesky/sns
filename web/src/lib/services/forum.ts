/**
 * 게시판 서비스 API
 *
 * Firebase Realtime Database와 상호작용하는 게시판 관련 함수들을 제공합니다.
 * 게시글 생성, 조회, 수정, 삭제 기능을 구현합니다.
 *
 * 데이터 구조 (Flat Style):
 * /posts/
 *   <post-id>/
 *     uid: "사용자 UID"
 *     title: "게시글 제목"
 *     content: "게시글 내용"
 *     author: "작성자 displayName"
 *     category: "카테고리" (community, qna, news, market)
 *     order: "community-1234567890" (<category>-<timestamp> 형식)
 *     createdAt: 1234567890 (Unix timestamp 밀리초)
 *     updatedAt: 1234567890 (Unix timestamp 밀리초)
 *     likeCount: 0
 *     commentCount: 0
 *
 * 사용 예시:
 * import { createPost, listenToPosts } from '$lib/services/forum';
 *
 * // 게시글 생성
 * const result = await createPost('community', 'uid-123', '홍길동', '제목', '내용');
 *
 * // 게시글 조회 (실시간, 카테고리별)
 * const unsubscribe = listenToPosts('community', 10, (posts) => {
 *   console.log(posts);
 * });
 *
 * // 정리
 * unsubscribe();
 */

import { database } from '../utils/firebase.js';
import { ref, push, update, remove, get, query, orderByChild, limitToLast, startAt, endAt, onValue, off } from 'firebase/database';
import { handleFirebaseError } from '../utils/error-handler.js';
import type {
  PostCategory,
  CreatePostResult,
  UpdatePostParams,
  UpdatePostResult,
  DeletePostResult,
  PostsCallback
} from '../types/post';
import type { UserId, FirebaseKey } from '../types/common';

/**
 * 새 게시글을 Firebase Realtime Database에 저장합니다.
 *
 * @param category - 게시판 카테고리 (community, qna, news, market)
 * @param uid - 작성자 UID
 * @param author - 작성자 표시명
 * @param title - 게시글 제목
 * @param content - 게시글 내용
 * @param urls - 첨부 파일 URL 목록 (선택)
 * @returns 생성 결과 (success, postId, error)
 *
 * 기능:
 * - 새 게시글을 `/posts/` 경로에 저장 (flat style)
 * - 자동으로 postId 생성 (Firebase push key)
 * - order 필드 자동 생성 (<category>-<timestamp> 형식)
 * - createdAt, updatedAt 자동 설정 (현재 시간)
 * - likeCount, commentCount 초기화
 * - 첨부 파일 URL 배열 저장 (선택)
 *
 * 사용 예시:
 * ```typescript
 * const result = await createPost(
 *   'community',
 *   'user-uid-123',
 *   '홍길동',
 *   '첫 번째 게시글',
 *   '안녕하세요! 첫 게시글입니다.',
 *   ['https://storage.googleapis.com/...']
 * );
 *
 * if (result.success) {
 *   console.log('게시글 ID:', result.postId);
 * }
 * ```
 */
export async function createPost(
  category: PostCategory,
  uid: UserId,
  author: string,
  title: string,
  content: string,
  urls?: string[]
): Promise<CreatePostResult> {
  try {
    // 현재 시간 (Unix timestamp 밀리초)
    const now = Date.now();

    // order 생성: <category>-<timestamp> 형식
    const order = `${category}-${now}`;

    // 게시글 객체 생성
    const postData: any = {
      uid: uid,
      title: title,
      content: content,
      author: author,
      category: category,
      order: order,  // 카테고리별 정렬을 위한 필드
      createdAt: now,
      updatedAt: now,
      likeCount: 0,
      commentCount: 0
    };

    // 첨부 파일 URL 추가 (있는 경우)
    if (urls && urls.length > 0) {
      postData.urls = urls;
    }

    // Firebase 경로: /posts/ (flat style)
    const postsRef = ref(database, 'posts');

    // push() - Firebase가 자동으로 고유한 key 생성
    const newPostRef = await push(postsRef, postData);

    // ✅ 게시글 생성 성공
    return {
      success: true,
      postId: newPostRef.key || undefined
    };
  } catch (error) {
    // ❌ 게시글 생성 실패
    const errorInfo = handleFirebaseError(error, 'createPost');
    return {
      success: false,
      error: errorInfo.key,  // i18n 키 반환
      errorMessage: errorInfo.message  // 원본 메시지 (디버깅용)
    };
  }
}

/**
 * 특정 카테고리의 게시글을 실시간으로 감시합니다.
 * 데이터 변경 시 자동으로 callback을 호출합니다.
 *
 * @param category - 게시판 카테고리
 * @param limit - 가져올 최신 게시글 수 (기본값: 10)
 * @param callback - 게시글 목록 변경 시 호출될 콜백
 * @returns 리스너 해제 함수 (언마운트 시 호출 필수)
 *
 * 기능:
 * - 특정 카테고리의 게시글을 실시간으로 감시 (flat style)
 * - orderByChild('order') + startAt/endAt 쿼리로 카테고리별 필터링
 * - 최신 N개의 게시글을 가져옴 (기본값: 10개)
 * - 데이터 변경 시 자동으로 callback 호출
 * - Unsubscribe 함수 반환 (메모리 누수 방지)
 *
 * 사용 예시:
 * ```typescript
 * import { onMount } from 'svelte';
 * import { listenToPosts } from '$lib/services/forum';
 *
 * let posts = $state([]);
 *
 * onMount(() => {
 *   // community 카테고리 게시글 리스너 설정
 *   const unsubscribe = listenToPosts('community', 10, (newPosts) => {
 *     console.log('게시글 목록:', newPosts);
 *     posts = newPosts;
 *   });
 *
 *   // 컴포넌트 언마운트 시 리스너 해제 (중요!)
 *   return () => unsubscribe();
 * });
 * ```
 */
export function listenToPosts(
  category: PostCategory,
  limit: number = 10,
  callback: PostsCallback
): () => void {
  try {
    // Firebase 경로: /posts/ (flat style)
    const postsRef = ref(database, 'posts');

    // 쿼리 생성: order 필드로 카테고리별 필터링
    // order 형식: <category>-<timestamp>
    // startAt('community-'): community로 시작하는 order
    // endAt('community-\uf8ff'): community로 시작하는 모든 값의 마지막
    const postsQuery = query(
      postsRef,
      orderByChild('order'),
      startAt(`${category}-`),
      endAt(`${category}-\uf8ff`),
      limitToLast(limit)
    );

    // 실시간 리스너 등록
    onValue(postsQuery, (snapshot) => {
      if (snapshot.exists()) {
        // 데이터 존재: 게시글 배열로 변환 (역순: 최신순)
        const postsData: any[] = [];
        snapshot.forEach((childSnapshot) => {
          postsData.push({
            postId: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        // ⚠️ 중요: limitToLast()는 오름차순이므로 역순으로 정렬
        postsData.reverse();

        // 콜백 호출
        callback(postsData);
      } else {
        // 데이터 없음: 빈 배열 반환
        callback([]);
      }
    });

    // ⚠️ 중요: 리스너 해제 함수 반환
    // 컴포넌트 언마운트 시 메모리 누수 방지를 위해 반드시 호출
    return () => {
      off(postsRef);
    };
  } catch (error) {
    // ❌ 리스너 등록 실패
    console.error('게시글 조회 실패:', error);
    callback([]);

    // 해제 함수 반환 (에러 발생 시에도)
    return () => {
      // 정리 작업
    };
  }
}

/**
 * 기존 게시글을 수정합니다.
 * 본인이 작성한 글만 수정 가능합니다.
 *
 * @param postId - 게시글 ID
 * @param updates - 수정할 내용 { title?: string, content?: string, urls?: string[] }
 * @returns 수정 결과 (success, error)
 *
 * 기능:
 * - 기존 게시글의 제목, 내용, 첨부 파일 수정 (flat style)
 * - updatedAt 자동 갱신
 * - 본인 작성 글만 수정 가능 (보안 규칙에서 확인)
 *
 * 사용 예시:
 * ```typescript
 * const result = await updatePost('post-id-123', {
 *   title: '수정된 제목',
 *   content: '수정된 내용',
 *   urls: ['https://storage.googleapis.com/...']
 * });
 * ```
 */
export async function updatePost(
  postId: FirebaseKey,
  updates: UpdatePostParams
): Promise<UpdatePostResult> {
  try {
    // Firebase 경로: /posts/{postId} (flat style)
    const postRef = ref(database, `posts/${postId}`);

    // 1. 게시글 데이터 읽기 - commentCount 확인
    const snapshot = await get(postRef);
    if (!snapshot.exists()) {
      return {
        success: false,
        error: 'error.db.objectNotFound',
        errorMessage: 'Post not found'
      };
    }

    const postData = snapshot.val();

    // 2. commentCount 확인 - 댓글이 있으면 수정 불가
    if (postData.commentCount && postData.commentCount > 0) {
      return {
        success: false,
        error: '댓글이달려있어수정불가',
        errorMessage: 'Cannot edit post with comments'
      };
    }

    // 3. 수정 데이터에 updatedAt 추가
    const updateData: any = {
      ...updates,
      updatedAt: Date.now()
    };

    // 4. update() - 특정 필드만 수정
    await update(postRef, updateData);

    // ✅ 게시글 수정 성공
    return {
      success: true
    };
  } catch (error) {
    // ❌ 게시글 수정 실패
    const errorInfo = handleFirebaseError(error, 'updatePost');
    return {
      success: false,
      error: errorInfo.key,  // i18n 키 반환
      errorMessage: errorInfo.message  // 원본 메시지 (디버깅용)
    };
  }
}

/**
 * 게시글을 삭제합니다.
 * 본인이 작성한 글만 삭제 가능합니다.
 *
 * @param postId - 게시글 ID
 * @returns 삭제 결과 (success, error)
 *
 * 기능:
 * - 게시글 완전 삭제 (flat style)
 * - 본인 작성 글만 삭제 가능 (보안 규칙에서 확인)
 *
 * 사용 예시:
 * ```typescript
 * const result = await deletePost('post-id-123');
 *
 * if (result.success) {
 *   console.log('게시글이 삭제되었습니다.');
 * }
 * ```
 */
export async function deletePost(
  postId: FirebaseKey
): Promise<DeletePostResult> {
  try {
    // Firebase 경로: /posts/{postId} (flat style)
    const postRef = ref(database, `posts/${postId}`);

    // 1. 게시글 데이터 읽기 - commentCount 확인
    const snapshot = await get(postRef);
    if (!snapshot.exists()) {
      return {
        success: false,
        error: 'error.db.objectNotFound',
        errorMessage: 'Post not found'
      };
    }

    const postData = snapshot.val();

    // 2. commentCount 확인 - 댓글이 있으면 삭제 불가
    if (postData.commentCount && postData.commentCount > 0) {
      return {
        success: false,
        error: '댓글이달려있어삭제불가',
        errorMessage: 'Cannot delete post with comments'
      };
    }

    // 3. remove() - 데이터 삭제
    await remove(postRef);

    // ✅ 게시글 삭제 성공
    return {
      success: true
    };
  } catch (error) {
    // ❌ 게시글 삭제 실패
    const errorInfo = handleFirebaseError(error, 'deletePost');
    return {
      success: false,
      error: errorInfo.key,  // i18n 키 반환
      errorMessage: errorInfo.message  // 원본 메시지 (디버깅용)
    };
  }
}
