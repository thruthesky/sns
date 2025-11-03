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
    onChildAdded,
    query,
    orderByChild,
    limitToFirst,
    limitToLast,
    startAfter,
    endBefore
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
   * 현재 로드된 페이지 번호 (0부터 시작)
   * 페이지별 로드 추적용
   * @type {number}
   */
  let currentPage = $state(0);

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

  /**
   * onChildAdded 리스너 해제 함수
   * 새로운 노드 생성을 감지하는 리스너
   * @type {(() => void) | null}
   */
  let childAddedUnsubscribe = null;

  /**
   * onChildAdded 리스너가 초기화되었는지 여부
   * 초기 로드 시 기존 아이템들에 대한 child_added 이벤트를 무시하기 위한 플래그
   * @type {boolean}
   */
  let childAddedListenerReady = $state(false);

  // ============================================================================
  // Lifecycle (생명주기)
  // ============================================================================

  /**
   * 컴포넌트 마운트 시 초기 데이터 로드
   * 컴포넌트 언마운트 시 모든 리스너 해제
   */
  $effect(() => {
    if (path && database) {
      loadInitialData();
    }

    // cleanup: 컴포넌트 언마운트 시 모든 리스너 해제
    return () => {
      console.log('DatabaseListView: Cleaning up listeners');

      // child_added 리스너 해제
      if (childAddedUnsubscribe) {
        childAddedUnsubscribe();
        childAddedUnsubscribe = null;
      }

      // 모든 onValue 리스너 해제
      unsubscribers.forEach((unsubscribe) => {
        unsubscribe();
      });
      unsubscribers.clear();

      console.log('DatabaseListView: All listeners cleaned up');
    };
  });

  /**
   * 스크롤 이벤트 리스너 등록
   * 컨테이너 스크롤과 window 스크롤을 모두 감지합니다.
   */
  $effect(() => {
    if (scrollContainer) {
      // 컨테이너 자체 스크롤 감지
      scrollContainer.addEventListener('scroll', handleScroll);
      // window 스크롤 감지 (body 스크롤)
      window.addEventListener('scroll', handleWindowScroll);

      return () => {
        scrollContainer?.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleWindowScroll);
      };
    }
  });

  // ============================================================================
  // Methods (메서드)
  // ============================================================================

  /**
   * 아이템 목록의 마지막 항목에서 orderBy 필드 값 추출
   *
   * 페이지 커서를 위해 마지막 항목의 orderBy 필드 값이 필요합니다.
   * 필드가 없으면 다른 정렬 필드로 fallback합니다.
   *
   * @param {Array<{key: string, data: any}>} itemList - 아이템 목록
   * @param {string} primaryField - 주 정렬 필드 이름
   * @returns {{value: any, key: string} | null} orderBy 값과 키, 또는 null
   */
  function getLastItemCursor(itemList, primaryField) {
    if (itemList.length === 0) return null;

    const lastItem = itemList[itemList.length - 1];
    const value = lastItem.data[primaryField];

    // 주 필드 값이 있으면 사용
    if (value != null && value !== '') {
      console.log(`DatabaseListView: Using cursor from '${primaryField}':`, {
        value: value,
        key: lastItem.key
      });
      return {
        value: value,
        key: lastItem.key
      };
    }

    // 주 필드가 없으면 Firebase 키를 사용 (fallback)
    // 단, startAfter는 문자열 비교가 되므로 주의
    console.warn(`DatabaseListView: Field '${primaryField}' not found in last item, using key as fallback:`, lastItem.key);
    return {
      value: lastItem.key,
      key: lastItem.key
    };
  }

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
   * 새로운 노드 생성 감지 리스너 설정 (onChildAdded)
   *
   * Firebase의 onChildAdded()를 사용하여 새로운 노드가 생성되면 실시간으로 화면에 추가합니다.
   * - reverse가 true이면 배열 맨 앞에 추가 (최신 글이 위에)
   * - reverse가 false이면 배열 맨 뒤에 추가 (최신 글이 아래에)
   *
   * 주의: onChildAdded는 초기에 기존 아이템들에 대해서도 발생하므로,
   * childAddedListenerReady 플래그를 사용하여 초기 로드 완료 후에만 새 아이템으로 처리합니다.
   */
  function setupChildAddedListener() {
    if (childAddedUnsubscribe) {
      // 기존 리스너가 있으면 먼저 해제
      childAddedUnsubscribe();
      childAddedUnsubscribe = null;
    }

    console.log('DatabaseListView: Setting up child_added listener for', path);
    childAddedListenerReady = false;

    const baseRef = dbRef(database, path);
    const dataQuery = query(baseRef, orderByChild(orderBy));

    childAddedUnsubscribe = onChildAdded(dataQuery, (snapshot) => {
      // 초기 로드 완료 전에는 무시 (기존 아이템들은 loadInitialData에서 처리)
      if (!childAddedListenerReady) {
        return;
      }

      const newItemKey = snapshot.key;
      const newItemData = snapshot.val();

      // 중복 체크: 이미 items에 있는 key는 추가하지 않음
      const exists = items.some(item => item.key === newItemKey);
      if (exists) {
        console.log('DatabaseListView: Child already exists, skipping:', newItemKey);
        return;
      }

      console.log('DatabaseListView: New child added:', newItemKey, newItemData);

      const newItem = {
        key: newItemKey,
        data: newItemData
      };

      // reverse 여부에 따라 배열의 앞 또는 뒤에 추가
      if (reverse) {
        // reverse가 true: 최신 글이 위에 → 배열 맨 앞에 추가
        items = [newItem, ...items];
        console.log('DatabaseListView: Added new item to the beginning (reverse mode)');

        // 새 아이템에 onValue 리스너 설정 (인덱스 0)
        setupItemListener(newItemKey, 0);

        // 기존 아이템들의 인덱스가 밀렸으므로, unsubscribers의 인덱스를 업데이트할 필요는 없음
        // (setupItemListener는 itemKey를 키로 사용하므로 인덱스 변경에 영향 없음)
        // 하지만 items[index] 업데이트를 위해 모든 리스너를 다시 설정하는 것이 안전할 수 있음
        // 성능을 위해 여기서는 새 아이템에만 리스너 설정
      } else {
        // reverse가 false: 오래된 글이 위에 → 배열 맨 뒤에 추가
        const newIndex = items.length;
        items = [...items, newItem];
        console.log('DatabaseListView: Added new item to the end (normal mode)');

        // 새 아이템에 onValue 리스너 설정
        setupItemListener(newItemKey, newIndex);
      }
    }, (error) => {
      console.error('DatabaseListView: Error in child_added listener', error);
    });

    // 약간의 지연 후 리스너를 활성화 (기존 아이템들의 child_added 이벤트를 건너뛰기 위해)
    // Firebase는 리스너 설정 직후 기존 아이템들에 대해 child_added를 발생시킴
    setTimeout(() => {
      childAddedListenerReady = true;
      console.log('DatabaseListView: child_added listener is now ready to accept new children');
    }, 1000);
  }

  /**
   * 초기 데이터 로드 (페이지별 Firebase 쿼리)
   *
   * Firebase 쿼리를 사용하여 첫 번째 페이지 + 1개를 로드합니다.
   * pageSize + 1개를 로드하여 다음 페이지 존재 여부를 판단합니다.
   * 각 아이템에 onValue 리스너를 설정하여 실시간 업데이트를 감지합니다.
   *
   * reverse가 true일 때는 limitToLast를 사용하여 최신 아이템부터 가져옵니다.
   */
  async function loadInitialData() {
    console.log('DatabaseListView: Loading initial data from', path, '(reverse:', reverse, ')');
    initialLoading = true;
    error = null;
    items = [];
    pageItems.clear();

    // 기존 리스너들 정리
    unsubscribers.forEach((unsubscribe) => unsubscribe());
    unsubscribers.clear();

    // child_added 리스너 해제
    if (childAddedUnsubscribe) {
      childAddedUnsubscribe();
      childAddedUnsubscribe = null;
    }
    childAddedListenerReady = false;

    lastLoadedValue = null;
    lastLoadedKey = null;
    hasMore = true;
    currentPage = 0;

    try {
      const baseRef = dbRef(database, path);

      // Firebase 쿼리 생성
      // reverse가 true면 limitToLast를 사용하여 가장 최근 데이터부터 가져옵니다
      // pageSize + 1개를 가져와서 hasMore를 판단합니다
      let dataQuery;
      if (reverse) {
        // 역순 정렬: limitToLast 사용
        dataQuery = query(
          baseRef,
          orderByChild(orderBy),
          limitToLast(pageSize + 1)
        );
        console.log('DatabaseListView: Using limitToLast for reverse order');
      } else {
        // 정순 정렬: limitToFirst 사용
        dataQuery = query(
          baseRef,
          orderByChild(orderBy),
          limitToFirst(pageSize + 1)
        );
        console.log('DatabaseListView: Using limitToFirst for normal order');
      }

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

        // 🔍 디버깅: 초기 로드 결과
        console.log(
          `DatabaseListView: Initial query returned ${loadedItems.length} items from Firebase`
        );
        console.log(
          `DatabaseListView: Items orderBy values:`,
          loadedItems.map((item) => ({
            key: item.key,
            [orderBy]: item.data[orderBy]
          }))
        );

        // limitToLast를 사용하면 Firebase가 오름차순으로 반환하므로
        // reverse가 true일 때는 배열을 뒤집어야 합니다 (최신 글이 먼저 오도록)
        if (reverse) {
          loadedItems.reverse();
          console.log('DatabaseListView: Reversed items for display (newest first)');
        }

        // pageSize보다 많으면 hasMore = true, 마지막 아이템은 표시하지 않음
        if (loadedItems.length > pageSize) {
          hasMore = true;
          items = loadedItems.slice(0, pageSize);
          // 마지막 항목에서 페이지 커서 값 추출
          const cursor = getLastItemCursor(items, orderBy);
          if (cursor) {
            lastLoadedValue = cursor.value;
            lastLoadedKey = cursor.key;
            console.log('DatabaseListView: Next page cursor set:', { lastLoadedValue, lastLoadedKey });
          } else {
            hasMore = false;
          }
        } else {
          hasMore = false;
          items = loadedItems;
          if (items.length > 0) {
            // 마지막 항목에서 페이지 커서 값 추출
            const cursor = getLastItemCursor(items, orderBy);
            if (cursor) {
              lastLoadedValue = cursor.value;
              lastLoadedKey = cursor.key;
              console.log('DatabaseListView: Last cursor set:', { lastLoadedValue, lastLoadedKey });
            }
          }
        }

        // 첫 페이지 아이템들을 pageItems에 저장
        pageItems.set(0, items);

        // 각 아이템에 onValue 리스너 설정
        items.forEach((item, index) => {
          setupItemListener(item.key, index);
        });

        console.log(
          `DatabaseListView: Page ${currentPage} - Loaded ${items.length} items, hasMore: ${hasMore}`
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

      // 초기 로드 완료 후 child_added 리스너 설정
      // 이후 새로 생성되는 노드를 실시간으로 감지하여 화면에 추가
      setupChildAddedListener();
    }
  }

  /**
   * 다음 페이지 데이터 로드 (Firebase 쿼리)
   *
   * Firebase 쿼리를 사용하여 다음 페이지를 로드합니다.
   * - reverse가 false일 때: startAfter + limitToFirst 사용 (오래된 글 → 최신 글 순서)
   * - reverse가 true일 때: endBefore + limitToLast 사용 (최신 글 → 오래된 글 순서)
   * pageSize + 1개를 로드하여 hasMore를 판단합니다.
   */
  async function loadMore() {
    if (loading || !hasMore) {
      console.log('DatabaseListView: Cannot load more - loading:', loading, 'hasMore:', hasMore);
      return;
    }

    currentPage++;
    console.log(`DatabaseListView: Loading more data (server-side pagination) - Page ${currentPage}`);
    console.log(`DatabaseListView: Current cursor - lastLoadedValue:`, lastLoadedValue, 'lastLoadedKey:', lastLoadedKey);
    loading = true;
    error = null;

    try {
      // lastLoadedValue가 null 또는 undefined이면 더 이상 로드할 수 없음
      // (undefined 체크도 필수 - orderBy 필드가 없는 항목이 있을 수 있음)
      if (lastLoadedValue == null) {
        console.log('DatabaseListView: No lastLoadedValue (null or undefined), cannot load more');
        hasMore = false;
        loading = false;
        return;
      }

      const baseRef = dbRef(database, path);

      // Firebase 쿼리 생성
      // reverse 여부에 따라 다른 쿼리 사용
      let dataQuery;
      if (reverse) {
        // 역순 정렬: endBefore + limitToLast 사용
        // limitToLast를 사용하면 마지막 N개를 가져오는데,
        // endBefore로 현재 커서 이전 데이터를 가져옵니다
        dataQuery = query(
          baseRef,
          orderByChild(orderBy),
          endBefore(lastLoadedValue),
          limitToLast(pageSize + 1)
        );
        console.log('DatabaseListView: Using endBefore + limitToLast for reverse pagination');
      } else {
        // 정순 정렬: startAfter + limitToFirst 사용
        dataQuery = query(
          baseRef,
          orderByChild(orderBy),
          startAfter(lastLoadedValue),
          limitToFirst(pageSize + 1)
        );
        console.log('DatabaseListView: Using startAfter + limitToFirst for normal pagination');
      }

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

        // 🔍 디버깅: loadMore 쿼리 결과
        console.log(
          `DatabaseListView: Page ${currentPage} - Query returned ${newItems.length} items from Firebase`
        );
        console.log(
          `DatabaseListView: Page ${currentPage} - Items orderBy values:`,
          newItems.map((item) => ({
            key: item.key,
            [orderBy]: item.data[orderBy]
          }))
        );

        // reverse가 true이고 limitToLast를 사용했으면 배열을 뒤집어야 합니다
        // (Firebase는 오름차순으로 반환하므로, 최신 글이 먼저 오도록 뒤집기)
        if (reverse) {
          newItems.reverse();
          console.log('DatabaseListView: Reversed items for display (newest first)');
        }

        // 중복 제거: 이미 로드된 아이템들을 제외
        // 새로 로드된 아이템 중 이미 화면에 있는 key는 제외합니다
        const existingKeys = new Set(items.map(item => item.key));
        const filteredItems = newItems.filter((item) => !existingKeys.has(item.key));

        // 🔍 디버깅: 필터링 후 결과
        console.log(
          `DatabaseListView: Page ${currentPage} - After filtering duplicates: ${filteredItems.length} items`
        );

        if (filteredItems.length === 0) {
          console.log('DatabaseListView: No more unique items after filtering');
          hasMore = false;
          loading = false;
          return;
        }

        // hasMore 판단은 중복 제거 전 newItems 길이로 결정
        // Firebase에서 pageSize + 1개를 가져왔다면 더 많은 데이터가 있다는 의미
        if (newItems.length > pageSize) {
          hasMore = true;
          // 중복 제거 후 실제로 표시할 아이템은 pageSize만큼만 추가
          const itemsToAdd = filteredItems.slice(0, pageSize);
          items = [...items, ...itemsToAdd];
          // 마지막 항목에서 페이지 커서 값 추출
          const cursor = getLastItemCursor(itemsToAdd, orderBy);
          if (cursor) {
            lastLoadedValue = cursor.value;
            lastLoadedKey = cursor.key;
            console.log('DatabaseListView: Updated cursor for next page:', { lastLoadedValue, lastLoadedKey });
          } else {
            hasMore = false;
            console.log('DatabaseListView: No valid cursor, hasMore set to false');
          }
        } else {
          // Firebase에서 pageSize 이하로 가져왔다면 마지막 페이지
          hasMore = false;
          items = [...items, ...filteredItems];
          if (filteredItems.length > 0) {
            // 마지막 항목에서 페이지 커서 값 추출
            const cursor = getLastItemCursor(filteredItems, orderBy);
            if (cursor) {
              lastLoadedValue = cursor.value;
              lastLoadedKey = cursor.key;
              console.log('DatabaseListView: Updated cursor (last page):', { lastLoadedValue, lastLoadedKey });
            }
          }
          console.log('DatabaseListView: Loaded all remaining items, hasMore set to false');
        }

        // 새로 추가된 아이템들에 onValue 리스너 설정
        const startIndex = items.length - (filteredItems.length > pageSize ? pageSize : filteredItems.length);
        items.slice(startIndex).forEach((item, relativeIndex) => {
          setupItemListener(item.key, startIndex + relativeIndex);
        });

        console.log(
          `DatabaseListView: Page ${currentPage} - Loaded ${filteredItems.length} more items, total: ${items.length}, hasMore: ${hasMore}`
        );
      } else {
        console.log('DatabaseListView: Query returned no data, hasMore set to false');
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
   * 컨테이너 스크롤 이벤트 핸들러
   * 스크롤이 threshold 이내로 내려가면 다음 페이지 로드
   */
  function handleScroll() {
    if (!scrollContainer || loading || !hasMore) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
    const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

    // 바닥에서 threshold px 이내면 다음 페이지 로드
    if (distanceFromBottom < threshold) {
      console.log('DatabaseListView: Near bottom (container scroll), loading more...');
      loadMore();
    }
  }

  /**
   * Window 스크롤 이벤트 핸들러
   * body 스크롤이 threshold 이내로 내려가면 다음 페이지 로드
   */
  function handleWindowScroll() {
    if (loading || !hasMore) return;

    // document의 전체 높이와 현재 스크롤 위치를 확인
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

    // 바닥에서 threshold px 이내면 다음 페이지 로드
    if (distanceFromBottom < threshold) {
      console.log('DatabaseListView: Near bottom (window scroll), loading more...');
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
