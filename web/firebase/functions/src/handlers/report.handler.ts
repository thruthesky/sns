/**
 * 신고 추가/취소 시 비즈니스 로직 처리
 */

import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger";
import {parseReportId} from "../utils/report.utils";
import {getPostReference} from "../utils/post.utils";
import {getCommentReference} from "../utils/comment.utils";

/**
 * 신고 추가 시 reportCount 증가 및 통계 업데이트
 *
 * 수행 작업:
 * 1. reportId 파싱 (type, nodeId, uid 추출)
 * 2. 게시글/댓글의 reportCount +1
 * 3. 전체 신고 통계 업데이트: /stats/counters/report +1
 *
 * @param {string} reportId - 신고 ID
 *   (형식: "post-<post-id>-<uid>" 또는 "comment-<comment-id>-<uid>")
 * @returns {Promise<{success: boolean; type?: string; nodeId?: string;
 *   uid?: string; reportId: string; error?: string}>} 처리 결과
 */
export async function handleReportCreate(
  reportId: string
): Promise<{success: boolean; type?: string; nodeId?: string; uid?: string; reportId: string; error?: string}> {
  logger.info(`🚨 신고 추가 처리 시작 (통합 신고): reportId=${reportId}`);

  try {
    // ===== 1️⃣ reportId 파싱 =====
    logger.debug("reportId 파싱 시작", {reportId});
    const parsed = parseReportId(reportId);

    if (!parsed) {
      logger.error("❌ reportId 파싱 실패 (형식 오류)", {reportId});
      return {success: false, error: "Invalid reportId format", reportId};
    }

    const {type, nodeId, uid} = parsed;
    logger.info("✅ reportId 파싱 성공", {reportId, type, nodeId, uid});

    const db = admin.database();

    // ===== 2️⃣ 게시글/댓글 신고 카운트 증가 =====
    if (type === "post") {
      logger.debug("게시글 신고 처리 시작", {nodeId, uid});

      const postInfo = await getPostReference(nodeId);
      if (!postInfo) {
        logger.error("❌ 신고 대상 게시글을 찾을 수 없습니다.", {
          nodeId,
          reportId,
          searchPath: `/posts/-${nodeId}`,
        });
        return {success: false, error: "Post not found", reportId};
      }

      logger.info("✅ 게시글 찾음, reportCount 업데이트 시작", {
        nodeId,
        postData: postInfo.snapshot.val(),
      });

      // 🚀 increment()를 사용하여 reportCount 1 증가 (동시성 안전)
      await postInfo.ref
        .child("reportCount")
        .set(admin.database.ServerValue.increment(1));

      logger.info("✅ 게시글 신고 개수 증가 완료", {
        path: `/posts/${nodeId}/reportCount`,
        operation: "increment(+1)",
      });
    } else if (type === "comment") {
      logger.debug("댓글 신고 처리 시작", {nodeId, uid});

      const commentInfo = await getCommentReference(nodeId);
      if (!commentInfo) {
        logger.error("❌ 신고 대상 댓글을 찾을 수 없습니다.", {
          nodeId,
          reportId,
          searchPath: `/comments/-${nodeId}`,
        });
        return {success: false, error: "Comment not found", reportId};
      }

      logger.info("✅ 댓글 찾음, reportCount 업데이트 시작", {
        nodeId,
        commentData: commentInfo.snapshot.val(),
      });

      // 🚀 increment()를 사용하여 reportCount 1 증가 (동시성 안전)
      await commentInfo.ref
        .child("reportCount")
        .set(admin.database.ServerValue.increment(1));

      logger.info("✅ 댓글 신고 개수 증가 완료", {
        path: `/comments/${nodeId}/reportCount`,
        operation: "increment(+1)",
      });
    }

    // ===== 3️⃣ 전체 신고 통계 업데이트 =====
    logger.debug("전체 신고 통계 업데이트 준비", {
      path: "stats/counters/report",
      operation: "increment(+1)",
    });

    const statsUpdates = {} as Record<string, unknown>;
    statsUpdates["stats/counters/report"] = admin.database.ServerValue.increment(1);

    logger.debug("DB 업데이트 시작", {
      updatePath: "stats/counters/report",
      updates: statsUpdates,
    });

    await db.ref().update(statsUpdates);

    logger.info("✅ 전체 신고 통계 업데이트 완료", {
      path: "stats/counters/report",
      operation: "increment(+1)",
      reportId,
    });

    logger.info("🚨 신고 처리 완료", {
      success: true,
      type,
      nodeId,
      uid,
      reportId,
      timestamp: new Date().toISOString(),
    });

    return {success: true, type, nodeId, uid, reportId};
  } catch (error) {
    logger.error("❌ 신고 개수 업데이트 중 오류 발생", {
      error,
      reportId,
      errorMessage: error instanceof Error ? error.message : String(error),
      errorStack: error instanceof Error ? error.stack : undefined,
    });
    throw error;
  }
}

