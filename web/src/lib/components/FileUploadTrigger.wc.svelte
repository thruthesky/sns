<svelte:options
  customElement={{
    tag: 'file-upload-trigger',
    shadow: 'none'
  }}
/>

<script lang="ts">
  /**
   * 파일 업로드 트리거 컴포넌트 (Web Component)
   *
   * 파일 선택 버튼을 제공하고, 선택한 파일을 Firebase Storage에 업로드합니다.
   * FileUploadList 컴포넌트와 같은 id를 사용하여 상태를 공유합니다.
   *
   * Props:
   * - id: 업로더 고유 ID (필수, FileUploadList와 동일한 값 사용)
   * - category: 업로드 카테고리 ('posts' | 'comments' | 'profile')
   * - multiple: 다중 파일 선택 가능 여부 (기본값: 'true')
   * - buttonText: 버튼 텍스트 (기본값: '파일 선택')
   *
   * 사용법:
   * <file-upload-trigger
   *   id="post-123"
   *   category="posts"
   *   multiple="true"
   *   buttonText="이미지 추가"
   * ></file-upload-trigger>
   */

  import { ImagePlus } from 'lucide-svelte';
  import { uploadFileWithProgress, type UploadCategory } from '$lib/services/storage';
  import {
    addFile,
    updateFileProgress,
    completeFileUpload,
    failFileUpload,
  } from '$lib/services/fileUploadState';
  import { t } from '$lib/stores/i18n';
  import { login } from '$lib/utils/firebase-login-user.svelte';

  /**
   * Props (HTML 속성은 항상 문자열로 전달됨)
   */
  let {
    id = '',
    category = 'posts',
    multiple = 'true',
    buttonText = '',
  }: {
    id?: string;
    category?: UploadCategory;
    multiple?: string;
    buttonText?: string;
  } = $props();

  /**
   * 파일 입력 요소 참조
   */
  let fileInput: HTMLInputElement | null = $state(null);

  /**
   * 업로드 진행 중 상태
   */
  let isUploading = $state(false);

  /**
   * 다중 파일 선택 가능 여부 (문자열을 boolean으로 변환)
   */
  const isMultiple = $derived(multiple === 'true' || multiple === '');

  /**
   * 버튼 텍스트 (기본값 또는 props)
   */
  const displayButtonText = $derived(buttonText || $t('파일선택'));

  /**
   * 파일 선택 버튼 클릭 핸들러
   */
  function handleButtonClick() {
    if (isUploading) return;
    fileInput?.click();
  }

  /**
   * 파일 선택 처리
   *
   * @param event - 파일 입력 이벤트
   */
  async function handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = input?.files;

    if (!files || files.length === 0) return;

    // 업로더 ID 검증
    if (!id) {
      console.error('[FileUploadTrigger] id prop is required');
      alert($t('error.file.invalidUrl'));
      return;
    }

    // 로그인 확인
    if (!login.isAuthenticated || !login.uid) {
      alert($t('로그인필요'));
      return;
    }

    // 파일 업로드 시작
    isUploading = true;

    try {
      // 선택한 모든 파일 업로드
      const uploadPromises = Array.from(files).map((file) =>
        uploadSingleFile(file)
      );

      await Promise.all(uploadPromises);
    } catch (error) {
      console.error('[FileUploadTrigger] Upload error:', error);
    } finally {
      isUploading = false;
      // 파일 입력 초기화
      if (input) {
        input.value = '';
      }
    }
  }

  /**
   * 단일 파일 업로드
   *
   * @param file - 업로드할 파일
   */
  async function uploadSingleFile(file: File) {
    // 파일 상태 추가
    const fileId = addFile(id, file);

    try {
      // Firebase Storage에 업로드
      const result = await uploadFileWithProgress(
        login.uid!,
        file,
        category as UploadCategory,
        (progress) => {
          // 진행률 업데이트
          updateFileProgress(id, fileId, progress);
        }
      );

      if (result.success && result.url) {
        // 업로드 완료
        completeFileUpload(id, fileId, result.url);
      } else {
        // 업로드 실패
        const errorMessage = result.error ? $t(result.error) : $t('error.unknown');
        failFileUpload(id, fileId, errorMessage);
      }
    } catch (error) {
      console.error('[FileUploadTrigger] Upload failed:', error);
      const errorMessage =
        error instanceof Error ? error.message : $t('error.unknown');
      failFileUpload(id, fileId, errorMessage);
    }
  }
</script>

<!-- 파일 업로드 트리거 버튼 -->
<div class="file-upload-trigger">
  <!-- 숨겨진 파일 입력 -->
  <input
    type="file"
    bind:this={fileInput}
    onchange={handleFileChange}
    accept="image/jpeg,image/png,image/webp"
    multiple={isMultiple}
    style="display: none;"
    aria-label={displayButtonText}
  />

  <!-- 업로드 버튼 -->
  <button
    type="button"
    class="upload-button"
    onclick={handleButtonClick}
    disabled={isUploading}
    aria-label={displayButtonText}
  >
    <ImagePlus size={20} />
    <span class="button-text">{displayButtonText}</span>
    {#if isUploading}
      <span class="uploading-indicator">⏳</span>
    {/if}
  </button>
</div>

<style>
  /* 트리거 컨테이너 */
  .file-upload-trigger {
    display: inline-block;
  }

  /* 업로드 버튼 */
  .upload-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1rem;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: #ffffff;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  }

  .upload-button:hover:not(:disabled) {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    transform: translateY(-1px);
  }

  .upload-button:active:not(:disabled) {
    transform: translateY(0);
  }

  .upload-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* 버튼 텍스트 */
  .button-text {
    line-height: 1;
  }

  /* 업로드 중 인디케이터 */
  .uploading-indicator {
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

  /* 반응형 - 모바일 */
  @media (max-width: 640px) {
    .upload-button {
      font-size: 0.8125rem;
      padding: 0.5rem 0.875rem;
    }
  }
</style>
