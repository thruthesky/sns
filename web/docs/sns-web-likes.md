# 게시글 좋아요 개발 가이드

본 문서는 SNS 웹 애플리케이션에서 게시글 좋아요(추천) 기능을 구현하는 데 필요한 지침과 로직을 제공합니다.

---

## 개요

게시글 좋아요는 **단순하고 효율적인 단일 레벨 노드 구조**로 관리합니다.

### 좋아요 기능의 역할

- 사용자가 게시글을 추천할 수 있는 기능 제공
- 게시글의 인기도를 나타내는 `likeCount` 필드 관리
- 실시간 좋아요 상태 추적 및 UI 업데이트

---

## 데이터 구조

### 좋아요 저장 방식

**✅ 단일 레벨 노드 구조** (Flat Style):

```
/post-likes/
  <post-id>-<uid>: 1   # 좋아요 상태 (값: 1)
```

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

### Flat Style 구조의 장점

- **복잡성 최소화**: 다단계 경로 없이 단일 레벨로 구성
- **중복 자동 방지**: postId와 uid를 조합한 키로 중복 자동 방지
- **빠른 조회**: `{postId}-{uid}` 키로 O(1) 시간 복잡도로 조회
- **쿼리 효율**: `startAt/endAt`으로 특정 게시글의 모든 좋아요 쉽게 조회
- **보안 규칙 간단**: 단일 레벨 구조로 보안 규칙 작성이 직관적

### 게시글의 총 좋아요 개수

게시글의 총 좋아요 개수는 `/posts/<post-id>/likeCount` 필드에 저장됩니다:

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

---

## 좋아요 기능 구현

### 1. 좋아요 추가

좋아요를 추가할 때는 두 가지 작업을 동시에 수행합니다:
1. `/post-likes/{postId}-{userId}` 에 값 저장
2. `/posts/{postId}/likeCount` 증가

```javascript
import { ref, set, increment, update } from 'firebase/database';
import { database } from '../utils/firebase.js';

/**
 * 게시글에 좋아요 추가
 *
 * @param {string} postId - 게시글 ID
 * @param {string} userId - 사용자 ID
 * @returns {Promise<void>}
 */
async function addLike(postId, userId) {
  const updates = {};

  // 1. /post-likes/{postId}-{userId} 에 값 1 저장
  updates[`post-likes/${postId}-${userId}`] = 1;

  // 2. /posts/{postId}/likeCount 를 +1 증가
  updates[`posts/${postId}/likeCount`] = increment(1);

  // 한 번의 update로 두 경로 동시 업데이트
  await update(ref(database), updates);
}
```

### 2. 좋아요 취소

좋아요를 취소할 때는 역으로 두 가지 작업을 수행합니다:
1. `/post-likes/{postId}-{userId}` 삭제
2. `/posts/{postId}/likeCount` 감소

```javascript
/**
 * 게시글 좋아요 취소
 *
 * @param {string} postId - 게시글 ID
 * @param {string} userId - 사용자 ID
 * @returns {Promise<void>}
 */
async function removeLike(postId, userId) {
  const updates = {};

  // 1. /post-likes/{postId}-{userId} 삭제 (null로 설정)
  updates[`post-likes/${postId}-${userId}`] = null;

  // 2. /posts/{postId}/likeCount 를 -1 감소
  updates[`posts/${postId}/likeCount`] = increment(-1);

  await update(ref(database), updates);
}
```

### 3. 사용자의 좋아요 여부 확인

특정 게시글에 대해 사용자가 좋아요를 눌렀는지 확인합니다.

```javascript
import { ref, get } from 'firebase/database';

/**
 * 사용자의 좋아요 여부 확인
 *
 * @param {string} postId - 게시글 ID
 * @param {string} userId - 사용자 ID
 * @returns {Promise<boolean>} true: 좋아요 누름, false: 안 누름
 */
async function checkLikeStatus(postId, userId) {
  const likeRef = ref(database, `post-likes/${postId}-${userId}`);
  const snapshot = await get(likeRef);

  return snapshot.exists(); // true: 좋아요 누름, false: 안 누름
}
```

