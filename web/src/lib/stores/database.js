/**
 * Firebase Realtime Database 유틸리티
 *
 * 데이터베이스 읽기, 쓰기, 업데이트, 삭제 및 실시간 구독 기능을 제공합니다.
 *
 * 사용법:
 * import { writeData, updateData, deleteData, pushData, createRealtimeStore } from '$lib/stores/database.js';
 *
 * // 데이터 쓰기
 * await writeData('users/user123', { name: 'John', age: 30 });
 *
 * // 실시간 구독
 * const posts = createRealtimeStore('posts');
 * {#if $posts}
 *   {#each Object.entries($posts) as [key, post]}
 *     <div>{post.title}</div>
 *   {/each}
 * {/if}
 */

import { writable } from 'svelte/store';
import { database } from '../utils/firebase.js';
import { ref, push, set, onValue, off, update, remove, get } from 'firebase/database';

/**
 * 실시간 데이터 구독을 위한 스토어 생성
 *
 * 직관적이고 이해하기 쉬운 함수형 API 유지
 * loading, error 상태를 자동으로 추적합니다
 *
 * @param {string} path - 데이터베이스 경로 (예: 'posts', 'users/user123')
 * @returns {Object} Svelte 스토어 (구독 가능) - { data, loading, error }
 *
 * @example
 * // 기본 사용법
 * const posts = createRealtimeStore('posts');
 * // $posts는 { data, loading, error } 객체
 *
 * {#if $posts.loading}
 *   <p>로딩 중...</p>
 * {:else if $posts.error}
 *   <p>에러: {$posts.error.message}</p>
 * {:else if $posts.data}
 *   <p>{$posts.data.title}</p>
 * {/if}
 */
export function createRealtimeStore(path) {
  // 초기 상태: data는 null, loading은 true, error는 null
  const { subscribe, set: setStore } = writable({
    data: null,
    loading: true,
    error: null
  });

  const dbRef = ref(database, path);

  // 데이터 변경 실시간 감지 (성공 및 실패 콜백 포함)
  onValue(
    dbRef,
    (snapshot) => {
      // 데이터 로드 성공
      const data = snapshot.val();
      setStore({
        data: data,
        loading: false,
        error: null
      });
      console.log(`✅ 실시간 데이터 로드 성공: ${path}`, data);
    },
    (error) => {
      // 데이터 로드 실패 (권한 오류, 네트워크 오류 등)
      console.error(`❌ 실시간 데이터 로드 실패: ${path}`, error);
      setStore({
        data: null,
        loading: false,
        error: error
      });
    }
  );

  return {
    subscribe,
    // 컴포넌트 언마운트 시 구독 해제 (메모리 누수 방지)
    unsubscribe: () => off(dbRef)
  };
}

/**
 * createRealtimeStore() 함수의 alias (별칭)
 *
 * 더 짧은 이름으로 실시간 데이터 구독을 할 수 있습니다.
 * createRealtimeStore()와 동일하게 작동합니다.
 *
 * @param {string} path - 데이터베이스 경로 (예: 'posts', 'users/user123')
 * @returns {Object} Svelte 스토어 (구독 가능) - { data, loading, error }
 *
 * @example
 * // rtdb() 사용 (짧은 이름)
 * const posts = rtdb('posts');
 *
 * // createRealtimeStore() 사용 (명시적 이름)
 * const posts = createRealtimeStore('posts');
 *
 * // 두 방식 모두 동일합니다
 */
export const rtdb = createRealtimeStore;


/**
 * 데이터 쓰기 (기존 데이터 덮어쓰기)
 *
 * @param {string} path - 데이터베이스 경로
 * @param {any} data - 저장할 데이터
 * @returns {Promise<{success: boolean, error?: string}>} 작업 결과
 */
export async function writeData(path, data) {
  try {
    const dbRef = ref(database, path);
    await set(dbRef, data);
    return { success: true };
  } catch (error) {
    console.error('데이터 쓰기 오류:', error);
    return { success: false, error: error.message };
  }
}

/**
 * 데이터 업데이트 (부분 업데이트)
 *
 * @param {string} path - 데이터베이스 경로
 * @param {Object} updates - 업데이트할 필드들 { field1: value1, field2: value2 }
 * @returns {Promise<{success: boolean, error?: string}>} 작업 결과
 */
export async function updateData(path, updates) {
  try {
    const dbRef = ref(database, path);
    await update(dbRef, updates);
    return { success: true };
  } catch (error) {
    console.error('데이터 업데이트 오류:', error);
    return { success: false, error: error.message };
  }
}

/**
 * 데이터 삭제
 *
 * @param {string} path - 데이터베이스 경로
 * @returns {Promise<{success: boolean, error?: string}>} 작업 결과
 */
export async function deleteData(path) {
  try {
    const dbRef = ref(database, path);
    await remove(dbRef);
    return { success: true };
  } catch (error) {
    console.error('데이터 삭제 오류:', error);
    return { success: false, error: error.message };
  }
}

/**
 * 새 항목 추가 (자동 생성된 키 사용)
 *
 * @param {string} path - 데이터베이스 경로
 * @param {any} data - 저장할 데이터
 * @returns {Promise<{success: boolean, key?: string, error?: string}>} 작업 결과 및 생성된 키
 */
export async function pushData(path, data) {
  try {
    const dbRef = ref(database, path);
    const newRef = push(dbRef);
    await set(newRef, data);
    return { success: true, key: newRef.key };
  } catch (error) {
    console.error('데이터 추가 오류:', error);
    return { success: false, error: error.message };
  }
}

/**
 * 데이터 읽기 (한 번만)
 *
 * @param {string} path - 데이터베이스 경로
 * @returns {Promise<{success: boolean, data?: any, error?: string}>} 작업 결과 및 데이터
 */
export async function readData(path) {
  try {
    const dbRef = ref(database, path);
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      return { success: true, data: snapshot.val() };
    } else {
      return { success: true, data: null };
    }
  } catch (error) {
    console.error('데이터 읽기 오류:', error);
    return { success: false, error: error.message };
  }
}

/**
 * 온라인 상태 관리
 *
 * Firebase의 .info/connected를 사용하여 사용자의 온라인/오프라인 상태를 관리합니다.
 *
 * @param {string} userId - 사용자 ID
 * @returns {Function} 상태 관리 해제 함수
 */
export function setupPresence(userId) {
  const userStatusRef = ref(database, `status/${userId}`);
  const connectedRef = ref(database, '.info/connected');

  const unsubscribe = onValue(connectedRef, (snapshot) => {
    if (snapshot.val() === true) {
      // 온라인 상태로 설정
      set(userStatusRef, {
        online: true,
        lastSeen: Date.now()
      });

      // 연결이 끊기면 오프라인으로 변경
      onValue(ref(database, `.info/connected`), (snap) => {
        if (!snap.val()) {
          update(userStatusRef, {
            online: false,
            lastSeen: Date.now()
          });
        }
      });
    }
  });

  return () => {
    // 수동으로 오프라인 상태로 설정
    update(userStatusRef, {
      online: false,
      lastSeen: Date.now()
    });
    off(connectedRef);
  };
}
