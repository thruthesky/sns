SNS 커스텀 엘리먼트 개발 지침
- 본 문서는 SNS 커스텀 엘리먼트 개발에 관한 지침을 제공하며, 개발 할 때, 반드시 따라야 할 규칙과 예제를 포함하므로, 본 문서를 따라서 개발을 진행해야 합니다.
- 반드시 아래의 [워크플로우](#워크플로우)를 따라야 합니다

# 워크플로우
- [ ] 커스텀 엘리먼트 개발 할 때에는 항상(반드시) Svelte의 [커스텀 엘리먼트 문서](https://svelte.dev/docs/svelte/custom-elements)를 참고 해야 하며 개발자에게 이 문서를 참고한다고 알려줍니다.


# Svelte 커스텀 엘리먼트 개요

Svelte 5를 사용하여 Web Components (Custom Elements)를 개발할 때, Svelte는 강력하고 효율적인 방법을 제공합니다. Custom Elements는 프레임워크에 독립적인 재사용 가능한 컴포넌트를 만들 수 있게 해주며, 어떤 웹 환경에서도 사용할 수 있습니다.

## 주요 개념

### 1. Custom Element 생성

Svelte 컴포넌트를 Custom Element로 컴파일하려면 `customElement: true` 컴파일러 옵션을 사용하고, `<svelte:options>` 요소에서 태그 이름을 지정합니다:

```svelte
<svelte:options customElement="my-element" />

<script>
  let { name = 'world' } = $props();
</script>

<h1>Hello {name}!</h1>
<slot />
```

### 2. 컴포넌트 옵션 커스터마이징

`<svelte:options>` 내에서 `customElement`를 객체로 정의하여 세밀한 제어가 가능합니다:

```svelte
<svelte:options
  customElement={{
    tag: 'custom-element',
    shadow: 'none',  // Shadow DOM 미사용
    props: {
      name: {
        reflect: true,  // DOM에 값 반영
        type: 'String',  // 타입 지정
        attribute: 'element-name'  // 커스텀 속성명
      }
    },
    extend: (customElementConstructor) => {
      // 커스텀 엘리먼트 클래스 확장
      return class extends customElementConstructor {
        static formAssociated = true;

        constructor() {
          super();
          this.attachedInternals = this.attachInternals();
        }
      };
    }
  }}
/>
```

**주요 옵션:**
- **tag**: 커스텀 요소의 태그 이름 (선택사항)
- **shadow**: `"none"`으로 설정하면 Shadow DOM을 생성하지 않음 (스타일 캡슐화 제외, 슬롯 미지원)
- **props**: 개별 프로퍼티의 동작을 제어
  - `attribute`: HTML 속성명 커스터마이징
  - `reflect`: true로 설정하면 prop 값이 DOM 속성에 반영됨
  - `type`: 타입 변환 명시 ('String', 'Boolean', 'Number', 'Array', 'Object')
- **extend**: 커스텀 엘리먼트 클래스를 확장하는 함수 (ElementInternals 등의 고급 기능 사용 시)

### 3. Runes 사용

Svelte 5의 Runes는 Custom Elements 개발에서도 동일하게 작동합니다:

#### `$state` - 반응형 상태
```svelte
<script>
  let count = $state(0);

  function increment() {
    count += 1;
  }
</script>

<button onclick={increment}>
  Count: {count}
</button>
```

#### `$derived` - 파생 상태
```svelte
<script>
  let count = $state(0);
  let doubled = $derived(count * 2);
</script>

<p>{count} x 2 = {doubled}</p>
```

#### `$effect` - 부수 효과
```svelte
<script>
  let count = $state(0);

  $effect(() => {
    console.log(`Count changed to: ${count}`);

    // 클린업 함수 반환
    return () => {
      console.log('Cleanup');
    };
  });
</script>
```

#### `$props` - Props 받기
```svelte
<script>
  let { name = 'World', age } = $props();
</script>

<p>Hello {name}! Age: {age ?? 'Unknown'}</p>
```

#### `$bindable` - 양방향 바인딩
```svelte
<script>
  let { value = $bindable() } = $props();
</script>

<input bind:value={value} />
```

#### `$host` - Host 엘리먼트 접근
```svelte
<script>
  import { $host } from 'svelte';

  function dispatchCustomEvent() {
    $host().dispatchEvent(new CustomEvent('my-event', {
      detail: { message: 'Hello from custom element' }
    }));
  }
</script>

<button onclick={dispatchCustomEvent}>
  Dispatch Event
</button>
```

### 4. 라이프사이클

Custom Element의 라이프사이클은 일반 Svelte 컴포넌트와 약간 다릅니다:

- **생성**: 커스텀 요소가 생성될 때 내부 Svelte 컴포넌트는 **즉시 생성되지 않고**, `connectedCallback` 다음 틱에서 생성됩니다
- **업데이트**: DOM 업데이트는 다음 틱에 반영되어 일시적인 DOM 분리 시 언마운트를 방지합니다
- **제거**: `disconnectedCallback` 다음 틱에서 내부 컴포넌트가 제거됩니다

```svelte
<script>
  import { onMount, onDestroy } from 'svelte';

  onMount(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component will unmount');
    };
  });

  onDestroy(() => {
    console.log('Component destroyed');
  });
</script>
```

### 5. Props 및 이벤트

Props는 DOM 프로퍼티와 HTML 속성으로 모두 접근 가능합니다:

```javascript
// JavaScript에서 사용
const el = document.querySelector('my-element');

// 프로퍼티로 읽기/쓰기
console.log(el.name);
el.name = 'New Name';

// 속성으로 설정 (문자열만 가능)
el.setAttribute('name', 'New Name');
```

**주의사항:**
- Props를 명시적으로 선언해야 합니다 (`let props = $props()`만으로는 불충분)
- `on`으로 시작하는 속성은 이벤트 리스너로 해석됩니다

### 6. 컨텍스트 (Context)

컨텍스트는 부모-자식 컴포넌트 간 데이터 공유에 유용하지만, **커스텀 요소 간에는 작동하지 않습니다**:

```svelte
<script>
  import { setContext, getContext } from 'svelte';

  // 부모 컴포넌트
  setContext('user', {
    name: 'John',
    role: 'admin'
  });

  // 자식 컴포넌트 (같은 커스텀 요소 내부)
  const user = getContext('user');
</script>
```

### 7. 스토어 (Stores)

복잡한 비동기 데이터나 수동 제어가 필요할 때 스토어를 사용합니다:

```svelte
<script>
  import { writable, derived } from 'svelte/store';

  const count = writable(0);
  const doubled = derived(count, $count => $count * 2);

  function increment() {
    count.update(n => n + 1);
  }
</script>

<button onclick={increment}>
  Count: {$count}, Doubled: {$doubled}
</button>
```

## 주요 제한사항 및 주의사항

1. **스타일 캡슐화**: Shadow DOM 사용 시 글로벌 스타일 및 `:global()` 수정자가 적용되지 않습니다
2. **SSR 미지원**: Shadow DOM은 JavaScript 로드 전까지 보이지 않아 서버 사이드 렌더링에 적합하지 않습니다
3. **슬롯 렌더링**: 일반 DOM에서는 즉시 렌더링되며, Svelte의 지연 렌더링이 적용되지 않습니다
4. **컨텍스트 격리**: 커스텀 요소 간 `setContext`/`getContext`는 작동하지 않습니다
5. **이벤트 리스너 속성**: `on`으로 시작하는 속성/프로퍼티는 이벤트 리스너로 해석됩니다

## 외부 컴포넌트 등록

태그 이름을 지정하지 않은 경우, 정적 `element` 프로퍼티를 통해 등록할 수 있습니다:

```javascript
import MyElement from './MyElement.svelte';

// 나중에 태그 이름 지정
customElements.define('my-element', MyElement.element);
```

# Firebase 통합 가이드

SNS 개발 시 Firebase Authentication과 Firebase Realtime Database를 Svelte Custom Elements와 통합하는 방법을 설명합니다.

## Firebase 초기화

### 1. Firebase SDK 설치

```bash
npm install firebase
```

### 2. Firebase 설정 파일 생성

```javascript
// src/lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Auth 및 Database 인스턴스 내보내기
export const auth = getAuth(app);
export const database = getDatabase(app);
```

## Firebase Authentication 통합

### 1. 인증 상태 관리

Svelte 스토어를 사용하여 전역 인증 상태를 관리합니다:

```javascript
// src/lib/stores/auth.js
import { writable } from 'svelte/store';
import { auth } from '$lib/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';

// 사용자 상태를 저장하는 스토어
export const user = writable(null);
export const loading = writable(true);

// 인증 상태 변경 감지
onAuthStateChanged(auth, (currentUser) => {
  user.set(currentUser);
  loading.set(false);
});

// 로그인 함수
export async function signIn(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// 로그아웃 함수
export async function signOut() {
  try {
    await firebaseSignOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```

### 2. 로그인 컴포넌트 예제

```svelte
<!-- src/components/LoginForm.svelte -->
<svelte:options customElement="login-form" />

<script>
  import { signIn } from '$lib/stores/auth';

  let email = $state('');
  let password = $state('');
  let error = $state('');
  let loading = $state(false);

  async function handleSubmit(e) {
    e.preventDefault();
    loading = true;
    error = '';

    const result = await signIn(email, password);

    if (!result.success) {
      error = result.error;
    }

    loading = false;
  }
</script>

<form onsubmit={handleSubmit}>
  <div>
    <label for="email">이메일</label>
    <input
      id="email"
      type="email"
      bind:value={email}
      required
      disabled={loading}
    />
  </div>

  <div>
    <label for="password">비밀번호</label>
    <input
      id="password"
      type="password"
      bind:value={password}
      required
      disabled={loading}
    />
  </div>

  {#if error}
    <p class="error">{error}</p>
  {/if}

  <button type="submit" disabled={loading}>
    {loading ? '로그인 중...' : '로그인'}
  </button>
</form>

<style>
  form {
    max-width: 400px;
    margin: 0 auto;
  }

  div {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .error {
    color: red;
    margin: 0.5rem 0;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
</style>
```

### 3. 인증 가드 컴포넌트

```svelte
<!-- src/components/AuthGuard.svelte -->
<svelte:options customElement="auth-guard" />

<script>
  import { user, loading } from '$lib/stores/auth';
</script>

{#if $loading}
  <div class="loading">로딩 중...</div>
{:else if $user}
  <slot />
{:else}
  <div class="unauthorized">
    <p>로그인이 필요합니다.</p>
    <login-form></login-form>
  </div>
{/if}

<style>
  .loading, .unauthorized {
    text-align: center;
    padding: 2rem;
  }
</style>
```

## Firebase Realtime Database 통합

### 1. 데이터베이스 유틸리티 함수

```javascript
// src/lib/stores/database.js
import { writable } from 'svelte/store';
import { database } from '$lib/firebase';
import { ref, push, set, onValue, off, update, remove } from 'firebase/database';

// 실시간 데이터 구독을 위한 스토어 생성 함수
export function createRealtimeStore(path) {
  const { subscribe, set: setStore } = writable(null);

  const dbRef = ref(database, path);

  // 데이터 변경 감지
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    setStore(data);
  });

  return {
    subscribe,
    // 컴포넌트 언마운트 시 구독 해제
    unsubscribe: () => off(dbRef)
  };
}

// 데이터 쓰기
export async function writeData(path, data) {
  try {
    const dbRef = ref(database, path);
    await set(dbRef, data);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// 데이터 업데이트
export async function updateData(path, updates) {
  try {
    const dbRef = ref(database, path);
    await update(dbRef, updates);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// 데이터 삭제
export async function deleteData(path) {
  try {
    const dbRef = ref(database, path);
    await remove(dbRef);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// 새 항목 추가 (자동 생성된 키 사용)
export async function pushData(path, data) {
  try {
    const dbRef = ref(database, path);
    const newRef = push(dbRef);
    await set(newRef, data);
    return { success: true, key: newRef.key };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```

### 2. 게시물 목록 컴포넌트 예제

```svelte
<!-- src/components/PostList.svelte -->
<svelte:options customElement="post-list" />

<script>
  import { onMount, onDestroy } from 'svelte';
  import { database } from '$lib/firebase';
  import { ref, onValue, off } from 'firebase/database';

  let posts = $state([]);
  let loading = $state(true);
  let dbRef;

  onMount(() => {
    // posts 경로의 데이터를 실시간으로 구독
    dbRef = ref(database, 'posts');

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        // 객체를 배열로 변환하고 최신순으로 정렬
        posts = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value
        })).sort((a, b) => b.timestamp - a.timestamp);
      } else {
        posts = [];
      }

      loading = false;
    });
  });

  onDestroy(() => {
    // 구독 해제
    if (dbRef) {
      off(dbRef);
    }
  });
</script>

<div class="post-list">
  {#if loading}
    <p>로딩 중...</p>
  {:else if posts.length === 0}
    <p>게시물이 없습니다.</p>
  {:else}
    {#each posts as post (post.id)}
      <post-item
        post-id={post.id}
        title={post.title}
        content={post.content}
        author={post.author}
        timestamp={post.timestamp}
      />
    {/each}
  {/if}
</div>

<style>
  .post-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
</style>
```

### 3. 게시물 작성 컴포넌트 예제

```svelte
<!-- src/components/PostForm.svelte -->
<svelte:options customElement="post-form" />

<script>
  import { user } from '$lib/stores/auth';
  import { pushData } from '$lib/stores/database';

  let title = $state('');
  let content = $state('');
  let submitting = $state(false);
  let error = $state('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (!$user) {
      error = '로그인이 필요합니다.';
      return;
    }

    submitting = true;
    error = '';

    const postData = {
      title,
      content,
      author: $user.email,
      authorId: $user.uid,
      timestamp: Date.now(),
      likes: 0,
      comments: []
    };

    const result = await pushData('posts', postData);

    if (result.success) {
      // 폼 초기화
      title = '';
      content = '';

      // 성공 이벤트 발생
      dispatchEvent(new CustomEvent('post-created', {
        detail: { postId: result.key }
      }));
    } else {
      error = result.error;
    }

    submitting = false;
  }
</script>

<form onsubmit={handleSubmit}>
  <div>
    <label for="title">제목</label>
    <input
      id="title"
      type="text"
      bind:value={title}
      required
      disabled={submitting}
      placeholder="게시물 제목을 입력하세요"
    />
  </div>

  <div>
    <label for="content">내용</label>
    <textarea
      id="content"
      bind:value={content}
      required
      disabled={submitting}
      placeholder="게시물 내용을 입력하세요"
      rows="10"
    />
  </div>

  {#if error}
    <p class="error">{error}</p>
  {/if}

  <button type="submit" disabled={submitting}>
    {submitting ? '등록 중...' : '게시물 등록'}
  </button>
</form>

<style>
  form {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }

  div {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
  }

  textarea {
    resize: vertical;
  }

  .error {
    color: red;
    margin: 0.5rem 0;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
</style>
```

## 보안 규칙 설정

Firebase Realtime Database의 보안 규칙을 설정하여 데이터를 보호합니다:

```json
{
  "rules": {
    "posts": {
      ".read": true,
      ".write": "auth != null",
      "$postId": {
        ".validate": "newData.hasChildren(['title', 'content', 'author', 'authorId', 'timestamp'])",
        "title": {
          ".validate": "newData.isString() && newData.val().length > 0 && newData.val().length <= 100"
        },
        "content": {
          ".validate": "newData.isString() && newData.val().length > 0 && newData.val().length <= 5000"
        },
        "author": {
          ".validate": "newData.isString()"
        },
        "authorId": {
          ".validate": "newData.val() === auth.uid"
        },
        "timestamp": {
          ".validate": "newData.isNumber()"
        }
      }
    },
    "users": {
      "$uid": {
        ".read": "auth != null && auth.uid === $uid",
        ".write": "auth != null && auth.uid === $uid"
      }
    }
  }
}
```

## 성능 최적화 팁

### 1. 데이터 페이징

대량의 데이터를 처리할 때는 페이징을 구현합니다:

```javascript
import { ref, query, orderByChild, limitToLast, endBefore } from 'firebase/database';

// 최근 20개 게시물만 가져오기
const postsRef = ref(database, 'posts');
const recentPostsQuery = query(
  postsRef,
  orderByChild('timestamp'),
  limitToLast(20)
);
```

### 2. 인덱싱

Firebase Console에서 자주 쿼리하는 필드에 인덱스를 추가합니다:

```json
{
  "rules": {
    "posts": {
      ".indexOn": ["timestamp", "authorId"]
    }
  }
}
```

### 3. 메모리 누수 방지

컴포넌트 언마운트 시 리스너를 정리합니다:

```svelte
<script>
  import { onDestroy } from 'svelte';
  import { database } from '$lib/firebase';
  import { ref, onValue, off } from 'firebase/database';

  let dbRef;

  $effect(() => {
    dbRef = ref(database, 'posts');
    onValue(dbRef, (snapshot) => {
      // 데이터 처리
    });

    // 클린업 함수
    return () => {
      if (dbRef) {
        off(dbRef);
      }
    };
  });
</script>
```

# Svelte 커스텀 엘리먼트 개발 규칙