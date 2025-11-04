Firebase Realtime Database 구조:
- 본 문서는 SNS 웹 애플리케이션을 개발하기 위한 데이터베이스 구조를 정의하고, 그에 따른 기본적인 개발 지침을 제공합니다.
- 데이터베이스 설계나 구조를 확인을 할 때에는 반드시 아래의 규칙을 따라서 개발 작업을 진행해야 합니다.



# 개요
- Firebase Realtime Database(RTDB)는 실시간 데이터 동기화가 필요한 SNS 웹 애플리케이션에 적합한 데이터베이스 솔루션입니다.
  - 다만, 가장 큰 단점은 데이터를 효율적으로 추출하기 위한 쿼리가 제한적이라는 점입니다. 따라서, 데이터 구조 설계 시 이를 고려해야 합니다.
- 애플리케이션에서는 필요한 최소한의 데이터만 저장합니다. Firebase Cloud Functions 를 사용하여 복잡한 데이터 처리 및 집계를 수행해야 합니다. 이렇게 하는 이유는 웹 애플리케이션 뿐만아니라 모바일 앱에서도 동일한 기능을 사용하기 때문입니다.


# 사용자 정보

- 사용자 정보는 `users` 노드에 저장됩니다.

## ⚠️ 중요: Firebase Auth vs RTDB 필드명 차이

**프로필 사진 필드명이 다릅니다:**
- **Firebase Authentication**: `photoURL` (대문자 URL)
- **Realtime Database**: `photoUrl` (camelCase url)

```javascript
// Firebase Auth 업데이트 시
await updateProfile(user, {
  photoURL: 'https://...'  // ✅ 대문자 URL
});

// RTDB 업데이트 시
await update(ref(database, `users/${uid}`), {
  photoUrl: 'https://...'  // ✅ camelCase url
});
```

**주의사항:**
- Firebase Auth API는 `photoURL`을 요구하므로 대문자를 사용해야 합니다
- RTDB에 저장할 때는 프로젝트 네이밍 규칙에 따라 `photoUrl`을 사용합니다
- 코드 작성 시 이 차이를 반드시 고려해야 합니다

---

- 데이터 구조 예제:


```
/users/
├── <uid1>/
│   ├── displayName: "사용자1"
│   ├── photoUrl: "https://firebasestorage.googleapis.com/..."
│   └── createdAt: 1698473000000
├── <uid2>/
│   ├── displayName: "사용자2"
│   ├── photoUrl: "https://firebasestorage.googleapis.com/..."
│   └── createdAt: 1698473100000
└── <uid3>/
    ├── displayName: "사용자3"
    └── createdAt: 1698473200000
```
- 각 사용자 노드는 고유한 UID로 식별됩니다.
- 사용자 정보에는 `displayName`, `photoUrl`, `createdAt`, `updatedAt`, `gender`, `birthYear`, `birthMonth`, `birthDay` 등의 필드가 포함됩니다.


## 사용자 속성 분리

- 사용자 노드 `/users/<uid>/ { ... }` 에 있는 각 개별 속성은 `user-props` 노드에 저장됩니다.
- 이는 특정 속성에 대한 대량 조회를 효율적으로 수행하기 위함입니다.
  - 예를 들어, 회원 목록을 하는 경우, `user-props/displayName` 경로에서 모든 사용자 이름을 조회할 수 있습니다.
    - 만약, `/users/` 경로에서 모든 사용자를 조회하려면, 각 사용자 노드를 모든 정보를 다 가져와야 해서, 많은 데이터를 전송해야 하므로 비효율적입니다.
