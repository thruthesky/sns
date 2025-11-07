<script lang="ts">
  /**
   * 댓글 아이템 컴포넌트
   *
   * 각 댓글을 표시하며, 실시간 사용자 정보를 조회합니다.
   * 답글 작성 기능 및 좋아요 기능을 제공합니다.
   * 수정/삭제 기능을 제공합니다 (작성자 본인만 가능).
   */
  import { rtdb, createRealtimeStore } from "../lib/stores/database.js";
  import { t } from "../lib/stores/i18n";
  import {
    createChildComment,
    updateComment,
    deleteComment,
  } from "../lib/services/comment.js";
  import { toggleLike } from "../lib/services/like.js";
  import { addReport, removeReport, checkReportStatus } from "../lib/services/report.js";
  import { showToast } from "../lib/stores/toast";
  import { onMount } from "svelte";
  import { Pencil, Trash2 } from "lucide-svelte";
  import ReportModal from "../lib/components/ReportModal.svelte";
  // 파일 업로드 웹 컴포넌트 및 상태 관리 import
  import "../lib/components/FileUploadTrigger.wc.svelte";
  import "../lib/components/FileUploadList.wc.svelte";
  import {
    getUploadedUrls,
    destroyUploader,
  } from "../lib/services/fileUploadState";
  import { portal } from "../lib/utils/portal";
  // AlertDialog 웹 컴포넌트 import
  import "../lib/components/AlertDialog.wc.svelte";

  // Props
  let { comment, userId = null } = $props();

  // 댓글 작성자 정보를 실시간으로 구독
  const userStore = createRealtimeStore(`users/${comment.uid}`);

  // 내 좋아요 상태를 실시간으로 구독
  // 통합 좋아요 구조: /likes/comment-{commentId}-{uid}
  // 노드가 없으면 0(좋아요 안 누름)을 기본값으로 사용
  // ⚠️ commentId가 '-'로 시작하면 제거 (Firebase 오래된 push 키 형식 대응)
  const cleanCommentId = comment.commentId.startsWith("-")
    ? comment.commentId.substring(1)
    : comment.commentId;
  const myLikeStore = userId
    ? rtdb(`likes/comment-${cleanCommentId}-${userId}`, 0)
    : null;

  // 답글 작성 모달 상태 관리
  let isReplyDialogOpen = $state(false);
  let replyContent = $state("");
  let isSubmitting = $state(false);

  // 댓글 수정 모달 상태 관리
  let isEditDialogOpen = $state(false);
  let editContent = $state("");
  let isEditSubmitting = $state(false);

  // 경고 알림 다이얼로그 상태 관리
  let isAlertDialogOpen = $state(false);
  let alertMessage = $state("");

  // 신고 모달 상태 관리
  let isReported = $state(false); // 현재 사용자가 이미 신고했는지 여부
  let showReportModal = $state(false); // 신고 모달 표시 여부

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
      const result = await toggleLike("comment", comment.commentId, userId);

      // 3. 결과 처리
      if (result.success) {
        if (result.isLiked) {
          showToast($t("좋아요를하였습니다"), "success");
        } else {
          showToast($t("좋아요를취소했습니다"), "info");
        }
      } else {
        // result.error는 i18n 키
        showToast($t(result.error || "error.unknown"), "error");
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
      // 3. 업로드된 파일 URL 목록 가져오기 (fileUploadState에서 직접 가져오기)
      const urls = getUploadedUrls(`comment-reply-${comment.commentId}`);

      // 4. Firebase에 답글 저장 (Flat Style 구조)
      // 참고: postId와 commentCount는 Firebase Cloud Functions에서 자동으로 관리됨
      const result = await createChildComment({
        parentCommentId: comment.commentId, // 부모 댓글 ID
        userId: userId, // 작성자 UID
        content: replyContent, // 답글 내용
        urls: urls.length > 0 ? urls : undefined, // 파일 URL 목록
      });

      // 5. 결과 처리
      if (result.success) {
        // 파일 업로드 상태 정리
        destroyUploader(`comment-reply-${comment.commentId}`);

        showToast($t("댓글이작성되었습니다"), "success");
        isReplyDialogOpen = false;
        replyContent = "";
      } else {
        // result.error는 i18n 키 (예: 'error.db.permissionDenied')
        showToast($t(result.error || "error.unknown"), "error");
      }
    } catch (error) {
      // 예상치 못한 에러 발생 시 기본 에러 메시지 표시
      console.error("답글 생성 오류:", error);
      showToast($t("error.unknown"), "error");
    } finally {
      isSubmitting = false;
    }
  }

  /**
   * 답글 작성 취소 핸들러
   */
  function handleReplyCancel() {
    // 파일 업로드 상태 정리
    destroyUploader(`comment-reply-${comment.commentId}`);

    isReplyDialogOpen = false;
    replyContent = "";
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
      // 3. 업로드된 파일 URL 목록 가져오기 (fileUploadState에서 직접 가져오기)
      const urls = getUploadedUrls(`comment-edit-${comment.commentId}`);

      // 4. Firebase에 댓글 업데이트
      const result = await updateComment(comment.commentId, {
        content: editContent,
        urls: urls.length > 0 ? urls : undefined,
      });

      // 5. 결과 처리
      if (result.success) {
        // 파일 업로드 상태 정리
        destroyUploader(`comment-edit-${comment.commentId}`);

        showToast($t("댓글이수정되었습니다"), "success");
        isEditDialogOpen = false;
        editContent = "";
      } else {
        // result.error는 i18n 키
        showToast($t(result.error || "error.unknown"), "error");
      }
    } catch (error) {
      console.error("댓글 수정 오류:", error);
      showToast($t("error.unknown"), "error");
    } finally {
      isEditSubmitting = false;
    }
  }

  /**
   * 댓글 수정 취소 핸들러
   */
  function handleEditCancel() {
    // 파일 업로드 상태 정리
    destroyUploader(`comment-edit-${comment.commentId}`);

    isEditDialogOpen = false;
    editContent = "";
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
        showToast($t(result.error || "error.unknown"), "error");
      }
    } catch (error) {
      console.error("댓글 삭제 오류:", error);
      showToast($t("error.unknown"), "error");
    }
  }

  /**
   * 파일이 이미지인지 확인하는 헬퍼 함수
   * URL 확장자 기반으로 판별 (대소문자 무시)
   *
   * @param url - 파일 URL
   * @returns 이미지 파일 여부
   */
  function isImageFile(url: string): boolean {
    const lowerUrl = url.toLowerCase();
    return (
      lowerUrl.includes(".jpg") ||
      lowerUrl.includes(".jpeg") ||
      lowerUrl.includes(".png") ||
      lowerUrl.includes(".gif") ||
      lowerUrl.includes(".webp")
    );
  }

  /**
   * 파일이 동영상인지 확인하는 헬퍼 함수
   * URL 확장자 기반으로 판별 (대소문자 무시)
   *
   * @param url - 파일 URL
   * @returns 동영상 파일 여부
   */
  function isVideoFile(url: string): boolean {
    const lowerUrl = url.toLowerCase();
    return (
      lowerUrl.includes(".mp4") ||
      lowerUrl.includes(".webm") ||
      lowerUrl.includes(".mov") ||
      lowerUrl.includes(".avi") ||
      lowerUrl.includes(".mkv")
    );
  }

  /**
   * URL에서 파일명을 추출하는 헬퍼 함수
   *
   * @param url - 파일 URL
   * @returns 파일명
   */
  function getFileName(url: string): string {
    try {
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;
      const fileName = pathname.split("/").pop();
      return fileName || "file";
    } catch (error) {
      return "file";
    }
  }

  /**
   * 컴포넌트 마운트 시 신고 상태 확인
   */
  onMount(() => {
    // 신고 상태 확인 (로그인한 경우에만)
    if (userId) {
      checkReportStatus("comment", comment.commentId, userId).then((status) => {
        isReported = status.isReported;
      });
    }
  });

  /**
   * 신고 버튼 클릭 핸들러
   * 로그인 여부 확인 후, 이미 신고했으면 취소 확인, 아니면 모달 표시
   */
  function handleReportClick() {
    // 1. 로그인 확인
    if (!userId) {
      alert($t("신고로그인필요"));
      window.location.href = "/user/login";
      return;
    }

    // 2. 이미 신고한 경우: 신고 취소 확인
    if (isReported) {
      if (confirm($t("신고를취소하시겠습니까"))) {
        handleReportRemove();
      }
    } else {
      // 3. 신고하지 않은 경우: 신고 모달 표시
      showReportModal = true;
    }
  }

  /**
   * 신고 제출 핸들러
   * ReportModal에서 사유와 메시지를 받아 Firebase에 저장
   *
   * @param reason - 신고 사유 ('abuse', 'fake-news', 'spam', 'inappropriate', 'other')
   * @param message - 상세 메시지 (선택 사항)
   */
  async function handleReportSubmit(reason: string, message: string) {
    // 1. 로그인 확인 (이중 체크)
    if (!userId) {
      showToast($t("로그인필요"), "error");
      return;
    }

    try {
      // 2. Firebase에 신고 추가
      const result = await addReport("comment", comment.commentId, userId, reason as any, message);

      // 3. 결과 처리
      if (result.success) {
        showToast($t("신고가접수되었습니다"), "success");
        isReported = true;
        showReportModal = false;
      } else {
        // result.error는 i18n 키
        showToast($t(result.error || "error.unknown"), "error");
      }
    } catch (error) {
      console.error("신고 추가 오류:", error);
      showToast($t("error.unknown"), "error");
    }
  }

  /**
   * 신고 취소 핸들러
   * Firebase에서 신고 데이터 삭제
   */
  async function handleReportRemove() {
    // 1. 로그인 확인 (이중 체크)
    if (!userId) {
      showToast($t("로그인필요"), "error");
      return;
    }

    try {
      // 2. Firebase에서 신고 삭제
      const result = await removeReport("comment", comment.commentId, userId);

      // 3. 결과 처리
      if (result.success) {
        showToast($t("신고가취소되었습니다"), "success");
        isReported = false;
      } else {
        // result.error는 i18n 키
        showToast($t(result.error || "error.unknown"), "error");
      }
    } catch (error) {
      console.error("신고 취소 오류:", error);
      showToast($t("error.unknown"), "error");
    }
  }

  /**
   * 신고 모달 취소 핸들러
   * 모달만 닫음
   */
  function handleReportCancel() {
    showReportModal = false;
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

  <!-- 첨부 파일 미리보기 영역: 댓글 내용 아래, 액션 버튼 위에 표시 -->
  {#if comment.urls && comment.urls.length > 0}
    <div class="comment-files-preview">
      {#each comment.urls as url (url)}
        {#if isImageFile(url)}
          <!-- 이미지 파일: 미리보기 표시 -->
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            class="file-item image-item"
          >
            <img src={url} alt="첨부 이미지" class="file-image" />
          </a>
        {:else if isVideoFile(url)}
          <!-- 동영상 파일: video 태그로 재생 -->
          <div class="file-item video-item">
            <video src={url} controls class="file-video">
              <track kind="captions" />
              브라우저가 비디오를 지원하지 않습니다.
            </video>
          </div>
        {:else}
          <!-- 기타 파일: 다운로드 링크 -->
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            class="file-item download-item"
          >
            <div class="file-icon">📎</div>
            <div class="file-name">{getFileName(url)}</div>
          </a>
        {/if}
      {/each}
    </div>
  {/if}

  <!-- 댓글 액션 버튼 영역 -->
  <div class="comment-actions">
    <!-- 좋아요 버튼 -->
    {#if userId}
      <button
        class="action-button like-button {($myLikeStore?.data ?? 0) >= 1
          ? 'liked'
          : ''}"
        onclick={handleLike}
        title={$t("좋아요")}
      >
        <span class="emoji">{($myLikeStore?.data ?? 0) >= 1 ? "❤️" : "🤍"}</span
        >
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

    <!-- 신고 버튼 -->
    {#if userId}
      <button
        class="action-button report-button {isReported ? 'reported' : ''}"
        onclick={handleReportClick}
        title={$t("신고")}
      >
        <span class="emoji">{isReported ? "🚩" : "🚨"}</span>
        <span class="text">{$t("신고")}</span>
      </button>
    {/if}

    <!-- 수정 버튼 (작성자만 표시, 아이콘만) -->
    {#if userId && userId === comment.uid}
      <button
        class="action-button edit-button"
        onclick={handleEditClick}
        title={$t("수정")}
      >
        <Pencil size={14} />
      </button>
    {/if}

    <!-- 삭제 버튼 (작성자만 표시, 아이콘만) -->
    {#if userId && userId === comment.uid}
      <button
        class="action-button delete-button"
        onclick={handleDeleteClick}
        title={$t("삭제")}
      >
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
      </div>

      <!-- 모달 푸터 (이미지 업로드 버튼 + 취소/전송 버튼) -->
      <div class="modal-footer">
        <!-- 이미지 업로드 버튼 (왼쪽) -->
        <file-upload-trigger
          id="comment-reply-{comment.commentId}"
          category="comments"
          multiple="true"
          buttonText={$t("이미지첨부")}
        ></file-upload-trigger>

        <!-- 취소/전송 버튼 그룹 (오른쪽) -->
        <div class="button-group">
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

      <!-- 파일 목록 (모달 푸터 아래) -->
      <file-upload-list id="comment-reply-{comment.commentId}"
      ></file-upload-list>
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
      </div>

      <!-- 모달 푸터 (이미지 업로드 버튼 + 취소/수정 버튼) -->
      <div class="modal-footer">
        <!-- 이미지 업로드 버튼 (왼쪽) -->
        <file-upload-trigger
          id="comment-edit-{comment.commentId}"
          category="comments"
          multiple="true"
          buttonText={$t("이미지첨부")}
        ></file-upload-trigger>

        <!-- 취소/수정 버튼 그룹 (오른쪽) -->
        <div class="button-group">
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

      <!-- 파일 목록 (모달 푸터 아래) -->
      <file-upload-list
        id="comment-edit-{comment.commentId}"
        initial-urls={JSON.stringify(comment.urls || [])}
      ></file-upload-list>
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
    onconfirm={() => {
      isAlertDialogOpen = false;
    }}
    onclose={() => {
      isAlertDialogOpen = false;
    }}
  />
{/if}

<!-- 신고 모달 다이얼로그 -->
<ReportModal
  bind:show={showReportModal}
  type="comment"
  onSubmit={handleReportSubmit}
  onCancel={handleReportCancel}
/>

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

  /* 모바일에서 좋아요/답글/신고 버튼의 이모지 숨기기 */
  @media (max-width: 768px) {
    .like-button .emoji,
    .reply-button .emoji,
    .report-button .emoji {
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

  /* 신고 버튼 */
  .report-button {
    color: #6b7280;
  }

  .report-button:hover {
    background-color: #fef3c7;
    color: #d97706;
  }

  /* 신고한 버튼 강조 표시 */
  .report-button.reported {
    background-color: #fef3c7;
    color: #d97706;
    font-weight: 600;
  }

  .report-button.reported:hover {
    background-color: #fde68a;
    color: #b45309;
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
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
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
    justify-content: space-between; /* 왼쪽(이미지 버튼)/오른쪽(취소/전송) 배치 */
    gap: 1rem;
    padding: 1rem 1.5rem;
    border-top: 1px solid #e5e7eb;
  }

  /* 취소/전송 버튼 그룹 */
  .button-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-left: auto; /* 오른쪽 정렬 */
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

  /* === 댓글 첨부 파일 미리보기 스타일 === */

  /* 파일 미리보기 컨테이너: 그리드 레이아웃 (반응형, 게시글보다 작게) */
  .comment-files-preview {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    gap: 0.5rem;
    margin: 0.5rem 0;
    padding: 0.5rem;
    background-color: #f0f0f0;
    border-radius: 0.375rem;
    border: 1px solid #e5e7eb;
  }

  /* 개별 파일 아이템 (이미지, 동영상, 다운로드) */
  .comment-files-preview .file-item {
    position: relative;
    aspect-ratio: 1;
    border-radius: 0.25rem;
    overflow: hidden;
    background-color: #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  /* 이미지 아이템 */
  .comment-files-preview .file-item.image-item:hover {
    transform: scale(1.08);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  /* 이미지 */
  .comment-files-preview .file-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* 동영상 */
  .comment-files-preview .file-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  }

  /* 동영상 아이템 */
  .comment-files-preview .file-item.video-item {
    background-color: #000000;
  }

  /* 다운로드 아이템 */
  .comment-files-preview .file-item.download-item {
    flex-direction: column;
    padding: 0.375rem;
    background-color: #ffffff;
    border: 1px solid #d1d5db;
    gap: 0.2rem;
  }

  .comment-files-preview .file-item.download-item:hover {
    background-color: #f9fafb;
    border-color: #3b82f6;
    transform: translateY(-2px);
    box-shadow: 0 3px 6px rgba(59, 130, 246, 0.2);
  }

  /* 파일 아이콘 (다운로드용, 댓글은 게시글보다 작게) */
  .comment-files-preview .file-icon {
    font-size: 1.5rem;
    opacity: 0.5;
  }

  /* 파일명 (다운로드용, 댓글은 게시글보다 작게) */
  .comment-files-preview .file-name {
    font-size: 0.6rem;
    color: #6b7280;
    text-align: center;
    word-break: break-all;
    line-height: 1.2;
    max-height: 2.4em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .comment-files-preview .file-item.download-item:hover .file-name {
    color: #3b82f6;
  }
</style>
