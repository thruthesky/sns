<script>
  /**
   * SNS Web Components 데모 애플리케이션
   *
   * Custom Elements를 테스트하고 시연하는 앱입니다.
   */

  // Custom Elements 로드
  import '../lib/index.js';
  import { user, signOut } from '../lib/stores/auth.js';

  let activeTab = $state('login');
  let message = $state('');

  /**
   * 로그인 성공 핸들러
   */
  function handleLoginSuccess(event) {
    message = `✅ 로그인 성공: ${event.detail.email}`;
    activeTab = 'posts';

    // 3초 후 메시지 지우기
    setTimeout(() => {
      message = '';
    }, 3000);
  }

  /**
   * 로그인 오류 핸들러
   */
  function handleLoginError(event) {
    message = `❌ 오류: ${event.detail.error}`;

    // 5초 후 메시지 지우기
    setTimeout(() => {
      message = '';
    }, 5000);
  }

  /**
   * 게시물 클릭 핸들러
   */
  function handlePostClick(event) {
    const post = event.detail.post;
    alert(`게시물 클릭:\n\n제목: ${post.title || '제목 없음'}\n작성자: ${post.author || '익명'}`);
  }

  /**
   * 로그아웃 핸들러
   */
  async function handleSignOut() {
    const result = await signOut();
    if (result.success) {
      message = '✅ 로그아웃되었습니다.';
      activeTab = 'login';

      setTimeout(() => {
        message = '';
      }, 3000);
    }
  }

  /**
   * 탭 전환
   */
  function switchTab(tab) {
    activeTab = tab;
  }
</script>