- 각 사용자의 속성을 분리 할 때, 공유할 정보만 분리해야 합니다. 예를 들어, `displayName`, `photoUrl`, `createdAt`, `updatedAt`, `gender`, `birthYear`, `birthMonth`, `birthDay` 등은 분리할 수 있지만, 비밀번호 등 민감한 정보는 분리하지 않습니다.
- 이러한 속성 분리는 `onUserProfileUpdate` Cloud Function을 사용하여 사용자 프로필이 업데이트 될 때마다 자동으로 동기화됩니다.
- 데이터 구조 예제:
```
/user-props/
  /displayName/
    ├── <uid1>: "사용자1"
    ├── <uid2>: "사용자2"
    └── <uid3>: "사용자3"
  /photoUrl/
    ├── <uid1>: "https://firebasestorage.googleapis.com/..."
    ├── <uid2>: "https://firebasestorage.googleapis.com/..."
    └── <uid3>: null
  /createdAt/
    ├── <uid1>: 1698473000000
    ├── <uid2>: 1698473100000
    └── <uid3>: 1698473200000
  /updatedAt/
    ├── <uid1>: 1698474000000
    ├── <uid2>: 1698474100000
    └── <uid3>: 1698474200000
  /gender
    ├── <uid1>: "M"
    ├── <uid2>: "F"
    └── <uid3>: "M"
  /birthYear
    ├── <uid1>: 1990
    ├── <uid2>: 1985
    └── <uid3>: 2000
```


# 게시판 (Forum / Posts)

본 항목은 게시판 관련 데이터베이스 구조 정보를 제공합니다.
- 반드시 아래의 규칙과 예제를 따라 개발을 진행해야 합니다.

## Firebase Realtime Database (RTDB) 사용

**RTDB를 사용하는 이유:**
1. **실시간 동기화**: 게시글 쓰기, 수정, 삭제 시 실시간으로 반영되어 사용자 경험 향상
2. **간편한 데이터 구조**: 계층적 데이터 저장이 용이하여 게시판 구조에 적합
3. **확장성**: 사용자 수 증가에 따른 확장 용이

## 게시판 데이터 구조

게시판 데이터는 `/posts/` 경로 아래에 flat style로 저장됩니다.

```
/posts/
  <post-id>/              # Firebase 자동 생성 ID
    uid: "사용자 UID"
    title: "게시글 제목"
    content: "게시글 내용"
    author: "작성자 displayName"
    category: "community"  # 카테고리 (community, qna, news, market)
    order: "community-1234567890"  # <category>-<timestamp> 형식
    createdAt: 1234567890  # Unix timestamp (밀리초)
    updatedAt: 1234567890  # Unix timestamp (밀리초)
    likeCount: 0         # 좋아요(추천) 총 개수 (기본값: 0)
    commentCount: 0      # 댓글 총 개수 (기본값: 0)
```

**예시 경로:**
```
/posts/abc123def456/
/posts/xyz789uvw012/
/posts/mno345pqr678/
```

**Flat Style 구조의 장점:**
- 관계형 참조가 단순해짐 (post-id만 알면 게시글에 접근 가능)
- 복잡한 노드 구조 없이 간단한 참조
- `order` 필드를 통한 효율적인 카테고리별 정렬

### 카테고리별 정렬 방법

`order` 필드는 `<category>-<timestamp>` 형식으로 저장됩니다:
- `"community-1234567890"`
- `"qna-1234567891"`
- `"news-1234567892"`

**카테고리별 쿼리 예시:**
```javascript
// community 카테고리 게시글만 조회
const postsRef = ref(database, 'posts');
const q = query(
  postsRef,
  orderByChild('order'),
  startAt('community-'),
  endAt('community-\uf8ff'),
  limitToLast(10)
);
```

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
| `likeCount` | number | ❌ | 좋아요(추천) 총 개수 (기본값: 0) |
| `commentCount` | number | ❌ | 댓글 총 개수 (기본값: 0) |

## 카테고리 설정

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

## 게시글 좋아요 (post-likes)

게시글 좋아요는 **단순하고 효율적인 단일 레벨 노드 구조**로 관리합니다.

### 데이터 구조

**✅ 단일 레벨 노드 구조** (Flat Style):
```
/post-likes/
  <post-id>-<uid>: 1   # 좋아요 상태 (값: 1)
```

- **장점**: 복잡한 다단계 경로 없이 단일 레벨로 구성
- **장점**: postId와 uid를 조합한 키로 중복 자동 방지
- **장점**: 간단한 경로로 빠른 조회 및 업데이트
- **장점**: Firebase 쿼리 및 보안 규칙 작성이 간단함

