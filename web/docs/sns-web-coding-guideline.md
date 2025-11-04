기본적인 코딩 기법:
- 본 문서는 SNS 웹 애플리케이션 개발 시 준수해야 할 코딩 가이드라인을 제공합니다.

**⚠️ 중요 원칙**: 웹/앱 클라이언트에서는 **최소한의 정보만 RTDB에 기록**하고, **추가적인 정보 업데이트는 Firebase Cloud Functions 백엔드에서 처리**합니다.


# Firebase Realtime Database 코딩 가이드라인

Firebase Realtime Database와 상호작용하는 코드를 작성할 때에는 반드시 아래의 규칙과 예제를 따라야 합니다.

## 📚 createRealtimeStore() - 함수형 API

직관적이고 이해하기 쉬운 함수형 API로 Firebase Realtime Database 실시간 구독을 처리합니다.

### ✅ 기본 사용법

```javascript
import { createRealtimeStore } from '$lib/stores/database.js';

// 실시간 구독 (자동으로 loading, error 상태 추적)
const posts = createRealtimeStore('posts');

// $posts는 { data, loading, error } 객체
// - data: Firebase에서 가져온 데이터
// - loading: 데이터 로드 중 여부 (boolean)
// - error: 로드 중 발생한 에러 객체 (또는 null)
```

### ✅ 템플릿에서 사용하기

```svelte
<script>
  import { createRealtimeStore } from '$lib/stores/database.js';

  // 실시간 구독 생성
  const posts = createRealtimeStore('posts');
</script>

<!-- 상태에 따라 UI 렌더링 -->
{#if $posts.loading}
  <p>로딩 중...</p>
{:else if $posts.error}
  <p>에러: {$posts.error.message}</p>
{:else if $posts.data}
  {#each Object.entries($posts.data) as [key, post]}
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  {/each}
{/if}
```

### ✅ 특정 경로 구독하기

```javascript
// 사용자 데이터 실시간 구독
const user = createRealtimeStore('users/user123');

// 게시글 좋아요 상태 실시간 구독 (Flat Style)
const myLike = createRealtimeStore('post-likes/post-abc-user-xyz');
```

### ✅ 언마운트 시 구독 해제

```svelte
<script>
  import { onDestroy } from 'svelte';
  import { createRealtimeStore } from '$lib/stores/database.js';

  const posts = createRealtimeStore('posts');

  // 컴포넌트 언마운트 시 구독 해제 (메모리 누수 방지)
  onDestroy(() => {
    posts.unsubscribe();
  });
</script>
```

---

## 📝 다른 CRUD 작업

### 데이터 쓰기
```javascript
import { writeData } from '$lib/stores/database.js';

await writeData('users/123', { name: 'John', age: 30 });
```

### 데이터 업데이트
```javascript
import { updateData } from '$lib/stores/database.js';

// 특정 필드만 업데이트
await updateData('users/123', { age: 31 });
```

### 새 항목 추가 (자동 key 생성)
```javascript
import { pushData } from '$lib/stores/database.js';

const result = await pushData('posts', { title: '새 글', content: '내용' });
console.log('생성된 key:', result.key);
```

### 데이터 삭제
```javascript
import { deleteData } from '$lib/stores/database.js';

await deleteData('users/123');
```

### 한 번만 데이터 읽기
```javascript
import { readData } from '$lib/stores/database.js';

const result = await readData('users/123');
if (result.success) {
  console.log('사용자 데이터:', result.data);
}
```

### 온라인 상태 관리
```javascript
import { setupPresence } from '$lib/stores/database.js';
import { onDestroy } from 'svelte';

const userId = 'user123';

// 온라인/오프라인 상태 추적 시작
const unsubscribe = setupPresence(userId);

// 언마운트 시 정리
onDestroy(unsubscribe);
```

---

## Firebase Server Values (increment, serverTimestamp)

Firebase Realtime Database는 **Server Values**를 제공하여 서버 측에서 값을 처리할 수 있습니다. 이는 클라이언트 간 동기화 문제를 방지하고 데이터 일관성을 보장합니다.

### ⚠️ 중요: 숫자 증감 시 반드시 increment 사용

**숫자를 1씩 증가하거나 감소시킬 때는 항상 Firebase의 `increment()` Server Value를 사용해야 합니다.**

#### ❌ 잘못된 방법 - 클라이언트에서 직접 증감

