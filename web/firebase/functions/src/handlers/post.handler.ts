/**
 * 게시글 생성/삭제 시 비즈니스 로직 처리
 */

import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger";
import {PostData} from "../types";

/**
 * 게시글 생성 시 기본 필드 보정 및 통계 업데이트
 *
 * 수행 작업:
 * 1. likeCount, commentCount 초기화
 * 2. 카테고리 통계 업데이트: /categories/{category}/postCount +1
 * 3. 전체 글 통계 업데이트: /stats/counters/post +1
 *
 * @param {string} postId - 게시글 ID
 * @param {PostData} postData - 게시글 데이터
 * @returns {Promise<{success: boolean; postId: string; category?: string}>} 처리 결과
 */
export async function handlePostCreate(
  postId: string,
  postData: PostData
): Promise<{success: boolean; postId: string; category?: string}> {
  logger.info("새 게시글 생성 처리 시작 (Flat Style)", {
    postId,
    category: postData.category ?? null,
    uid: postData.uid ?? null,
  });

  const updates: Record<string, unknown> = {};

  // likeCount 초기화
  if (typeof postData.likeCount !== "number") {
    updates[`posts/${postId}/likeCount`] = 0;
  }

  // commentCount 초기화
  if (typeof postData.commentCount !== "number") {
    updates[`posts/${postId}/commentCount`] = 0;
  }

  if (Object.keys(updates).length > 0) {
    await admin.database().ref().update(updates);
    logger.info("게시글 필드 초기화 완료", {postId});
  }

  // 📊 카테고리 통계 업데이트: postCount +1
  // ServerValue.increment()를 사용하여 동시성 안전하게 1 증가
  if (postData.category) {
    const categoryUpdates = {} as Record<string, unknown>;
    categoryUpdates[`categories/${postData.category}/postCount`] =
      admin.database.ServerValue.increment(1);
    await admin.database().ref().update(categoryUpdates);
  }

  // 📊 전체 글 통계 업데이트: /stats/counters/post +1
  // ServerValue.increment()를 사용하여 동시성 안전하게 1 증가
  const statsUpdates = {} as Record<string, unknown>;
  statsUpdates["stats/counters/post"] = admin.database.ServerValue.increment(1);
  await admin.database().ref().update(statsUpdates);
  logger.info("전체 글 통계 업데이트 완료 (post +1)", {postId});

  return {
    success: true,
    postId,
    category: postData.category,
  };
}

/**
 * 게시글 삭제 시 통계 업데이트
 *
 * 수행 작업:
 * 1. 카테고리 통계 업데이트: /categories/{category}/postCount -1
 * 2. 전체 글 통계 업데이트: /stats/counters/post -1
 *
 * @param {PostData} postData - 삭제된 게시글 데이터
 * @returns {Promise<{success: boolean}>} 처리 결과
 */
export async function handlePostDelete(
  postData: PostData
): Promise<{success: boolean}> {
  logger.info("게시글 삭제 처리 시작 (Flat Style)", {
    category: postData.category ?? null,
  });

  // 📊 카테고리 통계 업데이트: postCount -1
  // ServerValue.increment(-1)를 사용하여 동시성 안전하게 1 감소
  if (postData.category) {
    const categoryUpdates = {} as Record<string, unknown>;
    categoryUpdates[`categories/${postData.category}/postCount`] =
      admin.database.ServerValue.increment(-1);
    await admin.database().ref().update(categoryUpdates);
  }

  // 📊 전체 글 통계 업데이트: /stats/counters/post -1
  // ServerValue.increment(-1)를 사용하여 동시성 안전하게 1 감소
  const statsUpdates = {} as Record<string, unknown>;
  statsUpdates["stats/counters/post"] =
    admin.database.ServerValue.increment(-1);
  await admin.database().ref().update(statsUpdates);
  logger.info("전체 글 통계 업데이트 완료 (post -1)");

  return {success: true};
}
