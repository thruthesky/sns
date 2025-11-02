<script>
  /**
   * SNS Web Components 데모 애플리케이션
   *
   * Custom Elements를 테스트하고 시연하는 앱입니다.
   */

  // Custom Elements 로드
  import '../lib/index.js';
  import { user } from '../lib/stores/auth.js';
  import { t } from '../lib/stores/i18n.js';

  // 홈 화면 컴포넌트 임포트
  import Home from './Home.svelte';

  let activeTab = $state('home');
  let message = $state('');

  /**
   * 로그인 성공 핸들러
   */
  function handleLoginSuccess(event) {
    message = $t('로그인성공', { email: event.detail.email });
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
    message = $t('오류', { error: event.detail.error });

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
    alert($t('게시물클릭알림', {
      title: post.title || $t('제목없음'),
      author: post.author || $t('익명')
    }));
  }

  /**
   * 탭 전환
   */
  function switchTab(tab) {
    activeTab = tab;
  }
</script>

<!-- 새 레이아웃 적용 -->
<sns-layout>
  <!-- 알림 메시지 -->
  {#if message}
    <div class="notification">
      {message}
    </div>
  {/if}

  <!-- 헤더 -->
  <header class="header">
    <h1 class="title">
      {$t('데모제목')}
    </h1>
    <p class="subtitle">
      {$t('데모부제')}
    </p>
  </header>

  <!-- 탭 네비게이션 -->
  <nav class="tabs">
    <button
      class={activeTab === 'home' ? 'tab active' : 'tab'}
      onclick={() => switchTab('home')}
    >
      {$t('홈')}
    </button>
    <button
      class={activeTab === 'login' ? 'tab active' : 'tab'}
      onclick={() => switchTab('login')}
    >
      {$t('로그인')}
    </button>
    <button
      class={activeTab === 'posts' ? 'tab active' : 'tab'}
      onclick={() => switchTab('posts')}
    >
      {$t('게시물목록')}
    </button>
    <button
      class={activeTab === 'about' ? 'tab active' : 'tab'}
      onclick={() => switchTab('about')}
    >
      {$t('정보')}
    </button>
  </nav>

  <!-- 탭 콘텐츠 -->
  <main class="content">
    {#if activeTab === 'home'}
      <!-- 홈 탭 -->
      <section class="tab-content">
        <Home />
      </section>

    {:else if activeTab === 'login'}
      <!-- 로그인 탭 -->
      <section class="tab-content">
        <h2>{$t('로그인회원가입')}</h2>
        <p class="description">
          {$t('Firebase설명')}
        </p>
        <login-form
          onlogin-success={handleLoginSuccess}
          onlogin-error={handleLoginError}
        ></login-form>
      </section>

    {:else if activeTab === 'posts'}
      <!-- 게시물 목록 탭 -->
      <section class="tab-content">
        <h2>{$t('게시물목록')}</h2>
        <p class="description">
          {$t('게시물목록설명')}
        </p>
        {#if !$user}
          <div class="warning">
            {$t('로그인필요')}
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
        <h2>{$t('프로젝트정보')}</h2>
        <div class="info-card">
          <h3>{$t('프로젝트개요')}</h3>
          <p>
            {$t('프로젝트개요설명')}
          </p>

          <h3>{$t('기술스택')}</h3>
          <ul>
            <li><strong>Svelte 5</strong>: Runes를 활용한 반응형 컴포넌트</li>
            <li><strong>Vite</strong>: 라이브러리 모드로 빌드</li>
            <li><strong>Firebase</strong>: Authentication + Realtime Database</li>
            <li><strong>lucide-svelte</strong>: 아이콘 라이브러리</li>
            <li><strong>Tailwind CSS</strong>: 스타일링 (선택)</li>
          </ul>

          <h3>{$t('포함컴포넌트')}</h3>
          <ul>
            <li><code>&lt;login-form&gt;</code> - 로그인/회원가입 폼</li>
            <li><code>&lt;post-list&gt;</code> - 게시물 목록</li>
            <li><code>&lt;sns-topbar&gt;</code> - 탑바 네비게이션</li>
            <li><code>&lt;sns-left-sidebar&gt;</code> - 왼쪽 사이드바</li>
            <li><code>&lt;sns-right-sidebar&gt;</code> - 오른쪽 사이드바</li>
            <li><code>&lt;sns-layout&gt;</code> - 3단 레이아웃</li>
          </ul>

          <h3>{$t('사용방법')}</h3>
          <pre><code>&lt;!-- HTML에서 사용 --&gt;
&lt;script type="module" src="./dist/sns-components.es.js"&gt;&lt;/script&gt;

&lt;sns-layout&gt;
  &lt;!-- 콘텐츠 --&gt;
&lt;/sns-layout&gt;</code></pre>

          <h3>{$t('특징')}</h3>
          <ul>
            <li>SvelteKit 없이 순수 Svelte + Vite 라이브러리 모드</li>
            <li>프레임워크 독립적인 Web Components</li>
            <li>다양한 플랫폼에서 재사용 가능</li>
            <li>실시간 데이터 동기화</li>
            <li>lucide-svelte 아이콘 적용</li>
            <li>반응형 3단 레이아웃</li>
            <li>한글 주석으로 상세한 설명</li>
          </ul>
        </div>
      </section>
    {/if}
  </main>

  <!-- 푸터 -->
  <footer class="footer">
    <p>{$t('푸터')}</p>
  </footer>
</sns-layout>

<style>
  /* 헤더 */
  .header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0 0.5rem 0;
    color: #111827;
  }

  .subtitle {
    font-size: 1rem;
    color: #6b7280;
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
    border: 1px solid #e5e7eb;
  }

  /* 탭 네비게이션 */
  .tabs {
    max-width: 800px;
    margin: 0 auto 2rem;
    display: flex;
    gap: 0.5rem;
    background: white;
    padding: 0.5rem;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
  }

  .tab {
    flex: 1;
    padding: 0.75rem;
    background: transparent;
    color: #374151;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
  }

  .tab:hover {
    background: #f3f4f6;
  }

  .tab.active {
    background: #3b82f6;
    color: white;
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    border: 1px solid #e5e7eb;
  }

  .tab-content h2 {
    margin: 0 0 0.5rem 0;
    color: #111827;
  }

  .description {
    color: #6b7280;
    margin-bottom: 1.5rem;
  }

  .warning {
    padding: 1rem;
    background: #fef3c7;
    border: 1px solid #fbbf24;
    border-radius: 4px;
    color: #92400e;
    text-align: center;
  }

  /* 정보 카드 */
  .info-card {
    color: #374151;
  }

  .info-card h3 {
    margin: 1.5rem 0 0.5rem 0;
    color: #3b82f6;
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
    background: #f3f4f6;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    color: #dc2626;
  }

  .info-card pre {
    background: #f3f4f6;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    margin: 0.5rem 0;
    border: 1px solid #e5e7eb;
  }

  .info-card pre code {
    background: none;
    padding: 0;
    color: #374151;
  }

  /* 푸터 */
  .footer {
    max-width: 800px;
    margin: 2rem auto 0;
    padding-top: 2rem;
    border-top: 1px solid #e5e7eb;
    text-align: center;
    color: #6b7280;
  }

  .footer p {
    margin: 0;
    font-size: 0.875rem;
  }

  /* 반응형 */
  @media (max-width: 640px) {
    .title {
      font-size: 1.5rem;
    }

    .subtitle {
      font-size: 0.875rem;
    }

    .tab-content {
      padding: 1rem;
    }
  }
</style>
