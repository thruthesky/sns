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
  order?: string; // Flat style: "<category>-<timestamp>"
  createdAt?: number;
  updatedAt?: number;
  likeCount?: number;
  commentCount?: number;
}

interface CommentData {
  postId?: string; // Flat style: 소속 게시글 ID
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
 *
 * @param {string} postId - 게시글 ID
 * @return {Promise} 게시글 참조 또는 null
 */
async function getPostReference(postId: string): Promise<{
  ref: admin.database.Reference;
  snapshot: admin.database.DataSnapshot;
} | null> {
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

  // 📊 카테고리 통계 업데이트: postCount +1
  // ServerValue.increment()를 사용하여 동시성 안전하게 1 증가
  if (postData.category) {
    const updates = {} as Record<string, unknown>;
    updates[`categories/${postData.category}/postCount`] =
      admin.database.ServerValue.increment(1);
    await admin.database().ref().update(updates);
  }

  // 📊 전체 글 통계 업데이트: /stats/counters/post +1
  // ServerValue.increment()를 사용하여 동시성 안전하게 1 증가
  const statsUpdates = {} as Record<string, unknown>;
  statsUpdates["stats/counters/post"] = admin.database.ServerValue.increment(1);
  await admin.database().ref().update(statsUpdates);
  logger.info("전체 글 통계 업데이트 완료 (post +1)", { postId });

  return {
    success: true,
    postId,
    category: postData.category,
  };
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

    // postId 필수 확인
    if (!commentData.postId) {
      logger.error("댓글 데이터에 postId 필드가 없습니다.", {
        commentId,
      });
      return { success: false, error: "Missing postId in comment data" };
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
    logger.info("전체 댓글 통계 업데이트 완료 (comment +1)", { commentId });

    return {
      success: true,
      postId,
      commentId,
    };
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

  // 📊 카테고리 통계 업데이트: postCount -1
  // ServerValue.increment(-1)를 사용하여 동시성 안전하게 1 감소
  if (postData.category) {
    const updates = {} as Record<string, unknown>;
    updates[`categories/${postData.category}/postCount`] =
      admin.database.ServerValue.increment(-1);
    await admin.database().ref().update(updates);
  }

  // 📊 전체 글 통계 업데이트: /stats/counters/post -1
  // ServerValue.increment(-1)를 사용하여 동시성 안전하게 1 감소
  const statsUpdates = {} as Record<string, unknown>;
  statsUpdates["stats/counters/post"] =
    admin.database.ServerValue.increment(-1);
  await admin.database().ref().update(statsUpdates);

  return { success: true };
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

    // 📊 카테고리 통계 업데이트: commentCount -1
    // ServerValue.increment(-1)를 사용하여 동시성 안전하게 1 감소
    if (commentData.postId) {
      const postSnapshot = await admin
        .database()
        .ref(`/posts/${commentData.postId}`)
        .once("value");
      const postData = postSnapshot.val() as PostData | null;

      if (postData?.category) {
        const categoryUpdates = {} as Record<string, unknown>;
        categoryUpdates[`categories/${postData.category}/commentCount`] =
          admin.database.ServerValue.increment(-1);
        await admin.database().ref().update(categoryUpdates);
      }
    }

    // 📊 전체 댓글 통계 업데이트: /stats/counters/comment -1
    // ServerValue.increment(-1)를 사용하여 동시성 안전하게 1 감소
    const statsUpdates = {} as Record<string, unknown>;
    statsUpdates["stats/counters/comment"] =
      admin.database.ServerValue.increment(-1);
    await admin.database().ref().update(statsUpdates);

    return { success: true };
  }
);

/**
 * likeId 파싱 결과 인터페이스
 * 형식: "post-<post-id>-<uid>" 또는 "comment-<comment-id>-<uid>"
 */
interface ParsedLikeId {
  type: "post" | "comment";
  nodeId: string;
  uid: string;
}

/**
 * likeId를 파싱하여 type, nodeId, uid를 추출합니다.
 *
 * @param {string} likeId - 파싱할 likeId (예: "post-postId-uid")
 * @return {ParsedLikeId | null} 파싱 결과 또는 null (파싱 실패 시)
 */
function parseLikeId(likeId: string): ParsedLikeId | null {
  const parts = likeId.split("-");

  // 최소 3개 부분 필요 (type-nodeId-uid)
  if (parts.length < 3) return null;

  const type = parts[0];
  if (type !== "post" && type !== "comment") return null;

  // nodeId는 두 번째 부분, uid는 세 번째 부분
  const nodeId = parts[1];
  const uid = parts[2];

  if (!nodeId || !uid) return null;

  return {
    type: type as "post" | "comment",
    nodeId,
    uid,
  };
}

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

  logger.info(`좋아요 추가 감지 (통합 좋아요): likeId=${likeId}`);

