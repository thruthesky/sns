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

게시판 데이터는 `/posts/` 경로 아래에 저장됩니다.

```
/posts/
  {category}/              # 카테고리 (community, qna, news, market)
    {postId}/            # Firebase 자동 생성 ID
      uid: "사용자 UID"
      title: "게시글 제목"
      content: "게시글 내용"
      author: "작성자 displayName"
      category: "카테고리"
      createdAt: 1234567890  # Unix timestamp (밀리초)
      updatedAt: 1234567890  # Unix timestamp (밀리초)
      likeCount: 0         # 좋아요(추천) 총 개수 (기본값: 0)
      commentCount: 0      # 댓글 총 개수 (기본값: 0)
```

**예시 경로:**
```
/posts/community/abc123def456/
/posts/qna/xyz789uvw012/
/posts/news/mno345pqr678/
```

### 게시글 필드 설명

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| `uid` | string | ✅ | 작성자 UID |
| `title` | string | ✅ | 게시글 제목 |
| `content` | string | ✅ | 게시글 내용 |
| `author` | string | ✅ | 작성자 displayName |
| `category` | string | ✅ | 카테고리 (community, qna, news, market) |
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

## 게시글 속성 관리 (post-props)

게시글과 관련된 다양한 속성(좋아요, 신고, 북마크 등)은 **성능 최적화 및 확장성**을 위해 별도의 `/post-props/` 노드에서 관리합니다.

### 게시글 속성 분리의 필요성

**❌ 비효율적인 구조** (게시글 노드에 모든 속성 정보 저장):
```
/posts/<category>/<post-id>/
  likes/
    <uid1>: timestamp
    <uid2>: timestamp
    ... (수천 명의 좋아요 시 데이터 과다)
  reports/
    <uid1>: "스팸"
    <uid2>: "부적절한 내용"
    ... (신고 데이터까지 포함)
```
- **문제점**: 게시글 목록 로드 시 모든 속성 정보까지 다운로드되어 비효율적
- **문제점**: 데이터가 많을수록 전송량 급증 및 성능 저하
- **문제점**: 확장 시 게시글 노드가 비대해짐

**✅ 효율적인 구조** (속성 개수와 상세 정보 분리):
```
# 1. 게시글 노드: 집계된 개수만 저장 (빠른 조회)
/posts/<category>/<post-id>/
  likeCount: 42        # 좋아요 총 개수
  commentCount: 15     # 댓글 총 개수

# 2. 속성 상세 정보: 별도 노드에 저장
/post-props/
  likes/
    <post-id>/
      <uid1>: timestamp
      <uid2>: timestamp
  reports/
    <post-id>/
      <uid1>: "스팸"
      <uid2>: "부적절한 내용"
  bookmarks/
    <post-id>/
      <uid1>: timestamp
```

### 데이터 구조 상세

#### 좋아요 (Likes)
```
/post-props/
  likes/
    {postId}/            # 게시글 ID (카테고리 없이 post-id만 사용)
      {uid}: timestamp   # 좋아요를 누른 사용자 UID와 시간
```

**예시:**
```json
{
  "post-props": {
    "likes": {
      "abc123def456": {
        "user-uid-1": 1698473000000,
        "user-uid-2": 1698474000000,
        "user-uid-3": 1698475000000
      },
      "xyz789uvw012": {
        "user-uid-4": 1698476000000
      }
    }
  }
}
```

#### 신고 (Reports)
```
/post-props/
  reports/
    {postId}/
      {uid}: "신고 사유"   # 신고한 사용자 UID와 사유
```

**예시:**
```json
{
  "post-props": {
    "reports": {
      "abc123def456": {
        "user-uid-5": "스팸",
        "user-uid-6": "부적절한 내용"
      }
    }
  }
}
```

### 좋아요 기능 구현 로직

