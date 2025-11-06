---
name: snsweb
version: 1.0.0
description: 댓글 개발 가이드 문서의 SED 사양
author: JaeHo Song
email: thruthesky@gmail.com
homepage: https://github.com/thruthesky/
funding: ""
license: SED Specification License v1.0
dependencies: []
"프로젝트 이름": snsweb
---

## Overview
- 이 문서는 "댓글 개발 가이드"에 대한 세부 사양을 정리하며, 기존 내용을 그대로 유지한 채 SED 구조에 맞춰 제공합니다.

## Requirements
- 문서 전반에 걸쳐 소개되는 지침과 참고 사항을 모두 숙지해야 하며, 별도의 추가 선행 조건은 원문 각 절에서 제시되는 내용을 따릅니다.

## Workflow
1. 아래 `## Detail Items` 절에 포함된 원문 목차를 검토합니다.
2. 필요한 경우 원문의 각 절을 순서대로 읽으며 프로젝트 작업 흐름에 반영합니다.
3. 문서에 명시된 모든 지침을 확인한 뒤 실제 개발 단계에 적용합니다.

## Detail Items
- 이하에는 기존 문서의 모든 내용을 원형 그대로 포함하여 참조할 수 있도록 구성했습니다.

# 댓글 개발 가이드

본 문서는 SNS 웹 애플리케이션에서 게시글 댓글 기능을 구현하는 데 필요한 지침과 로직을 제공합니다.
댓글은 **트리 구조(스레딩)**를 지원하여 댓글의 댓글(대댓글)을 작성할 수 있습니다.

---

## 게시글과의 연동 규칙

- 댓글 수(`commentCount`)가 0 또는 null인 경우에만 게시글 수정/삭제가 가능하다는 게시글 사양을 준수해야 합니다.
- Cloud Functions 또는 애플리케이션 로직에서 댓글이 추가·삭제될 때 `commentCount`가 정확히 동기화되는지 확인합니다.
- 게시글 수정/삭제 기능에 대한 UX 메시지는 댓글 정책과 동일하게 유지합니다.

---

## 목차