**예시:**
```json
{
  "post-likes": {
    "abc123def456-user-uid-1": 1,
    "abc123def456-user-uid-2": 1,
    "abc123def456-user-uid-3": 1,
    "xyz789uvw012-user-uid-4": 1
  }
}
```

### 게시글 좋아요 개수 관리

게시글의 총 좋아요 개수는 Firebase Cloud Functions 에 의해 `/posts/<post-id>/likeCount` 필드에 저장됩니다:

```
/posts/
  <post-id>/
    uid: "사용자 UID"
    title: "게시글 제목"
    content: "게시글 내용"
    likeCount: 3         # 총 좋아요 개수 (집계됨)
    commentCount: 5
    ...
```

### 좋아요 기능 구현 로직

#### 1. 좋아요 추가
```javascript
import { ref, set, increment, update } from 'firebase/database';

async function addLike(postId, userId) {
  const updates = {};

  // 1. /post-likes/{postId}-{uid} 에 값 1 저장
  updates[`post-likes/${postId}-${userId}`] = 1;

  // 2. /posts/{postId}/likeCount 를 +1 증가
  updates[`posts/${postId}/likeCount`] = increment(1);

  // 한 번의 update로 두 경로 동시 업데이트
  await update(ref(database), updates);
}
```

#### 2. 좋아요 취소
```javascript
async function removeLike(postId, userId) {
  const updates = {};

  // 1. /post-likes/{postId}-{uid} 삭제 (null로 설정)
  updates[`post-likes/${postId}-${userId}`] = null;

  // 2. /posts/{postId}/likeCount 를 -1 감소
  updates[`posts/${postId}/likeCount`] = increment(-1);

  await update(ref(database), updates);
}
```

#### 3. 사용자의 좋아요 여부 확인
```javascript
import { ref, get } from 'firebase/database';

async function checkLikeStatus(postId, userId) {
  const likeRef = ref(database, `post-likes/${postId}-${userId}`);
  const snapshot = await get(likeRef);

  return snapshot.exists(); // true: 좋아요 누름, false: 안 누름
}
```

#### 4. 실시간 좋아요 상태 구독
```javascript
import { ref, onValue } from 'firebase/database';

function listenToLikeStatus(postId, userId, callback) {
  const likeRef = ref(database, `post-likes/${postId}-${userId}`);

  const unsubscribe = onValue(likeRef, (snapshot) => {
    callback(snapshot.exists());
  });

  return unsubscribe; // 언마운트 시 호출
}
```

#### 5. 특정 게시글의 모든 좋아요 조회
```javascript
import { ref, query, orderByKey, startAt, endAt, get } from 'firebase/database';

async function getPostLikes(postId) {
  const likesRef = ref(database, 'post-likes');

  // postId로 시작하는 모든 키 조회
  const likesQuery = query(
    likesRef,
    orderByKey(),
    startAt(`${postId}-`),
    endAt(`${postId}-\uf8ff`)
  );

  const snapshot = await get(likesQuery);
  const likes = [];

  snapshot.forEach((childSnapshot) => {
    // 키에서 uid 추출: "postId-uid" -> uid
    const key = childSnapshot.key;
    const uid = key.substring(postId.length + 1);
    likes.push({ uid, value: childSnapshot.val() });
  });

  return likes;
}
```

### Cloud Functions 연동

**좋아요 추가/삭제 시 likeCount 자동 동기화**는 Cloud Functions에서 처리할 수 있습니다:

```typescript
// firebase/functions/src/index.ts
import * as functions from 'firebase-functions/v2';
import * as admin from 'firebase-admin';

/**
 * 좋아요 추가 시 likeCount 자동 증가
 */
export const onLikeCreated = functions.database.onValueCreated(
  '/post-likes/{likeId}',
  async (event) => {
    const likeId = event.params.likeId as string;

    // likeId 형식: "postId-uid"
    const postId = likeId.split('-')[0];

    // likeCount 증가
    const postRef = admin.database().ref(`posts/${postId}/likeCount`);
    await postRef.transaction((current) => (current || 0) + 1);

    console.log(`좋아요 추가: ${likeId}, postId: ${postId}`);
  }
);

/**
 * 좋아요 삭제 시 likeCount 자동 감소
 */
export const onLikeDeleted = functions.database.onValueDeleted(
  '/post-likes/{likeId}',
  async (event) => {
    const likeId = event.params.likeId as string;
    const postId = likeId.split('-')[0];

    // likeCount 감소
    const postRef = admin.database().ref(`posts/${postId}/likeCount`);
    await postRef.transaction((current) => Math.max((current || 0) - 1, 0));

    console.log(`좋아요 삭제: ${likeId}, postId: ${postId}`);
  }
);
```