```javascript
// ❌ 경쟁 조건(Race Condition) 발생 가능!
const currentValue = await get(ref(database, 'posts/abc123/likeCount'));
const newValue = (currentValue.val() || 0) + 1;
await set(ref(database, 'posts/abc123/likeCount'), newValue);

// 문제점:
// - 두 명의 사용자가 동시에 좋아요를 누르면 한 명의 좋아요가 누락될 수 있음
// - 네트워크 지연으로 인한 데이터 불일치 발생 가능
```

#### ✅ 올바른 방법 - increment() 사용

```javascript
import { ref, update } from 'firebase/database';
import { increment } from 'firebase/database';

// ✅ 서버에서 원자적(atomic)으로 처리
const updates = {};
updates['posts/abc123/likeCount'] = increment(1);  // +1 증가
await update(ref(database), updates);

// 감소는 음수 사용
updates['posts/abc123/likeCount'] = increment(-1);  // -1 감소
await update(ref(database), updates);
```

### increment() 사용 예시

#### 예시 1: 좋아요 추가 (Flat Style)

```javascript
import { database } from '$lib/firebase.js';
import { ref, update } from 'firebase/database';
import { increment } from 'firebase/database';

async function addLike(postId, userId) {
  const updates = {};

  // 1. 좋아요 상태 저장 (Flat Style: /post-likes/{postId}-{uid})
  updates[`post-likes/${postId}-${userId}`] = 1;

  // 2. 게시글의 좋아요 개수 증가 (서버에서 원자적으로 +1)
  updates[`posts/${postId}/likeCount`] = increment(1);

  // 한 번의 update 호출로 여러 경로 동시 업데이트
  await update(ref(database), updates);
}
```

#### 예시 2: 좋아요 취소 (Flat Style)

```javascript
import { database } from '$lib/firebase.js';
import { ref, update } from 'firebase/database';
import { increment } from 'firebase/database';

async function removeLike(postId, userId) {
  const updates = {};

  // 1. 좋아요 기록 삭제 (Flat Style: null로 설정하면 삭제됨)
  updates[`post-likes/${postId}-${userId}`] = null;

  // 2. 게시글의 좋아요 개수 감소 (서버에서 원자적으로 -1)
  updates[`posts/${postId}/likeCount`] = increment(-1);

  await update(ref(database), updates);
}
```

#### 예시 3: 조회수 증가 (Flat Style)

```javascript
async function incrementViewCount(postId) {
  const updates = {};
  updates[`posts/${postId}/viewCount`] = increment(1);
  await update(ref(database), updates);
}
```

### serverTimestamp() 사용

현재 서버 시간을 기록할 때는 `serverTimestamp()`를 사용합니다:

```javascript
import { serverTimestamp } from 'firebase/database';

const updates = {};
// 게시글 생성 시간 기록 (Flat Style)
updates[`posts/abc123/createdAt`] = serverTimestamp();
// 사용자 마지막 활동 시간 기록
updates[`users/${userId}/lastActiveAt`] = serverTimestamp();
await update(ref(database), updates);
```

### 장점

1. **원자성(Atomicity)**: 서버에서 단일 연산으로 처리되어 경쟁 조건 방지
2. **데이터 일관성**: 여러 클라이언트에서 동시에 요청해도 정확한 값 유지
3. **네트워크 최적화**: 현재 값을 읽지 않고 바로 증감 가능
4. **서버 시간 사용**: 클라이언트 시간 차이로 인한 오류 방지

### 주의사항

- ⚠️ `increment()`는 `set()`이 아닌 `update()`와 함께 사용해야 합니다
- ⚠️ 증감할 필드가 존재하지 않으면 자동으로 0에서 시작합니다
- ⚠️ 여러 경로를 동시에 업데이트할 때는 객체 형태로 전달합니다

---

# Firebase 로그인 사용자 관리 (login)

`login`은 현재 로그인한 사용자의 정보를 반응형으로 관리하는 Singleton 인스턴스입니다.
Firebase Auth와 Realtime Database를 자동으로 연동하여 사용자 정보를 실시간으로 동기화합니다.

## 1. Singleton 패턴

```javascript
import { login } from '$lib/utils/firebase-login-user.svelte.js';

// 애플리케이션 전체에서 동일한 인스턴스 사용
// 어디서든 import하면 같은 객체를 참조합니다
```

