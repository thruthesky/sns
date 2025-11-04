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
import { setGlobalOptions } from "firebase-functions/v2";
import { onValueCreated, onValueDeleted } from "firebase-functions/v2/database";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

const FORUM_CATEGORIES = ["community", "qna", "news", "market"] as const;

type ForumCategory = (typeof FORUM_CATEGORIES)[number];

interface PostData {
  uid?: string;
  author?: string;
  title?: string;
  category?: ForumCategory | string;
  order?: string;  // Flat style: "<category>-<timestamp>"
  createdAt?: number;
  updatedAt?: number;
  likeCount?: number;
  commentCount?: number;
}

interface CommentData {
  postId?: string;  // Flat style: 소속 게시글 ID
  uid?: string;
  parentId?: string | null;
  depth?: number;
  order?: string;
  createdAt?: number;
  updatedAt?: number;
}

interface UserData {
  displayName?: string;
  photoUrl?: string;
  photoURL?: string;
  createdAt?: number;
  updatedAt?: number;
  gender?: string;
  birthYear?: number;
  birthMonth?: number;
  birthDay?: number;
}

/**
 * 게시글 참조를 가져옵니다 (Flat Style).
 * - 직접 /posts/{postId} 경로에 접근합니다.
 */
async function getPostReference(
  postId: string
): Promise<
  | {
      ref: admin.database.Reference;
      snapshot: admin.database.DataSnapshot;
    }
  | null
> {
  const db = admin.database();
  const postRef = db.ref(`/posts/${postId}`);
  const snapshot = await postRef.once("value");

  if (snapshot.exists()) {
    return { ref: postRef, snapshot };
  }

  return null;
}

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
 * 게시글 생성 시 기본 필드를 보정합니다 (Flat Style).
 *
 * 트리거 경로: /posts/{postId}
 */