/**
 * 신고 취소 시 reportCount 감소 및 통계 업데이트
 *
 * 수행 작업:
 * 1. reportId 파싱 (type, nodeId, uid 추출)
 * 2. 게시글/댓글의 reportCount -1
 * 3. 전체 신고 통계 업데이트: /stats/counters/report -1
 *
 * @param {string} reportId - 신고 ID
 *   (형식: "post-<post-id>-<uid>" 또는 "comment-<comment-id>-<uid>")
 * @returns {Promise<{success: boolean; type?: string; nodeId?: string;
 *   uid?: string; reportId: string; error?: string}>} 처리 결과
 */
export async function handleReportDelete(
  reportId: string
): Promise<{success: boolean; type?: string; nodeId?: string; uid?: string; reportId: string; error?: string}> {
  logger.info(`🗑️ 신고 취소 처리 시작 (통합 신고): reportId=${reportId}`);

  try {
    // ===== 1️⃣ reportId 파싱 =====
    logger.debug("reportId 파싱 시작", {reportId});
    const parsed = parseReportId(reportId);

    if (!parsed) {
      logger.error("❌ reportId 파싱 실패 (형식 오류)", {reportId});
      return {success: false, error: "Invalid reportId format", reportId};
    }

    const {type, nodeId, uid} = parsed;
    logger.info("✅ reportId 파싱 성공", {reportId, type, nodeId, uid});

    const db = admin.database();

    // ===== 2️⃣ 게시글/댓글 신고 카운트 감소 =====
    if (type === "post") {
      logger.debug("게시글 신고 취소 처리 시작", {nodeId, uid});

      const postInfo = await getPostReference(nodeId);
      if (!postInfo) {
        logger.error("❌ 신고 대상 게시글을 찾을 수 없습니다.", {
          nodeId,
          reportId,
          searchPath: `/posts/-${nodeId}`,
        });
        return {success: false, error: "Post not found", reportId};
      }

      logger.info("✅ 게시글 찾음, reportCount 업데이트 시작", {
        nodeId,
        postData: postInfo.snapshot.val(),
      });

      // 🚀 increment(-1)을 사용하여 reportCount 1 감소 (동시성 안전)
      await postInfo.ref
        .child("reportCount")
        .set(admin.database.ServerValue.increment(-1));

      logger.info("✅ 게시글 신고 개수 감소 완료", {
        path: `/posts/${nodeId}/reportCount`,
        operation: "increment(-1)",
      });
    } else if (type === "comment") {
      logger.debug("댓글 신고 취소 처리 시작", {nodeId, uid});

      const commentInfo = await getCommentReference(nodeId);
      if (!commentInfo) {
        logger.error("❌ 신고 대상 댓글을 찾을 수 없습니다.", {
          nodeId,
          reportId,
          searchPath: `/comments/-${nodeId}`,
        });
        return {success: false, error: "Comment not found", reportId};
      }

      logger.info("✅ 댓글 찾음, reportCount 업데이트 시작", {
        nodeId,
        commentData: commentInfo.snapshot.val(),
      });

      // 🚀 increment(-1)을 사용하여 reportCount 1 감소 (동시성 안전)
      await commentInfo.ref
        .child("reportCount")
        .set(admin.database.ServerValue.increment(-1));

      logger.info("✅ 댓글 신고 개수 감소 완료", {
        path: `/comments/${nodeId}/reportCount`,
        operation: "increment(-1)",
      });
    }

    // ===== 3️⃣ 전체 신고 통계 업데이트 =====
    logger.debug("전체 신고 통계 업데이트 준비", {
      path: "stats/counters/report",
      operation: "increment(-1)",
    });

    const statsUpdates = {} as Record<string, unknown>;
    statsUpdates["stats/counters/report"] = admin.database.ServerValue.increment(-1);

    logger.debug("DB 업데이트 시작", {
      updatePath: "stats/counters/report",
      updates: statsUpdates,
    });

    await db.ref().update(statsUpdates);

    logger.info("✅ 전체 신고 통계 업데이트 완료", {
      path: "stats/counters/report",
      operation: "increment(-1)",
      reportId,
    });

    logger.info("🗑️ 신고 취소 처리 완료", {
      success: true,
      type,
      nodeId,
      uid,
      reportId,
      timestamp: new Date().toISOString(),
    });

    return {success: true, type, nodeId, uid, reportId};
  } catch (error) {
    logger.error("❌ 신고 개수 업데이트 중 오류 발생", {
      error,
      reportId,
      errorMessage: error instanceof Error ? error.message : String(error),
      errorStack: error instanceof Error ? error.stack : undefined,
    });
    throw error;
  }
}
