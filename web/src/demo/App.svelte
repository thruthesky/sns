<script>
  /**
   * SNS Web Components 데모 애플리케이션
   *
   * Custom Elements를 테스트하고 시연하는 앱입니다.
   */

  // Custom Elements 로드
  import "../lib/index.js";

  // 페이지 컴포넌트 임포트
  import Home from "./Home.svelte";
  import LoginPage from "./LoginPage.svelte";
  import Menu from "./Menu.svelte";
  import UserProfile from "./UserProfile.svelte";
  import UserList from "./UserList.svelte";
  import PostListPage from "./PostListPage.svelte";
  import PostDetail from "./PostDetail.svelte";
  import ChatList from "./ChatList.svelte";
  import Settings from "./Settings.svelte";
  import About from "./About.svelte";
  import Help from "./Help.svelte";
  import Terms from "./Terms.svelte";
  import Privacy from "./Privacy.svelte";
  import Contact from "./Contact.svelte";
  import GenerateTestPosts from "./GenerateTestPosts.svelte";
  import Toast from "../lib/components/Toast.svelte";
  import RightSidebar from "./RightSidebar.svelte";

  // 현재 경로 상태
  let currentPath = $state(window.location.pathname);

  /**
   * 경로 변경 감지
   */
  function handlePopState() {
    currentPath = window.location.pathname;
  }

  // popstate 이벤트 리스너 등록
  if (typeof window !== "undefined") {
    window.addEventListener("popstate", handlePopState);
  }
</script>

<!-- 새 레이아웃 적용 -->
<sns-layout>
  <!-- 경로에 따라 다른 페이지 표시 -->
  <main class="content-with-sidebar">
    {#if currentPath === "/user/login"}
      <!-- 로그인 페이지 -->
      <LoginPage />
    {:else if currentPath === "/menu"}
      <!-- 메뉴 페이지 -->
      <Menu />
    {:else if currentPath === "/user/profile"}
      <!-- 사용자 프로필 페이지 -->
      <UserProfile />
    {:else if currentPath === "/user/list"}
      <!-- 사용자 목록 페이지 -->
      <UserList />
    {:else if currentPath === "/post/list"}
      <!-- 게시물 목록 페이지 -->
      <PostListPage />
    {:else if currentPath.startsWith("/post/detail/")}
      <!-- 게시물 상세 페이지 -->
      <PostDetail />
    {:else if currentPath === "/chat/list"}
      <!-- 채팅 목록 페이지 -->
      <ChatList />
    {:else if currentPath === "/settings"}
      <!-- 설정 페이지 -->
      <Settings />
    {:else if currentPath === "/about"}
      <!-- 앱 정보 페이지 -->
      <About />
    {:else if currentPath === "/help"}
      <!-- 도움말 페이지 -->
      <Help />
    {:else if currentPath === "/terms"}
      <!-- 이용 약관 페이지 -->
      <Terms />
    {:else if currentPath === "/privacy"}
      <!-- 개인정보 처리방침 페이지 -->
      <Privacy />
    {:else if currentPath === "/contact"}
      <!-- 문의하기 페이지 -->
      <Contact />
    {:else if currentPath === "/dev/generate-posts"}
      <!-- 테스트 게시글 생성 페이지 (개발자 도구) -->
      <GenerateTestPosts />
    {:else}
      <!-- 홈 페이지 (기본값) -->
      <Home />
    {/if}
  </main>

  <!-- 오른쪽 사이드바 -->
  <RightSidebar />
</sns-layout>

<!-- Toast 알림 컴포넌트 -->
<Toast />

<!-- 테스트용 Floating Action Button (개발 환경 전용) -->
<test-fab></test-fab>

<style>
  /* 콘텐츠 (사이드바와 함께) */
  .content-with-sidebar {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  /* 반응형 */
  @media (max-width: 1024px) {
    .content-with-sidebar {
      padding-right: 20px;
    }
  }
</style>
