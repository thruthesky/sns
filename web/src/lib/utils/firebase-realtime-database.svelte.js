/**
 * Firebase Realtime Database 반응형 래퍼 유틸리티
 *
 * Svelte 5의 $state를 사용하여 자동으로 반응형 상태를 제공합니다.
 *
 * 사용 예시:
 * ```javascript
 * const user = rtdb('users/123');
 *
 * // 직접 속성 접근 - 자동으로 반응형
 * let { data, loading, error } = user;
 *
 * // 또는 개별 접근
 * if (user.loading) { ... }
 * if (user.error) { ... }
 * if (user.data) { ... }
 * ```
 */

import {
  ref,
  onValue,
  push,
  set,
  update,
  remove
} from 'firebase/database';
import { database } from './firebase.js';

/**
 * Firebase Realtime Database 반응형 클래스
 *
 * Svelte 5의 $state를 사용하여 data, loading, error를 반응형으로 관리합니다.
 * public 속성으로 선언되어 있어 $derived() 없이 직접 destructuring하여 사용 가능합니다.
 */
class FirebaseRealtimeDatabase {
  // === Public 반응형 속성 ===
  // Svelte 5의 $state로 선언되어 자동으로 반응형
  // $derived() 없이 바로 사용 가능: let { data, loading, error } = rtdb('path');

  /** @type {any} 데이터베이스에서 가져온 데이터 */
  data = $state(null);

  /** @type {boolean} 로딩 상태 */
  loading = $state(true);

  /** @type {Error | null} 에러 객체 */
  error = $state(null);

  // === Private 속성 ===
  // private class fields (#)로 선언하여 외부에서 접근 불가

  /** @type {import('firebase/database').DatabaseReference | null} Firebase DB 참조 */
  #dbRef = null;

  /** @type {(() => void) | null} 구독 해제 함수 */
  #unsubscribe = null;

  /**
   * FirebaseRealtimeDatabase 생성자
   *
   * @param {string} path - Firebase 데이터베이스 경로 (예: 'users/123', 'posts')
   * @param {any} [startWith=null] - 초기값 (옵션)
   *
   * @example
   * const user = new FirebaseRealtimeDatabase('users/123');
   * const posts = new FirebaseRealtimeDatabase('posts', []);
   */
  constructor(path, startWith = null) {
    // 초기값 설정
    this.data = startWith;

    // 브라우저 환경에서만 Firebase 초기화
    if (typeof window !== 'undefined') {
      this.#initializeRealtimeDatabase(path);
    }
  }

