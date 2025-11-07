<script>
  /**
   * 신고 모달 다이얼로그 컴포넌트
   *
   * 사용자가 게시글 또는 댓글을 신고할 때 표시되는 모달입니다.
   * 5가지 신고 사유 중 하나를 선택합니다.
   *
   * Props:
   * - show: 모달 표시 여부 (boolean, bindable)
   * - type: 신고 대상 타입 ('post' 또는 'comment')
   * - onSubmit: 신고 제출 콜백 함수 (reason: string, message: string) => void
   * - onCancel: 취소 콜백 함수 () => void
   *
   * 사용 예시:
   * <ReportModal
   *   bind:show={showReportModal}
   *   type="post"
   *   onSubmit={handleReportSubmit}
   *   onCancel={() => showReportModal = false}
   * />
   */

  import { t } from '../stores/i18n';

  // Props 정의
  let {
    show = $bindable(false),
    type = 'post',
    onSubmit = () => {},
    onCancel = () => {}
  } = $props();

  // 신고 사유 선택 상태
  let selectedReason = $state('');

  // 신고 사유 목록 (5가지)
  const reasons = $derived([
    { value: 'abuse', label: $t('신고사유_abuse') },
    { value: 'fake-news', label: $t('신고사유_fake-news') },
    { value: 'spam', label: $t('신고사유_spam') },
    { value: 'inappropriate', label: $t('신고사유_inappropriate') },
    { value: 'other', label: $t('신고사유_other') }
  ]);

  /**
   * 신고 제출 핸들러
   * 신고 사유가 선택되었는지 확인 후 콜백 함수 호출
   */
  function handleSubmit() {
    if (!selectedReason) {
      alert($t('신고사유_선택'));
      return;
    }
    onSubmit(selectedReason, '');
    resetForm();
  }

  /**
   * 취소 핸들러
   * 폼 초기화 후 취소 콜백 함수 호출
   */
  function handleCancel() {
    onCancel();
    resetForm();
  }

  /**
   * 폼 초기화
   * 신고 사유를 빈 값으로 리셋
   */
  function resetForm() {
    selectedReason = '';
  }

  /**
   * 오버레이 클릭 핸들러
   * 모달 외부를 클릭하면 취소 처리
   */
  function handleOverlayClick() {
    handleCancel();
  }

  /**
   * 모달 콘텐츠 클릭 핸들러
   * 이벤트 버블링 중지 (오버레이 클릭으로 전파 방지)
   */
  function handleContentClick(e) {
    e.stopPropagation();
  }
</script>

{#if show}
  <!-- 모달 오버레이 (배경 딤 처리) -->
  <div class="modal-overlay" onclick={handleOverlayClick}>
    <!-- 모달 콘텐츠 -->
    <div class="modal-content" onclick={handleContentClick}>
      <!-- 모달 제목 -->
      <h2 class="modal-title">
        {type === 'post' ? $t('신고_게시물_설명') : $t('신고_댓글_설명')}
      </h2>

      <!-- 신고 사유 선택 -->
      <div class="reason-list">
        <label class="label">{$t('신고사유_선택')}</label>
        {#each reasons as reason}
          <label class="reason-item">
            <input
              type="radio"
              name="reason"
              value={reason.value}
              bind:group={selectedReason}
            />
            <span>{reason.label}</span>
          </label>
        {/each}
      </div>

      <!-- 액션 버튼 (취소, 신고 제출) -->
      <div class="modal-actions">
        <button class="cancel-btn" onclick={handleCancel}>
          {$t('신고_취소')}
        </button>
        <button class="submit-btn" onclick={handleSubmit}>
          {$t('신고_제출')}
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  /* 모달 오버레이 (전체 화면 배경) */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  /* 모달 콘텐츠 컨테이너 */
  .modal-content {
    background-color: white;
    border-radius: 0.5rem;
    padding: 2rem;
    max-width: 500px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
  }

  /* 모달 제목 */
  .modal-title {
    margin: 0 0 1.5rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
  }

  /* 라벨 (공통) */
  .label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #374151;
  }

  /* 신고 사유 리스트 */
  .reason-list {
    margin-bottom: 1.5rem;
  }

  /* 신고 사유 아이템 */
  .reason-item {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .reason-item:hover {
    background-color: #f9fafb;
  }

  .reason-item input[type="radio"] {
    margin-right: 0.75rem;
  }

  /* 액션 버튼 컨테이너 */
  .modal-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }

  /* 버튼 공통 스타일 */
  .cancel-btn,
  .submit-btn {
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  /* 취소 버튼 */
  .cancel-btn {
    background-color: #f3f4f6;
    border: 1px solid #d1d5db;
    color: #374151;
  }

  .cancel-btn:hover {
    background-color: #e5e7eb;
  }

  /* 신고 제출 버튼 */
  .submit-btn {
    background-color: #ef4444;
    border: none;
    color: white;
  }

  .submit-btn:hover {
    background-color: #dc2626;
  }
</style>
