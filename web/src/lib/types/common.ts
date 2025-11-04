/**
 * 공통 타입 정의
 *
 * 프로젝트 전반에서 사용되는 공통 타입들을 정의합니다.
 */

/**
 * API 응답 결과 타입
 */
export interface ApiResult {
  success: boolean;
  error?: string;
  errorMessage?: string;
}

/**
 * 생성 작업 결과 타입 (ID 포함)
 */
export interface CreateResult extends ApiResult {
  id?: string;
}

/**
 * Firebase Realtime Database Timestamp (밀리초)
 */
export type Timestamp = number;

/**
 * Firebase User ID
 */
export type UserId = string;

/**
 * Firebase 자동 생성 Key
 */
export type FirebaseKey = string;
