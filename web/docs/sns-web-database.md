Firebase Realtime Database 구조:
- 본 문서는 SNS 웹 애플리케이션을 개발하기 위한 데이터베이스 구조를 정의하고, 그에 따른 기본적인 개발 지침을 제공합니다.
- 데이터베이스 설계나 구조를 확인을 할 때에는 반드시 아래의 규칙을 따라서 개발 작업을 진행해야 합니다.



# 개요
- Firebase Realtime Database(RTDB)는 실시간 데이터 동기화가 필요한 SNS 웹 애플리케이션에 적합한 데이터베이스 솔루션입니다.
  - 다만, 가장 큰 단점은 데이터를 효율적으로 추출하기 위한 쿼리가 제한적이라는 점입니다. 따라서, 데이터 구조 설계 시 이를 고려해야 합니다.
- 애플리케이션에서는 필요한 최소한의 데이터만 저장합니다. Firebase Cloud Functions 를 사용하여 복잡한 데이터 처리 및 집계를 수행해야 합니다. 이렇게 하는 이유는 웹 애플리케이션 뿐만아니라 모바일 앱에서도 동일한 기능을 사용하기 때문입니다.


# 사용자 정보

- 사용자 정보는 `users` 노드에 저장됩니다.
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
