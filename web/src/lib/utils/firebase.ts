/**
 * Firebase 초기화 및 설정
 *
 * Firebase Auth와 Realtime Database를 초기화하고 내보냅니다.
 * 환경 변수를 통해 Firebase 설정을 관리합니다.
 *
 * 사용법:
 * import { auth, database } from '$lib/utils/firebase';
 */

import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getDatabase, type Database } from 'firebase/database';
import { getStorage, type FirebaseStorage } from 'firebase/storage';
import { firebaseConfig } from '../../config/firebase.web-config';


console.log('Firebase Config:', firebaseConfig);

// Firebase 앱 초기화
const app: FirebaseApp = initializeApp(firebaseConfig);

// Firebase Authentication 인스턴스
export const auth: Auth = getAuth(app);

// Firebase Realtime Database 인스턴스
export const database: Database = getDatabase(app);

// Firebase Storage 인스턴스
export const storage: FirebaseStorage = getStorage(app);

// Firebase 앱 인스턴스 (필요 시 사용)
export default app;