## 2. 반응형 상태와 Static 속성

`login` 인스턴스는 다음과 같은 속성들을 제공합니다:

### 반응형 속성 (Reactive - $state)

| 속성 | 타입 | 설명 |
|------|------|------|
| `loading` | `boolean` | 초기값 `true`, `onAuthStateChanged` 호출 후 `false` |
| `isAuthenticated` | `boolean` | 사용자 로그인 여부 |
| `data` | `any` | RTDB의 사용자 데이터 (`users/<uid>`) |
| `error` | `Error \| null` | 에러 객체 |

### Static 속성 (Non-reactive)

| 속성 | 타입 | 설명 |
|------|------|------|
| `uid` | `string \| null` | 사용자 UID (Firebase Auth) |
| `email` | `string \| null` | 사용자 이메일 (Firebase Auth) |
| `phoneNumber` | `string \| null` | 사용자 전화번호 (Firebase Auth) |

## 3. onValue() 함수 활용

`login` 인스턴스는 내부적으로 Firebase의 `onValue()` 함수를 사용하여 실시간 데이터베이스와 연동합니다:

- **자동 경로 설정**: 로그인 시 `onValue(dbRef(database, 'users/<uid>'), ...)` 자동 구독
- **실시간 동기화**: Firebase 데이터 변경 시 `data` 속성 자동 업데이트
- **자동 정리**: 로그아웃 시 onValue 리스너 자동 해제

## 4. 프로필 업데이트 메서드

Firebase Auth와 Realtime Database를 **동시에 업데이트**합니다:

```javascript
// 전체 프로필 업데이트
await login.updateProfile({
  displayName: '홍길동',
  photoURL: 'https://example.com/photo.jpg'
});

// 이름만 업데이트 (단축 메서드)
await login.updateDisplayName('홍길동');

// 사진만 업데이트 (단축 메서드)
await login.updatePhotoURL('https://example.com/photo.jpg');

// 특정 필드 업데이트
await login.updateField('bio', '안녕하세요');
```

## 5. 사용 예시

### 템플릿에서 직접 사용

```svelte
<script>
  import { login } from '$lib/utils/firebase-login-user.svelte.js';
</script>

<!-- 로딩 상태 -->
{#if login.loading}
  <p>⏳ 로딩 중...</p>

<!-- 로그인 상태 -->
{:else if login.isAuthenticated}
  <div class="user-info">
    <h2>환영합니다!</h2>
    <p>이름: {login.data?.displayName}</p>
    <p>UID: {login.uid}</p>
    <p>Email: {login.email}</p>
    <p>전화번호: {login.phoneNumber}</p>
  </div>

<!-- 로그아웃 상태 -->
{:else}
  <p>로그인이 필요합니다.</p>
  <a href="/user/login">로그인하기</a>
{/if}
```

### 프로필 업데이트 폼

```svelte
<script>
  import { login } from '$lib/utils/firebase-login-user.svelte.js';

  let displayName = $state('');
  let updating = $state(false);

  async function handleUpdate() {
    updating = true;
    try {
      await login.updateDisplayName(displayName);
      alert('프로필이 업데이트되었습니다!');
    } catch (error) {
      alert('업데이트 실패: ' + error.message);
    } finally {
      updating = false;
    }
  }
</script>

{#if login.isAuthenticated}
  <form onsubmit={handleUpdate}>
    <label>
      이름:
      <input
        type="text"
        bind:value={displayName}
        placeholder={login.data?.displayName}
      />
    </label>
    <button type="submit" disabled={updating}>
      {updating ? '업데이트 중...' : '프로필 업데이트'}
    </button>
  </form>
{/if}
```

### 인증 완료까지 대기

```javascript
// 페이지 로드 시 인증 상태 확인 (loading이 false가 될 때까지 대기)
// login 인스턴스는 자동으로 초기화되므로, loading 상태를 확인하면 됩니다

// 방법 1: 템플릿에서 loading 체크
{#if login.loading}
  <p>로딩 중...</p>
{:else if login.isAuthenticated}
  <p>UID: {login.uid}</p>
{/if}

// 방법 2: 스크립트에서 사용 (즉시 실행)
if (login.isAuthenticated) {
  console.log('사용자가 로그인되어 있습니다');
  console.log('UID:', login.uid);
} else {
  console.log('로그아웃 상태입니다');
}
```

