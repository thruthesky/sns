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