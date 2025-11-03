<script>
  /**
   * 게시판 목록 페이지
   * 게시글 목록을 표시하고, 새 게시글을 작성할 수 있는 페이지입니다.
   * Svelte 5 Runes를 사용한 반응형 상태 관리를 구현합니다.
   */

  import { onMount } from "svelte";
  import { auth } from "../lib/utils/firebase.js";
  import { createPost } from "../lib/services/forum.js";
  import { FORUM_CATEGORIES } from "../lib/constants/forum.js";
  import { setPageTitle } from "../lib/stores/pageTitle.js";
  import { showToast } from "../lib/stores/toast.js";
  import { t } from "../lib/stores/i18n.js";
  import DatabaseListView from "../lib/components/DatabaseListView.svelte";

  // 인증 상태
  let userId = $state(null);
  let userName = $state("");
  let isAuthLoading = $state(true);

  // URL 쿼리 파라미터에서 카테고리 가져오기
  const urlParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  let currentCategory = $state(urlParams.get("category") || "community");

  // 글쓰기 모달 상태
  let isDialogOpen = $state(false);
  let postCategory = $state("");
  let postTitle = $state("");
  let postContent = $state("");
  let isSubmitting = $state(false);

  /**
   * Firebase 인증 상태 확인
   * 페이지 로드 시 사용자 정보를 가져옵니다.
   */
  onMount(() => {
    // 페이지 제목 설정
    setPageTitle($t("게시판"));

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        userId = user.uid;
        // 사용자 이름 가져오기
        const displayName = user.displayName || user.email || $t("익명");
        userName = displayName;
      } else {
        userId = null;
        userName = "";
      }
      // ⚠️ 중요: 인증 상태 확인 완료
      isAuthLoading = false;
    });

    // 정리: 컴포넌트 언마운트 시 리스너 해제
    return () => unsubscribe();
  });

  /**
   * 게시글 작성 버튼 클릭 핸들러
   * 로그인 상태를 확인하고 모달을 엽니다.
   */
  function handleCreatePost() {
    if (!userId) {
      // 로그인하지 않은 경우 로그인 페이지로 이동
      window.location.href = "/user/login";
      return;
    }
    // 글쓰기 모달 열기
    isDialogOpen = true;
  }

  /**
   * 모달 취소 핸들러
   * 모달을 닫고 입력값을 초기화합니다.
   */
  function handleCancel() {
    isDialogOpen = false;
    postCategory = "";
    postTitle = "";
    postContent = "";
  }

  /**
   * 게시글 저장 및 전송 핸들러
   * 입력 유효성 검사 -> Firebase 저장 -> 모달 닫기 -> 페이지 이동
   */
  async function handleSubmit() {
    // 1. 입력 유효성 검사
    if (!postCategory) {
      alert($t("카테고리선택필요"));
      return;
    }
    if (!postTitle.trim()) {
      alert($t("제목입력필요"));
      return;
    }
    if (!postContent.trim()) {
      alert($t("내용입력필요"));
      return;
    }

    if (!userId || !userName) {
      alert($t("로그인정보확인불가"));
      return;
    }

    // 2. 전송 중 상태 활성화
    isSubmitting = true;

    try {
      // 3. Firebase RTDB에 게시글 저장
      const result = await createPost(
        postCategory,
        userId,
        userName,
        postTitle,
        postContent
      );

      if (result.success) {
        // 4. 저장된 카테고리 임시 저장 (초기화 전)
        const savedCategory = postCategory;

        // 5. 모달 닫기 및 초기화
        isDialogOpen = false;
        postCategory = "";
        postTitle = "";
        postContent = "";

        // 6. 성공 메시지 표시 (Toast)
        showToast($t("게시글작성완료"), "success");

        // 7. DatabaseListView가 실시간으로 데이터를 감시하므로 별도 갱신이 필요 없습니다.
      } else {
        showToast(
          $t("게시글저장실패", { error: result.error || "Unknown error" }),
          "error"
        );
      }
    } catch (error) {
      console.error("게시글 저장 오류:", error);
      showToast($t("게시글저장중오류"), "error");
    } finally {
      // 6. 전송 중 상태 해제
      isSubmitting = false;
    }
  }

  /**
   * 카테고리 탭 클릭 핸들러
   * 카테고리 변경 시 URL을 업데이트하고 currentCategory를 변경합니다.
   */
  function handleCategoryChange(category) {
    currentCategory = category;
    window.history.pushState({}, "", `/post/list?category=${category}`);
  }

  // 현재 선택된 카테고리 정보
  // Svelte 5 runes 모드: $: 대신 $derived 사용
  let currentCategoryInfo = $derived(
    FORUM_CATEGORIES.find((cat) => cat.value === currentCategory) ??
      FORUM_CATEGORIES[0]
  );
</script>