## 6. 고급 사용법

### 에러 처리

```javascript
// 에러 발생 시
if (login.error) {
  console.error('Firebase 에러:', login.error.message);
}
```

## 7. 주의사항

### ❌ Destructuring 사용 금지

```javascript
// ❌ 잘못된 방법 - 반응성 손실
const { isAuthenticated, data } = login;

// ✅ 올바른 방법 - 객체 자체 사용
if (login.isAuthenticated) {
  console.log(login.data);
}
```

### ✅ 항상 최신 인스턴스 사용

```javascript
// ✅ import 후 바로 사용
import { login } from '$lib/utils/firebase-login-user.svelte.js';

// ❌ 새 인스턴스 생성 시도하지 않기
// const loginUser = new FirebaseLoginUser(); // 불가능!
```

## 8. 라이프사이클

1. **초기화** (`loading = true`)
   - 브라우저 환경에서 자동 초기화
   - `onAuthStateChanged()` 리스너 등록

2. **로그인 감지**
   - Firebase Auth에서 사용자 감지
   - `isAuthenticated = true`
   - static 속성 업데이트: `uid`, `email`, `phoneNumber`
   - `onValue(dbRef(database, 'users/<uid>'), ...)` 자동 구독
   - 실시간 데이터 동기화 시작

3. **로그아웃 감지**
   - `isAuthenticated = false`
   - static 속성 초기화: `uid = null`, `email = null`, `phoneNumber = null`
   - `data = null`
   - onValue 리스너 자동 해제

4. **정리** (선택사항)
   ```javascript
   // 필요 시 수동 정리
   login.dispose();
   ```

---

## 9. login과 createRealtimeStore() 함께 사용하기

`login` 인스턴스는 현재 로그인한 사용자를 관리하지만, 필요에 따라 다른 사용자나 데이터를 조회하기 위해 별도의 `createRealtimeStore()` 인스턴스를 함께 사용할 수 있습니다.

### 사용 예시: 현재 사용자 + 특정 사용자 데이터 조회

```svelte
<script>
  import { login } from '$lib/utils/firebase-login-user.svelte.js';
  import { createRealtimeStore } from '$lib/stores/database.js';
  // 또는 alias 사용: import { rtdb } from '$lib/stores/database.js';

  // 현재 로그인 사용자 (login 사용)
  // - login.uid, email, phoneNumber: Firebase Auth 정보 (static)
  // - login.data: RTDB의 users/<uid> 데이터 (reactive)

  // 특정 사용자 데이터 조회 (별도 createRealtimeStore 인스턴스 사용)
  const userProfile = createRealtimeStore('users/apple');
  // 또는 더 짧게: const userProfile = rtdb('users/apple');
</script>

<!-- 현재 로그인 사용자 정보 표시 -->
{#if login.loading}
  <p>⏳ 로딩 중...</p>
{:else if login.isAuthenticated}
  <div class="user-info">
    <h2>환영합니다!</h2>

    <!-- login의 데이터 사용 -->
    <p>이름: {login.data?.displayName}</p>
    <p>UID: {login.uid}</p>
    <p>Email: {login.email}</p>
    <p>전화번호: {login.phoneNumber}</p>

    <!-- 별도 createRealtimeStore 인스턴스의 데이터 사용 -->
    {#if $userProfile.loading}
      <p>다른 사용자 정보 로딩 중...</p>
    {:else if $userProfile.error}
      <p>에러: {$userProfile.error.message}</p>
    {:else if $userProfile.data}
      <p>사용자 가입일: {$userProfile.data.createdAt}</p>
    {/if}
  </div>
{:else}
  <p>로그인이 필요합니다.</p>
  <a href="/user/login">로그인하기</a>
{/if}
```

### 언제 이 패턴을 사용하나요?

- ✅ **현재 사용자 + 다른 사용자 정보**: 프로필 비교, 친구 정보 표시 등
- ✅ **현재 사용자 + 추가 컬렉션**: 게시물, 댓글, 알림 등 별도 경로의 데이터
- ✅ **여러 경로의 실시간 데이터**: 각각 독립적으로 구독 관리

### 주의사항

