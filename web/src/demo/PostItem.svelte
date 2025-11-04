<script>
  /**
   * 게시글 아이템 컴포넌트
   *
   * 각 게시글을 표시하고, 실시간 좋아요 상태를 관리합니다.
   */
  import { database } from "../lib/utils/firebase.js";
  import { ref, update, get, increment } from "firebase/database";
  import { createRealtimeStore } from "../lib/stores/database.js";
  import { showToast } from "../lib/stores/toast.js";
  import { t } from "../lib/stores/i18n.js";

  // Props
  let {
    itemData,
    index,
    category,
    userId,
    onLike = () => {}
  } = $props();

  // 내 좋아요 상태를 실시간으로 구독
  const myLikeStore = userId
    ? createRealtimeStore(`post-props/${category}/${itemData.key}/likes/${userId}`)
    : null;

  /**
   * 좋아요 버튼 클릭 핸들러
   */
  async function handleLike() {
    // 1. 로그인 확인
    if (!userId) {
      alert($t("로그인필요"));
      window.location.href = "/user/login";
      return;
    }

    try {
      // 2. 현재 좋아요 상태 확인
      const likeRef = ref(
        database,
        `post-props/${category}/${itemData.key}/likes/${userId}`
      );

      const snapshot = await get(likeRef);
      const currentLikeValue = snapshot.val();

      // 3. 이미 좋아요를 했는지 확인
      if (currentLikeValue && currentLikeValue >= 1) {
        showToast("이미 좋아요를 하였습니다.", "info");
        return;
      }

      // 4. 좋아요 하지 않은 경우, Firebase에 좋아요 카운트를 1 증가
      await update(likeRef.parent, {
        [userId]: increment(1),
      });

      // 5. 성공 메시지 표시
      showToast("좋아요를 하였습니다.", "success");

      // 부모 컴포넌트에 알림
      onLike(itemData.key);
    } catch (error) {
      console.error("좋아요 오류:", error);
      showToast("좋아요 처리 중 오류가 발생했습니다.", "error");
    }
  }
</script>

<div class="post-item">
  <div class="post-item-top">
    <span class="post-category-pill">{category}</span>
    <span class="post-number">#{String(index + 1).padStart(2, "0")}</span>
  </div>

  <h3 class="post-title">{itemData.data.title}</h3>
  <p class="post-content">{itemData.data.content}</p>

  <div class="post-meta">
    <div class="author-chip">
      <span class="author-avatar">
        {(itemData.data.author || $t("익명")).charAt(0).toUpperCase()}
      </span>
      <span class="post-author">{itemData.data.author || $t("익명")}</span>
    </div>
    <span class="post-date">
      {new Date(itemData.data.createdAt).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </span>
  </div>

  <!-- 게시글 액션 버튼 영역 -->
  <div class="post-actions">
    <!-- 왼쪽 버튼 그룹 -->
    <div class="post-actions-left">
      <button class="action-btn" title={$t("댓글")}>
        💬 {$t("댓글")}
      </button>

      <button
        class="action-btn {myLikeStore && $myLikeStore >= 1 ? 'liked' : ''}"
        title={$t("좋아요")}
        onclick={handleLike}
      >
        {myLikeStore && $myLikeStore >= 1 ? '❤️' : '🤍'} {$t("좋아요")}
        {#if itemData.data.likeCount > 0}
          <span class="count">{itemData.data.likeCount}</span>
        {/if}
      </button>

      <button class="action-btn" title={$t("채팅")}>
        💬 {$t("채팅")}
      </button>

      <button class="action-btn" title={$t("신고")}>
        🚨 {$t("신고")}
      </button>
    </div>

    <!-- 오른쪽 버튼 그룹: 수정, 삭제 (작성자만 표시) -->
    <div class="post-actions-right">
      {#if userId === itemData.data.uid}
        <button class="action-btn edit icon-only" title={$t("수정")}>
          ✏️
        </button>
        <button class="action-btn delete icon-only" title={$t("삭제")}>
          🗑️
        </button>
      {/if}
    </div>
  </div>
</div>

<style>
  .post-item {
    padding: 1.5rem 1.75rem;
    border-radius: 0.85rem;
    background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
    border: 1px solid #e5e7eb;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
    margin: 1rem 0;
  }

  .post-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 28px rgba(17, 24, 39, 0.12);
  }

  .post-item-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .post-category-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.35rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #1d4ed8;
    background-color: #eff6ff;
  }

  .post-number {
    font-weight: 700;
    color: #9ca3af;
    font-size: 0.9rem;
  }

  .post-title {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
    color: #111827;
    line-height: 1.5;
  }

  .post-content {
    margin: 0;
    font-size: 0.925rem;
    color: #4b5563;
    line-height: 1.7;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .post-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    font-size: 0.8rem;
    color: #6b7280;
  }

  .author-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .author-avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    background: #1d4ed8;
    color: #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.85rem;
  }

  .post-date {
    color: #9ca3af;
    font-variant-numeric: tabular-nums;
  }

  .post-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding-top: 0.5rem;
  }

  .post-actions-left,
  .post-actions-right {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    flex-wrap: wrap;
  }

  .action-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.65rem;
    border: none;
    border-radius: 0.5rem;
    background-color: transparent;
    color: #6b7280;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .action-btn:hover {
    background-color: #f3f4f6;
    color: #111827;
  }

  .action-btn:active {
    transform: scale(0.95);
  }

  /* 좋아요 한 버튼 강조 표시 */
  .action-btn.liked {
    background-color: #fee2e2;
    color: #dc2626;
    font-weight: 600;
  }

  .action-btn.liked:hover {
    background-color: #fecaca;
    color: #b91c1c;
  }

  .count {
    font-weight: 600;
    font-size: 0.75rem;
  }
</style>
