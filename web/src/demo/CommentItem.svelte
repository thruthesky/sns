<script>
  /**
   * 댓글 아이템 컴포넌트
   *
   * 각 댓글을 표시하며, 실시간 사용자 정보를 조회합니다.
   * 답글 작성 기능 및 좋아요 기능을 제공합니다.
   * 수정/삭제 기능을 제공합니다 (작성자 본인만 가능).
   */
  import { rtdb, createRealtimeStore } from "../lib/stores/database.js";
  import { t } from "../lib/stores/i18n.ts";
  import { createChildComment, updateComment, deleteComment } from "../lib/services/comment.js";
  import { toggleLike } from "../lib/services/like.js";
  import { showToast } from "../lib/stores/toast.ts";
  import { Pencil, Trash2 } from "lucide-svelte";
  // 파일 업로드 웹 컴포넌트 import
  import '../lib/components/FileUploadTrigger.wc.svelte';
  import '../lib/components/FileUploadList.wc.svelte';
  import { portal } from "../lib/utils/portal";

  // Props
  let {
    comment,
    userId = null
  } = $props();

  // 댓글 작성자 정보를 실시간으로 구독
  const userStore = createRealtimeStore(`users/${comment.uid}`);

  // 내 좋아요 상태를 실시간으로 구독
  // 통합 좋아요 구조: /likes/comment-{commentId}-{uid}
  // 노드가 없으면 0(좋아요 안 누름)을 기본값으로 사용
  // ⚠️ commentId가 '-'로 시작하면 제거 (Firebase 오래된 push 키 형식 대응)
  const cleanCommentId = comment.commentId.startsWith('-')
    ? comment.commentId.substring(1)
    : comment.commentId;
  const myLikeStore = userId
    ? rtdb(`likes/comment-${cleanCommentId}-${userId}`, 0)
    : null;

  // 답글 작성 모달 상태 관리
  let isReplyDialogOpen = $state(false);
  let replyContent = $state('');
  let isSubmitting = $state(false);

  // 댓글 수정 모달 상태 관리
  let isEditDialogOpen = $state(false);
  let editContent = $state('');
  let isEditSubmitting = $state(false);

  // 경고 알림 다이얼로그 상태 관리
  let isAlertDialogOpen = $state(false);
  let alertMessage = $state('');

  /**
   * 좋아요 버튼 클릭 핸들러 (토글 방식)
   */
  async function handleLike() {
    // 1. 로그인 확인
    if (!userId) {
      alert($t("로그인필요"));
      window.location.href = "/user/login";
      return;
    }

    try {
      // 2. 좋아요 토글 (추가 또는 취소)
      const result = await toggleLike('comment', comment.commentId, userId);

      // 3. 결과 처리
      if (result.success) {
        if (result.isLiked) {
          showToast($t("좋아요를하였습니다"), "success");
        } else {
          showToast($t("좋아요를취소했습니다"), "info");
        }
      } else {
        // result.error는 i18n 키
        showToast($t(result.error), "error");
      }
    } catch (error) {
      console.error("좋아요 오류:", error);
      showToast($t("error.unknown"), "error");
    }
  }

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
      // 3. 업로드된 파일 URL 목록 가져오기
      const fileUploadList = document.querySelector(`file-upload-list[id="comment-reply-${comment.commentId}"]`);
      // @ts-ignore - FileUploadList 컴포넌트의 getUrls() 메서드 호출
      const urls = fileUploadList?.getUrls ? fileUploadList.getUrls() : [];

      // 4. Firebase에 답글 저장 (Flat Style 구조)
      // 참고: postId와 commentCount는 Firebase Cloud Functions에서 자동으로 관리됨
      const result = await createChildComment({
        parentCommentId: comment.commentId,  // 부모 댓글 ID
        userId: userId,                      // 작성자 UID
        content: replyContent,               // 답글 내용
        urls: urls.length > 0 ? urls : undefined  // 파일 URL 목록
      });

      // 5. 결과 처리
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

  /**
   * 댓글 수정 버튼 클릭 핸들러
   */
  function handleEditClick() {
    // 1. commentCount 체크 (자식 댓글이 있으면 수정 불가)
    if ((comment.commentCount || 0) > 0) {
      alertMessage = $t("댓글이달려있어수정불가");
      isAlertDialogOpen = true;
      return;
    }

    // 2. 수정 모달 열기 (현재 내용으로 초기화)
    editContent = comment.content;
    isEditDialogOpen = true;
  }

  /**
   * 댓글 수정 제출 핸들러
   */
  async function handleEditSubmit() {
    // 1. 수정 내용 검증
    if (!editContent.trim()) {
      showToast($t("댓글내용입력필요"), "error");
      return;
    }

    // 2. 댓글 수정 시작
    isEditSubmitting = true;

    try {
      // 3. 업로드된 파일 URL 목록 가져오기
      const fileUploadList = document.querySelector(`file-upload-list[id="comment-edit-${comment.commentId}"]`);
      // @ts-ignore - FileUploadList 컴포넌트의 getUrls() 메서드 호출
      const urls = fileUploadList?.getUrls ? fileUploadList.getUrls() : [];

      // 4. Firebase에 댓글 업데이트
      const result = await updateComment(comment.commentId, {
        content: editContent,
        urls: urls.length > 0 ? urls : undefined
      });

      // 5. 결과 처리
      if (result.success) {
        showToast($t("댓글이수정되었습니다"), "success");
        isEditDialogOpen = false;
        editContent = '';
      } else {
        // result.error는 i18n 키
        showToast($t(result.error), "error");
      }
    } catch (error) {
      console.error('댓글 수정 오류:', error);
      showToast($t("error.unknown"), "error");
    } finally {
      isEditSubmitting = false;
    }
  }

  /**
   * 댓글 수정 취소 핸들러
   */
  function handleEditCancel() {
    isEditDialogOpen = false;
    editContent = '';
  }

  /**
   * 댓글 삭제 버튼 클릭 핸들러
   */
  async function handleDeleteClick() {
    // 1. commentCount 체크 (자식 댓글이 있으면 삭제 불가)
    if ((comment.commentCount || 0) > 0) {
      alertMessage = $t("댓글이달려있어삭제불가");
      isAlertDialogOpen = true;
      return;
    }

    // 2. 삭제 확인
    if (!confirm($t("댓글삭제확인"))) {
      return;
    }

    try {
      // 3. Firebase에서 댓글 삭제
      const result = await deleteComment(comment.commentId);

      // 4. 결과 처리
      if (result.success) {
        showToast($t("댓글이삭제되었습니다"), "success");
        // 리스트는 Firebase 실시간 구독으로 자동 업데이트됨
      } else {
        // result.error는 i18n 키
        showToast($t(result.error), "error");
      }
    } catch (error) {
      console.error('댓글 삭제 오류:', error);
      showToast($t("error.unknown"), "error");
    }
  }