- `login` 인스턴스는 항상 현재 로그인한 사용자의 `users/<uid>` 경로만 관리합니다
- 다른 경로나 다른 사용자 데이터가 필요하면 별도의 `createRealtimeStore()` 인스턴스를 생성하세요
- 각 `createRealtimeStore()` 인스턴스는 독립적으로 상태(`data`, `loading`, `error`)를 관리합니다
- `rtdb()`는 `createRealtimeStore()`의 alias이므로 둘 다 사용 가능합니다

---

## 10. 요약

- ✅ **Singleton 패턴**: 전역에서 하나의 인스턴스만 사용
- ✅ **반응형 상태**: `$state` 기반 자동 UI 업데이트 (loading, isAuthenticated, data, error)
- ✅ **Static 속성**: 반응형이 필요 없는 Auth 정보 (uid, email, phoneNumber)
- ✅ **자동 동기화**: Firebase Auth + RTDB onValue() 자동 연동
- ✅ **간편한 API**: 직관적인 메서드 제공 (updateProfile, updateDisplayName 등)
- ❌ **Destructuring 금지**: 반응형 속성의 반응성 손실 방지

---

# DatabaseListView 컴포넌트 코딩 가이드라인

`DatabaseListView`는 Firebase Realtime Database의 데이터를 무한 스크롤 방식으로 표시하는 재사용 가능한 컴포넌트입니다.

## 1. 개요

- **목적**: Firebase RTDB 데이터를 페이지네이션과 무한 스크롤로 표시
- **특징**:
  - 자동 스크롤 감지 (컨테이너 스크롤 + window 스크롤)
  - 실시간 데이터 동기화 (`onValue` 기반)
  - Svelte 5 Runes 기반 반응형 상태 관리
  - 커스터마이징 가능한 snippet 지원

## 2. 기본 사용법

```svelte
<script>
  import DatabaseListView from '$lib/components/DatabaseListView.svelte';
</script>

<DatabaseListView
  path="users"
  pageSize={10}
  orderBy="createdAt"
  threshold={300}
  reverse={false}
>
  {#snippet item(itemData)}
    <div class="item-card">
      <h3>{itemData.data.displayName}</h3>
      <p>{itemData.data.email}</p>
    </div>
  {/snippet}
</DatabaseListView>
```

## 3. Props 설명

| Prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `path` | `string` | (필수) | Firebase RTDB 경로 (예: `"users"`, `"posts/community"`) |
| `pageSize` | `number` | `10` | 한 번에 가져올 아이템 개수 |
| `orderBy` | `string` | `"createdAt"` | 정렬 기준 필드 |
| `sortPrefix` | `string` | `""` | 정렬 필드의 prefix 값으로 필터링 (예: `"community-"`) - 선택 사항 |
| `threshold` | `number` | `300` | 스크롤 threshold (px) - 바닥에서 이 거리만큼 떨어지면 다음 페이지 로드 |
| `reverse` | `boolean` | `false` | 역순 정렬 여부 |

## 4. Snippets

DatabaseListView는 다양한 상태에 대한 커스터마이징 가능한 snippet을 제공합니다:

- `item(itemData, index)` - 각 아이템 렌더링
- `loading()` - 초기 로딩 상태
- `empty()` - 데이터 없음 상태
- `error(errorMessage)` - 에러 상태
- `loadingMore()` - 더 로드 중 상태
- `noMore()` - 더 이상 데이터 없음 상태

## 5. sortPrefix와 startAt(false) 필터링

DatabaseListView는 Firebase 쿼리에서 **자동으로 null/undefined 값을 필터링**합니다.

### 📌 기본 동작 (sortPrefix가 없는 경우)

`sortPrefix`를 제공하지 않으면 `startAt(false)`가 자동으로 추가되어 **orderBy 필드가 null 또는 undefined인 항목을 제외**합니다.

```svelte
<DatabaseListView
  path="users"
  orderBy="createdAt"
  pageSize={10}
/>
```

**Firebase 쿼리 결과**:
- ✅ `createdAt` 필드가 있는 항목만 조회됨
- ❌ `createdAt` 필드가 `null` 또는 `undefined`인 항목은 제외됨
- ✅ 숫자 타입인 경우 **가장 작은 값부터 정렬**됨

**내부 쿼리**:
```javascript
query(
  baseRef,
  orderByChild('createdAt'),
  startAt(false),  // ← null/undefined 필터링
  limitToFirst(10)
)
```

### 📌 sortPrefix를 사용하는 경우

`sortPrefix`를 제공하면 해당 prefix로 시작하는 값만 필터링합니다:

