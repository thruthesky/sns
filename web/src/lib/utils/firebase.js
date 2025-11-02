/**
 * Firebase 초기화 및 설정
 *
 * Firebase Auth와 Realtime Database를 초기화하고 내보냅니다.
 * 환경 변수를 통해 Firebase 설정을 관리합니다.
 *
 * 사용법:
 * import { auth, database } from '$lib/utils/firebase.js';
 */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Firebase 설정
// 실제 프로젝트에서는 환경 변수(.env 파일)를 사용하세요
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "YOUR_DATABASE_URL",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase Authentication 인스턴스
export const auth = getAuth(app);

// Firebase Realtime Database 인스턴스
export const database = getDatabase(app);

// Firebase 앱 인스턴스 (필요 시 사용)
export default app;
