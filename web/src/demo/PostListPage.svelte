<script>
  /**
   * 게시판 목록 페이지
   * 게시글 목록을 표시하고, 새 게시글을 작성할 수 있는 페이지입니다.
   * Svelte 5 Runes를 사용한 반응형 상태 관리를 구현합니다.
   */

  import { onMount } from 'svelte';
  import { auth } from '../lib/utils/firebase.js';
  import { createPost, listenToPosts } from '../lib/services/forum.js';
  import { FORUM_CATEGORIES } from '../lib/constants/forum.js';
  import { setPageTitle } from '../lib/stores/pageTitle.js';

  // 인증 상태
  let userId = $state(null);
  let userName = $state('');
  let isAuthLoading = $state(true);

  // URL 쿼리 파라미터에서 카테고리 가져오기
  const urlParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  let currentCategory = $state(urlParams.get('category') || 'community');

  // 글쓰기 모달 상태
  let isDialogOpen = $state(false);
  let postCategory = $state('');
  let postTitle = $state('');
  let postContent = $state('');
  let isSubmitting = $state(false);

  // 게시글 목록 상태
  let posts = $state([]);

  /**
   * Firebase 인증 상태 확인
   * 페이지 로드 시 사용자 정보를 가져옵니다.
   */
  onMount(() => {
    // 페이지 제목 설정
    setPageTitle('게시판');

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        userId = user.uid;
        // 사용자 이름 가져오기
        const displayName = user.displayName || user.email || '익명';
        userName = displayName;
      } else {
        userId = null;
        userName = '';
      }
      // ⚠️ 중요: 인증 상태 확인 완료
      isAuthLoading = false;
    });

    // 정리: 컴포넌트 언마운트 시 리스너 해제
    return () => unsubscribe();
  });

  /**
   * 게시글 목록 실시간 리스너
   * currentCategory가 변경되면 해당 카테고리의 게시글을 감시합니다.
   */
  $effect(() => {
    if (!isAuthLoading) {
      const unsubscribe = listenToPosts(currentCategory, 10, (newPosts) => {
        posts = newPosts;
      });

      // ⚠️ 중요: 카테고리 변경 시 이전 리스너 해제
      return () => unsubscribe();
    }
  });

  /**
   * 게시글 작성 버튼 클릭 핸들러
   * 로그인 상태를 확인하고 모달을 엽니다.
   */
  function handleCreatePost() {
    if (!userId) {
      // 로그인하지 않은 경우 로그인 페이지로 이동
      window.location.href = '/user/login';
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
    postCategory = '';
    postTitle = '';
    postContent = '';
  }

  /**
   * 게시글 저장 및 전송 핸들러
   * 입력 유효성 검사 -> Firebase 저장 -> 모달 닫기 -> 페이지 이동
   */
  async function handleSubmit() {
    // 1. 입력 유효성 검사
    if (!postCategory) {
      alert('카테고리를 선택해주세요.');
      return;
    }
    if (!postTitle.trim()) {
      alert('제목을 입력해주세요.');
      return;
    }
    if (!postContent.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    if (!userId || !userName) {
      alert('로그인 정보를 확인할 수 없습니다.');
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
        postCategory = '';
        postTitle = '';
        postContent = '';

        // 6. 성공 메시지 표시
        alert('게시글이 작성되었습니다.');

        // 7. $effect를 통해 자동으로 새로운 게시글을 로드합니다
        // (currentCategory를 savedCategory로 변경할 필요 없음. listenToPosts가 자동으로 새 게시글 감시)
        // 필요시 카테고리 변경:
        // currentCategory = savedCategory;
      } else {
        alert(`게시글 저장 실패: ${result.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('게시글 저장 오류:', error);
      alert('게시글 저장 중 오류가 발생했습니다.');
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
    window.history.pushState({}, '', `/post/list?category=${category}`);
  }
</script>

<!-- 인증 로딩 중일 때 로딩 화면 표시 -->
{#if isAuthLoading}
  <div class="loading-screen">
    <p>로딩 중...</p>
  </div>
{:else}
  <div class="post-list-container">
    <!-- 헤더 영역 (글쓰기 버튼) -->
    <div class="header">
      <!-- 게시글 작성 버튼 -->
      <button class="btn-create-post" onclick={handleCreatePost}>
        ✏️ 글쓰기
      </button>
    </div>

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

    <!-- 게시글 목록 또는 빈 상태 -->
    {#if posts.length === 0}
      <!-- 게시글이 없는 경우 -->
      <div class="empty-state">
        <div class="empty-icon">📝</div>
        <p class="empty-message">게시글이 없습니다</p>
        <p class="empty-hint">첫 번째 게시글을 작성해보세요!</p>
      </div>
    {:else}
      <!-- 게시글 목록 -->
      <div class="posts-list">
        {#each posts as post (post.postId)}
          <div class="post-item">
            <!-- 게시글 제목 -->
            <h3 class="post-title">{post.title}</h3>

            <!-- 게시글 내용 미리보기 -->
            <p class="post-content">{post.content}</p>

            <!-- 게시글 메타 정보 -->
            <div class="post-meta">
              <span class="post-author">작성자: {post.author}</span>
              <span class="post-date">
                {new Date(post.createdAt).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- 글쓰기 모달 다이얼로그 -->
  {#if isDialogOpen}
    <div
      class="modal-backdrop"
      role="presentation"
      onclick={() => (isDialogOpen = false)}
      onkeydown={(e) => e.key === 'Escape' && (isDialogOpen = false)}
    >
      <div class="modal" onclick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div class="modal-header">
          <h2>새 게시글 작성</h2>
          <button type="button" class="btn-close" onclick={() => (isDialogOpen = false)}>×</button>
        </div>

        <div class="modal-content">
          <!-- 카테고리 선택 -->
          <div class="form-group">
            <label for="category">카테고리</label>
            <select id="category" bind:value={postCategory} class="form-control">
              <option value="">카테고리 선택</option>
              {#each FORUM_CATEGORIES as category (category.value)}
                <option value={category.value}>{category.label}</option>
              {/each}
            </select>
          </div>

          <!-- 제목 입력 -->
          <div class="form-group">
            <label for="title">제목</label>
            <input
              id="title"
              type="text"
              bind:value={postTitle}
              placeholder="제목을 입력하세요"
              class="form-control"
            />
          </div>

          <!-- 내용 입력 -->
          <div class="form-group">
            <label for="content">내용</label>
            <textarea
              id="content"
              bind:value={postContent}
              placeholder="내용을 입력하세요"
              class="form-control textarea"
              rows="8"
            ></textarea>
          </div>
        </div>

        <!-- 모달 버튼 -->
        <div class="modal-footer">
          <button class="btn-cancel" onclick={handleCancel} disabled={isSubmitting}>
            취소
          </button>
          <button
            class="btn-submit"
            onclick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? '전송 중...' : '전송'}
          </button>
        </div>
      </div>
    </div>
  {/if}
{/if}

<style>
  /* 게시판 컨테이너 */
  .post-list-container {
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  /* 헤더 영역 */
  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  /* 글쓰기 버튼 */
  .btn-create-post {
    padding: 0.75rem 1.5rem;
    background-color: #3b82f6;
    color: #ffffff;
    border: none;
    border-radius: 0.375rem;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    transition: background-color 0.2s ease;
  }

  .btn-create-post:hover {
    background-color: #2563eb;
  }

  /* 카테고리 탭 */
  .category-tabs {
    display: flex;
    gap: 0.5rem;
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 1.5rem;
    overflow-x: auto;
  }

  .tab {
    padding: 0.75rem 1rem;
    background-color: transparent;
    border: none;
    color: #6b7280;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease;
  }

  .tab:hover {
    background-color: #f3f4f6;
  }

  .tab.active {
    background-color: #1f2937;
    color: #ffffff;
    border-radius: 0.25rem 0.25rem 0 0;
  }

  /* 빈 상태 */
  .empty-state {
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 3rem;
    text-align: center;
  }

  .empty-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: block;
  }

  .empty-message {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    color: #111827;
    font-weight: 600;
  }

  .empty-hint {
    margin: 0;
    font-size: 0.875rem;
    color: #6b7280;
  }

  /* 게시글 목록 */
  .posts-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .post-item {
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 1.5rem;
    transition: box-shadow 0.2s ease, transform 0.2s ease;
    cursor: pointer;
  }

  .post-item:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .post-title {
    margin: 0 0 1rem 0;
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
  }

  .post-content {
    margin: 0 0 1rem 0;
    font-size: 0.875rem;
    color: #6b7280;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .post-meta {
    display: flex;
    gap: 1rem;
    font-size: 0.75rem;
    color: #9ca3af;
  }

  .post-author,
  .post-date {
    display: inline-block;
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
  @media (max-width: 640px) {
    .post-list-container {
      padding: 1rem;
    }

    .header {
      flex-direction: column;
      align-items: stretch;
    }

    .btn-create-post {
      width: 100%;
    }

    .modal {
      width: calc(100% - 2rem);
      max-height: 85vh;
    }

    .header-content h1 {
      font-size: 1.5rem;
    }

    .category-tabs {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
</style>