```svelte
<DatabaseListView
  path="posts"
  orderBy="categoryKey"
  sortPrefix="community-"
  pageSize={20}
/>
```

**Firebase 쿼리 결과**:
- ✅ `categoryKey`가 `"community-"`로 시작하는 항목만 조회됨
- ❌ `categoryKey`가 `"qna-"`, `"news-"` 등인 항목은 제외됨
- ❌ `categoryKey`가 `null` 또는 `undefined`인 항목도 제외됨

**내부 쿼리**:
```javascript
query(
  baseRef,
  orderByChild('categoryKey'),
  startAt('community-'),
  endAt('community-\uf8ff'),  // ← prefix 범위 필터링
  limitToFirst(20)
)
```

### 📌 startAt(false)가 필요한 이유

Firebase Realtime Database의 `orderByChild()` 쿼리는 기본적으로 **null 값을 포함**합니다. 이로 인해:

1. **페이지네이션 오류 발생**
   - `orderBy` 필드가 없는 항목이 커서 값으로 사용됨
   - 다음 페이지 로드 시 타입 불일치 에러 발생

2. **불완전한 데이터 표시**
   - 정렬 필드가 없는 항목이 리스트에 포함됨
   - UI에서 의미 없는 데이터가 표시됨

3. **성능 저하**
   - 불필요한 데이터를 네트워크로 전송
   - 클라이언트에서 추가 필터링 필요

**`startAt(false)` 사용 시**:
- ✅ Firebase 쿼리 단계에서 null/undefined 항목 제외
- ✅ 네트워크 비용 절감 (불필요한 데이터 전송 방지)
- ✅ 정확한 페이지네이션 동작 보장
- ✅ 타입 안전성 확보 (커서 값이 항상 유효함)

### 📌 사용 예시

#### 예시 1: 사용자 목록 (createdAt 기준 정렬)

```svelte
<DatabaseListView
  path="users"
  orderBy="createdAt"
  pageSize={15}
>
  {#snippet item(itemData)}
    <div class="user-card">
      <h3>{itemData.data.displayName}</h3>
      <p>가입일: {new Date(itemData.data.createdAt).toLocaleDateString()}</p>
    </div>
  {/snippet}
</DatabaseListView>
```

**결과**:
- ✅ `createdAt` 필드가 있는 사용자만 표시
- ✅ 가장 오래된 사용자부터 정렬 (작은 timestamp → 큰 timestamp)
- ❌ `createdAt`가 없는 사용자는 리스트에서 제외

#### 예시 2: 게시글 목록 (카테고리별 필터링)

```svelte
<DatabaseListView
  path="posts"
  orderBy="categoryKey"
  sortPrefix="community-"
  reverse={true}
  pageSize={20}
>
  {#snippet item(itemData)}
    <div class="post-card">
      <h3>{itemData.data.title}</h3>
      <p>{itemData.data.content}</p>
    </div>
  {/snippet}
</DatabaseListView>
```

**결과**:
- ✅ `categoryKey`가 `"community-"`로 시작하는 게시글만 표시
- ✅ 카테고리 prefix가 다른 게시글은 제외
- ✅ `reverse={true}`로 최신 글부터 표시

### 📌 주의사항

#### ⚠️ orderBy 필드는 반드시 존재해야 함

DatabaseListView를 사용하려면 **모든 아이템이 orderBy 필드를 가지고 있어야** 합니다:

```javascript
// ❌ 잘못된 데이터 구조 - createdAt 필드 누락
{
  "users": {
    "user1": {
      "displayName": "홍길동",
      // createdAt 없음!
    }
  }
}

// ✅ 올바른 데이터 구조 - createdAt 필드 포함
{
  "users": {
    "user1": {
      "displayName": "홍길동",
      "createdAt": 1234567890123
    }
  }
}
```

#### ⚠️ 자동 필드 생성 권장

사용자 생성 시 `createdAt`, `updatedAt` 같은 필드를 자동으로 생성하는 것이 좋습니다:

- **클라이언트 측**: `firebase-login-user.svelte.js`에서 자동 생성
- **서버 측**: Firebase Cloud Functions의 `onUserRegister`에서 자동 생성

참고: [firebase-login-user.svelte.js](../src/lib/utils/firebase-login-user.svelte.js) (lines 168-188)

## 6. 스크롤 방식 선택

