# 친구 관계 관리 개발 가이드

본 문서는 SNS 웹 애플리케이션에서 친구 관계, 팔로잉, 팔로워 기능을 구현하는 데 필요한 지침과 로직을 제공합니다.

---

## 개요

SNS 애플리케이션에서는 사용자 간의 관계를 관리하기 위해 다음 세 가지 데이터 구조를 사용합니다:

- **friends**: 상호 친구 관계
- **followers**: 나를 팔로우하는 사용자들
- **following**: 내가 팔로우하는 사용자들

각 관계는 양방향 또는 단방향으로 관리되며, Firebase Realtime Database를 사용하여 실시간으로 동기화됩니다.

---

## 친구 관계 데이터 구조

친구 관계 데이터는 `/friends/`, `/followers/`, `/following/` 경로 아래에 저장됩니다.

```json
{
  "friends": {
    "<login-user-uid>": {
      "<other-user-uid-1>": 1698474000000,
      "<other-user-uid-2>": 1698475000000
    }
  },
  "followers": {
    "<my-uid>": {
      "<other-user-uid-3>": 1698476000000
    }
  },
  "following": {
    "<my-uid>": {
      "<other-user-uid-4>": 1698477000000
    }
  }
}
```

### 각 데이터 경로의 의미

| 경로 | 설명 | 관계 유형 |
|------|------|----------|
| `friends/<uid>/` | 특정 사용자의 친구 목록 | 양방향 (상호) |
| `followers/<uid>/` | 특정 사용자를 팔로우하는 사용자 목록 | 단방향 (수신) |
| `following/<uid>/` | 특정 사용자가 팔로우하는 사용자 목록 | 단방향 (발신) |

### 데이터 값

- 각 항목의 값은 관계가 형성된 **Unix timestamp (밀리초)**입니다
- timestamp는 관계 형성 시간을 추적하고, 관계 목록을 시간순으로 정렬하는 데 사용됩니다

---

## 친구 관계 타입 정의

```typescript
// src/lib/types/friend.ts

/**
 * 친구 정보
 */
export interface Friend {
  uid: string;
  timestamp: number;
}

/**
 * 팔로워 정보
 */
export interface Follower {
  uid: string;
  timestamp: number;
}

/**
 * 팔로잉 정보
 */
export interface Following {
  uid: string;
  timestamp: number;
}

/**
 * 친구 관계 상태
 */
export interface FriendshipStatus {
  isFriend: boolean;
  isFollower: boolean;
  isFollowing: boolean;
}

/**
 * 친구 추가 결과
 */
export interface AddFriendResult {
  success: boolean;
  error?: string;
}

/**
 * 친구 제거 결과
 */
export interface RemoveFriendResult {
  success: boolean;
  error?: string;
}
```

---

## 친구 관계 API 함수

### 1. 친구 추가

친구 관계를 형성하면 양쪽 사용자 모두에게 친구가 추가됩니다.

```javascript
import { ref, update } from 'firebase/database';
import { database } from '../utils/firebase.js';

/**
 * 사용자를 친구로 추가
 * 양방향 관계 형성: friends/{myUid}/{otherUid}와 friends/{otherUid}/{myUid} 모두 생성
 *
 * @param {string} myUid - 현재 사용자 ID
 * @param {string} otherUid - 친구로 추가할 사용자 ID
 * @returns {Promise<Object>} { success, error }
 */
async function addFriend(myUid, otherUid) {
  try {
    if (myUid === otherUid) {
      return { success: false, error: '자신을 친구로 추가할 수 없습니다' };
    }

    const timestamp = Date.now();
    const updates = {};

    // 양방향 친구 관계 생성
    updates[`friends/${myUid}/${otherUid}`] = timestamp;
    updates[`friends/${otherUid}/${myUid}`] = timestamp;

    await update(ref(database), updates);

    return { success: true };
  } catch (error) {
    console.error('친구 추가 실패:', error);
    return { success: false, error: error.message };
  }
}
```

### 2. 친구 제거

친구 관계를 해제하면 양쪽 사용자 모두에게서 친구가 제거됩니다.

```javascript
/**
 * 친구 제거
 * 양방향 관계 삭제: friends/{myUid}/{otherUid}와 friends/{otherUid}/{myUid} 모두 삭제
 *
 * @param {string} myUid - 현재 사용자 ID
 * @param {string} otherUid - 친구 제거할 사용자 ID
 * @returns {Promise<Object>} { success, error }
 */
async function removeFriend(myUid, otherUid) {
  try {
    const updates = {};

    // 양방향 친구 관계 삭제 (null로 설정)
    updates[`friends/${myUid}/${otherUid}`] = null;
    updates[`friends/${otherUid}/${myUid}`] = null;

    await update(ref(database), updates);

    return { success: true };
  } catch (error) {
    console.error('친구 제거 실패:', error);
    return { success: false, error: error.message };
  }
}
```

### 3. 친구 여부 확인

사용자 간의 친구 관계 여부를 확인합니다.

