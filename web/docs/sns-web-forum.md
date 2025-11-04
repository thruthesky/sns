# 게시판 개발 가이드

본 문서는 Svelte 5 기반으로 게시판 기능을 개발하는 데 필요한 지침과 로직을 제공합니다.
게시판 관련 코드 작성을 할 때, 반드시 이 문서를 따라서 작성해야 합니다.

---

## 📋 목차

1. [게시판 주요 기능](#게시판-주요-기능)
2. [데이터베이스 구조](#데이터베이스-구조)
3. [카테고리 관리](#카테고리-관리)
4. [API 함수 (lib/forum.ts)](#api-함수-libforumts)
5. [페이지 구조 (src/demo/ForumList.svelte)](#페이지-구조-srcdemofroumlistsvelte)
6. [상세 구현 로직](#상세-구현-로직)
7. [보안 고려사항](#보안-고려사항)

---

## 게시판 주요 기능

### 1. 글 작성
- 사용자는 카테고리, 제목, 내용을 입력하여 새 글을 작성할 수 있습니다.
- 작성된 글은 Firebase RTDB에 실시간으로 저장됩니다.
- 로그인한 사용자만 글을 작성할 수 있습니다.
- 작성 시 모달 다이얼로그를 통해 입력받습니다.

### 2. 글 목록
- 작성된 글은 카테고리별로 목록 형태로 표시됩니다.
- 실시간 리스너를 통해 새 글이 자동으로 목록에 반영됩니다.
- 최신 10개의 게시글을 표시합니다.
- 게시글이 없는 경우 "게시글이 없습니다" 메시지 표시

### 3. 글 수정 (향후 구현)
- 사용자는 자신이 작성한 글을 수정할 수 있습니다.
- 수정된 글은 데이터베이스에 업데이트됩니다.

### 4. 글 삭제 (향후 구현)
- 사용자는 자신이 작성한 글을 삭제할 수 있습니다.
- 삭제된 글은 데이터베이스에서 제거됩니다.

---

## 데이터베이스 구조

게시판 데이터베이스 구조는 별도 문서에서 관리됩니다.

**📖 참고 문서**: [데이터베이스 구조 가이드](./sns-web-database.md#게시판-forum--posts)

주요 내용:
- `/posts/<post-id>` 경로 구조 (flat style)
- `category` 필드로 카테고리 구분 (community, qna, news, market)
- `order` 필드로 카테고리별 정렬 (`<category>-<timestamp>` 형식)
- 실시간 동기화를 위한 RTDB 사용
- 게시글 필드: uid, title, content, author, category, order, createdAt, updatedAt

---

## 카테고리 관리

카테고리 설정은 데이터베이스 구조 문서를 참고하세요.

**📖 참고 문서**: [데이터베이스 구조 가이드 - 카테고리 설정](./sns-web-database.md#카테고리-설정)

### 카테고리 사용 방법

```svelte
<script>
  import { FORUM_CATEGORIES } from '../lib/constants/forum.js';

  let selectedCategory = 'community';
</script>

<!-- Select 드롭다운에서 사용 -->
<select bind:value={selectedCategory}>
  {#each FORUM_CATEGORIES as category (category.value)}
    <option value={category.value}>
      {category.label}
    </option>
  {/each}
</select>

<!-- 카테고리 탭에서 사용 -->
<div class="category-tabs">
  {#each FORUM_CATEGORIES as category (category.value)}
    <a
      href={`/forum?category=${category.value}`}
      class="tab {currentCategory === category.value ? 'active' : ''}"
    >
      {category.label}
    </a>
  {/each}
</div>
```

---

## API 함수 (src/lib/services/forum.js)

### ForumPost 타입 정의

```javascript
/**
 * 게시글 데이터 타입
 * @typedef {Object} ForumPost
 * @property {string} [postId] - Firebase 자동 생성 ID
 * @property {string} uid - 작성자 UID
 * @property {string} title - 게시글 제목
 * @property {string} content - 게시글 내용
 * @property {string} author - 작성자 displayName
 * @property {string} category - 카테고리 (community, qna, news, market)
 * @property {string} order - 정렬용 문자열 (<category>-<timestamp> 형식)
 * @property {number} createdAt - 작성 시간 (Unix timestamp 밀리초)
 * @property {number} updatedAt - 수정 시간 (Unix timestamp 밀리초)
 */
```

### 주요 함수

#### 1. createPost() - 게시글 작성

```javascript
/**
 * 새 게시글을 Firebase Realtime Database에 저장합니다.
 *
 * @param {string} category - 게시판 카테고리 (community, qna, news, market)
 * @param {string} uid - 작성자 UID
 * @param {string} author - 작성자 표시명
 * @param {string} title - 게시글 제목
 * @param {string} content - 게시글 내용
 * @returns {Promise<{success: boolean, postId?: string, error?: string}>}
 */
export async function createPost(category, uid, author, title, content) {
  // 구현 코드
}
```

**기능:**
- 새 게시글을 `/posts/` 경로에 저장 (flat style)
- 자동으로 postId 생성 (Firebase push key)
- `category` 필드와 `order` 필드(`<category>-<timestamp>`) 자동 생성
- createdAt, updatedAt 자동 설정 (현재 시간)

**사용 예시:**
```javascript
const result = await createPost(
  "community",
  "user-uid-123",
  "홍길동",
  "첫 번째 게시글",
  "안녕하세요! 첫 게시글입니다."
);

if (result.success) {
  console.log("게시글 ID:", result.postId);
}

// 저장되는 데이터 구조:
// /posts/<postId>/ {
//   uid: "user-uid-123",
//   title: "첫 번째 게시글",
//   content: "안녕하세요! 첫 게시글입니다.",
//   author: "홍길동",
//   category: "community",
//   order: "community-1234567890",
//   createdAt: 1234567890,
//   updatedAt: 1234567890
// }
```

#### 2. listenToPosts() - 게시글 실시간 리스너

```javascript
/**
 * 특정 카테고리의 게시글을 실시간으로 감시합니다.
 * 데이터 변경 시 자동으로 callback을 호출합니다.
 *
 * @param {string} category - 게시판 카테고리
 * @param {number} [limit=10] - 가져올 최신 게시글 수
 * @param {(posts: ForumPost[]) => void} callback - 게시글 목록 변경 시 호출될 콜백
 * @returns {() => void} 리스너 해제 함수 (언마운트 시 호출 필수)
 */
export function listenToPosts(category, limit = 10, callback) {
  // 구현 코드
}
```

**기능:**
- 특정 카테고리의 게시글을 실시간으로 감시
- `orderByChild('order')` + `startAt('category-')` + `endAt('category-\uf8ff')` 쿼리 사용
- 최신 N개의 게시글을 가져옴 (기본값: 10개)
- 데이터 변경 시 자동으로 callback 호출
- Unsubscribe 함수 반환 (메모리 누수 방지)

**사용 예시:**
```javascript
import { onMount } from 'svelte';
import { listenToPosts } from '../services/forum.js';

let posts = $state([]);

onMount(() => {
  // community 카테고리 게시글 리스너 설정
  const unsubscribe = listenToPosts("community", 10, (newPosts) => {
    console.log("게시글 목록:", newPosts);
    posts = newPosts;
  });

  // 컴포넌트 언마운트 시 리스너 해제
  return () => unsubscribe();
});

// 쿼리 방식:
// query(
//   ref(database, 'posts'),
//   orderByChild('order'),
//   startAt('community-'),
//   endAt('community-\uf8ff'),
//   limitToLast(10)
// )
```

#### 3. updatePost() - 게시글 수정 (향후 구현)

```javascript
/**
 * 기존 게시글을 수정합니다.
 * 본인이 작성한 글만 수정 가능합니다.
 *
 * @param {string} postId - 게시글 ID
 * @param {Object} updates - 수정할 내용 { title?: string, content?: string }
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function updatePost(postId, updates) {
  // 구현 코드
  // flat style 구조에서는 postId만으로 직접 접근 가능
  // /posts/{postId}
}
```

#### 4. deletePost() - 게시글 삭제 (향후 구현)

```javascript
/**
 * 게시글을 삭제합니다.
 * 본인이 작성한 글만 삭제 가능합니다.
 *
 * @param {string} postId - 게시글 ID
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function deletePost(postId) {
  // 구현 코드
  // flat style 구조에서는 postId만으로 직접 접근 가능
  // /posts/{postId}
}
```

---

## 페이지 구조 (src/demo/ForumList.svelte)

### 페이지 개요

**경로:** `/forum?category={category}`

**주요 기능:**
1. 카테고리별 게시글 목록 표시
2. 카테고리 탭 네비게이션
3. 글쓰기 모달 다이얼로그
4. 실시간 게시글 동기화
5. 로그인 상태 확인

### 컴포넌트 구조

```svelte
<script>
  // Svelte 5 Runes를 사용한 상태 관리
  import { onMount } from 'svelte';
  import { FORUM_CATEGORIES } from '../lib/constants/forum.js';
  import { listenToPosts, createPost } from '../lib/services/forum.js';

  // 페이지 상태
  let userId = $state(null);
  let userName = $state('');
  let isAuthLoading = $state(true);

  // 현재 카테고리
  let currentCategory = $state('community');

  // 글쓰기 모달 상태
  let isDialogOpen = $state(false);
  let postCategory = $state('');
  let postTitle = $state('');
  let postContent = $state('');
  let isSubmitting = $state(false);

  // 게시글 목록
  let posts = $state([]);
</script>

<!-- 페이지 헤더 -->
<div class="header">
  <h1>포럼</h1>
  <button class="btn-create-post" onclick={() => isDialogOpen = true}>
    글쓰기
  </button>
</div>

<!-- 카테고리 탭 -->
<div class="category-tabs">
  {#each FORUM_CATEGORIES as category (category.value)}
    <a
      href={`/forum?category=${category.value}`}
      class="tab {currentCategory === category.value ? 'active' : ''}"
    >
      {category.label}
    </a>
  {/each}
</div>

<!-- 게시글 목록 또는 빈 상태 -->
{#if posts.length === 0}
  <div class="empty-state">
    <p>게시글이 없습니다</p>
    <p class="hint">첫 번째 게시글을 작성해보세요!</p>
  </div>
{:else}
  <div class="posts-list">
    {#each posts as post (post.postId)}
      <div class="post-item">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <div class="post-meta">
          <span>작성자: {post.author}</span>
          <span>{new Date(post.createdAt).toLocaleDateString('ko-KR')}</span>
        </div>
      </div>
    {/each}
  </div>
{/if}

<!-- 글쓰기 모달 다이얼로그 -->
{#if isDialogOpen}
  <div class="modal-backdrop" onclick={() => isDialogOpen = false}>
    <div class="modal" onclick={(e) => e.stopPropagation()}>
      <h2>새 게시글 작성</h2>

      <!-- 카테고리 선택 -->
      <select bind:value={postCategory} class="form-control">
        <option value="">카테고리 선택</option>
        {#each FORUM_CATEGORIES as category (category.value)}
          <option value={category.value}>{category.label}</option>
        {/each}
      </select>

      <!-- 제목 입력 -->
      <input
        type="text"
        bind:value={postTitle}
        placeholder="제목을 입력하세요"
        class="form-control"
      />

      <!-- 내용 입력 -->
      <textarea
        bind:value={postContent}
        placeholder="내용을 입력하세요"
        class="form-control textarea"
      ></textarea>

      <!-- 버튼 -->
      <div class="modal-buttons">
        <button
          class="btn-submit"
          onclick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? '전송 중...' : '전송'}
        </button>
        <button
          class="btn-cancel"
          onclick={() => isDialogOpen = false}
        >
          취소
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  /* 스타일 정의 */
</style>
```

---

## 상세 구현 로직

### 1. 상태 관리

Svelte 5의 Runes를 사용하여 반응형 상태를 관리합니다.

```javascript
<script>
  // 인증 상태
  let userId = $state(null);
  let userName = $state('');
  let isAuthLoading = $state(true);

  // 현재 카테고리 (URL 쿼리 파라미터에서 가져옴)
  let currentCategory = $state('community');

  // 글쓰기 모달 상태
  let isDialogOpen = $state(false);
  let postCategory = $state('');
  let postTitle = $state('');
  let postContent = $state('');
  let isSubmitting = $state(false);

  // 게시글 목록
  let posts = $state([]);
</script>
```

### 2. 인증 상태 확인

**중요:** 페이지 새로고침 시 인증 상태를 올바르게 처리하기 위해 `isAuthLoading` 상태를 사용합니다.

```javascript
<script>
  import { onMount } from 'svelte';
  import { auth } from '../lib/firebase.js';

  onMount(() => {
    // Firebase 인증 상태 변화 감시
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
</script>

<!-- isAuthLoading이 true일 때는 로딩 화면 표시 -->
{#if isAuthLoading}
  <div class="loading-screen">
    <p>로딩 중...</p>
  </div>
{:else}
  <!-- 페이지 콘텐츠 -->
{/if}
```

### 3. 게시글 실시간 리스너

```javascript
<script>
  import { onMount } from 'svelte';
  import { listenToPosts } from '../lib/services/forum.js';

  onMount(() => {
    // 현재 카테고리의 게시글 목록 리스너 설정
    const unsubscribe = listenToPosts(currentCategory, 10, (newPosts) => {
      posts = newPosts;
    });

    // ⚠️ 중요: 컴포넌트 언마운트 시 리스너 해제 (메모리 누수 방지)
    return () => unsubscribe();
  });

  // currentCategory 변경 시 리스너 자동 업데이트 (Svelte 반응성)
  $effect(() => {
    // currentCategory가 변경되면 자동으로 실행됨
  });
</script>
```

### 4. 글쓰기 버튼 클릭 핸들러

```javascript
<script>
  /**
   * 글쓰기 버튼 클릭 시 처리
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
</script>
```

### 5. 글쓰기 전송 핸들러

```javascript
<script>
  /**
   * 게시글 저장 및 전송
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
        // 4. 모달 닫기 및 초기화
        isDialogOpen = false;
        postCategory = '';
        postTitle = '';
        postContent = '';

        // 5. 성공 메시지 표시
        alert('게시글이 작성되었습니다.');

        // 6. 해당 카테고리로 새로고침하여 게시글 표시
        window.location.href = `/forum?category=${postCategory}`;
      } else {
        alert(`게시글 저장 실패: ${result.error}`);
      }
    } catch (error) {
      console.error('게시글 저장 오류:', error);
      alert('게시글 저장 중 오류가 발생했습니다.');
    } finally {
      // 6. 전송 중 상태 해제
      isSubmitting = false;
    }
  }
</script>
```

### 6. 카테고리 탭 네비게이션

```svelte
<!-- 카테고리 탭 -->
<div class="category-tabs">
  {#each FORUM_CATEGORIES as category (category.value)}
    <a
      href={`/forum?category=${category.value}`}
      class="tab {currentCategory === category.value ? 'active' : ''}"
      class:active={currentCategory === category.value}
    >
      {category.label}
    </a>
  {/each}
</div>

<style>
  .category-tabs {
    display: flex;
    gap: 0.5rem;
    border-bottom: 1px solid #e5e7eb;
    margin: 1.5rem 0;
  }

  .tab {
    padding: 0.75rem 1rem;
    text-decoration: none;
    color: #6b7280;
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
</style>
```

### 7. 게시글 목록 렌더링

```svelte
<!-- 게시글 목록 또는 빈 상태 -->
{#if posts.length === 0}
  <!-- 게시글이 없는 경우 -->
  <div class="empty-state">
    <p class="empty-message">게시글이 없습니다</p>
    <p class="empty-hint">첫 번째 게시글을 작성해보세요!</p>
  </div>
{:else}
  <!-- 게시글 목록 -->
  <div class="posts-list">
    {#each posts as post (post.postId)}
      <div class="post-item">
        <h3 class="post-title">{post.title}</h3>
        <p class="post-content">{post.content}</p>
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

<style>
  .empty-state {
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 3rem;
    text-align: center;
  }

  .empty-message {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    color: #111827;
  }

  .empty-hint {
    margin: 0;
    font-size: 0.875rem;
    color: #6b7280;
  }

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
    transition: box-shadow 0.2s ease;
  }

  .post-item:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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
</style>
```

---

## 보안 고려사항

### Firebase Realtime Database 보안 규칙

```json
{
  "rules": {
    "forum": {
      "$category": {
        "posts": {
          ".read": true,
          "$postId": {
            ".write": "auth != null && (!data.exists() || data.child('uid').val() === auth.uid)",
            ".validate": "newData.hasChildren(['uid', 'title', 'content', 'author', 'category', 'createdAt', 'updatedAt'])"
          }
        }
      }
    }
  }
}
```

**보안 규칙 설명:**
- `.read`: 모든 사용자가 게시글을 읽을 수 있음
- `.write`: 로그인한 사용자만 글 작성 가능, 본인이 작성한 글(`uid`)만 수정/삭제 가능
- `.validate`: 필수 필드 검증 (uid, title, content, author, category, createdAt, updatedAt)

### 클라이언트 측 입력 유효성 검사

1. **빈 값 검사**: 카테고리, 제목, 내용이 비어있지 않은지 확인
2. **인증 확인**: userId와 userName이 존재하는지 확인
3. **중복 제출 방지**: isSubmitting 상태로 중복 클릭 방지

---

## 댓글 개발 가이드

본 섹션은 게시판에 댓글 기능을 구현하는 방법을 상세하게 설명합니다.

### 댓글 데이터베이스 구조

댓글 데이터베이스 구조는 별도 문서에서 관리됩니다.

**📖 참고 문서**: [데이터베이스 구조 가이드 - 댓글 섹션](./sns-web-database.md#댓글-comments)

주요 내용:
- `/comments/<comment-id>` 경로 구조 (flat style)
- `postId` 필드로 소속 게시글 추적
- 트리 구조 지원 (최대 깊이 12단계)
- `order` 필드를 사용한 계층적 정렬
- 댓글 필드: postId, uid, content, depth, order, parentId, createdAt, updatedAt

### order 생성 로직

댓글의 트리 구조를 평탄화하여 정렬하기 위해 `order` 필드를 생성하는 함수입니다.

#### 1. 첫 번째 레벨 댓글 order 생성

```javascript
/**
 * 첫 번째 레벨 댓글의 order 생성
 * @param {number} noOfComments - 현재 게시글의 총 댓글 수
 * @returns {string} order 문자열
 */
function createFirstLevelOrder(noOfComments) {
  // 기본 order 문자열 생성 (모두 0으로 초기화)
  // L0: 5자리, L1: 4자리, L2~L11: 3자리
  const parts = ['00000', '0000', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000'];

  // depth 0 (첫 번째 레벨)에 noOfComments 값 추가
  const computed = 0 + noOfComments;
  parts[0] = String(computed).padStart(5, '0');  // 5자리로 패딩

  return parts.join(',');
}

// 예시
const order1 = createFirstLevelOrder(1);
// 결과: "00001,0000,000,000,000,000,000,000,000,000,000,000"

const order2 = createFirstLevelOrder(2);
// 결과: "00002,0000,000,000,000,000,000,000,000,000,000,000"
```

#### 2. 자식 댓글 order 생성

```javascript
/**
 * 자식 댓글의 order 생성
 * @param {string} parentOrder - 부모 댓글의 order 문자열
 * @param {number} parentDepth - 부모 댓글의 depth (1부터 시작)
 * @param {number} noOfComments - 현재 게시글의 총 댓글 수
 * @returns {string} order 문자열
 */
function createChildOrder(parentOrder, parentDepth, noOfComments) {
  // depth가 12 이상이면 부모 order를 그대로 반환
  if (parentDepth >= 12) {
    return parentOrder;
  }

  // order 문자열을 배열로 분리
  const parts = parentOrder.split(',');

  // 자식의 depth는 부모 depth와 동일한 인덱스 사용
  // (depth는 1부터 시작하지만, 배열 인덱스는 0부터 시작하므로)
  const childDepth = parentDepth;  // 배열 인덱스로 사용

  // 현재 depth의 값에 noOfComments 추가
  const currentValue = parseInt(parts[childDepth]);
  const computed = currentValue + noOfComments;

  // depth에 따라 패딩 자릿수 결정
  // L1 (두 번째 레벨): 4자리, L2 이후: 3자리
  let padding = 3;  // 기본값: 3자리
  if (childDepth === 1) {
    padding = 4;  // 두 번째 레벨은 4자리
  }

  parts[childDepth] = String(computed).padStart(padding, '0');

  return parts.join(',');
}

// 예시
const parentOrder = "00001,0000,000,000,000,000,000,000,000,000,000,000";
const childOrder1 = createChildOrder(parentOrder, 1, 6);
// 결과: "00001,0006,000,000,000,000,000,000,000,000,000,000"

const childOrder2 = createChildOrder(childOrder1, 2, 10);
// 결과: "00001,0006,010,000,000,000,000,000,000,000,000,000"
```

### 댓글 작성 API 함수

#### 1. 첫 번째 레벨 댓글 작성

```javascript
/**
 * 첫 번째 레벨 댓글 작성
 * @param {string} postId - 게시글 ID
 * @param {string} userId - 작성자 UID
 * @param {string} content - 댓글 내용
 */
async function createTopLevelComment(postId, userId, content) {
  // 1. 해당 게시글의 첫 번째 레벨 댓글 수 조회 (parentId가 null인 댓글들)
  const commentsRef = ref(database, 'comments');
  const commentsQuery = query(
    commentsRef,
    orderByChild('postId'),
    equalTo(postId)
  );
  const commentsSnapshot = await get(commentsQuery);

  let topLevelCommentCount = 0;
  if (commentsSnapshot.exists()) {
    commentsSnapshot.forEach((childSnapshot) => {
      const comment = childSnapshot.val();
      if (comment.parentId === null || comment.parentId === undefined) {
        topLevelCommentCount++;
      }
    });
  }

  const newTopLevelNumber = topLevelCommentCount + 1;
  const newCommentRef = push(commentsRef);
  const order = createFirstLevelOrder(newTopLevelNumber);

  const commentData = {
    postId: postId,  // 소속 게시글 ID
    uid: userId,
    content: content,
    depth: 1,
    order: order,
    parentId: null,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };

  await set(newCommentRef, commentData);
  return { success: true, commentId: newCommentRef.key };
}
```

#### 2. 자식 댓글 (대댓글) 작성

```javascript
/**
 * 자식 댓글 작성
 * @param {string} parentCommentId - 부모 댓글 ID
 * @param {string} userId - 작성자 UID
 * @param {string} content - 댓글 내용
 */
async function createChildComment(parentCommentId, userId, content) {
  // 1. 부모 댓글 정보 가져오기 (flat style: commentId로 직접 접근)
  const parentRef = ref(database, `comments/${parentCommentId}`);
  const parentSnapshot = await get(parentRef);
  const parentComment = parentSnapshot.val();

  if (!parentComment) {
    throw new Error('부모 댓글을 찾을 수 없습니다.');
  }

  // 2. 같은 부모를 가진 형제 댓글들의 수 조회
  const commentsRef = ref(database, 'comments');
  const siblingsQuery = query(
    commentsRef,
    orderByChild('parentId'),
    equalTo(parentCommentId)
  );
  const siblingsSnapshot = await get(siblingsQuery);

  let siblingCount = 0;
  if (siblingsSnapshot.exists()) {
    siblingCount = siblingsSnapshot.size;
  }

  const newSiblingNumber = siblingCount + 1;
  const newCommentRef = push(commentsRef);
  const order = createChildOrder(parentComment.order, parentComment.depth, newSiblingNumber);

  const commentData = {
    postId: parentComment.postId,  // 부모 댓글의 postId 상속
    uid: userId,
    content: content,
    depth: parentComment.depth + 1,
    order: order,
    parentId: parentCommentId,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };

  if (commentData.depth > 12) {
    throw new Error('댓글 깊이는 최대 12단계까지만 지원됩니다.');
  }

  await set(newCommentRef, commentData);
  return { success: true, commentId: newCommentRef.key };
}
```

### 댓글 조회 API 함수

#### 1. 댓글 목록 조회

```javascript
/**
 * 게시글의 모든 댓글 조회 (order 순으로 정렬)
 * @param {string} postId - 게시글 ID
 */
async function getComments(postId) {
  const commentsRef = ref(database, 'comments');
  const commentsQuery = query(
    commentsRef,
    orderByChild('postId'),
    equalTo(postId)
  );

  const snapshot = await get(commentsQuery);
  const comments = [];

  snapshot.forEach((childSnapshot) => {
    comments.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });

  // order 필드로 정렬 (클라이언트 측)
  comments.sort((a, b) => a.order.localeCompare(b.order));

  return comments;
}
```

#### 2. 실시간 댓글 리스너

```javascript
/**
 * 실시간 댓글 업데이트 구독
 * @param {string} postId - 게시글 ID
 * @param {function} callback - 댓글 목록을 받는 콜백 함수
 */
function listenToComments(postId, callback) {
  const commentsRef = ref(database, 'comments');
  const commentsQuery = query(
    commentsRef,
    orderByChild('postId'),
    equalTo(postId)
  );

  return onValue(commentsQuery, (snapshot) => {
    const comments = [];
    snapshot.forEach((childSnapshot) => {
      comments.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    // order 필드로 정렬 (클라이언트 측)
    comments.sort((a, b) => a.order.localeCompare(b.order));

    callback(comments);
  });
}
```

### 댓글 UI 구현 예시

댓글을 트리 구조로 표시할 때 `depth` 필드를 사용하여 들여쓰기를 적용합니다.

**중요**: 댓글에는 `author` 필드가 저장되지 않으므로, 작성자 정보(displayName, photoUrl)는 `/users/{uid}/` 경로에서 실시간으로 가져와야 합니다.

```svelte
<script>
  import { createRealtimeStore } from '../lib/stores/database.js';

  let comments = $state([]);

  // depth에 따라 들여쓰기 계산 (20px씩)
  function getIndent(depth) {
    return (depth - 1) * 20;
  }
</script>

<div class="comments-list">
  {#each comments as comment (comment.id)}
    {#snippet CommentItem()}
      <!-- 작성자 정보를 /users/{uid}/ 에서 실시간으로 가져오기 -->
      {@const userStore = createRealtimeStore(`users/${comment.uid}`)}
      {@const userData = $userStore.data}

      <div
        class="comment-item"
        style="margin-left: {getIndent(comment.depth)}px"
      >
        <div class="comment-header">
          {#if userData?.photoUrl}
            <img src={userData.photoUrl} alt="프로필" class="author-avatar" />
          {/if}
          <span class="comment-author">{userData?.displayName || '익명'}</span>
        </div>
        <div class="comment-content">{comment.content}</div>
        <div class="comment-meta">
          <span>Depth: {comment.depth}</span>
          <button onclick={() => replyToComment(comment.id)}>답글</button>
        </div>
      </div>
    {/snippet}

    {@render CommentItem()}
  {/each}
</div>

<style>
  .comment-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .author-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .comment-author {
    font-weight: 600;
  }
</style>
```

### 댓글 구현 시 주의사항

#### 1. 동기화 필수
- 게시글의 `commentCount`와 실제 댓글 개수는 항상 동기화되어야 함
- 댓글 추가/삭제 시 Firebase 트랜잭션 사용 권장

#### 2. order 생성 주의
- `noOfComments`는 항상 **게시글의 총 댓글 수**를 전달해야 함
- 댓글 작성 시마다 `commentCount`를 1씩 증가시켜 order에 반영

#### 3. depth 제한
- 최대 깊이는 12단계
- 13단계 이상은 order 정렬이 제대로 작동하지 않을 수 있음
- UI에서 depth 제한을 명시하는 것을 권장 (예: "더 이상 답글을 작성할 수 없습니다")

#### 4. 삭제 처리
- 댓글 삭제 시 자식 댓글도 함께 삭제하거나
- 또는 "삭제된 댓글입니다" 메시지로 대체 (자식 댓글 유지)
- 삭제 시 `commentCount` 감소 필수

#### 5. Cloud Functions 사용 권장
- 서버 측에서 `order` 생성 및 `commentCount` 동기화를 처리하는 것이 더 안전함
- 클라이언트에서 직접 처리 시 동시성 문제 발생 가능

---

## 향후 개발 계획

### 1. 게시글 상세 페이지
- **경로**: `/forum/detail/{postId}`
- **파일**: `src/demo/ForumDetail.svelte`
- **기능**: 게시글 전체 내용 표시, 수정/삭제 버튼 (본인만 노출)

### 2. 게시글 수정 기능
- 본인이 작성한 글만 수정 가능
- 수정 시 `updatedAt` 필드 자동 업데이트
- updatePost() 함수 구현

### 3. 게시글 삭제 기능
- 본인이 작성한 글만 삭제 가능
- 삭제 확인 다이얼로그
- deletePost() 함수 구현

### 4. 좋아요 기능
- 게시글과 댓글에 좋아요 추가
- 중복 방지 (한 사용자당 한 번만)
- 데이터 구조: `/post-props/likes/`, `/comment-props/likes/`

### 5. 검색 및 필터링
- 제목, 내용, 작성자로 검색
- 날짜 범위 필터링
- Firestore Query 또는 클라이언트 측 필터링

### 7. 페이지네이션
- 무한 스크롤 또는 페이지 번호
- 더보기 버튼
- Svelte 반응형 상태로 구현

### 8. 이미지 업로드
- Firebase Storage 사용
- 이미지 미리보기
- 드래그 앤 드롭 기능

### 9. Svelte 5 Runes 최적화
- `$derived` 사용하여 파생 상태 관리
- `$effect` 사용하여 부수 효과 관리
- 성능 최적화

---

**Last Updated**: 2025-11-03
**Version**: 2.0.0 (Svelte 5 기반)

## 관련 문서

- [데이터베이스 구조 가이드](./sns-web-database.md) - **게시판 DB 구조 필수 참고**
- [Svelte Custom Elements 개발 가이드](./sns-custom-elements.md)
- [웹 개발 지침](./sns-web.md)
- [i18n 개발 가이드](./sns-web-i18n.md)
- [Svelte 공식 문서](https://svelte.dev/docs)
