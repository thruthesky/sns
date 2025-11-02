<svelte:options customElement="sns-layout" />

<script>
  /**
   * 레이아웃 컴포넌트 (Web Component)
   *
   * 3단 레이아웃을 구성합니다:
   * - Topbar (상단 고정)
   * - LeftSidebar (왼쪽, 데스크톱에서만 표시)
   * - 메인 콘텐츠 영역 (슬롯)
   * - RightSidebar (오른쪽, 데스크톱에서만 표시)
   *
   * 사용법:
   * <sns-layout>
   *   <!-- 여기에 콘텐츠를 넣습니다 -->
   * </sns-layout>
   *
   * 참고: 이 컴포넌트는 다른 Custom Elements를 포함하므로,
   * index.js에서 모든 컴포넌트가 등록된 후에 사용해야 합니다.
   */
</script>

<!-- 전체 레이아웃 -->
<div class="layout">
  <!-- 탑바 (상단 고정) -->
  <sns-topbar></sns-topbar>

  <!-- 메인 컨테이너 -->
  <div class="main-container">
    <!-- 왼쪽 사이드바 (데스크톱에서만 표시) -->
    <sns-left-sidebar class="left-sidebar"></sns-left-sidebar>

    <!-- 메인 콘텐츠 -->
    <main class="main-content">
      <slot></slot>
    </main>

    <!-- 오른쪽 사이드바 (데스크톱에서만 표시) -->
    <sns-right-sidebar class="right-sidebar"></sns-right-sidebar>
  </div>
</div>

<style>
  /* 전체 레이아웃 */
  .layout {
    min-height: 100vh;
    background-color: #f9fafb;
  }

  /* 메인 컨테이너 */
  .main-container {
    display: flex;
    margin-top: 4rem; /* Topbar 높이만큼 여백 */
    min-height: calc(100vh - 4rem);
  }

  /* 왼쪽 사이드바 */
  .left-sidebar {
    display: none;
  }

  @media (min-width: 768px) {
    .left-sidebar {
      display: block;
      position: sticky;
      top: 4rem;
      height: calc(100vh - 4rem);
      overflow-y: auto;
    }
  }

  /* 메인 콘텐츠 */
  .main-content {
    flex: 1;
    max-width: 100%;
    padding: 1.5rem;
    overflow-x: hidden;
  }

  @media (min-width: 768px) {
    .main-content {
      max-width: calc(100% - 16rem); /* LeftSidebar 너비 제외 */
    }
  }

  @media (min-width: 1024px) {
    .main-content {
      max-width: calc(100% - 32rem); /* LeftSidebar + RightSidebar 너비 제외 */
    }
  }

  /* 오른쪽 사이드바 */
  .right-sidebar {
    display: none;
  }

  @media (min-width: 1024px) {
    .right-sidebar {
      display: block;
      position: sticky;
      top: 4rem;
      height: calc(100vh - 4rem);
      overflow-y: auto;
    }
  }
</style>