### 장점

1. **단순한 구조**: 복잡한 다단계 노드 없이 1단계 경로로 구성
2. **빠른 조회**: `{postId}-{uid}` 키로 O(1) 시간 복잡도로 조회
3. **중복 방지**: 키 자체가 `postId-uid` 조합이므로 자동으로 중복 방지
4. **확장 가능**: 필요 시 값에 timestamp 등 추가 정보 저장 가능
5. **쿼리 효율**: `startAt/endAt`으로 특정 게시글의 모든 좋아요 쉽게 조회
6. **보안 규칙 간단**: 단일 레벨 구조로 보안 규칙 작성이 직관적

### 주의사항

- **동기화**: `likeCount`와 `/post-likes/` 데이터는 항상 동기화되어야 함 (Cloud Functions 권장)
- **키 형식**: 반드시 `{postId}-{uid}` 형식을 준수해야 함
- **postId 파싱**: Cloud Functions에서 `likeId.split('-')[0]`로 postId 추출 시 postId에 `-`가 포함되지 않도록 주의
- **트랜잭션**: likeCount 업데이트 시 트랜잭션 사용 권장 (동시성 문제 방지)

---

# 댓글 (Comments)

본 항목은 댓글 기능의 데이터베이스 구조 정보를 제공합니다.
- 댓글은 트리 구조(스레딩)를 지원하여 댓글의 댓글(대댓글)을 작성할 수 있습니다.
- 반드시 아래의 규칙과 예제를 따라 개발을 진행해야 합니다.

## 댓글 트리 구조 개념

### 용어 정의

- **맨 처음 댓글**: 글에 최초로 작성되는 첫 번째 댓글 (1개만 존재)
- **첫 번째 레벨 댓글**: 글 바로 아래에 작성되는 댓글로, 부모 댓글이 없는 댓글 (여러 개 존재 가능)
- **부모 댓글**: 자식 댓글이 있는 댓글 또는 자식을 만들 댓글
- **자식 댓글**: 부모 댓글 아래에 작성되는 댓글 또는 부모 댓글이 있는 댓글

### 트리 구조 특징

- **최대 깊이**: 12단계까지 지원
- **첫 번째 레벨**: 최대 99999개의 댓글 지원 (5자리)
- **두 번째 레벨**: 최대 9999개의 댓글 지원 (4자리)
- **세 번째 레벨 이후**: 각 레벨당 최대 999개의 댓글 지원 (3자리)
- **정렬 방식**: `order` 문자열을 사용하여 트리 구조를 평탄화하여 정렬

## 댓글 데이터 구조

댓글 데이터는 `/comments/` 경로 아래에 flat style로 저장됩니다.

```
/comments/
  <comment-id>/       # Firebase 자동 생성 ID
    postId: "abc123"  # 소속 게시글 ID
    uid: "사용자 UID"
    content: "댓글 내용"
    depth: 1         # 댓글 깊이 (1부터 시작, 최대 12)
    order: "00001,0000,000,000,000,000,000,000,000,000,000,000"
    parentId: null   # 부모 댓글 ID (첫 번째 레벨은 null)
    createdAt: 1234567890  # Unix timestamp (밀리초)
    updatedAt: 1234567890  # Unix timestamp (밀리초)
```

**예시 경로:**
```
/comments/comment001/
/comments/comment002/
/comments/comment003/
```

**Flat Style 구조의 장점:**
- 관계형 참조가 단순해짐 (comment-id만 알면 댓글에 접근 가능)
- 복잡한 노드 구조 없이 간단한 참조
- `postId` 필드로 해당 댓글이 어느 게시글에 속하는지 추적 가능

