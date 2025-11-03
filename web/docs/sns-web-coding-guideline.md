기본적인 코딩 기법:
- 본 문서는 SNS 웹 애플리케이션 개발 시 준수해야 할 코딩 가이드라인을 제공합니다.





# Firebase Realtime Database 코딩 가이드라인
- Firebase Realtime Database와 상호작용하는 코드를 작성할 때에는 반드시 아래의 규칙과 예제를 따라야 합니다.

## ⚠️ 중요: Svelte 5 반응성 주의사항

### Destructuring은 반응성을 끊습니다!

**Svelte 5에서 `$state` 객체를 destructuring하면 반응성이 손실됩니다.**

```javascript
// ❌ 잘못된 방법 - 반응성 손실
const { data, loading, error } = rtdb("/users/apple");

// 화면이 업데이트되지 않습니다!
// data, loading, error는 그 순간의 값만 가지고 있습니다.
```

```javascript
// ✅ 올바른 방법 - 반응성 유지
const userRtdb = rtdb("/users/apple");

// 객체 자체를 저장하고, 속성으로 접근합니다.
// userRtdb.data, userRtdb.loading, userRtdb.error
```

### 템플릿에서 사용하기

```svelte
<script>
  // ✅ 올바른 방법
  const userRtdb = rtdb("/users/apple");
</script>

<!-- 템플릿에서 객체 속성으로 직접 접근 -->
{#if userRtdb.loading}
  <p>로딩 중...</p>
{:else if userRtdb.error}
  <p>에러: {userRtdb.error.message}</p>
{:else if userRtdb.data}
  <p>이름: {userRtdb.data.displayName}</p>
{/if}
```

### Svelte 5 반응성 원리

Svelte 5의 `$state`는 **Proxy 객체**를 사용하여 속성 접근을 추적합니다:

- ✅ `userRtdb.data` - 속성 접근이 추적되어 변경 감지
- ❌ `const { data } = userRtdb` - 순간의 값만 복사, 반응성 끊김

**왜 이런 일이 발생할까요?**
- Proxy는 **속성 접근(get)**을 가로채서 반응성을 추적합니다
- Destructuring은 즉시 값을 복사하므로, 이후 변경사항을 추적할 수 없습니다
- 객체 자체를 유지해야 Svelte가 속성 접근을 계속 추적할 수 있습니다

---

## Svelte 5 반응형 패턴

### ✅ 올바른 사용 패턴

- Reactivity 유지를 위해 객체 자체를 변수에 저장

```javascript
// 객체를 변수에 저장
const user = rtdb('users/123');

// 템플릿에서 속성으로 접근
{#if user.loading}
  <p>로딩 중...</p>
{:else if user.data}
  <p>{user.data.name}</p>
{/if}
```

### ✅ 사용 가능한 메서드

- `push(data)` - 새 항목 추가 (자동 key 생성)
- `set(data)` - 데이터 완전 덮어쓰기
- `update(data)` - 일부 필드만 업데이트
- `remove()` - 데이터 삭제
- `ref` - Firebase DB 참조 가져오기
- `dispose()` - 리스너 해제 (cleanup)

---

# Firebase 로그인 사용자 관리 (firebaseLoginUser)

`firebaseLoginUser`는 현재 로그인한 사용자의 정보를 반응형으로 관리하는 Singleton 인스턴스입니다.
Firebase Auth와 Realtime Database를 자동으로 연동하여 사용자 정보를 실시간으로 동기화합니다.

## 1. Singleton 패턴

```javascript
import { firebaseLoginUser } from '$lib/utils/firebase-login-user.svelte.js';

// 애플리케이션 전체에서 동일한 인스턴스 사용
// 어디서든 import하면 같은 객체를 참조합니다
```

## 2. 반응형 상태와 Static 속성

`firebaseLoginUser`는 다음과 같은 속성들을 제공합니다:

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

`firebaseLoginUser`는 내부적으로 Firebase의 `onValue()` 함수를 사용하여 실시간 데이터베이스와 연동합니다:

- **자동 경로 설정**: 로그인 시 `onValue(dbRef(database, 'users/<uid>'), ...)` 자동 구독
- **실시간 동기화**: Firebase 데이터 변경 시 `data` 속성 자동 업데이트
- **자동 정리**: 로그아웃 시 onValue 리스너 자동 해제

## 4. 프로필 업데이트 메서드

Firebase Auth와 Realtime Database를 **동시에 업데이트**합니다:

```javascript
// 전체 프로필 업데이트
await firebaseLoginUser.updateProfile({
  displayName: '홍길동',
  photoURL: 'https://example.com/photo.jpg'
});

// 이름만 업데이트 (단축 메서드)
await firebaseLoginUser.updateDisplayName('홍길동');

// 사진만 업데이트 (단축 메서드)
await firebaseLoginUser.updatePhotoURL('https://example.com/photo.jpg');

// 특정 필드 업데이트
await firebaseLoginUser.updateField('bio', '안녕하세요');
```

## 5. 사용 예시

### 템플릿에서 직접 사용

