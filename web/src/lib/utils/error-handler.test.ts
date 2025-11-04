/**
 * error-handler.ts 유닛 테스트
 *
 * Firebase 에러 핸들링 유틸리티 함수들의 동작을 검증합니다.
 *
 * 테스트 구조:
 * - mapFirebaseErrorCode(): 16개 테스트 (Auth, Database, Storage, 엣지 케이스)
 * - handleFirebaseError(): 8개 테스트 (에러 처리, console.error 스파이)
 * - logAndShowError(): 8개 테스트 (번역, 토스트 통합)
 *
 * 총 32개 테스트 케이스
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { MockInstance } from 'vitest';
import { mapFirebaseErrorCode, handleFirebaseError, logAndShowError } from './error-handler';

/**
 * Firebase 에러 객체 타입
 */
interface FirebaseError {
  code?: string;
  message: string;
}

describe('error-handler.ts', () => {

  // ==========================================
  // 1. mapFirebaseErrorCode 테스트 (16개)
  // ==========================================
  describe('mapFirebaseErrorCode', () => {

    // --------------------------
    // Authentication 에러 (4개)
    // --------------------------
    describe('Authentication 에러', () => {
      it('auth/user-not-found를 올바르게 매핑한다', () => {
        expect(mapFirebaseErrorCode('auth/user-not-found')).toBe('error.auth.userNotFound');
      });

      it('auth/invalid-email을 올바르게 매핑한다', () => {
        expect(mapFirebaseErrorCode('auth/invalid-email')).toBe('error.auth.invalidEmail');
      });

      it('auth/weak-password를 올바르게 매핑한다', () => {
        expect(mapFirebaseErrorCode('auth/weak-password')).toBe('error.auth.weakPassword');
      });

      it('auth/email-already-in-use를 올바르게 매핑한다', () => {
        expect(mapFirebaseErrorCode('auth/email-already-in-use')).toBe('error.auth.emailAlreadyInUse');
      });
    });

    // --------------------------
    // Database 에러 (4개)
    // --------------------------
    describe('Database 에러', () => {
      it('PERMISSION_DENIED를 올바르게 매핑한다', () => {
        expect(mapFirebaseErrorCode('PERMISSION_DENIED')).toBe('error.db.permissionDenied');
      });

      it('network-error를 올바르게 매핑한다', () => {
        expect(mapFirebaseErrorCode('network-error')).toBe('error.db.networkError');
      });

      it('offline를 올바르게 매핑한다', () => {
        expect(mapFirebaseErrorCode('offline')).toBe('error.offline');
      });

      it('unavailable을 올바르게 매핑한다', () => {
        expect(mapFirebaseErrorCode('unavailable')).toBe('error.db.networkError');
      });
    });

    // --------------------------
    // Storage 에러 (2개)
    // --------------------------
    describe('Storage 에러', () => {
      it('storage/unauthorized를 올바르게 매핑한다', () => {
        expect(mapFirebaseErrorCode('storage/unauthorized')).toBe('error.storage.unauthorized');
      });

      it('storage/object-not-found를 올바르게 매핑한다', () => {
        expect(mapFirebaseErrorCode('storage/object-not-found')).toBe('error.storage.objectNotFound');
      });
    });

    // --------------------------
    // 엣지 케이스 (6개)
    // --------------------------
    describe('엣지 케이스', () => {
      it('알 수 없는 에러 코드는 기본값을 반환한다', () => {
        expect(mapFirebaseErrorCode('unknown-error-code-12345')).toBe('error.unknown');
      });

      it('null은 기본값을 반환한다', () => {
        expect(mapFirebaseErrorCode(null as unknown as string)).toBe('error.unknown');
      });

      it('undefined는 기본값을 반환한다', () => {
        expect(mapFirebaseErrorCode(undefined as unknown as string)).toBe('error.unknown');
      });

      it('빈 문자열은 기본값을 반환한다', () => {
        expect(mapFirebaseErrorCode('')).toBe('error.unknown');
      });

      it('네트워크 관련 키워드를 감지한다', () => {
        expect(mapFirebaseErrorCode('custom-network-error')).toBe('error.network');
      });

      it('권한 관련 키워드를 감지한다', () => {
        expect(mapFirebaseErrorCode('custom-permission-issue')).toBe('error.db.permissionDenied');
      });
    });
  });

  // ==========================================
  // 2. handleFirebaseError 테스트 (8개)
  // ==========================================
  describe('handleFirebaseError', () => {
    let consoleErrorSpy: MockInstance;

    // 각 테스트 전에 console.error를 모킹
    beforeEach(() => {
      consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    });

    // 각 테스트 후에 모킹 해제
    afterEach(() => {
      consoleErrorSpy.mockRestore();
    });

    it('에러 객체를 올바르게 처리한다', () => {
      const error: FirebaseError = {
        code: 'auth/user-not-found',
        message: 'User not found'
      };
      const result = handleFirebaseError(error, 'login');

      expect(result.key).toBe('error.auth.userNotFound');
      expect(result.code).toBe('auth/user-not-found');
      expect(result.message).toBe('User not found');
      expect(result.context).toBe('login');
    });

    it('console.error를 호출한다', () => {
      const error: FirebaseError = {
        code: 'PERMISSION_DENIED',
        message: 'Permission denied'
      };
      handleFirebaseError(error, 'createPost');

      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        '[createPost] Firebase 에러:',
        expect.objectContaining({
          code: 'PERMISSION_DENIED',
          message: 'Permission denied'
        })
      );
    });

    it('에러 메시지에서 코드를 추출한다', () => {
      const error: FirebaseError = {
        message: 'Firebase: Error (auth/invalid-email).'
      };
      const result = handleFirebaseError(error, 'signup');

      expect(result.code).toBe('auth/invalid-email');
      expect(result.key).toBe('error.auth.invalidEmail');
    });

    it('null 에러를 처리한다', () => {
      const result = handleFirebaseError(null, 'testContext');

      expect(result.key).toBe('error.unknown');
      expect(result.code).toBeNull();
      expect(result.message).toBe('No error object provided');
      expect(result.context).toBe('testContext');
    });

    it('코드 없는 에러를 처리한다', () => {
      const error: FirebaseError = {
        message: 'Some error without code'
      };
      const result = handleFirebaseError(error, 'testContext');

      expect(result.key).toBe('error.unknown');
      expect(result.code).toBeNull();
    });

    it('context 기본값을 사용한다', () => {
      const error: FirebaseError = {
        code: 'auth/user-not-found',
        message: 'User not found'
      };
      const result = handleFirebaseError(error);

      expect(result.context).toBe('unknown');
    });

    it('Database 에러를 올바르게 처리한다', () => {
      const error: FirebaseError = {
        code: 'PERMISSION_DENIED',
        message: 'Permission denied to read at /posts'
      };
      const result = handleFirebaseError(error, 'listenToPosts');

      expect(result.key).toBe('error.db.permissionDenied');
      expect(result.code).toBe('PERMISSION_DENIED');
      expect(result.context).toBe('listenToPosts');
    });

    it('Storage 에러를 올바르게 처리한다', () => {
      const error: FirebaseError = {
        code: 'storage/unauthorized',
        message: 'User does not have permission to access this object'
      };
      const result = handleFirebaseError(error, 'uploadPhoto');

      expect(result.key).toBe('error.storage.unauthorized');
      expect(result.code).toBe('storage/unauthorized');
      expect(result.context).toBe('uploadPhoto');
    });
  });

  // ==========================================
  // 3. logAndShowError 테스트 (8개)
  // ==========================================
  describe('logAndShowError', () => {
    let consoleErrorSpy: MockInstance;
    let mockShowToast: ReturnType<typeof vi.fn>;
    let mockTranslate: ReturnType<typeof vi.fn>;

    // 각 테스트 전에 모킹 설정
    beforeEach(() => {
      consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      mockShowToast = vi.fn();
      mockTranslate = vi.fn((key: string) => `번역됨: ${key}`);
    });

    // 각 테스트 후에 모킹 해제
    afterEach(() => {
      consoleErrorSpy.mockRestore();
    });

    it('에러를 번역하고 토스트를 표시한다', () => {
      const error: FirebaseError = {
        code: 'auth/user-not-found',
        message: 'User not found'
      };
      logAndShowError(error, 'login', mockShowToast, mockTranslate);

      expect(mockTranslate).toHaveBeenCalledWith('error.auth.userNotFound');
      expect(mockShowToast).toHaveBeenCalledWith('번역됨: error.auth.userNotFound', 'error');
    });

    it('반환 값을 올바르게 제공한다', () => {
      const error: FirebaseError = {
        code: 'PERMISSION_DENIED',
        message: 'Permission denied'
      };
      const result = logAndShowError(error, 'createPost', mockShowToast, mockTranslate);

      expect(result.key).toBe('error.db.permissionDenied');
      expect(result.code).toBe('PERMISSION_DENIED');
      expect(result.context).toBe('createPost');
    });

    it('showToast가 한 번만 호출된다', () => {
      const error: FirebaseError = {
        code: 'auth/invalid-email',
        message: 'Invalid email'
      };
      logAndShowError(error, 'signup', mockShowToast, mockTranslate);

      expect(mockShowToast).toHaveBeenCalledTimes(1);
    });

    it('translate가 i18n 키로 호출된다', () => {
      const error: FirebaseError = {
        code: 'storage/unauthorized',
        message: 'Unauthorized'
      };
      logAndShowError(error, 'uploadPhoto', mockShowToast, mockTranslate);

      expect(mockTranslate).toHaveBeenCalledTimes(1);
      expect(mockTranslate).toHaveBeenCalledWith('error.storage.unauthorized');
    });

    it('여러 에러 타입을 올바르게 처리한다', () => {
      const authError: FirebaseError = { code: 'auth/weak-password', message: 'Weak password' };
      const dbError: FirebaseError = { code: 'PERMISSION_DENIED', message: 'Permission denied' };
      const storageError: FirebaseError = { code: 'storage/quota-exceeded', message: 'Quota exceeded' };

      logAndShowError(authError, 'signup', mockShowToast, mockTranslate);
      logAndShowError(dbError, 'createPost', mockShowToast, mockTranslate);
      logAndShowError(storageError, 'uploadPhoto', mockShowToast, mockTranslate);

      expect(mockShowToast).toHaveBeenCalledTimes(3);
      expect(mockTranslate).toHaveBeenNthCalledWith(1, 'error.auth.weakPassword');
      expect(mockTranslate).toHaveBeenNthCalledWith(2, 'error.db.permissionDenied');
      expect(mockTranslate).toHaveBeenNthCalledWith(3, 'error.storage.quotaExceeded');
    });

    it('null 에러를 올바르게 처리한다', () => {
      logAndShowError(null, 'testContext', mockShowToast, mockTranslate);

      expect(mockTranslate).toHaveBeenCalledWith('error.unknown');
      expect(mockShowToast).toHaveBeenCalledWith('번역됨: error.unknown', 'error');
    });

    it('코드 없는 에러를 올바르게 처리한다', () => {
      const error: FirebaseError = {
        message: 'Some error without code'
      };
      logAndShowError(error, 'testContext', mockShowToast, mockTranslate);

      expect(mockTranslate).toHaveBeenCalledWith('error.unknown');
      expect(mockShowToast).toHaveBeenCalledWith('번역됨: error.unknown', 'error');
    });

    it('console.error가 호출되는지 확인한다', () => {
      const error: FirebaseError = {
        code: 'auth/user-not-found',
        message: 'User not found'
      };
      logAndShowError(error, 'login', mockShowToast, mockTranslate);

      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
  });
});