**참고:**
- 댓글 작성자 정보(`displayName`, `photoUrl`)는 `author` 필드로 저장하지 않고, 실시간으로 `/users/{uid}/` 경로에서 가져와서 화면에 표시합니다.
- `postId` 필드를 통해 어느 게시글의 댓글인지 알 수 있습니다.

### 댓글 필드 설명

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| `postId` | string | ✅ | 소속 게시글 ID |
| `uid` | string | ✅ | 작성자 UID |
| `content` | string | ✅ | 댓글 내용 |
| `depth` | number | ✅ | 댓글 깊이 (1~12, 1부터 시작) |
| `order` | string | ✅ | 정렬 문자열 (트리 구조 정렬용) |
| `parentId` | string | ❌ | 부모 댓글 ID (첫 번째 레벨은 null) |
| `createdAt` | number | ✅ | 작성 시간 (Unix timestamp 밀리초) |
| `updatedAt` | number | ✅ | 수정 시간 (Unix timestamp 밀리초) |

## order 필드 상세 설명

`order` 필드는 댓글 트리 구조를 평탄화하여 정렬하기 위한 핵심 필드입니다.

### order 문자열 형식

```
"00001,0000,000,000,000,000,000,000,000,000,000,000"
 ^^^^^  ^^^^  ^^^  ^^^  ^^^  ^^^  ^^^  ^^^  ^^^  ^^^  ^^^  ^^^
  L0    L1    L2   L3   L4   L5   L6   L7   L8   L9   L10  L11
```

- **L0 (첫 번째 레벨)**: 5자리 숫자 (00000~99999)
- **L1 (두 번째 레벨)**: 4자리 숫자 (0000~9999)
- **L2~L11 (세 번째 레벨 이후)**: 3자리 숫자 (000~999)
- **구분자**: 콤마(,)로 각 레벨 구분
- **최대 길이**: 52자 (5 + 4 + 10×3 + 11개의 콤마 = 50)

### order 기반 정렬

Firebase에서 댓글을 조회할 때 `order` 필드로 정렬하면 트리 구조가 유지된 채로 평탄화된 목록을 얻을 수 있습니다.

**정렬 결과 예시:**
```
00001,0000,000,... → 첫 번째 댓글
00001,0001,000,... → 첫 번째 댓글의 첫 번째 자식
00001,0001,001,... → 첫 번째 댓글의 첫 번째 자식의 첫 번째 자식
00001,0002,000,... → 첫 번째 댓글의 두 번째 자식
00002,0000,000,... → 두 번째 댓글
00002,0001,000,... → 두 번째 댓글의 첫 번째 자식
```