  try {
    // likeId 파싱
    const parsed = parseLikeId(likeId);
    if (!parsed) {
      logger.error("likeId 파싱 실패 (형식 오류)", { likeId });
      return { success: false, error: "Invalid likeId format" };
    }

    const { type, nodeId, uid } = parsed;
    const db = admin.database();

    // 📊 게시글/댓글의 likeCount 1 증가
    // increment()를 사용하여 모든 자식 노드를 읽지 않고도 동시성 안전하게 증가
    if (type === "post") {
      const postInfo = await getPostReference(nodeId);
      if (!postInfo) {
        logger.error("좋아요 대상 게시글을 찾을 수 없습니다.", {
          nodeId,
          likeId,
        });
        return { success: false, error: "Post not found" };
      }

      // 🚀 increment()를 사용하여 likeCount 1 증가 (동시성 안전)
      await postInfo.ref
        .child("likeCount")
        .set(admin.database.ServerValue.increment(1));

      logger.info(
        `게시글 좋아요 개수 증가 완료: /posts/${nodeId}/likeCount +1`
      );
    } else if (type === "comment") {
      const commentRef = db.ref(`/comments/${nodeId}`);
      const commentSnapshot = await commentRef.once("value");

      if (!commentSnapshot.exists()) {
        logger.error("좋아요 대상 댓글을 찾을 수 없습니다.", {
          nodeId,
          likeId,
        });
        return { success: false, error: "Comment not found" };
      }

      // 🚀 increment()를 사용하여 likeCount 1 증가 (동시성 안전)
      await commentRef
        .child("likeCount")
        .set(admin.database.ServerValue.increment(1));

      logger.info(
        `댓글 좋아요 개수 증가 완료: /comments/${nodeId}/likeCount +1`
      );
    }

    // 📊 전체 좋아요 통계 업데이트: /stats/counters/like +1
    // ServerValue.increment()를 사용하여 동시성 안전하게 1 증가
    const statsUpdates = {} as Record<string, unknown>;
    statsUpdates["stats/counters/like"] = admin.database.ServerValue.increment(1);
    await db.ref().update(statsUpdates);
    logger.info("전체 좋아요 통계 업데이트 완료 (like +1)", { likeId });

    return { success: true, type, nodeId, uid, likeId };
  } catch (error) {
    logger.error("좋아요 개수 업데이트 중 오류:", error);
    throw error;
  }
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

  logger.info(`좋아요 취소 감지 (통합 좋아요): likeId=${likeId}`);

  try {
    // likeId 파싱
    const parsed = parseLikeId(likeId);
    if (!parsed) {
      logger.error("likeId 파싱 실패 (형식 오류)", { likeId });
      return { success: false, error: "Invalid likeId format" };
    }

    const { type, nodeId, uid } = parsed;
    const db = admin.database();

    // 📊 게시글/댓글의 likeCount 1 감소
    // increment()를 사용하여 모든 자식 노드를 읽지 않고도 동시성 안전하게 감소
    if (type === "post") {
      const postInfo = await getPostReference(nodeId);
      if (!postInfo) {
        logger.error("좋아요 대상 게시글을 찾을 수 없습니다.", {
          nodeId,
          likeId,
        });
        return { success: false, error: "Post not found" };
      }

      // 🚀 increment(-1)을 사용하여 likeCount 1 감소 (동시성 안전)
      await postInfo.ref
        .child("likeCount")
        .set(admin.database.ServerValue.increment(-1));

      logger.info(
        `게시글 좋아요 개수 감소 완료: /posts/${nodeId}/likeCount -1`
      );
    } else if (type === "comment") {
      const commentRef = db.ref(`/comments/${nodeId}`);
      const commentSnapshot = await commentRef.once("value");

      if (!commentSnapshot.exists()) {
        logger.error("좋아요 대상 댓글을 찾을 수 없습니다.", {
          nodeId,
          likeId,
        });
        return { success: false, error: "Comment not found" };
      }

      // 🚀 increment(-1)을 사용하여 likeCount 1 감소 (동시성 안전)
      await commentRef
        .child("likeCount")
        .set(admin.database.ServerValue.increment(-1));

      logger.info(
        `댓글 좋아요 개수 감소 완료: /comments/${nodeId}/likeCount -1`
      );
    }

    // 📊 전체 좋아요 통계 업데이트: /stats/counters/like -1
    // ServerValue.increment(-1)을 사용하여 동시성 안전하게 1 감소
    const statsUpdates = {} as Record<string, unknown>;
    statsUpdates["stats/counters/like"] = admin.database.ServerValue.increment(-1);
    await db.ref().update(statsUpdates);
    logger.info("전체 좋아요 통계 업데이트 완료 (like -1)", { likeId });

    return { success: true, type, nodeId, uid, likeId };
  } catch (error) {
    logger.error("좋아요 개수 업데이트 중 오류:", error);
    throw error;
  }
});

