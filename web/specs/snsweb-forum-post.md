---
name: snsweb
version: 1.0.0
description: 게시글 개발 가이드 문서의 SED 사양
author: JaeHo Song
email: thruthesky@gmail.com
homepage: https://github.com/thruthesky/
funding: ""
license: SED Specification License v1.0
dependencies: []
"프로젝트 이름": snsweb
---

## Overview
- 이 문서는 게시판의 **게시글(Post)** 기능을 구현하기 위한 세부 사양을 정리한 문서입니다.
- Svelte 5 + Firebase RTDB 기반으로 동작하며, SED 명세 구조를 따릅니다.

## Requirements
- 본 문서에 명시된 게시글 작성·조회·수정·삭제 로직을 반드시 준수합니다.
- 댓글 기능과의 연동은 [댓글 개발 가이드](./snsweb-forum-comments.md)를 함께 참고합니다.

## Workflow
1. 아래 `## Detail Items` 절의 목차를 순서대로 검토합니다.
2. 데이터베이스 구조와 API 명세를 이해하고 코드에 반영합니다.
3. 페이지 구조 예시를 참고해 Svelte 컴포넌트를 구현합니다.

## Detail Items
- 이하에는 게시글 관련 원문 내용을 SED 구조에 맞게 재구성했습니다.

# 게시글 개발 가이드

본 문서는 Svelte 5 기반으로 게시글 기능을 개발하는 데 필요한 로직과 예시를 제공합니다.
게시글 관련 코드를 작성할 때, 반드시 이 사양을 참고하세요.

---

## 📋 목차

