<script>
  /**
   * SNS Web Components 데모 애플리케이션
   *
   * Custom Elements를 테스트하고 시연하는 앱입니다.
   */

  // Custom Elements 로드
  import '../lib/index.js';
  import { t } from '../lib/stores/i18n.js';

  // 페이지 컴포넌트 임포트
  import Home from './Home.svelte';
  import LoginPage from './LoginPage.svelte';
  import Menu from './Menu.svelte';
  import UserProfile from './UserProfile.svelte';
  import PostListPage from './PostListPage.svelte';
  import PostDetail from './PostDetail.svelte';
  import ChatList from './ChatList.svelte';
  import Settings from './Settings.svelte';
  import About from './About.svelte';
  import Help from './Help.svelte';
  import Terms from './Terms.svelte';
  import Privacy from './Privacy.svelte';
  import Contact from './Contact.svelte';

  // 현재 경로 상태
  let currentPath = $state(window.location.pathname);

  /**
   * 경로 변경 감지
   */
  function handlePopState() {
    currentPath = window.location.pathname;
  }

  // popstate 이벤트 리스너 등록
  if (typeof window !== 'undefined') {
    window.addEventListener('popstate', handlePopState);
  }
</script>

<!-- 새 레이아웃 적용 -->
<sns-layout>
  <!-- 헤더 -->
  <header class="header">
    <h1 class="title">
      {$t('데모제목')}
    </h1>
    <p class="subtitle">
      {$t('데모부제')}
    </p>
  </header>

  <!-- 경로에 따라 다른 페이지 표시 -->
  <main class="content">
    {#if currentPath === '/user/login'}
      <!-- 로그인 페이지 -->
      <LoginPage />
    {:else if currentPath === '/menu'}
      <!-- 메뉴 페이지 -->
      <Menu />
    {:else if currentPath === '/user/profile'}
      <!-- 사용자 프로필 페이지 -->
      <UserProfile />
    {:else if currentPath === '/post/list'}
      <!-- 게시물 목록 페이지 -->
      <PostListPage />
    {:else if currentPath.startsWith('/post/detail/')}
      <!-- 게시물 상세 페이지 -->
      <PostDetail />
    {:else if currentPath === '/chat/list'}
      <!-- 채팅 목록 페이지 -->
      <ChatList />
    {:else if currentPath === '/settings'}
      <!-- 설정 페이지 -->
      <Settings />
    {:else if currentPath === '/about'}
      <!-- 앱 정보 페이지 -->
      <About />
    {:else if currentPath === '/help'}
      <!-- 도움말 페이지 -->
      <Help />
    {:else if currentPath === '/terms'}
      <!-- 이용 약관 페이지 -->
      <Terms />
    {:else if currentPath === '/privacy'}
      <!-- 개인정보 처리방침 페이지 -->
      <Privacy />
    {:else if currentPath === '/contact'}
      <!-- 문의하기 페이지 -->
      <Contact />
    {:else}
      <!-- 홈 페이지 (기본값) -->
      <Home />
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

  /* 콘텐츠 */
  .content {
    max-width: 800px;
    margin: 0 auto;
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
  }
</style>
