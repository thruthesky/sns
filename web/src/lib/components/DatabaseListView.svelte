<!--
  DatabaseListView - Firebase RTDB 무한 스크롤 리스트 뷰 컴포넌트

  재사용 가능한 무한 스크롤 컴포넌트로, Firebase Realtime Database의 데이터를
  페이지네이션과 함께 표시합니다.

  사용 예시:
  ```svelte
  <DatabaseListView
    path="users"
    pageSize={20}
    orderBy="createdAt"
    threshold={300}
    reverse={true}
  >
    {#snippet item(itemData, index)}
      <div class="user-card">
        <h3>{itemData.data.name}</h3>
        <p>{itemData.data.email}</p>
      </div>
    {/snippet}

    {#snippet loading()}
      <p>로딩 중...</p>
    {/snippet}

    {#snippet empty()}
      <p>데이터가 없습니다.</p>
    {/snippet}
  </DatabaseListView>
  ```
-->

<script>
  import { ref as dbRef, get, onValue } from 'firebase/database';
  import { database } from '../utils/firebase.js';

  // ============================================================================
  // Props (컴포넌트 속성)
  // ============================================================================

  /**
   * 컴포넌트 Props
   * - path: RTDB 경로 (예: "posts" 또는 "users/uid/posts")
   * - pageSize: 한 번에 가져올 아이템 개수 (기본값: 10)
   * - orderBy: 정렬 기준 필드 (기본값: "createdAt")
   * - threshold: 스크롤 threshold (px) - 바닥에서 이 값만큼 떨어지면 다음 페이지 로드 (기본값: 300)
   * - reverse: 역순 정렬 여부 (기본값: false)
   * - item: 아이템 렌더링 snippet
   * - loading: 로딩 상태 snippet
   * - empty: 빈 상태 snippet
   * - error: 에러 상태 snippet
   * - loadingMore: 더 로드 중 snippet
   * - noMore: 더 이상 데이터 없음 snippet
   */
  let {
    path = '',
    pageSize = 10,
    orderBy = 'createdAt',
    threshold = 300,
    reverse = false,
    item,
    loading: loadingSnippet,
    empty,
    error: errorSnippet,
    loadingMore,
    noMore
  } = $props();

  // ============================================================================
  // State (반응형 상태)
  // ============================================================================

  /**
   * 현재 표시 중인 아이템 목록
   * @type {Array<{key: string, data: any}>}
   */
  let items = $state([]);

  /**
   * 전체 로드된 아이템 목록 (클라이언트 메모리)
   * @type {Array<{key: string, data: any}>}
   */
  let allItems = $state([]);

  /**
   * 현재 표시 중인 페이지 인덱스
   * @type {number}
   */
  let currentPage = $state(0);

  /**
   * 로딩 상태
   * @type {boolean}
   */
  let loading = $state(false);

  /**
   * 초기 로딩 상태 (첫 페이지 로드)
   * @type {boolean}
   */
  let initialLoading = $state(true);

  /**
   * 더 가져올 데이터가 있는지 여부
   * @type {boolean}
   */
  let hasMore = $state(true);

  /**
   * 에러 메시지
   * @type {string | null}
   */
  let error = $state(null);

  /**
   * 스크롤 컨테이너 DOM 참조
   * @type {HTMLDivElement | null}
   */
  let scrollContainer = $state(null);

  // ============================================================================
  // Lifecycle (생명주기)
  // ============================================================================

  /**
   * 컴포넌트 마운트 시 초기 데이터 로드
   */
  $effect(() => {
    if (path && database) {
      loadInitialData();
    }
  });

  /**
   * 스크롤 이벤트 리스너 등록
   */
  $effect(() => {
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer?.removeEventListener('scroll', handleScroll);
      };
    }
  });

  // ============================================================================
  // Methods (메서드)
  // ============================================================================

  /**
   * 초기 데이터 로드 (클라이언트 측 페이지네이션)
   *
   * Firebase 인덱스 없이 전체 데이터를 가져온 후 클라이언트에서 정렬합니다.
   * 모든 데이터를 allItems에 저장하고 첫 페이지만 items에 표시합니다.
   * 이 방식은 데이터가 적을 때 효율적입니다 (수백 개 이내의 데이터).
   */
  async function loadInitialData() {
    console.log('DatabaseListView: Loading initial data from', path);
    initialLoading = true;
    error = null;
    items = [];
    allItems = [];
    currentPage = 0;
    hasMore = true;

    try {
      const dataRef = dbRef(database, path);
      const snapshot = await get(dataRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        let loadedItems = Object.entries(data).map(([key, value]) => ({
          key,
          data: value,
        }));

        // orderBy 필드로 정렬 (클라이언트에서)
        loadedItems.sort((a, b) => {
          const valueA = a.data[orderBy];
          const valueB = b.data[orderBy];
          if (valueA < valueB) return -1;
          if (valueA > valueB) return 1;
          return 0;
        });

        // reverse가 true면 배열 뒤집기
        if (reverse) {
          loadedItems.reverse();
        }

        // 메모리에 모든 아이템 저장
        allItems = loadedItems;

        // 첫 페이지 표시
        const firstPageEndIndex = pageSize;
        items = allItems.slice(0, firstPageEndIndex);

        // 더 이상 로드할 데이터가 있는지 확인
        hasMore = firstPageEndIndex < allItems.length;

        // currentPage는 0 (첫 페이지)
        currentPage = 0;

        console.log(
          `DatabaseListView: Loaded ${items.length} items, total available: ${allItems.length}, hasMore:`,
          hasMore
        );
      } else {
        console.log('DatabaseListView: No data found');
        items = [];
        allItems = [];
        currentPage = 0;
        hasMore = false;
      }
    } catch (err) {
      console.error('DatabaseListView: Load error', err);
      error = err.message;
    } finally {
      initialLoading = false;
    }
  }

  /**
   * 다음 페이지 데이터 로드 (클라이언트 측 페이지네이션)
   *
   * 메모리에 있는 allItems 배열에서 다음 페이지를 가져옵니다.
   * Firebase 서버 쿼리가 필요 없습니다.
   */
  function loadMore() {
    // 이미 로딩 중이거나 더 이상 데이터가 없으면 반환
    if (loading || !hasMore) return;

    console.log('DatabaseListView: Loading more data (client-side pagination)');
    loading = true;
    error = null;

    try {
      // 다음 페이지의 시작 인덱스 계산
      const startIndex = (currentPage + 1) * pageSize;
      const endIndex = startIndex + pageSize;

      // 모든 데이터를 로드했는지 확인
      if (startIndex >= allItems.length) {
        console.log('DatabaseListView: No more data available');
        hasMore = false;
        loading = false;
        return;
      }

      // 다음 페이지 아이템 추출
      const nextPageItems = allItems.slice(startIndex, endIndex);

      // 기존 아이템에 새로운 아이템 추가
      items = [...items, ...nextPageItems];

      // 현재 페이지 인덱스 증가
      currentPage += 1;

      // 더 이상 데이터가 있는지 확인
      // endIndex가 allItems 길이 이상이면 더 이상 데이터 없음
      hasMore = endIndex < allItems.length;

      console.log(
        `DatabaseListView: Loaded page ${currentPage}, items: ${items.length}/${allItems.length}, hasMore:`,
        hasMore
      );
    } catch (err) {
      console.error('DatabaseListView: Load more error', err);
      error = err.message;
    } finally {
      loading = false;
    }
  }

  /**
   * 스크롤 이벤트 핸들러
   * 스크롤이 threshold 이내로 내려가면 다음 페이지 로드
   */
  function handleScroll() {
    if (!scrollContainer || loading || !hasMore) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
    const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

    // 바닥에서 threshold px 이내면 다음 페이지 로드
    if (distanceFromBottom < threshold) {
      console.log('DatabaseListView: Near bottom, loading more...');
      loadMore();
    }
  }

  /**
   * 새로고침 (처음부터 다시 로드)
   */
  export function refresh() {
    console.log('DatabaseListView: Refreshing...');
    loadInitialData();
  }
