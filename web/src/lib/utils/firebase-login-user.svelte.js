/**
 * Firebase 로그인 사용자 관리
 *
 * Svelte 5의 $state를 사용하여 현재 로그인한 사용자의 정보를 반응형으로 관리합니다.
 * Firebase의 onValue()를 직접 사용하여 실시간 데이터베이스의 사용자 데이터를 자동으로 동기화합니다.
 *
 * 사용 예시:
 * ```javascript
 * import { login } from '$lib/utils/firebase-login-user.svelte.js';
 *
 * // 템플릿에서 직접 사용
 * {#if login.loading}
 *   <p>로딩 중...</p>
 * {:else if login.isAuthenticated}
 *   <p>환영합니다, {login.data?.displayName}!</p>
 *   <p>UID: {login.uid}</p>
 *   <p>Email: {login.email}</p>
 *   <p>전화번호: {login.phoneNumber}</p>
 * {:else}
 *   <p>로그인이 필요합니다.</p>
 * {/if}
 *
 * // 프로필 업데이트
 * await login.updateProfile({ displayName: '홍길동' });
 * ```
 */

import { onAuthStateChanged, updateProfile as firebaseUpdateProfile } from 'firebase/auth';
import { ref as dbRef, onValue, update as dbUpdate } from 'firebase/database';
import { auth, database } from './firebase.js';

/**
 * Firebase 로그인 사용자 관리 클래스
 *
 * Singleton 패턴으로 구현되어 애플리케이션 전체에서 하나의 인스턴스만 사용됩니다.
 * onAuthStateChanged()를 통해 Firebase Auth 상태를 감지하고,
 * onValue()를 통해 Realtime Database의 사용자 데이터를 실시간으로 동기화합니다.
 *
 * 주요 속성:
 * - loading: 로딩 상태 (reactive)
 * - isAuthenticated: 로그인 여부 (reactive)
 * - uid: 사용자 UID (static)
 * - email: 사용자 이메일 (static)
 * - phoneNumber: 사용자 전화번호 (static)
 * - data: RTDB 사용자 데이터 (reactive)
 * - error: 에러 객체 (reactive)
 */
class FirebaseLoginUser {
    // === Singleton 인스턴스 ===
    static #instance = null;

    // === Public 반응형 속성 ===
    // Svelte 5의 $state로 선언되어 자동으로 반응형

    /** @type {boolean} 로딩 상태 (초기값: true) */
    loading = $state(true);

    /** @type {boolean} 인증 상태 (로그인 여부) */
    isAuthenticated = $state(false);

    /** @type {string | null} 사용자 UID (static, non-reactive) */
    uid = null;

    /** @type {string | null} 사용자 이메일 (static, non-reactive) */
    email = null;

    /** @type {string | null} 사용자 전화번호 (static, non-reactive) */
    phoneNumber = null;

    /** @type {any} Realtime Database의 사용자 데이터 (users/<uid>) */
    data = $state(null);

    /** @type {Error | null} 에러 객체 */
    error = $state(null);

    // === Private 속성 ===

    /** @type {import('firebase/auth').User | null} Firebase Auth 사용자 객체 (내부 전용) */
    #firebaseUser = null;

    /** @type {(() => void) | null} onAuthStateChanged 구독 해제 함수 */
    #authUnsubscribe = null;

    /** @type {(() => void) | null} onValue 구독 해제 함수 */
    #dbUnsubscribe = null;

    /**
     * FirebaseLoginUser 생성자 (private)
     *
     * 외부에서 직접 생성할 수 없으며, getInstance()를 통해서만 접근 가능합니다.
     */
    constructor() {
        // 브라우저 환경에서만 Firebase 초기화
        if (typeof window !== 'undefined') {
            this.#initializeAuth();
        }
    }

    /**
     * Singleton 인스턴스 가져오기
     *
     * @returns {FirebaseLoginUser} FirebaseLoginUser 인스턴스
     *
     * @example
     * const loginUser = FirebaseLoginUser.getInstance();
     * console.log(loginUser.isAuthenticated);
     */
    static getInstance() {
        if (!FirebaseLoginUser.#instance) {
            FirebaseLoginUser.#instance = new FirebaseLoginUser();
        }
        return FirebaseLoginUser.#instance;
    }

