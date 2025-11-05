<svelte:options
  customElement={{
    tag: 'alert-dialog',
    shadow: 'none'
  }}
/>

<script lang="ts">
  /**
   * Alert Dialog 컴포넌트 (Web Component)
   *
   * 다양한 타입의 알림 다이얼로그를 표시합니다.
   * success, error, info, warning 타입을 지원하며 각 타입별로 다른 색상과 아이콘을 표시합니다.
   *
   * Props:
   * - open: 다이얼로그 표시 여부 (기본값: 'false')
   * - type: 알림 타입 ('success' | 'error' | 'info' | 'warning', 기본값: 'info')
   * - title: 다이얼로그 제목 (기본값: '')
   * - message: 다이얼로그 내용 (기본값: '')
   * - confirmText: 확인 버튼 텍스트 (기본값: '확인')
   * - onconfirm: 확인 버튼 클릭 시 호출될 콜백 함수 (선택)
   * - onclose: 다이얼로그 닫기 시 호출될 콜백 함수 (선택)
   *
   * 사용법 1 (Svelte 컴포넌트에서 - 콜백 방식 권장):
   * <alert-dialog
   *   open="true"
   *   type="error"
   *   title="오류"
   *   message="댓글이 있어 수정할 수 없습니다."
   *   confirmText="확인"
   *   onconfirm={handleConfirm}
   *   onclose={handleClose}
   * ></alert-dialog>
   *
   * 사용법 2 (일반 HTML/JavaScript - 이벤트 리스너 방식):
   * const dialog = document.querySelector('alert-dialog');
   * dialog.addEventListener('confirm', () => { ... });
   * dialog.addEventListener('close', () => { ... });
   *
   * 이벤트:
   * - confirm: 확인 버튼 클릭 시 발생 (CustomEvent)
   * - close: 다이얼로그 닫기 시 발생 (CustomEvent)
   */

  import { CheckCircle2, XCircle, Info, AlertTriangle, X } from 'lucide-svelte';

  /**
   * AlertDialog 타입 정의
   */
  type AlertType = 'success' | 'error' | 'info' | 'warning';

  /**
   * Props (HTML 속성은 항상 문자열로 전달됨)
   */
  let {
    open = 'false',
    type = 'info',
    title = '',
    message = '',
    confirmText = '확인',
    onconfirm,
    onclose,
  }: {
    open?: string;
    type?: AlertType;
    title?: string;
    message?: string;
    confirmText?: string;
    onconfirm?: () => void;
    onclose?: () => void;
  } = $props();

  /**
   * 다이얼로그 표시 여부 (문자열을 boolean으로 변환)
   */
  const isOpen = $derived(open === 'true' || open === '');

  /**
   * 타입별 아이콘 컴포넌트 가져오기
   */
  function getIconComponent(alertType: AlertType) {
    switch (alertType) {
      case 'success':
        return CheckCircle2;
      case 'error':
        return XCircle;
      case 'info':
        return Info;
      case 'warning':
        return AlertTriangle;
      default:
        return Info;
    }
  }

  /**
   * 타입별 색상 클래스 가져오기
   */
  function getTypeClass(alertType: AlertType): string {
    return `alert-${alertType}`;
  }

  /**
   * 확인 버튼 클릭 핸들러
   * @param event - 클릭 이벤트
   */
  function handleConfirm(event: MouseEvent) {
    // 1. onconfirm 콜백 호출 (props로 전달된 경우)
    if (onconfirm) {
      onconfirm();
    }

    // 2. confirm 커스텀 이벤트 디스패치 (이벤트 방식 지원)
    const customEvent = new CustomEvent('confirm', {
      bubbles: true,
      composed: true,
    });
    // 버튼의 상위 alert-dialog 커스텀 엘리먼트에서 이벤트 발생
    const alertDialog = (event.target as HTMLElement).closest('alert-dialog');
    if (alertDialog) {
      alertDialog.dispatchEvent(customEvent);
    }
  }

  /**
   * 다이얼로그 닫기 핸들러
   * @param event - 클릭 이벤트 (선택적)
   */
  function handleClose(event?: MouseEvent) {
    // 1. onclose 콜백 호출 (props로 전달된 경우)
    if (onclose) {
      onclose();
    }

    // 2. close 커스텀 이벤트 디스패치 (이벤트 방식 지원)
    const customEvent = new CustomEvent('close', {
      bubbles: true,
      composed: true,
    });

    // 이벤트가 있으면 타겟에서 alert-dialog 찾기, 없으면 document에서 찾기
    let alertDialog: HTMLElement | null = null;
    if (event) {
      alertDialog = (event.target as HTMLElement).closest('alert-dialog');
    } else {
      alertDialog = document.querySelector('alert-dialog[open="true"]');
    }

    if (alertDialog) {
      alertDialog.dispatchEvent(customEvent);
    }
  }

  /**
   * 배경 클릭 시 닫기 (배경을 클릭했을 때만 닫힘)
   */
  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      handleClose(event);
    }
  }