<!-- 데모 앱 -->
<div class="demo-app">
  <!-- 헤더 -->
  <header class="header">
    <h1 class="title">
      SNS Web Components 데모
    </h1>
    <p class="subtitle">
      Svelte 5 Custom Elements + Firebase
    </p>
  </header>

  <!-- 알림 메시지 -->
  {#if message}
    <div class="notification">
      {message}
    </div>
  {/if}

  <!-- 사용자 정보 (로그인 시) -->
  {#if $user}
    <div class="user-info">
      <span>👤 {$user.displayName || $user.email}</span>
      <button onclick={handleSignOut} class="logout-btn">로그아웃</button>
    </div>
  {/if}

  <!-- 탭 네비게이션 -->
  <nav class="tabs">
    <button
      class={activeTab === 'login' ? 'tab active' : 'tab'}
      onclick={() => switchTab('login')}
    >
      로그인
    </button>
    <button
      class={activeTab === 'posts' ? 'tab active' : 'tab'}
      onclick={() => switchTab('posts')}
    >
      게시물 목록
    </button>
    <button
      class={activeTab === 'about' ? 'tab active' : 'tab'}
      onclick={() => switchTab('about')}
    >
      정보
    </button>
  </nav>

  <!-- 탭 콘텐츠 -->
  <main class="content">
    {#if activeTab === 'login'}
      <!-- 로그인 탭 -->
      <section class="tab-content">
        <h2>로그인 / 회원가입</h2>
        <p class="description">
          Firebase Authentication을 사용한 로그인 폼입니다.
        </p>
        <login-form
          onlogin-success={handleLoginSuccess}
          onlogin-error={handleLoginError}
        ></login-form>
      </section>

    {:else if activeTab === 'posts'}
      <!-- 게시물 목록 탭 -->
      <section class="tab-content">
        <h2>게시물 목록</h2>
        <p class="description">
          Firebase Realtime Database의 게시물을 실시간으로 표시합니다.
        </p>
        {#if !$user}
          <div class="warning">
            ⚠️ 게시물을 보려면 먼저 로그인해주세요.
          </div>
        {:else}
          <post-list
            path="posts"
            limit="10"
            onpost-click={handlePostClick}
          ></post-list>
        {/if}
      </section>

    {:else if activeTab === 'about'}
      <!-- 정보 탭 -->
      <section class="tab-content">
        <h2>프로젝트 정보</h2>
        <div class="info-card">
          <h3>🎯 프로젝트 개요</h3>
          <p>
            Svelte 5 라이브러리 모드를 사용하여 Custom Elements (Web Components)를 개발하는 프로젝트입니다.
          </p>

          <h3>🛠️ 기술 스택</h3>
          <ul>
            <li><strong>Svelte 5</strong>: Runes를 활용한 반응형 컴포넌트</li>
            <li><strong>Vite</strong>: 라이브러리 모드로 빌드</li>
            <li><strong>Firebase</strong>: Authentication + Realtime Database</li>
            <li><strong>Tailwind CSS</strong>: 스타일링 (선택)</li>
          </ul>

          <h3>📦 포함된 컴포넌트</h3>
          <ul>
            <li><code>&lt;login-form&gt;</code> - 로그인/회원가입 폼</li>
            <li><code>&lt;post-list&gt;</code> - 게시물 목록</li>
          </ul>

          <h3>🚀 사용 방법</h3>
          <pre><code>&lt;!-- HTML에서 사용 --&gt;
&lt;script type="module" src="./dist/sns-components.es.js"&gt;&lt;/script&gt;

&lt;login-form&gt;&lt;/login-form&gt;
&lt;post-list path="posts" limit="10"&gt;&lt;/post-list&gt;</code></pre>

          <h3>💡 특징</h3>
          <ul>
            <li>SvelteKit 없이 순수 Svelte + Vite 라이브러리 모드</li>
            <li>프레임워크 독립적인 Web Components</li>
            <li>다양한 플랫폼에서 재사용 가능</li>
            <li>실시간 데이터 동기화</li>
            <li>한글 주석으로 상세한 설명</li>
          </ul>
        </div>
      </section>
    {/if}
  </main>

  <!-- 푸터 -->
  <footer class="footer">
    <p>© 2024 SNS Web Components | Powered by Svelte 5 & Firebase</p>
  </footer>
</div>

<style>
  /* 앱 컨테이너 */
  .demo-app {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 2rem;
  }

  /* 헤더 */
  .header {
    text-align: center;
    color: white;
    margin-bottom: 2rem;
  }

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0 0 0.5rem 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  .subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
    margin: 0;
  }

  /* 알림 메시지 */
  .notification {
    max-width: 800px;
    margin: 0 auto 1rem;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-weight: 500;
  }

  /* 사용자 정보 */
  .user-info {
    max-width: 800px;
    margin: 0 auto 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logout-btn {
    padding: 0.5rem 1rem;
    background: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
  }

  .logout-btn:hover {
    background: #c82333;
  }

  /* 탭 네비게이션 */
  .tabs {
    max-width: 800px;
    margin: 0 auto 2rem;
    display: flex;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
    border-radius: 8px;
  }

  .tab {
    flex: 1;
    padding: 0.75rem;
    background: transparent;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;
  }

  .tab:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .tab.active {
    background: white;
    color: #667eea;
  }

  /* 콘텐츠 */
  .content {
    max-width: 800px;
    margin: 0 auto;
  }

  .tab-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  .tab-content h2 {
    margin: 0 0 0.5rem 0;
    color: #333;
  }

  .description {
    color: #666;
    margin-bottom: 1.5rem;
  }

  .warning {
    padding: 1rem;
    background: #fff3cd;
    border: 1px solid #ffc107;
    border-radius: 4px;
    color: #856404;
    text-align: center;
  }

  /* 정보 카드 */
  .info-card {
    color: #333;
  }

  .info-card h3 {
    margin: 1.5rem 0 0.5rem 0;
    color: #667eea;
  }

  .info-card h3:first-child {
    margin-top: 0;
  }

  .info-card ul {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
  }

  .info-card li {
    margin: 0.5rem 0;
    line-height: 1.6;
  }

  .info-card code {
    background: #f5f5f5;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
  }

  .info-card pre {
    background: #f5f5f5;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    margin: 0.5rem 0;
  }

  .info-card pre code {
    background: none;
    padding: 0;
  }

  /* 푸터 */
  .footer {
    max-width: 800px;
    margin: 2rem auto 0;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
  }

  .footer p {
    margin: 0;
  }

  /* 반응형 */
  @media (max-width: 640px) {
    .demo-app {
      padding: 1rem;
    }

    .title {
      font-size: 1.8rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .tab-content {
      padding: 1rem;
    }
  }
</style>