```javascript
import { ref, get } from 'firebase/database';

/**
 * 친구 관계 여부 확인
 *
 * @param {string} myUid - 현재 사용자 ID
 * @param {string} otherUid - 확인할 사용자 ID
 * @returns {Promise<boolean>} true: 친구, false: 친구 아님
 */
async function isFriend(myUid, otherUid) {
  try {
    const friendRef = ref(database, `friends/${myUid}/${otherUid}`);
    const snapshot = await get(friendRef);

    return snapshot.exists();
  } catch (error) {
    console.error('친구 여부 확인 실패:', error);
    return false;
  }
}
```

### 4. 친구 목록 조회 (실시간)

사용자의 전체 친구 목록을 실시간으로 조회합니다.

```javascript
import { ref, query, orderByValue, onValue } from 'firebase/database';

/**
 * 사용자의 친구 목록을 실시간으로 조회
 * timestamp 순서로 정렬 (최신순)
 *
 * @param {string} uid - 사용자 ID
 * @param {Function} callback - 친구 목록 변경 시 호출될 콜백 함수
 * @returns {Function} 구독 해제 함수
 */
function listenToFriends(uid, callback) {
  const friendsRef = ref(database, `friends/${uid}`);

  // timestamp로 정렬 (최신순)
  const q = query(friendsRef, orderByValue(), limitToLast(100));

  const unsubscribe = onValue(q, (snapshot) => {
    const friends = [];

    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        friends.unshift({
          uid: childSnapshot.key,
          timestamp: childSnapshot.val()
        });
      });
    }

    callback(friends);
  });

  return unsubscribe;
}
```

### 5. 팔로우 하기

단방향 팔로우 관계를 형성합니다. (상호 친구가 아닌 경우)

```javascript
/**
 * 사용자를 팔로우
 * 단방향 관계: following/{myUid}/{otherUid} 생성, followers/{otherUid}/{myUid} 생성
 *
 * @param {string} myUid - 현재 사용자 ID
 * @param {string} otherUid - 팔로우할 사용자 ID
 * @returns {Promise<Object>} { success, error }
 */
async function followUser(myUid, otherUid) {
  try {
    if (myUid === otherUid) {
      return { success: false, error: '자신을 팔로우할 수 없습니다' };
    }

    const timestamp = Date.now();
    const updates = {};

    // 단방향 팔로우 관계 생성
    updates[`following/${myUid}/${otherUid}`] = timestamp;
    updates[`followers/${otherUid}/${myUid}`] = timestamp;

    await update(ref(database), updates);

    return { success: true };
  } catch (error) {
    console.error('팔로우 실패:', error);
    return { success: false, error: error.message };
  }
}
```

### 6. 팔로우 해제

팔로우 관계를 해제합니다.

```javascript
/**
 * 사용자 팔로우 해제
 *
 * @param {string} myUid - 현재 사용자 ID
 * @param {string} otherUid - 팔로우 해제할 사용자 ID
 * @returns {Promise<Object>} { success, error }
 */
async function unfollowUser(myUid, otherUid) {
  try {
    const updates = {};

    // 팔로우 관계 삭제
    updates[`following/${myUid}/${otherUid}`] = null;
    updates[`followers/${otherUid}/${myUid}`] = null;

    await update(ref(database), updates);

    return { success: true };
  } catch (error) {
    console.error('팔로우 해제 실패:', error);
    return { success: false, error: error.message };
  }
}
```

### 7. 팔로워 목록 조회 (실시간)

나를 팔로우하는 사용자 목록을 실시간으로 조회합니다.

```javascript
/**
 * 팔로워 목록 실시간 조회
 *
 * @param {string} uid - 사용자 ID
 * @param {Function} callback - 팔로워 목록 변경 시 호출될 콜백 함수
 * @returns {Function} 구독 해제 함수
 */
function listenToFollowers(uid, callback) {
  const followersRef = ref(database, `followers/${uid}`);

  const q = query(followersRef, orderByValue(), limitToLast(100));

  const unsubscribe = onValue(q, (snapshot) => {
    const followers = [];

    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        followers.unshift({
          uid: childSnapshot.key,
          timestamp: childSnapshot.val()
        });
      });
    }

    callback(followers);
  });

  return unsubscribe;
}
```

### 8. 팔로잉 목록 조회 (실시간)

내가 팔로우하는 사용자 목록을 실시간으로 조회합니다.

```javascript
/**
 * 팔로잉 목록 실시간 조회
 *
 * @param {string} uid - 사용자 ID
 * @param {Function} callback - 팔로잉 목록 변경 시 호출될 콜백 함수
 * @returns {Function} 구독 해제 함수
 */
function listenToFollowing(uid, callback) {
  const followingRef = ref(database, `following/${uid}`);

  const q = query(followingRef, orderByValue(), limitToLast(100));

  const unsubscribe = onValue(q, (snapshot) => {
    const following = [];

    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        following.unshift({
          uid: childSnapshot.key,
          timestamp: childSnapshot.val()
        });
      });
    }

    callback(following);
  });

  return unsubscribe;
}
```

### 9. 관계 상태 조회

