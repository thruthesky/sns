<svelte:options customElement="sns-topbar" />

<script>
  /**
   * 탑바 컴포넌트 (Web Component)
   *
   * 모든 페이지 상단에 고정되어 표시되는 네비게이션 바입니다.
   * 사용자의 displayName과 photoUrl을 RTDB에서 실시간으로 감시하여 표시합니다.
   *
   * 사용법:
   * <sns-topbar></sns-topbar>
   */

  import { Menu, MessageCircle, Users, User, LogOut, LayoutGrid } from 'lucide-svelte';
  import { user, signOut } from '../stores/auth.js';
  import { login } from '../utils/firebase-login-user.svelte.js';
  import { t } from '../stores/i18n.js';
  import { pageTitle } from '../stores/pageTitle.js';
  import { onMount } from 'svelte';

  // 반응형 상태
  let dropdownOpen = $state(false);

  /**
   * 로그아웃 핸들러
   */
  async function handleLogout() {
    const result = await signOut();
    if (result.success) {
      // 로그아웃 성공 이벤트 발생
      const event = new CustomEvent('logout-success', {
        bubbles: true,
        composed: true
      });
      dispatchEvent(event);
    }
    dropdownOpen = false;
  }

  /**
   * 사용자 이름의 첫 글자를 가져옴 (아바타 표시용)
   * login.data에서 displayName을 가져와 실시간 업데이트를 지원합니다.
   */
  function getUserInitial() {
    // Firebase Realtime Database에서 실시간 동기화되는 displayName 사용
    if (login.data?.displayName) {
      return login.data.displayName.charAt(0).toUpperCase();
    }
    // Firebase Auth의 이메일 사용 (static 속성)
    if (login.email) {
      return login.email.charAt(0).toUpperCase();
    }
    return 'U';
  }

  /**
   * 드롭다운 토글
   */
  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }

  /**
   * 드롭다운 외부 클릭 시 닫기
   */
  function handleClickOutside(event) {
    const dropdown = document.querySelector('.dropdown-menu');
    const trigger = document.querySelector('.dropdown-trigger');

    if (dropdown && !dropdown.contains(event.target) && !trigger?.contains(event.target)) {
      dropdownOpen = false;
    }
  }

  // 드롭다운 외부 클릭 감지
  onMount(() => {
    document.addEventListener('click', handleClickOutside);

    // 클린업 함수
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<!-- 탑바 -->
<header class="topbar">
  <div class="container">
    <!-- 왼쪽: 로고 + 페이지 제목 -->
    <div class="logo-section">
      <!-- 로고 이미지 -->
      <a href="/" class="logo-link">
        <img src="/logo.png" alt="로고" class="logo-img" />
      </a>

      <!-- 페이지 제목 -->
      {#if $pageTitle}
        <div class="page-title-inline">
          <h1 class="page-title">{$pageTitle}</h1>
        </div>
      {/if}
    </div>

    <!-- 오른쪽: 네비게이션 -->
    <nav class="nav">
      {#if $user}
        <!-- 데스크톱 메뉴 -->
        <div class="desktop-menu">
          <!-- 게시판 버튼 -->
          <a href="/post/list" class="nav-button">
            <LayoutGrid size={16} />
            <span>{$t('게시판')}</span>
          </a>

          <!-- 채팅 버튼 -->
          <a href="/chat/list" class="nav-button">
            <MessageCircle size={16} />
            <span>{$t('채팅')}</span>
          </a>

          <!-- 사용자 찾기 버튼 -->
          <a href="/user/list" class="nav-button">
            <Users size={16} />
            <span>{$t('사용자찾기')}</span>
          </a>

          <!-- 프로필 드롭다운 -->
          <div class="dropdown">
            <button
              class="profile-button dropdown-trigger"
              onclick={toggleDropdown}
              type="button"
            >
              <div class="avatar">
                {#if login.data?.photoUrl}
                  <!-- Firebase Realtime Database에서 실시간 동기화되는 프로필 사진 -->
                  <img src={login.data.photoUrl} alt="프로필" class="avatar-image" />
                {:else}
                  <!-- 사진이 없으면 사용자 이름의 첫 글자 표시 -->
                  <div class="avatar-fallback">{getUserInitial()}</div>
                {/if}
              </div>
              <span class="profile-name">
                {login.data?.displayName || login.email}
              </span>
            </button>

            {#if dropdownOpen}
              <div class="dropdown-menu">
                <div class="dropdown-label">{$t('내계정')}</div>
                <div class="dropdown-divider"></div>
                <a href="/user/profile" class="dropdown-item">
                  <User size={16} />
                  <span>{$t('프로필수정')}</span>
                </a>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" onclick={handleLogout} type="button">
                  <LogOut size={16} />
                  <span>{$t('로그아웃')}</span>
                </button>
              </div>
            {/if}
          </div>

          <!-- 메뉴 아이콘 -->
          <a href="/menu" class="icon-button" title={$t('메뉴')}>
            <Menu size={24} />
          </a>
        </div>

        <!-- 모바일 메뉴 -->
        <div class="mobile-menu">
          <a href="/post/list" class="icon-button" title={$t('게시판')}>
            <LayoutGrid size={20} />
          </a>
          <a href="/user/list" class="icon-button" title={$t('사용자찾기')}>
            <Users size={20} />
          </a>
          <a href="/chat/list" class="icon-button" title={$t('채팅')}>
            <MessageCircle size={20} />
          </a>
          <a href="/user/profile" class="icon-button" title={$t('프로필')}>
            <div class="avatar avatar-small">
              {#if login.data?.photoUrl}
                <!-- Firebase Realtime Database에서 실시간 동기화되는 프로필 사진 -->
                <img
                  src={login.data.photoUrl}
                  alt={$t('프로필')}
                  class="avatar-image"
                />
              {:else}
                <!-- 사진이 없으면 사용자 이름의 첫 글자 표시 -->
                <div class="avatar-fallback avatar-fallback-small">{getUserInitial()}</div>
              {/if}
            </div>
          </a>
          <a href="/menu" class="icon-button" title={$t('메뉴')}>
            <Menu size={24} />
          </a>
        </div>
      {:else}
        <!-- 로그인하지 않은 경우 -->
        <!-- 데스크톱 메뉴 -->
        <div class="desktop-menu">
          <!-- 게시판 버튼 -->
          <a href="/post/list" class="nav-button">
            <LayoutGrid size={16} />
            <span>{$t('게시판')}</span>
          </a>

          <!-- 채팅 버튼 -->
          <a href="/chat/list" class="nav-button">
            <MessageCircle size={16} />
            <span>{$t('채팅')}</span>
          </a>

          <!-- 로그인 버튼 -->
          <a href="/user/login" class="nav-button">{$t('로그인')}</a>

          <!-- 메뉴 아이콘 -->
          <a href="/menu" class="icon-button" title={$t('메뉴')}>
            <Menu size={20} />
          </a>
        </div>

        <!-- 모바일 메뉴 -->
        <div class="mobile-menu">
          <!-- 게시판 아이콘 -->
          <a href="/post/list" class="icon-button" title={$t('게시판')}>
            <LayoutGrid size={20} />
          </a>

          <!-- 채팅 아이콘 -->
          <a href="/chat/list" class="icon-button" title={$t('채팅')}>
            <MessageCircle size={20} />
          </a>

          <!-- 로그인 아이콘 -->
          <a href="/user/login" class="icon-button" title={$t('로그인')}>
            <User size={20} />
          </a>

          <!-- 메뉴 아이콘 -->
          <a href="/menu" class="icon-button" title={$t('메뉴')}>
            <Menu size={24} />
          </a>
        </div>
      {/if}
    </nav>
  </div>
</header>

<style>
  /* 탑바 */
  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    border-bottom: 1px solid #e5e7eb;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    background-color: white;
  }

  /* 컨테이너 */
  .container {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    height: 4rem;
    align-items: center;
    padding: 0 1rem;
  }

  /* 로고 */
  .logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    flex-shrink: 0;
  }

  /* 로고 섹션 (로고 + 페이지 제목) */
  .logo-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-shrink: 0;
  }

  /* 로고 이미지 */
  .logo-img {
    height: 2rem;
    width: auto;
    display: block;
  }

  /* 페이지 제목 인라인 표시 */
  .page-title-inline {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    border-left: 1px solid #e5e7eb;
  }

  /* 페이지 제목 */
  .page-title {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
  }

  /* 네비게이션 */
  .nav {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    flex-shrink: 0;
    margin-left: auto;
  }

  /* 데스크톱 메뉴 */
  .desktop-menu {
    display: none;
    align-items: center;
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    .desktop-menu {
      display: flex;
    }
  }

  /* 모바일 메뉴 */
  .mobile-menu {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  @media (min-width: 768px) {
    .mobile-menu {
      display: none;
    }
  }

  /* 네비게이션 버튼 */
  .nav-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: transparent;
    color: inherit;
    border: none;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s;
  }

  .nav-button:hover {
    background-color: #f3f4f6;
  }

  /* 주요 버튼 */
  .primary-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s;
  }

  .primary-button:hover {
    background-color: #2563eb;
  }

  /* 아이콘 버튼 */
  .icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: transparent;
    color: inherit;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s;
  }

  .icon-button:hover {
    background-color: #f3f4f6;
  }

  /* 프로필 버튼 */
  .profile-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: transparent;
    color: inherit;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .profile-button:hover {
    background-color: #f3f4f6;
  }

  /* 프로필 이름 */
  .profile-name {
    display: none;
    font-size: 0.875rem;
  }

  @media (min-width: 1024px) {
    .profile-name {
      display: inline-block;
    }
  }

  /* 아바타 */
  .avatar {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e5e7eb;
  }

  .avatar-small {
    width: 1.75rem;
    height: 1.75rem;
  }

  .avatar-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .avatar-fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 500;
    color: #6b7280;
  }

  .avatar-fallback-small {
    font-size: 0.625rem;
  }

  /* 드롭다운 */
  .dropdown {
    position: relative;
  }

  .dropdown-menu {
    position: absolute;
    right: 0;
    top: calc(100% + 0.5rem);
    min-width: 12rem;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    z-index: 50;
  }

  .dropdown-label {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: #111827;
  }

  .dropdown-divider {
    height: 1px;
    background-color: #e5e7eb;
    margin: 0.25rem 0;
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.5rem 0.75rem;
    background: transparent;
    color: inherit;
    border: none;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    text-align: left;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s;
  }

  .dropdown-item:hover {
    background-color: #f3f4f6;
  }
</style>
