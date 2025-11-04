/**
 * Toast 메시지 관리 Store
 *
 * 사용자에게 짧은 알림 메시지를 표시하는 toast 시스템입니다.
 * Svelte 5의 writable store를 사용하여 반응형으로 구현되었습니다.
 *
 * 사용 예시:
 * import { showToast } from '$lib/stores/toast';
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
import type { Writable } from 'svelte/store';

/**
 * Toast 메시지 타입
 * success: 성공 메시지 (초록색)
 * error: 에러 메시지 (빨간색)
 * info: 정보 메시지 (파란색)
 * warning: 경고 메시지 (주황색)
 */
export type ToastType = 'success' | 'error' | 'info' | 'warning';

/**
 * Toast 메시지 데이터 구조
 */
export interface Toast {
  /** Toast의 고유 ID (timestamp 기반) */
  id: number;
  /** 표시할 메시지 내용 */
  message: string;
  /** 메시지 타입 (색상 및 아이콘 결정) */
  type: string;
}

/**
 * Toast 메시지 목록을 저장하는 Store
 * 여러 개의 toast가 동시에 표시될 수 있습니다.
 */
export const toasts: Writable<Toast[]> = writable([]);

/**
 * Toast 메시지를 표시합니다.
 *
 * @param message - 표시할 메시지 내용
 * @param type - 메시지 타입 (success, error, info, warning). 기본값: 'success'
 * @param duration - 메시지 표시 시간 (밀리초). 기본값: 3000ms (3초)
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
export function showToast(message: string, type: ToastType = 'success', duration: number = 3000): void {
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
 * @param id - 제거할 toast의 ID
 *
 * 이 함수는 showToast()에서 자동으로 호출되거나,
 * 사용자가 닫기 버튼을 클릭할 때 수동으로 호출됩니다.
 */
export function removeToast(id: number): void {
  toasts.update((allToasts) => {
    return allToasts.filter((toast) => toast.id !== id);
  });
}
