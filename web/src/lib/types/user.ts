/**
 * 사용자 타입 정의
 *
 * Firebase Realtime Database의 /users/{uid} 노드 구조를 문서화한
 * `docs/sns-web-database.md`를 기반으로 사용자 정보를 타입으로 표현합니다.
 */

import type { Timestamp, UserId } from "./common";

/**
 * 지원되는 사용자 성별 값
 */
export const USER_GENDERS = ["M", "F"] as const;

/**
 * 사용자 성별 타입
 */
export type UserGender = (typeof USER_GENDERS)[number];

/**
 * Firebase Realtime Database 사용자 데이터
 *
 * 참고: 문서에 명시된 필드를 기본으로 삼되,
 *       Firebase Auth 동기화를 위해 추가로 수집되는 필드는 선택적으로 포함합니다.
 */
export interface User {
  displayName: string;
  photoUrl?: string | null;
  gender?: UserGender;
  birthYear?: number;
  birthMonth?: number;
  birthDay?: number;
  bio?: string | null;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

/**
 * 사용자 ID를 포함한 확장 타입
 */
export interface UserWithId extends User {
  uid: UserId;
}
