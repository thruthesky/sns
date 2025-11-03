<svelte:options customElement="sns-left-sidebar" />

<script>
  /**
   * 왼쪽 사이드바 컴포넌트 (Web Component)
   *
   * 퀵메뉴 링크와 인증 상태에 따른 빠른 접근 링크를 제공합니다.
   *
   * 사용법:
   * <sns-left-sidebar></sns-left-sidebar>
   */

  import {
    Home,
    MessageCircle,
    Users,
    User,
    FileText,
    ExternalLink,
    BookOpen,
    LogIn
  } from 'lucide-svelte';
  import { user } from '../stores/auth.js';
  import { t, locale, setLocale, SUPPORTED_LOCALES } from '../stores/i18n.js';

  const LANGUAGE_OPTIONS = SUPPORTED_LOCALES;

  function handleLocaleSelect(code) {
    setLocale(code);
  }
</script>

<!-- 왼쪽 사이드바 -->
<aside class="sidebar">
  <div class="sidebar-content">
    <!-- 퀵메뉴 -->
    <h2 class="section-title">{$t('퀵메뉴')}</h2>
    <nav class="menu">
      <!-- 홈 -->
      <a href="/" class="menu-item">
        <Home size={20} />
        <span>{$t('홈')}</span>
      </a>

      <!-- 채팅 -->
      <a href="/chat/room" class="menu-item">
        <MessageCircle size={20} />
        <span>{$t('채팅')}</span>
      </a>

      <!-- 사용자 목록 -->
      <a href="/user/list" class="menu-item">
        <Users size={20} />
        <span>{$t('사용자목록')}</span>
      </a>

      <!-- 프로필 -->
      <a href="/user/profile" class="menu-item">
        <User size={20} />
        <span>{$t('내프로필')}</span>
      </a>

      <!-- 게시판 -->
      <a href="/post/list" class="menu-item">
        <FileText size={20} />
        <span>{$t('게시판')}</span>
      </a>
    </nav>

    <!-- 구분선 -->
    <div class="divider"></div>

    <!-- 시작하기 섹션 -->
    <div class="section">
      <h3 class="section-subtitle">{$t('시작하기')}</h3>
      <div class="menu">
        {#if $user}
          <!-- 로그인한 사용자 - 프로필 수정 링크 -->
          <a href="/user/profile" class="menu-item-small">
            <User size={16} />
            <span>{$t('회원정보수정')}</span>
          </a>
        {:else}
          <!-- 로그인하지 않은 사용자 - 로그인/회원가입 링크 -->
          <a href="/auth/login" class="menu-item-small">
            <LogIn size={16} />
            <span>{$t('로그인')}</span>
          </a>
          <a href="/auth/signup" class="menu-item-small">
            <User size={16} />
            <span>{$t('회원가입')}</span>
          </a>
        {/if}
      </div>
    </div>

    <!-- 구분선 -->
    <div class="divider"></div>

    <!-- 링크 섹션 -->
    <div class="menu">
      <!-- 회원 목록 -->
      <a href="/user/list" class="menu-item-small">
        <Users size={16} />
        <span>{$t('회원목록')}</span>
      </a>

      <!-- 프로젝트 GitHub -->
      <a
        href="https://github.com/thruthesky/vibe"
        target="_blank"
        rel="noopener noreferrer"
        class="menu-item-small"
      >
        <svg
          class="icon"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
        </svg>
        <span>{$t('프로젝트GitHub')}</span>
        <ExternalLink size={12} class="external-icon" />
      </a>

      <!-- 한바보 참여 단톡방 -->
      <a
        href="https://open.kakao.com/o/gn2qMetf"
        target="_blank"
        rel="noopener noreferrer"
        class="menu-item-small"
      >
        <MessageCircle size={16} />
        <span>{$t('한바보참여단톡방')}</span>
        <ExternalLink size={12} class="external-icon" />
      </a>

      <!-- 개발일지 -->
      <a href="/dev/history" class="menu-item-small">
        <BookOpen size={16} />
        <span>{$t('개발일지')}</span>
      </a>
    </div>

    <!-- 언어 설정 섹션 -->
    <div class="section language-section">
      <h3 class="section-subtitle">{$t('언어설정')}</h3>
      {#if true}
        {@const currentLanguage = LANGUAGE_OPTIONS.find(option => option.code === $locale) ?? LANGUAGE_OPTIONS[0]}
        <div class="language-current">
          <span class="language-current-label">{$t('현재언어')}</span>
          <span class="language-current-value">{$t(currentLanguage.labelKey)}</span>
        </div>
      {/if}
      <div class="language-options">
        {#each LANGUAGE_OPTIONS as option}
          <button
            type="button"
            class="language-button {option.code === $locale ? 'active' : ''}"
            onclick={() => handleLocaleSelect(option.code)}
          >
            {$t(option.labelKey)}
          </button>
        {/each}
      </div>
    </div>

    <!-- 빌드 타임스탬프 -->
    <div class="build-info">
      <div class="build-row">
        <span>{$t('빌드버전')}</span>
        <span class="build-timestamp">
          {new Date().toLocaleString('ko-KR', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })}
        </span>
      </div>
    </div>

    <!-- Copyleft 정보 -->
    <div class="copyleft">
      <p>
        {$t('카피레프트')}<br />
        {$t('AI소개')}
      </p>
    </div>
  </div>
</aside>

<style>
  /* 사이드바 */
  .sidebar {
    width: 16rem;
    border-right: 1px solid #e5e7eb;
    background-color: white;
    padding: 1rem;
    overflow-y: hidden;
    height: 100vh;
  }

  /* 사이드바 콘텐츠 */
  .sidebar-content {
    position: sticky;
    top: 5rem;
  }

  /* 섹션 제목 */
  .section-title {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #111827;
  }

  /* 섹션 부제목 */
  .section-subtitle {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #6b7280;
  }

  /* 메뉴 */
  .menu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  /* 메뉴 아이템 */
  .menu-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    color: #374151;
    text-decoration: none;
    transition: all 0.2s;
    cursor: pointer;
  }

  .menu-item:hover {
    background-color: #f3f4f6;
    color: #111827;
  }

  .menu-item.disabled {
    color: #9ca3af;
    cursor: not-allowed;
  }

  /* 작은 메뉴 아이템 */
  .menu-item-small {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    color: #374151;
    text-decoration: none;
    transition: all 0.2s;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
  }

  .menu-item-small:hover {
    background-color: #f3f4f6;
    color: #111827;
  }

  /* 외부 링크 아이콘 */
  .external-icon {
    margin-left: auto;
  }

  /* 아이콘 */
  .icon {
    flex-shrink: 0;
  }

  /* 구분선 */
  .divider {
    height: 1px;
    background-color: #e5e7eb;
    margin: 1.5rem 0;
  }

  /* 섹션 */
  .section {
    margin-bottom: 1.5rem;
  }

  /* 언어 설정 섹션 */
  .language-section {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid #e5e7eb;
  }

  .language-current {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    background-color: #f9fafb;
    margin-bottom: 0.75rem;
  }

  .language-current-label {
    font-size: 0.75rem;
    color: #6b7280;
  }

  .language-current-value {
    font-weight: 600;
    color: #111827;
    font-size: 0.9rem;
  }

  .language-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 0.5rem;
  }

  .language-button {
    padding: 0.5rem 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    background-color: #ffffff;
    color: #374151;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }

  .language-button:hover {
    background-color: #f3f4f6;
    border-color: #3b82f6;
    color: #1f2937;
  }

  .language-button.active {
    background-color: #3b82f6;
    border-color: #3b82f6;
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
  }

  /* 빌드 정보 */
  .build-info {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #e5e7eb;
    font-size: 0.75rem;
    color: #6b7280;
  }

  .build-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .build-timestamp {
    font-family: 'Courier New', monospace;
  }

  /* Copyleft 정보 */
  .copyleft {
    margin-top: 1rem;
    text-align: center;
    font-size: 0.75rem;
    color: #6b7280;
  }

  .copyleft p {
    line-height: 1.5;
  }

  /* 반응형: 모바일에서는 숨김 */
  @media (max-width: 768px) {
    .sidebar {
      display: none;
    }
  }
</style>