DatabaseListView는 두 가지 스크롤 방식을 지원합니다:

### 방식 1: Body 스크롤 (전체 페이지 무한 스크롤)

**사용 시기**:
- 전체 페이지를 스크롤하며 무한 스크롤을 구현하고 싶을 때
- 페이지 전체가 리스트로 구성될 때
- 자연스러운 네이티브 스크롤 경험을 제공하고 싶을 때

**구현 방법**:

```svelte
<script>
  import DatabaseListView from '$lib/components/DatabaseListView.svelte';
</script>

<!-- 래퍼 없이 직접 마운트 -->
<DatabaseListView
  path="users"
  pageSize={15}
  orderBy="createdAt"
>
  {#snippet item(itemData)}
    <div class="user-card">
      <!-- 아이템 내용 -->
    </div>
  {/snippet}
</DatabaseListView>

<style>
  /* 아이템 스타일만 정의 */
  .user-card {
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
  }
</style>
```

**장점**:
- ✅ 자연스러운 스크롤 경험
- ✅ 높이 제한 없음
- ✅ 코드가 간단함

**단점**:
- ❌ 페이지 레이아웃 제어가 어려움
- ❌ 다른 컨텐츠와 함께 배치하기 어려움

### 방식 2: 컨테이너 스크롤 (제한된 영역에서 무한 스크롤)

**사용 시기**:
- 특정 영역에만 리스트를 표시하고 싶을 때
- 페이지 내 다른 컨텐츠와 함께 배치할 때
- 고정된 높이의 리스트 영역이 필요할 때

**구현 방법**:

```svelte
<script>
  import DatabaseListView from '$lib/components/DatabaseListView.svelte';
</script>

<!-- 래퍼 컨테이너로 감싸기 -->
<div class="user-list-container">
  <DatabaseListView
    path="users"
    pageSize={10}
    orderBy="createdAt"
  >
    {#snippet item(itemData)}
      <div class="user-card">
        <!-- 아이템 내용 -->
      </div>
    {/snippet}
  </DatabaseListView>
</div>

<style>
  /* 래퍼 컨테이너에 높이와 스크롤 설정 */
  .user-list-container {
    /* 고정 높이 설정 */
    height: 600px;

    /* 또는 뷰포트 기준 높이 (topbar 높이 4rem 제외) */
    /* height: calc(100vh - 4rem); */

    /* 스크롤 활성화 */
    overflow-y: auto;
    overflow-x: hidden;

    /* 스타일링 (선택사항) */
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    background-color: #ffffff;
  }

  /* 아이템 스타일 */
  .user-card {
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
  }
</style>
```

**장점**:
- ✅ 페이지 레이아웃 제어 가능
- ✅ 다른 컨텐츠와 함께 배치 가능
- ✅ 고정된 영역에 리스트 표시

**단점**:
- ❌ 컨테이너 높이를 명시적으로 설정해야 함
- ❌ 스크롤이 두 개 생길 수 있음 (페이지 스크롤 + 컨테이너 스크롤)

## 7. 컨테이너 높이 설정 방법

### 고정 높이

```css
.list-container {
  height: 500px;  /* 픽셀 단위 */
  overflow-y: auto;
}
```

### 뷰포트 기준 높이

```css
.list-container {
  /* 전체 뷰포트 높이 */
  height: 100vh;

  /* topbar(4rem) 제외 */
  height: calc(100vh - 4rem);

  /* topbar(4rem) + 여백 제외 */
  height: calc(100vh - 6rem);

  overflow-y: auto;
}
```

### Flexbox를 사용한 자동 높이

```css
.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  flex-shrink: 0;  /* 헤더는 고정 */
}

.list-container {
  flex: 1;  /* 남은 공간을 모두 차지 */
  overflow-y: auto;
}
```

## 8. 실전 예제

### 예제 1: Body 스크롤 (사용자 목록 페이지)

```svelte
<script>
  import DatabaseListView from '../lib/components/DatabaseListView.svelte';
  import { login } from '../lib/utils/firebase-login-user.svelte.js';

  function goToProfile(uid) {
    window.history.pushState({}, '', `/user/profile/${uid}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
</script>

<!-- 래퍼 없이 직접 마운트 -->
<DatabaseListView
  path="users"
  pageSize={15}
  orderBy="createdAt"
  threshold={300}