</script>

<!-- ============================================================================
     Template (템플릿)
     ============================================================================ -->

<div class="database-list-view" bind:this={scrollContainer}>
  <!-- 초기 로딩 상태 -->
  {#if initialLoading}
    <div class="loading-container">
      {#if loadingSnippet}
        {@render loadingSnippet()}
      {:else}
        <div class="loading-spinner">
          <div class="spinner"></div>
          <p>로딩 중...</p>
        </div>
      {/if}
    </div>

  <!-- 에러 상태 -->
  {:else if error}
    <div class="error-container">
      {#if errorSnippet}
        {@render errorSnippet(error)}
      {:else}
        <div class="error-message">
          <p>⚠️ 에러가 발생했습니다</p>
          <p class="error-detail">{error}</p>
          <button onclick={refresh} class="retry-button">다시 시도</button>
        </div>
      {/if}
    </div>

  <!-- 데이터 없음 -->
  {:else if items.length === 0}
    <div class="empty-container">
      {#if empty}
        {@render empty()}
      {:else}
        <div class="empty-message">
          <p>📭 표시할 데이터가 없습니다</p>
        </div>
      {/if}
    </div>

  <!-- 데이터 목록 -->
  {:else}
    <div class="items-container">
      {#each items as itemData, index (itemData.key)}
        <div class="item-wrapper" data-key={itemData.key}>
          {#if item}
            {@render item(itemData, index)}
          {:else}
            <!-- 기본 아이템 렌더링 (snippet이 제공되지 않은 경우) -->
            <div class="default-item">
              <pre>{JSON.stringify(itemData.data, null, 2)}</pre>
            </div>
          {/if}
        </div>
      {/each}

      <!-- 더 로드 중 표시 -->
      {#if loading}
        <div class="loading-more">
          {#if loadingMore}
            {@render loadingMore()}
          {:else}
            <div class="loading-spinner small">
              <div class="spinner"></div>
              <p>더 불러오는 중...</p>
            </div>
          {/if}
        </div>
      {/if}

      <!-- 더 이상 데이터 없음 표시 -->
      {#if !hasMore && !loading}
        <div class="no-more">
          {#if noMore}
            {@render noMore()}
          {:else}
            <p class="no-more-text">더 이상 데이터가 없습니다</p>
          {/if}
        </div>
      {/if}
    </div>
  {/if}
</div>

<!-- ============================================================================
     Styles (스타일)
     ============================================================================ -->

<style>
  /* 컨테이너 */
  .database-list-view {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  /* 아이템 컨테이너 */
  .items-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  /* 아이템 래퍼 */
  .item-wrapper {
    width: 100%;
  }

  /* 기본 아이템 스타일 */
  .default-item {
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
    background-color: #ffffff;
  }

  .default-item pre {
    margin: 0;
    font-size: 0.875rem;
    white-space: pre-wrap;
    word-break: break-all;
  }

  /* 로딩 컨테이너 */
  .loading-container,
  .error-container,
  .empty-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    padding: 2rem;
  }

  /* 로딩 스피너 */
  .loading-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .loading-spinner.small {
    padding: 1rem;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #e5e7eb;
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  .loading-spinner.small .spinner {
    width: 24px;
    height: 24px;
    border-width: 3px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .loading-spinner p {
    margin: 0;
    color: #6b7280;
    font-size: 0.875rem;
  }

  /* 더 로드 중 표시 */
  .loading-more {
    padding: 1rem;
    text-align: center;
  }

  /* 더 이상 데이터 없음 */
  .no-more {
    padding: 1.5rem;
    text-align: center;
  }

  .no-more-text {
    margin: 0;
    color: #9ca3af;
    font-size: 0.875rem;
  }

  /* 빈 상태 메시지 */
  .empty-message {
    text-align: center;
    color: #6b7280;
  }

  .empty-message p {
    margin: 0;
    font-size: 1rem;
  }

  /* 에러 메시지 */
  .error-message {
    text-align: center;
    color: #dc2626;
  }

  .error-message p {
    margin: 0 0 0.5rem 0;
  }

  .error-detail {
    color: #6b7280;
    font-size: 0.875rem;
  }

  .retry-button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .retry-button:hover {
    background-color: #2563eb;
  }

  .retry-button:active {
    background-color: #1d4ed8;
  }
</style>