**참고**: 댓글 생성 로직, order 생성 알고리즘, API 함수, UI 구현 예시는 [게시판 개발 가이드 - 댓글 섹션](./sns-web-forum.md#댓글-개발-가이드)을 참고하세요.

## 데이터 예시

### 게시글과 댓글 전체 구조

```json
{
  "posts": {
    "community": {
      "post-abc123": {
        "uid": "user-1",
        "title": "게시글 제목",
        "content": "게시글 내용",
        "author": "사용자1",
        "category": "community",
        "createdAt": 1698473000000,
        "updatedAt": 1698473000000,
        "likeCount": 5,
        "commentCount": 6
      }
    }
  },
  "comments": {
    "community": {
      "post-abc123": {
        "comment-001": {
          "uid": "user-2",
          "content": "첫 번째 댓글",
          "depth": 1,
          "order": "00001,0000,000,000,000,000,000,000,000,000,000,000",
          "parentId": null,
          "createdAt": 1698474000000,
          "updatedAt": 1698474000000
        },
        "comment-002": {
          "uid": "user-3",
          "content": "첫 번째 댓글의 답글",
          "depth": 2,
          "order": "00001,0002,000,000,000,000,000,000,000,000,000,000",
          "parentId": "comment-001",
          "createdAt": 1698475000000,
          "updatedAt": 1698475000000
        },
        "comment-003": {
          "uid": "user-4",
          "content": "첫 번째 댓글의 답글의 답글",
          "depth": 3,
          "order": "00001,0002,003,000,000,000,000,000,000,000,000,000",
          "parentId": "comment-002",
          "createdAt": 1698476000000,
          "updatedAt": 1698476000000
        },
        "comment-004": {
          "uid": "user-5",
          "content": "첫 번째 댓글의 두 번째 답글",
          "depth": 2,
          "order": "00001,0004,000,000,000,000,000,000,000,000,000,000",
          "parentId": "comment-001",
          "createdAt": 1698477000000,
          "updatedAt": 1698477000000
        },
        "comment-005": {
          "uid": "user-6",
          "content": "두 번째 댓글",
          "depth": 1,
          "order": "00005,0000,000,000,000,000,000,000,000,000,000,000",
          "parentId": null,
          "createdAt": 1698478000000,
          "updatedAt": 1698478000000
        },
        "comment-006": {
          "uid": "user-7",
          "content": "두 번째 댓글의 답글",
          "depth": 2,
          "order": "00005,0006,000,000,000,000,000,000,000,000,000,000",
          "parentId": "comment-005",
          "createdAt": 1698479000000,
          "updatedAt": 1698479000000
        }
      }
    }
  }
}
```

### 댓글 표시 순서 (order 정렬 후)

```
1. comment-001 (00001,0000,000,...) - 첫 번째 댓글
2. comment-002 (00001,0002,000,...) - └─ 첫 번째 댓글의 답글
3. comment-003 (00001,0002,003,...) -    └─ 답글의 답글
4. comment-004 (00001,0004,000,...) - └─ 첫 번째 댓글의 두 번째 답글
5. comment-005 (00005,0000,000,...) - 두 번째 댓글
6. comment-006 (00005,0006,000,...) - └─ 두 번째 댓글의 답글
```

**참고**:
- 각 댓글의 작성자 정보(displayName, photoUrl)는 `/users/{uid}/` 경로에서 실시간으로 가져와서 UI에 표시합니다.
- 댓글의 최대 깊이는 12단계입니다. 13단계 이상은 order 정렬이 제대로 작동하지 않을 수 있습니다.



## 코멘트 속성 관리 (comment-props)

댓글과 관련된 다양한 속성(좋아요, 신고 등)은 **성능 최적화 및 확장성**을 위해 별도의 `/comment-props/` 노드에서 관리합니다.


### 댓글 좋아요
```
/comment-props/
  likes/
    {commentId}/            # 댓글 ID
      {uid}: timestamp     # 좋아요를 누른 사용자 UID와 시간
```

---

# 친구 관계

본 항목은 친구 관계, 팔로잉, 팔로워에 대한 데이터베이스 구조 정보를 제공합니다.
- 반드시 아래의 규칙과 예제를 따라 개발을 진행해야 합니다.


- Firebase Realtime Database를 사용하여 친구 관계 및 팔로잉/팔로워 데이터를 저장합니다.
- 데이터 구조 예제:
- ```json
{

      "friends": {
        "<login-user-uid>": {
            "<other-user-uid-1>": timestamp,
            "<other-user-uid-2>": timestamp
        }
      },
      "followers": {
        "<my-uid>": {
            "<other-user-uid-3>": timestamp
        }
      },
      "following": {
        "<my-uid>": {
            "<other-user-uid-4>": timestamp
        }
      }

}
- ```
- `friends`: 상호 친구 관계를 나타냅니다.
- `followers`: 해당 사용자를 팔로우하는 사용자 목록입니다.
- `following`: 사용자가 팔로우하는 사용자 목록입니다.
- 각 항목의 값은 관계가 형성된 타임스탬프입니다.
- 각 항목의 키는 사용자 UID입니다. 해당 사용자의 UID를 사용하여 관계를 조회할 수 있습니다.
  - 예: `friends/<login-user-uid>/` 경로에서 로그인한 사용자의 친구 목록을 조회할 수 있습니다.
  - 예: `followers/<my-uid>/` 경로에서 나를 팔로우하는 사용자 목록을 조회할 수 있습니다.
  - 예: `following/<my-uid>/` 경로에서 내가 팔로우하는 사용자 목록을 조회할 수 있습니다.
- 친구 관계는 양방향 관계이므로, 친구 추가 시 양쪽 사용자에 대해 `friends` 항목을 업데이트해야 합니다.
