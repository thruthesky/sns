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

### Firebase Realtime Database (RTDB) 사용

**RTDB를 사용하는 이유:**
1. **실시간 동기화**: 게시글 쓰기, 수정, 삭제 시 실시간으로 반영되어 사용자 경험 향상
2. **간편한 데이터 구조**: 계층적 데이터 저장이 용이하여 게시판 구조에 적합
3. **확장성**: 사용자 수 증가에 따른 확장 용이

### 게시판 데이터 구조

게시판 데이터는 `/forum/` 경로 아래에 저장됩니다.

```
/forum/
  {category}/              # 카테고리 (community, qna, news, market)
    posts/
      {postId}/            # Firebase 자동 생성 ID
        uid: "사용자 UID"
        title: "게시글 제목"
        content: "게시글 내용"
        author: "작성자 displayName"
        category: "카테고리"
        createdAt: 1234567890  # Unix timestamp (밀리초)
        updatedAt: 1234567890  # Unix timestamp (밀리초)
```

**예시 경로:**
```
/forum/community/posts/abc123def456/
/forum/qna/posts/xyz789uvw012/
/forum/news/posts/mno345pqr678/
```

---

## 카테고리 관리

### 카테고리 설정

카테고리는 상수로 정의하여 중앙 관리됩니다.

```javascript
// src/lib/constants/forum.js
/**
 * 게시판 카테고리 설정
 */
export const FORUM_CATEGORIES = [
  { value: "community", label: "커뮤니티" },
  { value: "qna", label: "질문과답변" },
  { value: "news", label: "뉴스" },
  { value: "market", label: "회원장터" },
];
```

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
 * @property {string} category - 카테고리
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
- 새 게시글을 `/forum/{category}/posts/` 경로에 저장
- 자동으로 postId 생성 (Firebase push key)
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
- 최신 N개의 게시글을 가져옴 (기본값: 10개)
- 데이터 변경 시 자동으로 callback 호출
- Unsubscribe 함수 반환 (메모리 누수 방지)

**사용 예시:**
```javascript
import { onMount } from 'svelte';
import { listenToPosts } from '../services/forum.js';

let posts = $state([]);

onMount(() => {
  // 게시글 리스너 설정
  const unsubscribe = listenToPosts("community", 10, (newPosts) => {
    console.log("게시글 목록:", newPosts);
    posts = newPosts;
  });

  // 컴포넌트 언마운트 시 리스너 해제
  return () => unsubscribe();
});
```

#### 3. updatePost() - 게시글 수정 (향후 구현)

```javascript
/**
 * 기존 게시글을 수정합니다.
 * 본인이 작성한 글만 수정 가능합니다.
 *
 * @param {string} category - 게시판 카테고리
 * @param {string} postId - 게시글 ID
 * @param {Object} updates - 수정할 내용 { title?: string, content?: string }
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function updatePost(category, postId, updates) {
  // 구현 코드
}
```

#### 4. deletePost() - 게시글 삭제 (향후 구현)

```javascript
/**
 * 게시글을 삭제합니다.
 * 본인이 작성한 글만 삭제 가능합니다.
 *
 * @param {string} category - 게시판 카테고리
 * @param {string} postId - 게시글 ID
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function deletePost(category, postId) {
  // 구현 코드
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

### 4. 댓글 기능
- 게시글에 댓글 작성, 수정, 삭제
- 실시간 댓글 동기화
- 데이터 구조: `/forum/{category}/posts/{postId}/comments/`

### 5. 좋아요/싫어요 기능
- 게시글에 좋아요/싫어요 추가
- 중복 방지 (한 사용자당 한 번만)
- 데이터 구조: `/forum/{category}/posts/{postId}/likes/`

### 6. 검색 및 필터링
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

- [Svelte Custom Elements 개발 가이드](./sns-custom-elements.md)
- [웹 개발 지침](./sns-web.md)
- [i18n 개발 가이드](./sns-web-i18n.md)
- [Svelte 공식 문서](https://svelte.dev/docs)
