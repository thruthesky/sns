<script lang="ts">
  /**
   * 게시글 아이템 컴포넌트
   *
   * 각 게시글을 표시하고, 실시간 좋아요 상태를 관리합니다.
   */
  import { rtdb } from "../lib/stores/database.js";
  import { showToast } from "../lib/stores/toast.ts";
  import { t } from "../lib/stores/i18n.ts";
  import {
    createTopLevelComment,
    listenToComments,
  } from "../lib/services/comment.js";
  import { toggleLike } from "../lib/services/like.js";
  import { updatePost, deletePost } from "../lib/services/forum.js";
  import { onMount } from "svelte";
  import CommentItem from "./CommentItem.svelte";
  import { Edit, Trash2 } from "lucide-svelte";
  import type { PostWithId, PostCategory } from "../lib/types/post";
  import type { CommentWithId } from "../lib/types/comment";
  import type { FirebaseKey } from "../lib/types/common";

  // Props 타입 정의
  interface Props {
    itemData: PostWithId;
    index: number;
    category: PostCategory;
    userId: string | null;
    onLike?: (postId: FirebaseKey) => void;
  }

  // Props
  let {
    itemData,
    index,
    category,
    userId,
    onLike = () => {},
  }: Props = $props();

  // 내 좋아요 상태를 실시간으로 구독
  // 통합 좋아요 구조: /likes/post-{postId}-{uid}
  // 노드가 없으면 0(좋아요 안 누름)을 기본값으로 사용
  // ⚠️ postId가 '-'로 시작하면 제거 (Firebase 오래된 push 키 형식 대응)
  const cleanPostId = itemData.postId.startsWith('-')
    ? itemData.postId.substring(1)
    : itemData.postId;
  const myLikeStore = userId
    ? rtdb<number>(`likes/post-${cleanPostId}-${userId}`, 0)
    : null;

  // 댓글 모달 상태 관리
  let isCommentDialogOpen = $state<boolean>(false);
  let commentContent = $state<string>("");
  let isSubmitting = $state<boolean>(false);

  // 게시글 수정 모달 상태 관리
  let isEditDialogOpen = $state<boolean>(false);
  let editTitle = $state<string>("");
  let editContent = $state<string>("");
  let isEditSubmitting = $state<boolean>(false);

  // AlertDialog 상태 관리 (댓글이 있을 때 수정 불가 알림)
  let isAlertDialogOpen = $state<boolean>(false);

  // 댓글 목록 상태 관리
  // CommentWithId[] 타입을 명시하여 타입 안전성 확보
  let comments = $state<CommentWithId[]>([]);
  let showComments = $state<boolean>(true); // 댓글 목록 표시/숨김 상태 (기본값: true로 댓글이 기본적으로 열림)
  let showAllComments = $state<boolean>(false); // 모든 댓글 표시 여부 (기본값: false로 마지막 5개만 표시)

  // 댓글 미리보기 개수 (마지막 5개만 초기에 표시)
  const COMMENT_PREVIEW_COUNT = 5;

  /**
   * 현재 표시할 댓글 배열을 반환합니다.
   * - showAllComments가 false면: 마지막 5개 댓글만 반환
   * - showAllComments가 true면: 모든 댓글 반환
   *
   * @returns 표시할 댓글 배열
   */
  function getDisplayedComments(): CommentWithId[] {
    // 모든 댓글을 보여주는 경우
    if (showAllComments) {
      return comments;
    }

    // 마지막 5개만 보여주는 경우
    // comments 배열의 뒤에서부터 5개 선택
    if (comments.length > COMMENT_PREVIEW_COUNT) {
      return comments.slice(-COMMENT_PREVIEW_COUNT);
    }

    // 댓글이 5개 이하면 모두 표시
    return comments;
  }

  /**
   * 컴포넌트 마운트 시 댓글 리스너 등록
   */
  onMount(() => {
    // 댓글 실시간 구독 (Flat style: postId만 필요)
    // newComments의 타입을 명시하여 타입 안전성 확보
    const unsubscribeComments = listenToComments(
      itemData.postId,
      (newComments: CommentWithId[]) => {
        comments = newComments;
      }
    );

    // 언마운트 시 리스너 해제
    return () => {
      unsubscribeComments();
    };
  });

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
      const result = await toggleLike('post', itemData.postId, userId);

      // 3. 결과 처리
      if (result.success) {
        if (result.isLiked) {
          showToast($t("좋아요를하였습니다"), "success");
        } else {
          showToast($t("좋아요를취소했습니다"), "info");
        }

        // 부모 컴포넌트에 알림
        onLike(itemData.postId);
      } else {
        // result.error는 i18n 키
        showToast($t(result.error), "error");
      }
    } catch (error: unknown) {
      console.error("좋아요 오류:", error);
      showToast($t("error.unknown"), "error");
    }
  }

  /**
   * 댓글 버튼 클릭 핸들러
   */
  function handleCommentClick() {
    // 1. 로그인 확인
    if (!userId) {
      alert($t("로그인필요"));
      window.location.href = "/user/login";
      return;
    }

    // 2. 모달 열기
    isCommentDialogOpen = true;
  }

  /**
   * 댓글 작성 제출 핸들러
   */
  async function handleCommentSubmit() {
    // 1. 로그인 확인
    if (!userId) {
      showToast($t("로그인필요"), "error");
      return;
    }

    // 2. 댓글 내용 검증
    if (!commentContent.trim()) {
      showToast($t("댓글내용입력필요"), "error");
      return;
    }

    // 3. 댓글 생성 시작
    isSubmitting = true;

    try {
      // 4. Firebase에 댓글 저장 (Flat style: postId만 필요)
      // 참고: commentCount는 Firebase Cloud Functions에서 자동으로 증가됨
      const result = await createTopLevelComment({
        postId: itemData.postId, // 게시글 ID
        userId: userId, // 작성자 UID (이미 null 체크됨)
        content: commentContent, // 댓글 내용
      });

      // 4. 결과 처리
      if (result.success) {
        showToast($t("댓글이작성되었습니다"), "success");
        isCommentDialogOpen = false;
        commentContent = "";
        // 댓글 목록 자동으로 펼치기
        showComments = true;
      } else {
        // result.error는 i18n 키 (예: 'error.db.permissionDenied')
        // i18n 키를 번역하여 사용자 친화적인 메시지 표시
        showToast($t(result.error), "error");
      }
    } catch (error: unknown) {
      // 예상치 못한 에러 발생 시 기본 에러 메시지 표시
      console.error("댓글 생성 오류:", error);
      showToast($t("error.unknown"), "error");
    } finally {
      isSubmitting = false;
    }
  }

  /**
   * 댓글 작성 취소 핸들러
   */
  function handleCommentCancel() {
    isCommentDialogOpen = false;
    commentContent = "";
  }

  /**
   * 게시글 수정 버튼 클릭 핸들러
   */
  function handleEdit() {
    // 1. 로그인 확인
    if (!userId) {
      alert($t("로그인필요"));
      window.location.href = "/user/login";
      return;
    }

    // 2. 댓글이 있는지 확인
    if (comments.length > 0) {
      // 댓글이 있으면 AlertDialog 표시
      isAlertDialogOpen = true;
      return;
    }

    // 3. 현재 게시글 데이터를 편집 필드에 채움
    editTitle = itemData.title;
    editContent = itemData.content;

    // 4. 모달 열기
    isEditDialogOpen = true;
  }

  /**
   * AlertDialog 확인 버튼 클릭 핸들러
   */
  function handleAlertConfirm() {
    isAlertDialogOpen = false;
  }

  /**
   * 게시글 수정 취소 핸들러
   */
  function handleEditCancel() {
    isEditDialogOpen = false;
    editTitle = "";
    editContent = "";
  }

  /**
   * 게시글 수정 제출 핸들러
   */
  async function handleEditSubmit() {
    // 1. 로그인 확인
    if (!userId) {
      showToast($t("로그인필요"), "error");
      return;
    }

    // 2. 제목과 내용 검증
    if (!editTitle.trim() || !editContent.trim()) {
      showToast($t("제목과내용을입력하세요"), "error");
      return;
    }

    // 3. 수정 시작
    isEditSubmitting = true;

    try {
      // 4. Firebase에 게시글 수정 (commentCount 체크 포함)
      const result = await updatePost(itemData.postId, {
        title: editTitle.trim(),
        content: editContent.trim(),
      });

      // 5. 결과 처리
      if (result.success) {
        showToast($t("게시글수정완료"), "success");
        isEditDialogOpen = false;
        editTitle = "";
        editContent = "";
      } else {
        // result.error는 i18n 키 (예: '댓글이달려있어수정불가', 'error.db.permissionDenied')
        showToast($t(result.error), "error");
      }
    } catch (error: unknown) {
      // 예상치 못한 에러 발생 시 기본 에러 메시지 표시
      console.error("게시글 수정 오류:", error);
      showToast($t("error.unknown"), "error");
    } finally {
      isEditSubmitting = false;
    }
  }

  /**
   * 게시글 삭제 버튼 클릭 핸들러
   */
  async function handleDelete() {
    // 1. 로그인 확인
    if (!userId) {
      alert($t("로그인필요"));
      window.location.href = "/user/login";
      return;
    }

    // 2. 삭제 확인 다이얼로그
    if (!confirm($t("게시글삭제확인"))) {
      return;
    }

    try {
      // 3. Firebase에서 게시글 삭제 (commentCount 체크 포함)
      const result = await deletePost(itemData.postId);

      // 4. 결과 처리
      if (result.success) {
        showToast($t("게시글삭제완료"), "success");
        // 게시글이 삭제되면 자동으로 목록에서 사라짐 (실시간 동기화)
      } else {
        // result.error는 i18n 키 (예: '댓글이달려있어삭제불가', 'error.db.permissionDenied')
        showToast($t(result.error), "error");
      }
    } catch (error: unknown) {
      // 예상치 못한 에러 발생 시 기본 에러 메시지 표시
      console.error("게시글 삭제 오류:", error);
      showToast($t("error.unknown"), "error");
    }
  }