```svelte
<script>
  import { firebaseLoginUser } from '$lib/utils/firebase-login-user.svelte.js';
</script>

<!-- 로딩 상태 -->
{#if firebaseLoginUser.loading}
  <p>⏳ 로딩 중...</p>

<!-- 로그인 상태 -->
{:else if firebaseLoginUser.isAuthenticated}
  <div class="user-info">
    <h2>환영합니다!</h2>
    <p>이름: {firebaseLoginUser.data?.displayName}</p>
    <p>UID: {firebaseLoginUser.uid}</p>
    <p>Email: {firebaseLoginUser.email}</p>
    <p>전화번호: {firebaseLoginUser.phoneNumber}</p>
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
  import { firebaseLoginUser } from '$lib/utils/firebase-login-user.svelte.js';

  let displayName = $state('');
  let updating = $state(false);

  async function handleUpdate() {
    updating = true;
    try {
      await firebaseLoginUser.updateDisplayName(displayName);
      alert('프로필이 업데이트되었습니다!');
    } catch (error) {
      alert('업데이트 실패: ' + error.message);
    } finally {
      updating = false;
    }
  }
</script>

{#if firebaseLoginUser.isAuthenticated}
  <form onsubmit={handleUpdate}>
    <label>
      이름:
      <input
        type="text"
        bind:value={displayName}
        placeholder={firebaseLoginUser.data?.displayName}
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
// firebaseLoginUser는 자동으로 초기화되므로, loading 상태를 확인하면 됩니다

// 방법 1: 템플릿에서 loading 체크
{#if firebaseLoginUser.loading}
  <p>로딩 중...</p>
{:else if firebaseLoginUser.isAuthenticated}
  <p>UID: {firebaseLoginUser.uid}</p>
{/if}

// 방법 2: 스크립트에서 사용 (즉시 실행)
if (firebaseLoginUser.isAuthenticated) {
  console.log('사용자가 로그인되어 있습니다');
  console.log('UID:', firebaseLoginUser.uid);
} else {
  console.log('로그아웃 상태입니다');
}
```

## 6. 고급 사용법

### RTDB 인스턴스 직접 접근

```javascript
// RTDB 인스턴스 가져오기
const rtdbInstance = firebaseLoginUser.getRtdbInstance();

if (rtdbInstance) {
  // 직접 RTDB 메서드 호출
  await rtdbInstance.set({ customField: 'value' });
  await rtdbInstance.update({ status: 'online' });
}
```

### 에러 처리

```javascript
// 에러 발생 시
if (firebaseLoginUser.error) {
  console.error('Firebase 에러:', firebaseLoginUser.error.message);
}
```

## 7. 주의사항

### ❌ Destructuring 사용 금지

```javascript
// ❌ 잘못된 방법 - 반응성 손실
const { isAuthenticated, data } = firebaseLoginUser;

// ✅ 올바른 방법 - 객체 자체 사용
if (firebaseLoginUser.isAuthenticated) {
  console.log(firebaseLoginUser.data);
}
```

### ✅ 항상 최신 인스턴스 사용

```javascript
// ✅ import 후 바로 사용
import { firebaseLoginUser } from '$lib/utils/firebase-login-user.svelte.js';

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
   - `rtdb('users/<uid>')` 자동 생성
   - 실시간 데이터 동기화 시작

3. **로그아웃 감지**
   - `isAuthenticated = false`
   - `data = null`
   - RTDB 리스너 자동 해제

4. **정리** (선택사항)
   ```javascript
   // 필요 시 수동 정리
   firebaseLoginUser.dispose();
   ```

---

## 9. firebaseLoginUser와 rtdb() 함께 사용하기

`firebaseLoginUser`는 현재 로그인한 사용자를 관리하지만, 필요에 따라 다른 사용자나 데이터를 조회하기 위해 별도의 `rtdb()` 인스턴스를 함께 사용할 수 있습니다.

### 사용 예시: 현재 사용자 + 특정 사용자 데이터 조회

```svelte
<script>
  import { firebaseLoginUser } from '../lib/utils/firebase-login-user.svelte.js';
  import { rtdb } from '../lib/utils/firebase-realtime-database.svelte.js';

  // 현재 로그인 사용자 (firebaseLoginUser 사용)
  // - firebaseLoginUser.user: Firebase Auth 정보
  // - firebaseLoginUser.data: RTDB의 users/<uid> 데이터

  // 특정 사용자 데이터 조회 (별도 rtdb 인스턴스 사용)
  const userRtdb = rtdb('/users/apple');
</script>

<!-- 현재 로그인 사용자 정보 표시 -->
{#if firebaseLoginUser.loading}
  <p>⏳ 로딩 중...</p>
{:else if firebaseLoginUser.isAuthenticated}
  <div class="user-info">
    <h2>환영합니다!</h2>

    <!-- firebaseLoginUser의 데이터 사용 -->
    <p>이름: {firebaseLoginUser.data?.displayName}</p>
    <p>UID: {firebaseLoginUser.user?.uid}</p>
    <p>Email: {firebaseLoginUser.user?.email}</p>
    <p>전화번호: {firebaseLoginUser.user?.phoneNumber}</p>

    <!-- 별도 rtdb 인스턴스의 데이터 사용 -->
    <p>RTDB 가입일: {userRtdb.data?.createdAt}</p>
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

- `firebaseLoginUser`는 항상 현재 로그인한 사용자의 `users/<uid>` 경로만 관리합니다
- 다른 경로나 다른 사용자 데이터가 필요하면 별도의 `rtdb()` 인스턴스를 생성하세요
- 각 `rtdb()` 인스턴스는 독립적으로 반응형 상태를 관리합니다

---

## 10. 요약

- ✅ **Singleton 패턴**: 전역에서 하나의 인스턴스만 사용
- ✅ **반응형 상태**: `$state` 기반 자동 UI 업데이트
- ✅ **자동 동기화**: Firebase Auth + RTDB 자동 연동
- ✅ **간편한 API**: 직관적인 메서드 제공
- ❌ **Destructuring 금지**: 반응성 손실 방지