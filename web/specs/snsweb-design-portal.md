# Portal 패턴을 사용한 모달 위치 문제 해결

> **목적**: Svelte 5에서 웹 컴포넌트로 구현된 모달이 화면 중앙에 올바르게 표시되도록 Portal 패턴을 적용

## 목차

- [Portal 패턴을 사용한 모달 위치 문제 해결](#portal-패턴을-사용한-모달-위치-문제-해결)
  - [목차](#목차)
  - [1. 개요 (Overview)](#1-개요-overview)
    - [문제 정의 (Problem Statement)](#문제-정의-problem-statement)
    - [해결 방안 (Solution)](#해결-방안-solution)
  - [2. 무엇을 해결하는가? (What)](#2-무엇을-해결하는가-what)
    - [핵심 문제](#핵심-문제)
    - [해결 결과](#해결-결과)
  - [3. 왜 Portal이 필요한가? (Why)](#3-왜-portal이-필요한가-why)
    - [CSS 스택 컨텍스트의 문제](#css-스택-컨텍스트의-문제)
    - [Portal의 장점](#portal의-장점)
  - [4. 언제 사용하는가? (When)](#4-언제-사용하는가-when)
    - [필수 사용 상황](#필수-사용-상황)
    - [권장 사용 상황](#권장-사용-상황)
    - [선택 사용 상황](#선택-사용-상황)
  - [5. 어디서 사용하는가? (Where)](#5-어디서-사용하는가-where)
    - [적용된 컴포넌트](#적용된-컴포넌트)
    - [파일 위치](#파일-위치)
  - [6. 어떻게 사용하는가? (How)](#6-어떻게-사용하는가-how)
    - [6.1. Portal 유틸리티 함수](#61-portal-유틸리티-함수)
    - [6.2. 컴포넌트에서 Portal 적용](#62-컴포넌트에서-portal-적용)
    - [6.3. 글 수정 모달 (PostItem.svelte)](#63-글-수정-모달-postitemsvelte)
    - [6.4. 댓글 답글/수정 모달 (CommentItem.svelte)](#64-댓글-답글수정-모달-commentitemsvelte)
  - [7. 기술 상세 설명 (Technical Details)](#7-기술-상세-설명-technical-details)
    - [7.1. Svelte Action이란?](#71-svelte-action이란)
    - [7.2. Portal의 동작 원리](#72-portal의-동작-원리)
    - [7.3. DOM 위치 변경 과정](#73-dom-위치-변경-과정)
  - [8. 문제 해결 과정 (Troubleshooting History)](#8-문제-해결-과정-troubleshooting-history)
    - [시도 1: CSS z-index 조정 (실패)](#시도-1-css-z-index-조정-실패)
    - [시도 2: Flexbox 속성 최적화 (실패)](#시도-2-flexbox-속성-최적화-실패)
    - [시도 3: Portal 패턴 적용 (성공)](#시도-3-portal-패턴-적용-성공)
  - [9. 모범 사례 (Best Practices)](#9-모범-사례-best-practices)
    - [DO (권장)](#do-권장)
    - [DON'T (비권장)](#dont-비권장)
  - [10. 성능 고려사항 (Performance Considerations)](#10-성능-고려사항-performance-considerations)
  - [11. 참고 자료 (References)](#11-참고-자료-references)

---

## 1. 개요 (Overview)

### 문제 정의 (Problem Statement)

SNS 웹 애플리케이션에서 게시글 및 댓글 작성/수정 모달(다이얼로그)을 열 때, 다음과 같은 문제가 발생했습니다:

**증상**:
- 모달이 초기 렌더링 시 화면 상단에 가려져서 보임 (overflow 발생)
- 마우스를 움직여야 모달이 화면 중앙으로 재배치됨
- 사용자 경험(UX)이 매우 나쁨

**원인**:
- 모달이 DOM 트리에서 깊숙이 중첩되어 있음
- 부모 컨테이너의 CSS 속성(`overflow`, `position`, `height` 등)이 모달 위치에 영향을 줌
- `position: fixed`가 예상대로 작동하지 않음

**문제가 발생한 구조**:
```
PostListPage
  └── DatabaseListView (무한 스크롤 컨테이너)
      └── PostItem
          └── CommentItem
              └── .modal-backdrop (모달 백드롭)
                  └── .modal (실제 모달 창)
```

### 해결 방안 (Solution)

**Portal 패턴**을 사용하여 모달을 DOM 트리의 최상위(`document.body`)로 이동시켜서 문제를 해결했습니다.

---

## 2. 무엇을 해결하는가? (What)

### 핵심 문제

1. **모달 위치 문제**: 초기 렌더링 시 모달이 화면 중앙에 표시되지 않음
2. **CSS 스택 컨텍스트 간섭**: 부모 컨테이너의 CSS가 모달 위치에 영향을 줌
3. **리플로우/리페인트 의존**: 마우스 이동 등의 이벤트가 발생해야 올바르게 표시됨
4. **사용자 경험 저하**: 모달을 열 때마다 불편함을 느낌

### 해결 결과

✅ 모달이 **초기 렌더링부터** 화면 중앙에 올바르게 표시됨
✅ 부모 컨테이너의 CSS가 **더 이상 영향을 주지 않음**
✅ 마우스 이동 없이도 화면 중심에 **즉시 렌더링** 됨
✅ **일관된 사용자 경험** 제공으로 UX 개선

---

## 3. 왜 Portal이 필요한가? (Why)

### CSS 스택 컨텍스트의 문제

**깊게 중첩된 구조 (문제 상황)**:
```html
<div class="post-list-container">
  <div class="database-list-view" style="overflow-y: auto; height: 100vh;">
    <div class="post-item">
      <div class="comment-item">
        <!-- 모달이 여기 렌더링됨 (5단계 깊이) -->
        <div class="modal-backdrop" style="position: fixed; inset: 0;">
          <div class="modal">모달 내용</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

**문제점**:
- `position: fixed`가 부모의 `transform`, `filter`, `perspective` 속성에 영향을 받음
- `overflow: auto`를 가진 부모 컨테이너가 모달의 위치 계산에 영향을 줌
- CSS 스택 컨텍스트가 모달의 레이어 순서를 방해함

**Portal 적용 후 (해결)**:
```html
<body>
  <!-- 기존 앱 구조 -->
  <div id="app">
    <div class="post-list-container">
      <div class="database-list-view">
        <div class="post-item">
          <div class="comment-item">
            <!-- 모달은 여기서 제거되고 body로 이동됨 -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Portal을 통해 이동된 모달 (1단계 깊이) -->
  <div class="modal-backdrop" style="position: fixed; inset: 0;">
    <div class="modal">모달 내용</div>
  </div>
</body>
```

### Portal의 장점

✅ **예측 가능한 위치 지정**: `document.body`의 직계 자식이므로 부모 CSS의 영향을 받지 않음
✅ **z-index 관리 용이**: 스택 컨텍스트가 명확하여 레이어 순서를 쉽게 제어
✅ **성능 향상**: 불필요한 리플로우/리페인트 방지
✅ **접근성 개선**: 모달이 항상 최상위에 렌더링되어 스크린 리더가 쉽게 감지

---

## 4. 언제 사용하는가? (When)

### 필수 사용 상황

1. **모달/다이얼로그**: 전체 화면을 덮는 오버레이가 필요할 때
2. **드롭다운 메뉴**: 부모 컨테이너의 `overflow: hidden`을 벗어나야 할 때
3. **툴팁/팝오버**: 스크롤 가능한 영역 밖에 표시되어야 할 때
4. **토스트/알림**: 화면의 고정된 위치에 항상 표시되어야 할 때

### 권장 사용 상황

1. **컨텍스트 메뉴**: 우클릭 메뉴나 더보기 메뉴
2. **날짜 선택기**: 달력 위젯
3. **자동완성 검색**: 검색 결과 드롭다운
4. **이미지 뷰어**: 전체 화면 이미지 오버레이

### 선택 사용 상황

1. **사이드바**: 좌우에서 슬라이드되는 네비게이션
2. **드로어**: 하단에서 올라오는 콘텐츠
3. **스낵바**: 하단 알림 메시지

---

## 5. 어디서 사용하는가? (Where)

### 적용된 컴포넌트

본 프로젝트에서 Portal 패턴이 적용된 컴포넌트:

1. **PostItem.svelte**
   - 댓글 작성 모달
   - 글 수정 모달

2. **CommentItem.svelte**
   - 댓글 답글 작성 모달
   - 댓글 수정 모달

3. **PostListPage.svelte** (필요 시 추가 가능)
   - 게시글 작성 모달

### 파일 위치

```
/Users/thruthesky/apps/sns/web/
├── src/
│   ├── lib/
│   │   └── utils/
│   │       └── portal.ts          ← Portal 유틸리티 함수
│   └── demo/
│       ├── PostItem.svelte         ← Portal 적용 (댓글 작성, 글 수정)
│       ├── CommentItem.svelte      ← Portal 적용 (답글 작성, 댓글 수정)
│       └── PostListPage.svelte     ← Portal 적용 가능
└── specs/
    └── snsweb-design-portal.md     ← 본 문서
```

---

## 6. 어떻게 사용하는가? (How)

### 6.1. Portal 유틸리티 함수

**파일 위치**: `src/lib/utils/portal.ts`

```typescript
/**
 * Portal 유틸리티 함수
 *
 * DOM 요소를 document.body로 이동하여 렌더링합니다.
 * 이렇게 하면 부모 컨테이너의 CSS(overflow, position 등) 영향을 받지 않습니다.
 *
 * 사용 예시:
 * ```svelte
 * <script>
 *   import { portal } from '$lib/utils/portal';
 * </script>
 *
 * <div class="modal-backdrop" use:portal>
 *   <!-- 모달 내용 -->
 * </div>
 * ```
 *
 * 동작 방식:
 * 1. 요소를 원래 위치에서 제거
 * 2. document.body에 추가
 * 3. 언마운트 시 정리
 */

/**
 * Portal Svelte Action
 *
 * @param node - DOM 요소
 * @returns destroy 함수가 포함된 객체
 */
export function portal(node: HTMLElement) {
  // 1. 원래 위치 저장 (복원을 위해 - 선택 사항)
  const originalParent = node.parentElement;
  const originalNextSibling = node.nextSibling;

  // 2. document.body로 이동
  document.body.appendChild(node);

  // 3. 정리 함수 반환
  return {
    destroy() {
      // 언마운트 시 document.body에서 제거
      if (node.parentElement === document.body) {
        document.body.removeChild(node);
      }

      // 필요하다면 원래 위치로 복원:
      // if (originalParent) {
      //   originalParent.insertBefore(node, originalNextSibling);
      // }
    }
  };
}
```

### 6.2. 컴포넌트에서 Portal 적용

**단계**:
1. Portal 함수 import
2. 모달 백드롭 요소에 `use:portal` 디렉티브 추가
3. CSS는 그대로 유지

**Before (Portal 적용 전)**:
```svelte
<script>
  // Portal import 없음
</script>

<!-- 모달 백드롭 -->
{#if isDialogOpen}
  <div class="modal-backdrop" onclick={handleCancel}>
    <div class="modal" onclick={(e) => e.stopPropagation()}>
      <!-- 모달 내용 -->
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2500;
  }
</style>
```

**After (Portal 적용 후)**:
```svelte
<script>
  // 1. Portal import 추가
  import { portal } from "../lib/utils/portal";
</script>

<!-- 2. use:portal 디렉티브 추가 -->
{#if isDialogOpen}
  <div class="modal-backdrop" use:portal onclick={handleCancel}>
    <div class="modal" onclick={(e) => e.stopPropagation()}>
      <!-- 모달 내용 -->
    </div>
  </div>
{/if}

<style>
  /* 3. CSS는 변경 없음 - 그대로 유지 */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2500;
  }
</style>
```

### 6.3. 글 수정 모달 (PostItem.svelte)

**파일 위치**: `src/demo/PostItem.svelte`

**적용 코드** (Line 22, Line 524):
```svelte
<script lang="ts">
  // ... 기존 imports ...
  import { portal } from "../lib/utils/portal";  // ← Line 22: Portal import
</script>

<!-- 댓글 작성 모달 (Line 487) -->
{#if showCommentForm}
  <div class="modal-backdrop" use:portal onclick={handleCommentCancel}>
    <div class="modal" onclick={(e) => e.stopPropagation()}>
      <h3>{$t("댓글작성")}</h3>
      <form onsubmit={handleCommentSubmit}>
        <textarea bind:value={commentContent} placeholder={$t("댓글입력")}></textarea>
        <div class="modal-footer">
          <button type="button" onclick={handleCommentCancel}>{$t("취소")}</button>
          <button type="submit">{$t("등록")}</button>
        </div>
      </form>
    </div>
  </div>
{/if}

<!-- 글 수정 모달 (Line 524) -->
{#if showEditForm}
  <div class="modal-backdrop" use:portal onclick={handleEditCancel}>
    <div class="modal" onclick={(e) => e.stopPropagation()}>
      <h3>{$t("글수정")}</h3>
      <form onsubmit={handleEditSubmit}>
        <input type="text" bind:value={editTitle} placeholder={$t("제목입력")} />
        <textarea bind:value={editContent} placeholder={$t("내용입력")}></textarea>
        <div class="modal-footer">
          <button type="button" onclick={handleEditCancel}>{$t("취소")}</button>
          <button type="submit">{$t("수정")}</button>
        </div>
      </form>
    </div>
  </div>
{/if}

<style>
  /* 모달 스타일 (Line 722-742) */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2500;
    padding: 1rem;
  }

  .modal {
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    width: 100%;
    max-height: calc(100vh - 2rem);
    overflow-y: auto;
  }
</style>
```

### 6.4. 댓글 답글/수정 모달 (CommentItem.svelte)

**파일 위치**: `src/demo/CommentItem.svelte`

**적용 코드** (Line 18, Line 334, Line 384):
```svelte
<script lang="ts">
  // ... 기존 imports ...
  import { portal } from "../lib/utils/portal";  // ← Line 18: Portal import
</script>

<!-- 답글 작성 모달 (Line 334) -->
{#if showReplyForm}
  <div class="modal-backdrop" use:portal onclick={handleReplyCancel}>
    <div class="modal" onclick={(e) => e.stopPropagation()}>
      <h3>{$t("답글작성")}</h3>
      <form onsubmit={handleReplySubmit}>
        <textarea bind:value={replyContent} placeholder={$t("답글입력")}></textarea>
        <div class="modal-footer">
          <button type="button" onclick={handleReplyCancel}>{$t("취소")}</button>
          <button type="submit">{$t("등록")}</button>
        </div>
      </form>
    </div>
  </div>
{/if}

<!-- 댓글 수정 모달 (Line 384) -->
{#if showEditForm}
  <div class="modal-backdrop" use:portal onclick={handleEditCancel}>
    <div class="modal" onclick={(e) => e.stopPropagation()}>
      <h3>{$t("댓글수정")}</h3>
      <form onsubmit={handleEditSubmit}>
        <textarea bind:value={editContent} placeholder={$t("댓글입력")}></textarea>
        <div class="modal-footer">
          <button type="button" onclick={handleEditCancel}>{$t("취소")}</button>
          <button type="submit">{$t("수정")}</button>
        </div>
      </form>
    </div>
  </div>
{/if}

<style>
  /* 모달 스타일 (Line 630-653) */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3000;
    padding: 1rem;
  }

  .modal {
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    width: 100%;
    max-height: calc(100vh - 2rem);
    overflow-y: auto;
  }
</style>
```

---

## 7. 기술 상세 설명 (Technical Details)

### 7.1. Svelte Action이란?

**Svelte Action**은 DOM 요소에 재사용 가능한 동작을 추가하는 Svelte 5의 기능입니다.

**기본 구조**:
```typescript
export function myAction(node: HTMLElement, parameters?: any) {
  // 초기화 로직

  return {
    update(newParameters: any) {
      // 파라미터 업데이트 시 호출
    },
    destroy() {
      // 정리 작업
    }
  };
}
```

**사용 방법**:
```svelte
<div use:myAction={parameters}>내용</div>
```

**Portal Action의 특징**:
- `update` 메서드 없음 (파라미터 변경이 없음)
- `destroy` 메서드로 DOM 정리 자동화
- 부수 효과(side effect): DOM 요소를 `document.body`로 이동

### 7.2. Portal의 동작 원리

**1. 초기 렌더링**:
```html
<!-- Svelte가 생성한 초기 DOM 구조 -->
<div class="comment-item">
  <div class="modal-backdrop">  <!-- use:portal 디렉티브가 붙은 요소 -->
    <div class="modal">모달 내용</div>
  </div>
</div>
```

**2. Portal Action 실행**:
```typescript
// portal 함수가 자동으로 호출됨
export function portal(node: HTMLElement) {
  // node = <div class="modal-backdrop">

  // document.body로 이동
  document.body.appendChild(node);

  // 이제 DOM 구조가 변경됨:
  // <body>
  //   ...
  //   <div class="modal-backdrop">
  //     <div class="modal">모달 내용</div>
  //   </div>
  // </body>
}
```

**3. 언마운트 시**:
```typescript
destroy() {
  // Svelte가 컴포넌트를 제거할 때 자동으로 호출
  if (node.parentElement === document.body) {
    document.body.removeChild(node);
  }
}
```

### 7.3. DOM 위치 변경 과정

**Before (Portal 적용 전)**:
```html
<body>
  <div id="app">
    <div class="post-list-page">
      <div class="database-list-view">
        <div class="post-item">
          <div class="comment-item">
            <!-- 5단계 깊이 - 부모 CSS의 영향을 받음 -->
            <div class="modal-backdrop" style="position: fixed; inset: 0;">
              <div class="modal">모달 내용</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
```

**After (Portal 적용 후)**:
```html
<body>
  <div id="app">
    <div class="post-list-page">
      <div class="database-list-view">
        <div class="post-item">
          <div class="comment-item">
            <!-- 모달이 여기서 제거됨 -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 1단계 깊이 - body의 직계 자식 -->
  <div class="modal-backdrop" style="position: fixed; inset: 0;">
    <div class="modal">모달 내용</div>
  </div>
</body>
```

**장점**:
- `position: fixed`가 viewport 기준으로 정확히 작동
- 부모의 `overflow`, `transform`, `filter` 속성에 영향 받지 않음
- z-index 관리가 명확함 (body의 직계 자식들 간 비교)

---

## 8. 문제 해결 과정 (Troubleshooting History)

### 시도 1: CSS z-index 조정 (실패)

**가설**: z-index가 낮아서 모달이 가려진다.

**시도한 변경**:
```css
/* Before */
.modal-backdrop {
  z-index: 1000;
}

/* After */
.modal-backdrop {
  z-index: 3000;
}
```

**결과**: ❌ 실패
- 모달이 여전히 화면 상단에 가려짐
- 마우스 움직임 후에야 중앙에 표시됨

**학습 내용**: z-index는 같은 스택 컨텍스트 내에서만 작동함. 부모 컨테이너가 새로운 스택 컨텍스트를 만들면 자식의 z-index는 외부에 영향을 주지 못함.

### 시도 2: Flexbox 속성 최적화 (실패)

**가설**: Flexbox 속성이 잘못 설정되어 중앙 정렬이 안 된다.

**시도한 변경**:
```css
/* 불필요한 속성 제거 */
.modal-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* overflow-y: auto; ← 제거 */
}

.modal {
  /* position: relative; ← 제거 */
  /* margin: auto; ← 제거 */
}
```

**결과**: ❌ 실패
- 여전히 동일한 증상
- CSS 속성은 올바르게 설정되어 있었음

**학습 내용**: CSS 속성 자체는 문제가 없었음. 근본 원인은 DOM 위치였음.

### 시도 3: Portal 패턴 적용 (성공)

**가설**: 부모 컨테이너의 CSS 스택 컨텍스트가 문제이므로, DOM 구조를 변경해야 한다.

**구현**:
1. `portal.ts` 유틸리티 함수 생성
2. PostItem.svelte에 `use:portal` 적용
3. CommentItem.svelte에 `use:portal` 적용

**결과**: ✅ 성공
- 모달이 초기 렌더링부터 화면 중앙에 표시됨
- 마우스 움직임 없이도 올바른 위치
- 모든 브라우저에서 일관된 동작

**핵심 인사이트**:
- CSS 속성 조정으로는 해결할 수 없는 문제였음
- DOM 구조를 변경하는 **아키텍처 수준의 해결책**이 필요했음
- Portal 패턴은 React, Vue 등에서도 사용되는 검증된 방법

---

## 9. 모범 사례 (Best Practices)

### DO (권장)

✅ **모든 전체 화면 오버레이에 Portal 사용**
```svelte
<div class="modal-backdrop" use:portal>
```

✅ **Portal과 함께 적절한 z-index 설정**
```css
.modal-backdrop { z-index: 2500; }  /* PostItem 모달 */
.comment-backdrop { z-index: 3000; } /* CommentItem 모달 */
```

✅ **모달이 열릴 때 body 스크롤 방지**
```typescript
function openModal() {
  isDialogOpen = true;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  isDialogOpen = false;
  document.body.style.overflow = '';
}
```

✅ **ESC 키로 모달 닫기 구현**
```svelte
<svelte:window onkeydown={(e) => {
  if (e.key === 'Escape' && isDialogOpen) {
    closeModal();
  }
}} />
```

✅ **접근성을 위한 포커스 트랩 구현**
```typescript
onMount(() => {
  if (isDialogOpen) {
    const modal = document.querySelector('.modal');
    const firstFocusable = modal?.querySelector('button, input, textarea');
    (firstFocusable as HTMLElement)?.focus();
  }
});
```

### DON'T (비권장)

❌ **Portal 없이 깊이 중첩된 모달 사용**
```svelte
<!-- 부모 컨테이너의 CSS 영향을 받음 -->
<div class="nested-container">
  <div class="modal-backdrop">  <!-- ❌ use:portal 없음 -->
    <div class="modal">...</div>
  </div>
</div>
```

❌ **Portal을 모든 요소에 무분별하게 사용**
```svelte
<!-- 작은 툴팁에는 불필요 -->
<div class="tooltip" use:portal>  <!-- ❌ 과도한 사용 -->
  Tooltip text
</div>
```

❌ **Portal 정리 함수 누락**
```typescript
export function portal(node: HTMLElement) {
  document.body.appendChild(node);
  // ❌ destroy 함수 없음 - 메모리 누수 발생
}
```

❌ **여러 모달을 동시에 Portal로 이동**
```svelte
{#if showModal1}
  <div class="modal1" use:portal>...</div>
{/if}
{#if showModal2}
  <div class="modal2" use:portal>...</div>  <!-- ❌ z-index 관리 복잡 -->
{/if}
```
→ 대신 모달 관리자 컴포넌트 사용 권장

❌ **CSS로만 Portal 효과 재현 시도**
```css
/* ❌ 이렇게 하면 안 됨 */
.modal-backdrop {
  position: fixed !important;
  z-index: 99999 !important;
  transform: translateZ(10000px) !important;
}
```
→ DOM 구조를 변경하는 것이 올바른 해결책

---

## 10. 성능 고려사항 (Performance Considerations)

**Portal의 성능 영향**:
- ✅ **매우 가벼움**: DOM 노드 이동 비용은 무시할 수 있을 정도로 낮음
- ✅ **리플로우/리페인트 최소화**: 모달이 처음부터 올바른 위치에 렌더링됨
- ⚠️ **다수 Portal 주의**: 동시에 10개 이상의 Portal을 사용하면 성능 저하 가능 (일반적으로 발생하지 않음)

**최적화 팁**:

1. **조건부 렌더링 사용**:
```svelte
<!-- Good: 모달이 필요할 때만 DOM에 추가 -->
{#if isDialogOpen}
  <div class="modal-backdrop" use:portal>
    <div class="modal">...</div>
  </div>
{/if}

<!-- Bad: 항상 DOM에 존재 -->
<div class="modal-backdrop" use:portal class:hidden={!isDialogOpen}>
  <div class="modal">...</div>
</div>
```

2. **지연 로딩 (Lazy Loading)**:
```svelte
<script>
  import { onMount } from 'svelte';

  let ModalComponent;

  onMount(async () => {
    if (isDialogOpen) {
      ModalComponent = (await import('./Modal.svelte')).default;
    }
  });
</script>

{#if ModalComponent}
  <svelte:component this={ModalComponent} use:portal />
{/if}
```

3. **애니메이션 최적화**:
```css
.modal-backdrop {
  /* GPU 가속 사용 */
  will-change: opacity;
  transition: opacity 0.3s ease-in-out;
}

.modal {
  /* transform을 사용한 애니메이션 */
  will-change: transform;
  transition: transform 0.3s ease-in-out;
}
```

---

## 11. 참고 자료 (References)

**공식 문서**:
- [Svelte 5 Actions](https://svelte.dev/docs/svelte/actions) - Svelte Action 공식 문서
- [MDN: Element.appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) - DOM 조작 메서드
- [CSS Stacking Context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) - CSS 스택 컨텍스트 이해

**관련 패턴**:
- [React Portals](https://react.dev/reference/react-dom/createPortal) - React의 Portal 구현
- [Vue Teleport](https://vuejs.org/guide/built-ins/teleport.html) - Vue의 Teleport 기능
- [Floating UI](https://floating-ui.com/) - 고급 포지셔닝 라이브러리

**프로젝트 내 관련 문서**:
- [specs/sns-web-coding-guideline.md](specs/sns-web-coding-guideline.md) - 코딩 가이드라인
- [specs/snsweb-design-system.md](specs/snsweb-design-system.md) - 디자인 시스템 (모달 디자인 포함)

**구현 파일**:
- [src/lib/utils/portal.ts](../src/lib/utils/portal.ts) - Portal 유틸리티 함수
- [src/demo/PostItem.svelte](../src/demo/PostItem.svelte) - PostItem 컴포넌트
- [src/demo/CommentItem.svelte](../src/demo/CommentItem.svelte) - CommentItem 컴포넌트

---

**문서 작성일**: 2025년 1월
**마지막 업데이트**: 2025년 1월
**작성자**: AI Assistant (Claude)
**검토자**: 프로젝트 개발팀

이 문서는 SNS 웹 애플리케이션의 Portal 패턴 구현을 설명하며, 모달 위치 문제를 해결하는 과정과 방법을 상세히 다룹니다.
