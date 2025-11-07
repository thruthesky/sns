<script>
  /**
   * 메뉴 페이지
   * 모든 페이지로의 네비게이션 메뉴를 제공합니다.
   */

  import { onMount } from 'svelte';
  import { t } from '../lib/stores/i18n.ts';
  import { setPageTitle } from '../lib/stores/pageTitle.ts';
  import { navigate } from '../lib/utils/navigation.ts';

  /**
   * 컴포넌트 마운트 시 페이지 제목 설정
   */
  onMount(() => {
    setPageTitle($t('메뉴'));
  });

  // 메뉴 항목 목록 - 반응형으로 선언하여 언어 변경 시 자동 업데이트
  let menuItems = $derived([
    { label: $t('홈'), path: '/' },
    { label: $t('로그인'), path: '/user/login' },
    { label: $t('사용자프로필'), path: '/user/profile' },
    { label: $t('게시물목록'), path: '/post/list' },
    { label: $t('게시물상세예시'), path: '/post/detail/123' },
    { label: $t('채팅목록'), path: '/chat/list' },
    { label: $t('설정'), path: '/settings' },
    { label: $t('관리자'), path: '/admin' },
    { label: $t('관리자_신고_목록'), path: '/admin/reports' },
    { label: $t('내_신고_목록'), path: '/my/reports' },
    { label: $t('정보'), path: '/about' },
    { label: $t('도움말'), path: '/help' },
    { label: $t('이용약관'), path: '/terms' },
    { label: $t('개인정보'), path: '/privacy' },
    { label: $t('문의하기'), path: '/contact' },
    { label: $t('개발일지'), path: '/dev/history' },
    { label: $t('바이브코딩SED'), path: '/dev/sed' },
    { label: $t('테스트게시글생성'), path: '/dev/generate-posts' }
  ]);
</script>

<div class="menu-container">
  <div class="menu-card">
    <p class="menu-description">{$t('페이지선택')}</p>

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
