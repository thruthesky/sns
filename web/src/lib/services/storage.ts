/**
 * Firebase Cloud Storage 서비스
 *
 * 파일 업로드, 삭제, 유효성 검사 등의 기능을 제공합니다.
 *
 * @module storage
 */

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  type UploadTaskSnapshot,
  type StorageReference,
} from 'firebase/storage';
import { storage } from '$lib/utils/firebase';
import { handleFirebaseError } from '$lib/utils/error-handler';
import { validateFile } from '$lib/services/fileValidation';

/**
 * 파일 업로드 결과 타입
 */
export interface UploadResult {
  success: boolean;
  url?: string;
  fileName?: string;
  size?: number;
  error?: string;
}

/**
 * 업로드 진행률 콜백 타입
 */
export type ProgressCallback = (progress: number) => void;

/**
 * 파일 업로드 카테고리
 */
export type UploadCategory = 'posts' | 'comments' | 'profile';

// 파일 제한 설정
const MAX_FILES_COUNT = 10; // 최대 파일 개수

/**
 * 파일을 Firebase Cloud Storage에 업로드합니다.
 * 업로드 진행률을 실시간으로 추적할 수 있습니다.
 *
 * 업로드 경로: `/users/{userId}/{category}/{timestamp}-{filename}`
 *
 * @param userId - 사용자 UID
 * @param file - 업로드할 파일
 * @param category - 업로드 카테고리 (posts, comments, profile)
 * @param onProgress - 진행률 콜백 함수 (0~100)
 * @returns 업로드 결과 (성공 시 다운로드 URL 포함)
 *
 * @example
 * ```typescript
 * const result = await uploadFileWithProgress(
 *   'user123',
 *   file,
 *   'posts',
 *   (progress) => {
 *     console.log(`업로드 진행률: ${progress}%`);
 *   }
 * );
 *
 * if (result.success) {
 *   console.log('다운로드 URL:', result.url);
 * }
 * ```
 */
