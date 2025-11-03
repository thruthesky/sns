<!--
  Toast 알림 컴포넌트

  화면 하단에 짧은 알림 메시지를 표시합니다.
  여러 개의 toast가 쌓여서 표시될 수 있습니다.

  사용법:
  1. App.svelte 등 최상위 컴포넌트에 추가:
     <Toast />

  2. 원하는 곳에서 toast 표시:
     import { showToast } from '$lib/stores/toast.js';
     showToast('메시지 내용', 'success');

  Props: 없음 (store에서 데이터를 가져옴)
-->

<script>
  import { toasts, removeToast } from '../stores/toast.js';

  /**
   * Toast 아이콘 가져오기
   * 타입에 따라 다른 아이콘을 반환합니다.
   * @param {string} type - toast 타입 (success, error, info, warning)
   * @returns {string} 아이콘 문자
   */
  function getIcon(type) {
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
  /* Toast 컨테이너 - 화면 하단 중앙에 고정 */
  .toast-container {
    position: fixed;
    bottom: 2rem;
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
    padding: 1rem 1.25rem;
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    pointer-events: auto;
    min-width: 300px;
    max-width: 500px;
    animation: slideIn 0.3s ease-out;
    border-left: 4px solid;
  }

  /* 슬라이드 인 애니메이션 */
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 타입별 색상 - Success (성공) */
  .toast-success {
    border-left-color: #10b981;
  }

  .toast-success .toast-icon {
    color: #10b981;
    background-color: #d1fae5;
  }

  /* 타입별 색상 - Error (에러) */
  .toast-error {
    border-left-color: #ef4444;
  }

  .toast-error .toast-icon {
    color: #ef4444;
    background-color: #fee2e2;
  }

  /* 타입별 색상 - Info (정보) */
  .toast-info {
    border-left-color: #3b82f6;
  }

  .toast-info .toast-icon {
    color: #3b82f6;
    background-color: #dbeafe;
  }

  /* 타입별 색상 - Warning (경고) */
  .toast-warning {
    border-left-color: #f59e0b;
  }

  .toast-warning .toast-icon {
    color: #f59e0b;
    background-color: #fef3c7;
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
    font-size: 0.875rem;
    color: #111827;
    line-height: 1.5;
  }

  /* Toast 닫기 버튼 */
  .toast-close {
    background: none;
    border: none;
    color: #9ca3af;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
    padding: 0;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;
    flex-shrink: 0;
  }

  .toast-close:hover {
    color: #111827;
  }

  /* 반응형 - 모바일 */
  @media (max-width: 640px) {
    .toast-container {
      bottom: 1rem;
      max-width: 95%;
    }

    .toast {
      min-width: auto;
      width: 100%;
      padding: 0.875rem 1rem;
    }

    .toast-message {
      font-size: 0.8125rem;
    }
  }
</style>
