/**
 * 페이지 제목 스토어
 *
 * 현재 페이지의 제목을 관리합니다.
 * 각 페이지 컴포넌트에서 setPageTitle() 함수로 제목을 설정하면,
 * Topbar에서 구독하여 제목을 탑바에 표시합니다.
 *
 * 사용 예시:
 * import { setPageTitle, pageTitle } from '$lib/stores/pageTitle';
 *
 * // 페이지 컴포넌트에서:
 * onMount(() => {
 *   setPageTitle('게시판');
 * });
 *
 * // Topbar 컴포넌트에서:
 * import { pageTitle } from '$lib/stores/pageTitle';
 * {$pageTitle}
 */

import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

/**
 * 페이지 제목 스토어
 * 현재 페이지의 제목을 문자열로 저장합니다.
 */
export const pageTitle: Writable<string> = writable('');

/**
 * 페이지 제목 설정 함수
 * @param title - 설정할 페이지 제목
 */
export function setPageTitle(title: string): void {
  pageTitle.set(title);
}

/**
 * 페이지 제목 초기화 함수
 * 페이지 제목을 빈 문자열로 초기화합니다.
 */
export function clearPageTitle(): void {
  pageTitle.set('');
}