</script>

<!-- Alert Dialog -->
{#if isOpen}
  <div class="alert-backdrop" onclick={handleBackdropClick}>
    <div class="alert-dialog {getTypeClass(type)}" role="alertdialog" aria-modal="true" aria-labelledby="alert-title" aria-describedby="alert-message">
      <!-- 닫기 버튼 -->
      <button class="alert-close-btn" onclick={handleClose} aria-label="닫기" type="button">
        <X size={20} />
      </button>

      <!-- 아이콘 -->
      <div class="alert-icon">
        <svelte:component this={getIconComponent(type)} size={48} strokeWidth={2} />
      </div>

      <!-- 제목 -->
      {#if title}
        <h2 id="alert-title" class="alert-title">{title}</h2>
      {/if}

      <!-- 메시지 -->
      {#if message}
        <p id="alert-message" class="alert-message">{message}</p>
      {/if}

      <!-- 확인 버튼 -->
      <button class="alert-confirm-btn" onclick={handleConfirm} type="button">
        {confirmText}
      </button>
    </div>
  </div>
{/if}

<style>
  /* Alert 배경 (반투명 오버레이) */
  .alert-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
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

  /* Alert Dialog 컨테이너 */
  .alert-dialog {
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: relative;
    animation: slideUp 0.3s ease-out;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 닫기 버튼 (우측 상단) */
  .alert-close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: #9ca3af;
    cursor: pointer;
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    transition: all 0.2s ease;
  }

  .alert-close-btn:hover {
    background-color: #f3f4f6;
    color: #6b7280;
  }

  /* Alert 아이콘 영역 */
  .alert-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-bottom: 0.5rem;
  }

  /* Success 타입 */
  .alert-success .alert-icon {
    background-color: #dcfce7;
    color: #16a34a;
  }

  .alert-success .alert-confirm-btn {
    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
    color: #ffffff;
  }

  .alert-success .alert-confirm-btn:hover {
    background: linear-gradient(135deg, #047857 0%, #059669 100%);
  }

  /* Error 타입 */
  .alert-error .alert-icon {
    background-color: #fee2e2;
    color: #dc2626;
  }

  .alert-error .alert-confirm-btn {
    background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
    color: #ffffff;
  }

  .alert-error .alert-confirm-btn:hover {
    background: linear-gradient(135deg, #b91c1c 0%, #dc2626 100%);
  }

  /* Info 타입 */
  .alert-info .alert-icon {
    background-color: #dbeafe;
    color: #2563eb;
  }

  .alert-info .alert-confirm-btn {
    background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
    color: #ffffff;
  }

  .alert-info .alert-confirm-btn:hover {
    background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
  }

  /* Warning 타입 */
  .alert-warning .alert-icon {
    background-color: #fef3c7;
    color: #d97706;
  }

  .alert-warning .alert-confirm-btn {
    background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
    color: #ffffff;
  }

  .alert-warning .alert-confirm-btn:hover {
    background: linear-gradient(135deg, #b45309 0%, #d97706 100%);
  }

  /* Alert 제목 */
  .alert-title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    text-align: center;
    line-height: 1.4;
  }

  /* Alert 메시지 */
  .alert-message {
    margin: 0;
    font-size: 1rem;
    color: #4b5563;
    text-align: center;
    line-height: 1.6;
    white-space: pre-wrap;
  }

  /* 확인 버튼 */
  .alert-confirm-btn {
    width: 100%;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 0.5rem;
  }

  .alert-confirm-btn:active {
    transform: scale(0.98);
  }

  /* 반응형 - 모바일 */
  @media (max-width: 640px) {
    .alert-dialog {
      max-width: 90%;
      padding: 1.5rem;
    }

    .alert-icon {
      width: 3.5rem;
      height: 3.5rem;
    }

    .alert-title {
      font-size: 1.25rem;
    }

    .alert-message {
      font-size: 0.9375rem;
    }
  }
</style>
