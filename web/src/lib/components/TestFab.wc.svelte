<svelte:options
  customElement={{
    tag: 'test-fab',
    shadow: 'none'
  }}
/>

<script>
  /**
   * 테스트용 Floating Action Button 컴포넌트
   *
   * 개발 및 테스트 환경에서 빠른 로그인과 서버 정보 확인을 위한 도구입니다.
   *
   * 주요 기능:
   * - 테스트 전화번호 계정으로 빠른 로그인
   * - 서버 정보 표시 (환경, 프로젝트 ID 등)
   * - 빌드 버전 정보 표시
   *
   * 테스트 계정 (이메일/비밀번호):
   * - A: apple@test.com / 12345a,*
   * - B: banana@test.com / 12345a,*
   * - C: cherry@test.com / 12345a,*
   * - D: durian@test.com / 12345a,*
   * - E: elderberry@test.com / 12345a,*
   * - F: fig@test.com / 12345a,*
   * - G: grape@test.com / 12345a,*
   * - H: honeydew@test.com / 12345a,*
   *
   * 주의: 이 컴포넌트는 개발 환경에서만 사용해야 합니다.
   */

  import { onMount } from 'svelte';
  import { auth } from '../utils/firebase.js';
  import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
  import { Settings, User, Server } from 'lucide-svelte';

  // 테스트 계정 데이터
  // Firebase Console의 "Authentication"에서 이메일/비밀번호로 로그인할 수 있는 계정들
  const TEST_ACCOUNTS = [
    { label: 'A', name: 'apple', email: 'apple@test.com' },
    { label: 'B', name: 'banana', email: 'banana@test.com' },
    { label: 'C', name: 'cherry', email: 'cherry@test.com' },
    { label: 'D', name: 'durian', email: 'durian@test.com' },
    { label: 'E', name: 'elderberry', email: 'elderberry@test.com' },
    { label: 'F', name: 'fig', email: 'fig@test.com' },
    { label: 'G', name: 'grape', email: 'grape@test.com' },
    { label: 'H', name: 'honeydew', email: 'honeydew@test.com' }
  ];

  // 테스트 계정 공통 비밀번호
  const TEST_PASSWORD = '12345a,*';

  // 상태 관리
  let isMenuOpen = $state(false); // 메뉴 열림 상태
  let isServerInfoOpen = $state(false); // 서버 정보 모달 열림 상태
  let isLoading = $state(false); // 로그인 진행 중 상태

  // 빌드 버전 정보 (현재 시간 기준)
  const buildTimestamp = Date.now();
  const buildDate = new Date(buildTimestamp).toLocaleString('ko-KR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  /**
   * 환경 변수에서 프로젝트 ID 가져오기
   * Vite는 import.meta.env를 사용
   */
  const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID || 'N/A';

  /**
   * 컴포넌트 마운트 시 초기화
   */
  onMount(() => {
    console.log('TestFab 컴포넌트가 마운트되었습니다.');
  });

  /**
   * 테스트 계정 로그인 핸들러
   *
   * Firebase 이메일/비밀번호 인증을 사용하여 테스트 계정으로 로그인합니다.
   * 계정이 없으면 자동으로 회원가입 후 로그인합니다.
   *
   * @param {Object} account - 테스트 계정 정보 (label, name, email)
   */
  async function handleTestLogin(account) {
    if (isLoading) return;

    isLoading = true;
    console.log(`${account.name} (${account.label}) 계정으로 로그인을 시도합니다...`);

    try {
      // 먼저 로그인 시도
      let userCredential;
      try {
        userCredential = await signInWithEmailAndPassword(auth, account.email, TEST_PASSWORD);
        console.log(`${account.name} 계정으로 로그인 성공!`);
      } catch (signInError) {
        // 로그인 실패 시 회원가입 시도
        if (signInError.code === 'auth/user-not-found' || signInError.code === 'auth/invalid-credential') {
          console.log(`${account.name} 계정이 없습니다. 회원가입을 진행합니다...`);

          // 회원가입
          userCredential = await createUserWithEmailAndPassword(auth, account.email, TEST_PASSWORD);

          // 프로필 업데이트 (displayName 설정)
          await updateProfile(userCredential.user, {
            displayName: account.name
          });

          console.log(`${account.name} 계정 회원가입 및 로그인 성공!`);
        } else {
          throw signInError;
        }
      }

      alert(`${account.name} (${account.label}) 계정으로 로그인되었습니다.`);

      // 메뉴 닫기
      isMenuOpen = false;

      // 페이지 새로고침하여 상태 업데이트
      window.location.href = '/';

    } catch (error) {
      console.error('로그인 오류:', error);

      // 오류 메시지 표시
      let errorMessage = '로그인에 실패했습니다.';
      if (error.code === 'auth/invalid-email') {
        errorMessage = '잘못된 이메일 형식입니다.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = '비밀번호가 일치하지 않습니다.';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = '너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주세요.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = '비밀번호가 너무 약합니다.';
      } else if (error.code === 'auth/email-already-in-use') {
        errorMessage = '이미 사용 중인 이메일입니다.';
      }

      alert(errorMessage + '\n오류 코드: ' + error.code);
    } finally {
      isLoading = false;
    }
  }

  /**
   * 메뉴 열기/닫기 토글
   */
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  /**
   * 서버 정보 모달 열기/닫기 토글
   */
  function toggleServerInfo() {
    isServerInfoOpen = !isServerInfoOpen;
    isMenuOpen = false; // 메뉴 닫기
  }

  /**
   * 메뉴 외부 클릭 시 메뉴 닫기
   */
  function handleClickOutside(event) {
    if (!event.target.closest('.test-fab-menu') && !event.target.closest('.test-fab-button')) {
      isMenuOpen = false;
    }
  }
</script>

<!-- 메인 Floating Action Button -->
<div
  class="test-fab-container"
>
  <!-- FAB 버튼 -->
  <button
    class="test-fab-button"
    class:loading={isLoading}
    onclick={toggleMenu}
    disabled={isLoading}
    aria-label="테스트 도구 열기"
  >
    <Settings size={24} />
  </button>

  <!-- 드롭다운 메뉴 -->
  {#if isMenuOpen}
    <div class="test-fab-menu" role="menu">
      <!-- 제목 -->
      <div class="menu-header">
        <span class="menu-title">테스트 도구</span>
      </div>

      <div class="menu-divider"></div>

      <!-- 테스트 계정 로그인 섹션 -->
      <div class="menu-section">
        <div class="section-title">
          <User size={16} />
          <span>테스트 계정 로그인</span>
        </div>

        <div class="account-list">
          {#each TEST_ACCOUNTS as account (account.label)}
            <button
              class="account-button"
              onclick={() => handleTestLogin(account)}
              disabled={isLoading}
              role="menuitem"
            >
              <span class="account-label">{account.label}</span>
              <span class="account-phone">{account.name}</span>
            </button>
          {/each}
        </div>
      </div>

      <div class="menu-divider"></div>

      <!-- 서버 정보 보기 버튼 -->
      <button class="menu-button" onclick={toggleServerInfo} role="menuitem">
        <Server size={16} />
        <span>서버 정보 보기</span>
      </button>

      <div class="menu-divider"></div>

      <!-- 빌드 버전 정보 -->
      <div class="version-info">
        <p class="version-label">빌드 버전</p>
        <p class="version-value">{buildDate}</p>
      </div>
    </div>
  {/if}
</div>

<!-- 서버 정보 모달 -->
{#if isServerInfoOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
  <div
    class="modal-overlay"
    onclick={toggleServerInfo}
    role="dialog"
    aria-modal="true"
    aria-labelledby="server-info-title"
    tabindex="-1"
  >
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="modal-content" onclick={(e) => e.stopPropagation()}>
      <h2 id="server-info-title" class="modal-title">서버 정보</h2>

      <div class="info-list">
        <div class="info-item">
          <span class="info-label">환경:</span>
          <span class="info-value">{import.meta.env.MODE || 'development'}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Svelte:</span>
          <span class="info-value">5.43.2</span>
        </div>
        <div class="info-item">
          <span class="info-label">Vite:</span>
          <span class="info-value">6.x</span>
        </div>
        <div class="info-item">
          <span class="info-label">Firebase:</span>
          <span class="info-value">설정됨</span>
        </div>
        <div class="info-item">
          <span class="info-label">프로젝트 ID:</span>
          <span class="info-value info-value-small">{projectId}</span>
        </div>
      </div>

      <button class="modal-close-button" onclick={toggleServerInfo}>
        닫기
      </button>
    </div>
  </div>
{/if}

<svelte:window onclick={handleClickOutside} />

<style>
  /* FAB 컨테이너 - 오른쪽 하단 고정 */
  .test-fab-container {
    position: fixed;
    z-index: 50;
    bottom: 1rem;
    right: 1rem;
  }

  /* FAB 버튼 */
  .test-fab-button {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 9999px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    background-color: rgba(180, 83, 9, 0.7);
    color: white;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    padding: 0;
  }

  .test-fab-button:hover {
    background-color: rgba(146, 64, 14, 0.8);
  }

  .test-fab-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .test-fab-button.loading {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* 드롭다운 메뉴 */
  .test-fab-menu {
    position: absolute;
    right: 0;
    bottom: 4rem;
    width: 14rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    overflow: hidden;
    animation: slideUp 0.2s ease-out;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 메뉴 헤더 */
  .menu-header {
    padding: 0.75rem 1rem;
    background-color: #f9fafb;
  }

  .menu-title {
    font-weight: 600;
    color: #1f2937;
  }

  /* 메뉴 구분선 */
  .menu-divider {
    border-top: 1px solid #e5e7eb;
  }

  /* 메뉴 섹션 */
  .menu-section {
    padding: 0.75rem 1rem;
  }

  .section-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
  }

  /* 테스트 계정 목록 */
  .account-list {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .account-button {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #f3f4f6;
    border: none;
    transition: background-color 0.15s ease;
    cursor: pointer;
  }

  .account-button:hover {
    background-color: #e5e7eb;
  }

  .account-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .account-label {
    font-family: monospace;
    font-weight: 700;
    color: #1f2937;
  }

  .account-phone {
    font-size: 0.875rem;
    color: #6b7280;
  }

  /* 메뉴 버튼 */
  .menu-button {
    width: 100%;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    border: none;
    transition: background-color 0.15s ease;
    cursor: pointer;
  }

  .menu-button:hover {
    background-color: #f9fafb;
  }

  /* 버전 정보 */
  .version-info {
    padding: 0.75rem 1rem;
  }

  .version-label {
    font-size: 0.75rem;
    color: #6b7280;
    margin-bottom: 0.25rem;
  }

  .version-value {
    font-family: monospace;
    font-weight: 700;
    color: #1f2937;
    background-color: #f1f5f9;
    border: 1px solid #cbd5e1;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }

  /* 모달 오버레이 */
  .modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    animation: fadeIn 0.2s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* 모달 컨텐츠 */
  .modal-content {
    background-color: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 1.5rem;
    max-width: 28rem;
    width: 100%;
    animation: slideIn 0.2s ease-out;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .modal-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1f2937;
  }

  /* 정보 목록 */
  .info-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .info-item {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
  }

  .info-label {
    color: #6b7280;
  }

  .info-value {
    font-family: monospace;
    color: #1f2937;
  }

  .info-value-small {
    font-size: 0.75rem;
  }

  /* 모달 닫기 버튼 */
  .modal-close-button {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    background-color: white;
    transition: background-color 0.15s ease;
    cursor: pointer;
  }

  .modal-close-button:hover {
    background-color: #f9fafb;
  }

  /* reCAPTCHA 컨테이너 숨김 */
  #test-recaptcha-container {
    display: none;
  }
</style>
