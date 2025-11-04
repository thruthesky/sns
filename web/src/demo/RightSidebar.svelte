<script lang="ts">
  /**
   * 오른쪽 사이드바 컴포넌트
   *
   * Firebase Realtime Database의 `/stats/counters` 경로를 실시간으로 구독하여
   * 전체 게시글 수와 댓글 수를 표시합니다.
   *
   * 데이터 구조:
   * /stats/counters/
   *   ├── post: 128 (전체 게시글 수)
   *   └── comment: 456 (전체 댓글 수)
   *
   * 참고: docs/sns-web-database.md - 글/댓글 통계 (stats) 섹션
   */
  import { createRealtimeStore } from "../lib/stores/database.js";
  import { t } from "../lib/stores/i18n.ts";

  /**
   * stats/counters 데이터 타입
   */
  interface StatsCounters {
    user?: number;
    post?: number;
    comment?: number;
    like?: number;
  }

  /**
   * Firebase RTDB의 /stats/counters 경로를 실시간으로 구독
   * - data: StatsCounters 객체 (post, comment 필드 포함)
   * - loading: 로딩 상태 (boolean)
   * - error: 에러 객체 (또는 null)
   */
  const statsStore = createRealtimeStore("stats/counters");

  /**
   * 숫자를 천 단위로 포맷팅
   * @param num - 포맷할 숫자
   * @returns 포맷된 문자열 (예: 1234 → "1,234")
   */
  function formatNumber(num: number | undefined): string {
    if (num === undefined || num === null) return "0";
    return num.toLocaleString();
  }
</script>

<!-- 오른쪽 사이드바 -->
<aside class="right-sidebar">
  <!-- 섹션 제목 -->
  <h2 class="sidebar-title">{$t("전체통계")}</h2>

  <!-- 로딩 상태 -->
  {#if $statsStore.loading}
    <div class="loading-state">
      <div class="spinner"></div>
      <p>{$t("통계로딩중")}</p>
    </div>

    <!-- 에러 상태 -->
  {:else if $statsStore.error}
    <div class="error-state">
      <p class="error-icon">⚠️</p>
      <p class="error-text">{$t("통계로드실패")}</p>
      <p class="error-detail">{$statsStore.error.message}</p>
    </div>

    <!-- 통계 표시 -->
  {:else if $statsStore.data}
    {@const stats = $statsStore.data as StatsCounters}
    <div class="stats-container">
      <!-- 전체 사용자 수 -->
      <div class="stat-card">
        <div class="stat-icon">👥</div>
        <div class="stat-content">
          <h3 class="stat-label">{$t("전체사용자")}</h3>
          <p class="stat-value">{formatNumber(stats.user)}</p>
        </div>
      </div>

      <!-- 전체 게시글 수 -->
      <div class="stat-card">
        <div class="stat-icon">📝</div>
        <div class="stat-content">
          <h3 class="stat-label">{$t("전체글")}</h3>
          <p class="stat-value">{formatNumber(stats.post)}</p>
        </div>
      </div>

      <!-- 전체 댓글 수 -->
      <div class="stat-card">
        <div class="stat-icon">💬</div>
        <div class="stat-content">
          <h3 class="stat-label">{$t("전체댓글")}</h3>
          <p class="stat-value">{formatNumber(stats.comment)}</p>
        </div>
      </div>

      <!-- 전체 좋아요 수 -->
      <div class="stat-card">
        <div class="stat-icon">❤️</div>
        <div class="stat-content">
          <h3 class="stat-label">{$t("전체좋아요")}</h3>
          <p class="stat-value">{formatNumber(stats.like)}</p>
        </div>
      </div>
    </div>

    <!-- 데이터 없음 -->
  {:else}
    <div class="empty-state">
      <p class="empty-icon">📊</p>
      <p class="empty-text">{$t("통계데이터없음")}</p>
    </div>
  {/if}
</aside>

<style>
  /* ============================================================================
     오른쪽 사이드바
     ============================================================================ */
  .right-sidebar {
    position: fixed;
    top: 4rem; /* topbar 높이만큼 아래 */
    right: 0;
    width: 280px;
    height: calc(100vh - 4rem);
    padding: 1.5rem;
    background-color: #ffffff;
    border-left: 1px solid #e5e7eb;
    overflow-y: auto;
    z-index: 10;
  }

  /* ============================================================================
     섹션 제목
     ============================================================================ */
  .sidebar-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #111827;
    margin: 0 0 1rem 0;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #3b82f6;
  }

  /* ============================================================================
     통계 컨테이너
     ============================================================================ */
  .stats-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* ============================================================================
     통계 카드
     ============================================================================ */
  .stat-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  /* 아이콘 */
  .stat-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  /* 컨텐츠 */
  .stat-content {
    flex: 1;
    min-width: 0;
  }

  .stat-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #6b7280;
    margin: 0 0 0.25rem 0;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }

  /* ============================================================================
     로딩 상태
     ============================================================================ */
  .loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    text-align: center;
  }

  .spinner {
    width: 32px;
    height: 32px;
    border: 3px solid #e5e7eb;
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-bottom: 0.75rem;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .loading-state p {
    color: #6b7280;
    font-size: 0.875rem;
    margin: 0;
  }

  /* ============================================================================
     에러 상태
     ============================================================================ */
  .error-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    text-align: center;
  }

  .error-icon {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
  }

  .error-text {
    color: #dc2626;
    font-size: 0.875rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
  }

  .error-detail {
    color: #9ca3af;
    font-size: 0.75rem;
    margin: 0;
    word-break: break-word;
  }

  /* ============================================================================
     빈 상태
     ============================================================================ */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    text-align: center;
  }

  .empty-icon {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
  }

  .empty-text {
    color: #6b7280;
    font-size: 0.875rem;
    margin: 0;
  }

  /* ============================================================================
     반응형 (모바일)
     ============================================================================ */
  @media (max-width: 1024px) {
    .right-sidebar {
      display: none; /* 태블릿/모바일에서는 사이드바 숨김 */
    }
  }
</style>