  /**
   * Firebase Realtime Database 초기화 및 실시간 리스너 설정
   *
   * @param {string} path - Firebase 데이터베이스 경로
   */
  #initializeRealtimeDatabase(path) {
    try {
      // Firebase 데이터베이스 인스턴스 확인
      if (!database) {
        throw new Error('Database instance not available');
      }

      // 데이터베이스 참조 생성
      this.#dbRef = ref(database, path);


      // 실시간 리스너 설정
      this.#unsubscribe = onValue(
        this.#dbRef,
        (snapshot) => {
          // 데이터 업데이트 성공
          this.data = snapshot.val();
          console.log(`RTDB: Data loaded successfully from path "${this.#dbRef.toString().substring(76)}"`, this.data);
          this.loading = false;
          this.error = null;
        },
        (error) => {
          // 에러 발생
          this.error = error;
          this.loading = false;
        }
      );
    } catch (error) {
      // 초기화 중 에러 발생
      this.error = error;
      this.loading = false;
    }
  }

  /**
   * 새로운 데이터를 리스트에 추가 (push)
   *
   * Firebase의 push()는 자동으로 고유한 key를 생성합니다.
   *
   * @param {any} data - 추가할 데이터
   * @returns {Promise<string | null>} 생성된 key 또는 null
   *
   * @example
   * const posts = rtdb('posts');
   * const newKey = await posts.push({ title: '새 글', content: '내용' });
   * console.log('생성된 key:', newKey);
   */
  async push(data) {
    if (!this.#dbRef) return null;

    try {
      const newRef = push(this.#dbRef);
      await set(newRef, data);
      return newRef.key;
    } catch (error) {
      this.error = error;
      throw error;
    }
  }

  /**
   * 현재 경로의 데이터를 완전히 덮어쓰기 (set)
   *
   * @param {any} data - 설정할 데이터
   * @returns {Promise<void>}
   *
   * @example
   * const user = rtdb('users/123');
   * await user.set({ name: '홍길동', age: 30 });
   */
  async set(data) {
    if (!this.#dbRef) return;

    try {
      await set(this.#dbRef, data);
    } catch (error) {
      this.error = error;
      throw error;
    }
  }

  /**
   * 현재 경로의 데이터 일부만 업데이트 (update)
   *
   * 기존 데이터를 유지하면서 특정 필드만 업데이트합니다.
   *
   * @param {Object} data - 업데이트할 데이터 (key-value 객체)
   * @returns {Promise<void>}
   *
   * @example
   * const user = rtdb('users/123');
   * await user.update({ age: 31 }); // name은 유지되고 age만 업데이트
   */
  async update(data) {
    if (!this.#dbRef) return;

    try {
      await update(this.#dbRef, data);
    } catch (error) {
      this.error = error;
      throw error;
    }
  }

  /**
   * 현재 경로의 데이터 삭제 (remove)
   *
   * @returns {Promise<void>}
   *
   * @example
   * const post = rtdb('posts/abc123');
   * await post.remove(); // 해당 게시글 삭제
   */
  async remove() {
    if (!this.#dbRef) return;

    try {
      await remove(this.#dbRef);
    } catch (error) {
      this.error = error;
      throw error;
    }
  }

  /**
   * Firebase DatabaseReference 객체 가져오기
   *
   * 고급 Firebase 작업이 필요할 때 사용합니다.
   *
   * @returns {import('firebase/database').DatabaseReference} Firebase DB 참조
   * @throws {Error} DB 참조가 없을 경우
   *
   * @example
   * const user = rtdb('users/123');
   * const dbRef = user.ref; // 고급 Firebase 작업 수행
   */
  get ref() {
    if (!this.#dbRef) {
      throw new Error('Database reference is not available');
    }
    return this.#dbRef;
  }

  /**
   * 리스너 해제 및 정리 (cleanup)
   *
   * 컴포넌트가 unmount될 때 호출하여 메모리 누수를 방지합니다.
   *
   * @example
   * // Svelte 컴포넌트에서
   * import { onDestroy } from 'svelte';
   *
   * const user = rtdb('users/123');
   * onDestroy(() => {
   *   user.dispose();
   * });
   */
  dispose() {
    if (this.#unsubscribe) {
      this.#unsubscribe();
      this.#unsubscribe = null;
    }
  }
}

/**
 * Firebase Realtime Database 반응형 인스턴스 생성 함수
 *
 * 간편한 팩토리 함수로 FirebaseRealtimeDatabase 인스턴스를 생성합니다.
 *
 * @param {string} path - Firebase 데이터베이스 경로
 * @param {any} [startWith=null] - 초기값 (옵션)
 * @returns {FirebaseRealtimeDatabase} 반응형 데이터베이스 인스턴스
 *
 * @example
 * // 사용자 데이터 가져오기
 * const user = rtdb('users/123');
 * let { data, loading, error } = user;
 *
 * // 게시글 목록 가져오기 (초기값 빈 배열)
 * const posts = rtdb('posts', []);
 *
 * // 상태별 UI 렌더링
 * {#if loading}
 *   <p>로딩 중...</p>
 * {:else if error}
 *   <p>에러: {error.message}</p>
 * {:else if data}
 *   <p>이름: {data.name}</p>
 * {/if}
 *
 * // 데이터 업데이트
 * await user.update({ age: 31 });
 *
 * // 정리 (cleanup)
 * user.dispose();
 */
export function rtdb(path, startWith = null) {
  return new FirebaseRealtimeDatabase(path, startWith);
}
