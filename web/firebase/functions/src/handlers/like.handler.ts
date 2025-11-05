/**
 * 좋아요 추가/취소 시 비즈니스 로직 처리
 */

import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger";
import {parseLikeId} from "../utils/like.utils";
import {getPostReference} from "../utils/post.utils";
import {getCommentReference} from "../utils/comment.utils";

/**
 * 좋아요 추가 시 likeCount 증가 및 통계 업데이트
 *
 * 수행 작업:
 * 1. likeId 파싱 (type, nodeId, uid 추출)
 * 2. 게시글/댓글의 likeCount +1
 * 3. 전체 좋아요 통계 업데이트: /stats/counters/like +1
 *
 * @param {string} likeId - 좋아요 ID
 *   (형식: "post-<post-id>-<uid>" 또는 "comment-<comment-id>-<uid>")
 * @returns {Promise<{success: boolean; type?: string; nodeId?: string;
 *   uid?: string; likeId: string; error?: string}>} 처리 결과
 */
export async function handleLikeCreate(
  likeId: string
): Promise<{success: boolean; type?: string; nodeId?: string; uid?: string; likeId: string; error?: string}> {
  logger.info(`🎉 좋아요 추가 처리 시작 (통합 좋아요): likeId=${likeId}`);

  try {
    // ===== 1️⃣ likeId 파싱 =====
    logger.debug("likeId 파싱 시작", {likeId});
    const parsed = parseLikeId(likeId);

    if (!parsed) {
      logger.error("❌ likeId 파싱 실패 (형식 오류)", {likeId});
      return {success: false, error: "Invalid likeId format", likeId};
    }

    const {type, nodeId, uid} = parsed;
    logger.info("✅ likeId 파싱 성공", {likeId, type, nodeId, uid});

    const db = admin.database();

    // ===== 2️⃣ 게시글/댓글 좋아요 카운트 증가 =====
    if (type === "post") {
      logger.debug("게시글 좋아요 처리 시작", {nodeId, uid});

      const postInfo = await getPostReference(nodeId);
      if (!postInfo) {
        logger.error("❌ 좋아요 대상 게시글을 찾을 수 없습니다.", {
          nodeId,
          likeId,
          searchPath: `/posts/-${nodeId}`,
        });
        return {success: false, error: "Post not found", likeId};
      }

      logger.info("✅ 게시글 찾음, likeCount 업데이트 시작", {
        nodeId,
        postData: postInfo.snapshot.val(),
      });

      // 🚀 increment()를 사용하여 likeCount 1 증가 (동시성 안전)
      await postInfo.ref
        .child("likeCount")
        .set(admin.database.ServerValue.increment(1));

      logger.info("✅ 게시글 좋아요 개수 증가 완료", {
        path: `/posts/${nodeId}/likeCount`,
        operation: "increment(+1)",
      });
    } else if (type === "comment") {
      logger.debug("댓글 좋아요 처리 시작", {nodeId, uid});

      const commentInfo = await getCommentReference(nodeId);
      if (!commentInfo) {
        logger.error("❌ 좋아요 대상 댓글을 찾을 수 없습니다.", {
          nodeId,
          likeId,
          searchPath: `/comments/-${nodeId}`,
        });
        return {success: false, error: "Comment not found", likeId};
      }

      logger.info("✅ 댓글 찾음, likeCount 업데이트 시작", {
        nodeId,
        commentData: commentInfo.snapshot.val(),
      });

      // 🚀 increment()를 사용하여 likeCount 1 증가 (동시성 안전)
      await commentInfo.ref
        .child("likeCount")
        .set(admin.database.ServerValue.increment(1));

      logger.info("✅ 댓글 좋아요 개수 증가 완료", {
        path: `/comments/${nodeId}/likeCount`,
        operation: "increment(+1)",
      });
    }

    // ===== 3️⃣ 전체 좋아요 통계 업데이트 =====
    logger.debug("전체 좋아요 통계 업데이트 준비", {
      path: "stats/counters/like",
      operation: "increment(+1)",
    });

    const statsUpdates = {} as Record<string, unknown>;
    statsUpdates["stats/counters/like"] = admin.database.ServerValue.increment(1);

    logger.debug("DB 업데이트 시작", {
      updatePath: "stats/counters/like",
      updates: statsUpdates,
    });

    await db.ref().update(statsUpdates);

    logger.info("✅ 전체 좋아요 통계 업데이트 완료", {
      path: "stats/counters/like",
      operation: "increment(+1)",
      likeId,
    });

    logger.info("🎉 좋아요 처리 완료", {
      success: true,
      type,
      nodeId,
      uid,
      likeId,
      timestamp: new Date().toISOString(),
    });

    return {success: true, type, nodeId, uid, likeId};
  } catch (error) {
    logger.error("❌ 좋아요 개수 업데이트 중 오류 발생", {
      error,
      likeId,
      errorMessage: error instanceof Error ? error.message : String(error),
      errorStack: error instanceof Error ? error.stack : undefined,
    });
    throw error;
  }
}