    /**
     * Firebase Auth 초기화 및 상태 리스너 설정
     *
     * onAuthStateChanged()를 사용하여 로그인/로그아웃 상태를 감지합니다.
     * 로그인 시 onValue()를 통해 사용자 데이터를 실시간으로 로드하고,
     * uid, email, phoneNumber 같은 static 속성들을 업데이트합니다.
     */
    #initializeAuth() {
        try {
            // Firebase Auth 인스턴스 확인
            if (!auth) {
                throw new Error('Auth instance not available');
            }

            // console.log('FirebaseLoginUser: Initializing auth state listener...');

            // Firebase Auth 상태 변경 리스너 등록
            this.#authUnsubscribe = onAuthStateChanged(
                auth,
                (firebaseUser) => {
                    // console.log('FirebaseLoginUser: Auth state changed', firebaseUser?.uid || 'null');

                    // 내부 Firebase User 객체 저장
                    this.#firebaseUser = firebaseUser;

                    if (firebaseUser) {
                        // 로그인 상태 - static 속성 업데이트
                        this.isAuthenticated = true;
                        this.uid = firebaseUser.uid;
                        this.email = firebaseUser.email;
                        this.phoneNumber = firebaseUser.phoneNumber;
                        this.error = null;

                        // 기존 DB 리스너 해제
                        if (this.#dbUnsubscribe) {
                            this.#dbUnsubscribe();
                            this.#dbUnsubscribe = null;
                        }

                        // 사용자 데이터 실시간 로드 (onValue 사용)
                        // console.log(`FirebaseLoginUser: Loading user data from users/${firebaseUser.uid}`);
                        const userRef = dbRef(database, `users/${firebaseUser.uid}`);

                        this.#dbUnsubscribe = onValue(
                            userRef,
                            async (snapshot) => {
                                // 데이터 업데이트
                                this.data = snapshot.val();
                                // console.log(`FirebaseLoginUser: User data updated`, this.data);

                                // 📝 사용자 데이터가 없으면 자동으로 생성
                                // 이렇게 하면 Firebase Cloud Functions의 onUserRegister가 트리거되어
                                // createdAt, updatedAt 등의 필수 필드가 자동으로 생성됩니다
                                if (!this.data && firebaseUser) {
                                    console.log('FirebaseLoginUser: 사용자 데이터가 없습니다. 기본 프로필 생성 중...');

                                    const now = Date.now();
                                    const defaultUserData = {
                                        displayName: firebaseUser.displayName || firebaseUser.phoneNumber || 'User',
                                        email: firebaseUser.email || null,
                                        photoUrl: firebaseUser.photoURL || null,
                                        phoneNumber: firebaseUser.phoneNumber || null,
                                        createdAt: now,
                                        updatedAt: now
                                    };

                                    try {
                                        await dbUpdate(userRef, defaultUserData);
                                        console.log('FirebaseLoginUser: 기본 프로필 생성 완료', defaultUserData);
                                    } catch (createError) {
                                        console.error('FirebaseLoginUser: 프로필 생성 실패', createError);
                                        this.error = createError;
                                    }
                                }
                            },
                            (dbError) => {
                                // DB 에러 발생
                                // console.error('FirebaseLoginUser: Database error', dbError);
                                this.error = dbError;
                            }
                        );
                    } else {
                        // 로그아웃 상태 - 모든 속성 초기화
                        this.isAuthenticated = false;
                        this.uid = null;
                        this.email = null;
                        this.phoneNumber = null;
                        this.data = null;

                        // 기존 DB 리스너 해제
                        if (this.#dbUnsubscribe) {
                            this.#dbUnsubscribe();
                            this.#dbUnsubscribe = null;
                        }
                    }

                    // 로딩 완료
                    this.loading = false;
                },
                (authError) => {
                    // Auth 에러 발생
                    // console.error('FirebaseLoginUser: Auth state change error', authError);
                    this.error = authError;
                    this.loading = false;
                    this.isAuthenticated = false;
                }
            );
        } catch (error) {
            // 초기화 중 에러 발생
            // console.error('FirebaseLoginUser: Initialization error', error);
            this.error = error;
            this.loading = false;
        }
    }

    /**
     * 사용자 프로필 업데이트
     *
     * Firebase Auth와 Realtime Database 모두 업데이트합니다.
     * 업데이트 가능한 필드: displayName, photoUrl 등
     *
     * @param {Object} profileData - 업데이트할 프로필 데이터
     * @param {string} [profileData.displayName] - 표시 이름
     * @param {string} [profileData.photoUrl] - 프로필 사진 URL
     * @returns {Promise<void>}
     * @throws {Error} 사용자가 로그인하지 않았거나 업데이트에 실패한 경우
     *
     * @example
     * // displayName 업데이트
     * await firebaseLoginUser.updateProfile({ displayName: '홍길동' });
     *
     * // displayName과 photoUrl 동시 업데이트
     * await firebaseLoginUser.updateProfile({
     *   displayName: '홍길동',
     *   photoUrl: 'https://example.com/photo.jpg'
     * });
     */
    async updateProfile(profileData) {
        if (!this.#firebaseUser) {
            throw new Error('User is not authenticated');
        }

        try {
            // 1. Firebase Auth 프로필 업데이트
            // ⚠️ 중요: Firebase Auth는 photoURL (대문자 URL)을 사용합니다
            const authUpdateData = {};
            if (profileData.displayName !== undefined) {
                authUpdateData.displayName = profileData.displayName;
            }
            if (profileData.photoUrl !== undefined) {
                // photoUrl을 photoURL로 변환 (Firebase Auth 스펙)
                authUpdateData.photoURL = profileData.photoUrl;
            }

            if (Object.keys(authUpdateData).length > 0) {
                await firebaseUpdateProfile(this.#firebaseUser, authUpdateData);
                // console.log('FirebaseLoginUser: Auth profile updated', authUpdateData);
            }

            // 2. Realtime Database 업데이트
            // ⚠️ 중요: RTDB는 photoUrl (camelCase url)을 사용합니다
            // profileData를 그대로 DB에 저장 (photoUrl 포함)
            const dbUpdateData = { ...profileData };

            const userRef = dbRef(database, `users/${this.uid}`);
            await dbUpdate(userRef, dbUpdateData);
            // console.log('FirebaseLoginUser: /RTDB profile updated', dbUpdateData);
        } catch (error) {
            // console.error('FirebaseLoginUser: Profile update error', error);
            this.error = error;
            throw error;
        }
    }

    /**
     * 특정 필드만 업데이트
     *
     * @param {string} field - 필드 이름
     * @param {any} value - 필드 값
     * @returns {Promise<void>}
     *
     * @example
     * await firebaseLoginUser.updateField('displayName', '홍길동');
     */
    async updateField(field, value) {
        return this.updateProfile({ [field]: value });
    }

    /**
     * displayName 업데이트 (단축 메서드)
     *
     * @param {string} displayName - 표시 이름
     * @returns {Promise<void>}
     *
     * @example
     * await firebaseLoginUser.updateDisplayName('홍길동');
     */
    async updateDisplayName(displayName) {
        return this.updateProfile({ displayName });
    }

    /**
     * photoUrl 업데이트 (단축 메서드)
     *
     * @param {string} photoUrl - 프로필 사진 URL
     * @returns {Promise<void>}
     *
     * @example
     * await firebaseLoginUser.updatePhotoUrl('https://example.com/photo.jpg');
     */
    async updatePhotoUrl(photoUrl) {
        return this.updateProfile({ photoUrl: photoUrl });
    }

    /**
     * 리스너 해제 및 정리 (cleanup)
     *
     * 메모리 누수를 방지하기 위해 컴포넌트 unmount 시 호출합니다.
     * 일반적으로는 자동으로 관리되므로 수동 호출이 필요 없습니다.
     *
     * @example
     * // Svelte 컴포넌트에서
     * import { onDestroy } from 'svelte';
     *
     * onDestroy(() => {
     *   firebaseLoginUser.dispose();
     * });
     */
    dispose() {
        // console.log('FirebaseLoginUser: Disposing...');

        // Auth 리스너 해제
        if (this.#authUnsubscribe) {
            this.#authUnsubscribe();
            this.#authUnsubscribe = null;
        }

        // DB 리스너 해제
        if (this.#dbUnsubscribe) {
            this.#dbUnsubscribe();
            this.#dbUnsubscribe = null;
        }

        // Singleton 인스턴스 제거
        FirebaseLoginUser.#instance = null;
    }
}

