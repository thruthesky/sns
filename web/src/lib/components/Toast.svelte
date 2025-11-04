<!--
  Toast 알림 컴포넌트

  화면 상단에 강한 색상의 알림 메시지를 표시합니다.
  여러 개의 toast가 쌓여서 표시될 수 있습니다.

  사용법:
  1. App.svelte 등 최상위 컴포넌트에 추가:
     <Toast />

  2. 원하는 곳에서 toast 표시:
     import { showToast } from '$lib/stores/toast.js';
     showToast('메시지 내용', 'success');

  Props: 없음 (store에서 데이터를 가져옴)
-->

<script lang="ts">
  import { toasts, removeToast } from '../stores/toast.js';

  /**
   * Toast 타입
   */
  type ToastType = 'success' | 'error' | 'info' | 'warning';

  /**
   * Toast 아이콘 가져오기
   * 타입에 따라 다른 아이콘을 반환합니다.
   */
  function getIcon(type: ToastType): string {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✗';
      case 'info':
        return 'ℹ';
      case 'warning':
        return '⚠';
      default:
        return 'ℹ';
    }
  }
</script>

<!-- Toast 컨테이너 -->
<div class="toast-container">
  {#each $toasts as toast (toast.id)}
    <div class="toast toast-{toast.type}" role="alert">
      <!-- 아이콘 -->
      <span class="toast-icon">{getIcon(toast.type)}</span>

      <!-- 메시지 -->
      <span class="toast-message">{toast.message}</span>

      <!-- 닫기 버튼 -->
      <button
        class="toast-close"
        onclick={() => removeToast(toast.id)}
        aria-label="닫기"
        type="button"
      >
        ×
      </button>
    </div>
  {/each}
</div>

<style>
  /* Toast 컨테이너 - 화면 상단 중앙에 고정 */
  .toast-container {
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    pointer-events: none;
    max-width: 90%;
    width: auto;
  }

  /* 개별 Toast 항목 */
  .toast {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
    pointer-events: auto;
    min-width: 320px;
    max-width: 500px;
    animation: slideDown 0.4s ease-out;
    font-weight: 500;
  }

  /* 슬라이드 다운 애니메이션 - 위에서 아래로 */
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 타입별 색상 - Success (성공) - 강렬한 초록색 */
  .toast-success {
    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
    color: #ffffff;
  }

  .toast-success .toast-icon {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.25);
  }

  /* 타입별 색상 - Error (에러) - 강렬한 빨간색 */
  .toast-error {
    background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
    color: #ffffff;
  }

  .toast-error .toast-icon {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.25);
  }

  /* 타입별 색상 - Info (정보) - 강렬한 파란색 */
  .toast-info {
    background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
    color: #ffffff;
  }

  .toast-info .toast-icon {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.25);
  }

  /* 타입별 색상 - Warning (경고) - 강렬한 주황색 */
  .toast-warning {
    background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
    color: #ffffff;
  }

  .toast-warning .toast-icon {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.25);
  }

  /* Toast 아이콘 */
  .toast-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    font-size: 0.875rem;
    font-weight: 700;
    flex-shrink: 0;
  }

  /* Toast 메시지 */
  .toast-message {
    flex: 1;
    font-size: 0.9375rem;
    color: #ffffff;
    line-height: 1.5;
    font-weight: 500;
  }

  /* Toast 닫기 버튼 */
  .toast-close {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.75rem;
    line-height: 1;
    cursor: pointer;
    padding: 0;
    width: 1.75rem;
    height: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    flex-shrink: 0;
    border-radius: 0.25rem;
  }

  .toast-close:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.2);
  }

  /* 반응형 - 모바일 */
  @media (max-width: 640px) {
    .toast-container {
      top: 1rem;
      max-width: 95%;
    }

    .toast {
      min-width: auto;
      width: 100%;
      padding: 1rem 1.25rem;
    }

    .toast-message {
      font-size: 0.875rem;
    }
  }
</style>
