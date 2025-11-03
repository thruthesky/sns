<script>
  /**
   * 메뉴 페이지
   * 모든 페이지로의 네비게이션 메뉴를 제공합니다.
   */

  import { onMount } from 'svelte';
  import { t } from '../lib/stores/i18n.js';
  import { setPageTitle } from '../lib/stores/pageTitle.js';

  /**
   * 컴포넌트 마운트 시 페이지 제목 설정
   */
  onMount(() => {
    setPageTitle('메뉴');
  });

  /**
   * 경로로 이동
   * @param {string} path - 이동할 경로
   */
  function navigate(path) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  // 메뉴 항목 목록
  const menuItems = [
    { label: '홈', path: '/' },
    { label: '로그인', path: '/user/login' },
    { label: '사용자 프로필', path: '/user/profile' },
    { label: '게시물 목록', path: '/post/list' },
    { label: '게시물 상세 (예: ID:123)', path: '/post/detail/123' },
    { label: '채팅 목록', path: '/chat/list' },
    { label: '설정', path: '/settings' },
    { label: '앱 정보', path: '/about' },
    { label: '도움말', path: '/help' },
    { label: '이용 약관', path: '/terms' },
    { label: '개인정보 처리방침', path: '/privacy' },
    { label: '문의하기', path: '/contact' },
    { label: '[개발] 테스트 게시글 생성', path: '/dev/generate-posts' }
  ];
</script>

<div class="menu-container">
  <div class="menu-card">
    <p class="menu-description">아래에서 이동할 페이지를 선택하세요</p>

    <nav class="menu-list">
      {#each menuItems as item (item.path)}
        <button class="menu-item" onclick={() => navigate(item.path)}>
          {item.label}
        </button>
      {/each}
    </nav>
  </div>
</div>

<style>
  /* 메뉴 컨테이너 */
  .menu-container {
    width: 100%;
    max-width: 28rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* 메뉴 카드 */
  .menu-card {
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }

  /* 메뉴 설명 */
  .menu-description {
    margin: 0 0 1.5rem 0;
    font-size: 0.95rem;
    color: #6b7280;
  }

  /* 메뉴 목록 */
  .menu-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  /* 메뉴 항목 버튼 */
  .menu-item {
    padding: 0.75rem 1rem;
    background-color: #f3f4f6;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    font-size: 0.95rem;
    color: #111827;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
  }

  .menu-item:hover {
    background-color: #e5e7eb;
    border-color: #d1d5db;
    transform: translateX(4px);
  }

  .menu-item:active {
    background-color: #d1d5db;
  }

  /* 반응형 */
  @media (max-width: 640px) {
    .menu-card {
      padding: 1.5rem;
    }
  }
</style>
