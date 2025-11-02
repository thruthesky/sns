/**
 * Firebase Authentication 스토어
 *
 * 사용자 인증 상태를 관리하는 Svelte 스토어입니다.
 * 로그인, 로그아웃, 회원가입 등의 기능을 제공합니다.
 *
 * 사용법:
 * import { user, loading, signIn, signUp, signOut } from '$lib/stores/auth.js';
 *
 * // 컴포넌트에서 사용
 * {#if $loading}
 *   <p>로딩 중...</p>
 * {:else if $user}
 *   <p>안녕하세요, {$user.email}님!</p>
 * {:else}
 *   <p>로그인이 필요합니다.</p>
 * {/if}
 */

import { writable } from 'svelte/store';
import { auth } from '../utils/firebase.js';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile
} from 'firebase/auth';

/**
 * 사용자 정보 스토어
 * 로그인한 사용자의 정보를 저장합니다.
 * @type {import('svelte/store').Writable<import('firebase/auth').User | null>}
 */
export const user = writable(null);

/**
 * 로딩 상태 스토어
 * 인증 상태를 확인하는 동안 true입니다.
 * @type {import('svelte/store').Writable<boolean>}
 */
export const loading = writable(true);

/**
 * 인증 상태 변경 감지
 * Firebase Auth의 상태 변화를 실시간으로 감지하여 스토어를 업데이트합니다.
 */
onAuthStateChanged(auth, (currentUser) => {
  user.set(currentUser);
  loading.set(false);
});

/**
 * 이메일/비밀번호로 로그인
 *
 * @param {string} email - 사용자 이메일
 * @param {string} password - 사용자 비밀번호
 * @returns {Promise<{success: boolean, error?: string}>} 로그인 결과
 */
export async function signIn(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    console.error('로그인 오류:', error);
    return { success: false, error: getErrorMessage(error.code) };
  }
}

/**
 * 이메일/비밀번호로 회원가입
 *
 * @param {string} email - 사용자 이메일
 * @param {string} password - 사용자 비밀번호
 * @param {string} displayName - 사용자 표시 이름 (선택)
 * @returns {Promise<{success: boolean, error?: string}>} 회원가입 결과
 */
export async function signUp(email, password, displayName = '') {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // 표시 이름 설정
    if (displayName) {
      await updateProfile(userCredential.user, {
        displayName: displayName
      });
    }

    return { success: true };
  } catch (error) {
    console.error('회원가입 오류:', error);
    return { success: false, error: getErrorMessage(error.code) };
  }
}

/**
 * 로그아웃
 *
 * @returns {Promise<{success: boolean, error?: string}>} 로그아웃 결과
 */
export async function signOut() {
  try {
    await firebaseSignOut(auth);
    return { success: true };
  } catch (error) {
    console.error('로그아웃 오류:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Firebase 오류 코드를 한글 메시지로 변환
 *
 * @param {string} errorCode - Firebase 오류 코드
 * @returns {string} 한글 오류 메시지
 */
function getErrorMessage(errorCode) {
  const errorMessages = {
    'auth/invalid-email': '유효하지 않은 이메일 주소입니다.',
    'auth/user-disabled': '비활성화된 계정입니다.',
    'auth/user-not-found': '등록되지 않은 이메일입니다.',
    'auth/wrong-password': '잘못된 비밀번호입니다.',
    'auth/email-already-in-use': '이미 사용 중인 이메일입니다.',
    'auth/weak-password': '비밀번호는 최소 6자 이상이어야 합니다.',
    'auth/too-many-requests': '너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.',
    'auth/network-request-failed': '네트워크 연결을 확인해주세요.',
    'auth/invalid-credential': '인증 정보가 올바르지 않습니다.'
  };

  return errorMessages[errorCode] || '알 수 없는 오류가 발생했습니다.';
}