/**
 * user-props 노드에 사용자 주요 필드를 분리 저장하고 /users/{uid}를 정규화합니다.
 *
 * 수행 작업:
 * 1. updatedAt 필드 자동 생성 (없는 경우)
 * 2. displayNameLowerCase 자동 생성 및 저장
 * 3. photoUrl 처리 (photoURL 대체)
 * 4. /users/{uid} 노드 업데이트
 * 5. /user-props/ 노드 동기화
 * 6. /stats/counters/user +1 (전체 사용자 통계 업데이트)
 * 7. DB에 직접 저장
 *
 * @param {string} uid - 사용자 UID
 * @param {UserData} userData - 사용자 데이터
 * @param {number} createdAt - 사용자 생성 시간 (onUserCreate에서 전달)
 * @returns {Promise<void>} 업데이트 완료 후 resolve
 */
async function updateUserProps(
  uid: string,
  userData: UserData,
  createdAt: number
): Promise<void> {
  const now = Date.now();
  const updates: Record<string, unknown> = {};

  // photoUrl 처리 (우선순위: photoUrl > photoURL)
  const photoUrl =
    (userData?.photoUrl as string | undefined) ??
    (userData?.photoURL as string | undefined);

  // updatedAt 필드 자동 생성
  const updatedAt =
    typeof userData.updatedAt === "number" ? userData.updatedAt : now;

  // ===== /users/{uid} 노드 업데이트 =====

  // updatedAt 저장 (없는 경우만)
  if (userData.updatedAt === undefined || userData.updatedAt === null) {
    updates[`users/${uid}/updatedAt`] = updatedAt;
  }

  // displayNameLowerCase 저장 (대소문자 구분 없는 검색용)
  const displayNameLowerCase = userData.displayName
    ? userData.displayName.toLowerCase()
    : undefined;
  if (displayNameLowerCase) {
    updates[`users/${uid}/displayNameLowerCase`] = displayNameLowerCase;
  }

  // ===== /user-props/ 노드 동기화 =====

  // displayName 저장
  if (userData.displayName) {
    updates[`user-props/displayName/${uid}`] = userData.displayName;

    // displayNameLowerCase 저장
    updates[`user-props/displayNameLowerCase/${uid}`] = displayNameLowerCase;
  }

  // photoUrl 저장
  if (photoUrl) {
    updates[`user-props/photoUrl/${uid}`] = photoUrl;
  }

  // gender 저장
  if (userData.gender) {
    updates[`user-props/gender/${uid}`] = userData.gender;
  }

  // birthYear 저장
  if (typeof userData.birthYear === "number") {
    updates[`user-props/birthYear/${uid}`] = userData.birthYear;
  }

  // birthMonth 저장
  if (typeof userData.birthMonth === "number") {
    updates[`user-props/birthMonth/${uid}`] = userData.birthMonth;
  }

  // birthDay 저장
  if (typeof userData.birthDay === "number") {
    updates[`user-props/birthDay/${uid}`] = userData.birthDay;
  }

  // createdAt 저장 (항상 저장)
  updates[`user-props/createdAt/${uid}`] = createdAt;

  // updatedAt 저장 (항상 저장)
  updates[`user-props/updatedAt/${uid}`] = updatedAt;

  // ===== 통계 업데이트 =====

  // 📊 전체 사용자 통계 업데이트: /stats/counters/user +1
  // ServerValue.increment()를 사용하여 동시성 안전하게 1 증가
  updates["stats/counters/user"] = admin.database.ServerValue.increment(1);

  // ===== DB에 직접 저장 =====

  // 모든 업데이트를 한 번에 실행
  await admin.database().ref().update(updates);

  logger.info("user-props 동기화 및 사용자 통계 업데이트 완료", {
    uid,
    displayName: userData.displayName,
    hasDisplayNameLowerCase: !!displayNameLowerCase,
    hasPhotoUrl: !!photoUrl,
    createdAt,
    updatedAt,
  });
}

/**
 * 사용자 등록 시 user-props 노드에 주요 필드를 분리 저장하고 createdAt을 설정합니다.
 *
 * 트리거 경로: /users/{uid}
 *
 * 수행 작업:
 * 1. createdAt 필드 자동 생성 및 /users/{uid}/createdAt 직접 저장
 * 2. updateUserProps() 함수를 통해 모든 사용자 데이터 정규화 및 동기화 수행
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

  const now = Date.now();

  // createdAt 필드 자동 생성 (없는 경우만)
  const createdAt =
    typeof userData.createdAt === "number" ? userData.createdAt : now;

  // /users/{uid}/createdAt 직접 저장 (없는 경우만)
  if (userData.createdAt === undefined || userData.createdAt === null) {
    await admin.database().ref(`users/${uid}/createdAt`).set(createdAt);
    logger.info("createdAt 저장 완료", { uid, createdAt });
  }

  // updateUserProps() 함수를 통해 나머지 처리 수행 (createdAt 전달)
  await updateUserProps(uid, userData, createdAt);

  return {
    success: true,
    uid,
  };
});