### 4. 실시간 좋아요 상태 구독

좋아요 상태를 실시간으로 추적하여 UI를 업데이트합니다.

```javascript
import { ref, onValue } from 'firebase/database';

/**
 * 좋아요 상태 실시간 구독
 *
 * @param {string} postId - 게시글 ID
 * @param {string} userId - 사용자 ID
 * @param {Function} callback - 좋아요 상태 변경 시 호출될 콜백 함수
 * @returns {Function} 구독 해제 함수
 */
function listenToLikeStatus(postId, userId, callback) {
  const likeRef = ref(database, `post-likes/${postId}-${userId}`);

  const unsubscribe = onValue(likeRef, (snapshot) => {
    callback(snapshot.exists());
  });

  return unsubscribe; // 언마운트 시 호출
}
```

**Svelte에서의 사용 예시:**

```svelte
<script>
  import { onMount } from 'svelte';
  import { listenToLikeStatus } from '$lib/services/like.js';

  let postId = 'abc123';
  let userId = 'user-uid';
  let isLiked = $state(false);

  onMount(() => {
    // 좋아요 상태 실시간 구독
    const unsubscribe = listenToLikeStatus(postId, userId, (liked) => {
      isLiked = liked;
    });

    // 컴포넌트 언마운트 시 구독 해제
    return () => unsubscribe();
  });
</script>

<button on:click={() => toggleLike()}>
  {isLiked ? '❤️ 좋아요' : '🤍 좋아요'}
</button>
```

### 5. 특정 게시글의 모든 좋아요 조회

특정 게시글에 달린 모든 좋아요를 조회합니다.

```javascript
import { ref, query, orderByKey, startAt, endAt, get } from 'firebase/database';

/**
 * 특정 게시글의 모든 좋아요 조회
 *
 * @param {string} postId - 게시글 ID
 * @returns {Promise<Array>} 좋아요 목록 (uid, timestamp 포함)
 */
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

### 6. 좋아요 토글 (추가 또는 취소)

좋아요 상태에 따라 추가 또는 취소하는 편의 함수입니다.

```javascript
/**
 * 좋아요 토글 (추가 또는 취소)
 *
 * @param {string} postId - 게시글 ID
 * @param {string} userId - 사용자 ID
 * @returns {Promise<Object>} { success, liked }
 */
async function toggleLike(postId, userId) {
  try {
    // 현재 좋아요 상태 확인
    const isLiked = await checkLikeStatus(postId, userId);

    if (isLiked) {
      await removeLike(postId, userId);
    } else {
      await addLike(postId, userId);
    }

    return { success: true, liked: !isLiked };
  } catch (error) {
    console.error('좋아요 토글 실패:', error);
    return { success: false, error: error.message };
  }
}
```

---

## Cloud Functions 연동

좋아요 추가/삭제 시 `likeCount` 자동 동기화는 **Cloud Functions**에서 처리할 수 있습니다.

### likeCount 자동 관리의 이유

- **일관성 보장**: 좋아요 수와 실제 좋아요 데이터가 항상 동기화
- **성능 최적화**: 게시글 조회 시 전체 좋아요를 계산할 필요 없음
- **모바일 앱 호환**: 웹과 앱이 동일한 데이터 구조 사용

### Cloud Functions 구현

```typescript
// firebase/functions/src/index.ts
import * as functions from 'firebase-functions/v2';
import * as admin from 'firebase-admin';

/**
 * 좋아요 추가 시 likeCount 자동 증가
 * /post-likes/{likeId} 경로에 새 데이터 추가될 때 트리거됨
 */