#### 1. 좋아요 추가
```javascript
// 1. /post-props/likes/<postId>/<uid> 에 timestamp 저장
// 2. /posts/<category>/<postId>/likeCount 를 +1 증가 (트랜잭션 사용)
```

#### 2. 좋아요 취소
```javascript
// 1. /post-props/likes/<postId>/<uid> 삭제
// 2. /posts/<category>/<postId>/likeCount 를 -1 감소 (트랜잭션 사용)
```

#### 3. 사용자의 좋아요 여부 확인
```javascript
// /post-props/likes/<postId>/<current-uid> 경로 존재 여부 확인
```

#### 4. 게시글 목록 표시
```javascript
// /posts/<category>/<postId>/likeCount 만 조회 (빠름)
```

### 확장성 (Extensibility)

`/post-props/` 구조를 사용하면 다양한 게시글 관련 속성을 쉽게 추가할 수 있습니다:

```
/post-props/
  likes/           # 좋아요
    <post-id>/
      <uid>: timestamp

  reports/         # 신고
    <post-id>/
      <uid>: "신고 사유"

  bookmarks/       # 북마크
    <post-id>/
      <uid>: timestamp

  shares/          # 공유
    <post-id>/
      <uid>: timestamp

  views/           # 조회수 (필요시)
    <post-id>/
      <uid>: timestamp
```

**확장성 장점:**
- 새로운 속성 추가 시 기존 구조 변경 없이 `/post-props/` 아래에 추가만 하면 됨
- 각 속성별로 독립적인 보안 규칙 적용 가능
- 특정 속성만 선택적으로 조회하여 성능 최적화
- 속성별로 다른 데이터 타입 사용 가능 (timestamp, string, number 등)

### 장점

1. **성능 최적화**: 게시글 목록 로드 시 집계된 개수(`likeCount` 등)만 가져오므로 빠름
2. **중복 방지**: 사용자 UID를 키로 사용하여 자동으로 중복 방지
3. **빠른 확인**: 특정 사용자의 속성 여부를 단일 경로로 확인 가능
4. **확장성**: 새로운 속성을 쉽게 추가할 수 있는 유연한 구조
5. **데이터 관리**: 카테고리 없이 post-id만 사용하여 구조 단순화
6. **보안 규칙**: 속성별로 독립적인 접근 제어 가능

### 주의사항

- **동기화 필수**: `likeCount`와 `/post-props/likes/` 의 데이터는 항상 동기화되어야 함
- **트랜잭션 사용**: 속성 추가/삭제 시 Firebase 트랜잭션 사용 권장
- **Cloud Functions**: 서버 측에서 데이터 일관성을 보장하는 것이 더 안전함
- **post-id 고유성**: 카테고리를 제거했으므로 post-id는 전역적으로 고유해야 함 (Firebase의 `push()` 사용 시 자동 보장)

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

댓글 데이터는 `/comments/` 경로 아래에 게시글 ID로 분류되어 저장됩니다.

```
/comments/
  {postId}/              # 게시글 ID
    {commentId}/         # Firebase 자동 생성 ID
      uid: "사용자 UID"
      content: "댓글 내용"
      depth: 1           # 댓글 깊이 (1부터 시작, 최대 12)
      order: "00001,0000,000,000,000,000,000,000,000,000,000,000"
      parentId: null     # 부모 댓글 ID (첫 번째 레벨은 null)
      createdAt: 1234567890  # Unix timestamp (밀리초)
      updatedAt: 1234567890  # Unix timestamp (밀리초)
```

**예시 경로:**
```
/comments/abc123def456/comment001/
/comments/abc123def456/comment002/
/comments/xyz789uvw012/comment003/
```

**참고:**
- 댓글 작성자 정보(`displayName`, `photoUrl`)는 `author` 필드로 저장하지 않고, 실시간으로 `/users/{uid}/` 경로에서 가져와서 화면에 표시합니다.
- 카테고리 정보는 게시글 ID만으로 댓글을 조회할 수 있으므로 경로에 포함하지 않습니다.

