---
name: snsweb
version: 1.0.0
description: 파일 및 사진 업로드 개발 가이드 문서의 SED 사양
author: JaeHo Song
email: thruthesky@gmail.com
homepage: https://github.com/thruthesky/
funding: ""
license: SED Specification License v1.0
dependencies: []
"프로젝트 이름": snsweb
---

## Overview
- 이 문서는 "파일 및 사진 업로드 개발 가이드"에 대한 세부 사양을 정리하며, 기존 내용을 그대로 유지한 채 SED 구조에 맞춰 제공합니다.

## Requirements
- 문서 전반에 걸쳐 소개되는 지침과 참고 사항을 모두 숙지해야 하며, 별도의 추가 선행 조건은 원문 각 절에서 제시되는 내용을 따릅니다.

## Workflow
1. 아래 `## Detail Items` 절에 포함된 원문 목차를 검토합니다.
2. 필요한 경우 원문의 각 절을 순서대로 읽으며 프로젝트 작업 흐름에 반영합니다.
3. 문서에 명시된 모든 지침을 확인한 뒤 실제 개발 단계에 적용합니다.

## Detail Items
- 이하에는 기존 문서의 모든 내용을 원형 그대로 포함하여 참조할 수 있도록 구성했습니다.

# 파일 및 사진 업로드 개발 가이드

본 문서는 SNS 웹 애플리케이션에서 Firebase Cloud Storage를 사용하여 파일 및 사진 업로드 기능을 구현하는 방법에 대한 가이드입니다. 파일 업로드를 구현할 때에는 반드시 아래의 규칙과 예제를 따라야 합니다.

**참고 자료**:
- [Firebase Cloud Storage 공식 문서](https://firebase.google.com/docs/storage/web/start)
- [업로드 파일 가이드](https://firebase.google.com/docs/storage/web/upload-files)
- [삭제 파일 가이드](https://firebase.google.com/docs/storage/web/delete-files)




# 개요

SNS 웹 애플리케이션에서는 사용자가 사진 및 파일을 업로드할 수 있는 기능이 필요합니다.

- **파일 업로드**: Firebase Cloud Storage를 사용하여 구현
- **URL 저장**: 업로드된 파일의 URL 주소는 Firebase Realtime Database에 저장
- **보안**: Firebase 보안 규칙을 준수하여 사용자가 자신의 파일만 업로드 및 접근할 수 있도록 제어

## 요구사항

- **Firebase 프로젝트**: Blaze(종량제) 이상의 요금제 필요
- **저장소 버킷**: Firebase Console에서 Cloud Storage 버킷 생성
- **SDK 초기화**: Firebase Web SDK v9 이상


# Firebase 초기화 및 설정

## 1. SDK 초기화

Firebase Storage를 사용하기 전에 먼저 Firebase App을 초기화하고 Storage 인스턴스를 생성해야 합니다.

```javascript
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { firebaseConfig } from '../../config/firebase.web-config';

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase Storage 인스턴스 생성
export const storage = getStorage(app);
```

**참고**: `firebaseConfig`에는 반드시 `storageBucket` 필드가 포함되어야 합니다.

```javascript
// firebaseConfig 예시
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "my-project.firebasestorage.app",  // 필수
  // ...
};
```

---

# 저장소 레퍼런스 생성

## 레퍼런스 생성 방법

Firebase Storage의 파일을 참조하려면 `ref()` 함수를 사용하여 레퍼런스를 생성합니다.

```javascript
import { ref } from 'firebase/storage';

// 1. 루트 레퍼런스 (버킷의 최상위)
const storageRef = ref(storage);

// 2. 경로를 지정하여 자식 레퍼런스 생성
const profileRef = ref(storage, 'users/user_001/profile.jpg');
const folderRef = ref(storage, 'users/user_001/');
```

## 계층 구조 탐색

레퍼런스의 상위 경로나 루트로 이동할 수 있습니다.

```javascript
const profileRef = ref(storage, 'users/user_001/profile.jpg');

// 상위 폴더로 이동
const userFolderRef = profileRef.parent;  // 'users/user_001/'

// 루트로 이동
const rootRef = profileRef.root;  // 버킷의 최상위
```

## 레퍼런스 정보 확인

```javascript
const profileRef = ref(storage, 'users/user_001/profile.jpg');

console.log(profileRef.fullPath);  // 'users/user_001/profile.jpg'
console.log(profileRef.name);       // 'profile.jpg'
console.log(profileRef.bucket);     // 'my-project.firebasestorage.app'
```

---

# 파일 업로드 구현

## 보안 규칙 설정

아래와 같이 Firebase Storage 보안 규칙이 설정되어져 있습니다.
- `/users/{userId}/` 경로에 업로드된 파일은 해당 사용자만 쓰기 권한이 있으며, 모든 사용자가 읽기 권한을 가집니다.
  - 이는 사용자가 자신의 파일을 업로드하고, 다른 사용자는 해당 파일을 읽을 수 있도록 하기 위함입니다.
  - 예를 들어, 프로필 사진은 모든 사용자가 볼 수 있어야 하지만, 사용자는 자신의 프로필 사진만 변경할 수 있어야 합니다.
  - 따라서, 파일 업로드 시에는 반드시 사용자의 UID를 포함한 경로에 업로드해야 합니다.

### Firebase Storage 보안 규칙

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // 다른 경로의 파일은 모든 사용자가 읽고 쓸 수 있음
    match /{allPaths=**} {
      allow read, write: if true;
    }
    // /users/{userId}/ 경로 아래의 파일은 소유 사용자만 쓸 수 있음
    match /users/{userId}/{allPaths=**} {
      allow read: if true;                        // 모든 사용자가 읽을 수 있음
      allow write: if request.auth.uid == userId; // 소유 사용자만 쓸 수 있음 (업로드, 삭제)
    }
  }
}
```

---

## 파일 업로드 방법

### 1. 메모리에서 파일 업로드 (uploadBytes)

JavaScript `File` 또는 `Blob` 객체를 직접 업로드합니다.

```javascript
import { uploadBytes } from 'firebase/storage';

async function uploadProfilePhoto(userId, file) {
  // 저장소 경로 생성
  const photoRef = ref(storage, `users/${userId}/profile/photo.jpg`);

  try {
    // 파일 업로드
    const snapshot = await uploadBytes(photoRef, file);
    console.log('파일 업로드 완료:', snapshot.metadata.name);
    return snapshot;
  } catch (error) {
    console.error('업로드 실패:', error);
    throw error;
  }
}
```

**사용 시나리오**: HTML `<input type="file">` 요소에서 선택한 파일을 직접 업로드할 때 사용합니다.

### 2. 문자열로 업로드 (uploadString)

Base64, Base64url, Data URL 형식의 문자열을 업로드합니다.

```javascript
import { uploadString } from 'firebase/storage';

async function uploadFromBase64(userId, base64String) {
  const photoRef = ref(storage, `users/${userId}/profile/photo.jpg`);

  try {
    // Base64 문자열을 파일로 업로드
    const snapshot = await uploadString(
      photoRef,
      base64String,
      'base64',
      { contentType: 'image/jpeg' }
    );
    console.log('파일 업로드 완료:', snapshot.metadata.name);
    return snapshot;
  } catch (error) {
    console.error('업로드 실패:', error);
    throw error;
  }
}
```

**사용 시나리오**: Canvas에서 생성한 이미지나 Base64로 인코딩된 데이터를 업로드할 때 사용합니다.

### 3. 진행 상황을 추적하면서 업로드 (uploadBytesResumable)

대용량 파일 업로드 시 진행 상황을 모니터링하고 일시 정지/재개할 수 있습니다.

```javascript
import { uploadBytesResumable } from 'firebase/storage';

async function uploadWithProgress(userId, file, onProgress) {
  const photoRef = ref(storage, `users/${userId}/profile/${file.name}`);

  // 업로드 작업 생성
  const uploadTask = uploadBytesResumable(photoRef, file);

  return new Promise((resolve, reject) => {
    // 업로드 상태 변화 감시
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // 진행 상황 업데이트
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`진행 상황: ${progress.toFixed(2)}%`);

        // 상태 확인
        const state = snapshot.state;
        if (state === 'running') {
          console.log('업로드 중...');
        } else if (state === 'paused') {
          console.log('업로드 일시 정지됨');
        }

        // 콜백 함수로 진행 상황 전달
        onProgress?.(progress);
      },
      (error) => {
        // 업로드 실패
        console.error('업로드 오류:', error);
        reject(error);
      },
      () => {
        // 업로드 완료
        console.log('업로드 성공!');
        resolve(uploadTask.snapshot);
      }
    );
  });
}