- [댓글 개발 가이드](#댓글-개발-가이드)
  - [목차](#목차)
  - [댓글 트리 구조 개념](#댓글-트리-구조-개념)
    - [용어 정의](#용어-정의)
    - [트리 구조 특징](#트리-구조-특징)
  - [댓글 데이터 구조](#댓글-데이터-구조)
    - [댓글 필드 설명](#댓글-필드-설명)
    - [Flat Style 구조의 장점](#flat-style-구조의-장점)
  - [order 필드 상세 설명](#order-필드-상세-설명)
    - [order 문자열 형식](#order-문자열-형식)
    - [order 기반 정렬 예시](#order-기반-정렬-예시)
    - [postId 접두사의 이점](#postid-접두사의-이점)
  - [댓글 데이터 예시](#댓글-데이터-예시)
    - [게시글과 댓글 전체 구조](#게시글과-댓글-전체-구조)
    - [댓글 표시 순서 (order 정렬 후)](#댓글-표시-순서-order-정렬-후)
  - [댓글 API 함수 구현](#댓글-api-함수-구현)
    - [1. 첫 번째 레벨 댓글 작성](#1-첫-번째-레벨-댓글-작성)
    - [2. 자식 댓글(대댓글) 작성](#2-자식-댓글대댓글-작성)
    - [3. 댓글 목록 조회 (실시간 구독)](#3-댓글-목록-조회-실시간-구독)
    - [4. 댓글 수정](#4-댓글-수정)
    - [5. 댓글 삭제](#5-댓글-삭제)
  - [댓글 작성자 정보 조회](#댓글-작성자-정보-조회)
  - [댓글 수정/삭제 제한 규칙](#댓글-수정삭제-제한-규칙)
  - [Firebase Cloud Functions - commentCount 자동 관리](#firebase-cloud-functions---commentcount-자동-관리)
  - [댓글 좋아요 (comment-props)](#댓글-좋아요-comment-props)
    - [댓글 좋아요 데이터 구조](#댓글-좋아요-데이터-구조)
  - [Firebase 보안 규칙](#firebase-보안-규칙)
  - [주요 주의사항](#주요-주의사항)
    - [1. 최대 깊이](#1-최대-깊이)
    - [2. order 필드 생성](#2-order-필드-생성)
    - [3. 댓글 작성자 정보](#3-댓글-작성자-정보)
    - [4. 동시성 처리](#4-동시성-처리)
    - [5. 성능 최적화](#5-성능-최적화)
  - [참고 문서](#참고-문서)

---

## 댓글 트리 구조 개념

### 용어 정의

- **첫 번째 레벨 댓글**: 글 바로 아래에 작성되는 댓글로, 부모 댓글이 없는 댓글 (여러 개 존재 가능)
- **부모 댓글**: 자식 댓글이 있는 댓글 또는 자식을 만들 댓글
- **자식 댓글**: 부모 댓글 아래에 작성되는 댓글 또는 부모 댓글이 있는 댓글
- **대댓글**: 댓글 아래의 댓글

### 트리 구조 특징

- **최대 깊이**: 12단계까지 지원
- **첫 번째 레벨**: 최대 99999개의 댓글 지원 (5자리)
- **두 번째 레벨**: 최대 9999개의 댓글 지원 (4자리)
- **세 번째 레벨 이후**: 각 레벨당 최대 999개의 댓글 지원 (3자리)
- **정렬 방식**: `order` 문자열을 사용하여 트리 구조를 평탄화하여 정렬

---

## 댓글 데이터 구조

댓글 데이터는 `/comments/` 경로 아래에 flat style로 저장됩니다.

```
/comments/
  <comment-id>/              # Firebase 자동 생성 ID
    postId: "abc123"         # 소속 게시글 ID
    uid: "사용자 UID"
    content: "댓글 내용"
    urls: ["url1", "url2"]   # 첨부 파일 URL 목록 (선택, Firebase Storage)
    depth: 1                 # 댓글 깊이 (1부터 시작, 최대 12)
    order: "abc123-00001,0000,000,000,000,000,000,000,000,000,000,000"
    parentId: null           # 부모 댓글 ID (첫 번째 레벨은 null)
    commentCount: 0          # 자식 댓글(대댓글) 개수 (Cloud Functions에서 자동 관리)
    likeCount: 0             # 좋아요 개수 (Cloud Functions에서 자동 관리)
    createdAt: 1234567890    # Unix timestamp (밀리초)
    updatedAt: 1234567890    # Unix timestamp (밀리초)
```

### 댓글 필드 설명

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| `postId` | string | ✅ | 소속 게시글 ID |
| `uid` | string | ✅ | 작성자 UID |
| `content` | string | ✅ | 댓글 내용 |
| `urls` | string[] | ❌ | 첨부 파일 URL 목록 (Firebase Storage) |
| `depth` | number | ✅ | 댓글 깊이 (1~12, 1부터 시작) |
| `order` | string | ✅ | 정렬 문자열 (트리 구조 정렬용) |
| `parentId` | string | ❌ | 부모 댓글 ID (첫 번째 레벨은 null) |
| `commentCount` | number | ✅ | 자식 댓글(대댓글) 개수 (Cloud Functions에서 자동 관리) |
| `likeCount` | number | ✅ | 좋아요 개수 (Cloud Functions에서 자동 관리) |
| `createdAt` | number | ✅ | 작성 시간 (Unix timestamp 밀리초) |
| `updatedAt` | number | ✅ | 수정 시간 (Unix timestamp 밀리초) |

### Flat Style 구조의 장점

- 관계형 참조가 단순해짐 (comment-id만 알면 댓글에 접근 가능)
- 복잡한 노드 구조 없이 간단한 참조
- `postId` 필드로 해당 댓글이 어느 게시글에 속하는지 추적 가능

---

## order 필드 상세 설명

`order` 필드는 댓글 트리 구조를 평탄화하여 정렬하기 위한 핵심 필드입니다.

### order 문자열 형식

```
"<post-id>-00001,0000,000,000,000,000,000,000,000,000,000,000"
 ^^^^^^^^^  ^^^^^  ^^^^  ^^^  ^^^  ^^^  ^^^  ^^^  ^^^  ^^^  ^^^  ^^^  ^^^
 postId     L0    L1    L2   L3   L4   L5   L6   L7   L8   L9   L10  L11
```

- **postId**: 게시글 ID (접두사)
- **구분자 (postId와 레벨 사이)**: 하이픈(-)
- **L0 (첫 번째 레벨)**: 5자리 숫자 (00000~99999)
- **L1 (두 번째 레벨)**: 4자리 숫자 (0000~9999)
- **L2~L11 (세 번째 레벨 이후)**: 3자리 숫자 (000~999)
- **구분자 (레벨 간)**: 콤마(,)로 각 레벨 구분

### order 기반 정렬 예시

Firebase에서 댓글을 조회할 때 `order` 필드로 정렬하면 트리 구조가 유지된 채로 평탄화된 목록을 얻을 수 있습니다.

**예시 (post-abc123 게시글의 댓글들):**

```
post-abc123-00001,0000,000,... → 첫 번째 댓글
post-abc123-00001,0001,000,... → 첫 번째 댓글의 첫 번째 자식
post-abc123-00001,0001,001,... → 첫 번째 댓글의 첫 번째 자식의 첫 번째 자식
post-abc123-00001,0002,000,... → 첫 번째 댓글의 두 번째 자식
post-abc123-00002,0000,000,... → 두 번째 댓글
post-abc123-00002,0001,000,... → 두 번째 댓글의 첫 번째 자식
```

### postId 접두사의 이점

order 필드에 postId를 접두사로 포함하면 다음과 같은 이점이 있습니다:

1. **단일 인덱스로 효율적인 쿼리**
   - `orderBy('order').startAt('<post-id>-').endAt('<post-id>-z')` 형태로 특정 게시글의 모든 댓글을 한 번에 조회
   - `parentId` 같은 추가 인덱스가 필요 없음

2. **Firebase 비용 절감**
   - 별도의 `parentId` 인덱스가 불필요하여 데이터베이스 인덱싱 비용 감소
   - 단일 쿼리로 모든 댓글을 가져와 네트워크 비용 절감

3. **정렬 자동 보장**
   - Firebase가 order 필드로 자동 정렬하므로 클라이언트 측 정렬이 불필요
   - 트리 구조가 유지된 순서대로 댓글이 반환됨

4. **확장성**
   - 여러 게시글의 댓글이 같은 `/comments/` 노드에 저장되어도 postId로 구분 가능
   - 댓글 수가 증가해도 쿼리 성능 유지

---

## 댓글 데이터 예시

### 게시글과 댓글 전체 구조

```json
{
  "comments": {
    "comment-001": {
      "postId": "post-abc123",
      "uid": "user-2",
      "content": "첫 번째 댓글",
      "depth": 1,
      "order": "post-abc123-00001,0000,000,000,000,000,000,000,000,000,000,000",
      "parentId": null,
      "createdAt": 1698474000000,
      "updatedAt": 1698474000000
    },
    "comment-002": {
      "postId": "post-abc123",
      "uid": "user-3",
      "content": "첫 번째 댓글의 답글",
      "depth": 2,
      "order": "post-abc123-00001,0002,000,000,000,000,000,000,000,000,000,000",
      "parentId": "comment-001",
      "createdAt": 1698475000000,
      "updatedAt": 1698475000000
    },
    "comment-003": {
      "postId": "post-abc123",
      "uid": "user-4",
      "content": "첫 번째 댓글의 답글의 답글",
      "depth": 3,
      "order": "post-abc123-00001,0002,003,000,000,000,000,000,000,000,000,000",
      "parentId": "comment-002",
      "createdAt": 1698476000000,
      "updatedAt": 1698476000000
    },
    "comment-004": {
      "postId": "post-abc123",
      "uid": "user-5",
      "content": "첫 번째 댓글의 두 번째 답글",
      "depth": 2,
      "order": "post-abc123-00001,0004,000,000,000,000,000,000,000,000,000,000",
      "parentId": "comment-001",
      "createdAt": 1698477000000,
      "updatedAt": 1698477000000
    },
    "comment-005": {
      "postId": "post-abc123",
      "uid": "user-6",
      "content": "두 번째 댓글",
      "depth": 1,
      "order": "post-abc123-00005,0000,000,000,000,000,000,000,000,000,000,000",
      "parentId": null,
      "createdAt": 1698478000000,
      "updatedAt": 1698478000000
    },
    "comment-006": {
      "postId": "post-abc123",
      "uid": "user-7",
      "content": "두 번째 댓글의 답글",
      "depth": 2,
      "order": "post-abc123-00005,0006,000,000,000,000,000,000,000,000,000,000",
      "parentId": "comment-005",
      "createdAt": 1698479000000,
      "updatedAt": 1698479000000
    }
  }
}
```

### 댓글 표시 순서 (order 정렬 후)

```
1. comment-001 (post-abc123-00001,0000,000,...) - 첫 번째 댓글
2. comment-002 (post-abc123-00001,0002,000,...) - └─ 첫 번째 댓글의 답글
3. comment-003 (post-abc123-00001,0002,003,...) -    └─ 답글의 답글
4. comment-004 (post-abc123-00001,0004,000,...) - └─ 첫 번째 댓글의 두 번째 답글
5. comment-005 (post-abc123-00005,0000,000,...) - 두 번째 댓글
6. comment-006 (post-abc123-00005,0006,000,...) - └─ 두 번째 댓글의 답글
```

---

## 댓글 API 함수 구현

### 1. 첫 번째 레벨 댓글 작성

```javascript
import { ref, push, update } from 'firebase/database';
import { database } from '../utils/firebase.js';

/**
 * 게시글에 첫 번째 레벨 댓글 작성
 *
 * @param {string} postId - 게시글 ID
 * @param {string} uid - 작성자 UID
 * @param {string} content - 댓글 내용
 * @returns {Promise<Object>} { success, commentId, error }
 */
async function createTopLevelComment(postId, uid, content) {
  try {
    // 1. 같은 게시글의 댓글들을 조회하여 최대 L0 인덱스 찾기
    const commentsRef = ref(database, 'comments');
    const q = query(
      commentsRef,
      orderByChild('order'),
      startAt(`${postId}-`),
      endAt(`${postId}-z`)
    );
    const snapshot = await get(q);

    // 첫 번째 레벨 댓글의 다음 순번 결정
    let nextIndex = 1;
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const comment = childSnapshot.val();
        // depth가 1인 댓글들만 확인하여 최대 L0 인덱스 구하기
        if (comment.depth === 1 && comment.order) {
          // order 형식: "post-abc123-00001,0000,000,..."
          // postId 이후의 숫자 부분만 추출
          const orderWithoutPostId = comment.order.split('-').slice(1).join('-');
          const l0Index = parseInt(orderWithoutPostId.split(',')[0], 10);
          if (!isNaN(l0Index)) {
            nextIndex = Math.max(nextIndex, l0Index + 1);
          }
        }
      });
    }

    // 2. order 문자열 생성 (postId 접두사 포함)
    const orderStr = `${postId}-${String(nextIndex).padStart(5, '0')},0000,000,000,000,000,000,000,000,000,000,000`;

    // 3. 댓글 데이터 작성
    const timestamp = Date.now();
    const newComment = {
      postId,
      uid,
      content,
      depth: 1,
      order: orderStr,
      parentId: null,
      createdAt: timestamp,
      updatedAt: timestamp
    };

    // 4. Firebase에 저장
    const newCommentRef = await push(commentsRef, newComment);

    return {
      success: true,
      commentId: newCommentRef.key
    };
  } catch (error) {
    console.error('첫 번째 레벨 댓글 작성 실패:', error);
    return {
      success: false,
      error: error.message
    };
  }
}
```

### 2. 자식 댓글(대댓글) 작성

```javascript
import { ref, get, push } from 'firebase/database';

/**
 * 부모 댓글에 자식 댓글 작성
 *
 * @param {string} postId - 게시글 ID
 * @param {string} parentCommentId - 부모 댓글 ID
 * @param {string} uid - 작성자 UID
 * @param {string} content - 댓글 내용
 * @returns {Promise<Object>} { success, commentId, error }
 */
async function createChildComment(postId, parentCommentId, uid, content) {
  try {
    // 1. 부모 댓글 정보 조회
    const parentCommentRef = ref(database, `comments/${parentCommentId}`);
    const parentSnapshot = await get(parentCommentRef);

    if (!parentSnapshot.exists()) {
      return {
        success: false,
        error: '부모 댓글이 없습니다'
      };
    }

    const parentComment = parentSnapshot.val();
    const parentDepth = parentComment.depth;

    // 최대 깊이 12 체크
    if (parentDepth >= 12) {
      return {
        success: false,
        error: '댓글의 최대 깊이를 초과했습니다'
      };
    }

    // 2. 부모의 order에서 postId 추출
    // order 형식: "post-abc123-00001,0000,000,..."
    const parentOrder = parentComment.order;
    const orderParts = parentOrder.split('-');
    const extractedPostId = orderParts.slice(0, -1).join('-'); // postId 추출
    const parentOrderNumbers = orderParts[orderParts.length - 1]; // 숫자 부분

    // 3. 같은 부모의 자식 댓글들을 조회하여 최대 인덱스 찾기
    const commentsRef = ref(database, 'comments');
    const q = query(
      commentsRef,
      orderByChild('order'),
      startAt(`${extractedPostId}-`),
      endAt(`${extractedPostId}-z`)
    );
    const snapshot = await get(q);

    let nextChildIndex = 0;
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const comment = childSnapshot.val();
        // 같은 부모의 자식 댓글들만 확인
        if (comment.parentId === parentCommentId && comment.depth === parentDepth + 1 && comment.order) {
          // order에서 숫자 부분만 추출
          const orderNumPart = comment.order.split('-').slice(-1)[0];
          const orderParts = orderNumPart.split(',');
          const childIndex = parseInt(orderParts[parentDepth], 10);
          if (!isNaN(childIndex)) {
            nextChildIndex = Math.max(nextChildIndex, childIndex + 1);
          }
        }
      });
    }

    // 4. 부모의 order를 기반으로 자식 order 생성
    const parentOrderParts = parentOrderNumbers.split(',');
    const newOrderParts = [...parentOrderParts];

    // 자식의 인덱스 결정 (L1: 4자리, L2+: 3자리)
    if (parentDepth === 1) {
      newOrderParts[1] = String(nextChildIndex).padStart(4, '0');
    } else {
      newOrderParts[parentDepth] = String(nextChildIndex).padStart(3, '0');
    }

    // postId 접두사를 포함한 최종 order 문자열 생성
    const orderStr = `${extractedPostId}-${newOrderParts.join(',')}`;

    // 5. 자식 댓글 데이터 작성
    const timestamp = Date.now();
    const newComment = {
      postId,
      uid,
      content,
      depth: parentDepth + 1,
      order: orderStr,
      parentId: parentCommentId,
      createdAt: timestamp,
      updatedAt: timestamp
    };

    // 6. Firebase에 저장
    const newCommentRef = await push(commentsRef, newComment);

    return {
      success: true,
      commentId: newCommentRef.key
    };
  } catch (error) {
    console.error('자식 댓글 작성 실패:', error);
    return {
      success: false,
      error: error.message
    };
  }
}
```

### 3. 댓글 목록 조회 (실시간 구독)

```javascript
import { ref, query, orderByChild, startAt, endAt, onValue } from 'firebase/database';

/**
 * 특정 게시글의 모든 댓글을 order 순서로 조회 (실시간)
 *
 * @param {string} postId - 게시글 ID
 * @param {Function} callback - 댓글 목록 변경 시 호출될 콜백 함수
 * @returns {Function} 구독 해제 함수
 */
function listenToComments(postId, callback) {
  const commentsRef = ref(database, 'comments');

  // order 필드로 postId 범위 쿼리 및 자동 정렬
  // order 형식: "post-abc123-00001,0000,000,..."
  // startAt과 endAt으로 특정 postId로 시작하는 댓글들만 조회
  const q = query(
    commentsRef,
    orderByChild('order'),
    startAt(`${postId}-`),
    endAt(`${postId}-z`)
  );

  // Firebase가 order 필드로 자동 정렬하므로 클라이언트 측 정렬 불필요
  const unsubscribe = onValue(q, (snapshot) => {
    const comments = [];

    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        comments.push({
          commentId: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
    }

    // Firebase가 이미 order로 정렬된 결과를 반환하므로 추가 정렬 불필요
    callback(comments);
  });

  return unsubscribe;
}
```

### 4. 댓글 수정

```javascript
import { ref, get, update } from 'firebase/database';

/**
 * 댓글 수정
 *
 * 주의사항:
 * - 자식 댓글(대댓글)이 있는 경우 수정 불가 (commentCount > 0)
 * - 작성자 본인만 수정 가능
 *
 * @param {string} commentId - 댓글 ID
 * @param {Object} updates - 수정할 내용 { content: string }
 * @returns {Promise<Object>} { success, commentId?, error?, errorMessage? }
 */
async function updateComment(commentId, updates) {
  try {
    // 1. 댓글 정보 조회 (commentCount 확인)
    const commentRef = ref(database, `comments/${commentId}`);
    const commentSnapshot = await get(commentRef);

    if (!commentSnapshot.exists()) {
      return {
        success: false,
        error: "error.comment.notFound",
        errorMessage: "Comment not found",
      };
    }

    const commentData = commentSnapshot.val();
    const commentCount = commentData.commentCount || 0;

    // 2. commentCount 체크 (자식 댓글이 있으면 수정 불가)
    if (commentCount > 0) {
      return {
        success: false,
        error: "댓글이달려있어수정불가",
        errorMessage: "Cannot update comment with child comments",
      };
    }

    // 3. 댓글 수정
    const now = Date.now();
    const updateData = {};
    updateData[`comments/${commentId}/content`] = updates.content;
    updateData[`comments/${commentId}/updatedAt`] = now;

    await update(ref(database), updateData);

    return {
      success: true,
      commentId,
    };
  } catch (error) {
    return {
      success: false,
      error: "error.unknown",
      errorMessage: error.message,
    };
  }
}
```

### 5. 댓글 삭제

```javascript
import { ref, get, remove } from 'firebase/database';

/**
 * 댓글 삭제
 *
 * 주의사항:
 * - 자식 댓글(대댓글)이 있는 경우 삭제 불가 (commentCount > 0)
 * - 작성자 본인만 삭제 가능
 *
 * @param {string} commentId - 댓글 ID
 * @returns {Promise<Object>} { success, error?, errorMessage? }
 */
async function deleteComment(commentId) {
  try {
    // 1. 댓글 정보 조회 (commentCount 확인)
    const commentRef = ref(database, `comments/${commentId}`);
    const commentSnapshot = await get(commentRef);

    if (!commentSnapshot.exists()) {
      return {
        success: false,
        error: "error.comment.notFound",
        errorMessage: "Comment not found",
      };
    }

    const commentData = commentSnapshot.val();
    const commentCount = commentData.commentCount || 0;

    // 2. commentCount 체크 (자식 댓글이 있으면 삭제 불가)
    if (commentCount > 0) {
      return {
        success: false,
        error: "댓글이달려있어삭제불가",
        errorMessage: "Cannot delete comment with child comments",
      };
    }

    // 3. 댓글 삭제
    await remove(commentRef);

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: "error.unknown",
      errorMessage: error.message,
    };
  }
}
```

---

## 댓글 작성자 정보 조회

댓글 작성자의 정보(displayName, photoUrl)는 `/users/{uid}/` 경로에서 실시간으로 가져옵니다.

```javascript
import { ref, onValue } from 'firebase/database';

/**
 * 댓글 작성자 정보 조회
 *
 * @param {string} uid - 사용자 ID
 * @param {Function} callback - 사용자 정보 변경 시 호출될 콜백 함수
 * @returns {Function} 구독 해제 함수
 */
function listenToAuthorInfo(uid, callback) {
  const userRef = ref(database, `users/${uid}`);

  const unsubscribe = onValue(userRef, (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.val());
    }
  });

  return unsubscribe;
}
```

---

## 댓글 수정/삭제 제한 규칙

댓글은 게시글과 마찬가지로 **자식 댓글(대댓글)이 있는 경우 수정/삭제가 불가능**합니다.

### 규칙

1. **수정 제한**
   - `commentCount > 0`인 경우 수정 불가
   - 자식 댓글이 있으면 먼저 자식 댓글을 모두 삭제해야 수정 가능
   - 에러 메시지: `댓글이달려있어수정불가`

2. **삭제 제한**
   - `commentCount > 0`인 경우 삭제 불가
   - 자식 댓글이 있으면 먼저 자식 댓글을 모두 삭제해야 삭제 가능
   - 에러 메시지: `댓글이달려있어삭제불가`

3. **권한 확인**
   - 작성자 본인만 수정/삭제 가능
   - `userId === comment.uid` 체크

### UI 구현

CommentItem.svelte 컴포넌트에서 다음과 같이 구현합니다:

1. **수정/삭제 버튼 표시**
   - 작성자 본인(`userId === comment.uid`)에게만 표시
   - lucide-svelte 아이콘 사용 (Pencil, Trash2)

2. **수정 시도 시**
   - `commentCount > 0`이면 경고 알림창 표시
   - 그렇지 않으면 수정 모달 열기

3. **삭제 시도 시**
   - `commentCount > 0`이면 경고 알림창 표시
   - 그렇지 않으면 삭제 확인 후 삭제 진행

4. **경고 알림창**
   - `<alert-dialog>` 커스텀 엘리먼트 사용
   - 메시지: `$t("댓글이달려있어수정불가")` 또는 `$t("댓글이달려있어삭제불가")`

---

## Firebase Cloud Functions - commentCount 자동 관리

`commentCount` 필드는 **서버 측(Firebase Cloud Functions)**에서 자동으로 관리되어 데이터 일관성을 보장합니다.

### 동작 원리

#### 1. 댓글 생성 시 (handleCommentCreate)

자식 댓글(대댓글)이 생성되면 부모 댓글의 `commentCount`를 자동으로 1 증가시킵니다.

```javascript
// firebase/functions/src/handlers/comment.handler.ts

export async function handleCommentCreate(commentId: string, commentData: CommentData) {
  const db = admin.database();

  // 📝 부모 댓글의 commentCount를 1 증가 (대댓글인 경우)
  if (commentData.parentId) {
    const parentUpdates = {} as Record<string, unknown>;
    parentUpdates[`comments/${commentData.parentId}/commentCount`] =
      admin.database.ServerValue.increment(1);
    await db.ref().update(parentUpdates);

    logger.info("부모 댓글의 commentCount 증가 완료", {
      parentId: commentData.parentId,
      commentId,
    });
  }

  return { success: true, commentId };
}
```

#### 2. 댓글 삭제 시 (handleCommentDelete)

자식 댓글(대댓글)이 삭제되면 부모 댓글의 `commentCount`를 자동으로 1 감소시킵니다.

```javascript
// firebase/functions/src/handlers/comment.handler.ts

export async function handleCommentDelete(commentData: CommentData) {
  const db = admin.database();

  // 📝 부모 댓글의 commentCount를 1 감소 (대댓글인 경우)
  if (commentData.parentId) {
    const parentUpdates = {} as Record<string, unknown>;
    parentUpdates[`comments/${commentData.parentId}/commentCount`] =
      admin.database.ServerValue.increment(-1);
    await db.ref().update(parentUpdates);

    logger.info("부모 댓글의 commentCount 감소 완료", {
      parentId: commentData.parentId,
    });
  }

  return { success: true };
}
```

### 핵심 포인트

1. **ServerValue.increment() 사용**
   - 동시성 안전한 원자적 연산
   - 트랜잭션 없이도 정확한 카운트 보장
   - 여러 사용자가 동시에 댓글을 작성/삭제해도 문제없음

2. **서버 측 자동 관리**
   - 클라이언트는 `commentCount`를 직접 수정하지 않음
   - Cloud Functions가 자동으로 업데이트
   - 데이터 일관성 보장

3. **parentId 체크**
   - `parentId`가 있는 경우(대댓글)에만 부모의 `commentCount` 업데이트
   - 첫 번째 레벨 댓글(`parentId === null`)은 업데이트하지 않음

4. **게시글의 commentCount도 함께 업데이트**
   - 댓글이 생성/삭제되면 게시글의 `commentCount`도 자동 업데이트됨
   - 모든 레벨의 댓글이 게시글의 총 댓글 수에 포함됨

---

## 댓글 좋아요 (comment-props)

댓글과 관련된 다양한 속성(좋아요, 신고 등)은 **성능 최적화 및 확장성**을 위해 별도의 `/comment-props/` 노드에서 관리합니다.

### 댓글 좋아요 데이터 구조

```
/comment-props/
  likes/
    {commentId}/              # 댓글 ID
      {uid}: 1                # 좋아요를 누른 사용자 UID
```

**예시:**

```json
{
  "comment-props": {
    "likes": {
      "comment-001": {
        "user-uid-1": 1,
        "user-uid-2": 1,
        "user-uid-3": 1
      },
      "comment-002": {
        "user-uid-4": 1
      }
    }
  }
}
```

---

## Firebase 보안 규칙

댓글 데이터에 대한 접근 권한을 제어합니다.

```json
{
  "rules": {
    "comments": {
      "$commentId": {
        // 인증된 사용자만 읽기 가능
        ".read": "auth != null",
        // 자신의 댓글만 쓰기 가능
        ".write": "auth != null && (!data.exists() || data.child('uid').val() == auth.uid)",

        // 필드 검증
        ".validate": "newData.hasChildren(['postId', 'uid', 'content', 'depth', 'order', 'createdAt', 'updatedAt'])",

        "postId": {
          ".validate": "newData.isString()"
        },
        "uid": {
          ".validate": "newData.isString()"
        },
        "content": {
          ".validate": "newData.isString() && newData.val().length > 0 && newData.val().length <= 1000"
        },
        "depth": {
          ".validate": "newData.isNumber() && newData.val() >= 1 && newData.val() <= 12"
        },
        "order": {
          ".validate": "newData.isString()"
        },
        "parentId": {
          ".validate": "!newData.exists() || newData.isString()"
        },
        "createdAt": {
          ".validate": "newData.isNumber()"
        },
        "updatedAt": {
          ".validate": "newData.isNumber()"
        }
      }
    },
    "comment-props": {
      "likes": {
        "$commentId": {
          "$uid": {
            // 자신의 좋아요만 관리 가능
            ".write": "auth != null && $uid == auth.uid",
            ".validate": "newData.val() == 1"
          }
        }
      }
    }
  }
}
```

---

## 주요 주의사항

### 1. 최대 깊이

- 댓글의 최대 깊이는 12단계입니다
- 13단계 이상은 order 정렬이 제대로 작동하지 않을 수 있습니다
- 자식 댓글 작성 시 부모의 깊이를 확인하여 제한해야 합니다

### 2. order 필드 생성

- order 필드는 정렬을 위한 핵심 필드입니다
- 각 레벨별 자릿수를 정확히 지켜야 합니다 (L0: 5자리, L1: 4자리, L2~L11: 3자리)
- order 생성 로직이 정확하지 않으면 트리 구조가 훼손될 수 있습니다

### 3. 댓글 작성자 정보

- 작성자 이름과 프로필 사진은 `/users/{uid}/` 경로에서 실시간으로 조회합니다
- 댓글에 작성자 정보를 중복으로 저장하지 않도록 합니다 (데이터 중복 방지)

### 4. 동시성 처리

- 여러 사용자가 동시에 댓글을 작성할 때 order 생성 로직이 정확해야 합니다
- Firebase 트랜잭션이나 Cloud Functions 활용을 고려할 수 있습니다

### 5. 성능 최적화

- 댓글이 많아질 경우 pagination 또는 lazy loading 고려
- 클라이언트에서 order로 정렬하므로 큰 수의 댓글 조회 시 성능 주의

---

## 참고 문서

- [Firebase Realtime Database 공식 문서](https://firebase.google.com/docs/database)
- [게시판 개발 가이드](./sns-web-post.md)
- [데이터베이스 구조 가이드](./sns-web-database.md)
- [Svelte Custom Elements 개발 가이드](./sns-custom-elements.md)

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

## 댓글 파일 업로드

댓글 작성 시 파일 업로드 기능을 제공합니다. 파일 업로드 웹 컴포넌트 시스템을 사용하여 구현됩니다.

### 파일 업로드 시스템 개요

- **Firebase Storage**: 파일은 Firebase Storage에 저장됩니다
- **경로 구조**: `/users/{userId}/comments/{timestamp}-{filename}`
- **URL 저장**: 업로드된 파일의 다운로드 URL을 RTDB `/comments/{commentId}/urls` 배열에 저장
- **웹 컴포넌트**: `FileUploadTrigger` + `FileUploadList` 조합 사용
- **실시간 진행률**: 업로드 진행 상황을 실시간으로 표시
- **파일 검증**: 크기(5MB) 및 타입(JPEG, PNG, WebP) 자동 검증
- **편집 지원**: 기존 파일 로드 및 수정 가능

### 웹 컴포넌트 사용 방법

#### 답글 작성 시 파일 업로드

```html
<!-- CommentItem.svelte -->
<Dialog bind:open={isReplyDialogOpen}>
  <form onsubmit={handleReplySubmit}>
    <!-- 답글 내용 입력 -->
    <textarea bind:value={replyContent}></textarea>

    <!-- 파일 업로드 트리거 버튼 -->
    <file-upload-trigger
      id="comment-reply-{comment.commentId}"
      category="comments"
      multiple="true"
      buttonText={$t("이미지첨부")}
    ></file-upload-trigger>

    <!-- 파일 목록 표시 -->
    <file-upload-list id="comment-reply-{comment.commentId}"></file-upload-list>

    <button type="submit">{$t("답글등록")}</button>
  </form>
</Dialog>
```

**제출 시 URL 가져오기**:
```typescript
async function handleReplySubmit() {
  // 1. 내용 검증
  if (!replyContent.trim()) {
    alert('답글 내용을 입력해주세요');
    return;
  }

  // 2. 사용자 정보 확인
  const userId = $login.uid;

  // 3. 업로드된 파일 URL 목록 가져오기
  const fileUploadList = document.querySelector(`file-upload-list[id="comment-reply-${comment.commentId}"]`);
  // @ts-ignore
  const urls = fileUploadList?.getUrls ? fileUploadList.getUrls() : [];

  // 4. Firebase에 답글 저장 (파일 URL 포함)
  const result = await createChildComment({
    parentCommentId: comment.commentId,
    userId: userId,
    content: replyContent,
    urls: urls.length > 0 ? urls : undefined
  });

  // 5. 결과 처리
  if (result.success) {
    alert('답글이 등록되었습니다');
    isReplyDialogOpen = false;
    replyContent = '';
  } else {
    alert('답글 등록에 실패했습니다: ' + result.error);
  }
}
```

#### 댓글 수정 시 파일 업로드 (기존 파일 로드)

```html
<!-- CommentItem.svelte -->
<Dialog bind:open={isEditDialogOpen}>
  <form onsubmit={handleEditSubmit}>
    <!-- 댓글 내용 입력 -->
    <textarea bind:value={editContent}></textarea>

    <!-- 파일 업로드 트리거 -->
    <file-upload-trigger
      id="comment-edit-{comment.commentId}"
      category="comments"
      multiple="true"
      buttonText={$t("이미지첨부")}
    ></file-upload-trigger>

    <!-- 파일 목록 (initial-urls로 기존 파일 표시) -->
    <file-upload-list
      id="comment-edit-{comment.commentId}"
      initial-urls={JSON.stringify(comment.urls || [])}
    ></file-upload-list>

    <button type="submit">{$t("수정")}</button>
  </form>
</Dialog>
```

**제출 시 URL 가져오기**:
```typescript
async function handleEditSubmit() {
  // 1. 내용 검증
  if (!editContent.trim()) {
    alert('댓글 내용을 입력해주세요');
    return;
  }

  // 2. 업로드된 파일 URL 목록 가져오기
  const fileUploadList = document.querySelector(`file-upload-list[id="comment-edit-${comment.commentId}"]`);
  // @ts-ignore
  const urls = fileUploadList?.getUrls ? fileUploadList.getUrls() : [];

  // 3. Firebase에 댓글 업데이트
  const result = await updateComment(comment.commentId, {
    content: editContent,
    urls: urls.length > 0 ? urls : undefined
  });

  // 4. 결과 처리
  if (result.success) {
    alert('댓글이 수정되었습니다');
    isEditDialogOpen = false;
  } else {
    alert('댓글 수정에 실패했습니다: ' + result.error);
  }
}
```

### 서비스 함수 수정

#### `createTopLevelComment` 함수

```typescript
// src/lib/services/comment.ts
export async function createTopLevelComment(
  params: CreateTopLevelCommentParams
): Promise<CreateCommentResult> {
  const { postId, userId, content, urls } = params;  // ← urls 추가

  // ... 기존 코드 (order 계산 등) ...

  const commentData: any = {
    postId: postId,
    uid: userId,
    content: content,
    depth: 1,
    order: orderString,
    parentId: null,
    createdAt: now,
    updatedAt: now,
  };

  // 첨부 파일 URL 추가 (있는 경우)
  if (urls && urls.length > 0) {
    commentData.urls = urls;
  }

  // ... 저장 로직 ...
}
```

#### `createChildComment` 함수

```typescript
// src/lib/services/comment.ts
export async function createChildComment(
  params: CreateChildCommentParams
): Promise<CreateCommentResult> {
  const { parentCommentId, userId, content, urls } = params;  // ← urls 추가

  // ... 기존 코드 (order 계산 등) ...

  const commentData: any = {
    postId: postId,
    uid: userId,
    content: content,
    depth: newDepth,
    order: newOrder,
    parentId: parentCommentId,
    createdAt: now,
    updatedAt: now,
  };

  // 첨부 파일 URL 추가 (있는 경우)
  if (urls && urls.length > 0) {
    commentData.urls = urls;
  }

  // ... 저장 로직 ...
}
```

#### `updateComment` 함수

```typescript
// src/lib/services/comment.ts
export async function updateComment(
  commentId: FirebaseKey,
  updates: { content: string; urls?: string[] }  // ← urls 추가
): Promise<CreateCommentResult> {
  // ... 기존 코드 ...

  const updateData: Record<string, any> = {};
  updateData[`comments/${commentId}/content`] = updates.content;
  updateData[`comments/${commentId}/updatedAt`] = now;

  // 첨부 파일 URL 업데이트 (있는 경우)
  if (updates.urls !== undefined) {
    if (updates.urls.length > 0) {
      updateData[`comments/${commentId}/urls`] = updates.urls;
    } else {
      // urls가 빈 배열이면 필드 삭제
      updateData[`comments/${commentId}/urls`] = null;
    }
  }

  await update(ref(database), updateData);

  // ... 결과 반환 ...
}
```

### TypeScript 인터페이스

**Comment 인터페이스 (`src/lib/types/comment.ts`)**:
```typescript
export interface Comment {
  postId: FirebaseKey;
  uid: UserId;
  content: string;
  urls?: string[];  // ← 첨부 파일 URL 배열 (선택)
  depth: number;
  order: string;
  parentId: FirebaseKey | null;
  likeCount: number;
  commentCount: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CreateTopLevelCommentParams {
  postId: FirebaseKey;
  userId: UserId;
  content: string;
  urls?: string[];  // ← 첨부 파일 URL 목록 (선택)
}

export interface CreateChildCommentParams {
  parentCommentId: FirebaseKey;
  userId: UserId;
  content: string;
  urls?: string[];  // ← 첨부 파일 URL 목록 (선택)
}
```

### 파일 표시 및 다운로드

댓글 컴포넌트에서 첨부 파일을 표시하려면:

```svelte
<!-- CommentItem.svelte -->
<div class="comment-content">
  <p>{comment.content}</p>

  <!-- 첨부 파일 표시 -->
  {#if comment.urls && comment.urls.length > 0}
    <div class="comment-attachments">
      <div class="file-list">
        {#each comment.urls as url, index}
          <div class="file-item">
            <img src={url} alt="첨부 이미지 {index + 1}" class="attachment-image" />
            <a href={url} target="_blank" rel="noopener noreferrer" class="download-link">
              다운로드
            </a>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
```

### URL 배열 관리 규칙

1. **신규 생성 시**:
   - URL이 있으면 배열로 저장: `urls: [...]`
   - URL이 없으면 필드 자체를 추가하지 않음 (undefined)

2. **수정 시**:
   - URL이 있으면 배열로 업데이트: `urls: [...]`
   - URL이 없으면 필드 삭제: `urls: null`

3. **조회 시**:
   - `urls` 필드가 없을 수 있으므로 항상 optional chaining 사용
   - 예: `comment.urls || []`

### 상세 가이드

파일 업로드 시스템에 대한 상세한 가이드는 다음 문서를 참고하세요:
- [Firebase Storage 개발 가이드](./snsweb-firebase-storage.md) - 파일 업로드 웹 컴포넌트 시스템 전체 설명

---

