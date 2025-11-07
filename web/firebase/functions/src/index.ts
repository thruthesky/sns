/**
 * Firebase Cloud Functions (Gen 2)
 * SNS 프로젝트의 백그라운드 이벤트 처리 함수들
 *
 * ⚠️ 중요: 모든 함수는 반드시 Gen 2 버전으로 작성해야 합니다.
 * - Gen 2 API: firebase-functions/v2
 * - Gen 1 API 사용 금지
 *
 * 참고: https://firebase.google.com/docs/functions/2nd-gen
 */

// Gen 2 API imports
import {setGlobalOptions} from "firebase-functions/v2";
import {onValueCreated, onValueDeleted} from "firebase-functions/v2/database";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

// 타입 임포트
import {PostData, CommentData, UserData} from "./types";

// 비즈니스 로직 핸들러 임포트
import {handlePostCreate, handlePostDelete} from "./handlers/post.handler";
import {handleCommentCreate, handleCommentDelete} from "./handlers/comment.handler";
import {handleLikeCreate, handleLikeCancel} from "./handlers/like.handler";
import {handleReportCreate, handleReportDelete} from "./handlers/report.handler";
import {handleUserCreate} from "./handlers/user.handler";

// Firebase Admin 초기화
if (!admin.apps.length) {
  admin.initializeApp();
  logger.info("Firebase Admin initialized");
}

// 비용 관리를 위한 전역 옵션 설정
// 최대 10개의 컨테이너만 동시 실행하여 예상치 못한 비용 급증 방지
setGlobalOptions({
  maxInstances: 10,
  region: "asia-southeast1", // RTDB region과 일치 필수
});

/**
 * 게시글 생성 시 기본 필드를 보정하고 카테고리 통계를 업데이트합니다 (Flat Style).
 *
 * 트리거 경로: /posts/{postId}
 *
 * 수행 작업:
 * 1. likeCount, commentCount 초기화
 * 2. 카테고리 통계 업데이트: /categories/{category}/postCount +1
 * 3. 전체 글 통계 업데이트: /stats/counters/post +1
 */
export const onPostCreate = onValueCreated("/posts/{postId}", async (event) => {
  const postId = event.params.postId as string;
  const postData = (event.data.val() || {}) as PostData;

  logger.info("새 게시글 생성 감지 (Flat Style)", {
    postId,
    category: postData.category ?? null,
    uid: postData.uid ?? null,
  });

  // 비즈니스 로직 핸들러 호출
  return await handlePostCreate(postId, postData);
});

/**
 * 댓글 생성 시 게시글의 commentCount를 동기화하고 카테고리 통계를 업데이트합니다 (Flat Style).
 *
 * 트리거 경로: /comments/{commentId}
 *
 * 수행 작업:
 * 1. 게시글의 commentCount 업데이트
 * 2. 카테고리 통계 업데이트: /categories/{category}/commentCount +1
 * 3. 전체 댓글 통계 업데이트: /stats/counters/comment +1
 */
export const onCommentCreate = onValueCreated(
  "/comments/{commentId}",
  async (event) => {
    const commentId = event.params.commentId as string;
    const commentData = (event.data.val() || {}) as CommentData;

    logger.info("새 댓글 생성 감지 (Flat Style)", {
      commentId,
      postId: commentData.postId ?? null,
      uid: commentData.uid ?? null,
    });

    // 비즈니스 로직 핸들러 호출
    return await handleCommentCreate(commentId, commentData);
  }
);

/**
 * 게시글 삭제 시 카테고리 통계를 업데이트합니다 (Flat Style).
 *
 * 트리거 경로: /posts/{postId}
 *
 * 수행 작업:
 * 1. 카테고리 통계 업데이트: /categories/{category}/postCount -1
 * 2. 전체 글 통계 업데이트: /stats/counters/post -1
 */
export const onPostDelete = onValueDeleted("/posts/{postId}", async (event) => {
  const postData = (event.data.val() || {}) as PostData;

  logger.info("게시글 삭제 감지 (Flat Style)", {
    category: postData.category ?? null,
  });

  // 비즈니스 로직 핸들러 호출
  return await handlePostDelete(postData);
});

/**
 * 댓글 삭제 시 카테고리 통계를 업데이트합니다 (Flat Style).
 *
 * 트리거 경로: /comments/{commentId}
 *
 * 수행 작업:
 * 1. 카테고리 통계 업데이트: /categories/{category}/commentCount -1
 * 2. 전체 댓글 통계 업데이트: /stats/counters/comment -1
 */
export const onCommentDelete = onValueDeleted(
  "/comments/{commentId}",
  async (event) => {
    const commentData = (event.data.val() || {}) as CommentData;

    logger.info("댓글 삭제 감지 (Flat Style)", {
      postId: commentData.postId ?? null,
    });

    // 비즈니스 로직 핸들러 호출
    return await handleCommentDelete(commentData);
  }
);

/**
 * 좋아요 추가 시 게시글 또는 댓글의 likeCount 자동 업데이트 (Flat Style)
 *
 * 트리거 경로: /likes/{likeId}
 *   - likeId 형식: "post-<post-id>-<uid>" 또는 "comment-<comment-id>-<uid>"
 *   - 예: "post-abc123-user456", "comment-xyz789-user456"
 *
 * 업데이트 경로: /posts/{postId}/likeCount 또는 /comments/{commentId}/likeCount
 *
 * 동작 방식:
 * 1. 사용자가 좋아요를 누르면 /likes/{type}-{nodeId}-{uid}에 값 1 저장
 * 2. 이 함수가 자동으로 트리거됨
 * 3. likeId를 파싱하여 타입(post/comment)과 nodeId 추출
 * 4. increment(1)을 사용하여 게시글/댓글의 likeCount 1 증가
 * 5. 모든 자식 노드를 읽지 않으므로 효율적이고 동시성 안전함
 */
