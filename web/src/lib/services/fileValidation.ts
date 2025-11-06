/**
 * 파일 업로드 검증 유틸리티
 *
 * 파일 타입, 확장자, 용량 제한을 정의하고 검증하는 기능을 제공합니다.
 * 클라이언트 측 검증과 Firebase Storage Rules에서 동일한 규칙을 적용합니다.
 *
 * @module fileValidation
 */

/**
 * 파일 카테고리 타입
 */
export type FileCategory = 'image' | 'video' | 'document';

/**
 * 파일 검증 결과
 */
export interface ValidationResult {
  /** 검증 성공 여부 */
  valid: boolean;
  /** 에러 메시지 (검증 실패 시) */
  error?: string;
  /** 파일 카테고리 (검증 성공 시) */
  category?: FileCategory;
}

/**
 * 파일 용량 제한 (바이트 단위)
 */
export const FILE_SIZE_LIMITS = {
  /** 이미지 파일 최대 용량: 10MB */
  IMAGE: 10 * 1024 * 1024,
  /** 동영상 파일 최대 용량: 50MB */
  VIDEO: 50 * 1024 * 1024,
  /** 문서/압축 파일 최대 용량: 15MB */
  DOCUMENT: 15 * 1024 * 1024,
} as const;

/**
 * 허용되는 이미지 확장자 목록
 */
export const ALLOWED_IMAGE_EXTENSIONS = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'webp',
  'bmp',
  'svg',
] as const;

/**
 * 허용되는 이미지 MIME 타입 목록
 */
export const ALLOWED_IMAGE_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/bmp',
  'image/svg+xml',
] as const;

/**
 * 허용되는 동영상 확장자 목록 (mp4만 허용)
 */
export const ALLOWED_VIDEO_EXTENSIONS = ['mp4'] as const;

/**
 * 허용되는 동영상 MIME 타입 목록
 */
export const ALLOWED_VIDEO_MIME_TYPES = ['video/mp4'] as const;

/**
 * 허용되는 문서/압축 파일 확장자 목록
 */
export const ALLOWED_DOCUMENT_EXTENSIONS = [
  'zip',
  'pdf',
  'txt',
  'doc',
  'docx',
  'ppt',
  'pptx',
  'csv',
  'xls',
  'xlsx',
  'rar',
] as const;

/**
 * 허용되는 문서/압축 파일 MIME 타입 목록
 */
export const ALLOWED_DOCUMENT_MIME_TYPES = [
  'application/zip',
  'application/pdf',
  'text/plain',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'text/csv',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/x-rar-compressed',
  'application/vnd.rar',
] as const;

/**
 * input accept 속성용 문자열 생성
 */
export const ACCEPT_STRING = [
  ...ALLOWED_IMAGE_MIME_TYPES,
  ...ALLOWED_VIDEO_MIME_TYPES,
  ...ALLOWED_DOCUMENT_MIME_TYPES,
].join(',');

/**
 * 파일명에서 확장자 추출
 *
 * @param filename - 파일명
 * @returns 소문자 확장자 (점 제외)
 */
export function getFileExtension(filename: string): string {
  const parts = filename.toLowerCase().split('.');
  return parts.length > 1 ? parts[parts.length - 1] : '';
}

/**
 * 파일이 이미지인지 확인
 *
 * @param file - 파일 객체
 * @returns 이미지 여부
 */
export function isImageFile(file: File): boolean {
  const extension = getFileExtension(file.name);
  const mimeType = file.type.toLowerCase();

  return (
    ALLOWED_IMAGE_EXTENSIONS.includes(extension as any) ||
    ALLOWED_IMAGE_MIME_TYPES.includes(mimeType as any)
  );
}

/**
 * 파일이 동영상인지 확인
 *
 * @param file - 파일 객체
 * @returns 동영상 여부
 */
export function isVideoFile(file: File): boolean {
  const extension = getFileExtension(file.name);
  const mimeType = file.type.toLowerCase();

  return (
    ALLOWED_VIDEO_EXTENSIONS.includes(extension as any) ||
    ALLOWED_VIDEO_MIME_TYPES.includes(mimeType as any)
  );
}

/**
 * 파일이 문서/압축 파일인지 확인
 *
 * @param file - 파일 객체
 * @returns 문서/압축 파일 여부
 */
export function isDocumentFile(file: File): boolean {
  const extension = getFileExtension(file.name);
  const mimeType = file.type.toLowerCase();

  return (
    ALLOWED_DOCUMENT_EXTENSIONS.includes(extension as any) ||
    ALLOWED_DOCUMENT_MIME_TYPES.includes(mimeType as any)
  );
}

/**
 * 파일 카테고리 판별
 *
 * @param file - 파일 객체
 * @returns 파일 카테고리 (판별 실패 시 null)
 */
export function getFileCategory(file: File): FileCategory | null {
  if (isImageFile(file)) return 'image';
  if (isVideoFile(file)) return 'video';
  if (isDocumentFile(file)) return 'document';
  return null;
}

/**
 * 용량을 사람이 읽기 쉬운 형식으로 변환
 *
 * @param bytes - 바이트 단위 용량
 * @returns 포맷된 문자열 (예: "10 MB")
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * 파일 검증
 *
 * 파일 타입, 확장자, 용량을 검증하여 업로드 가능 여부를 판별합니다.
 *
 * @param file - 검증할 파일
 * @returns 검증 결과
 */
export function validateFile(file: File): ValidationResult {
  // 1. 파일 카테고리 판별
  const category = getFileCategory(file);

  if (!category) {
    const extension = getFileExtension(file.name);
    return {
      valid: false,
      error: `지원하지 않는 파일 형식입니다. (확장자: ${extension || '알 수 없음'})`,
    };
  }

  // 2. 용량 제한 확인
  let maxSize: number;
  let categoryName: string;

  switch (category) {
    case 'image':
      maxSize = FILE_SIZE_LIMITS.IMAGE;
      categoryName = '이미지';
      break;
    case 'video':
      maxSize = FILE_SIZE_LIMITS.VIDEO;
      categoryName = '동영상';
      break;
    case 'document':
      maxSize = FILE_SIZE_LIMITS.DOCUMENT;
      categoryName = '문서/압축';
      break;
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      error: `${categoryName} 파일은 최대 ${formatFileSize(maxSize)}까지 업로드 가능합니다. (현재 파일: ${formatFileSize(file.size)})`,
    };
  }

  // 3. 검증 성공
  return {
    valid: true,
    category,
  };
}

/**
 * 여러 파일을 한번에 검증
 *
 * @param files - 검증할 파일 배열
 * @returns 각 파일의 검증 결과 배열
 */
export function validateFiles(files: File[]): ValidationResult[] {
  return files.map((file) => validateFile(file));
}

/**
 * 파일 목록에서 첫 번째 에러 메시지 반환
 *
 * @param results - 검증 결과 배열
 * @returns 첫 번째 에러 메시지 (모두 성공 시 null)
 */
export function getFirstError(results: ValidationResult[]): string | null {
  const firstError = results.find((result) => !result.valid);
  return firstError?.error || null;
}