export const onLikeCreated = functions.database.onValueCreated(
  '/post-likes/{likeId}',
  async (event) => {
    const likeId = event.params.likeId as string;

    // likeId 형식: "postId-uid"
    // 주의: postId에 "-"가 포함되지 않아야 함
    const postId = likeId.split('-')[0];

    // likeCount 증가
    const postRef = admin.database().ref(`posts/${postId}/likeCount`);
    await postRef.transaction((current) => (current || 0) + 1);

    console.log(`좋아요 추가: ${likeId}, postId: ${postId}`);
  }
);

/**
 * 좋아요 삭제 시 likeCount 자동 감소
 * /post-likes/{likeId} 경로에 데이터가 삭제될 때 트리거됨
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

### Cloud Functions 배포

```bash
# Firebase 함수 배포
firebase deploy --only functions
```

### 주의사항

- **트랜잭션 사용**: 동시성 문제를 방지하기 위해 transaction() 사용
- **postId 형식**: postId에 "-" 기호가 포함되면 파싱이 실패하므로 주의
- **음수 방지**: 좋아요 감소 시 Math.max()로 음수 방지

---

## Firebase 보안 규칙

좋아요 데이터에 대한 접근 권한을 제어합니다.

```json
{
  "rules": {
    "post-likes": {
      "$likeId": {
        // 인증된 사용자만 접근 가능
        ".read": "auth != null",
        // 자신의 좋아요만 쓰고 삭제 가능
        ".write": "auth != null && $likeId.beginsWith(auth.uid)",
        ".validate": "newData.val() == 1"
      }
    },
    "posts": {
      "$postId": {
        // 게시글의 likeCount는 Cloud Functions만 업데이트
        "likeCount": {
          ".write": "false"  // 클라이언트 직접 수정 금지
        }
      }
    }
  }
}
```

---

## 타입 정의 (TypeScript)

```typescript
// src/lib/types/like.ts

/**
 * 좋아요 데이터 타입
 */
export interface PostLike {
  value: 1; // 좋아요는 항상 1 (존재 여부로 판단)
}

/**
 * 좋아요 추가 결과
 */
export interface AddLikeResult {
  success: boolean;
  error?: string;
  message?: string;
}

/**
 * 좋아요 제거 결과
 */
export interface RemoveLikeResult {
  success: boolean;
  error?: string;
  message?: string;
}

/**
 * 좋아요 토글 결과
 */
export interface ToggleLikeResult {
  success: boolean;
  liked: boolean;
  error?: string;
}

/**
 * 좋아요 상태 변경 콜백
 */
export type LikeStatusCallback = (liked: boolean) => void;

/**
 * 좋아요 추가 매개변수
 */
export interface AddLikeParams {
  postId: string;
  userId: string;
}

/**
 * 좋아요 제거 매개변수
 */
export interface RemoveLikeParams {
  postId: string;
  userId: string;
}

/**
 * 좋아요 토글 매개변수
 */
export interface ToggleLikeParams {
  postId: string;
  userId: string;
}
```

---

## 주요 주의사항

### 1. 데이터 동기화

- `likeCount`와 `/post-likes/` 데이터는 항상 동기화되어야 함
- Cloud Functions를 통한 자동 동기화 권장
- 불일치 발생 시 관리자 도구로 복구 필요

### 2. 키 형식

- 반드시 `{postId}-{uid}` 형식을 준수
- postId에 "-" 기호 포함되지 않아야 함
- Cloud Functions에서 파싱이 올바르게 작동해야 함

### 3. 동시성 처리

- 여러 사용자가 동시에 좋아요를 할 때 데이터 무결성 보장
- 트랜잭션(transaction) 사용으로 원자성 보장

### 4. 오프라인 처리

- 네트워크 끊김 시 Firebase 오프라인 모드 활용
- 재연결 후 자동 동기화

---

## 참고 문서

- [Firebase Realtime Database 공식 문서](https://firebase.google.com/docs/database)
- [Firebase Cloud Functions 공식 문서](https://firebase.google.com/docs/functions)
- [게시판 개발 가이드](./sns-web-forum.md)
- [데이터베이스 구조 가이드](./sns-web-database.md)
