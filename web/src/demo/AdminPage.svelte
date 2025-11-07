<script>
  /**
   * 관리자 페이지
   * 관리자 기능을 제공합니다.
   * 향후 사용자 관리, 게시물 관리, 신고 관리 등의 기능이 추가될 예정입니다.
   */
  import { onMount } from 'svelte';
  import { t } from '../lib/stores/i18n.ts';
  import { setPageTitle } from '../lib/stores/pageTitle.ts';
  import { navigate } from '../lib/utils/navigation.ts';

  /**
   * 컴포넌트 마운트 시 페이지 제목 설정
   */
  onMount(() => {
    setPageTitle($t('관리자'));
  });

  /**
   * 메뉴로 돌아가기
   * navigate() 함수를 사용하여 SPA 방식으로 페이지 이동
   */
  function goBack() {
    navigate('/menu');
  }
</script>

<div class="admin-container">
  <div class="admin-card">
    <div class="admin-header">
      <div class="admin-icon">🛡️</div>
      <h1 class="admin-title">{$t('관리자')}</h1>
    </div>

    <div class="construction-content">
      <p class="construction-message">{$t('공사중메시지')}</p>
      <p class="construction-description">{$t('공사중설명_관리자')}</p>
    </div>

    <!-- 향후 추가될 관리 기능 섹션 (주석 처리) -->
    <!--
    <div class="admin-sections">
      <div class="admin-section">
        <h2>사용자 관리</h2>
        <p>사용자 목록, 차단, 삭제 등</p>
      </div>

      <div class="admin-section">
        <h2>게시물 관리</h2>
        <p>게시물 삭제, 숨김 등</p>
      </div>

      <div class="admin-section">
        <h2>신고 관리</h2>
        <p>신고된 게시물 및 댓글 관리</p>
      </div>

      <div class="admin-section">
        <h2>통계</h2>
        <p>사용자, 게시물, 댓글 통계</p>
      </div>
    </div>
    -->

    <button class="back-button" onclick={goBack}>{$t('메뉴로돌아가기')}</button>
  </div>
</div>

<style>
  .admin-container {
    width: 100%;
    max-width: 56rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .admin-card {
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }

  .admin-header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
  }

  .admin-icon {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  .admin-title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
  }

  .construction-content {
    text-align: center;
    margin-bottom: 2rem;
    padding: 2rem;
    background-color: #fef3c7;
    border-radius: 0.375rem;
  }

  .construction-message {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #92400e;
  }

  .construction-description {
    margin: 0;
    font-size: 0.95rem;
    color: #78350f;
  }

  /* 향후 사용될 관리 섹션 스타일 */
  .admin-sections {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .admin-section {
    padding: 1.5rem;
    background-color: #f9fafb;
    border-radius: 0.375rem;
    border: 1px solid #e5e7eb;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .admin-section:hover {
    background-color: #f3f4f6;
    border-color: #d1d5db;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .admin-section h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #111827;
  }

  .admin-section p {
    margin: 0;
    font-size: 0.875rem;
    color: #6b7280;
  }

  .back-button {
    width: 100%;
    padding: 0.75rem;
    background-color: #3b82f6;
    color: #ffffff;
    border: none;
    border-radius: 0.375rem;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .back-button:hover {
    background-color: #2563eb;
  }

  @media (max-width: 640px) {
    .admin-card {
      padding: 1.5rem;
    }

    .construction-content {
      padding: 1.5rem;
    }
  }
</style>
