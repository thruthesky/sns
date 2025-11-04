/**
 * Firebase 에러 핸들러
 *
 * Firebase에서 발생하는 다양한 에러를 사용자 친화적인 메시지로 변환합니다.
 * i18n 시스템과 통합되어 한글, 영어, 일본어, 중국어를 지원합니다.
 *
 * 주요 기능:
 * - Firebase 에러 코드를 i18n 키로 매핑
 * - 에러 로깅 (개발자용)
 * - 사용자 친화적인 메시지 반환 (사용자용)
 *
 * 사용 예시:
 * ```typescript
 * import { handleFirebaseError } from '$lib/utils/error-handler';
 * import { get } from 'svelte/store';
 * import { t } from '$lib/stores/i18n';
 *
 * try {
 *   // Firebase 작업
 * } catch (error) {
 *   const errorInfo = handleFirebaseError(error, 'createPost');
 *   const $t = get(t);
 *   showToast($t(errorInfo.key), 'error');
 * }
 * ```
 */

/**
 * Firebase 에러 타입 정의
 * Firebase SDK에서 발생하는 에러는 Error를 확장하여 code 속성을 포함합니다.
 */
export interface FirebaseError extends Error {
  code?: string;
}

/**
 * 에러 정보 타입
 * handleFirebaseError 함수가 반환하는 에러 정보 객체
 */
export interface ErrorInfo {
  key: string;           // i18n 번역 키 (예: 'error.db.permissionDenied')
  code: string | null;   // 원본 Firebase 에러 코드 (예: 'PERMISSION_DENIED')
  message: string;       // 원본 에러 메시지 (디버깅용)
  context: string;       // 에러 발생 컨텍스트
}

/**
 * 에러 코드 매핑 타입
 */
type ErrorCodeMap = Record<string, string>;

/**
 * Firebase 에러 코드를 i18n 키로 매핑
 *
 * @param code - Firebase 에러 코드 (예: 'auth/user-not-found', 'PERMISSION_DENIED')
 * @returns i18n 번역 키
 *
 * 에러 코드 매핑:
 * - Authentication 에러: auth/* -> error.auth.*
 * - Database 에러: PERMISSION_DENIED, permission-denied 등 -> error.db.*
 * - Storage 에러: storage/* -> error.storage.*
 * - 기타: error.unknown
 */
export function mapFirebaseErrorCode(code: string | null | undefined): string {
  // 에러 코드가 없는 경우 기본값
  if (!code) {
    return 'error.unknown';
  }

  // Authentication 에러 매핑
  const authErrorMap: ErrorCodeMap = {
    'auth/invalid-email': 'error.auth.invalidEmail',
    'auth/user-disabled': 'error.auth.userDisabled',
    'auth/user-not-found': 'error.auth.userNotFound',
    'auth/wrong-password': 'error.auth.wrongPassword',
    'auth/email-already-in-use': 'error.auth.emailAlreadyInUse',
    'auth/weak-password': 'error.auth.weakPassword',
    'auth/operation-not-allowed': 'error.auth.operationNotAllowed',
    'auth/too-many-requests': 'error.auth.tooManyRequests',
    'auth/invalid-verification-code': 'error.auth.invalidVerificationCode',
    'auth/invalid-phone-number': 'error.auth.invalidPhoneNumber',
    'auth/missing-verification-code': 'error.auth.missingVerificationCode',
    'auth/session-expired': 'error.auth.sessionExpired',
    'auth/requires-recent-login': 'error.auth.requiresRecentLogin',
    'auth/credential-already-in-use': 'error.auth.credentialAlreadyInUse',
  };

  // Database 에러 매핑
  const databaseErrorMap: ErrorCodeMap = {
    'PERMISSION_DENIED': 'error.db.permissionDenied',
    'permission-denied': 'error.db.permissionDenied',
    'network-error': 'error.db.networkError',
    'offline': 'error.offline',
    'authentication-required': 'error.db.authenticationRequired',
    'disconnected': 'error.offline',
    'unavailable': 'error.db.networkError',
  };

  // Storage 에러 매핑
  const storageErrorMap: ErrorCodeMap = {
    'storage/unauthorized': 'error.storage.unauthorized',
    'storage/bucket-not-found': 'error.storage.bucketNotFound',
    'storage/invalid-argument': 'error.storage.invalidArgument',
    'storage/object-not-found': 'error.storage.objectNotFound',
    'storage/retry-limit-exceeded': 'error.storage.retryLimitExceeded',
    'storage/quota-exceeded': 'error.storage.quotaExceeded',
    'storage/canceled': 'error.storage.canceled',
  };

  // 에러 코드 매핑 시도
  if (authErrorMap[code]) {
    return authErrorMap[code];
  }
  if (databaseErrorMap[code]) {
    return databaseErrorMap[code];
  }
  if (storageErrorMap[code]) {
    return storageErrorMap[code];
  }

  // 네트워크 관련 에러 감지
  if (code.includes('network') || code.includes('offline')) {
    return 'error.network';
  }

  // 권한 관련 에러 감지
  if (code.toLowerCase().includes('permission')) {
    return 'error.db.permissionDenied';
  }

  // 기본값
  return 'error.unknown';
}