/**
 * Firebase 로그인 사용자 Singleton 인스턴스
 *
 * 애플리케이션 전체에서 동일한 인스턴스를 공유합니다.
 * 템플릿에서 직접 속성에 접근할 수 있습니다.
 *
 * 반응형 속성 (Reactive):
 * - loading: 로딩 상태
 * - isAuthenticated: 로그인 여부
 * - data: RTDB 사용자 데이터 (users/<uid>)
 * - error: 에러 객체
 *
 * Static 속성 (Non-reactive):
 * - uid: 사용자 UID
 * - email: 사용자 이메일
 * - phoneNumber: 사용자 전화번호
 *
 * @example
 * ```javascript
 * import { login } from '$lib/utils/firebase-login-user.svelte.js';
 *
 * // 반응형 상태 확인
 * {#if login.loading}
 *   <p>로딩 중...</p>
 * {:else if login.isAuthenticated}
 *   <p>환영합니다, {login.data?.displayName}!</p>
 *   <p>UID: {login.uid}</p>
 *   <p>Email: {login.email}</p>
 *   <p>전화번호: {login.phoneNumber}</p>
 * {:else}
 *   <p>로그인이 필요합니다.</p>
 * {/if}
 *
 * // 프로필 업데이트
 * <button onclick={() => login.updateDisplayName('새 이름')}>
 *   이름 변경
 * </button>
 * ```
 *
 * @type {FirebaseLoginUser}
 */
export const login = FirebaseLoginUser.getInstance();
