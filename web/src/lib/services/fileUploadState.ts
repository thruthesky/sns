/**
 * 파일 업로드 공유 상태 관리
 *
 * FileUploadTrigger와 FileUploadList 컴포넌트 간의 상태를 공유합니다.
 * 두 컴포넌트는 같은 id를 사용하여 상태를 공유할 수 있습니다.
 *
 * @module fileUploadState
 */

/**
 * 업로드 중인 파일 정보
 */
export interface UploadingFile {
  /** 파일 고유 ID (타임스탬프 + 랜덤) */
  id: string;
  /** 파일 객체 */
  file: File;
  /** 업로드 진행률 (0~100) */
  progress: number;
  /** 업로드 상태 */
  status: 'uploading' | 'completed' | 'error';
  /** 업로드 완료 후 다운로드 URL */
  url?: string;
  /** 에러 메시지 (실패 시) */
  error?: string;
}

/**
 * 업로더 상태
 */
export interface UploaderState {
  /** 업로드된 파일 목록 */
  files: UploadingFile[];
  /** 리스너 목록 (상태 변경 시 호출) */
  listeners: Set<() => void>;
}

/**
 * 전역 업로더 상태 저장소
 * 각 업로더는 고유한 id를 가지며, 해당 id로 상태를 공유합니다.
 */
const uploaderStates = new Map<string, UploaderState>();

/**
 * 업로더 상태 가져오기 (없으면 생성)
 *
 * @param id - 업로더 고유 ID
 * @returns 업로더 상태
 */
export function getUploaderState(id: string): UploaderState {
  if (!uploaderStates.has(id)) {
    uploaderStates.set(id, {
      files: [],
      listeners: new Set(),
    });
  }
  return uploaderStates.get(id)!;
}

/**
 * 파일 추가 (업로드 시작)
 *
 * @param id - 업로더 ID
 * @param file - 파일 객체
 * @returns 생성된 파일 ID
 */
export function addFile(id: string, file: File): string {
  const state = getUploaderState(id);
  const fileId = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

  const uploadingFile: UploadingFile = {
    id: fileId,
    file,
    progress: 0,
    status: 'uploading',
  };

  state.files.push(uploadingFile);
  notifyListeners(id);

  return fileId;
}

/**
 * 파일 진행률 업데이트
 *
 * @param id - 업로더 ID
 * @param fileId - 파일 ID
 * @param progress - 진행률 (0~100)
 */
export function updateFileProgress(id: string, fileId: string, progress: number) {
  const state = getUploaderState(id);
  const file = state.files.find((f) => f.id === fileId);

  if (file) {
    file.progress = progress;
    notifyListeners(id);
  }
}

/**
 * 파일 업로드 완료
 *
 * @param id - 업로더 ID
 * @param fileId - 파일 ID
 * @param url - 다운로드 URL
 */
export function completeFileUpload(id: string, fileId: string, url: string) {
  const state = getUploaderState(id);
  const file = state.files.find((f) => f.id === fileId);

  if (file) {
    file.status = 'completed';
    file.progress = 100;
    file.url = url;
    notifyListeners(id);
  }
}

/**
 * 파일 업로드 실패
 *
 * @param id - 업로더 ID
 * @param fileId - 파일 ID
 * @param error - 에러 메시지
 */
export function failFileUpload(id: string, fileId: string, error: string) {
  const state = getUploaderState(id);
  const file = state.files.find((f) => f.id === fileId);

  if (file) {
    file.status = 'error';
    file.error = error;
    notifyListeners(id);
  }
}

/**
 * 파일 삭제
 *
 * @param id - 업로더 ID
 * @param fileId - 파일 ID
 */
export function removeFile(id: string, fileId: string) {
  const state = getUploaderState(id);
  const index = state.files.findIndex((f) => f.id === fileId);

  if (index !== -1) {
    state.files.splice(index, 1);
    notifyListeners(id);
  }
}

/**
 * 완료된 파일의 URL 목록 가져오기
 *
 * @param id - 업로더 ID
 * @returns URL 배열
 */
export function getUploadedUrls(id: string): string[] {
  const state = getUploaderState(id);
  return state.files
    .filter((f) => f.status === 'completed' && f.url)
    .map((f) => f.url!);
}

/**
 * 파일 목록 가져오기
 *
 * @param id - 업로더 ID
 * @returns 파일 목록
 */
export function getFiles(id: string): UploadingFile[] {
  const state = getUploaderState(id);
  return [...state.files]; // 복사본 반환
}

/**
 * 기존 URL 목록으로 초기화 (수정 모드)
 *
 * @param id - 업로더 ID
 * @param urls - 기존 URL 배열
 */
export function initializeWithUrls(id: string, urls: string[]) {
  const state = getUploaderState(id);

  // 기존 파일 목록 초기화
  state.files = urls.map((url, index) => ({
    id: `existing-${index}-${Date.now()}`,
    file: null as any, // 기존 파일은 File 객체가 없음
    progress: 100,
    status: 'completed' as const,
    url,
  }));

  notifyListeners(id);
}

/**
 * 모든 파일 삭제 (초기화)
 *
 * @param id - 업로더 ID
 */
export function clearFiles(id: string) {
  const state = getUploaderState(id);
  state.files = [];
  notifyListeners(id);
}

/**
 * 상태 변경 리스너 등록
 *
 * @param id - 업로더 ID
 * @param listener - 상태 변경 시 호출될 콜백 함수
 * @returns 리스너 해제 함수
 */
export function subscribe(id: string, listener: () => void): () => void {
  const state = getUploaderState(id);
  state.listeners.add(listener);

  // 리스너 해제 함수 반환
  return () => {
    state.listeners.delete(listener);
  };
}

/**
 * 모든 리스너에게 상태 변경 알림
 *
 * @param id - 업로더 ID
 */
function notifyListeners(id: string) {
  const state = getUploaderState(id);
  state.listeners.forEach((listener) => listener());
}

/**
 * 업로더 상태 완전 삭제 (메모리 해제)
 *
 * @param id - 업로더 ID
 */
export function destroyUploader(id: string) {
  uploaderStates.delete(id);
}
