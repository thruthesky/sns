/**
 * 사용자 프로필 동기화 비즈니스 로직 처리
 */

import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger";
import {UserData} from "../types";

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
export async function updateUserProps(
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
  const displayNameLowerCase = userData.displayName ?
    userData.displayName.toLowerCase() :
    undefined;
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
 * 수행 작업:
 * 1. createdAt 필드 자동 생성 및 /users/{uid}/createdAt 직접 저장
 * 2. updateUserProps() 함수를 통해 모든 사용자 데이터 정규화 및 동기화 수행
 *    - updatedAt 필드 자동 생성
 *    - displayNameLowerCase 자동 생성
 *    - photoUrl 처리
 *    - /users/{uid} 노드 업데이트
 *    - /user-props/ 노드 동기화
 *    - /stats/counters/user +1 (전체 사용자 통계 업데이트)
 *
 * @param {string} uid - 사용자 UID
 * @param {UserData} userData - 사용자 데이터
 * @returns {Promise<{success: boolean; uid: string}>} 처리 결과
 */
export async function handleUserCreate(
  uid: string,
  userData: UserData
): Promise<{success: boolean; uid: string}> {
  logger.info("새 사용자 등록 처리 시작", {
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
    logger.info("createdAt 저장 완료", {uid, createdAt});
  }

  // updateUserProps() 함수를 통해 나머지 처리 수행 (createdAt 전달)
  await updateUserProps(uid, userData, createdAt);

  return {
    success: true,
    uid,
  };
}