// 업로드 제어 (일시 정지/재개/취소)
function controlUpload(uploadTask) {
  // 일시 정지
  uploadTask.pause();

  // 재개
  uploadTask.resume();

  // 취소
  uploadTask.cancel();
}
```

**사용 시나리오**:
- 대용량 파일 업로드 시 진행 상황 표시
- 사용자가 업로드를 일시 정지/재개할 수 있어야 할 때
- 느린 네트워크 환경에서 업로드할 때

---

## 파일 메타데이터 설정

파일 업로드 시 MIME 타입 등의 메타데이터를 지정할 수 있습니다.

```javascript
import { uploadBytes } from 'firebase/storage';

async function uploadWithMetadata(userId, file) {
  const photoRef = ref(storage, `users/${userId}/profile/photo.jpg`);

  // 메타데이터 객체 생성
  const metadata = {
    contentType: 'image/jpeg',  // MIME 타입
    customMetadata: {
      uploadedBy: userId,
      uploadedAt: new Date().toISOString()
    }
  };

  try {
    const snapshot = await uploadBytes(photoRef, file, metadata);
    console.log('파일 업로드 완료:',  {
      name: snapshot.metadata.name,
      size: snapshot.metadata.size,
      contentType: snapshot.metadata.contentType
    });
    return snapshot;
  } catch (error) {
    console.error('업로드 실패:', error);
    throw error;
  }
}
```

**참고**: MIME 타입을 지정하지 않으면 Firebase가 파일 확장자로 자동 감지합니다.

---

# 다운로드 URL 획득

업로드된 파일의 다운로드 URL을 획득하여 데이터베이스에 저장합니다.

```javascript
import { getDownloadURL } from 'firebase/storage';

async function uploadProfilePhotoAndGetURL(userId, file) {
  const photoRef = ref(storage, `users/${userId}/profile/photo.jpg`);

  try {
    // 1. 파일 업로드
    const snapshot = await uploadBytes(photoRef, file);

    // 2. 다운로드 URL 획득
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log('다운로드 URL:', downloadURL);

    // 3. 데이터베이스에 URL 저장 (Realtime Database)
    await updateProfile({
      photoURL: downloadURL
    });

    return downloadURL;
  } catch (error) {
    console.error('업로드/URL 획득 실패:', error);
    throw error;
  }
}
```

**중요**: 다운로드 URL은 수시로 변경될 수 있으므로, 파일을 참조할 때마다 새로운 URL을 획득하는 것이 좋습니다. 하지만 일반적으로는 `getDownloadURL`로 획득한 URL을 데이터베이스에 저장하고 재사용합니다.

---

# 파일 삭제

더 이상 필요하지 않은 파일을 Storage에서 삭제할 수 있습니다.

```javascript
import { deleteObject } from 'firebase/storage';

async function deleteProfilePhoto(userId) {
  const photoRef = ref(storage, `users/${userId}/profile/photo.jpg`);

  try {
    // 파일 삭제
    await deleteObject(photoRef);
    console.log('파일이 성공적으로 삭제되었습니다');

    // 데이터베이스에서도 URL 삭제
    await updateProfile({
      photoURL: null
    });

    return true;
  } catch (error) {
    console.error('파일 삭제 실패:', error);
    throw error;
  }
}
```

## 삭제 시 발생할 수 있는 오류

| 오류 | 원인 | 해결 방법 |
|-----|------|---------|
| `storage/object-not-found` | 파일이 존재하지 않음 | 파일 경로 확인 |
| `storage/unauthorized` | 권한 부족 (다른 사용자의 파일) | 보안 규칙 확인, 자신의 파일만 삭제 |
| `storage/retry-limit-exceeded` | 네트워크 오류 | 재시도 또는 사용자에게 알림 |

---

# 에러 처리

## 일반적인 오류 상황 및 처리 방법

```javascript
import { uploadBytes } from 'firebase/storage';

