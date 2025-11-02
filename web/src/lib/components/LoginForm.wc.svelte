<svelte:options customElement="login-form" />

<script>
  /**
   * 로그인 폼 컴포넌트 (Web Component)
   *
   * Firebase Authentication을 사용한 로그인 폼입니다.
   * 이메일/비밀번호 로그인과 회원가입 기능을 제공합니다.
   *
   * 사용법:
   * <login-form></login-form>
   *
   * 이벤트:
   * - login-success: 로그인 성공 시 발생 (detail: { user })
   * - login-error: 로그인 실패 시 발생 (detail: { error })
   */

  import { signIn, signUp } from '../stores/auth.js';

  // 반응형 상태
  let email = $state('');
  let password = $state('');
  let displayName = $state('');
  let error = $state('');
  let loading = $state(false);
  let isSignUpMode = $state(false); // 회원가입 모드 토글

  /**
   * 로그인 처리
   * @param {Event} e - 폼 제출 이벤트
   */
  async function handleSubmit(e) {
    e.preventDefault();
    loading = true;
    error = '';

    let result;

    if (isSignUpMode) {
      // 회원가입 모드
      result = await signUp(email, password, displayName);
    } else {
      // 로그인 모드
      result = await signIn(email, password);
    }

    if (result.success) {
      // 성공 이벤트 발생
      const event = new CustomEvent('login-success', {
        detail: { email },
        bubbles: true,
        composed: true
      });
      dispatchEvent(event);

      // 폼 초기화
      email = '';
      password = '';
      displayName = '';
    } else {
      error = result.error;

      // 오류 이벤트 발생
      const event = new CustomEvent('login-error', {
        detail: { error: result.error },
        bubbles: true,
        composed: true
      });
      dispatchEvent(event);
    }

    loading = false;
  }

  /**
   * 로그인/회원가입 모드 전환
   */
  function toggleMode() {
    isSignUpMode = !isSignUpMode;
    error = '';
  }
</script>

<!-- 로그인/회원가입 폼 -->
<div class="login-container">
  <div class="login-card">
    <h2 class="title">{isSignUpMode ? '회원가입' : '로그인'}</h2>

    <form onsubmit={handleSubmit} class="form">
      <!-- 회원가입 모드일 때만 표시 -->
      {#if isSignUpMode}
        <div class="form-group">
          <label for="displayName" class="label">이름</label>
          <input
            id="displayName"
            type="text"
            bind:value={displayName}
            required
            disabled={loading}
            placeholder="이름을 입력하세요"
            class="input"
          />
        </div>
      {/if}

      <!-- 이메일 입력 -->
      <div class="form-group">
        <label for="email" class="label">이메일</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          required
          disabled={loading}
          placeholder="email@example.com"
          class="input"
        />
      </div>

      <!-- 비밀번호 입력 -->
      <div class="form-group">
        <label for="password" class="label">비밀번호</label>
        <input
          id="password"
          type="password"
          bind:value={password}
          required
          disabled={loading}
          placeholder="비밀번호 (최소 6자)"
          minlength="6"
          class="input"
        />
      </div>

      <!-- 오류 메시지 -->
      {#if error}
        <div class="error-message">
          {error}
        </div>
      {/if}

      <!-- 제출 버튼 -->
      <button type="submit" disabled={loading} class="submit-button">
        {loading ? '처리 중...' : isSignUpMode ? '회원가입' : '로그인'}
      </button>

      <!-- 모드 전환 버튼 -->
      <button type="button" onclick={toggleMode} class="toggle-button" disabled={loading}>
        {isSignUpMode ? '이미 계정이 있으신가요? 로그인' : '계정이 없으신가요? 회원가입'}
      </button>
    </form>
  </div>
</div>

<style>
  /* 컨테이너 */
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    padding: 1rem;
  }

  /* 로그인 카드 */
  .login-card {
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  /* 제목 */
  .title {
    margin: 0 0 1.5rem 0;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: #333;
  }

  /* 폼 */
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* 폼 그룹 */
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  /* 라벨 */
  .label {
    font-weight: 500;
    color: #555;
    font-size: 0.9rem;
  }

  /* 입력 필드 */
  .input {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.2s;
  }

  .input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  .input:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }

  /* 오류 메시지 */
  .error-message {
    padding: 0.75rem;
    background-color: #fee;
    color: #c33;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  /* 제출 버튼 */
  .submit-button {
    padding: 0.75rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .submit-button:hover:not(:disabled) {
    background-color: #0056b3;
  }

  .submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  /* 모드 전환 버튼 */
  .toggle-button {
    padding: 0.5rem;
    background: transparent;
    color: #007bff;
    border: none;
    font-size: 0.9rem;
    cursor: pointer;
    text-decoration: underline;
  }

  .toggle-button:hover:not(:disabled) {
    color: #0056b3;
  }

  .toggle-button:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
</style>
