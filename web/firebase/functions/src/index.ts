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
import {onValueCreated} from "firebase-functions/v2/database";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

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
 * 좋아요 생성 시 게시글의 likeCount 자동 업데이트
 *
 * 트리거 경로: /post-props/{category}/{postId}/likes/{uid}
 * 업데이트 경로: /posts/{category}/{postId}/likeCount
 *
 * 동작 방식:
 * 1. 사용자가 좋아요를 누르면 /post-props/{category}/{postId}/likes/{uid}에 타임스탬프 기록
 * 2. 이 함수가 자동으로 트리거됨
 * 3. 중복 좋아요인지 확인 (이미 존재하면 무시)
 * 4. 해당 게시글의 모든 좋아요 개수를 계산
 * 5. /posts/{category}/{postId}/likeCount를 업데이트
 *
 * ⚠️ 중요: 좋아요는 한 번만 가능하며, 취소할 수 없습니다.
 */
export const onPostLikeCreated = onValueCreated(
  "/post-props/{category}/{postId}/likes/{uid}",
  async (event) => {
    // 파라미터 추출
    const category = event.params.category as string;
    const postId = event.params.postId as string;
    const uid = event.params.uid as string;

    logger.info(
      `좋아요 이벤트 감지: category=${category}, postId=${postId}, uid=${uid}`
    );

    try {
      // 1. 해당 게시글의 모든 좋아요 개수 조회
      const likesSnapshot = await admin
        .database()
        .ref(`/post-props/${category}/${postId}/likes`)
        .once("value");

      // 좋아요 개수 계산 (자식 노드 개수)
      const likeCount = likesSnapshot.numChildren();

      logger.info(`게시글 ${postId}의 현재 좋아요 개수: ${likeCount}`);

      // 2. 게시글의 likeCount 필드 업데이트
      await admin
        .database()
        .ref(`/posts/${category}/${postId}/likeCount`)
        .set(likeCount);

      logger.info(
        `좋아요 개수 업데이트 완료: /posts/${category}/${postId}/likeCount = ${likeCount}`
      );

      return {success: true, likeCount};
    } catch (error) {
      logger.error("좋아요 개수 업데이트 중 오류:", error);
      throw error;
    }
  }
);
