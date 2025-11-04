<svelte:options customElement="sns-right-sidebar" />

<script lang="ts">
  /**
   * 오른쪽 사이드바 컴포넌트 (Web Component)
   *
   * 통계 정보를 표시합니다.
   *
   * 사용법:
   * <sns-right-sidebar></sns-right-sidebar>
   */

  import { User, TrendingUp, FileText, MessageCircle } from 'lucide-svelte';
  import { t } from '../stores/i18n.ts';

  /**
   * 통계 데이터 타입
   */
  type StatsData = {
    totalUsers: number;
    totalScore: number;
    totalPosts: number;
    totalMessages: number;
  };

  /**
   * 통계 정보 (추후 Firebase RTDB에서 실시간으로 가져올 예정)
   */
  let stats = $state<StatsData>({
    totalUsers: 8,
    totalScore: 1,
    totalPosts: 0,
    totalMessages: 0
  });
</script>

<!-- 오른쪽 사이드바 -->
<aside class="sidebar">
  <div class="sidebar-content">
    <!-- 통계 섹션 -->
    <h2 class="section-title">{$t('통계')}</h2>

    <div class="stats">
      <!-- 전체 사용자 -->
      <div class="stat-item">
        <div class="stat-icon stat-icon-user">
          <User size={20} />
        </div>
        <div class="stat-content">
          <div class="stat-label">{$t('전체사용자')}</div>
          <div class="stat-value">{stats.totalUsers}</div>
        </div>
      </div>

      <!-- 전체 점수 -->
      <div class="stat-item">
        <div class="stat-icon stat-icon-score">
          <TrendingUp size={20} />
        </div>
        <div class="stat-content">
          <div class="stat-label">{$t('전체점수')}</div>
          <div class="stat-value">{stats.totalScore}</div>
        </div>
      </div>

      <!-- 전체 글 -->
      <div class="stat-item">
        <div class="stat-icon stat-icon-posts">
          <FileText size={20} />
        </div>
        <div class="stat-content">
          <div class="stat-label">{$t('전체글')}</div>
          <div class="stat-value">{stats.totalPosts}</div>
          <div class="stat-description">{$t('준비중')}</div>
        </div>
      </div>

      <!-- 채팅 메시지 -->
      <div class="stat-item">
        <div class="stat-icon stat-icon-messages">
          <MessageCircle size={20} />
        </div>
        <div class="stat-content">
          <div class="stat-label">{$t('채팅메시지')}</div>
          <div class="stat-value">{stats.totalMessages}</div>
        </div>
      </div>
    </div>

    <!-- 알림 -->
    <div class="notice">
      {$t('통계실시간업데이트')}
    </div>
  </div>
</aside>

<style>
  /* 사이드바 */
  .sidebar {
    width: 16rem;
    border-left: 1px solid #e5e7eb;
    background-color: white;
    padding: 1rem;
    overflow-y: hidden;
    height: 100vh;
  }

  /* 사이드바 콘텐츠 */
  .sidebar-content {
    position: sticky;
    top: 5rem;
  }

  /* 섹션 제목 */
  .section-title {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #111827;
  }

  /* 통계 */
  .stats {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* 통계 아이템 */
  .stat-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    transition: all 0.2s;
  }

  .stat-item:hover {
    background-color: #f3f4f6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  /* 통계 아이콘 */
  .stat-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    flex-shrink: 0;
  }

  .stat-icon-user {
    background-color: #dbeafe;
    color: #1e40af;
  }

  .stat-icon-score {
    background-color: #d1fae5;
    color: #047857;
  }

  .stat-icon-posts {
    background-color: #fce7f3;
    color: #be185d;
  }

  .stat-icon-messages {
    background-color: #fef3c7;
    color: #d97706;
  }

  /* 통계 콘텐츠 */
  .stat-content {
    flex: 1;
  }

  /* 통계 라벨 */
  .stat-label {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 0.25rem;
  }

  /* 통계 값 */
  .stat-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: #111827;
  }

  /* 통계 설명 */
  .stat-description {
    font-size: 0.75rem;
    color: #9ca3af;
    margin-top: 0.25rem;
  }

  /* 알림 */
  .notice {
    margin-top: 1.5rem;
    padding: 0.75rem;
    background-color: #f3f4f6;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    color: #6b7280;
    text-align: center;
  }

  /* 반응형: 모바일에서는 숨김 */
  @media (max-width: 1024px) {
    .sidebar {
      display: none;
    }
  }
</style>