async function uploadWithErrorHandling(userId, file) {
  const photoRef = ref(storage, `users/${userId}/profile/${file.name}`);

  try {
    // 파일 크기 유효성 검사 (클라이언트 사이드)
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    if (file.size > MAX_FILE_SIZE) {
      throw new Error('파일 크기가 5MB를 초과합니다');
    }

    // 파일 타입 유효성 검사
    const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
    if (!ALLOWED_TYPES.includes(file.type)) {
      throw new Error('지원하지 않는 파일 형식입니다 (JPEG, PNG, WebP만 가능)');
    }

    // 파일 업로드
    const snapshot = await uploadBytes(photoRef, file);
    console.log('업로드 성공:', snapshot.metadata.name);
    return snapshot;

  } catch (error) {
    // Firebase 오류 처리
    if (error.code) {
      switch (error.code) {
        case 'storage/unauthorized':
          console.error('권한 오류: 파일을 업로드할 권한이 없습니다');
          break;
        case 'storage/unknown':
          console.error('알 수 없는 오류:', error.message);
          break;
        case 'storage/retry-limit-exceeded':
          console.error('네트워크 오류: 업로드에 실패했습니다. 다시 시도해주세요');
          break;
        default:
          console.error('업로드 오류:', error.code, error.message);
      }
    } else {
      // 클라이언트 사이드 유효성 검사 오류
      console.error('입력 오류:', error.message);
    }
    throw error;
  }
}
```

## 권장 사항

1. **파일 유효성 검사 (클라이언트)**
   - 파일 크기 확인 (권장: 5MB 이하)
   - 파일 타입 확인 (MIME 타입)
   - 사용자에게 명확한 에러 메시지 표시

2. **업로드 진행 상황 표시**
   - `uploadBytesResumable()` 사용
   - 진행 바나 백분율 표시
   - 네트워크가 느린 경우 특히 중요

3. **업로드 실패 재시도**
   ```javascript
   async function uploadWithRetry(userId, file, maxRetries = 3) {
     for (let i = 0; i < maxRetries; i++) {
       try {
         return await uploadProfilePhoto(userId, file);
       } catch (error) {
         if (i < maxRetries - 1) {
           console.log(`재시도 ${i + 1}/${maxRetries - 1}`);
           await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
         } else {
           throw error;
         }
       }
     }
   }
   ```

4. **데이터베이스 일관성 유지**
   - 파일 업로드 후 URL을 데이터베이스에 저장
   - 파일 삭제 시 데이터베이스에서도 URL 제거
   - 트랜잭션이나 체크포인트를 사용하여 데이터 일관성 보장

---

# 실제 구현 예제

## Svelte 컴포넌트에서 프로필 사진 업로드

기존 `UserProfile.svelte`에서 구현한 프로필 사진 업로드 방식:

```javascript
// src/demo/UserProfile.svelte의 예제
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '$lib/utils/firebase.js';

async function handleSubmit(event) {
  event.preventDefault();
  isSaving = true;

  try {
    const updateData = {
      displayName: formData.displayName,
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth
    };

    // 파일이 선택된 경우 업로드
    if (file) {
      const fileName = `${Date.now()}-${file.name}`;
      const photoStorageRef = storageRef(storage, `users/${login.uid}/profile/${fileName}`);

      // 파일 업로드
      const snapshot = await uploadBytes(photoStorageRef, file);

      // 다운로드 URL 획득
      const downloadURL = await getDownloadURL(snapshot.ref);
      updateData.photoURL = downloadURL;
    }

    // 프로필 업데이트 (Auth + RTDB)
    await login.updateProfile(updateData);

    // 성공 메시지 표시
    successMessage = '프로필이 성공적으로 업데이트되었습니다';
    setTimeout(() => {
      successMessage = '';
    }, 3000);

    // 파일 입력 초기화
    file = null;
    preview = null;

  } catch (error) {
    console.error('업데이트 실패:', error);
    errorMessage = '프로필 업데이트에 실패했습니다: ' + error.message;
  } finally {
    isSaving = false;
  }
}
```

---

# 참고 사항

1. **소프트 삭제**: Firebase Storage의 삭제된 파일은 7일간 복구 가능합니다
2. **보안 규칙**: 반드시 보안 규칙을 설정하여 무단 업로드/삭제를 방지하세요
3. **비용**: Firebase Storage는 저장 공간과 네트워크 트래픽에 따라 비용이 청구됩니다
4. **파일 경로 구조**: `/users/{userId}/` 하위에 파일을 구조화하여 관리하세요
5. **URL 갱신**: 다운로드 URL은 사용자 UID가 변경되거나 보안 규칙 변경 시 갱신해야 할 수 있습니다

---

# 파일 업로드 웹 컴포넌트 시스템

본 섹션에서는 재사용 가능한 파일 업로드 웹 컴포넌트 시스템을 소개합니다. 이 시스템은 게시글, 댓글 등 다양한 곳에서 파일 업로드 기능을 쉽게 통합할 수 있도록 설계되었습니다.

## 시스템 개요

파일 업로드 웹 컴포넌트 시스템은 다음과 같은 구성 요소로 이루어져 있습니다:

1. **FileUploadTrigger.wc.svelte**: 파일 선택 및 업로드를 시작하는 버튼 컴포넌트
2. **FileUploadList.wc.svelte**: 업로드된 파일 목록을 표시하고 관리하는 컴포넌트
3. **storage.ts**: Firebase Storage 작업을 위한 헬퍼 함수들
4. **fileUploadState.ts**: 두 컴포넌트 간 상태를 공유하는 전역 상태 관리

### 주요 특징

- ✅ **분리된 UI 컴포넌트**: 업로드 버튼과 파일 목록을 독립적으로 배치 가능
- ✅ **상태 공유**: 같은 `id`를 사용하여 두 컴포넌트 간 상태 동기화
- ✅ **실시간 진행률 표시**: 업로드 진행 상황을 실시간으로 표시
- ✅ **다중 파일 업로드**: 여러 파일을 동시에 업로드 가능
- ✅ **파일 검증**: 파일 크기(5MB) 및 타입(JPEG, PNG, WebP) 자동 검증
- ✅ **편집 모드 지원**: 기존 파일 목록을 로드하여 수정 가능
- ✅ **Firebase Storage 통합**: 자동으로 `/users/{userId}/{category}/{timestamp}-{filename}` 경로에 저장
- ✅ **Svelte 5 Web Components**: shadow: 'none' 방식으로 스타일링 자유도 높음

## 아키텍처

```
┌────────────────────────────────────────────────┐
│          fileUploadState.ts (전역 상태)         │
│  - Map<id, FileState> 구조로 상태 저장          │
│  - subscribe/notify 패턴으로 변경 알림          │
└────────────────────────────────────────────────┘
            ↑                          ↑
            │                          │
   ┌────────┴────────┐        ┌───────┴────────┐
   │ FileUploadTrigger│        │ FileUploadList  │
   │   (업로드 버튼)   │        │   (파일 목록)    │
   │                 │        │                │
   │ - 파일 선택      │        │ - 진행률 표시   │
   │ - 업로드 시작    │        │ - 파일 삭제     │
   │ - storage.ts 호출│        │ - getUrls() 메서드│
   └─────────────────┘        └─────────────────┘
            │
            ↓
   ┌─────────────────┐
   │   storage.ts     │
   │ (헬퍼 함수)       │
   │                 │
   │ - uploadFileWithProgress │
   │ - deleteFileByUrl        │
   │ - validateFile           │
   └─────────────────┘
            │
            ↓
   ┌─────────────────┐
   │ Firebase Storage │
   │ /users/{uid}/... │
   └─────────────────┘