>
  {#snippet item(itemData)}
    <div
      class="user-card"
      onclick={() => goToProfile(itemData.key)}
    >
      <img src={itemData.data?.photoUrl} alt="프로필" />
      <div>
        <h3>{itemData.data?.displayName}</h3>
        <p>{itemData.data?.email}</p>
      </div>
    </div>
  {/snippet}

  {#snippet loading()}
    <div class="loading">로딩 중...</div>
  {/snippet}

  {#snippet empty()}
    <div class="empty">사용자가 없습니다.</div>
  {/snippet}
</DatabaseListView>

<style>
  .user-card {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
    cursor: pointer;
  }

  .user-card:hover {
    background-color: #f9fafb;
  }
</style>
```

### 예제 2: 컨테이너 스크롤 (채팅 목록)

```svelte
<script>
  import DatabaseListView from '../lib/components/DatabaseListView.svelte';
</script>

<div class="page-layout">
  <!-- 헤더 -->
  <div class="header">
    <h1>채팅 목록</h1>
    <button>새 채팅</button>
  </div>

  <!-- 채팅 리스트 (스크롤 영역) -->
  <div class="chat-list-container">
    <DatabaseListView
      path="chats"
      pageSize={20}
      orderBy="lastMessageAt"
      reverse={true}
    >
      {#snippet item(itemData)}
        <div class="chat-item">
          <img src={itemData.data?.avatar} alt="프로필" />
          <div>
            <h3>{itemData.data?.title}</h3>
            <p>{itemData.data?.lastMessage}</p>
          </div>
        </div>
      {/snippet}
    </DatabaseListView>
  </div>
</div>

<style>
  .page-layout {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 4rem);  /* topbar 제외 */
  }

  .header {
    flex-shrink: 0;
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
  }

  .chat-list-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .chat-item {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
  }
</style>
```

## 9. 주의사항

### ⚠️ 컨테이너 높이 설정 필수

컨테이너 스크롤 방식을 사용할 때는 **반드시** 래퍼 컨테이너에 명시적인 높이를 설정해야 합니다:

```css
/* ❌ 잘못된 예 - 높이 없음 */
.list-container {
  overflow-y: auto;  /* 높이가 없으면 스크롤 안 됨! */
}

/* ✅ 올바른 예 */
.list-container {
  height: 600px;  /* 또는 calc(100vh - 4rem) */
  overflow-y: auto;
}
```

### ⚠️ box-sizing 고려

패딩이나 보더를 포함한 높이 계산이 필요하면 `box-sizing`을 설정하세요:

```css
.list-container {
  height: calc(100vh - 4rem);
  padding: 1rem;
  box-sizing: border-box;  /* 패딩을 높이에 포함 */
  overflow-y: auto;
}
```

### ⚠️ 스크롤 감지 방식

DatabaseListView는 두 가지 스크롤을 **모두** 감지합니다:
- **컨테이너 스크롤**: 래퍼 div의 내부 스크롤
- **Window 스크롤**: body의 네이티브 스크롤

따라서 두 방식 중 어떤 것을 사용해도 무한 스크롤이 정상 작동합니다.

## 10. 선택 가이드

| 요구사항 | 추천 방식 |
|---------|----------|
| 전체 페이지가 리스트인 경우 | Body 스크롤 |
| 다른 컨텐츠와 함께 배치 | 컨테이너 스크롤 |
| 고정 헤더/푸터 필요 | 컨테이너 스크롤 |
| 심플한 구현 원함 | Body 스크롤 |
| 복잡한 레이아웃 | 컨테이너 스크롤 |
| 모바일 네이티브 느낌 | Body 스크롤 |

## 11. 요약

- ✅ **자동 null/undefined 필터링**: sortPrefix가 없으면 startAt(false) 자동 적용
- ✅ **sortPrefix 지원**: prefix 기반 범위 쿼리 지원
- ✅ **두 가지 스크롤 방식**: Body 스크롤 (전체 페이지) vs 컨테이너 스크롤 (제한된 영역)
- ✅ **자동 감지**: 두 방식 모두 자동으로 감지하여 무한 스크롤 작동
- ✅ **높이 설정 필수**: 컨테이너 스크롤 사용 시 명시적인 높이 설정 필요
- ✅ **Flexbox 활용**: flex를 사용하면 동적 높이 계산 가능
- ✅ **용도별 선택**: 페이지 구조와 요구사항에 맞는 방식 선택