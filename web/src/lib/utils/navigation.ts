/**
 * SPA 네비게이션 유틸리티
 *
 * 페이지 새로고침 없이 URL을 변경하고 라우터에 알리는 함수를 제공합니다.
 * 클라이언트 사이드 라우팅을 구현할 때 사용됩니다.
 */

/**
 * SPA 방식으로 경로 이동
 * 페이지 새로고침 없이 URL을 변경하고 라우터에 알림
 *
 * @param {string} path - 이동할 경로 (예: '/', '/user/profile', '/post/list')
 * @example
 * import { navigate } from '$lib/utils/navigation';
 *
 * // 버튼 클릭 시 이동
 * <button onclick={() => navigate('/user/profile')}>프로필</button>
 *
 * // 프로그래밍적으로 이동
 * navigate('/post/list');
 */
export function navigate(path: string): void {
  // 1. 브라우저의 history에 새로운 상태 추가 (페이지 새로고침 없음)
  window.history.pushState({}, '', path);

  // 2. popstate 이벤트 발생시켜 라우터에 경로 변경 알림
  window.dispatchEvent(new PopStateEvent('popstate'));
}