```

## 헬퍼 함수 (storage.ts)

**파일 위치**: `src/lib/services/storage.ts`

### 주요 함수

#### 1. uploadFileWithProgress

파일을 Firebase Storage에 업로드하고 진행률을 추적합니다.

```typescript
/**
 * 파일을 Firebase Storage에 업로드하고 진행률을 추적합니다
 *
 * @param userId - 사용자 UID
 * @param file - 업로드할 파일 객체
 * @param category - 업로드 카테고리 ('posts' | 'comments' | 'profile')
 * @param onProgress - 진행률 콜백 함수 (0~100)
 * @returns 업로드 결과 (성공 시 downloadURL 포함)
 */
export async function uploadFileWithProgress(
  userId: string,
  file: File,
  category: UploadCategory,
  onProgress?: ProgressCallback
): Promise<UploadResult>
```

**경로 구조**: `/users/{userId}/{category}/{timestamp}-{filename}`

**사용 예제**:
```typescript
const result = await uploadFileWithProgress(
  'user123',
  file,
  'posts',
  (progress) => console.log(`진행률: ${progress}%`)
);

if (result.success) {
  console.log('업로드 완료:', result.downloadURL);
} else {
  console.error('업로드 실패:', result.error);
}
```

#### 2. deleteFileByUrl

Firebase Storage에서 URL로 파일을 삭제합니다.

```typescript
/**
 * Firebase Storage에서 URL로 파일을 삭제합니다
 *
 * @param url - 삭제할 파일의 다운로드 URL
 * @returns 삭제 결과 (success, error)
 */
export async function deleteFileByUrl(url: string): Promise<{
  success: boolean;
  error?: string;
}>
```

**사용 예제**:
```typescript
const result = await deleteFileByUrl(fileUrl);
if (result.success) {
  console.log('파일 삭제 완료');
} else {
  console.error('삭제 실패:', result.error);
}
```

#### 3. validateFile

파일의 크기와 타입을 검증합니다.

```typescript
/**
 * 파일 검증 (크기, 타입)
 *
 * @param file - 검증할 파일 객체
 * @returns 검증 결과 (valid, error)
 */
export function validateFile(file: File): ValidationResult
```

**검증 규칙**:
- **최대 파일 크기**: 5MB
- **허용 타입**: JPEG, PNG, WebP (image/jpeg, image/png, image/webp)

**사용 예제**:
```typescript
const validation = validateFile(file);
if (!validation.valid) {
  alert(validation.error);
  return;
}
```

### TypeScript 인터페이스

```typescript
/**
 * 업로드 카테고리
 */
export type UploadCategory = 'posts' | 'comments' | 'profile';

/**
 * 업로드 결과
 */
export interface UploadResult {
  success: boolean;
  downloadURL?: string;
  error?: string;
}

/**
 * 파일 검증 결과
 */
export interface ValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * 진행률 콜백 함수 (0~100)
 */
export type ProgressCallback = (progress: number) => void;
```

## 상태 관리 (fileUploadState.ts)

**파일 위치**: `src/lib/services/fileUploadState.ts`

`fileUploadState.ts`는 `FileUploadTrigger`와 `FileUploadList` 컴포넌트 간 상태를 공유하는 전역 상태 관리 모듈입니다.

### 데이터 구조

```typescript
/**
 * 업로드 중인 파일 정보
 */
export interface UploadingFile {
  id: string;               // 파일 고유 ID
  file?: File;              // 파일 객체 (업로드 시)
  url?: string;             // 다운로드 URL (완료 시)
  progress: number;         // 진행률 (0~100)
  status: 'uploading' | 'completed' | 'error';
  error?: string;           // 에러 메시지
}

/**
 * 업로더 상태
 */