/**
 * Firebase 에러를 처리하고 사용자 친화적인 정보 반환
 *
 * @param error - Firebase에서 발생한 에러 객체
 * @param context - 에러 발생 컨텍스트 (예: 'createPost', 'updateUser', 'uploadPhoto')
 * @returns 에러 정보 객체
 *   - key: i18n 번역 키 (예: 'error.db.permissionDenied')
 *   - code: 원본 Firebase 에러 코드 (예: 'PERMISSION_DENIED')
 *   - message: 원본 에러 메시지 (디버깅용)
 *   - context: 에러 발생 컨텍스트
 *
 * 사용 예시:
 * ```typescript
 * try {
 *   await createPost(...);
 * } catch (error) {
 *   const errorInfo = handleFirebaseError(error, 'createPost');
 *   console.error('에러 정보:', errorInfo);
 *   // errorInfo.key를 i18n으로 번역하여 사용자에게 표시
 *   showToast($t(errorInfo.key), 'error');
 * }
 * ```
 */
export function handleFirebaseError(
  error: unknown,
  context: string = 'unknown'
): ErrorInfo {
  // 에러 객체가 없는 경우
  if (!error) {
    console.error(`[${context}] 에러 객체가 없습니다.`);
    return {
      key: 'error.unknown',
      code: null,
      message: 'No error object provided',
      context,
    };
  }

  // Error 타입으로 캐스팅하여 message 접근
  const err = error as Error & { code?: string };

  // Firebase 에러 코드 추출
  // error.code (Firebase SDK v9+)
  // error.message에서 코드 추출 시도
  let errorCode: string | null = err.code ?? null;

  // 에러 메시지에서 코드 추출 시도 (fallback)
  if (!errorCode && err.message) {
    // "Firebase: Error (auth/invalid-email)." 같은 형식에서 코드 추출
    const match = err.message.match(/\(([^)]+)\)/);
    if (match && match[1]) {
      errorCode = match[1];
    }
  }

  // 원본 에러 로깅 (개발자용)
  console.error(`[${context}] Firebase 에러:`, {
    code: errorCode,
    message: err.message,
    stack: err.stack,
    originalError: error,
  });

  // 에러 코드를 i18n 키로 변환
  const i18nKey = mapFirebaseErrorCode(errorCode);

  // 에러 정보 반환
  return {
    key: i18nKey,
    code: errorCode,
    message: err.message || 'Unknown error',
    context,
  };
}

/**
 * 토스트 표시 함수 타입
 */
export type ShowToastFunction = (message: string, type: 'success' | 'error' | 'info' | 'warning') => void;

/**
 * i18n 번역 함수 타입
 */
export type TranslateFunction = (key: string) => string;

/**
 * 에러를 로깅하고 토스트 메시지로 표시
 *
 * @param error - Firebase 에러
 * @param context - 에러 발생 컨텍스트
 * @param showToastFn - 토스트 표시 함수
 * @param tFn - i18n 번역 함수 (get(t) 결과)
 * @returns 에러 정보 객체
 *
 * 사용 예시:
 * ```typescript
 * import { logAndShowError } from '$lib/utils/error-handler';
 * import { showToast } from '$lib/stores/toast';
 * import { get } from 'svelte/store';
 * import { t } from '$lib/stores/i18n';
 *
 * try {
 *   await deletePost(postId);
 * } catch (error) {
 *   logAndShowError(error, 'deletePost', showToast, get(t));
 * }
 * ```
 */
export function logAndShowError(
  error: unknown,
  context: string,
  showToastFn: ShowToastFunction,
  tFn: TranslateFunction
): ErrorInfo {
  const errorInfo = handleFirebaseError(error, context);

  // i18n 키를 번역된 메시지로 변환
  const translatedMessage = tFn(errorInfo.key);

  // 토스트 메시지 표시
  showToastFn(translatedMessage, 'error');

  // 에러 정보 반환 (필요시 사용)
  return errorInfo;
}
