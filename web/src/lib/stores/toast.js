/**
 * Toast 메시지 관리 Store
 *
 * 사용자에게 짧은 알림 메시지를 표시하는 toast 시스템입니다.
 * Svelte 5의 $state를 사용하여 반응형으로 구현되었습니다.
 *
 * 사용 예시:
 * import { showToast } from '$lib/stores/toast.js';
 *
 * // 성공 메시지
 * showToast('게시글이 작성되었습니다.', 'success');
 *
 * // 에러 메시지
 * showToast('오류가 발생했습니다.', 'error');
 *
 * // 일반 메시지 (기본값)
 * showToast('알림 메시지');
 */

import { writable } from 'svelte/store';

/**
 * Toast 메시지 정보를 저장하는 Store
 * @type {import('svelte/store').Writable<{id: number, message: string, type: string}[]>}
 */
export const toasts = writable([]);

/**
 * Toast 메시지를 표시합니다.
 *
 * @param {string} message - 표시할 메시지 내용
 * @param {('success'|'error'|'info'|'warning')} [type='success'] - 메시지 타입 (success, error, info, warning)
 * @param {number} [duration=3000] - 메시지 표시 시간 (밀리초)
 *
 * 기능:
 * - 메시지를 화면에 표시
 * - 지정된 시간 후 자동으로 사라짐
 * - 여러 개의 toast를 동시에 표시 가능
 *
 * 사용 예시:
 * showToast('저장되었습니다.', 'success');
 * showToast('삭제 실패', 'error', 5000);
 * showToast('처리 중입니다...', 'info');
 */
export function showToast(message, type = 'success', duration = 3000) {
  // 고유 ID 생성 (timestamp)
  const id = Date.now();

  // 새 toast를 목록에 추가
  toasts.update((allToasts) => {
    return [...allToasts, { id, message, type }];
  });

  // 지정된 시간 후 toast 제거
  setTimeout(() => {
    removeToast(id);
  }, duration);
}

/**
 * 특정 ID의 toast를 제거합니다.
 *
 * @param {number} id - 제거할 toast의 ID
 */
export function removeToast(id) {
  toasts.update((allToasts) => {
    return allToasts.filter((toast) => toast.id !== id);
  });
}