export const onLike = onValueCreated("/likes/{likeId}", async (event) => {
  const likeId = event.params.likeId as string;

  logger.info("좋아요 추가 감지 (통합 좋아요)", {likeId});

  // 비즈니스 로직 핸들러 호출
  return await handleLikeCreate(likeId);
});

/**
 * 좋아요 취소 시 게시글 또는 댓글의 likeCount 자동 감소 (Flat Style)
 *
 * 트리거 경로: /likes/{likeId}
 *   - likeId 형식: "post-<post-id>-<uid>" 또는 "comment-<comment-id>-<uid>"
 *   - 예: "post-abc123-user456", "comment-xyz789-user456"
 *
 * 업데이트 경로: /posts/{postId}/likeCount 또는 /comments/{commentId}/likeCount
 *
 * 동작 방식:
 * 1. 사용자가 좋아요를 취소하면 /likes/{type}-{nodeId}-{uid}가 삭제됨
 * 2. 이 함수가 자동으로 트리거됨
 * 3. likeId를 파싱하여 타입(post/comment)과 nodeId 추출
 * 4. increment(-1)을 사용하여 게시글/댓글의 likeCount 1 감소
 * 5. 모든 자식 노드를 읽지 않으므로 효율적이고 동시성 안전함
 */
export const onCancelLike = onValueDeleted("/likes/{likeId}", async (event) => {
  const likeId = event.params.likeId as string;

  logger.info("좋아요 취소 감지 (통합 좋아요)", {likeId});

  // 비즈니스 로직 핸들러 호출
  return await handleLikeCancel(likeId);
});

/**
 * 신고 추가 시 게시글 또는 댓글의 reportCount 자동 업데이트 (Flat Style)
 *
 * 트리거 경로: /reports/{reportId}
 *   - reportId 형식: "post-<post-id>-<uid>" 또는 "comment-<comment-id>-<uid>"
 *   - 예: "post-abc123-user456", "comment-xyz789-user456"
 *
 * 업데이트 경로: /posts/{postId}/reportCount 또는 /comments/{commentId}/reportCount
 *
 * 동작 방식:
 * 1. 사용자가 신고를 하면 /reports/{type}-{nodeId}-{uid}에 신고 데이터 저장
 * 2. 이 함수가 자동으로 트리거됨
 * 3. reportId를 파싱하여 타입(post/comment)과 nodeId 추출
 * 4. increment(1)을 사용하여 게시글/댓글의 reportCount 1 증가
 * 5. /stats/counters/report 전체 신고 통계 1 증가
 * 6. 모든 자식 노드를 읽지 않으므로 효율적이고 동시성 안전함
 */
export const onReportCreate = onValueCreated("/reports/{reportId}", async (event) => {
  const reportId = event.params.reportId as string;

  logger.info("신고 추가 감지 (통합 신고)", {reportId});

  // 비즈니스 로직 핸들러 호출
  return await handleReportCreate(reportId);
});

/**
 * 신고 취소 시 게시글 또는 댓글의 reportCount 자동 감소 (Flat Style)
 *
 * 트리거 경로: /reports/{reportId}
 *   - reportId 형식: "post-<post-id>-<uid>" 또는 "comment-<comment-id>-<uid>"
 *   - 예: "post-abc123-user456", "comment-xyz789-user456"
 *
 * 업데이트 경로: /posts/{postId}/reportCount 또는 /comments/{commentId}/reportCount
 *
 * 동작 방식:
 * 1. 사용자가 신고를 취소하면 /reports/{type}-{nodeId}-{uid}가 삭제됨
 * 2. 이 함수가 자동으로 트리거됨
 * 3. reportId를 파싱하여 타입(post/comment)과 nodeId 추출
 * 4. increment(-1)을 사용하여 게시글/댓글의 reportCount 1 감소
 * 5. /stats/counters/report 전체 신고 통계 1 감소
 * 6. 모든 자식 노드를 읽지 않으므로 효율적이고 동시성 안전함
 */
export const onReportDelete = onValueDeleted("/reports/{reportId}", async (event) => {
  const reportId = event.params.reportId as string;

  logger.info("신고 취소 감지 (통합 신고)", {reportId});

  // 비즈니스 로직 핸들러 호출
  return await handleReportDelete(reportId);
});

/**
 * 사용자 등록 시 user-props 노드에 주요 필드를 분리 저장하고 createdAt을 설정합니다.
 *
 * 트리거 경로: /users/{uid}
 *
 * 수행 작업:
 * 1. createdAt 필드 자동 생성 및 /users/{uid}/createdAt 직접 저장
 * 2. handleUserCreate() 함수를 통해 모든 사용자 데이터 정규화 및 동기화 수행
 *    - updatedAt 필드 자동 생성
 *    - displayNameLowerCase 자동 생성
 *    - photoUrl 처리
 *    - /users/{uid} 노드 업데이트
 *    - /user-props/ 노드 동기화
 *    - /stats/counters/user +1 (전체 사용자 통계 업데이트)
 */
export const onUserCreate = onValueCreated("/users/{uid}", async (event) => {
  const uid = event.params.uid as string;
  const userData = (event.data.val() || {}) as UserData;

  logger.info("새 사용자 등록 감지", {
    uid,
    displayName: userData.displayName ?? null,
  });

  // 비즈니스 로직 핸들러 호출
  return await handleUserCreate(uid, userData);
});
