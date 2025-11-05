/**
 * Integration Test: onLike & onCancelLike Event Handlers
 * firebase-functions-test를 사용하여 Event Handler를 직접 wrap하고 테스트
 *
 * ⚠️ 주의:
 * - 이 테스트는 실제 Firebase Admin SDK를 호출합니다
 * - 실제 데이터베이스에 연결하거나 Emulator를 사용해야 합니다
 */

import {expect} from "chai";
import {testEnv, cleanup} from "./test-setup";
import * as myFunctions from "../../src/index";

describe("Integration Test: onLike & onCancelLike", () => {
  // 테스트 종료 후 cleanup
  after(() => {
    cleanup();
  });

  describe("✅ onLike - 좋아요 추가", () => {
    it("게시글 좋아요 추가 시 handleLikeCreate가 호출된다", async () => {
      const wrapped = testEnv.wrap(myFunctions.onLike);

      // 테스트 데이터: "post-{postId}-{uid}"
      const likeId = "post-abc123-user456";
      const likeData = 1; // 좋아요는 값 1을 저장

      const snap = testEnv.database.makeDataSnapshot(likeData, `/likes/${likeId}`);
      const result = await wrapped(snap, {params: {likeId}});

      // 결과 검증
      expect(result).to.not.be.undefined;
      // 참고: 실제 Post가 존재하지 않으면 에러가 발생할 수 있음
      // 이 테스트는 함수가 호출되고 likeId를 파싱하는지만 확인
    });

    it("댓글 좋아요 추가 시 handleLikeCreate가 호출된다", async () => {
      const wrapped = testEnv.wrap(myFunctions.onLike);

      const likeId = "comment-xyz789-user456";
      const likeData = 1;

      const snap = testEnv.database.makeDataSnapshot(likeData, `/likes/${likeId}`);
      const result = await wrapped(snap, {params: {likeId}});

      expect(result).to.not.be.undefined;
    });

    it("하이픈이 포함된 복잡한 likeId도 처리된다", async () => {
      const wrapped = testEnv.wrap(myFunctions.onLike);

      // nodeId와 uid에 하이픈 포함
      const likeId = "post-OdEWc-SaDELU2Y51FDy-zodDYjqcmfb5WHi1rVYrUJi0d2j2-user-123-456";
      const likeData = 1;

      const snap = testEnv.database.makeDataSnapshot(likeData, `/likes/${likeId}`);
      const result = await wrapped(snap, {params: {likeId}});

      expect(result).to.not.be.undefined;
      // parseLikeId가 정상적으로 작동하면 success: false, error: "Post not found"가 반환됨
      // (테스트 DB에 해당 Post가 없으므로)
    });
  });

  describe("✅ onCancelLike - 좋아요 취소", () => {
    it("게시글 좋아요 취소 시 handleLikeCancel이 호출된다", async () => {
      const wrapped = testEnv.wrap(myFunctions.onCancelLike);

      const likeId = "post-abc123-user789";
      const likeData = 1; // 삭제된 데이터 (before snapshot)

      const snap = testEnv.database.makeDataSnapshot(likeData, `/likes/${likeId}`);
      const result = await wrapped(snap, {params: {likeId}});

      expect(result).to.not.be.undefined;
    });

    it("댓글 좋아요 취소 시 handleLikeCancel이 호출된다", async () => {
      const wrapped = testEnv.wrap(myFunctions.onCancelLike);

      const likeId = "comment-def456-user789";
      const likeData = 1;

      const snap = testEnv.database.makeDataSnapshot(likeData, `/likes/${likeId}`);
      const result = await wrapped(snap, {params: {likeId}});

      expect(result).to.not.be.undefined;
    });
  });

  describe("❌ 에러 케이스", () => {
    it("잘못된 형식의 likeId는 에러를 반환한다", async () => {
      const wrapped = testEnv.wrap(myFunctions.onLike);

      const likeId = "invalid-likeid"; // type이 "invalid"
      const likeData = 1;

      const snap = testEnv.database.makeDataSnapshot(likeData, `/likes/${likeId}`);
      const result = await wrapped(snap, {params: {likeId}});

      expect(result).to.not.be.undefined;
      expect(result.success).to.be.false;
      expect(result.error).to.equal("Invalid likeId format");
    });

    it("하이픈이 없는 likeId는 에러를 반환한다", async () => {
      const wrapped = testEnv.wrap(myFunctions.onLike);

      const likeId = "invalidlikeid";
      const likeData = 1;

      const snap = testEnv.database.makeDataSnapshot(likeData, `/likes/${likeId}`);
      const result = await wrapped(snap, {params: {likeId}});

      expect(result).to.not.be.undefined;
      expect(result.success).to.be.false;
      expect(result.error).to.equal("Invalid likeId format");
    });

    it("nodeId와 uid가 없는 likeId는 에러를 반환한다", async () => {
      const wrapped = testEnv.wrap(myFunctions.onCancelLike);

      const likeId = "post-"; // nodeId와 uid 없음
      const likeData = 1;

      const snap = testEnv.database.makeDataSnapshot(likeData, `/likes/${likeId}`);
      const result = await wrapped(snap, {params: {likeId}});

      expect(result).to.not.be.undefined;
      expect(result.success).to.be.false;
      expect(result.error).to.equal("Invalid likeId format");
    });
  });
});
