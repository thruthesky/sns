<script>
  /**
   * 사용자 목록 페이지
   *
   * Firebase Realtime Database의 users 노드에서 사용자 목록을 가져와
   * 무한 스크롤 형식으로 표시하는 페이지입니다.
   *
   * DatabaseListView 컴포넌트를 사용하여 구현되었습니다.
   */
  import DatabaseListView from "../lib/components/DatabaseListView.svelte";
  import { t } from "../lib/stores/i18n.js";
  import { login } from "../lib/utils/firebase-login-user.svelte.js";
  import { onMount } from "svelte";
  import { setPageTitle } from "../lib/stores/pageTitle.js";

  /**
   * 날짜 포맷팅 함수
   * @param {number} timestamp - Unix 타임스탬프
   * @returns {string} 포맷된 날짜 문자열
   */
  function formatDate(timestamp) {
    if (!timestamp) return $t("정보없음");
    const date = new Date(timestamp);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  /**
   * 페이지 초기화
   * 페이지 제목을 설정합니다.
   */
  onMount(() => {
    setPageTitle($t("사용자찾기"));
  });

  /**
   * 사용자 프로필로 이동
   * @param {string} uid - 사용자 UID
   */
  function goToProfile(uid) {
    if (uid === login.uid) {
      // 자신의 프로필로 이동
      window.history.pushState({}, "", "/user/profile");
      window.dispatchEvent(new PopStateEvent("popstate"));
    } else {
      // 다른 사용자 프로필로 이동 (추후 구현)
      console.log("다른 사용자 프로필:", uid);
    }
  }
</script>

<!-- 사용자 목록 (무한 스크롤) -->
<!--
  임시로 nickname으로 정렬합니다.
  실제로는 Firebase 데이터에 createdAt 필드를 추가하고 indexOn을 설정한 후
  orderBy="createdAt"으로 변경해야 합니다.
-->
<DatabaseListView
  path="users"
  pageSize={15}
  orderBy="createdAt"
  threshold={300}
  reverse={false}
>
  <!-- 개별 사용자 카드 -->
  {#snippet item(itemData)}
    <div
      class="user-card"
      role="button"
      tabindex="0"
      onclick={() => goToProfile(itemData.key)}
      onkeydown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          goToProfile(itemData.key);
        }
      }}
    >
      <!-- 프로필 사진 -->
      <div class="user-avatar">
        {#if itemData.data?.photoUrl || itemData.data?.photoURL}
          <img
            src={itemData.data?.photoUrl ?? itemData.data?.photoURL}
            alt={itemData.data?.displayName || $t("사용자")}
          />
        {:else}
          <div class="avatar-placeholder">
            {itemData.data?.displayName?.charAt(0)?.toUpperCase() || "?"}
          </div>
        {/if}
      </div>

      <!-- 사용자 정보 -->
      <div class="user-info">
        <h3 class="user-name">
          {itemData.data?.displayName || $t("이름없음")}
          {#if itemData.key === login.uid}
            <span class="badge-me">{$t("나뱃지")}</span>
          {/if}
        </h3>

        <h5>{itemData.key}</h5>

        {#if itemData.data?.email}
          <p class="user-email">{itemData.data.email}</p>
        {/if}

        {#if itemData.data?.bio}
          <p class="user-bio">{itemData.data.bio}</p>
        {/if}

        <p class="user-date">
          {$t("가입일")} {formatDate(itemData.data?.createdAt)}
        </p>
      </div>

      <!-- 프로필 보기 버튼 -->
      <div class="user-actions">
        <button
          class="btn-view-profile"
          onclick={(e) => {
            e.stopPropagation();
            goToProfile(itemData.key);
          }}
        >
          {$t("프로필보기")}
        </button>
      </div>
    </div>
  {/snippet}

  <!-- 로딩 상태 -->
  {#snippet loading()}
    <div class="loading-state">
      <div class="spinner"></div>
      <p>{$t("사용자목록로딩")}</p>
    </div>
  {/snippet}

  <!-- 빈 상태 -->
  {#snippet empty()}
    <div class="empty-state">
      <p class="empty-icon">👥</p>
      <p class="empty-text">{$t("등록된사용자없음")}</p>
    </div>
  {/snippet}

  <!-- 에러 상태 -->
  {#snippet error(errorMessage)}
    <div class="error-state">
      <p class="error-icon">⚠️</p>
      <p class="error-text">{$t("사용자목록로드실패")}</p>
      <p class="error-detail">{errorMessage}</p>
    </div>
  {/snippet}

  <!-- 더 로드 중 -->
  {#snippet loadingMore()}
    <div class="loading-more-state">
      <div class="spinner-small"></div>
      <p>{$t("더많은사용자로딩")}</p>
    </div>
  {/snippet}

  <!-- 더 이상 데이터 없음 -->
  {#snippet noMore()}
    <div class="no-more-state">
      <p>{$t("모든사용자로드완료")}</p>
    </div>
  {/snippet}
</DatabaseListView>

<style>
  /* ============================================================================
     사용자 카드
     ============================================================================ */
  .user-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .user-card:hover {
    background-color: #f9fafb;
  }

  .user-card:focus {
    outline: 2px solid #3b82f6;
    outline-offset: -2px;
    background-color: #f9fafb;
  }

  .user-card:last-child {
    border-bottom: none;
  }

  /* ============================================================================
     프로필 사진 (Avatar)
     ============================================================================ */
  .user-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    background-color: #e5e7eb;
  }

  .user-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .avatar-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3b82f6;
    color: white;
    font-size: 1.25rem;
    font-weight: bold;
  }

  /* ============================================================================
     사용자 정보
     ============================================================================ */
  .user-info {
    flex: 1;
    min-width: 0;
  }

  .user-name {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
    margin: 0 0 0.25rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .badge-me {
    display: inline-block;
    padding: 0.125rem 0.5rem;
    background-color: #3b82f6;
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 9999px;
  }

  .user-email {
    color: #6b7280;
    font-size: 0.875rem;
    margin: 0 0 0.25rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .user-bio {
    color: #374151;
    font-size: 0.875rem;
    margin: 0 0 0.25rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .user-date {
    color: #9ca3af;
    font-size: 0.75rem;
    margin: 0;
  }

  /* ============================================================================
     사용자 액션 버튼
     ============================================================================ */
  .user-actions {
    flex-shrink: 0;
  }

  .btn-view-profile {
    padding: 0.5rem 1rem;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .btn-view-profile:hover {
    background-color: #2563eb;
  }

  /* ============================================================================
     상태 메시지 (로딩, 빈 상태, 에러)
     ============================================================================ */
  .loading-state,
  .empty-state,
  .error-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1rem;
    text-align: center;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #e5e7eb;
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-bottom: 1rem;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .empty-icon,
  .error-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .empty-text,
  .error-text {
    color: #6b7280;
    font-size: 1rem;
    margin: 0 0 0.5rem 0;
  }

  .error-detail {
    color: #9ca3af;
    font-size: 0.875rem;
    margin: 0;
  }

  /* ============================================================================
     더 로드 중 & 더 이상 없음
     ============================================================================ */
  .loading-more-state,
  .no-more-state {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1.5rem 1rem;
    text-align: center;
  }

  .spinner-small {
    width: 20px;
    height: 20px;
    border: 3px solid #e5e7eb;
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  .loading-more-state p,
  .no-more-state p {
    color: #6b7280;
    font-size: 0.875rem;
    margin: 0;
  }

  /* ============================================================================
     반응형 (모바일)
     ============================================================================ */
  @media (max-width: 640px) {
    .user-card {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .user-avatar {
      width: 40px;
      height: 40px;
    }

    .user-actions {
      width: 100%;
    }

    .btn-view-profile {
      width: 100%;
    }
  }
</style>
