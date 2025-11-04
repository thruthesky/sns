<script>
  /**
   * 댓글 아이템 컴포넌트
   *
   * 각 댓글을 표시하며, 실시간 사용자 정보를 조회합니다.
   * 답글 작성 기능을 제공합니다.
   */
  import { createRealtimeStore } from "../lib/stores/database.js";
  import { t } from "../lib/stores/i18n.js";
  import { createChildComment } from "../lib/services/comment.js";
  import { showToast } from "../lib/stores/toast.js";

  // Props
  let {
    comment,
    userId = null
  } = $props();

  // 댓글 작성자 정보를 실시간으로 구독
  const userStore = createRealtimeStore(`users/${comment.uid}`);

  // 답글 작성 모달 상태 관리
  let isReplyDialogOpen = $state(false);
  let replyContent = $state('');
  let isSubmitting = $state(false);

  /**
   * 답글 버튼 클릭 핸들러
   */
  function handleReplyClick() {
    // 1. 로그인 확인
    if (!userId) {
      alert($t("로그인필요"));
      window.location.href = "/user/login";
      return;
    }

    // 2. 모달 열기
    isReplyDialogOpen = true;
  }

  /**
   * 답글 작성 제출 핸들러
   */
  async function handleReplySubmit() {
    // 1. 답글 내용 검증
    if (!replyContent.trim()) {
      showToast($t("댓글내용입력필요"), "error");
      return;
    }

    // 2. 답글 생성 시작
    isSubmitting = true;

    try {
      // 3. Firebase에 답글 저장 (Flat Style 구조)
      // 참고: postId와 commentCount는 Firebase Cloud Functions에서 자동으로 관리됨
      const result = await createChildComment({
        parentCommentId: comment.commentId,  // 부모 댓글 ID
        userId: userId,                      // 작성자 UID
        content: replyContent                // 답글 내용
      });

      // 4. 결과 처리
      if (result.success) {
        showToast($t("댓글이작성되었습니다"), "success");
        isReplyDialogOpen = false;
        replyContent = '';
      } else {
        // result.error는 i18n 키 (예: 'error.db.permissionDenied')
        showToast($t(result.error), "error");
      }
    } catch (error) {
      // 예상치 못한 에러 발생 시 기본 에러 메시지 표시
      console.error('답글 생성 오류:', error);
      showToast($t("error.unknown"), "error");
    } finally {
      isSubmitting = false;
    }
  }

  /**
   * 답글 작성 취소 핸들러
   */
  function handleReplyCancel() {
    isReplyDialogOpen = false;
    replyContent = '';
  }
</script>

<div
  class="comment-item"
  style="padding-left: {(comment.depth - 1) * 2}rem;"
>
  <!-- 댓글 작성자 정보 -->
  <div class="comment-header">
    <div class="comment-author">
      {#if $userStore.data?.photoUrl}
        <img
          src={$userStore.data.photoUrl}
          alt={$userStore.data.displayName || $t("익명")}
          class="comment-avatar"
        />
      {:else}
        <span class="comment-avatar-placeholder">
          {($userStore.data?.displayName || $t("익명")).charAt(0).toUpperCase()}
        </span>
      {/if}
      <span class="comment-author-name">
        {$userStore.data?.displayName || $t("익명")}
      </span>
    </div>
    <span class="comment-date">
      {new Date(comment.createdAt).toLocaleDateString("ko-KR", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </span>
  </div>

  <!-- 댓글 내용 -->
  <p class="comment-content">{comment.content}</p>

  <!-- 답글 버튼 -->
  {#if userId && comment.depth < 12}
    <button class="reply-button" onclick={handleReplyClick}>
      💬 {$t("답글")}
    </button>
  {/if}
</div>

<!-- 답글 작성 모달 다이얼로그 -->
{#if isReplyDialogOpen}
  <div class="modal-backdrop" onclick={handleReplyCancel}>
    <div class="modal" onclick={(e) => e.stopPropagation()}>
      <!-- 모달 헤더 -->
      <div class="modal-header">
        <h2>{$t("답글작성")}</h2>
        <button class="btn-close" onclick={handleReplyCancel}>×</button>
      </div>

      <!-- 모달 내용 -->
      <div class="modal-content">
        <textarea
          bind:value={replyContent}
          placeholder={$t("댓글내용입력")}
          rows="5"
          autofocus
        ></textarea>
      </div>

      <!-- 모달 푸터 -->
      <div class="modal-footer">
        <button class="btn-cancel" onclick={handleReplyCancel}>
          {$t("취소")}
        </button>
        <button
          class="btn-submit"
          onclick={handleReplySubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? $t("전송중") : $t("전송")}
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  /* 댓글 아이템 */
  .comment-item {
    padding: 0.75rem;
    background-color: #f9fafb;
    border-radius: 0.5rem;
    border-left: 3px solid #e5e7eb;
    transition: all 0.2s ease;
  }

  .comment-item:hover {
    background-color: #f3f4f6;
    border-left-color: #3b82f6;
  }

  /* 댓글 헤더 */
  .comment-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  /* 댓글 작성자 */
  .comment-author {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  /* 댓글 아바타 (이미지) */
  .comment-avatar {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 9999px;
    object-fit: cover;
  }

  /* 댓글 아바타 (플레이스홀더) */
  .comment-avatar-placeholder {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 9999px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.75rem;
  }

  /* 댓글 작성자 이름 */
  .comment-author-name {
    font-size: 0.85rem;
    font-weight: 600;
    color: #374151;
  }

  /* 댓글 날짜 */
  .comment-date {
    font-size: 0.75rem;
    color: #9ca3af;
  }

  /* 댓글 내용 */
  .comment-content {
    margin: 0;
    font-size: 0.85rem;
    color: #4b5563;
    line-height: 1.6;
    white-space: pre-wrap;
    word-break: break-word;
  }

  /* 답글 버튼 */
  .reply-button {
    margin-top: 0.5rem;
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
    color: #3b82f6;
    background-color: transparent;
    border: 1px solid #3b82f6;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .reply-button:hover {
    background-color: #3b82f6;
    color: #ffffff;
  }

  /* 모달 배경 (backdrop) */
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  /* 모달 컨테이너 */
  .modal {
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
  }

  /* 모달 헤더 */
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #e5e7eb;
  }

  .modal-header h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
  }

  /* 모달 닫기 버튼 */
  .btn-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #6b7280;
    cursor: pointer;
    padding: 0;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    transition: all 0.2s ease;
  }

  .btn-close:hover {
    background-color: #f3f4f6;
    color: #111827;
  }

  /* 모달 내용 */
  .modal-content {
    padding: 1.5rem;
  }

  .modal-content textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-family: inherit;
    resize: vertical;
    transition: border-color 0.2s ease;
  }

  .modal-content textarea:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  /* 모달 푸터 */
  .modal-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
    border-top: 1px solid #e5e7eb;
  }

  /* 취소 버튼 */
  .btn-cancel {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    background-color: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-cancel:hover {
    background-color: #f9fafb;
    border-color: #9ca3af;
  }

  /* 전송 버튼 */
  .btn-submit {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #ffffff;
    background-color: #3b82f6;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-submit:hover:not(:disabled) {
    background-color: #2563eb;
  }

  .btn-submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
</style>
