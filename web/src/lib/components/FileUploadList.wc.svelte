<svelte:options
  customElement={{
    tag: "file-upload-list",
    shadow: "none",
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

  import { onMount } from "svelte";
  import { X, AlertCircle } from "lucide-svelte";
  import {
    subscribe,
    getFiles,
    removeFile,
    initializeWithUrls,
    getUploadedUrls,
    type UploadingFile,
  } from "$lib/services/fileUploadState";
  import { deleteFileByUrl } from "$lib/services/storage";
  import { t } from "$lib/stores/i18n";

  /**
   * Props (HTML 속성은 항상 문자열로 전달됨)
   */
  let {
    id = "",
    "initial-urls": initialUrls = "",
  }: {
    id?: string;
    "initial-urls"?: string;
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
   *
   * Svelte 5 Web Component에서는 onDestroy 대신 자동 정리를 사용합니다.
   * 이 변수는 향후 수동 정리가 필요한 경우를 위해 유지합니다.
   */
  let unsubscribe: (() => void) | null = null;

  /**
   * 컴포넌트 마운트 시 초기화
   */
  onMount(() => {
    // 업로더 ID 검증
    if (!id) {
      console.error("[FileUploadList] id prop is required");
      return;
    }

    // 초기 URL 목록이 있으면 초기화 (수정 모드)
    if (initialUrls) {
      try {
        const urls = JSON.parse(initialUrls) as string[];
        if (Array.isArray(urls) && urls.length > 0) {
          console.log(
            `[FileUploadList] Initializing with ${urls.length} URLs for id: ${id}`
          );
          initializeWithUrls(id, urls);
        }
      } catch (error) {
        console.error("[FileUploadList] Failed to parse initial-urls:", error);
      }
    }

    // 상태 변경 구독
    unsubscribe = subscribe(id, () => {
      files = getFiles(id);
    });

    // 초기 파일 목록 로드
    files = getFiles(id);

    // 외부에서 접근 가능한 메서드 등록 (CustomEvent 대신)
    if (typeof window !== "undefined") {
      const element = document.querySelector(`file-upload-list[id="${id}"]`);
      if (element) {
        // @ts-ignore
        element.getUrls = () => getUploadedUrls(id);
      }
    }
  });

  /**
   * Svelte 5 Web Component 정리 처리
   *
   * Svelte 5에서는 onDestroy() 대신 Web Component의 disconnectedCallback()을 사용합니다.
   * Web Component가 DOM에서 제거될 때 Svelte가 자동으로 정리하므로 onDestroy는 제거했습니다.
   *
   * 참고: https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes
   */
  // onDestroy는 Svelte 5 Web Component에서 $destroy() 에러를 발생시키므로 제거
  // 구독 해제는 Web Component가 제거될 때 자동으로 처리됩니다.

  /**
   * 파일 삭제 핸들러
   *
   * @param fileId - 삭제할 파일 ID
   * @param url - 삭제할 파일 URL (Firebase Storage에서 삭제)
   */
  async function handleDeleteFile(fileId: string, url?: string) {
    if (deletingFileIds.has(fileId)) return;

    const confirmDelete = confirm($t("파일삭제"));
    if (!confirmDelete) return;

    deletingFileIds.add(fileId);

    try {
      // Firebase Storage에서 파일 삭제 (URL이 있는 경우)
      if (url) {
        const result = await deleteFileByUrl(url);
        if (!result.success) {
          console.error(
            "[FileUploadList] Failed to delete file from Storage:",
            result.error
          );
          // Storage 삭제 실패해도 목록에서는 제거 (사용자 경험 개선)
        }
      }

      // 상태에서 파일 제거
      removeFile(id, fileId);
    } catch (error) {
      console.error("[FileUploadList] Delete error:", error);
      alert($t("파일삭제실패"));
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
        const url = file.url; // 타입 가드
        const urlObj = new URL(url);
        const pathname = urlObj.pathname;
        const parts = pathname.split("/");
        const fileName = parts[parts.length - 1];
        // URL 디코딩
        return decodeURIComponent(fileName ?? "");
      } catch {
        return "파일";
      }
    }
    return "파일";
  }

  /**
   * 이미지 미리보기 URL 생성
   *
   * @param file - 파일 정보
   * @returns 미리보기 URL 또는 null
   */
  function getPreviewUrl(file: UploadingFile): string | null {
    // 완료된 파일의 URL이 있으면 사용
    if (file.url) {
      return file.url;
    }
    // 업로드 중인 이미지 파일이면 Blob URL 생성
    if (file.file && file.file.type.startsWith("image/")) {
      return URL.createObjectURL(file.file);
    }
    return null;
  }

  /**
   * 파일이 이미지인지 확인
   *
   * @param file - 파일 정보
   * @returns 이미지 여부
   */
  function isImageFile(file: UploadingFile): boolean {
    if (file.file && file.file.type.startsWith("image/")) {
      return true;
    }
    if (file.url) {
      // URL 확장자로 이미지 판단 (완벽하지 않지만 대부분의 경우 작동)
      const lowerUrl = file.url.toLowerCase();
      return (
        lowerUrl.includes(".jpg") ||
        lowerUrl.includes(".jpeg") ||
        lowerUrl.includes(".png") ||
        lowerUrl.includes(".gif") ||
        lowerUrl.includes(".webp") ||
        lowerUrl.includes(".bmp") ||
        lowerUrl.includes(".svg")
      );
    }
    return false;
  }

  /**
   * 파일이 동영상인지 확인
   *
   * @param file - 파일 정보
   * @returns 동영상 여부
   */
  function isVideoFile(file: UploadingFile): boolean {
    if (file.file && file.file.type.startsWith("video/")) {
      return true;
    }
    if (file.url) {
      // URL 확장자로 동영상 판단
      const lowerUrl = file.url.toLowerCase();
      return (
        lowerUrl.includes(".mp4") ||
        lowerUrl.includes(".webm") ||
        lowerUrl.includes(".mov") ||
        lowerUrl.includes(".avi") ||
        lowerUrl.includes(".mkv")
      );
    }
    return false;
  }

  /**
   * 파일 확장자 추출
   *
   * @param file - 파일 정보
   * @returns 확장자 (대문자)
   */
  function getFileExtension(file: UploadingFile): string {
    const fileName = getFileName(file);
    const parts = fileName.split(".");
    if (parts && parts.length > 1) {
      const extension = parts[parts.length - 1];
      return extension ? extension.toUpperCase() : "FILE";
    }
    return "FILE";
  }

  /**
   * 비디오 미리보기 URL 생성
   *
   * @param file - 파일 정보
   * @returns 비디오 URL 또는 null
   */
  function getVideoUrl(file: UploadingFile): string | null {
    // 완료된 파일의 URL이 있으면 사용
    if (file.url) {
      return file.url;
    }
    // 업로드 중인 비디오 파일이면 Blob URL 생성
    if (file.file && file.file.type.startsWith("video/")) {
      return URL.createObjectURL(file.file);
    }
    return null;
  }
</script>

<!-- 파일 업로드 목록 -->
<div class="file-upload-list">
  {#if files.length === 0}
    <!-- 파일 없음 -->
    <div class="empty-state">
      <p class="empty-text">{$t("파일없음")}</p>
    </div>
  {:else}
    <!-- 파일 목록 (그리드) -->
    <div class="files-container">
      {#each files as file (file.id)}
        <div class="file-item {file.status}">
          <!-- 파일 미리보기 영역 -->
          <div class="file-preview">
            {#if isImageFile(file)}
              <!-- 이미지 파일 -->
              <img
                src={getPreviewUrl(file)}
                alt={getFileName(file)}
                class="preview-image"
              />
            {:else if isVideoFile(file)}
              <!-- 동영상 파일 -->
              <video src={getVideoUrl(file)} class="preview-video" controls>
                <track kind="captions" />
              </video>
            {:else}
              <!-- 문서 파일 - 확장자 표시 -->
              <div class="file-extension">
                <div class="extension-text">{getFileExtension(file)}</div>
              </div>
            {/if}

            <!-- 진행률 오버레이 (업로드 중) -->
            {#if file.status === "uploading"}
              <div class="progress-overlay">
                <div class="progress-circle">{file.progress}%</div>
              </div>
            {/if}

            <!-- 에러 오버레이 -->
            {#if file.status === "error"}
              <div class="error-overlay">
                <AlertCircle size={32} class="error-icon" />
                <div class="error-text">{$t("업로드실패")}</div>
              </div>
            {/if}

            <!-- 삭제 버튼 (왼쪽 상단) -->
            {#if file.status === "completed" || file.status === "error"}
              <button
                type="button"
                class="delete-button"
                onclick={() => handleDeleteFile(file.id, file.url)}
                disabled={deletingFileIds.has(file.id)}
                aria-label={$t("파일삭제")}
              >
                <X size={16} />
              </button>
            {/if}
          </div>
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

  /* 파일 목록 (그리드 레이아웃) */
  .files-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* 기본 5열 */
    gap: 1rem;
  }

  /* 파일 항목 */
  .file-item {
    position: relative;
    aspect-ratio: 1; /* 정사각형 유지 */
    border-radius: 0.5rem;
    overflow: hidden;
    border: 2px dashed #e5e7eb;
    background-color: #f9fafb;
    transition: all 0.2s ease;
  }

  .file-item:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* 완료 상태 */
  .file-item.completed {
    border-color: #10b981;
    border-style: solid;
  }

  /* 에러 상태 */
  .file-item.error {
    border-color: #ef4444;
    border-style: solid;
  }

  /* 파일 미리보기 영역 */
  .file-preview {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3f4f6;
  }

  /* 이미지 미리보기 */
  .preview-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* 비디오 미리보기 */
  .preview-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #000000;
  }

  /* 파일 확장자 표시 (문서 파일) */
  .file-extension {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .extension-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    padding: 0.5rem;
    word-break: break-word;
  }

  /* 진행률 오버레이 */
  .progress-overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
  }

  /* 진행률 원형 표시 */
  .progress-circle {
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 700;
    color: #3b82f6;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  /* 에러 오버레이 */
  .error-overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(239, 68, 68, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    z-index: 5;
  }

  :global(.error-icon) {
    color: white;
  }

  .error-text {
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
  }

  /* 삭제 버튼 (왼쪽 상단) */
  .delete-button {
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: 1.75rem;
    height: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(239, 68, 68, 0.9);
    color: white;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 10;
  }

  .delete-button:hover:not(:disabled) {
    background-color: rgba(220, 38, 38, 1);
    transform: scale(1.1);
  }

  .delete-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* 반응형 - 모바일 (4열) */
  @media (max-width: 640px) {
    .files-container {
      grid-template-columns: repeat(4, 1fr);
      gap: 0.75rem;
    }

    .progress-circle {
      width: 50px;
      height: 50px;
      font-size: 1rem;
    }

    .delete-button {
      width: 1.5rem;
      height: 1.5rem;
    }

    .extension-text {
      font-size: 1rem;
    }
  }

  /* 반응형 - 태블릿 (4열) */
  @media (min-width: 641px) and (max-width: 1024px) {
    .files-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  /* 반응형 - 데스크톱 (5열) */
  @media (min-width: 1025px) {
    .files-container {
      grid-template-columns: repeat(5, 1fr);
    }
  }
</style>
