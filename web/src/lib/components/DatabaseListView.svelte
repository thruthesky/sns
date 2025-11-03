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
  import {
    ref as dbRef,
    get,
    onValue,
    query,
    orderByChild,
    limitToFirst,
    startAfter
  } from 'firebase/database';
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
   * 로딩 상태 (페이지 로드 중)
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
   * 마지막으로 로드한 아이템의 orderBy 필드 값
   * Firebase 쿼리의 startAfter에 사용됨
   * @type {any}
   */
  let lastLoadedValue = $state(null);

  /**
   * 마지막으로 로드한 아이템의 키
   * 같은 orderBy 값을 가진 여러 아이템을 구분하기 위해 사용
   * @type {string | null}
   */
  let lastLoadedKey = $state(null);

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

  /**
   * onValue 구독 해제 함수들을 관리하는 맵
   * 각 페이지의 데이터 변경을 실시간으로 리스닝
   * @type {Map<string, () => void>}
   */
  let unsubscribers = new Map();

  /**
   * 각 페이지에서 로드한 아이템들을 관리하는 맵
   * 페이지별로 실시간 업데이트를 추적하기 위해 사용
   * @type {Map<number, Array<{key: string, data: any}>>}
   */
  let pageItems = new Map();

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
   * 각 아이템에 onValue 리스너 설정 (실시간 업데이트)
   *
   * Firebase의 onValue()를 사용하여 각 아이템의 변경사항을 실시간으로 감지합니다.
   * @param {string} itemKey - 아이템의 Firebase 키
   * @param {number} index - items 배열에서의 인덱스
   */
  function setupItemListener(itemKey, index) {
    // 이미 리스닝 중이면 스킵
    const listenerKey = `${itemKey}`;
    if (unsubscribers.has(listenerKey)) {
      return;
    }

    const itemRef = dbRef(database, `${path}/${itemKey}`);
    const unsubscribe = onValue(
      itemRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const updatedData = snapshot.val();
          // items 배열 업데이트
          items[index] = {
            key: itemKey,
            data: updatedData
          };
          items = [...items]; // 반응성을 위해 배열 재할당
          console.log(`DatabaseListView: Item updated ${itemKey}`, updatedData);
        }
      },
      (error) => {
        console.error(`DatabaseListView: Error listening to item ${itemKey}`, error);
      }
    );

    // 리스너 해제 함수 저장
    unsubscribers.set(listenerKey, unsubscribe);
  }

  /**
   * 초기 데이터 로드 (페이지별 Firebase 쿼리)
   *
   * Firebase 쿼리를 사용하여 첫 번째 페이지 + 1개를 로드합니다.
   * pageSize + 1개를 로드하여 다음 페이지 존재 여부를 판단합니다.
   * 각 아이템에 onValue 리스너를 설정하여 실시간 업데이트를 감지합니다.
   */
  async function loadInitialData() {
    console.log('DatabaseListView: Loading initial data from', path);
    initialLoading = true;
    error = null;
    items = [];
    pageItems.clear();
    unsubscribers.clear();
    lastLoadedValue = null;
    lastLoadedKey = null;
    hasMore = true;

    try {
      const baseRef = dbRef(database, path);

      // Firebase 쿼리: orderBy + limitToFirst(pageSize + 1)
      // pageSize + 1개를 가져와서 hasMore를 판단합니다
      const dataQuery = query(
        baseRef,
        orderByChild(orderBy),
        limitToFirst(pageSize + 1)
      );

      const snapshot = await get(dataQuery);

      if (snapshot.exists()) {
        const loadedItems = [];
        const data = snapshot.val();

        // 데이터를 {key, data} 형태로 변환
        Object.entries(data).forEach(([key, value]) => {
          loadedItems.push({
            key,
            data: value
          });
        });

        // reverse가 true면 배열 뒤집기
        if (reverse) {
          loadedItems.reverse();
        }

        // pageSize보다 많으면 hasMore = true, 마지막 아이템은 표시하지 않음
        if (loadedItems.length > pageSize) {
          hasMore = true;
          items = loadedItems.slice(0, pageSize);
          const lastItem = items[items.length - 1];
          lastLoadedValue = lastItem.data[orderBy];
          lastLoadedKey = lastItem.key;
        } else {
          hasMore = false;
          items = loadedItems;
          if (items.length > 0) {
            const lastItem = items[items.length - 1];
            lastLoadedValue = lastItem.data[orderBy];
            lastLoadedKey = lastItem.key;
          }
        }

        // 첫 페이지 아이템들을 pageItems에 저장
        pageItems.set(0, items);

        // 각 아이템에 onValue 리스너 설정
        items.forEach((item, index) => {
          setupItemListener(item.key, index);
        });

        console.log(
          `DatabaseListView: Loaded ${items.length} items, hasMore: ${hasMore}`
        );
      } else {
        console.log('DatabaseListView: No data found');
        items = [];
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
   * 다음 페이지 데이터 로드 (Firebase 쿼리)
   *
   * Firebase 쿼리를 사용하여 다음 페이지를 로드합니다.
   * startAfter(lastLoadedValue)를 사용하여 마지막으로 로드한 아이템 이후의 데이터를 가져옵니다.
   * pageSize + 1개를 로드하여 hasMore를 판단합니다.
   */
  async function loadMore() {
    if (loading || !hasMore) return;

    console.log('DatabaseListView: Loading more data (server-side pagination)');
    loading = true;
    error = null;

    try {
      if (lastLoadedValue === null) {
        console.log('DatabaseListView: No lastLoadedValue, cannot load more');
        hasMore = false;
        loading = false;
        return;
      }

      const baseRef = dbRef(database, path);

      // Firebase 쿼리: orderBy + startAfter(lastLoadedValue) + limitToFirst(pageSize + 1)
      const dataQuery = query(
        baseRef,
        orderByChild(orderBy),
        startAfter(lastLoadedValue),
        limitToFirst(pageSize + 1)
      );

      const snapshot = await get(dataQuery);

      if (snapshot.exists()) {
        const newItems = [];
        const data = snapshot.val();

        // 데이터를 {key, data} 형태로 변환
        Object.entries(data).forEach(([key, value]) => {
          newItems.push({
            key,
            data: value
          });
        });

        // reverse가 true면 배열 뒤집기
        if (reverse) {
          newItems.reverse();
        }

        // 중복 제거: 이미 로드된 아이템들을 제외
        // 새로 로드된 아이템 중 이미 화면에 있는 key는 제외합니다
        const existingKeys = new Set(items.map(item => item.key));
        const filteredItems = newItems.filter((item) => !existingKeys.has(item.key));

        if (filteredItems.length === 0) {
          console.log('DatabaseListView: No more data');
          hasMore = false;
          loading = false;
          return;
        }

        // pageSize보다 많으면 hasMore = true
        if (filteredItems.length > pageSize) {
          hasMore = true;
          const itemsToAdd = filteredItems.slice(0, pageSize);
          items = [...items, ...itemsToAdd];
          const lastItem = itemsToAdd[itemsToAdd.length - 1];
          lastLoadedValue = lastItem.data[orderBy];
          lastLoadedKey = lastItem.key;
        } else {
          hasMore = false;
          items = [...items, ...filteredItems];
          if (filteredItems.length > 0) {
            const lastItem = filteredItems[filteredItems.length - 1];
            lastLoadedValue = lastItem.data[orderBy];
            lastLoadedKey = lastItem.key;
          }
        }

        // 새로 추가된 아이템들에 onValue 리스너 설정
        const startIndex = items.length - (filteredItems.length > pageSize ? pageSize : filteredItems.length);
        items.slice(startIndex).forEach((item, relativeIndex) => {
          setupItemListener(item.key, startIndex + relativeIndex);
        });

        console.log(
          `DatabaseListView: Loaded ${filteredItems.length} more items, total: ${items.length}, hasMore:`,
          hasMore
        );
      } else {
        console.log('DatabaseListView: No more data');
        hasMore = false;
      }
    } catch (err) {
      console.error('DatabaseListView: Load more error', {
        name: err.name,
        message: err.message,
        code: err.code,
        toString: err.toString()
      });
      error = err.message || err.code || 'Unknown error';
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