export async function uploadFileWithProgress(
  userId: string,
  file: File,
  category: UploadCategory,
  onProgress?: ProgressCallback
): Promise<UploadResult> {
  try {
    // 파일 유효성 검사
    const validation = validateFile(file);
    if (!validation.valid) {
      return {
        success: false,
        error: validation.error,
      };
    }

    // 파일명 생성 (타임스탬프 + 원본 파일명)
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name}`;

    // Storage 경로 생성: /users/{userId}/{category}/{timestamp}-{filename}
    const storagePath = `users/${userId}/${category}/${fileName}`;
    const storageRef: StorageReference = ref(storage, storagePath);

    // 메타데이터 설정
    const metadata = {
      contentType: file.type,
      customMetadata: {
        uploadedBy: userId,
        uploadedAt: new Date().toISOString(),
        category: category,
      },
    };

    // 업로드 작업 생성 (진행률 추적 가능)
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Promise로 래핑
    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot: UploadTaskSnapshot) => {
          // 진행률 계산 (0~100)
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // 진행률 콜백 호출
          if (onProgress) {
            onProgress(progress);
          }

          // 상태 로그
          const state = snapshot.state;
          if (state === 'running') {
            console.log(`업로드 중: ${progress}%`);
          } else if (state === 'paused') {
            console.log('업로드 일시 정지됨');
          }
        },
        (error) => {
          // 업로드 실패
          console.error('업로드 오류:', error);
          const errorKey = handleFirebaseError(error);
          reject({
            success: false,
            error: errorKey,
          });
        },
        async () => {
          // 업로드 완료
          try {
            // 다운로드 URL 획득
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

            console.log('업로드 성공:', {
              fileName,
              size: file.size,
              url: downloadURL,
            });

            resolve({
              success: true,
              url: downloadURL,
              fileName: file.name,
              size: file.size,
            });
          } catch (error) {
            console.error('다운로드 URL 획득 실패:', error);
            const errorKey = handleFirebaseError(error);
            reject({
              success: false,
              error: errorKey,
            });
          }
        }
      );
    });
  } catch (error) {
    console.error('파일 업로드 실패:', error);
    const errorKey = handleFirebaseError(error);
    return {
      success: false,
      error: errorKey,
    };
  }
}

/**
 * 다운로드 URL에서 Storage 경로를 추출합니다.
 *
 * Firebase Storage URL 형식:
 * https://firebasestorage.googleapis.com/v0/b/{bucket}/o/{path}?alt=media&token={token}
 *
 * @param url - Firebase Storage 다운로드 URL
 * @returns Storage 경로 (URL 디코딩됨)
 *
 * @example
 * ```typescript
 * const path = extractStoragePathFromUrl(
 *   'https://firebasestorage.googleapis.com/v0/b/my-app.appspot.com/o/users%2Fuid%2Fposts%2F123.jpg?alt=media&token=...'
 * );
 * // 결과: "users/uid/posts/123.jpg"
 * ```
 */
export function extractStoragePathFromUrl(url: string): string | null {
  try {
    // URL에서 경로 부분 추출
    // 형식: https://firebasestorage.googleapis.com/v0/b/{bucket}/o/{path}?alt=media...
    const match = url.match(/\/o\/(.+?)\?/);
    if (!match || !match[1]) {
      console.error('Storage 경로 추출 실패: URL 형식이 올바르지 않습니다');
      return null;
    }

    // URL 디코딩 (%2F → /)
    const path = decodeURIComponent(match[1]);
    return path;
  } catch (error) {
    console.error('Storage 경로 추출 오류:', error);
    return null;
  }
}

/**
 * Firebase Cloud Storage에서 파일을 삭제합니다.
 *
 * @param url - 삭제할 파일의 다운로드 URL
 * @returns 삭제 성공 여부
 *
 * @example
 * ```typescript
 * const result = await deleteFileByUrl(
 *   'https://firebasestorage.googleapis.com/.../photo.jpg'
 * );
 *
 * if (result.success) {
 *   console.log('파일 삭제 완료');
 * }
 * ```
 */
export async function deleteFileByUrl(url: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    // URL에서 Storage 경로 추출
    const path = extractStoragePathFromUrl(url);
    if (!path) {
      return {
        success: false,
        error: 'error.file.invalidUrl',
      };
    }

    // Storage 레퍼런스 생성
    const fileRef: StorageReference = ref(storage, path);

    // 파일 삭제
    await deleteObject(fileRef);

    console.log('파일 삭제 완료:', path);

    return { success: true };
  } catch (error: any) {
    console.error('파일 삭제 실패:', error);

    // storage/object-not-found 에러는 무시 (이미 삭제된 파일)
    if (error.code === 'storage/object-not-found') {
      return { success: true };
    }

    const errorKey = handleFirebaseError(error);
    return {
      success: false,
      error: errorKey,
    };
  }
}

/**
 * 여러 파일을 동시에 업로드합니다.
 *
 * @param userId - 사용자 UID
 * @param files - 업로드할 파일 배열
 * @param category - 업로드 카테고리
 * @param onProgress - 각 파일의 진행률 콜백 (파일 인덱스와 진행률 전달)
 * @returns 업로드 결과 배열
 *
 * @example
 * ```typescript
 * const results = await uploadMultipleFiles(
 *   'user123',
 *   [file1, file2, file3],
 *   'posts',
 *   (index, progress) => {
 *     console.log(`파일 ${index + 1} 업로드: ${progress}%`);
 *   }
 * );
 *
 * const successUrls = results
 *   .filter(r => r.success)
 *   .map(r => r.url);
 * ```
 */
export async function uploadMultipleFiles(
  userId: string,
  files: File[],
  category: UploadCategory,
  onProgress?: (index: number, progress: number) => void
): Promise<UploadResult[]> {
  // 최대 파일 개수 검사
  if (files.length > MAX_FILES_COUNT) {
    console.warn(`최대 ${MAX_FILES_COUNT}개의 파일만 업로드할 수 있습니다`);
    files = files.slice(0, MAX_FILES_COUNT);
  }

  // 모든 파일을 동시에 업로드
  const uploadPromises = files.map((file, index) => {
    return uploadFileWithProgress(
      userId,
      file,
      category,
      (progress) => {
        if (onProgress) {
          onProgress(index, progress);
        }
      }
    );
  });

  // Promise.allSettled()로 모든 업로드 완료 대기
  // (일부 실패해도 나머지는 계속 진행)
  const results = await Promise.allSettled(uploadPromises);

  // 결과 변환
  return results.map((result) => {
    if (result.status === 'fulfilled') {
      return result.value;
    } else {
      return {
        success: false,
        error: 'error.unknown',
      };
    }
  });
}

/**
 * 여러 파일 URL을 동시에 삭제합니다.
 *
 * @param urls - 삭제할 파일 URL 배열
 * @returns 삭제 결과 배열
 *
 * @example
 * ```typescript
 * const results = await deleteMultipleFiles([
 *   'https://firebasestorage.googleapis.com/.../photo1.jpg',
 *   'https://firebasestorage.googleapis.com/.../photo2.jpg',
 * ]);
 *
 * const allSuccess = results.every(r => r.success);
 * ```
 */
export async function deleteMultipleFiles(
  urls: string[]
): Promise<Array<{ success: boolean; error?: string }>> {
  // 모든 파일을 동시에 삭제
  const deletePromises = urls.map((url) => deleteFileByUrl(url));

  // Promise.allSettled()로 모든 삭제 완료 대기
  const results = await Promise.allSettled(deletePromises);

  // 결과 변환
  return results.map((result) => {
    if (result.status === 'fulfilled') {
      return result.value;
    } else {
      return {
        success: false,
        error: 'error.unknown',
      };
    }
  });
}
