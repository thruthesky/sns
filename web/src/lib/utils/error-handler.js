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
 * ```javascript
 * import { handleFirebaseError } from '$lib/utils/error-handler.js';
 * import { get } from 'svelte/store';
 * import { t } from '$lib/stores/i18n.js';
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
 * Firebase 에러 코드를 i18n 키로 매핑
 *
 * @param {string} code - Firebase 에러 코드 (예: 'auth/user-not-found', 'PERMISSION_DENIED')
 * @returns {string} i18n 번역 키
 *
 * 에러 코드 매핑:
 * - Authentication 에러: auth/* -> error.auth.*
 * - Database 에러: PERMISSION_DENIED, permission-denied 등 -> error.db.*
 * - Storage 에러: storage/* -> error.storage.*
 * - 기타: error.unknown
 */
export function mapFirebaseErrorCode(code) {
  // 에러 코드가 없는 경우 기본값
  if (!code) {
    return 'error.unknown';
  }

  // Authentication 에러 매핑
  const authErrorMap = {
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
  const databaseErrorMap = {
    'PERMISSION_DENIED': 'error.db.permissionDenied',
    'permission-denied': 'error.db.permissionDenied',
    'network-error': 'error.db.networkError',
    'offline': 'error.offline',
    'authentication-required': 'error.db.authenticationRequired',
    'disconnected': 'error.offline',
    'unavailable': 'error.db.networkError',
  };

  // Storage 에러 매핑
  const storageErrorMap = {
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
 * Firebase 에러 타입 정의
 * @typedef {Error & {code?: string}} FirebaseError
 */

/**
 * Firebase 에러를 처리하고 사용자 친화적인 정보 반환
 *
 * @param {FirebaseError | Error | null} error - Firebase에서 발생한 에러 객체
 * @param {string} context - 에러 발생 컨텍스트 (예: 'createPost', 'updateUser', 'uploadPhoto')
 * @returns {{key: string, code: string | null, message: string, context: string}} 에러 정보 객체
 *   - key: i18n 번역 키 (예: 'error.db.permissionDenied')
 *   - code: 원본 Firebase 에러 코드 (예: 'PERMISSION_DENIED')
 *   - message: 원본 에러 메시지 (디버깅용)
 *   - context: 에러 발생 컨텍스트
 *
 * 사용 예시:
 * ```javascript
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
export function handleFirebaseError(error, context = 'unknown') {
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

  // Firebase 에러 코드 추출
  // error.code (Firebase SDK v9+)
  // error.message에서 코드 추출 시도
  // @ts-ignore - Firebase 에러는 code 속성을 가짐
  let errorCode = error.code ?? null;

  // 에러 메시지에서 코드 추출 시도 (fallback)
  if (!errorCode && error.message) {
    // "Firebase: Error (auth/invalid-email)." 같은 형식에서 코드 추출
    const match = error.message.match(/\(([^)]+)\)/);
    if (match && match[1]) {
      errorCode = match[1];
    }
  }

  // 원본 에러 로깅 (개발자용)
  console.error(`[${context}] Firebase 에러:`, {
    code: errorCode,
    message: error.message,
    stack: error.stack,
    originalError: error,
  });

  // 에러 코드를 i18n 키로 변환
  const i18nKey = mapFirebaseErrorCode(errorCode);

  // 에러 정보 반환
  return {
    key: i18nKey,
    code: errorCode,
    message: error.message,
    context,
  };
}

/**
 * 에러를 로깅하고 토스트 메시지로 표시
 *
 * @param {Error} error - Firebase 에러
 * @param {string} context - 에러 발생 컨텍스트
 * @param {Function} showToastFn - 토스트 표시 함수
 * @param {Function} tFn - i18n 번역 함수 (get(t) 결과)
 *
 * 사용 예시:
 * ```javascript
 * import { logAndShowError } from '$lib/utils/error-handler.js';
 * import { showToast } from '$lib/stores/toast.js';
 * import { get } from 'svelte/store';
 * import { t } from '$lib/stores/i18n.js';
 *
 * try {
 *   await deletePost(postId);
 * } catch (error) {
 *   logAndShowError(error, 'deletePost', showToast, get(t));
 * }
 * ```
 */
export function logAndShowError(error, context, showToastFn, tFn) {
  const errorInfo = handleFirebaseError(error, context);

  // i18n 키를 번역된 메시지로 변환
  const translatedMessage = tFn(errorInfo.key);

  // 토스트 메시지 표시
  showToastFn(translatedMessage, 'error');

  // 에러 정보 반환 (필요시 사용)
  return errorInfo;
}
