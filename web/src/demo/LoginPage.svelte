<script>
  /**
   * 로그인 페이지 컴포넌트
   *
   * 전화번호 로그인 기능을 제공하는 페이지입니다.
   */

  import { t } from '../lib/stores/i18n.ts';
  import { user } from '../lib/stores/auth.js';

  /**
   * 로그인 성공 핸들러
   */
  function handleLoginSuccess(event) {
    console.log('Login successful:', event.detail);
    alert($t('로그인성공알림', { phone: event.detail.phoneNumber }));
    // 로그인 성공 후 홈으로 이동
    window.location.href = '/';
  }

  /**
   * 로그인 실패 핸들러
   */
  function handleLoginError(event) {
    console.error('Login error:', event.detail);
    alert($t('로그인실패', { error: event.detail.error }));
  }
</script>

<div class="login-page">
  <div class="login-container">
    {#if !$user}
      <!-- 로그인 폼 -->
      <div class="login-card">
        <h1 class="login-title">{$t('로그인')}</h1>
        <p class="login-description">
          {$t('전화번호로로그인')}
        </p>
        <phone-login
          onlogin-success={handleLoginSuccess}
          onlogin-error={handleLoginError}
        ></phone-login>
      </div>
    {:else}
      <!-- 이미 로그인된 경우 -->
      <div class="welcome-card">
        <h2 class="welcome-title">{$t('웰컴')}</h2>
        <p class="welcome-message">
          {$t('로그인하셨습니다', { phone: $user.phoneNumber })}
        </p>
        <a href="/" class="home-button">{$t('홈으로이동')}</a>
      </div>
    {/if}
  </div>
</div>

<style>
  /* 로그인 페이지 컨테이너 */
  .login-page {
    min-height: calc(100vh - 4rem);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .login-container {
    width: 100%;
    max-width: 28rem;
  }

  /* 로그인 카드 */
  .login-card {
    background: white;
    border-radius: 1rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    padding: 2rem;
  }

  .login-title {
    font-size: 2rem;
    font-weight: 800;
    margin: 0 0 0.5rem 0;
    text-align: center;
    color: #111827;
  }

  .login-description {
    font-size: 1rem;
    color: #6b7280;
    margin: 0 0 2rem 0;
    text-align: center;
  }

  /* 환영 카드 */
  .welcome-card {
    background: white;
    border-radius: 1rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    padding: 3rem 2rem;
    text-align: center;
  }

  .welcome-title {
    font-size: 1.875rem;
    font-weight: 800;
    margin: 0 0 1rem 0;
    color: #111827;
  }

  .welcome-message {
    font-size: 1.125rem;
    color: #6b7280;
    margin: 0 0 2rem 0;
  }

  .home-button {
    display: inline-block;
    padding: 0.75rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 0.5rem;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .home-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  /* 반응형 */
  @media (max-width: 640px) {
    .login-card,
    .welcome-card {
      padding: 1.5rem;
    }

    .login-title {
      font-size: 1.5rem;
    }

    .welcome-title {
      font-size: 1.5rem;
    }
  }
</style>
