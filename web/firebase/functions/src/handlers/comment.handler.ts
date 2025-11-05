/**
 * 댓글 생성/삭제 시 비즈니스 로직 처리
 */

import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger";
import {CommentData, PostData} from "../types";

/**
 * 댓글 생성 시 게시글 commentCount 동기화 및 통계 업데이트
 *
 * 수행 작업:
 * 1. 게시글의 commentCount 업데이트
 * 2. 부모 댓글의 commentCount 업데이트 (대댓글인 경우)
 * 3. 카테고리 통계 업데이트: /categories/{category}/commentCount +1
 * 4. 전체 댓글 통계 업데이트: /stats/counters/comment +1
 *
 * @param {string} commentId - 댓글 ID
 * @param {CommentData} commentData - 댓글 데이터
 * @returns {Promise<{success: boolean; postId?: string; commentId: string; error?: string}>} 처리 결과
 */
export async function handleCommentCreate(
  commentId: string,
  commentData: CommentData
): Promise<{success: boolean; postId?: string; commentId: string; error?: string}> {
  logger.info("새 댓글 생성 처리 시작 (Flat Style)", {
    commentId,
    postId: commentData.postId ?? null,
    uid: commentData.uid ?? null,
    parentId: commentData.parentId ?? null,
  });

  // postId 필수 확인
  if (!commentData.postId) {
    logger.error("댓글 데이터에 postId 필드가 없습니다.", {
      commentId,
    });
    return {success: false, error: "Missing postId in comment data", commentId};
  }

  const db = admin.database();
  const postId = commentData.postId;

  // 📝 게시글의 commentCount를 1 증가 (ServerValue.increment() 사용)
  // - 모든 댓글을 조회하지 않으므로 성능 향상
  // - 동시성 안전함 (서버 측 증가 연산)
  const updates = {} as Record<string, unknown>;
  updates[`posts/${postId}/commentCount`] =
    admin.database.ServerValue.increment(1);
  await db.ref().update(updates);

  logger.info("댓글 수 증가 완료 (ServerValue.INCREMENT 사용)", {
    postId,
    commentId,
  });

  // 📝 부모 댓글의 commentCount를 1 증가 (대댓글인 경우)
  // - parentId가 null이 아닌 경우에만 실행
  // - ServerValue.increment()를 사용하여 동시성 안전하게 1 증가
  if (commentData.parentId) {
    const parentUpdates = {} as Record<string, unknown>;
    parentUpdates[`comments/${commentData.parentId}/commentCount`] =
      admin.database.ServerValue.increment(1);
    await db.ref().update(parentUpdates);

    logger.info("부모 댓글의 commentCount 증가 완료", {
      parentId: commentData.parentId,
      commentId,
    });
  }

  // 📊 카테고리 통계 업데이트: commentCount +1
  // ServerValue.increment()를 사용하여 동시성 안전하게 1 증가
  const postSnapshot = await db.ref(`/posts/${postId}`).once("value");
  const postData = postSnapshot.val() as PostData | null;

  if (postData?.category) {
    const categoryUpdates = {} as Record<string, unknown>;
    categoryUpdates[`categories/${postData.category}/commentCount`] =
      admin.database.ServerValue.increment(1);
    await db.ref().update(categoryUpdates);
  }

  // 📊 전체 댓글 통계 업데이트: /stats/counters/comment +1
  // ServerValue.increment()를 사용하여 동시성 안전하게 1 증가
  const statsUpdates = {} as Record<string, unknown>;
  statsUpdates["stats/counters/comment"] =
    admin.database.ServerValue.increment(1);
  await db.ref().update(statsUpdates);
  logger.info("전체 댓글 통계 업데이트 완료 (comment +1)", {commentId});

  return {
    success: true,
    postId,
    commentId,
  };
}

/**
 * 댓글 삭제 시 통계 업데이트
 *
 * 수행 작업:
 * 1. 게시글의 commentCount 감소
 * 2. 부모 댓글의 commentCount 감소 (대댓글인 경우)
 * 3. 카테고리 통계 업데이트: /categories/{category}/commentCount -1
 * 4. 전체 댓글 통계 업데이트: /stats/counters/comment -1
 *
 * @param {CommentData} commentData - 삭제된 댓글 데이터
 * @returns {Promise<{success: boolean}>} 처리 결과
 */
export async function handleCommentDelete(
  commentData: CommentData
): Promise<{success: boolean}> {
  logger.info("댓글 삭제 처리 시작 (Flat Style)", {
    postId: commentData.postId ?? null,
    parentId: commentData.parentId ?? null,
  });

  const db = admin.database();

  // 게시글의 commentCount 감소
  if (commentData.postId) {
    const updates = {} as Record<string, unknown>;
    updates[`posts/${commentData.postId}/commentCount`] =
      admin.database.ServerValue.increment(-1);
    await db.ref().update(updates);
  }

  // 📝 부모 댓글의 commentCount를 1 감소 (대댓글인 경우)
  // - parentId가 null이 아닌 경우에만 실행
  // - ServerValue.increment(-1)를 사용하여 동시성 안전하게 1 감소
  if (commentData.parentId) {
    const parentUpdates = {} as Record<string, unknown>;
    parentUpdates[`comments/${commentData.parentId}/commentCount`] =
      admin.database.ServerValue.increment(-1);
    await db.ref().update(parentUpdates);

    logger.info("부모 댓글의 commentCount 감소 완료", {
      parentId: commentData.parentId,
    });
  }

  // 📊 카테고리 통계 업데이트: commentCount -1
  // ServerValue.increment(-1)를 사용하여 동시성 안전하게 1 감소
  if (commentData.postId) {
    const postSnapshot = await db
      .ref(`/posts/${commentData.postId}`)
      .once("value");
    const postData = postSnapshot.val() as PostData | null;

    if (postData?.category) {
      const categoryUpdates = {} as Record<string, unknown>;
      categoryUpdates[`categories/${postData.category}/commentCount`] =
        admin.database.ServerValue.increment(-1);
      await db.ref().update(categoryUpdates);
    }
  }

  // 📊 전체 댓글 통계 업데이트: /stats/counters/comment -1
  // ServerValue.increment(-1)를 사용하여 동시성 안전하게 1 감소
  const statsUpdates = {} as Record<string, unknown>;
  statsUpdates["stats/counters/comment"] =
    admin.database.ServerValue.increment(-1);
  await db.ref().update(statsUpdates);
  logger.info("전체 댓글 통계 업데이트 완료 (comment -1)");

  return {success: true};
}
