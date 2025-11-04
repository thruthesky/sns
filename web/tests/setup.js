/**
 * Vitest 글로벌 테스트 셋업 파일
 *
 * 모든 테스트 실행 전에 자동으로 로드됩니다.
 *
 * 주요 기능:
 * - Firebase SDK 모킹 (실제 Firebase 호출 방지)
 * - @testing-library/jest-dom 확장 매처 로드
 * - 글로벌 테스트 환경 설정
 */

// @testing-library/jest-dom 확장 매처 로드
// - toBeInTheDocument(), toHaveClass() 등 추가 매처 제공
import '@testing-library/jest-dom';

// Vitest의 모킹 유틸리티
import { vi } from 'vitest';

// ==========================================
// Firebase SDK 모킹
// ==========================================

/**
 * Firebase App 모킹
 * - initializeApp, getApp 등 Firebase 앱 초기화 함수 모킹
 * - 테스트 중 실제 Firebase 프로젝트에 연결되지 않도록 방지
 */
vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(),
  getApp: vi.fn(() => ({})),
  getApps: vi.fn(() => [])
}));

/**
 * Firebase Authentication 모킹
 * - signInWithEmailAndPassword, createUserWithEmailAndPassword 등 모킹
 * - 테스트 중 실제 인증 요청이 발생하지 않도록 방지
 */
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => ({})),
  signInWithEmailAndPassword: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
  onAuthStateChanged: vi.fn()
}));

/**
 * Firebase Realtime Database 모킹
 * - ref, get, set, update, push 등 데이터베이스 함수 모킹
 * - 테스트 중 실제 데이터베이스에 읽기/쓰기가 발생하지 않도록 방지
 */
vi.mock('firebase/database', () => ({
  getDatabase: vi.fn(() => ({})),
  ref: vi.fn(),
  get: vi.fn(),
  set: vi.fn(),
  update: vi.fn(),
  push: vi.fn(),
  remove: vi.fn(),
  onValue: vi.fn(),
  off: vi.fn(),
  query: vi.fn(),
  orderByChild: vi.fn(),
  limitToLast: vi.fn()
}));

/**
 * Firebase Storage 모킹
 * - uploadBytes, getDownloadURL 등 스토리지 함수 모킹
 * - 테스트 중 실제 파일 업로드가 발생하지 않도록 방지
 */
vi.mock('firebase/storage', () => ({
  getStorage: vi.fn(() => ({})),
  ref: vi.fn(),
  uploadBytes: vi.fn(),
  getDownloadURL: vi.fn(),
  deleteObject: vi.fn()
}));