interface FileState {
  files: UploadingFile[];   // 파일 목록
  listeners: Set<() => void>; // 상태 변경 리스너들
}
```

**전역 Map 구조**: `Map<uploaderId, FileState>`
- 각 업로더는 고유한 `id`로 식별됩니다
- 같은 `id`를 사용하는 컴포넌트들은 상태를 공유합니다

### 주요 함수

#### 1. addFile - 파일 추가

```typescript
/**
 * 새 파일을 업로더에 추가
 *
 * @param id - 업로더 ID
 * @param file - 추가할 파일 객체
 * @returns 생성된 파일 ID
 */
export function addFile(id: string, file: File): string
```

#### 2. updateFileProgress - 진행률 업데이트

```typescript
/**
 * 파일 업로드 진행률 업데이트
 *
 * @param id - 업로더 ID
 * @param fileId - 파일 ID
 * @param progress - 진행률 (0~100)
 */
export function updateFileProgress(id: string, fileId: string, progress: number): void
```

#### 3. completeFileUpload - 업로드 완료

```typescript
/**
 * 파일 업로드 완료 처리
 *
 * @param id - 업로더 ID
 * @param fileId - 파일 ID
 * @param url - 다운로드 URL
 */
export function completeFileUpload(id: string, fileId: string, url: string): void
```

#### 4. removeFile - 파일 삭제

```typescript
/**
 * 파일 제거
 *
 * @param id - 업로더 ID
 * @param fileId - 파일 ID
 */
export function removeFile(id: string, fileId: string): void
```

#### 5. getUploadedUrls - 완료된 URL 목록 가져오기

```typescript
/**
 * 완료된 파일의 URL 목록 가져오기
 *
 * @param id - 업로더 ID
 * @returns URL 배열
 */
export function getUploadedUrls(id: string): string[]
```

#### 6. initializeWithUrls - 초기 URL 목록 설정 (편집 모드)

```typescript
/**
 * 기존 URL 목록으로 초기화 (편집 모드)
 *
 * @param id - 업로더 ID
 * @param urls - 초기 URL 배열
 */
export function initializeWithUrls(id: string, urls: string[]): void
```

#### 7. subscribe - 상태 변경 구독

```typescript
/**
 * 상태 변경 구독
 *
 * @param id - 업로더 ID
 * @param listener - 변경 시 호출될 콜백 함수
 * @returns 구독 해제 함수
 */
export function subscribe(id: string, listener: () => void): () => void
```

## FileUploadTrigger 웹 컴포넌트

**파일 위치**: `src/lib/components/FileUploadTrigger.wc.svelte`

파일 선택 및 업로드를 시작하는 버튼 컴포넌트입니다.

### Props

```typescript
interface Props {
  id: string;                      // 업로더 고유 ID (필수, FileUploadList와 동일하게 설정)
  category?: UploadCategory;       // 업로드 카테고리 (기본값: 'posts')
  multiple?: string;               // 다중 선택 허용 ('true' | 'false', 기본값: 'true')
  buttonText?: string;             // 버튼 텍스트 (기본값: i18n '파일선택')
}
```

### 사용 예제

**단일 파일 업로드 버튼**:
```html
<file-upload-trigger
  id="profile-photo"
  category="profile"
  multiple="false"
  buttonText="프로필 사진 선택"
></file-upload-trigger>
```

**다중 파일 업로드 버튼 (게시글)**:
```html
<file-upload-trigger
  id="post-create"
  category="posts"
  multiple="true"
  buttonText="이미지 첨부"
></file-upload-trigger>
```

### 동작 방식

1. 사용자가 버튼을 클릭하면 `<input type="file">` 다이얼로그가 열립니다
2. 파일 선택 후:
   - `validateFile()`로 파일 검증
   - 검증 통과 시 `uploadFileWithProgress()`로 업로드 시작
   - 진행률을 `fileUploadState`에 업데이트
3. 업로드 완료 시:
   - 다운로드 URL을 `fileUploadState`에 저장
   - `FileUploadList` 컴포넌트가 자동으로 목록 갱신

## FileUploadList 웹 컴포넌트

**파일 위치**: `src/lib/components/FileUploadList.wc.svelte`

업로드된 파일 목록을 표시하고 관리하는 컴포넌트입니다.

### Props

```typescript
interface Props {
  id: string;                      // 업로더 고유 ID (필수, FileUploadTrigger와 동일하게 설정)
  initialUrls?: string;            // 초기 URL 목록 JSON 문자열 (편집 모드용)
}
```

### 사용 예제

**신규 생성 모드**:
```html
<file-upload-list id="post-create"></file-upload-list>
```

**편집 모드 (기존 파일 로드)**:
```html
<file-upload-list
  id="post-edit"
  initial-urls='["https://example.com/image1.jpg", "https://example.com/image2.jpg"]'
></file-upload-list>
```

### 동작 방식

1. `onMount` 시 `fileUploadState` 구독
2. 상태 변경 시 자동으로 UI 업데이트 (진행률, 완료, 에러)
3. 삭제 버튼 클릭 시:
   - 사용자에게 확인 다이얼로그 표시
   - Firebase Storage에서 파일 삭제 (`deleteFileByUrl`)
   - `fileUploadState`에서 파일 제거

### 외부에서 URL 목록 가져오기

폼 제출 시 업로드된 파일의 URL 배열을 가져올 수 있습니다:

```typescript
// DOM 쿼리를 통해 getUrls() 메서드 호출
const fileUploadList = document.querySelector('file-upload-list[id="post-create"]');
// @ts-ignore
const urls = fileUploadList?.getUrls ? fileUploadList.getUrls() : [];

