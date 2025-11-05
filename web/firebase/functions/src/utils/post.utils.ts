/**
 * 게시글 관련 유틸리티 함수
 */

import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

/**
 * 게시글 참조를 가져옵니다 (Flat Style).
 * - 직접 /posts/{postId} 경로에 접근합니다.
 * - postId가 '-'로 시작하지 않으면 자동으로 '-'를 붙입니다.
 * - '-'를 붙인 경로가 없으면 원본 postId로도 시도합니다.
 *
 * @param {string} postId - 게시글 ID
 * @returns {Promise} 게시글 참조 또는 null
 */
export async function getPostReference(postId: string): Promise<{
  ref: admin.database.Reference;
  snapshot: admin.database.DataSnapshot;
} | null> {
  const db = admin.database();

  logger.info("🔍 게시글 참조 조회 시작", {
    originalPostId: postId,
    startsWithDash: postId.startsWith("-"),
    postIdLength: postId.length,
  });

  // 시도 1: postId가 '-'로 시작하지 않으면 앞에 '-'를 붙임
  // Firebase의 push() 키는 '-'로 시작하는 형식입니다
  // 예: 'OdEWc-SaDELU2Y51FDy' → '-OdEWc-SaDELU2Y51FDy'
  const normalizedPostId = postId.startsWith("-") ? postId : `-${postId}`;

  logger.debug("시도 1: 정규화된 postId로 조회", {
    normalizedPostId,
    path: `/posts/${normalizedPostId}`,
  });

  let postRef = db.ref(`/posts/${normalizedPostId}`);
  let snapshot = await postRef.once("value");

  if (snapshot.exists()) {
    logger.info("✅ 게시글 찾음 (정규화된 경로)", {
      normalizedPostId,
      path: `/posts/${normalizedPostId}`,
      postData: snapshot.val(),
    });
    return {ref: postRef, snapshot};
  }

  logger.warn("⚠️ 정규화된 경로에서 게시글을 찾을 수 없음", {
    normalizedPostId,
    pathChecked: `/posts/${normalizedPostId}`,
  });

  // 시도 2: 원본 postId 그대로 조회 (정규화하지 않음)
  logger.debug("시도 2: 원본 postId로 조회", {
    originalPostId: postId,
    path: `/posts/${postId}`,
  });

  postRef = db.ref(`/posts/${postId}`);
  snapshot = await postRef.once("value");

  if (snapshot.exists()) {
    logger.info("✅ 게시글 찾음 (원본 경로)", {
      originalPostId: postId,
      path: `/posts/${postId}`,
      postData: snapshot.val(),
    });
    return {ref: postRef, snapshot};
  }

  logger.error("❌ 게시글을 찾을 수 없음 (모든 시도 실패)", {
    originalPostId: postId,
    normalizedPostId,
    pathsChecked: [
      `/posts/${normalizedPostId}`,
      `/posts/${postId}`,
    ],
  });

  return null;
}
