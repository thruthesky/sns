# 댓글 개발 가이드

본 문서는 SNS 웹 애플리케이션에서 게시글 댓글 기능을 구현하는 데 필요한 지침과 로직을 제공합니다.
댓글은 **트리 구조(스레딩)**를 지원하여 댓글의 댓글(대댓글)을 작성할 수 있습니다.

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
    depth: 1                 # 댓글 깊이 (1부터 시작, 최대 12)
    order: "00001,0000,000,000,000,000,000,000,000,000,000,000"
    parentId: null           # 부모 댓글 ID (첫 번째 레벨은 null)
    createdAt: 1234567890    # Unix timestamp (밀리초)
    updatedAt: 1234567890    # Unix timestamp (밀리초)
```

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

### Flat Style 구조의 장점

- 관계형 참조가 단순해짐 (comment-id만 알면 댓글에 접근 가능)
- 복잡한 노드 구조 없이 간단한 참조
- `postId` 필드로 해당 댓글이 어느 게시글에 속하는지 추적 가능

---

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

### order 기반 정렬 예시

Firebase에서 댓글을 조회할 때 `order` 필드로 정렬하면 트리 구조가 유지된 채로 평탄화된 목록을 얻을 수 있습니다.

```
00001,0000,000,... → 첫 번째 댓글
00001,0001,000,... → 첫 번째 댓글의 첫 번째 자식
00001,0001,001,... → 첫 번째 댓글의 첫 번째 자식의 첫 번째 자식
00001,0002,000,... → 첫 번째 댓글의 두 번째 자식
00002,0000,000,... → 두 번째 댓글
00002,0001,000,... → 두 번째 댓글의 첫 번째 자식
```

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
      "order": "00001,0000,000,000,000,000,000,000,000,000,000,000",
      "parentId": null,
      "createdAt": 1698474000000,
      "updatedAt": 1698474000000
    },
    "comment-002": {
      "postId": "post-abc123",
      "uid": "user-3",
      "content": "첫 번째 댓글의 답글",
      "depth": 2,
      "order": "00001,0002,000,000,000,000,000,000,000,000,000,000",
      "parentId": "comment-001",
      "createdAt": 1698475000000,
      "updatedAt": 1698475000000
    },
    "comment-003": {
      "postId": "post-abc123",
      "uid": "user-4",
      "content": "첫 번째 댓글의 답글의 답글",
      "depth": 3,
      "order": "00001,0002,003,000,000,000,000,000,000,000,000,000",
      "parentId": "comment-002",
      "createdAt": 1698476000000,
      "updatedAt": 1698476000000
    },
    "comment-004": {
      "postId": "post-abc123",
      "uid": "user-5",
      "content": "첫 번째 댓글의 두 번째 답글",
      "depth": 2,
      "order": "00001,0004,000,000,000,000,000,000,000,000,000,000",
      "parentId": "comment-001",
      "createdAt": 1698477000000,
      "updatedAt": 1698477000000
    },
    "comment-005": {
      "postId": "post-abc123",
      "uid": "user-6",
      "content": "두 번째 댓글",
      "depth": 1,
      "order": "00005,0000,000,000,000,000,000,000,000,000,000,000",
      "parentId": null,
      "createdAt": 1698478000000,
      "updatedAt": 1698478000000
    },
    "comment-006": {
      "postId": "post-abc123",
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
    // 1. 현재 댓글 수 확인 (order의 첫 번째 레벨 번호로 사용)
    const commentsRef = ref(database, 'comments');
    const snapshot = await get(commentsRef);

    // 첫 번째 레벨 댓글의 다음 순번 결정
    let nextIndex = 1;
    if (snapshot.exists()) {
      const comments = snapshot.val();
      // 기존 댓글들 중 depth가 1인 것만 확인하여 최대 인덱스 구하기
      for (const commentId in comments) {
        if (comments[commentId].depth === 1) {
          const depth1Index = parseInt(comments[commentId].order.split(',')[0]);
          nextIndex = Math.max(nextIndex, depth1Index + 1);
        }
      }
    }

    // 2. order 문자열 생성
    const orderStr = String(nextIndex).padStart(5, '0') + ',0000,000,000,000,000,000,000,000,000,000,000';

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

    // 2. 같은 부모의 자식 댓글들 조회
    const commentsRef = ref(database, 'comments');
    const snapshot = await get(commentsRef);

    let nextChildIndex = 0;
    if (snapshot.exists()) {
      const comments = snapshot.val();
      for (const commentId in comments) {
        const comment = comments[commentId];
        // 같은 부모의 같은 깊이 자식들 확인
        if (comment.parentId === parentCommentId && comment.depth === parentDepth + 1) {
          const orderParts = comment.order.split(',');
          const childIndex = parseInt(orderParts[parentDepth]);
          nextChildIndex = Math.max(nextChildIndex, childIndex + 1);
        }
      }
    }

    // 3. 부모의 order를 기반으로 자식 order 생성
    const parentOrderParts = parentComment.order.split(',');
    const newOrderParts = [...parentOrderParts];

    // 자식의 인덱스 결정 (첫 번째 자식은 기본 4자리, 나머지는 3자리)
    if (parentDepth === 1) {
      newOrderParts[1] = String(nextChildIndex).padStart(4, '0');
    } else {
      newOrderParts[parentDepth] = String(nextChildIndex).padStart(3, '0');
    }

    const orderStr = newOrderParts.join(',');

    // 4. 자식 댓글 데이터 작성
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

    // 5. Firebase에 저장
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
import { ref, query, orderByChild, orderByKey, onValue } from 'firebase/database';

/**
 * 특정 게시글의 모든 댓글을 order 순서로 조회 (실시간)
 *
 * @param {string} postId - 게시글 ID
 * @param {Function} callback - 댓글 목록 변경 시 호출될 콜백 함수
 * @returns {Function} 구독 해제 함수
 */
function listenToComments(postId, callback) {
  const commentsRef = ref(database, 'comments');

  // postId로 필터링하고 order로 정렬
  const q = query(
    commentsRef,
    orderByChild('postId'),
    equalTo(postId)
  );

  // 먼저 postId로 필터링한 후, 클라이언트에서 order로 정렬
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

    // order 필드로 정렬 (문자열 비교)
    comments.sort((a, b) => a.order.localeCompare(b.order));

    callback(comments);
  });

  return unsubscribe;
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
- [게시판 개발 가이드](./sns-web-forum.md)
- [데이터베이스 구조 가이드](./sns-web-database.md)
- [Svelte Custom Elements 개발 가이드](./sns-custom-elements.md)