console.log('업로드된 파일 URLs:', urls);
// 출력: ['https://...', 'https://...']
```

### UI 표시 항목

- **상태 아이콘**:
  - ⏳ 업로드 중
  - ✅ 완료
  - ❌ 에러
- **파일 정보**:
  - 파일명 (URL에서 추출 또는 File.name)
  - 파일 크기 (KB, MB 단위로 표시)
- **진행률 바**: 업로드 중일 때만 표시 (0~100%)
- **삭제 버튼**: 완료 또는 에러 상태일 때 표시

## 게시글에서의 사용 예제

**파일 위치**: `src/demo/PostListPage.svelte`

### 1. 웹 컴포넌트 Import

```typescript
import '../lib/components/FileUploadTrigger.wc.svelte';
import '../lib/components/FileUploadList.wc.svelte';
```

### 2. 모달 UI에 추가

```html
<!-- 게시글 생성 모달 -->
<Dialog bind:open={isNewPostDialogOpen}>
  <form onsubmit={handleSubmit}>
    <!-- 제목 입력 -->
    <input type="text" bind:value={postTitle} />

    <!-- 내용 입력 -->
    <textarea bind:value={postContent}></textarea>

    <!-- 파일 업로드 트리거 -->
    <div class="form-group">
      <label>{$t("파일첨부")}</label>
      <div class="file-upload-area">
        <file-upload-trigger
          id="post-create"
          category="posts"
          multiple="true"
          buttonText={$t("이미지첨부")}
        ></file-upload-trigger>
      </div>
    </div>

    <!-- 파일 목록 -->
    <file-upload-list id="post-create"></file-upload-list>

    <!-- 제출 버튼 -->
    <button type="submit">{$t("등록")}</button>
  </form>
</Dialog>
```

### 3. 제출 시 URL 가져오기

```typescript
async function handleSubmit(event: Event) {
  event.preventDefault();

  // 1. 폼 검증
  if (!postTitle.trim() || !postContent.trim()) {
    alert('제목과 내용을 입력해주세요');
    return;
  }

  // 2. 사용자 정보 확인
  const userId = $login.uid;
  const userName = $login.displayName || '익명';

  // 3. 업로드된 파일 URL 목록 가져오기
  const fileUploadList = document.querySelector('file-upload-list[id="post-create"]');
  // @ts-ignore
  const urls = fileUploadList?.getUrls ? fileUploadList.getUrls() : [];

  // 4. Firebase RTDB에 게시글 저장 (파일 URL 포함)
  const result = await createPost(
    postCategory,
    userId,
    userName,
    postTitle,
    postContent,
    urls.length > 0 ? urls : undefined
  );

  // 5. 결과 처리
  if (result.success) {
    alert('게시글이 등록되었습니다');
    isNewPostDialogOpen = false;
    // 폼 초기화
    postTitle = '';
    postContent = '';
  } else {
    alert('게시글 등록에 실패했습니다: ' + result.error);
  }
}
```

### 4. forum.ts 서비스 함수 수정

**파일 위치**: `src/lib/services/forum.ts`

```typescript
export async function createPost(
  category: PostCategory,
  uid: UserId,
  author: string,
  title: string,
  content: string,
  urls?: string[]  // ← 추가
): Promise<CreatePostResult> {
  // ... 기존 코드 ...

  const postData: any = {
    uid: uid,
    title: title,
    content: content,
    author: author,
    category: category,
    order: order,
    createdAt: now,
    updatedAt: now,
    likeCount: 0,
    commentCount: 0
  };

  // 첨부 파일 URL 추가 (있는 경우)
  if (urls && urls.length > 0) {
    postData.urls = urls;
  }

  // ... 저장 로직 ...
}
```

### 5. 편집 모드 예제

```html
<!-- 게시글 수정 모달 -->
<Dialog bind:open={isEditDialogOpen}>
  <form onsubmit={handleEditSubmit}>
    <!-- 제목 입력 -->
    <input type="text" bind:value={editTitle} />

    <!-- 내용 입력 -->
    <textarea bind:value={editContent}></textarea>

    <!-- 파일 업로드 (기존 파일 로드) -->
    <file-upload-trigger
      id="post-edit-{editingPost.postId}"
      category="posts"
      multiple="true"
      buttonText={$t("이미지첨부")}
    ></file-upload-trigger>

    <!-- 파일 목록 (initial-urls로 기존 파일 표시) -->
    <file-upload-list
      id="post-edit-{editingPost.postId}"
      initial-urls={JSON.stringify(editingPost.urls || [])}
    ></file-upload-list>

    <!-- 제출 버튼 -->
    <button type="submit">{$t("수정")}</button>
  </form>
</Dialog>
```

```typescript
async function handleEditSubmit(event: Event) {
  event.preventDefault();

  // URL 가져오기
  const fileUploadList = document.querySelector(`file-upload-list[id="post-edit-${editingPost.postId}"]`);
  // @ts-ignore
  const urls = fileUploadList?.getUrls ? fileUploadList.getUrls() : [];

  // 게시글 업데이트
  const result = await updatePost(
    editingPost.postId,
    {
      title: editTitle,
      content: editContent,
      urls: urls.length > 0 ? urls : undefined
    }
  );

  // ... 결과 처리 ...
}
```

## 댓글에서의 사용 예제

**파일 위치**: `src/demo/CommentItem.svelte`

### 1. 웹 컴포넌트 Import

```typescript
import '../lib/components/FileUploadTrigger.wc.svelte';
import '../lib/components/FileUploadList.wc.svelte';
```

### 2. 답글 모달에 추가

```html
<!-- 답글 작성 모달 -->
<Dialog bind:open={isReplyDialogOpen}>
  <form onsubmit={handleReplySubmit}>
    <!-- 답글 내용 입력 -->
    <textarea bind:value={replyContent}></textarea>

    <!-- 파일 업로드 트리거 -->
    <div class="file-upload-section">
      <file-upload-trigger
        id="comment-reply-{comment.commentId}"
        category="comments"
        multiple="true"
        buttonText={$t("이미지첨부")}
      ></file-upload-trigger>
    </div>

    <!-- 파일 목록 -->
    <file-upload-list id="comment-reply-{comment.commentId}"></file-upload-list>

    <!-- 제출 버튼 -->
    <button type="submit">{$t("답글등록")}</button>
  </form>