<!-- 인증 로딩 중일 때 로딩 화면 표시 -->
{#if isAuthLoading}
  <div class="loading-screen">
    <p>{$t("로딩중")}</p>
  </div>
{:else}
  <div class="post-list-container">
    <div class="page-header">
      <div>
        <h1 class="page-title">{$t("게시판")}</h1>
        <p class="page-subtitle">
          {currentCategoryInfo.label}{$t("게시판설명")}
        </p>
      </div>
      <div class="page-header-action">
        <span class="category-chip">{currentCategoryInfo.label}</span>
      </div>
    </div>

    <!-- 카테고리 + 글쓰기 -->
    <div class="toolbar">
      <div class="toolbar-left">
        <!-- 카테고리 탭 -->
        <div class="category-tabs">
          {#each FORUM_CATEGORIES as category (category.value)}
            <button
              class="tab {currentCategory === category.value ? 'active' : ''}"
              onclick={() => handleCategoryChange(category.value)}
            >
              {category.label}
            </button>
          {/each}
        </div>
      </div>

      <!-- 게시글 작성 버튼 -->
      <button class="btn-create-post" onclick={handleCreatePost}>
        ✏️ {$t("글쓰기")}
      </button>
    </div>

    <div class="post-list-surface">
      <!-- 게시글 목록 (무한 스크롤) -->
      <DatabaseListView
        path={`posts/${currentCategory}`}
        orderBy="createdAt"
        reverse={true}
        pageSize={20}
      >
        {#snippet item(itemData, index)}
          {@const itemCategory =
            FORUM_CATEGORIES.find((cat) => cat.value === itemData.data?.category) ??
            currentCategoryInfo}
          <div class="post-item">
            <div class="post-item-top">
              <span class="post-category-pill">{itemCategory.label}</span>
              <span class="post-number">#{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 class="post-title">{itemData.data.title}</h3>
            <p class="post-content">{itemData.data.content}</p>
            <div class="post-meta">
              <div class="author-chip">
                <span class="author-avatar">
                  {(itemData.data.author || $t("익명")).charAt(0).toUpperCase()}
                </span>
                <span class="post-author">{itemData.data.author || $t("익명")}</span>
              </div>
              <span class="post-date">
                {new Date(itemData.data.createdAt).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </span>
            </div>

            <!-- 게시글 액션 버튼 영역 -->
            <div class="post-actions">
              <!-- 왼쪽 버튼 그룹: 댓글, 좋아요, 채팅, 신고 -->
              <div class="post-actions-left">
                <button class="action-btn" title={$t("댓글")}>
                  💬 {$t("댓글")}
                </button>
                <button class="action-btn" title={$t("좋아요")}>
                  ❤️ {$t("좋아요")}
                </button>
                <button class="action-btn" title={$t("채팅")}>
                  💬 {$t("채팅")}
                </button>
                <button class="action-btn" title={$t("신고")}>
                  🚨 {$t("신고")}
                </button>
              </div>

              <!-- 오른쪽 버튼 그룹: 수정, 삭제 (작성자만 표시, 아이콘만) -->
              <div class="post-actions-right">
                {#if userId === itemData.data.uid}
                  <button class="action-btn edit icon-only" title={$t("수정")}>
                    ✏️
                  </button>
                  <button class="action-btn delete icon-only" title={$t("삭제")}>
                    🗑️
                  </button>
                {/if}
              </div>
            </div>
          </div>
        {/snippet}

        {#snippet empty()}
          <div class="empty-state">
            <div class="empty-illustration">🗂️</div>
            <h3 class="empty-title">{$t("게시글없음")}</h3>
            <p class="empty-message">
              {$t("첫게시글공유")}
            </p>
            <button class="btn-create-post ghost" onclick={handleCreatePost}>
              ✏️ {$t("새글작성")}
            </button>
          </div>
        {/snippet}

        {#snippet loading()}
          <div class="loading-state">
            <div class="spinner"></div>
            <p>{$t("게시글로딩중")}</p>
          </div>
        {/snippet}

        {#snippet error(errorMessage)}
          <div class="error-state">
            <div class="error-icon">⚠️</div>
            <div>
              <p class="error-message">{$t("게시글로드실패")}</p>
              <p class="error-detail">{errorMessage}</p>
            </div>
          </div>
        {/snippet}

        {#snippet loadingMore()}
          <div class="loading-more">
            <div class="spinner small"></div>
            <p>{$t("더많은게시글로딩")}</p>
          </div>
        {/snippet}

        {#snippet noMore()}
          <div class="no-more">
            <p>{$t("모든게시글확인")}</p>
          </div>
        {/snippet}
      </DatabaseListView>
    </div>
  </div>

  <!-- 글쓰기 모달 다이얼로그 -->
  {#if isDialogOpen}
    <!-- 모달 배경: 클릭하면 닫힘, Escape 키로도 닫힘 -->
    <div
      class="modal-backdrop"
      onclick={() => (isDialogOpen = false)}
      onkeydown={(e) => e.key === "Escape" && (isDialogOpen = false)}
      aria-hidden="true"
    >
      <!-- 모달 대화상자: role="dialog" + tabindex="-1"로 접근성 표준 준수 -->
      <div
        class="modal"
        onclick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        tabindex="-1"
      >
        <div class="modal-header">
          <h2>{$t("새게시글작성")}</h2>
          <button
            type="button"
            class="btn-close"
            onclick={() => (isDialogOpen = false)}>×</button
          >
        </div>

        <div class="modal-content">
          <!-- 카테고리 선택 -->
          <div class="form-group">
            <label for="category">{$t("카테고리")}</label>
            <select
              id="category"
              bind:value={postCategory}
              class="form-control"
            >
              <option value="">{$t("카테고리선택")}</option>
              {#each FORUM_CATEGORIES as category (category.value)}
                <option value={category.value}>{category.label}</option>
              {/each}
            </select>
          </div>

          <!-- 제목 입력 -->
          <div class="form-group">
            <label for="title">{$t("제목")}</label>
            <input
              id="title"
              type="text"
              bind:value={postTitle}
              placeholder={$t("제목입력")}
              class="form-control"
            />
          </div>

          <!-- 내용 입력 -->
          <div class="form-group">
            <label for="content">{$t("내용")}</label>
            <textarea
              id="content"
              bind:value={postContent}
              placeholder={$t("내용입력")}
              class="form-control textarea"
              rows="8"
            ></textarea>
          </div>
        </div>

        <!-- 모달 버튼 -->
        <div class="modal-footer">
          <button
            class="btn-cancel"
            onclick={handleCancel}
            disabled={isSubmitting}
          >
            {$t("취소")}
          </button>
          <button
            class="btn-submit"
            onclick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? $t("전송중") : $t("전송")}
          </button>
        </div>
      </div>
    </div>
  {/if}
{/if}

<style>
  /* 레이아웃 컨테이너 */
  .post-list-container {
    width: 100%;
    max-width: 72rem;
    margin: 0 auto;
    /* 여백 최소화: 상/하 1.5rem, 좌/우 1rem */
    padding: 1.5rem 1rem 2rem;
    display: flex;
    flex-direction: column;
    /* 섹션 간 여백 줄임 */
    gap: 1.25rem;
  }

  .page-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .page-header-action {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .page-title {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
  }

  .page-subtitle {
    margin: 0.5rem 0 0 0;
    color: #6b7280;
    font-size: 0.95rem;
    max-width: 36rem;
  }

  .category-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.875rem;
    border-radius: 9999px;
    background: linear-gradient(135deg, #dbeafe, #c7d2fe);
    color: #1d4ed8;
    font-weight: 600;
    font-size: 0.875rem;
    white-space: nowrap;
  }

  /* 상단 도구 모음 */
  .toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1rem 1.5rem;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 0.75rem;
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
  }

  .toolbar-left {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
  }

  .category-tabs {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .category-tabs::-webkit-scrollbar {
    display: none;
  }

  .tab {
    padding: 0.55rem 0.9rem;
    border-radius: 9999px;
    border: 1px solid transparent;
    background-color: transparent;
    color: #4b5563;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .tab:hover {
    background-color: #f3f4f6;
  }

  .tab.active {
    background-color: #111827;
    border-color: #111827;
    color: #ffffff;
    box-shadow: 0 8px 18px rgba(17, 24, 39, 0.2);
  }

  /* 글쓰기 버튼 */
  .btn-create-post {
    padding: 0.65rem 1.25rem;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: #ffffff;
    border: none;
    border-radius: 0.75rem;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    flex-shrink: 0;
  }

  .btn-create-post:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 24px rgba(37, 99, 235, 0.25);
  }

  .btn-create-post.ghost {
    background: #ffffff;
    color: #1d4ed8;
    border: 1px solid #bfdbfe;
    box-shadow: none;
  }

  .btn-create-post.ghost:hover {
    background: #eff6ff;
  }

  /* 게시글 목록 배경 */
  .post-list-surface {
    background: transparent;
    /* 테두리 제거 - 각 글 카드의 보더가 있으므로 불필요 */
    border: none;
    border-radius: 1rem;
    /* 여백 최소화 */
    padding: 0.5rem 0 1rem 0;
    box-shadow: none;
    /* 게시글 카드 사이 여백 추가: gap 사용 */
    /* DatabaseListView의 내부 구조와 무관하게 reliable하게 작동 */
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .post-item {
    padding: 1.5rem 1.75rem;
    border-radius: 0.85rem;
    background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
    border: 1px solid #e5e7eb;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    /* 각 게시글 카드의 상하 여백을 확실히 추가 */
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

  /* 게시글 액션 버튼 영역 */
  .post-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding-top: 0.5rem;
    /* 보더 제거하여 더 깔끔하게 */
    border-top: none;
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
    /* 더 콤팩트한 패딩 */
    padding: 0.4rem 0.65rem;
    /* 보더 제거 */
    border: none;
    border-radius: 0.5rem;
    /* 배경색 투명하게 */
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

  /* 아이콘만 있는 버튼 스타일 */
  .action-btn.icon-only {
    padding: 0.4rem;
    font-size: 1.1rem;
  }

  /* 수정 버튼 스타일 */
  .action-btn.edit {
    color: #3b82f6;
  }

  .action-btn.edit:hover {
    background-color: #eff6ff;
    color: #1d4ed8;
  }

  /* 삭제 버튼 스타일 */
  .action-btn.delete {
    color: #ef4444;
  }

  .action-btn.delete:hover {
    background-color: #fef2f2;
    color: #dc2626;
  }

  /* 빈 상태 */
  .empty-state {
    padding: 4rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
    border-radius: 1rem;
    border: 1px dashed #dbeafe;
  }

  .empty-illustration {
    font-size: 3rem;
  }

  .empty-title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
    color: #0f172a;
  }

  .empty-message {
    margin: 0 0 1rem 0;
    font-size: 0.95rem;
    color: #475569;
  }

  /* 로딩 / 에러 */
  .loading-state,
  .loading-more,
  .error-state,
  .no-more {
    padding: 2rem 1rem;
    text-align: center;
    color: #6b7280;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  .spinner {
    width: 32px;
    height: 32px;
    border: 3px solid #e5e7eb;
    border-top-color: #3b82f6;
    border-radius: 9999px;
    animation: spin 0.8s linear infinite;
  }

  .spinner.small {
    width: 20px;
    height: 20px;
    border-width: 2px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .error-state {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    background: #fef2f2;
    border-radius: 0.75rem;
    border: 1px solid #fecaca;
    color: #b91c1c;
  }

  .error-icon {
    font-size: 1.5rem;
  }

  /* 로딩 화면 */
  .loading-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-size: 0.95rem;
    color: #6b7280;
  }

  /* 추가 로딩 중 표시 (무한 스크롤) */
  .loading-more {
    padding: 2rem;
    text-align: center;
    color: #6b7280;
    font-size: 0.875rem;
  }

  .loading-more p {
    margin: 0;
  }

  /* 모달 스타일 */
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
    z-index: 50;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  .modal {
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    pointer-events: auto;
    cursor: default;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
  }

  .modal-header h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
  }

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
    transition: color 0.2s ease;
  }

  .btn-close:hover {
    color: #111827;
  }

  .modal-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* 폼 스타일 */
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #111827;
  }

  .form-control {
    padding: 0.75rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    font-size: 0.95rem;
    color: #111827;
    transition: border-color 0.2s ease;
  }

  .form-control:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .form-control.textarea {
    resize: vertical;
    font-family: inherit;
  }

  /* 모달 버튼 */
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding: 1.5rem;
    border-top: 1px solid #e5e7eb;
  }

  .btn-cancel,
  .btn-submit {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.375rem;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-cancel {
    background-color: #e5e7eb;
    color: #111827;
  }

  .btn-cancel:hover:not(:disabled) {
    background-color: #d1d5db;
  }

  .btn-submit {
    background-color: #3b82f6;
    color: #ffffff;
  }

  .btn-submit:hover:not(:disabled) {
    background-color: #2563eb;
  }

  .btn-cancel:disabled,
  .btn-submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* 반응형 */
  @media (max-width: 768px) {
    .post-list-container {
      padding: 2rem 1rem 3rem;
    }

    .page-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .category-chip {
      font-size: 0.8rem;
    }

    .toolbar {
      flex-direction: column;
      align-items: stretch;
      gap: 1rem;
    }

    .toolbar-left {
      width: 100%;
    }

    .btn-create-post {
      justify-content: center;
      width: 100%;
    }

    .post-item {
      padding: 1.25rem 1.35rem;
    }

    /* 모바일에서 액션 버튼 크기 조정 */
    .action-btn {
      padding: 0.35rem 0.55rem;
      font-size: 0.75rem;
    }

    .action-btn.icon-only {
      padding: 0.35rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .post-title {
      font-size: 1.05rem;
    }

    .post-content {
      font-size: 0.85rem;
    }

    .post-meta {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.6rem;
    }

    /* 작은 화면에서 액션 버튼 영역을 세로로 배치 */
    .post-actions {
      flex-direction: column;
      align-items: stretch;
      gap: 0.5rem;
    }

    .post-actions-left,
    .post-actions-right {
      justify-content: flex-start;
      width: 100%;
      gap: 0.25rem;
    }
  }
</style>
