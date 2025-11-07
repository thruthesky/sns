<script lang="ts">
  /**
   * 관리자 신고 목록 페이지
   *
   * 모든 사용자의 신고를 createdAt 순서로 표시합니다.
   * 관리자만 접근 가능합니다.
   */
  import { t } from "../lib/stores/i18n";
  import DatabaseListView from "../lib/components/DatabaseListView.svelte";
  import type { ReportWithId } from "../lib/types/report";
  import { navigate } from "../lib/utils/navigation";

  /**
   * 신고 사유를 한글로 변환하는 함수
   *
   * @param reason - 신고 사유 (abuse, fake-news, spam, inappropriate, other)
   * @returns 한글 신고 사유
   */
  function getReasonText(reason: string): string {
    return $t(`신고사유_${reason}`);
  }

  /**
   * 신고 타입을 한글로 변환하는 함수
   *
   * @param type - 신고 타입 (post, comment)
   * @returns 한글 신고 타입
   */
  function getTypeText(type: string): string {
    return type === "post" ? $t("게시글") : $t("댓글");
  }

  /**
   * 게시글/댓글로 이동하는 함수
   *
   * @param report - 신고 데이터
   */
  function handleGoToNode(report: ReportWithId) {
    if (report.type === "post") {
      // 게시글 상세 페이지로 이동
      navigate(`/post/detail/${report.nodeId}`);
    } else {
      // 댓글은 게시글 상세 페이지로 이동 (댓글이 속한 게시글로 이동)
      // 댓글 ID로는 직접 이동할 수 없으므로, 게시글 목록으로 이동
      navigate("/post/list");
    }
  }
</script>

<div class="admin-report-list-page">
  <!-- 페이지 헤더 -->
  <div class="page-header">
    <h1 class="page-title">{$t("관리자_신고_목록")}</h1>
    <p class="page-description">{$t("모든_사용자의_신고를_확인할_수_있습니다")}</p>
  </div>

  <!-- 신고 목록 -->
  <DatabaseListView
    path="reports"
    orderBy="createdAt"
    limitToFirst={20}
    let:item
    let:index
  >
    {@const report = item as ReportWithId}
    <div class="report-item">
      <!-- 신고 번호 및 타입 -->
      <div class="report-header">
        <span class="report-number">#{index + 1}</span>
        <span class="report-type {report.type}">{getTypeText(report.type)}</span>
        <span class="report-date">
          {new Date(report.createdAt).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      <!-- 신고 내용 -->
      <div class="report-content">
        <div class="report-info-row">
          <span class="label">{$t("신고자")}:</span>
          <span class="value">{report.uid}</span>
        </div>

        <div class="report-info-row">
          <span class="label">{$t("대상ID")}:</span>
          <span class="value">{report.nodeId}</span>
        </div>

        <div class="report-info-row">
          <span class="label">{$t("신고사유")}:</span>
          <span class="value reason">{getReasonText(report.reason)}</span>
        </div>

        {#if report.message}
          <div class="report-info-row">
            <span class="label">{$t("상세메시지")}:</span>
            <span class="value message">{report.message}</span>
          </div>
        {/if}
      </div>

      <!-- 액션 버튼 -->
      <div class="report-actions">
        <button class="action-btn go-to-node" onclick={() => handleGoToNode(report)}>
          {$t("대상_보기")}
        </button>
      </div>
    </div>
  </DatabaseListView>
</div>

<style>
  /* 페이지 컨테이너 */
  .admin-report-list-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  /* 페이지 헤더 */
  .page-header {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #e5e7eb;
  }

  .page-title {
    margin: 0 0 0.5rem 0;
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
  }

  .page-description {
    margin: 0;
    font-size: 0.95rem;
    color: #6b7280;
  }

  /* 신고 아이템 */
  .report-item {
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 1rem;
    transition: box-shadow 0.2s ease;
  }

  .report-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* 신고 헤더 */
  .report-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #f3f4f6;
  }

  .report-number {
    font-size: 0.85rem;
    font-weight: 700;
    color: #9ca3af;
  }

  .report-type {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #ffffff;
  }

  .report-type.post {
    background-color: #3b82f6;
  }

  .report-type.comment {
    background-color: #10b981;
  }

  .report-date {
    margin-left: auto;
    font-size: 0.8rem;
    color: #9ca3af;
  }

  /* 신고 내용 */
  .report-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .report-info-row {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #374151;
    min-width: 80px;
  }

  .value {
    font-size: 0.85rem;
    color: #4b5563;
    word-break: break-word;
  }

  .value.reason {
    font-weight: 600;
    color: #dc2626;
  }

  .value.message {
    font-style: italic;
  }

  /* 액션 버튼 */
  .report-actions {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
  }

  .action-btn {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
  }

  .action-btn.go-to-node {
    background-color: #3b82f6;
    color: #ffffff;
  }

  .action-btn.go-to-node:hover {
    background-color: #2563eb;
  }

  /* 반응형 스타일 */
  @media (max-width: 768px) {
    .admin-report-list-page {
      padding: 1rem 0.5rem;
    }

    .page-title {
      font-size: 1.5rem;
    }

    .report-item {
      padding: 1rem;
    }

    .label {
      min-width: 60px;
      font-size: 0.8rem;
    }

    .value {
      font-size: 0.8rem;
    }
  }
</style>