1. [게시글 주요 기능](#게시글-주요-기능)
2. [데이터베이스 구조](#데이터베이스-구조)
3. [API 함수 (src/lib/services/forum.js)](#api-함수-srclibservicesforumjs)
4. [페이지 구조 (src/demo/ForumList.svelte)](#페이지-구조-srcdemoforumlistsvelte)
5. [상세 구현 로직](#상세-구현-로직)
6. [보안 고려사항](#보안-고려사항)

---

## 게시글 주요 기능

### 1. 글 작성
- 사용자는 카테고리, 제목, 내용을 입력하여 새 글을 작성할 수 있습니다.
- 작성된 글은 Firebase RTDB에 실시간으로 저장됩니다.
- 로그인한 사용자만 글을 작성할 수 있습니다.
- 작성 시 모달 다이얼로그를 통해 입력받습니다.
- **카테고리 선택 UI (v2.2.0 개선)**:
  - URL 파라미터로 카테고리 자동 선택 (예: `?category=qna`)
  - "카테고리: 질문답변 (변경하기)" 형식의 inline display
  - (변경하기) 버튼 클릭 시 라디오 버튼 리스트 표시
  - Select box 대신 사용자 친화적인 UI 제공

### 2. 글 목록
- 작성된 글은 카테고리별로 목록 형태로 표시됩니다.
- 실시간 리스너를 통해 새 글이 자동으로 목록에 반영됩니다.
- 최신 10개의 게시글을 표시합니다.
- 게시글이 없는 경우 "게시글이 없습니다" 메시지를 표시합니다.

### 3. 글 수정
- 사용자는 자신이 작성한 글을 수정할 수 있습니다.
- 수정 버튼은 글 작성자에게만 표시됩니다 (아이콘만 표시).
- **댓글 제한**: `commentCount`가 0 또는 null인 경우에만 수정 가능합니다.
  - 댓글이 1개 이상인 경우 "댓글이 달려 있는 경우 수정을 할 수 없습니다." 메시지를 표시합니다.
- 수정 시 모달 다이얼로그를 통해 입력받습니다.
- 수정된 글은 데이터베이스에 업데이트되며 `updatedAt`이 자동 갱신됩니다.

### 4. 글 삭제
- 사용자는 자신이 작성한 글을 삭제할 수 있습니다.
- 삭제 버튼은 글 작성자에게만 표시됩니다 (아이콘만 표시).
- **댓글 제한**: `commentCount`가 0 또는 null인 경우에만 삭제 가능합니다.
  - 댓글이 1개 이상인 경우 "댓글이 달려 있는 경우 삭제를 할 수 없습니다." 경고를 표시합니다.
  - 이유: 댓글이 있는 상태에서 글을 삭제하면 댓글까지 사라지기 때문입니다.
- 삭제 전 확인 다이얼로그를 표시합니다.
- 삭제된 글은 데이터베이스에서 완전히 제거됩니다.

---

## 데이터베이스 구조

게시글 데이터는 `/posts/` 경로 아래에 flat style로 저장됩니다.

### 게시글 데이터 구조

```
/posts/
  <post-id>/              # Firebase 자동 생성 ID
    uid: "사용자 UID"
    title: "게시글 제목"
    content: "게시글 내용"
    author: "작성자 displayName"
    category: "community"  # 카테고리 (community, qna, news, market)
    order: "community-1234567890"  # <category>-<timestamp> 형식
    urls: ["url1", "url2"]  # 첨부 파일 URL 목록 (선택, Firebase Storage)
    createdAt: 1234567890  # Unix timestamp (밀리초)
    updatedAt: 1234567890  # Unix timestamp (밀리초)
    likeCount: 0         # 좋아요 총 개수 (Cloud Functions로 관리)
    commentCount: 0      # 댓글 총 개수 (Cloud Functions로 관리)
```

### 예시

```json
{
  "posts": {
    "abc123def456": {
      "uid": "user-1",
      "title": "안녕하세요",
      "content": "첫 게시글입니다",
      "author": "사용자1",
      "category": "community",
      "order": "community-1698473000000",
      "urls": [
        "https://firebasestorage.googleapis.com/.../image1.jpg",
        "https://firebasestorage.googleapis.com/.../image2.jpg"
      ],
      "createdAt": 1698473000000,
      "updatedAt": 1698473000000,
      "likeCount": 3,
      "commentCount": 2
    },
    "xyz789uvw012": {
      "uid": "user-2",
      "title": "질문 있습니다",
      "content": "누가 도와줄 수 있을까요?",
      "author": "사용자2",
      "category": "qna",
      "order": "qna-1698473100000",
      "createdAt": 1698473100000,
      "updatedAt": 1698473100000,
      "likeCount": 5,
      "commentCount": 1
    }
  }
}
```

### Flat Style 구조의 장점

- **관계형 참조 단순화**: post-id만으로 게시글 접근 가능
- **복잡한 노드 구조 제거**: 단순한 경로로 조회 효율성 향상
- **카테고리별 정렬 효율**: `order` 필드를 통한 빠른 정렬 쿼리

### 게시글 필드 설명

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| `uid` | string | ✅ | 작성자 UID |
| `title` | string | ✅ | 게시글 제목 |
| `content` | string | ✅ | 게시글 내용 |
| `author` | string | ✅ | 작성자 displayName |
| `category` | string | ✅ | 카테고리 (community, qna, news, market) |
| `order` | string | ✅ | 정렬용 문자열 (`<category>-<timestamp>`) |
| `createdAt` | number | ✅ | 작성 시간 (Unix timestamp 밀리초) |
| `updatedAt` | number | ✅ | 수정 시간 (Unix timestamp 밀리초) |
| `likeCount` | number | ❌ | 좋아요 총 개수 (기본값: 0) |
| `commentCount` | number | ❌ | 댓글 총 개수 (기본값: 0) |

**📖 참고 문서**: [데이터베이스 구조 가이드](./snsweb-firebase-database.md)

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
- 특정 카테고리의 게시글을 실시간으로 감시합니다.
- `orderByChild('order')` + `startAt('category-')` + `endAt('category-\uf8ff')` 쿼리 사용
- 최신 N개의 게시글을 가져옵니다 (기본값: 10개).
- 데이터 변경 시 callback을 호출합니다.
- Unsubscribe 함수를 반환하여 메모리 누수를 방지합니다.

#### 3. updatePost() - 게시글 수정

```javascript
/**
 * 기존 게시글을 수정합니다.
 * 본인이 작성한 글만 수정 가능합니다.
 * commentCount가 0 또는 null인 경우에만 수정 가능합니다.
 *
 * @param {string} postId - 게시글 ID
 * @param {string} currentUserId - 현재 로그인한 사용자 UID
 * @param {Object} updates - 수정할 내용 { title?: string, content?: string }
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function updatePost(postId, currentUserId, updates) {
  // 구현 코드 (권한 확인, 댓글 제한, updatedAt 갱신 등)
}
```

#### 4. deletePost() - 게시글 삭제

```javascript
/**
 * 게시글을 삭제합니다.
 * 본인이 작성한 글만 삭제 가능합니다.
 * commentCount가 0 또는 null인 경우에만 삭제 가능합니다.
 *
 * @param {string} postId - 게시글 ID
 * @param {string} currentUserId - 현재 로그인한 사용자 UID
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function deletePost(postId, currentUserId) {
  // 구현 코드 (권한 확인, 댓글 제한, remove 호출 등)
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
  let isCategorySelectMode = $state(false);  // 카테고리 선택 모드

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

      <!-- 카테고리 선택 (개선됨: inline display 방식) -->
      <!-- 자세한 구현은 "4. 카테고리 선택 UI (개선됨)" 섹션 참조 -->
      <div class="form-group">
        <label for="category">{$t("카테고리")}</label>
        {#if !isCategorySelectMode}
          <div class="category-display">
            <span class="category-name">
              {$t(`label.category.${postCategory}`)}
            </span>
            <button type="button" class="btn-change-category" onclick={handleCategorySelectToggle}>
              (변경하기)
            </button>
          </div>
        {:else}
          <div class="category-select-mode">
            {#each POST_CATEGORIES as category (category)}
              <label class="radio-option">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={postCategory === category}
                  onchange={() => handleCategorySelect(category)}
                />
                <span class="radio-label">{$t(`label.category.${category}`)}</span>
              </label>
            {/each}
          </div>
        {/if}
      </div>

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
  // 카테고리 선택 모드 토글 (true: 라디오 버튼 리스트 표시, false: 읽기 전용 표시)
  let isCategorySelectMode = $state(false);

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

### 4. 카테고리 선택 UI (개선됨)

**⚠️ 중요 변경사항**: Select box 대신 inline display 방식으로 변경되었습니다.

#### 주요 기능
1. **URL 파라미터 기반 자동 선택**: 글쓰기 모달 열 때 현재 URL의 카테고리가 자동으로 선택됨
2. **읽기 전용 표시**: "카테고리: 질문답변 (변경하기)" 형식으로 표시
3. **(변경하기) 버튼**: 클릭 시 라디오 버튼 리스트로 전환
4. **라디오 버튼 선택**: 카테고리 선택 후 자동으로 읽기 전용 모드로 복귀

#### 상태 변수

```javascript
// 카테고리 선택 모드 토글
// - false: 읽기 전용 표시 (기본값)
// - true: 라디오 버튼 리스트 표시
let isCategorySelectMode = $state(false);
```

#### 핸들러 함수

```javascript
/**
 * (변경하기) 버튼 클릭 핸들러
 * 카테고리 선택 모드를 토글합니다.
 */
function handleCategorySelectToggle() {
  isCategorySelectMode = !isCategorySelectMode;
}

/**
 * 라디오 버튼 카테고리 선택 핸들러
 * 카테고리를 변경하고 선택 모드를 종료합니다.
 */
function handleCategorySelect(category) {
  postCategory = category;
  isCategorySelectMode = false;
}
```

#### HTML 구조

```svelte
<!-- 카테고리 선택 -->
<div class="form-group">
  <label for="category">{$t("카테고리")}</label>

  {#if !isCategorySelectMode}
    <!-- 읽기 전용 카테고리 표시 -->
    <div class="category-display">
      <span class="category-name">
        {$t(`label.category.${postCategory}`)}
      </span>
      <button
        type="button"
        class="btn-change-category"
        onclick={handleCategorySelectToggle}
      >
        (변경하기)
      </button>
    </div>
  {:else}
    <!-- 카테고리 선택 모드: 라디오 버튼 리스트 -->
    <div class="category-select-mode">
      {#each POST_CATEGORIES as category (category)}
        <label class="radio-option">
          <input
            type="radio"
            name="category"
            value={category}
            checked={postCategory === category}
            onchange={() => handleCategorySelect(category)}
          />
          <span class="radio-label">
            {$t(`label.category.${category}`)}
          </span>
        </label>
      {/each}
    </div>
  {/if}
</div>
```

#### CSS 스타일링

```css
/* === 카테고리 선택 UI === */

/* 읽기 전용 카테고리 표시 */
.category-display {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0.9rem;
  background: #f9fafb;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
}

.category-name {
  font-size: 0.9rem;
  color: #1f2937;
  font-weight: 500;
}

/* (변경하기) 버튼 - 링크 스타일 */
.btn-change-category {
  background: none;
  border: none;
  color: #2563eb;
  font-size: 0.85rem;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
  transition: color 0.2s ease;
}

.btn-change-category:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* 카테고리 선택 모드: 라디오 버튼 리스트 */
.category-select-mode {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #f9fafb;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
}

/* 라디오 버튼 옵션 */
.radio-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 0.75rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.radio-option:hover {
  background: #eff6ff;
  border-color: #3b82f6;
}

/* 라디오 버튼 선택 시 강조 */
.radio-option:has(input:checked) {
  background: #dbeafe;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.radio-option input[type="radio"] {
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  accent-color: #2563eb;
}

.radio-label {
  font-size: 0.9rem;
  color: #1f2937;
  cursor: pointer;
}
```

#### 장점

1. **사용자 경험 향상**:
   - URL 파라미터 기반으로 카테고리가 자동 선택되어 편리함
   - Select box보다 직관적인 UI

2. **시각적 피드백**:
   - 현재 선택된 카테고리가 명확하게 표시됨
   - 라디오 버튼의 호버 및 선택 효과로 상호작용 피드백 제공

3. **모바일 친화적**:
   - 라디오 버튼이 터치 인터페이스에 더 적합함

---

### 5. 글쓰기 버튼 클릭 핸들러

```javascript
<script>
  /**
   * 글쓰기 버튼 클릭 시 처리
   * 로그인 상태를 확인하고 모달을 엽니다.
   * URL 파라미터의 카테고리를 자동으로 설정합니다.
   */
  function handleCreatePost() {
    if (!userId) {
      // 로그인하지 않은 경우 로그인 페이지로 이동
      window.location.href = '/user/login';
      return;
    }
    // URL 파라미터의 currentCategory를 postCategory에 자동 설정
    postCategory = currentCategory;
    // 카테고리 선택 모드를 읽기 전용으로 초기화
    isCategorySelectMode = false;
    // 글쓰기 모달 열기
    isDialogOpen = true;
  }
</script>
```

### 6. 글쓰기 전송 핸들러

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

### 7. 카테고리 탭 네비게이션

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

### 8. 게시글 목록 렌더링 (수정/삭제 버튼 포함)

```svelte
<script>
  import { Edit, Trash2 } from 'lucide-svelte';

  // 수정 모달 상태
  let isEditDialogOpen = $state(false);
  let editingPost = $state(null);
  let editTitle = $state('');
  let editContent = $state('');

  /**
   * 수정 버튼 클릭 핸들러
   */
  async function handleEdit(post) {
    // 댓글 여부 확인
    const commentCount = post.commentCount || 0;
    if (commentCount > 0) {
      alert('댓글이 달려 있는 경우 수정을 할 수 없습니다.');
      return;
    }

    // 수정 모달 열기
    editingPost = post;
    editTitle = post.title;
    editContent = post.content;
    isEditDialogOpen = true;
  }

  /**
   * 수정 전송 핸들러
   */
  async function handleEditSubmit() {
    if (!editTitle.trim() || !editContent.trim()) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    const result = await updatePost(
      editingPost.postId,
      userId,
      {
        title: editTitle,
        content: editContent
      }
    );

    if (result.success) {
      alert('게시글이 수정되었습니다.');
      isEditDialogOpen = false;
      editingPost = null;
      editTitle = '';
      editContent = '';
    } else {
      alert(result.error);
    }
  }

  /**
   * 삭제 버튼 클릭 핸들러
   */
  async function handleDelete(post) {
    // 댓글 여부 확인
    const commentCount = post.commentCount || 0;
    if (commentCount > 0) {
      alert('댓글이 달려 있는 경우 삭제를 할 수 없습니다.');
      return;
    }

    // 삭제 확인
    if (!confirm('정말로 삭제하시겠습니까?')) {
      return;
    }

    const result = await deletePost(post.postId, userId);

    if (result.success) {
      alert('게시글이 삭제되었습니다.');
    } else {
      alert(result.error);
    }
  }
</script>

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
        <div class="post-header">
          <h3 class="post-title">{post.title}</h3>
          <!-- 작성자에게만 수정/삭제 버튼 표시 -->
          {#if post.uid === userId}
            <div class="post-actions">
              <button
                class="btn-icon"
                onclick={() => handleEdit(post)}
                title="수정"
              >
                <Edit size={18} />
              </button>
              <button
                class="btn-icon btn-danger"
                onclick={() => handleDelete(post)}
                title="삭제"
              >
                <Trash2 size={18} />
              </button>
            </div>
          {/if}
        </div>
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

<!-- 수정 모달 다이얼로그 -->
{#if isEditDialogOpen}
  <div class="modal-backdrop" onclick={() => isEditDialogOpen = false}>
    <div class="modal" onclick={(e) => e.stopPropagation()}>
      <h2>게시글 수정</h2>

      <!-- 제목 입력 -->
      <input
        type="text"
        bind:value={editTitle}
        placeholder="제목을 입력하세요"
        class="form-control"
      />

      <!-- 내용 입력 -->
      <textarea
        bind:value={editContent}
        placeholder="내용을 입력하세요"
        class="form-control textarea"
      ></textarea>

      <!-- 버튼 -->
      <div class="modal-buttons">
        <button
          class="btn-submit"
          onclick={handleEditSubmit}
        >
          수정
        </button>
        <button
          class="btn-cancel"
          onclick={() => isEditDialogOpen = false}
        >
          취소
        </button>
      </div>
    </div>
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

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .post-title {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
    flex: 1;
  }

  .post-actions {
    display: flex;
    gap: 0.5rem;
  }

  .btn-icon {
    padding: 0.5rem;
    background-color: transparent;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
  }

  .btn-icon:hover {
    background-color: #f3f4f6;
    border-color: #d1d5db;
    color: #374151;
  }

  .btn-icon.btn-danger {
    color: #dc2626;
  }

  .btn-icon.btn-danger:hover {
    background-color: #fee2e2;
    border-color: #fca5a5;
    color: #b91c1c;
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

### 2. 좋아요 기능
- 게시글과 댓글에 좋아요 추가
- 중복 방지 (한 사용자당 한 번만)
- 데이터 구조 (Flat Style - 통합 좋아요):
  - 게시글 좋아요: `/likes/post-{postId}-{uid}` (값: 1)
  - 댓글 좋아요: `/likes/comment-{commentId}-{uid}` (값: 1)
- 서비스 함수: `src/lib/services/like.js` 참조

### 3. 검색 및 필터링
- 제목, 내용, 작성자로 검색
- 날짜 범위 필터링
- Firestore Query 또는 클라이언트 측 필터링

### 4. 페이지네이션
- 무한 스크롤 또는 페이지 번호
- 더보기 버튼
- Svelte 반응형 상태로 구현

### 5. 파일 업로드

게시글 작성 시 파일 업로드 기능을 제공합니다. 파일 업로드 웹 컴포넌트 시스템을 사용하여 구현됩니다.

#### 5.1. 파일 업로드 시스템 개요

- **Firebase Storage**: 파일은 Firebase Storage에 저장됩니다
- **경로 구조**: `/users/{userId}/posts/{timestamp}-{filename}`
- **URL 저장**: 업로드된 파일의 다운로드 URL을 RTDB `/posts/{postId}/urls` 배열에 저장
- **웹 컴포넌트**: `FileUploadTrigger` + `FileUploadList` 조합 사용
- **실시간 진행률**: 업로드 진행 상황을 실시간으로 표시
- **파일 검증**: 크기(5MB) 및 타입(JPEG, PNG, WebP) 자동 검증
- **편집 지원**: 기존 파일 로드 및 수정 가능

#### 5.2. 웹 컴포넌트 사용 방법

**신규 게시글 작성**:
```html
<!-- PostListPage.svelte -->
<Dialog bind:open={isNewPostDialogOpen}>
  <form onsubmit={handleSubmit}>
    <!-- 제목, 내용 입력 ... -->

    <!-- 파일 업로드 트리거 버튼 -->
    <file-upload-trigger
      id="post-create"
      category="posts"
      multiple="true"
      buttonText={$t("이미지첨부")}
    ></file-upload-trigger>

    <!-- 파일 목록 표시 -->
    <file-upload-list id="post-create"></file-upload-list>

    <button type="submit">{$t("등록")}</button>
  </form>
</Dialog>
```

**제출 시 URL 가져오기**:
```typescript
async function handleSubmit(event: Event) {
  event.preventDefault();

  // 업로드된 파일 URL 목록 가져오기
  const fileUploadList = document.querySelector('file-upload-list[id="post-create"]');
  // @ts-ignore
  const urls = fileUploadList?.getUrls ? fileUploadList.getUrls() : [];

  // 게시글 생성 (파일 URL 포함)
  const result = await createPost(
    postCategory,
    userId,
    userName,
    postTitle,
    postContent,
    urls.length > 0 ? urls : undefined
  );

  // ... 결과 처리
}
```

**게시글 수정 (기존 파일 로드)**:
```html
<Dialog bind:open={isEditDialogOpen}>
  <form onsubmit={handleEditSubmit}>
    <!-- 제목, 내용 입력 ... -->

    <!-- 파일 업로드 트리거 -->
    <file-upload-trigger
      id="post-edit-{editingPost.postId}"
      category="posts"
      multiple="true"
      buttonText={$t("이미지첨부")}
    ></file-upload-trigger>

    <!-- 파일 목록 (initial-urls로 기존 파일 표시) -->
    <file-upload-list
      id="post-edit-{editingPost.postId}"
      initial-urls={JSON.stringify(editingPost.urls || [])}
    ></file-upload-list>

    <button type="submit">{$t("수정")}</button>
  </form>
</Dialog>
```

#### 5.3. 서비스 함수 수정

**`createPost` 함수**:
```typescript
// src/lib/services/forum.ts
export async function createPost(
  category: PostCategory,
  uid: UserId,
  author: string,
  title: string,
  content: string,
  urls?: string[]  // ← 파일 URL 배열 추가
): Promise<CreatePostResult> {
  // ... 기존 코드 ...

  const postData: any = {
    uid,
    title,
    content,
    author,
    category,
    order,
    createdAt: now,
    updatedAt: now,
    likeCount: 0,
    commentCount: 0
  };

  // 첨부 파일 URL 추가 (있는 경우)
  if (urls && urls.length > 0) {
    postData.urls = urls;
  }

  // ... 저장 로직
}
```

**`updatePost` 함수**:
```typescript
// src/lib/services/forum.ts
export async function updatePost(
  postId: FirebaseKey,
  updates: { title: string; content: string; urls?: string[] }  // ← urls 추가
): Promise<CreatePostResult> {
  // ... 기존 코드 ...

  const updateData: Record<string, any> = {};
  updateData[`posts/${postId}/title`] = updates.title;
  updateData[`posts/${postId}/content`] = updates.content;
  updateData[`posts/${postId}/updatedAt`] = now;

  // 첨부 파일 URL 업데이트 (있는 경우)
  if (updates.urls !== undefined) {
    if (updates.urls.length > 0) {
      updateData[`posts/${postId}/urls`] = updates.urls;
    } else {
      // urls가 빈 배열이면 필드 삭제
      updateData[`posts/${postId}/urls`] = null;
    }
  }

  await update(ref(database), updateData);

  // ... 결과 반환
}
```

#### 5.4. TypeScript 인터페이스

**Post 인터페이스 (`src/lib/types/forum.ts`)**:
```typescript
export interface Post {
  postId: FirebaseKey;
  uid: UserId;
  title: string;
  content: string;
  urls?: string[];  // ← 첨부 파일 URL 배열 (선택)
  author: string;
  category: PostCategory;
  order: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  likeCount: number;
  commentCount: number;
}
```

#### 5.5. 파일 표시 및 다운로드

게시글 상세 페이지에서 첨부 파일을 표시하려면:

```svelte
<!-- PostDetail.svelte -->
{#if post.urls && post.urls.length > 0}
  <div class="attachments">
    <h3>첨부 파일</h3>
    <div class="file-list">
      {#each post.urls as url, index}
        <div class="file-item">
          <img src={url} alt="첨부 이미지 {index + 1}" />
          <a href={url} target="_blank" rel="noopener noreferrer">
            다운로드
          </a>
        </div>
      {/each}
    </div>
  </div>
{/if}
```

#### 5.6. 상세 가이드

파일 업로드 시스템에 대한 상세한 가이드는 다음 문서를 참고하세요:
- [Firebase Storage 개발 가이드](./snsweb-firebase-storage.md) - 파일 업로드 웹 컴포넌트 시스템 전체 설명

### 6. Svelte 5 Runes 최적화
- `$derived` 사용하여 파생 상태 관리
- `$effect` 사용하여 부수 효과 관리
- 성능 최적화

---

**Last Updated**: 2025-11-05
**Version**: 2.2.0 (카테고리 선택 UI 개선)

### 변경 이력

- **v2.2.0** (2025-11-05): 카테고리 선택 UI 개선
  - Select box를 inline display 방식으로 변경
  - URL 파라미터 기반 카테고리 자동 선택
  - (변경하기) 버튼으로 라디오 버튼 리스트 토글
  - 사용자 경험 및 모바일 친화성 향상
- **v2.1.0**: 게시글 수정/삭제 기능 추가
- **v2.0.0**: 초기 게시글 기능 구현

## 관련 문서

- [데이터베이스 구조 가이드](./snsweb-firebase-database.md) - **게시판 DB 구조 필수 참고**
- [게시글 좋아요 개발 가이드](./snsweb-forum-likes.md) - **좋아요 기능 구현 필수 참고**
- [댓글 개발 가이드](./snsweb-forum-comments.md) - **댓글 기능 구현 필수 참고**
- [사용자 관리 개발 가이드](./snsweb-user-overview.md)
- [Svelte Custom Elements 개발 가이드](./snsweb-production-customelements.md)
- [웹 개발 지침](./snsweb-development-codingguideline.md)
- [i18n 개발 가이드](./snsweb-i18n-overview.md)
- [Svelte 공식 문서](https://svelte.dev/docs)