</script>

<div
  class="comment-item"
  style="padding-left: {1.5 + (comment.depth - 1) * 2}rem;"
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

  <!-- 댓글 액션 버튼 영역 -->
  <div class="comment-actions">
    <!-- 좋아요 버튼 -->
    {#if userId}
      <button
        class="action-button like-button {($myLikeStore?.data ?? 0) >= 1 ? 'liked' : ''}"
        onclick={handleLike}
        title={$t("좋아요")}
      >
        <span class="emoji">{($myLikeStore?.data ?? 0) >= 1 ? "❤️" : "🤍"}</span>
        <span class="text">{$t("좋아요")}</span>
        {#if comment.likeCount > 0}
          <span class="count">{comment.likeCount}</span>
        {/if}
      </button>
    {/if}

    <!-- 답글 버튼 -->
    {#if userId && comment.depth < 12}
      <button class="action-button reply-button" onclick={handleReplyClick}>
        <span class="emoji">💬</span>
        <span class="text">{$t("답글")}</span>
      </button>
    {/if}

    <!-- 수정 버튼 (작성자만 표시, 아이콘만) -->
    {#if userId && userId === comment.uid}
      <button class="action-button edit-button" onclick={handleEditClick} title={$t("수정")}>
        <Pencil size={14} />
      </button>
    {/if}

    <!-- 삭제 버튼 (작성자만 표시, 아이콘만) -->
    {#if userId && userId === comment.uid}
      <button class="action-button delete-button" onclick={handleDeleteClick} title={$t("삭제")}>
        <Trash2 size={14} />
      </button>
    {/if}
  </div>
</div>

<!-- 답글 작성 모달 다이얼로그 -->
{#if isReplyDialogOpen}
  <div class="modal-backdrop" use:portal onclick={handleReplyCancel}>
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

        <!-- 파일 업로드 트리거 -->
        <div class="file-upload-section">
          <file-upload-trigger
            id="comment-reply-{comment.commentId}"
            category="comments"
            multiple="true"
            buttonText={$t("이미지첨부")}
          ></file-upload-trigger>
        </div>

        <!-- 파일 목록 -->
        <file-upload-list id="comment-reply-{comment.commentId}"></file-upload-list>
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

<!-- 댓글 수정 모달 다이얼로그 -->
{#if isEditDialogOpen}
  <div class="modal-backdrop" use:portal onclick={handleEditCancel}>
    <div class="modal" onclick={(e) => e.stopPropagation()}>
      <!-- 모달 헤더 -->
      <div class="modal-header">
        <h2>{$t("댓글수정")}</h2>
        <button class="btn-close" onclick={handleEditCancel}>×</button>
      </div>

      <!-- 모달 내용 -->
      <div class="modal-content">
        <textarea
          bind:value={editContent}
          placeholder={$t("댓글내용입력")}
          rows="5"
          autofocus
        ></textarea>

        <!-- 파일 업로드 트리거 -->
        <div class="file-upload-section">
          <file-upload-trigger
            id="comment-edit-{comment.commentId}"
            category="comments"
            multiple="true"
            buttonText={$t("이미지첨부")}
          ></file-upload-trigger>
        </div>

        <!-- 파일 목록 -->
        <file-upload-list
          id="comment-edit-{comment.commentId}"
          initial-urls={JSON.stringify(comment.urls || [])}
        ></file-upload-list>
      </div>

      <!-- 모달 푸터 -->
      <div class="modal-footer">
        <button class="btn-cancel" onclick={handleEditCancel}>
          {$t("취소")}
        </button>
        <button
          class="btn-submit"
          onclick={handleEditSubmit}
          disabled={isEditSubmitting}
        >
          {isEditSubmitting ? $t("수정중") : $t("수정")}
        </button>
      </div>
    </div>
  </div>
{/if}

<!-- 경고 알림 다이얼로그 (commentCount > 0일 때 표시) -->
{#if isAlertDialogOpen}
  <alert-dialog
    open="true"
    type="warning"
    title={$t("알림")}
    message={alertMessage}
    confirmText={$t("확인")}
    onconfirm={() => { isAlertDialogOpen = false; }}
    onclose={() => { isAlertDialogOpen = false; }}
  />
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

  /* 댓글 액션 버튼 영역 */
  .comment-actions {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    margin-top: 0.5rem;
  }

  /* 액션 버튼 공통 스타일 */
  .action-button {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    background-color: transparent;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 500;
  }

  /* 이모지 스타일 */
  .action-button .emoji {
    font-size: 0.875rem;
    line-height: 1;
  }

  /* 텍스트 스타일 */
  .action-button .text {
    font-size: 0.75rem;
  }

  /* 모바일에서 좋아요/답글 버튼의 이모지 숨기기 */
  @media (max-width: 768px) {
    .like-button .emoji,
    .reply-button .emoji {
      display: none;
    }
  }

  /* 좋아요 버튼 */
  .like-button {
    color: #6b7280;
  }

  .like-button:hover {
    background-color: #fee2e2;
    color: #dc2626;
  }

  /* 좋아요 한 버튼 강조 표시 */
  .like-button.liked {
    background-color: #fee2e2;
    color: #dc2626;
    font-weight: 600;
  }

  .like-button.liked:hover {
    background-color: #fecaca;
    color: #b91c1c;
  }

  /* 답글 버튼 */
  .reply-button {
    color: #3b82f6;
  }

  .reply-button:hover {
    background-color: #dbeafe;
    color: #2563eb;
  }

  /* 수정 버튼 (아이콘만 표시, 오른쪽 정렬) */
  .edit-button {
    color: #10b981;
    padding: 0.25rem;
    min-width: 2rem;
    justify-content: center;
    margin-left: auto;
  }

  .edit-button:hover {
    background-color: #d1fae5;
    color: #059669;
  }

  /* 삭제 버튼 (아이콘만 표시) */
  .delete-button {
    color: #ef4444;
    padding: 0.25rem;
    min-width: 2rem;
    justify-content: center;
  }

  .delete-button:hover {
    background-color: #fee2e2;
    color: #dc2626;
  }

  /* 개수 표시 */
  .count {
    font-weight: 600;
    font-size: 0.7rem;
  }

  /* 모달 배경 (backdrop) */
  .modal-backdrop {
    position: fixed;
    inset: 0; /* top, left, right, bottom을 0으로 설정 (더 간결하고 명확함) */
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3000; /* PostListPage 모달(z-index: 2000)보다 높게 설정 */
    padding: 1rem; /* 모바일에서 여백 확보 */
  }

  /* 모달 컨테이너 */
  .modal {
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    max-width: 500px;
    width: 90%;
    max-height: calc(100vh - 2rem); /* 상하 여백을 고려한 최대 높이 */
    overflow-y: auto; /* 모달 내용이 길 경우 스크롤 가능 */
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