</script>

<div class="post-item">
  <div class="post-item-top">
    <span class="post-category-pill">{category}</span>
    <span class="post-number">#{String(index + 1).padStart(2, "0")}</span>
  </div>

  <h3 class="post-title">{itemData.title}</h3>
  <p class="post-content">{itemData.content}</p>

  <div class="post-meta">
    <div class="author-chip">
      <span class="author-avatar">
        {(itemData.author || $t("익명")).charAt(0).toUpperCase()}
      </span>
      <span class="post-author">{itemData.author || $t("익명")}</span>
    </div>
    <span class="post-date">
      {new Date(itemData.createdAt).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </span>
  </div>

  <!-- 게시글 액션 버튼 영역 -->
  <div class="post-actions">
    <!-- 왼쪽 버튼 그룹 -->
    <div class="post-actions-left">
      <button
        class="action-btn"
        title={$t("댓글")}
        onclick={handleCommentClick}
      >
        💬 {$t("댓글")}
        {#if comments.length > 0}
          <span class="count">{comments.length}</span>
        {/if}
      </button>

      <button
        class="action-btn {($myLikeStore?.data ?? 0) >= 1 ? 'liked' : ''}"
        title={$t("좋아요")}
        onclick={handleLike}
      >
        {($myLikeStore?.data ?? 0) >= 1 ? "❤️" : "🤍"}
        {$t("좋아요")}
        {#if itemData.likeCount > 0}
          <span class="count">{itemData.likeCount}</span>
        {/if}
      </button>

      <button class="action-btn" title={$t("채팅")}>
        💬 {$t("채팅")}
      </button>

      <button class="action-btn" title={$t("신고")}>
        🚨 {$t("신고")}
      </button>
    </div>

    <!-- 오른쪽 버튼 그룹: 수정, 삭제 (작성자만 표시) -->
    <div class="post-actions-right">
      {#if userId === itemData.uid}
        <button class="action-btn edit icon-only" title={$t("게시글수정")} onclick={handleEdit}>
          <Edit size={18} />
        </button>
        <button class="action-btn delete icon-only" title={$t("삭제")} onclick={handleDelete}>
          <Trash2 size={18} />
        </button>
      {/if}
    </div>
  </div>

  <!-- 댓글 목록 섹션 -->
  {#if comments.length > 0}
    <div class="comments-section">
      <!-- 댓글 토글 버튼 -->
      <button
        class="comments-toggle"
        onclick={() => (showComments = !showComments)}
      >
        {showComments ? "▼" : "▶"}
        {$t("댓글")} ({comments.length})
      </button>

      <!-- 댓글 목록 -->
      {#if showComments}
        <div class="comments-list">
          {#each getDisplayedComments() as comment (comment.commentId)}
            <CommentItem
              {comment}
              {userId}
            />
          {/each}

          <!-- 더 보기 버튼: 댓글이 5개를 초과할 때 표시 -->
          {#if comments.length > COMMENT_PREVIEW_COUNT && !showAllComments}
            <button
              class="comments-show-more"
              onclick={() => (showAllComments = true)}
            >
              📋 {$t("댓글더보기", { count: comments.length - COMMENT_PREVIEW_COUNT })}
            </button>
          {/if}

          <!-- 댓글 숨기기 버튼: 모든 댓글을 보는 중일 때 표시 -->
          {#if showAllComments}
            <button
              class="comments-hide-extra"
              onclick={() => (showAllComments = false)}
            >
              ▲ {$t("댓글숨기기")}
            </button>
          {/if}
        </div>
      {/if}
    </div>
  {/if}
</div>

<!-- AlertDialog: 댓글이 있어서 수정할 수 없다는 알림 -->
{#if isAlertDialogOpen}
  <alert-dialog
    open="true"
    type="error"
    title={$t("수정불가")}
    message={$t("댓글이달려있어수정불가메시지")}
    confirmText={$t("확인")}
    onconfirm={handleAlertConfirm}
    onclose={handleAlertConfirm}
  ></alert-dialog>
{/if}

<!-- 댓글 작성 모달 다이얼로그 -->
{#if isCommentDialogOpen}
  <div class="modal-backdrop" onclick={handleCommentCancel}>
    <div class="modal" onclick={(e) => e.stopPropagation()}>
      <!-- 모달 헤더 -->
      <div class="modal-header">
        <h2>{$t("댓글작성")}</h2>
        <button class="btn-close" onclick={handleCommentCancel}>×</button>
      </div>

      <!-- 모달 내용 -->
      <div class="modal-content">
        <textarea
          bind:value={commentContent}
          placeholder={$t("댓글내용입력")}
          rows="5"
          autofocus
        ></textarea>
      </div>

      <!-- 모달 푸터 -->
      <div class="modal-footer">
        <button class="btn-cancel" onclick={handleCommentCancel}>
          {$t("취소")}
        </button>
        <button
          class="btn-submit"
          onclick={handleCommentSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? $t("전송중") : $t("전송")}
        </button>
      </div>
    </div>
  </div>
{/if}

<!-- 게시글 수정 모달 다이얼로그 -->
{#if isEditDialogOpen}
  <div class="modal-backdrop" onclick={handleEditCancel}>
    <div class="modal" onclick={(e) => e.stopPropagation()}>
      <!-- 모달 헤더 -->
      <div class="modal-header">
        <h2>{$t("게시글수정")}</h2>
        <button class="btn-close" onclick={handleEditCancel}>×</button>
      </div>

      <!-- 모달 내용 -->
      <div class="modal-content edit-form">
        <input
          type="text"
          bind:value={editTitle}
          placeholder={$t("제목입력")}
          autofocus
          class="edit-title-input"
        />
        <textarea
          bind:value={editContent}
          placeholder={$t("내용입력")}
          rows="10"
          class="edit-content-textarea"
        ></textarea>
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
          {isEditSubmitting ? $t("저장중") : $t("저장")}
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .post-item {
    padding: 1.5rem 1.75rem;
    border-radius: 0.85rem;
    background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
    border: 1px solid #e5e7eb;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
    margin: 1rem 0;
  }

  .post-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 28px rgba(17, 24, 39, 0.12);
  }

  .post-item-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .post-category-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.35rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #1d4ed8;
    background-color: #eff6ff;
  }

  .post-number {
    font-weight: 700;
    color: #9ca3af;
    font-size: 0.9rem;
  }

  .post-title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
    color: #111827;
    line-height: 1.5;
  }

  .post-content {
    margin: 0;
    font-size: 0.925rem;
    color: #4b5563;
    line-height: 1.7;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .post-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    font-size: 0.8rem;
    color: #6b7280;
  }

  .author-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .author-avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    background: #1d4ed8;
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.85rem;
  }

  .post-date {
    color: #9ca3af;
    font-variant-numeric: tabular-nums;
  }

  .post-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding-top: 0.5rem;
  }

  .post-actions-left,
  .post-actions-right {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    flex-wrap: wrap;
  }

  .action-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.65rem;
    border: none;
    border-radius: 0.5rem;
    background-color: transparent;
    color: #6b7280;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .action-btn:hover {
    background-color: #f3f4f6;
    color: #111827;
  }

  .action-btn:active {
    transform: scale(0.95);
  }

  /* 좋아요 한 버튼 강조 표시 */
  .action-btn.liked {
    background-color: #fee2e2;
    color: #dc2626;
    font-weight: 600;
  }

  .action-btn.liked:hover {
    background-color: #fecaca;
    color: #b91c1c;
  }

  .count {
    font-weight: 600;
    font-size: 0.75rem;
  }

  /* === 모달 다이얼로그 스타일 === */

  /* 모달 배경 (반투명 오버레이) */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
  }

  /* 모달 컨테이너 */
  .modal {
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
  }

  /* 모달 헤더 */
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
  }

  .modal-header h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    color: #111827;
  }

  .btn-close {
    background: none;
    border: none;
    font-size: 2rem;
    color: #6b7280;
    cursor: pointer;
    line-height: 1;
    padding: 0;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
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
    border-radius: 0.5rem;
    font-size: 0.95rem;
    font-family: inherit;
    resize: vertical;
    min-height: 120px;
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
    gap: 0.75rem;
    padding: 1.5rem;
    border-top: 1px solid #e5e7eb;
    justify-content: flex-end;
  }

  .btn-cancel,
  .btn-submit {
    padding: 0.65rem 1.25rem;
    border-radius: 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
  }

  .btn-cancel {
    background-color: #f3f4f6;
    color: #374151;
  }

  .btn-cancel:hover {
    background-color: #e5e7eb;
  }

  .btn-submit {
    background-color: #3b82f6;
    color: #ffffff;
  }

  .btn-submit:hover:not(:disabled) {
    background-color: #2563eb;
  }

  .btn-submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .btn-submit:active:not(:disabled) {
    transform: scale(0.98);
  }

  /* === 댓글 목록 스타일 === */

  /* 댓글 섹션 */
  .comments-section {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e5e7eb;
  }

  /* 댓글 토글 버튼 */
  .comments-toggle {
    width: 100%;
    padding: 0.5rem 0.75rem;
    background: none;
    border: none;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 600;
    color: #374151;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s ease;
  }

  .comments-toggle:hover {
    color: #111827;
    background-color: #f9fafb;
  }

  /* 댓글 목록 */
  .comments-list {
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  /* 댓글 더 보기 버튼 */
  .comments-show-more {
    margin-top: 0.75rem;
    padding: 0.65rem 1rem;
    width: 100%;
    background-color: #f0f4ff;
    color: #3b82f6;
    border: 1px solid #d1d5ff;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: center;
  }

  .comments-show-more:hover {
    background-color: #e0eaff;
    border-color: #3b82f6;
    transform: translateY(-1px);
  }

  .comments-show-more:active {
    transform: translateY(0);
  }

  /* 댓글 숨기기 버튼 */
  .comments-hide-extra {
    margin-top: 0.75rem;
    padding: 0.65rem 1rem;
    width: 100%;
    background-color: #f9fafb;
    color: #6b7280;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: center;
  }

  .comments-hide-extra:hover {
    background-color: #f3f4f6;
    border-color: #d1d5db;
    color: #374151;
  }

  .comments-hide-extra:active {
    transform: translateY(0);
  }
</style>