</Dialog>
```

### 3. 답글 제출 시 URL 가져오기

```typescript
async function handleReplySubmit() {
  // 1. 내용 검증
  if (!replyContent.trim()) {
    alert('답글 내용을 입력해주세요');
    return;
  }

  // 2. 사용자 정보 확인
  const userId = $login.uid;

  // 3. 업로드된 파일 URL 목록 가져오기
  const fileUploadList = document.querySelector(`file-upload-list[id="comment-reply-${comment.commentId}"]`);
  // @ts-ignore
  const urls = fileUploadList?.getUrls ? fileUploadList.getUrls() : [];

  // 4. Firebase에 답글 저장 (Flat Style 구조)
  const result = await createChildComment({
    parentCommentId: comment.commentId,
    userId: userId,
    content: replyContent,
    urls: urls.length > 0 ? urls : undefined
  });

  // 5. 결과 처리
  if (result.success) {
    alert('답글이 등록되었습니다');
    isReplyDialogOpen = false;
    replyContent = '';
  } else {
    alert('답글 등록에 실패했습니다: ' + result.error);
  }
}
```

### 4. 댓글 수정 모달에 추가 (기존 파일 로드)

```html
<!-- 댓글 수정 모달 -->
<Dialog bind:open={isEditDialogOpen}>
  <form onsubmit={handleEditSubmit}>
    <!-- 댓글 내용 입력 -->
    <textarea bind:value={editContent}></textarea>

    <!-- 파일 업로드 (기존 파일 로드) -->
    <file-upload-trigger
      id="comment-edit-{comment.commentId}"
      category="comments"
      multiple="true"
      buttonText={$t("이미지첨부")}
    ></file-upload-trigger>

    <!-- 파일 목록 (initial-urls로 기존 파일 표시) -->
    <file-upload-list
      id="comment-edit-{comment.commentId}"
      initial-urls={JSON.stringify(comment.urls || [])}
    ></file-upload-list>

    <!-- 제출 버튼 -->
    <button type="submit">{$t("수정")}</button>
  </form>
</Dialog>
```

```typescript
async function handleEditSubmit() {
  // 1. 내용 검증
  if (!editContent.trim()) {
    alert('댓글 내용을 입력해주세요');
    return;
  }

  // 2. 업로드된 파일 URL 목록 가져오기
  const fileUploadList = document.querySelector(`file-upload-list[id="comment-edit-${comment.commentId}"]`);
  // @ts-ignore
  const urls = fileUploadList?.getUrls ? fileUploadList.getUrls() : [];

  // 3. Firebase에 댓글 업데이트
  const result = await updateComment(comment.commentId, {
    content: editContent,
    urls: urls.length > 0 ? urls : undefined
  });

  // 4. 결과 처리
  if (result.success) {
    alert('댓글이 수정되었습니다');
    isEditDialogOpen = false;
  } else {
    alert('댓글 수정에 실패했습니다: ' + result.error);
  }
}
```

### 5. comment.ts 서비스 함수 수정

**파일 위치**: `src/lib/services/comment.ts`

```typescript
// 최상위 댓글 생성
export async function createTopLevelComment(
  params: CreateTopLevelCommentParams
): Promise<CreateCommentResult> {
  const { postId, userId, content, urls } = params;  // ← urls 추가

  // ... 기존 코드 ...

  const commentData: any = {
    postId: postId,
    uid: userId,
    content: content,
    depth: 1,
    order: orderString,
    parentId: null,
    createdAt: now,
    updatedAt: now,
  };

  // 첨부 파일 URL 추가 (있는 경우)
  if (urls && urls.length > 0) {
    commentData.urls = urls;
  }

  // ... 저장 로직 ...
}

// 대댓글 생성
export async function createChildComment(
  params: CreateChildCommentParams
): Promise<CreateCommentResult> {
  const { parentCommentId, userId, content, urls } = params;  // ← urls 추가

  // ... 기존 코드 ...

  const commentData: any = {
    postId: postId,
    uid: userId,
    content: content,
    depth: newDepth,
    order: newOrder,
    parentId: parentCommentId,
    createdAt: now,
    updatedAt: now,
  };

  // 첨부 파일 URL 추가 (있는 경우)
  if (urls && urls.length > 0) {
    commentData.urls = urls;
  }

  // ... 저장 로직 ...
}

