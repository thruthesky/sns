<svelte:options
  customElement={{
    tag: 'file-upload-list',
    shadow: 'none'
  }}
/>

<script lang="ts">
  /**
   * 파일 업로드 목록 컴포넌트 (Web Component)
   *
   * 업로드된 파일 목록을 표시하고, 각 파일의 진행률과 삭제 기능을 제공합니다.
   * FileUploadTrigger 컴포넌트와 같은 id를 사용하여 상태를 공유합니다.
   *
   * Props:
   * - id: 업로더 고유 ID (필수, FileUploadTrigger와 동일한 값 사용)
   * - initial-urls: 초기 URL 목록 (JSON 문자열, 수정 모드에서 사용)
   *
   * 사용법:
   * <file-upload-list
   *   id="post-123"
   *   initial-urls='["https://example.com/image1.jpg", "https://example.com/image2.jpg"]'
   * ></file-upload-list>
   *
   * 메서드:
   * - getUrls(): 완료된 파일의 URL 배열을 반환
   */

  import { onMount, onDestroy } from 'svelte';
  import { X, CheckCircle, AlertCircle } from 'lucide-svelte';
  import {
    subscribe,
    getFiles,
    removeFile,
    initializeWithUrls,
    getUploadedUrls,
    type UploadingFile,
  } from '$lib/services/fileUploadState';
  import { deleteFileByUrl } from '$lib/services/storage';
  import { t } from '$lib/stores/i18n';

  /**
   * Props (HTML 속성은 항상 문자열로 전달됨)
   */
  let {
    id = '',
    initialUrls = '',
  }: {
    id?: string;
    initialUrls?: string;
  } = $props();

  /**
   * 파일 목록 (반응형 상태)
   */
  let files: UploadingFile[] = $state([]);

  /**
   * 삭제 중인 파일 ID
   */
  let deletingFileIds = $state(new Set<string>());

  /**
   * 구독 해제 함수
   */
  let unsubscribe: (() => void) | null = null;

  /**
   * 컴포넌트 마운트 시 초기화
   */
  onMount(() => {
    // 업로더 ID 검증
    if (!id) {
      console.error('[FileUploadList] id prop is required');
      return;
    }

    // 초기 URL 목록이 있으면 초기화 (수정 모드)
    if (initialUrls) {
      try {
        const urls = JSON.parse(initialUrls) as string[];
        if (Array.isArray(urls) && urls.length > 0) {
          initializeWithUrls(id, urls);
        }
      } catch (error) {
        console.error('[FileUploadList] Failed to parse initial-urls:', error);
      }
    }

    // 상태 변경 구독
    unsubscribe = subscribe(id, () => {
      files = getFiles(id);
    });

    // 초기 파일 목록 로드
    files = getFiles(id);

    // 외부에서 접근 가능한 메서드 등록 (CustomEvent 대신)
    if (typeof window !== 'undefined') {
      const element = document.querySelector(`file-upload-list[id="${id}"]`);
      if (element) {
        // @ts-ignore
        element.getUrls = () => getUploadedUrls(id);
      }
    }
  });

  /**
   * 컴포넌트 언마운트 시 정리
   */
  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });

  /**
   * 파일 삭제 핸들러
   *
   * @param fileId - 삭제할 파일 ID
   * @param url - 삭제할 파일 URL (Firebase Storage에서 삭제)
   */
  async function handleDeleteFile(fileId: string, url?: string) {
    if (deletingFileIds.has(fileId)) return;

    const confirmDelete = confirm($t('파일삭제'));
    if (!confirmDelete) return;

    deletingFileIds.add(fileId);

    try {
      // Firebase Storage에서 파일 삭제 (URL이 있는 경우)
      if (url) {
        const result = await deleteFileByUrl(url);
        if (!result.success) {
          console.error('[FileUploadList] Failed to delete file from Storage:', result.error);
          // Storage 삭제 실패해도 목록에서는 제거 (사용자 경험 개선)
        }
      }

      // 상태에서 파일 제거
      removeFile(id, fileId);
    } catch (error) {
      console.error('[FileUploadList] Delete error:', error);
      alert($t('파일삭제실패'));
    } finally {
      deletingFileIds.delete(fileId);
    }
  }

  /**
   * 파일 이름 추출 (URL 또는 File 객체에서)
   *
   * @param file - 파일 정보
   * @returns 파일 이름
   */
  function getFileName(file: UploadingFile): string {
    if (file.file && file.file.name) {
      return file.file.name;
    }
    if (file.url) {
      // URL에서 파일명 추출
      try {
        const urlObj = new URL(file.url);
        const pathname = urlObj.pathname;
        const parts = pathname.split('/');
        const fileName = parts[parts.length - 1];
        // URL 디코딩
        return decodeURIComponent(fileName);
      } catch {
        return '파일';
      }
    }
    return '파일';
  }

  /**
   * 파일 크기 포맷팅
   *
   * @param bytes - 바이트 크기
   * @returns 포맷된 크기 문자열
   */
  function formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }
</script>

<!-- 파일 업로드 목록 -->
<div class="file-upload-list">
  {#if files.length === 0}
    <!-- 파일 없음 -->
    <div class="empty-state">
      <p class="empty-text">{$t('파일없음')}</p>
    </div>
  {:else}
    <!-- 파일 목록 -->
    <div class="files-container">
      {#each files as file (file.id)}
        <div class="file-item {file.status}">
          <!-- 파일 정보 -->
          <div class="file-info">
            <!-- 상태 아이콘 -->
            <div class="file-icon">
              {#if file.status === 'completed'}
                <CheckCircle size={20} class="icon-success" />
              {:else if file.status === 'error'}
                <AlertCircle size={20} class="icon-error" />
              {:else}
                <div class="icon-uploading">⏳</div>
              {/if}
            </div>

            <!-- 파일명 및 크기 -->
            <div class="file-details">
              <div class="file-name">{getFileName(file)}</div>
              {#if file.file && file.file.size}
                <div class="file-size">{formatFileSize(file.file.size)}</div>
              {/if}

              <!-- 에러 메시지 -->
              {#if file.status === 'error' && file.error}
                <div class="file-error">{file.error}</div>
              {/if}
            </div>
          </div>

          <!-- 진행률 바 (업로드 중) -->
          {#if file.status === 'uploading'}
            <div class="progress-bar-container">
              <div class="progress-bar" style="width: {file.progress}%"></div>
              <span class="progress-text">{file.progress}%</span>
            </div>
          {/if}

          <!-- 삭제 버튼 -->
          {#if file.status === 'completed' || file.status === 'error'}
            <button
              type="button"
              class="delete-button"
              onclick={() => handleDeleteFile(file.id, file.url)}
              disabled={deletingFileIds.has(file.id)}
              aria-label={$t('파일삭제')}
            >
              <X size={18} />
            </button>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  /* 파일 목록 컨테이너 */
  .file-upload-list {
    width: 100%;
    margin-top: 1rem;
  }

  /* 빈 상태 */
  .empty-state {
    padding: 2rem;
    text-align: center;
    background-color: #f9fafb;
    border: 2px dashed #d1d5db;
    border-radius: 0.5rem;
  }

  .empty-text {
    margin: 0;
    color: #6b7280;
    font-size: 0.875rem;
  }

  /* 파일 목록 */
  .files-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  /* 파일 항목 */
  .file-item {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    background-color: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
  }

  .file-item:hover {
    border-color: #d1d5db;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  /* 완료 상태 */
  .file-item.completed {
    border-color: #d1fae5;
    background-color: #f0fdf4;
  }

  /* 에러 상태 */
  .file-item.error {
    border-color: #fecaca;
    background-color: #fef2f2;
  }

  /* 파일 정보 */
  .file-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  /* 파일 아이콘 */
  .file-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(.icon-success) {
    color: #16a34a;
  }

  :global(.icon-error) {
    color: #dc2626;
  }

  .icon-uploading {
    font-size: 1.25rem;
    animation: pulse 1s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  /* 파일 상세 정보 */
  .file-details {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .file-name {
    font-size: 0.875rem;
    font-weight: 500;
    color: #111827;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .file-size {
    font-size: 0.75rem;
    color: #6b7280;
  }

  .file-error {
    font-size: 0.75rem;
    color: #dc2626;
    font-weight: 500;
  }

  /* 진행률 바 */
  .progress-bar-container {
    position: relative;
    width: 100%;
    height: 0.5rem;
    background-color: #e5e7eb;
    border-radius: 9999px;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
    border-radius: 9999px;
    transition: width 0.3s ease;
  }

  .progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.625rem;
    font-weight: 600;
    color: #111827;
  }

  /* 삭제 버튼 */
  .delete-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ef4444;
    color: #ffffff;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .delete-button:hover:not(:disabled) {
    background-color: #dc2626;
    transform: scale(1.05);
  }

  .delete-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* 반응형 - 모바일 */
  @media (max-width: 640px) {
    .file-item {
      padding: 0.875rem;
    }

    .file-name {
      font-size: 0.8125rem;
    }

    .file-size {
      font-size: 0.6875rem;
    }
  }
</style>