export const onPostCreate = onValueCreated(
  "/posts/{postId}",
  async (event) => {
    const postId = event.params.postId as string;
    const postData = (event.data.val() || {}) as PostData;

    logger.info("새 게시글 생성 감지 (Flat Style)", {
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
      logger.info("게시글 필드 초기화 완료", { postId });
    }

    return {
      success: true,
      postId,
      category: postData.category,
    };
  }
);

/**
 * 댓글 생성 시 게시글의 commentCount를 동기화합니다 (Flat Style).
 *
 * 트리거 경로: /comments/{commentId}
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

    // postId 필수 확인
    if (!commentData.postId) {
      logger.error("댓글 데이터에 postId 필드가 없습니다.", {
        commentId,
      });
      return { success: false, error: "Missing postId in comment data" };
    }

    const db = admin.database();
    const postId = commentData.postId;

    // 해당 게시글의 모든 댓글 수 조회 (Flat Style)
    // orderByChild('postId').equalTo(postId) 쿼리로 필터링
    const commentsRef = db.ref("/comments");
    const commentsSnapshot = await commentsRef
      .orderByChild("postId")
      .equalTo(postId)
      .once("value");

    const commentCount = commentsSnapshot.numChildren();

    // 게시글의 commentCount 업데이트 (Flat Style)
    await db.ref(`posts/${postId}/commentCount`).set(commentCount);

    logger.info("댓글 수 업데이트 완료 (Flat Style)", {
      postId,
      commentId,
      commentCount,
    });

    return {
      success: true,
      postId,
      commentId,
      commentCount,
    };
  }
);

/**
 * 좋아요 생성 시 게시글의 likeCount 자동 업데이트 (Flat Style)
 *
 * 트리거 경로: /post-likes/{likeId}
 *   - likeId 형식: "{postId}-{uid}"
 *   - 예: "abc123-user456"
 *
 * 업데이트 경로: /posts/{postId}/likeCount
 *
 * 동작 방식:
 * 1. 사용자가 좋아요를 누르면 /post-likes/{postId}-{uid}에 값 1 저장
 * 2. 이 함수가 자동으로 트리거됨
 * 3. likeId에서 postId 추출 (첫 번째 하이픈 앞부분)
 * 4. 해당 게시글의 모든 좋아요 개수를 계산
 * 5. /posts/{postId}/likeCount를 업데이트
 */
export const onPostLikeCreated = onValueCreated(
  "/post-likes/{likeId}",
  async (event) => {
    const likeId = event.params.likeId as string;

    logger.info(`게시글 좋아요 이벤트 감지 (Flat Style): likeId=${likeId}`);

    try {
      // likeId 형식: "{postId}-{uid}"
      // postId 추출 (첫 번째 하이픈 앞부분)
      const postId = likeId.split("-")[0];

      if (!postId) {
        logger.error("likeId에서 postId를 추출할 수 없습니다.", { likeId });
        return { success: false, error: "Invalid likeId format" };
      }

      const db = admin.database();

      // 해당 게시글의 모든 좋아요 개수 조회 (Flat Style)
      // orderByKey() + startAt/endAt 쿼리로 필터링
      const likesRef = db.ref("/post-likes");
      const likesSnapshot = await likesRef
        .orderByKey()
        .startAt(`${postId}-`)
        .endAt(`${postId}-\uf8ff`)
        .once("value");

      // 좋아요 개수 계산
      const likeCount = likesSnapshot.numChildren();

      // 게시글 존재 여부 확인
      const postInfo = await getPostReference(postId);
      if (!postInfo) {
        logger.error("좋아요 대상 게시글을 찾을 수 없습니다.", {
          postId,
          likeId,
        });
        return { success: false, error: "Post not found" };
      }

      // 게시글의 likeCount 업데이트 (Flat Style)
      await postInfo.ref.child("likeCount").set(likeCount);

      logger.info(
        `게시글 좋아요 개수 업데이트 완료 (Flat Style): /posts/${postId}/likeCount = ${likeCount}`
      );

      return { success: true, likeCount, postId, likeId };
    } catch (error) {
      logger.error("좋아요 개수 업데이트 중 오류:", error);
      throw error;
    }
  }
);

/**
 * 좋아요 삭제 시 게시글의 likeCount 자동 감소 (Flat Style)
 *
 * 트리거 경로: /post-likes/{likeId}
 *   - likeId 형식: "{postId}-{uid}"
 *
 * 업데이트 경로: /posts/{postId}/likeCount
 *
 * 동작 방식:
 * 1. 사용자가 좋아요를 취소하면 /post-likes/{postId}-{uid}가 삭제됨
 * 2. 이 함수가 자동으로 트리거됨
 * 3. likeId에서 postId 추출
 * 4. 해당 게시글의 모든 좋아요 개수를 재계산
 * 5. /posts/{postId}/likeCount를 업데이트
 */
export const onPostLikeDeleted = onValueDeleted(
  "/post-likes/{likeId}",
  async (event) => {
    const likeId = event.params.likeId as string;

    logger.info(`게시글 좋아요 삭제 이벤트 감지 (Flat Style): likeId=${likeId}`);

    try {
      // likeId 형식: "{postId}-{uid}"
      // postId 추출 (첫 번째 하이픈 앞부분)
      const postId = likeId.split("-")[0];

      if (!postId) {
        logger.error("likeId에서 postId를 추출할 수 없습니다.", { likeId });
        return { success: false, error: "Invalid likeId format" };
      }

      const db = admin.database();

      // 해당 게시글의 모든 좋아요 개수 조회 (Flat Style)
      const likesRef = db.ref("/post-likes");
      const likesSnapshot = await likesRef
        .orderByKey()
        .startAt(`${postId}-`)
        .endAt(`${postId}-\uf8ff`)
        .once("value");

      // 좋아요 개수 계산
      const likeCount = likesSnapshot.numChildren();

      // 게시글 존재 여부 확인
      const postInfo = await getPostReference(postId);
      if (!postInfo) {
        logger.error("좋아요 대상 게시글을 찾을 수 없습니다.", {
          postId,
          likeId,
        });
        return { success: false, error: "Post not found" };
      }

      // 게시글의 likeCount 업데이트 (Flat Style)
      await postInfo.ref.child("likeCount").set(likeCount);

      logger.info(
        `게시글 좋아요 개수 감소 완료 (Flat Style): /posts/${postId}/likeCount = ${likeCount}`
      );

      return { success: true, likeCount, postId, likeId };
    } catch (error) {
      logger.error("좋아요 개수 업데이트 중 오류:", error);
      throw error;
    }
  }
);

/**
 * 사용자 등록 시 user-props 노드에 주요 필드를 분리 저장합니다.
 *
 * 트리거 경로: /users/{uid}
 */
export const onUserRegister = onValueCreated(
  "/users/{uid}",
  async (event) => {
    const uid = event.params.uid as string;
    const userData = (event.data.val() || {}) as UserData;

    const now = Date.now();
    const photoUrl =
      (userData?.photoUrl as string | undefined) ??
      (userData?.photoURL as string | undefined);

    const updates: Record<string, unknown> = {};

    if (userData.displayName) {
      updates[`user-props/displayName/${uid}`] = userData.displayName;
    }

    if (photoUrl) {
      updates[`user-props/photoUrl/${uid}`] = photoUrl;
    }

    const createdAt =
      typeof userData.createdAt === "number"
        ? userData.createdAt
        : now;
    const updatedAt =
      typeof userData.updatedAt === "number"
        ? userData.updatedAt
        : now;

    updates[`user-props/createdAt/${uid}`] = createdAt;
    updates[`user-props/updatedAt/${uid}`] = updatedAt;

    if (userData.gender) {
      updates[`user-props/gender/${uid}`] = userData.gender;
    }

    if (typeof userData.birthYear === "number") {
      updates[`user-props/birthYear/${uid}`] = userData.birthYear;
    }

    if (typeof userData.birthMonth === "number") {
      updates[`user-props/birthMonth/${uid}`] = userData.birthMonth;
    }

    if (typeof userData.birthDay === "number") {
      updates[`user-props/birthDay/${uid}`] = userData.birthDay;
    }

    if (
      userData.createdAt === undefined ||
      userData.createdAt === null
    ) {
      updates[`users/${uid}/createdAt`] = createdAt;
    }

    if (
      userData.updatedAt === undefined ||
      userData.updatedAt === null
    ) {
      updates[`users/${uid}/updatedAt`] = updatedAt;
    }

    await admin.database().ref().update(updates);

    logger.info("user-props 동기화 완료", {
      uid,
    });

    return {
      success: true,
      uid,
    };
  }
);