// 댓글 수정
export async function updateComment(
  commentId: FirebaseKey,
  updates: { content: string; urls?: string[] }  // ← urls 추가
): Promise<CreateCommentResult> {
  // ... 기존 코드 ...

  const updateData: Record<string, any> = {};
  updateData[`comments/${commentId}/content`] = updates.content;
  updateData[`comments/${commentId}/updatedAt`] = now;

  // 첨부 파일 URL 업데이트 (있는 경우)
  if (updates.urls !== undefined) {
    if (updates.urls.length > 0) {
      updateData[`comments/${commentId}/urls`] = updates.urls;
    } else {
      // urls가 빈 배열이면 필드 삭제 (null로 설정)
      updateData[`comments/${commentId}/urls`] = null;
    }
  }

  await update(ref(database), updateData);

  // ... 결과 반환 ...
}
```

## URL 저장 및 관리

### Firebase RTDB 데이터 구조

파일 URL 배열은 각 게시글/댓글 노드에 `urls` 필드로 저장됩니다:

**게시글 구조** (`/posts/{postId}`):
```json
{
  "postId": "post-abc123",
  "uid": "user123",
  "title": "게시글 제목",
  "content": "게시글 내용",
  "urls": [
    "https://firebasestorage.googleapis.com/.../image1.jpg",
    "https://firebasestorage.googleapis.com/.../image2.jpg"
  ],
  "createdAt": 1234567890,
  "updatedAt": 1234567890
}
```

**댓글 구조** (`/comments/{commentId}`):
```json
{
  "commentId": "comment-xyz789",
  "postId": "post-abc123",
  "uid": "user456",
  "content": "댓글 내용",
  "urls": [
    "https://firebasestorage.googleapis.com/.../photo.jpg"
  ],
  "depth": 1,
  "order": "post-abc123-00001",
  "parentId": null,
  "createdAt": 1234567890,
  "updatedAt": 1234567890
}
```

### URL 배열 관리 규칙

1. **신규 생성 시**:
   - URL이 있으면 배열로 저장: `urls: [...]`
   - URL이 없으면 필드 자체를 추가하지 않음 (undefined)

2. **수정 시**:
   - URL이 있으면 배열로 업데이트: `urls: [...]`
   - URL이 없으면 필드 삭제: `urls: null`

3. **조회 시**:
   - `urls` 필드가 없을 수 있으므로 항상 optional chaining 사용
   - 예: `post.urls || []`, `comment.urls || []`

### TypeScript 인터페이스

**게시글 타입** (`src/lib/types/forum.ts`):
```typescript
export interface Post {
  postId: FirebaseKey;
  uid: UserId;
  title: string;
  content: string;
  urls?: string[];  // ← 선택 필드
  category: PostCategory;
  order: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  likeCount: number;
  commentCount: number;
}
```

**댓글 타입** (`src/lib/types/comment.ts`):
```typescript
export interface Comment {
  postId: FirebaseKey;
  uid: UserId;
  content: string;
  urls?: string[];  // ← 선택 필드
  depth: number;
  order: string;
  parentId: FirebaseKey | null;
  likeCount: number;
  commentCount: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

## 웹 컴포넌트 스타일링

두 컴포넌트 모두 `shadow: 'none'` 방식을 사용하므로 외부 CSS로 스타일을 쉽게 커스터마이징할 수 있습니다.

### 기본 클래스명

**FileUploadTrigger**:
- `.file-upload-trigger` - 버튼 컨테이너
- `.upload-button` - 실제 버튼 요소

**FileUploadList**:
- `.file-upload-list` - 목록 컨테이너
- `.empty-state` - 파일 없음 상태
- `.files-container` - 파일 목록
- `.file-item` - 개별 파일 항목
- `.file-item.uploading` - 업로드 중 상태
- `.file-item.completed` - 완료 상태
- `.file-item.error` - 에러 상태
- `.progress-bar-container` - 진행률 바 컨테이너
- `.delete-button` - 삭제 버튼

### 스타일 커스터마이징 예제

```css
/* 버튼 스타일 변경 */
file-upload-trigger .upload-button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
}

/* 파일 항목 스타일 변경 */
file-upload-list .file-item {
  background-color: #f0f0f0;
  border: 2px solid #ddd;
  padding: 16px;
}

/* 진행률 바 색상 변경 */
file-upload-list .progress-bar {
  background: linear-gradient(90deg, #FF6B6B 0%, #FF8787 100%);
}
```

## 고급 사용 예제

### 1. 동적 ID 생성

여러 인스턴스를 동시에 사용할 때는 동적 ID를 생성합니다:

```typescript
// 각 댓글마다 고유한 업로더 ID 사용
const uploaderId = `comment-reply-${comment.commentId}`;
```

```html
<file-upload-trigger id={uploaderId} category="comments"></file-upload-trigger>
<file-upload-list id={uploaderId}></file-upload-list>
```

### 2. 프로그래밍 방식으로 파일 추가

```typescript
import { addFile, completeFileUpload } from '$lib/services/fileUploadState';

// 파일을 직접 추가
const fileId = addFile('my-uploader', file);

// 업로드 완료 처리
completeFileUpload('my-uploader', fileId, downloadURL);
```

### 3. 상태 변경 감지

```typescript
import { subscribe } from '$lib/services/fileUploadState';

// 상태 변경 구독
const unsubscribe = subscribe('my-uploader', () => {
  console.log('파일 목록이 변경되었습니다');
});

// 구독 해제
unsubscribe();
```

## 문제 해결

### 1. 파일이 업로드되지 않음

**원인**: Firebase Storage 보안 규칙 또는 인증 문제

**해결**:
- Firebase Console에서 Storage 보안 규칙 확인
- 사용자가 로그인되어 있는지 확인 (`$login.uid` 존재 여부)
- 브라우저 콘솔에서 에러 메시지 확인

### 2. URL을 가져올 수 없음

**원인**: `getUrls()` 메서드가 등록되지 않았거나 DOM 요소를 찾을 수 없음

**해결**:
- `FileUploadList` 컴포넌트가 마운트되었는지 확인
- `id` prop이 올바르게 설정되었는지 확인
- DOM 쿼리에서 올바른 `id`를 사용했는지 확인

```typescript
// 올바른 방법
const element = document.querySelector('file-upload-list[id="post-create"]');
// @ts-ignore
const urls = element?.getUrls?.() || [];
```

### 3. 두 컴포넌트가 상태를 공유하지 않음

**원인**: `id` prop이 서로 다름

**해결**:
- `FileUploadTrigger`와 `FileUploadList`의 `id` prop이 정확히 동일한지 확인

```html
<!-- 올바른 예 -->
<file-upload-trigger id="post-create"></file-upload-trigger>
<file-upload-list id="post-create"></file-upload-list>

<!-- 잘못된 예 -->
<file-upload-trigger id="post-create"></file-upload-trigger>
<file-upload-list id="post-upload"></file-upload-list> <!-- ❌ id 불일치 -->
```

### 4. 편집 모드에서 기존 파일이 표시되지 않음

**원인**: `initial-urls` prop이 올바르게 전달되지 않음

**해결**:
- `initial-urls` prop에 JSON 문자열로 전달
- 빈 배열도 처리되도록 `|| []` 사용

```html
<!-- 올바른 방법 -->
<file-upload-list
  id="post-edit"
  initial-urls={JSON.stringify(post.urls || [])}
></file-upload-list>
```

## 정리

파일 업로드 웹 컴포넌트 시스템은 다음과 같은 장점을 제공합니다:

✅ **재사용성**: 게시글, 댓글, 프로필 등 다양한 곳에서 사용 가능
✅ **유연성**: 업로드 버튼과 파일 목록을 독립적으로 배치 가능
✅ **사용자 경험**: 실시간 진행률 표시, 파일 검증, 에러 처리
✅ **타입 안전성**: TypeScript 인터페이스로 타입 체크
✅ **Firebase 통합**: Storage 업로드 및 RTDB URL 저장 자동화
✅ **편집 지원**: 기존 파일 로드 및 수정 기능

이 시스템을 활용하여 SNS 웹 애플리케이션의 다양한 기능에서 파일 업로드를 쉽게 구현할 수 있습니다.

