<script lang="ts">
  /**
   * 게시판 목록 페이지
   * 게시글 목록을 표시하고, 새 게시글을 작성할 수 있는 페이지입니다.
   * Svelte 5 Runes를 사용한 반응형 상태 관리를 구현합니다.
   */

  import { onMount } from "svelte";
  import { auth } from "../lib/utils/firebase.js";
  import { createPost } from "../lib/services/forum.js";
  import { POST_CATEGORIES } from "../lib/types/category";
  import { setPageTitle } from "../lib/stores/pageTitle.ts";
  import { showToast } from "../lib/stores/toast.ts";
  import { t } from "../lib/stores/i18n.ts";
  import DatabaseListView from "../lib/components/DatabaseListView.svelte";
  import PostItem from "./PostItem.svelte";
  import type { PostCategory } from "../lib/types/post";

  // 인증 상태
  let userId = $state<string | null>(null);
  let userName = $state<string>("");
  let isAuthLoading = $state<boolean>(true);

  // URL 쿼리 파라미터에서 카테고리 가져오기
  const urlParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  let currentCategory = $state<PostCategory>(
    (urlParams.get("category") as PostCategory) || "community"
  );

  // 글쓰기 모달 상태
  let isDialogOpen = $state<boolean>(false);
  let postCategory = $state<PostCategory | "">("");
  let postTitle = $state<string>("");
  let postContent = $state<string>("");
  let isSubmitting = $state<boolean>(false);

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
        // 4. 모달 닫기 및 초기화
        isDialogOpen = false;
        postCategory = "";
        postTitle = "";
        postContent = "";

        // 5. 성공 메시지 표시 (Toast)
        showToast($t("게시글작성완료"), "success");

        // 6. DatabaseListView가 실시간으로 데이터를 감시하므로 별도 갱신이 필요 없습니다.
      } else {
        showToast(
          $t("게시글저장실패", { error: result.error || "Unknown error" }),
          "error"
        );
      }
    } catch (error: unknown) {
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
  function handleCategoryChange(category: PostCategory): void {
    currentCategory = category;
    window.history.pushState({}, "", `/post/list?category=${category}`);
  }
</script>

<!-- 인증 로딩 중일 때 로딩 화면 표시 -->
{#if isAuthLoading}
  <div class="loading-screen">
    <p>{$t("로딩중")}</p>
  </div>
{:else}
  <div class="post-list-container">
    <!-- 카테고리 + 글쓰기 -->
    <div class="toolbar">
      <div class="toolbar-left">
        <!-- 카테고리 탭 -->
        <div class="category-tabs">
          {#each POST_CATEGORIES as category (category)}
            <button
              class="tab {currentCategory === category ? 'active' : ''}"
              onclick={() => handleCategoryChange(category)}
            >
              {$t(`label.category.${category}`)}
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
      <!-- key를 사용하여 카테고리 변경 시 컴포넌트 재마운트 -->
      {#key currentCategory}
        <DatabaseListView
          path="posts"
          orderBy="order"
          sortPrefix={`${currentCategory}-`}
          reverse={true}
          pageSize={20}
        >
          {#snippet item(
            rawItemData: { key: string; data: any },
            index: number
          )}
            <PostItem
              itemData={{
                postId: rawItemData.key,
                ...rawItemData.data,
              }}
              {index}
              category={rawItemData.data.category}
              {userId}
            />
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

          {#snippet error(errorMessage: string)}
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
      {/key}
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
              {#each POST_CATEGORIES as category (category)}
                <option value={category}
                  >{$t(`label.category.${category}`)}</option
                >
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
    min-width: 0;
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
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
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

  /* === Modal Dialog === */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    z-index: 2000;
    backdrop-filter: blur(2px);
  }

  .modal {
    width: min(90vw, 480px);
    background: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 25px 60px rgba(15, 23, 42, 0.22);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 1.25rem 1.5rem 1rem;
    border-bottom: 1px solid rgba(148, 163, 184, 0.25);
  }

  .modal-header h2 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #0f172a;
  }

  .btn-close {
    border: none;
    background: transparent;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
    color: #475569;
    transition: color 0.2s ease;
  }

  .btn-close:hover {
    color: #1e293b;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #1f2937;
  }

  .form-control {
    width: 100%;
    padding: 0.75rem 0.9rem;
    font-size: 0.9rem;
    border-radius: 0.75rem;
    border: 1px solid #d1d5db;
    background: #f9fafb;
    transition:
      border-color 0.2s ease,
      background-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .form-control:focus {
    outline: none;
    border-color: #2563eb;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
  }

  .form-control.textarea {
    resize: vertical;
    min-height: 160px;
  }

  .modal-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.75rem;
    padding: 1.25rem 1.5rem 1.5rem;
    background: rgba(248, 250, 252, 0.85);
    border-top: 1px solid rgba(148, 163, 184, 0.25);
  }

  .btn-cancel,
  .btn-submit {
    padding: 0.65rem 1.25rem;
    border-radius: 0.75rem;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      opacity 0.2s ease;
  }

  .btn-cancel {
    background: #e2e8f0;
    color: #1f2937;
  }

  .btn-cancel:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 18px rgba(15, 23, 42, 0.12);
  }

  .btn-submit {
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: #ffffff;
  }

  .btn-submit:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 24px rgba(37, 99, 235, 0.25);
  }

  .btn-cancel:disabled,
  .btn-submit:disabled {
    cursor: not-allowed;
    opacity: 0.65;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 640px) {
    .modal-backdrop {
      padding: 1rem;
    }

    .modal {
      width: 100%;
    }

    .modal-content {
      padding: 1.1rem 1.25rem;
    }

    .modal-footer {
      padding: 1rem 1.25rem 1.25rem;
    }
  }

  /* 모바일 최적화: 화면 너비 640px 이하 */
  @media (max-width: 640px) {
    /* 컨테이너 패딩 최소화 */
    .post-list-container {
      padding: 1rem 0.75rem 1.5rem;
      gap: 0.875rem;
    }

    /* 도구 모음 압축: 카테고리 탭과 글쓰기 버튼이 같은 줄에 표시 */
    .toolbar {
      padding: 0.75rem 0.75rem;
      gap: 0.5rem;
      align-items: stretch;
    }

    /* 왼쪽 도구 모음 영역: 남은 공간을 모두 차지하여 카테고리 탭 확장 */
    .toolbar-left {
      gap: 0.5rem;
      flex: 1;
      min-width: 0;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    /* 카테고리 탭 최소화 */
    .tab {
      padding: 0.45rem 0.7rem;
      font-size: 0.75rem;
    }

    /* 글쓰기 버튼 모바일 최적화: 이모지만 표시하는 아이콘 모드 */
    .btn-create-post {
      padding: 0.55rem 0.75rem;
      font-size: 0.8rem;
      gap: 0.25rem;
      flex-shrink: 0;
      min-width: fit-content;
    }
  }

  /* 매우 작은 화면: 480px 이하 */
  @media (max-width: 480px) {
    .post-list-container {
      padding: 0.875rem 0.5rem 1.25rem;
      gap: 0.75rem;
    }

    /* 도구 모음: 최소 패딩 유지 */
    .toolbar {
      padding: 0.625rem 0.5rem;
      gap: 0.4rem;
      align-items: stretch;
    }

    /* 왼쪽 도구 모음: flex 1로 확장하여 글쓰기 버튼 우측 배치 */
    .toolbar-left {
      gap: 0.25rem;
      flex: 1;
      min-width: 0;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    .tab {
      padding: 0.4rem 0.6rem;
      font-size: 0.7rem;
    }

    /* 글쓰기 버튼: 최소 크기로 축소 */
    .btn-create-post {
      padding: 0.5rem 0.65rem;
      font-size: 0.75rem;
      gap: 0.2rem;
      flex-shrink: 0;
      min-width: fit-content;
    }
  }

  /* 게시글 아이템 스타일은 PostItem.svelte로 이동했습니다 */
</style>