특정 사용자와의 모든 관계 상태를 한 번에 조회합니다.

```javascript
/**
 * 사용자와의 관계 상태 조회
 *
 * @param {string} myUid - 현재 사용자 ID
 * @param {string} otherUid - 대상 사용자 ID
 * @returns {Promise<Object>} { isFriend, isFollower, isFollowing }
 */
async function getFriendshipStatus(myUid, otherUid) {
  try {
    const isFriendRef = ref(database, `friends/${myUid}/${otherUid}`);
    const isFollowerRef = ref(database, `followers/${myUid}/${otherUid}`);
    const isFollowingRef = ref(database, `following/${myUid}/${otherUid}`);

    const [friendSnapshot, followerSnapshot, followingSnapshot] = await Promise.all([
      get(isFriendRef),
      get(isFollowerRef),
      get(isFollowingRef)
    ]);

    return {
      isFriend: friendSnapshot.exists(),
      isFollower: followerSnapshot.exists(),
      isFollowing: followingSnapshot.exists()
    };
  } catch (error) {
    console.error('관계 상태 조회 실패:', error);
    return {
      isFriend: false,
      isFollower: false,
      isFollowing: false
    };
  }
}
```

---

## Firebase 보안 규칙

친구 관계 데이터에 대한 접근 권한을 제어합니다.

```json
{
  "rules": {
    "friends": {
      "$uid": {
        // 인증된 사용자만 읽기 가능
        ".read": "auth != null",
        // 자신의 친구 목록만 수정 가능
        ".write": "auth != null && $uid == auth.uid"
      }
    },
    "followers": {
      "$uid": {
        ".read": "auth != null",
        // 팔로우를 당하는 사용자는 수정 불가 (팔로우하는 사용자가 수정)
        ".write": false
      },
      "$uid": {
        "$followerUid": {
          // 팔로우하는 사용자만 자신의 팔로워 관계 삭제 가능
          ".write": "auth != null && $followerUid == auth.uid"
        }
      }
    },
    "following": {
      "$uid": {
        ".read": "auth != null",
        // 자신의 팔로잉 목록만 수정 가능
        ".write": "auth != null && $uid == auth.uid"
      }
    }
  }
}
```

---

## Svelte 컴포넌트 예시

### 친구 목록 표시 컴포넌트

```svelte
<script>
  import { onMount } from 'svelte';
  import { listenToFriends } from '$lib/services/friend.js';

  let userId = 'user-uid-123';
  let friends = $state([]);

  onMount(() => {
    // 친구 목록 실시간 구독
    const unsubscribe = listenToFriends(userId, (friendList) => {
      friends = friendList;
    });

    // 컴포넌트 언마운트 시 구독 해제
    return () => unsubscribe();
  });
</script>

<div class="friends-list">
  <h2>친구 ({friends.length})</h2>

  {#if friends.length === 0}
    <p class="empty-state">친구가 없습니다</p>
  {:else}
    <ul>
      {#each friends as friend (friend.uid)}
        <li class="friend-item">
          <div class="friend-info">
            <span class="friend-name">{friend.uid}</span>
            <span class="friend-date">
              {new Date(friend.timestamp).toLocaleDateString()}
            </span>
          </div>
          <button
            class="btn-remove"
            on:click={() => handleRemoveFriend(friend.uid)}
          >
            친구 제거
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .friends-list {
    padding: 1rem;
  }

  .empty-state {
    color: #999;
    text-align: center;
  }

  .friend-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    border-bottom: 1px solid #eee;
  }

  .friend-info {
    display: flex;
    flex-direction: column;
  }

  .friend-name {
    font-weight: 500;
  }

  .friend-date {
    font-size: 0.85rem;
    color: #999;
  }

  .btn-remove {
    padding: 0.5rem 1rem;
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn-remove:hover {
    background-color: #ff5252;
  }
</style>
```

---

## 주요 주의사항

### 1. 양방향 동기화

- 친구 관계는 양쪽 모두에 저장되므로 항상 동기화되어야 함
- 한쪽만 업데이트되면 데이터 불일치 발생

### 2. 사용자 ID 검증

- 자신을 친구로 추가하거나 팔로우하려는 경우 반드시 체크
- 존재하지 않는 사용자 ID에 대한 검증도 필요

### 3. Timestamp 활용

- timestamp를 사용하여 관계 목록을 시간순으로 정렬
- 최신 관계부터 표시 가능

### 4. 성능 최적화

- 친구/팔로워가 많은 경우 pagination 고려
- `limitToLast()`로 최근 N개의 관계만 조회하는 방식도 효과적

### 5. 오프라인 처리

- Firebase의 오프라인 모드 활용
- 재연결 후 자동 동기화

---

## 참고 문서

- [Firebase Realtime Database 공식 문서](https://firebase.google.com/docs/database)
- [데이터베이스 구조 가이드](./sns-web-database.md)
- [사용자 관리 개발 가이드](./sns-web-user.md)
- [Svelte Custom Elements 개발 가이드](./sns-custom-elements.md)
