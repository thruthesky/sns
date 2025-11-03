<script>
  /**
   * 사용자 목록 페이지
   *
   * 등록된 사용자 목록을 표시하는 페이지입니다.
   */
  import { t } from '../lib/stores/i18n.js';
</script>

<!-- 사용자 목록 페이지 -->
<div class="user-list-page">
  <div class="page-header">
    <h1>{$t('사용자찾기')}</h1>
  </div>

  <div class="page-content">
    <p class="placeholder-text">사용자 목록이 여기에 표시됩니다.</p>
  </div>
</div>

<style>
  /* 페이지 컨테이너 */
  .user-list-page {
    padding: 2rem 1rem;
  }

  /* 페이지 헤더 */
  .page-header {
    margin-bottom: 2rem;
  }

  .page-header h1 {
    font-size: 1.875rem;
    font-weight: bold;
    color: #111827;
    margin: 0;
  }

  /* 페이지 콘텐츠 */
  .page-content {
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 2rem;
    text-align: center;
  }

  /* 플레이스홀더 텍스트 */
  .placeholder-text {
    color: #6b7280;
    font-size: 1rem;
    margin: 0;
  }
</style>
