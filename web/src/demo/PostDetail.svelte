<script>
  /**
   * 게시물 상세 페이지
   * 개별 게시물의 내용을 표시합니다.
   */
  import { onMount } from 'svelte';
  import { t } from '../lib/stores/i18n.js';
  import { setPageTitle } from '../lib/stores/pageTitle.js';

  /**
   * 컴포넌트 마운트 시 페이지 제목 설정
   */
  onMount(() => {
    setPageTitle($t('게시물목록'));
  });

  /**
   * 메뉴로 돌아가기
   */
  function goBack() {
    window.history.pushState({}, '', '/menu');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
</script>

<div class="post-detail-container">
  <div class="detail-card">
    <div class="construction-content">
      <div class="construction-icon">🚧</div>
      <p class="construction-message">{$t('공사중메시지')}</p>
      <p class="construction-description">{$t('공사중설명_게시물상세')}</p>
    </div>
    <button class="back-button" onclick={goBack}>{$t('메뉴로돌아가기')}</button>
  </div>
</div>

<style>
  .post-detail-container {
    width: 100%;
    max-width: 28rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .detail-card {
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }

  .construction-content {
    text-align: center;
    margin-bottom: 2rem;
  }

  .construction-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .construction-message {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
  }

  .construction-description {
    margin: 0;
    font-size: 0.95rem;
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
    .detail-card {
      padding: 1.5rem;
    }
  }
</style>