/**
 * 좋아요 취소 시 likeCount 감소 및 통계 업데이트
 *
 * 수행 작업:
 * 1. likeId 파싱 (type, nodeId, uid 추출)
 * 2. 게시글/댓글의 likeCount -1
 * 3. 전체 좋아요 통계 업데이트: /stats/counters/like -1
 *
 * @param {string} likeId - 좋아요 ID
 *   (형식: "post-<post-id>-<uid>" 또는 "comment-<comment-id>-<uid>")
 * @returns {Promise<{success: boolean; type?: string; nodeId?: string;
 *   uid?: string; likeId: string; error?: string}>} 처리 결과
 */
export async function handleLikeCancel(
  likeId: string
): Promise<{success: boolean; type?: string; nodeId?: string; uid?: string; likeId: string; error?: string}> {
  logger.info(`💔 좋아요 취소 처리 시작 (통합 좋아요): likeId=${likeId}`);

  try {
    // ===== 1️⃣ likeId 파싱 =====
    logger.debug("likeId 파싱 시작", {likeId});
    const parsed = parseLikeId(likeId);

    if (!parsed) {
      logger.error("❌ likeId 파싱 실패 (형식 오류)", {likeId});
      return {success: false, error: "Invalid likeId format", likeId};
    }

    const {type, nodeId, uid} = parsed;
    logger.info("✅ likeId 파싱 성공", {likeId, type, nodeId, uid});

    const db = admin.database();

    // ===== 2️⃣ 게시글/댓글 좋아요 카운트 감소 =====
    if (type === "post") {
      logger.debug("게시글 좋아요 취소 처리 시작", {nodeId, uid});

      const postInfo = await getPostReference(nodeId);
      if (!postInfo) {
        logger.error("❌ 좋아요 대상 게시글을 찾을 수 없습니다.", {
          nodeId,
          likeId,
          searchPath: `/posts/-${nodeId}`,
        });
        return {success: false, error: "Post not found", likeId};
      }

      logger.info("✅ 게시글 찾음, likeCount 업데이트 시작", {
        nodeId,
        postData: postInfo.snapshot.val(),
      });

      // 🚀 increment(-1)을 사용하여 likeCount 1 감소 (동시성 안전)
      await postInfo.ref
        .child("likeCount")
        .set(admin.database.ServerValue.increment(-1));

      logger.info("✅ 게시글 좋아요 개수 감소 완료", {
        path: `/posts/${nodeId}/likeCount`,
        operation: "increment(-1)",
      });
    } else if (type === "comment") {
      logger.debug("댓글 좋아요 취소 처리 시작", {nodeId, uid});

      const commentInfo = await getCommentReference(nodeId);
      if (!commentInfo) {
        logger.error("❌ 좋아요 대상 댓글을 찾을 수 없습니다.", {
          nodeId,
          likeId,
          searchPath: `/comments/-${nodeId}`,
        });
        return {success: false, error: "Comment not found", likeId};
      }

      logger.info("✅ 댓글 찾음, likeCount 업데이트 시작", {
        nodeId,
        commentData: commentInfo.snapshot.val(),
      });

      // 🚀 increment(-1)을 사용하여 likeCount 1 감소 (동시성 안전)
      await commentInfo.ref
        .child("likeCount")
        .set(admin.database.ServerValue.increment(-1));

      logger.info("✅ 댓글 좋아요 개수 감소 완료", {
        path: `/comments/${nodeId}/likeCount`,
        operation: "increment(-1)",
      });
    }

    // ===== 3️⃣ 전체 좋아요 통계 업데이트 =====
    logger.debug("전체 좋아요 통계 업데이트 준비", {
      path: "stats/counters/like",
      operation: "increment(-1)",
    });

    const statsUpdates = {} as Record<string, unknown>;
    statsUpdates["stats/counters/like"] = admin.database.ServerValue.increment(-1);

    logger.debug("DB 업데이트 시작", {
      updatePath: "stats/counters/like",
      updates: statsUpdates,
    });

    await db.ref().update(statsUpdates);

    logger.info("✅ 전체 좋아요 통계 업데이트 완료", {
      path: "stats/counters/like",
      operation: "increment(-1)",
      likeId,
    });

    logger.info("💔 좋아요 취소 처리 완료", {
      success: true,
      type,
      nodeId,
      uid,
      likeId,
      timestamp: new Date().toISOString(),
    });

    return {success: true, type, nodeId, uid, likeId};
  } catch (error) {
    logger.error("❌ 좋아요 개수 업데이트 중 오류 발생", {
      error,
      likeId,
      errorMessage: error instanceof Error ? error.message : String(error),
      errorStack: error instanceof Error ? error.stack : undefined,
    });
    throw error;
  }
}