### 댓글 필드 설명

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
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

### order 생성 로직

#### 1. 첫 번째 레벨 댓글 (부모가 없는 댓글)

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

#### 2. 자식 댓글 (부모가 있는 댓글)

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

### order 기반 정렬

Firebase에서 댓글을 조회할 때 `order` 필드로 정렬하면 트리 구조가 유지된 채로 평탄화된 목록을 얻을 수 있습니다.

```javascript
import { ref, query, orderByChild } from 'firebase/database';

// 댓글 조회 (order 순으로 정렬)
const commentsRef = ref(database, `comments/${postId}`);
const commentsQuery = query(commentsRef, orderByChild('order'));
```

**정렬 결과 예시:**
```
00001,0000,000,... → 첫 번째 댓글
00001,0001,000,... → 첫 번째 댓글의 첫 번째 자식
00001,0001,001,... → 첫 번째 댓글의 첫 번째 자식의 첫 번째 자식
00001,0002,000,... → 첫 번째 댓글의 두 번째 자식
00002,0000,000,... → 두 번째 댓글
00002,0001,000,... → 두 번째 댓글의 첫 번째 자식
```

## 댓글 작성 플로우

### 1. 첫 번째 레벨 댓글 작성

```javascript
/**
 * 첫 번째 레벨 댓글 작성
 * @param {string} postId - 게시글 ID
 * @param {string} postCategory - 게시글 카테고리 (commentCount 업데이트용)
 * @param {string} userId - 작성자 UID
 * @param {string} content - 댓글 내용
 */
async function createTopLevelComment(postId, postCategory, userId, content) {
  // 1. 현재 게시글의 commentCount 가져오기
  const postRef = ref(database, `posts/${postCategory}/${postId}`);
  const postSnapshot = await get(postRef);
  const currentCommentCount = postSnapshot.val()?.commentCount || 0;

  // 2. 새 댓글 ID 생성 (카테고리 없이 postId만 사용)
  const commentsRef = ref(database, `comments/${postId}`);
  const newCommentRef = push(commentsRef);

  // 3. order 생성 (첫 번째 레벨)
  const noOfComments = currentCommentCount + 1;
  const order = createFirstLevelOrder(noOfComments);

  // 4. 댓글 데이터 생성
  // 참고: author 필드는 저장하지 않고, UI에서 /users/{uid}/ 경로에서 실시간으로 가져옴
  const commentData = {
    uid: userId,
    content: content,
    depth: 1,  // 첫 번째 레벨은 depth 1
    order: order,
    parentId: null,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };

  // 5. 댓글 저장 및 게시글의 commentCount 증가 (트랜잭션 사용 권장)
  await runTransaction(postRef, (post) => {
    if (post) {
      post.commentCount = (post.commentCount || 0) + 1;
    }
    return post;
  });

  await set(newCommentRef, commentData);

  return { success: true, commentId: newCommentRef.key };
}
```

### 2. 자식 댓글 (대댓글) 작성

