<svelte:options customElement="post-list" />

<script>
  /**
   * 게시물 목록 컴포넌트 (Web Component)
   *
   * Firebase Realtime Database의 게시물을 실시간으로 표시합니다.
   *
   * Props:
   * - path: 데이터베이스 경로 (기본값: 'posts')
   * - limit: 표시할 게시물 수 (기본값: 10)
   *
   * 사용법:
   * <post-list path="posts" limit="20"></post-list>
   *
   * 이벤트:
   * - post-click: 게시물 클릭 시 발생 (detail: { post })
   */

  import { onMount, onDestroy } from 'svelte';
  import { database } from '../utils/firebase.js';
  import { ref, onValue, off } from 'firebase/database';

  // Props (HTML 속성은 항상 문자열로 전달됨)
  let { path = 'posts', limit = '10' } = $props();

  // 반응형 상태
  let posts = $state([]);
  let loading = $state(true);
  let error = $state('');
  let dbRef = null;

  /**
   * 컴포넌트 마운트 시 데이터 구독
   */
  onMount(() => {
    subscribeToData();
  });

  /**
   * 컴포넌트 언마운트 시 구독 해제
   */
  onDestroy(() => {
    unsubscribeFromData();
  });

  /**
   * 데이터베이스 실시간 구독
   */
  function subscribeToData() {
    try {
      dbRef = ref(database, path);

      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();

        if (data) {
          // 객체를 배열로 변환하고 최신순으로 정렬
          posts = Object.entries(data)
            .map(([key, value]) => ({
              id: key,
              ...value
            }))
            .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))
            .slice(0, parseInt(limit));
        } else {
          posts = [];
        }

        loading = false;
        error = '';
      }, (err) => {
        console.error('데이터 읽기 오류:', err);
        error = '데이터를 불러오는 중 오류가 발생했습니다.';
        loading = false;
      });
    } catch (err) {
      console.error('구독 설정 오류:', err);
      error = '데이터베이스 연결에 실패했습니다.';
      loading = false;
    }
  }

  /**
   * 데이터베이스 구독 해제
   */
  function unsubscribeFromData() {
    if (dbRef) {
      off(dbRef);
    }
  }

  /**
   * 게시물 클릭 핸들러
   * @param {Object} post - 클릭한 게시물 객체
   */
  function handlePostClick(post) {
    const event = new CustomEvent('post-click', {
      detail: { post },
      bubbles: true,
      composed: true
    });
    dispatchEvent(event);
  }

  /**
   * 키보드 이벤트 핸들러 (접근성)
   * @param {KeyboardEvent} event - 키보드 이벤트
   * @param {Object} post - 게시물 객체
   */
  function handleKeyPress(event, post) {
    // Enter 또는 Space 키로 게시물 클릭 가능
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handlePostClick(post);
    }
  }

  /**
   * 타임스탬프를 읽기 쉬운 형식으로 변환
   * @param {number|string} timestamp - Unix 타임스탬프 (밀리초)
   * @returns {string} 포맷된 날짜 문자열
   */
  function formatDate(timestamp) {
    if (!timestamp) return '';

    // HTML 속성은 문자열로 전달되므로 숫자로 변환
    const ts = typeof timestamp === 'string' ? Number(timestamp) : timestamp;
    const date = new Date(ts);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return '방금 전';
    if (diffMins < 60) return `${diffMins}분 전`;
    if (diffHours < 24) return `${diffHours}시간 전`;
    if (diffDays < 7) return `${diffDays}일 전`;

    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
</script>

<!-- 게시물 목록 -->
<div class="post-list-container">
  {#if loading}
    <!-- 로딩 상태 -->
    <div class="loading">
      <div class="spinner"></div>
      <p>게시물을 불러오는 중...</p>
    </div>
  {:else if error}
    <!-- 오류 상태 -->
    <div class="error">
      <p>{error}</p>
    </div>
  {:else if posts.length === 0}
    <!-- 빈 상태 -->
    <div class="empty">
      <p>아직 게시물이 없습니다.</p>
    </div>
  {:else}
    <!-- 게시물 목록 -->
    <div class="posts">
      {#each posts as post (post.id)}
        <!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- 게시물 카드 전체를 클릭 가능하게 만드는 것은 일반적인 UI 패턴입니다 -->
        <article
          class="post-card"
          role="button"
          tabindex="0"
          onclick={() => handlePostClick(post)}
          onkeydown={(e) => handleKeyPress(e, post)}
          aria-label="게시물: {post.title || post.content || '제목 없음'}"
        >
          <!-- 게시물 헤더 -->
          <div class="post-header">
            <div class="author-info">
              <span class="author-name">{post.author || '익명'}</span>
              <span class="post-date">{formatDate(post.timestamp)}</span>
            </div>
          </div>

          <!-- 게시물 내용 -->
          <div class="post-content">
            {#if post.title}
              <h3 class="post-title">{post.title}</h3>
            {/if}
            {#if post.content}
              <p class="post-text">{post.content}</p>
            {/if}
          </div>

          <!-- 게시물 푸터 (좋아요, 댓글 수 등) -->
          <div class="post-footer">
            <span class="stat">👍 {post.likes || 0}</span>
            <span class="stat">💬 {post.comments?.length || 0}</span>
          </div>
        </article>
      {/each}
    </div>
  {/if}
</div>

<style>
  /* 컨테이너 */
  .post-list-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }

  /* 로딩 상태 */
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    color: #666;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* 오류 상태 */
  .error {
    padding: 2rem;
    text-align: center;
    color: #c33;
    background-color: #fee;
    border-radius: 8px;
  }

  /* 빈 상태 */
  .empty {
    padding: 3rem;
    text-align: center;
    color: #999;
  }

  /* 게시물 목록 */
  .posts {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* 게시물 카드 */
  .post-card {
    padding: 1.5rem;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .post-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  /* 게시물 헤더 */
  .post-header {
    margin-bottom: 1rem;
  }

  .author-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .author-name {
    font-weight: 600;
    color: #333;
  }

  .post-date {
    font-size: 0.85rem;
    color: #999;
  }

  /* 게시물 내용 */
  .post-content {
    margin-bottom: 1rem;
  }

  .post-title {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #222;
  }

  .post-text {
    margin: 0;
    color: #555;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* 게시물 푸터 */
  .post-footer {
    display: flex;
    gap: 1rem;
    padding-top: 0.75rem;
    border-top: 1px solid #f0f0f0;
  }

  .stat {
    font-size: 0.9rem;
    color: #666;
  }

  /* 반응형 디자인 */
  @media (max-width: 640px) {
    .post-list-container {
      padding: 0.5rem;
    }

    .post-card {
      padding: 1rem;
    }

    .post-title {
      font-size: 1.1rem;
    }
  }
</style>