```javascript
/**
 * 자식 댓글 작성
 * @param {string} postId - 게시글 ID
 * @param {string} postCategory - 게시글 카테고리 (commentCount 업데이트용)
 * @param {string} parentCommentId - 부모 댓글 ID
 * @param {string} userId - 작성자 UID
 * @param {string} content - 댓글 내용
 */
async function createChildComment(postId, postCategory, parentCommentId, userId, content) {
  // 1. 부모 댓글 정보 가져오기 (카테고리 없이 postId만 사용)
  const parentRef = ref(database, `comments/${postId}/${parentCommentId}`);
  const parentSnapshot = await get(parentRef);
  const parentComment = parentSnapshot.val();

  if (!parentComment) {
    throw new Error('부모 댓글을 찾을 수 없습니다.');
  }

  // 2. 현재 게시글의 commentCount 가져오기
  const postRef = ref(database, `posts/${postCategory}/${postId}`);
  const postSnapshot = await get(postRef);
  const currentCommentCount = postSnapshot.val()?.commentCount || 0;

  // 3. 새 댓글 ID 생성 (카테고리 없이 postId만 사용)
  const commentsRef = ref(database, `comments/${postId}`);
  const newCommentRef = push(commentsRef);

  // 4. order 생성 (자식 댓글)
  const noOfComments = currentCommentCount + 1;
  const order = createChildOrder(parentComment.order, parentComment.depth, noOfComments);

  // 5. 댓글 데이터 생성
  // 참고: author 필드는 저장하지 않고, UI에서 /users/{uid}/ 경로에서 실시간으로 가져옴
  const commentData = {
    uid: userId,
    content: content,
    depth: parentComment.depth + 1,  // 부모 depth + 1
    order: order,
    parentId: parentCommentId,
    createdAt: Date.now(),
    updatedAt: Date.now()
  };

  // 6. depth가 12를 초과하는지 확인
  if (commentData.depth > 12) {
    throw new Error('댓글 깊이는 최대 12단계까지만 지원됩니다.');
  }

  // 7. 댓글 저장 및 게시글의 commentCount 증가
  await runTransaction(postRef, (post) => {
    if (post) {
      post.commentCount = (post.commentCount || 0) + 1;
    }
    return post;
  });

  await set(newCommentRef, commentData);

  return { success: true, commentId: newCommentRef.key };
}
```

## 댓글 조회 및 표시

### 1. 댓글 목록 조회

```javascript
/**
 * 게시글의 모든 댓글 조회 (order 순으로 정렬)
 * @param {string} postId - 게시글 ID
 */
async function getComments(postId) {
  const commentsRef = ref(database, `comments/${postId}`);
  const commentsQuery = query(commentsRef, orderByChild('order'));

  const snapshot = await get(commentsQuery);
  const comments = [];

  snapshot.forEach((childSnapshot) => {
    comments.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });

  return comments;
}
```

### 2. 실시간 댓글 리스너

```javascript
/**
 * 실시간 댓글 업데이트 구독
 * @param {string} postId - 게시글 ID
 * @param {function} callback - 댓글 목록을 받는 콜백 함수
 */
function listenToComments(postId, callback) {
  const commentsRef = ref(database, `comments/${postId}`);
  const commentsQuery = query(commentsRef, orderByChild('order'));

  return onValue(commentsQuery, (snapshot) => {
    const comments = [];
    snapshot.forEach((childSnapshot) => {
      comments.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    callback(comments);
  });
}
```

## 댓글 UI 표시 예시

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

**참고**: 각 댓글의 작성자 정보(displayName, photoUrl)는 `/users/{uid}/` 경로에서 실시간으로 가져와서 UI에 표시합니다.

## 주의사항

### 1. 동기화 필수
- 게시글의 `commentCount`와 실제 댓글 개수는 항상 동기화되어야 함
- 댓글 추가/삭제 시 Firebase 트랜잭션 사용 권장

### 2. order 생성 주의
- `noOfComments`는 항상 **게시글의 총 댓글 수**를 전달해야 함
- 댓글 작성 시마다 `commentCount`를 1씩 증가시켜 order에 반영

### 3. depth 제한
- 최대 깊이는 12단계
- 13단계 이상은 order 정렬이 제대로 작동하지 않을 수 있음
- UI에서 depth 제한을 명시하는 것을 권장 (예: "더 이상 답글을 작성할 수 없습니다")

### 4. 삭제 처리
- 댓글 삭제 시 자식 댓글도 함께 삭제하거나
- 또는 "삭제된 댓글입니다" 메시지로 대체 (자식 댓글 유지)
- 삭제 시 `commentCount` 감소 필수

### 5. Cloud Functions 사용 권장
- 서버 측에서 `order` 생성 및 `commentCount` 동기화를 처리하는 것이 더 안전함
- 클라이언트에서 직접 처리 시 동시성 문제 발생 가능

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
