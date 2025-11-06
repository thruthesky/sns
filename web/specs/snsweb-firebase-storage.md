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

## 파일 업로드 제한

### 허용되는 파일 타입 및 용량

본 애플리케이션에서는 다음과 같은 파일 업로드 제한을 적용합니다:

#### 이미지 파일
- **확장자**: jpg, jpeg, png, gif, webp, bmp, svg
- **MIME 타입**: image/jpeg, image/png, image/gif, image/webp, image/bmp, image/svg+xml
- **최대 용량**: 10MB

#### 동영상 파일
- **확장자**: mp4 (mp4만 허용)
- **MIME 타입**: video/mp4
- **최대 용량**: 50MB

#### 문서/압축 파일
- **확장자**: zip, pdf, txt, doc, docx, ppt, pptx, csv, xls, xlsx, rar
- **MIME 타입**:
  - application/zip
  - application/pdf
  - text/plain
  - application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document
  - application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation
  - text/csv
  - application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
  - application/x-rar-compressed, application/vnd.rar
- **최대 용량**: 15MB

### 검증 위치

파일 업로드 제한은 두 곳에서 검증됩니다:

1. **클라이언트 측 (Svelte)**: `src/lib/services/fileValidation.ts`
   - 사용자에게 즉각적인 피드백 제공
   - 불필요한 네트워크 트래픽 방지

2. **서버 측 (Firebase Storage Rules)**: `storage.rules`
   - 보안 강화 (클라이언트 우회 방지)
   - 최종 검증

---

## 보안 규칙 설정

아래와 같이 Firebase Storage 보안 규칙이 설정되어져 있습니다.
- `/users/{userId}/` 경로에 업로드된 파일은 해당 사용자만 쓰기 권한이 있으며, 모든 인증된 사용자가 읽기 권한을 가집니다.
- 파일 타입 및 용량 제한이 서버 측에서도 강제됩니다.
- 이는 사용자가 자신의 파일을 업로드하고, 다른 사용자는 해당 파일을 읽을 수 있도록 하기 위함입니다.
- 따라서, 파일 업로드 시에는 반드시 사용자의 UID를 포함한 경로에 업로드해야 합니다.

### Firebase Storage 보안 규칙

**파일 위치**: `storage.rules`

```
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {
    /**
     * 사용자별 파일 업로드 규칙
     * 경로: /users/{userId}/{category}/{filename}
     */
    match /users/{userId}/{category}/{filename} {
      /**
       * 읽기 권한: 모든 인증된 사용자
       */
      allow read: if request.auth != null;

      /**
       * 쓰기 권한: 본인만 업로드 가능 + 파일 검증
       */
      allow write: if request.auth != null
                   && request.auth.uid == userId
                   && isValidFile();

      /**
       * 삭제 권한: 본인만 삭제 가능
       */
      allow delete: if request.auth != null
                    && request.auth.uid == userId;

      /**
       * 파일 검증 함수
       */
      function isValidFile() {
        let fileSize = request.resource.size;
        let contentType = request.resource.contentType;

        // 이미지 파일 검증 (최대 10MB)
        let isImage = contentType.matches('image/jpeg')
                   || contentType.matches('image/png')
                   || contentType.matches('image/gif')
                   || contentType.matches('image/webp')
                   || contentType.matches('image/bmp')
                   || contentType.matches('image/svg\\+xml');
        let isValidImage = isImage && fileSize <= 10 * 1024 * 1024;

        // 동영상 파일 검증 (mp4만, 최대 50MB)
        let isVideo = contentType.matches('video/mp4');
        let isValidVideo = isVideo && fileSize <= 50 * 1024 * 1024;

        // 문서/압축 파일 검증 (최대 15MB)
        let isDocument = contentType.matches('application/zip')
                      || contentType.matches('application/pdf')
                      || contentType.matches('text/plain')
                      || contentType.matches('application/msword')
                      || contentType.matches('application/vnd.openxmlformats-officedocument.wordprocessingml.document')
                      || contentType.matches('application/vnd.ms-powerpoint')
                      || contentType.matches('application/vnd.openxmlformats-officedocument.presentationml.presentation')
                      || contentType.matches('text/csv')
                      || contentType.matches('application/vnd.ms-excel')
                      || contentType.matches('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
                      || contentType.matches('application/x-rar-compressed')
                      || contentType.matches('application/vnd.rar');
        let isValidDocument = isDocument && fileSize <= 15 * 1024 * 1024;

        return isValidImage || isValidVideo || isValidDocument;
      }
    }

    /**
     * 기본 규칙: 다른 모든 경로는 거부
     */
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

**주요 변경 사항**:
- ✅ 파일 타입별로 상세한 MIME 타입 검증
- ✅ 파일 타입별 용량 제한 (이미지 10MB, 동영상 50MB, 문서 15MB)
- ✅ 인증된 사용자만 파일 읽기 가능
- ✅ 본인만 자신의 파일을 업로드/삭제 가능

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

## Svelte 5 Web Component 속성 매핑

**🔥 중요: Svelte 5 Web Component에서 HTML 속성과 Props 매핑**

Svelte 5 Web Component는 HTML 속성(kebab-case)과 JavaScript props(camelCase) 간 자동 매핑을 지원하지 않습니다. 따라서 kebab-case 속성을 사용하려면 `$props()`에서 명시적으로 매핑해야 합니다.

### 문제 상황

**❌ 잘못된 방법 (작동하지 않음)**:
```typescript
// Props 정의
let {
  id = '',
  initialUrls = '',  // ❌ initial-urls 속성을 받지 못함
} = $props();
```

```html
<!-- HTML 사용 -->
<file-upload-list
  id="post-edit"
  initial-urls='["https://example.com/image1.jpg"]'
></file-upload-list>
```

**문제**: `initial-urls` 속성이 `initialUrls` prop으로 자동 매핑되지 않아서 값을 받지 못합니다.

### 해결 방법

**✅ 올바른 방법 (명시적 매핑)**:
```typescript
// Props 정의 - kebab-case 속성명을 문자열 리터럴로 매핑
let {
  id = '',
  'initial-urls': initialUrls = '',  // ✅ kebab-case를 명시적으로 매핑
}: {
  id?: string;
  'initial-urls'?: string;  // ✅ TypeScript 타입도 kebab-case 사용
} = $props();
```

```html
<!-- HTML 사용 (동일) -->
<file-upload-list
  id="post-edit"
  initial-urls='["https://example.com/image1.jpg"]'
></file-upload-list>
```

**핵심**: `$props()` 구조 분해에서 문자열 리터럴 프로퍼티 이름(`'initial-urls'`)을 사용하여 camelCase 변수(`initialUrls`)로 매핑합니다.

### 적용 예제

#### FileUploadList.wc.svelte
```typescript
let {
  id = '',
  'initial-urls': initialUrls = '',
}: {
  id?: string;
  'initial-urls'?: string;
} = $props();
```

#### FileUploadTrigger.wc.svelte
```typescript
// 단순한 단어는 kebab-case 매핑 불필요
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
```

**참고**: `buttonText` 같은 경우, HTML에서 `buttontext` 또는 `buttonText`로 전달할 수 있지만 kebab-case를 선호할 경우 `'button-text': buttonText`로 명시적으로 매핑하는 것이 좋습니다.

### 규칙 요약

1. **kebab-case HTML 속성 → camelCase Props**: 명시적 매핑 필요
   ```typescript
   'initial-urls': initialUrls  // ✅
   ```

2. **단순한 단어 (소문자)**: 자동 매핑 가능
   ```typescript
   id = ''  // ✅ (id 속성 → id prop)
   ```

3. **TypeScript 타입 정의**: kebab-case 속성명을 문자열 리터럴로 사용
   ```typescript
   {
     'initial-urls'?: string;
   }
   ```

4. **HTML 사용 시**: 항상 kebab-case 사용 (HTML 표준)
   ```html
   <file-upload-list initial-urls="..."></file-upload-list>
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

**참고**: Web Component에서 모든 HTML 속성은 문자열로 전달되므로, `multiple`은 boolean이 아닌 `'true'` | `'false'` 문자열입니다.

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
   - `validateFile()`로 파일 검증 (파일 크기, 타입 확인)
   - 검증 통과 시 `uploadFileWithProgress()`로 업로드 시작
   - 진행률을 `fileUploadState`에 실시간 업데이트
3. 업로드 완료 시:
   - 다운로드 URL을 `fileUploadState`에 저장
   - `FileUploadList` 컴포넌트가 자동으로 목록 갱신

### 상세 구현 로직

#### 1. Props 처리

```typescript
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

// 문자열 → boolean 변환
const isMultiple = $derived(multiple === 'true' || multiple === '');

// 버튼 텍스트 (기본값 또는 사용자 지정)
const displayButtonText = $derived(buttonText || $t('파일선택'));
```

#### 2. 파일 선택 처리

```typescript
async function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  const files = input?.files;

  if (!files || files.length === 0) return;

  // 1. 업로더 ID 검증
  if (!id) {
    console.error('[FileUploadTrigger] id prop is required');
    alert($t('error.file.invalidUrl'));
    return;
  }

  // 2. 로그인 확인
  if (!login.isAuthenticated || !login.uid) {
    alert($t('로그인필요'));
    return;
  }

  // 3. 파일 검증 (각 파일마다)
  const filesArray = Array.from(files);
  for (const file of filesArray) {
    const validation = validateFile(file);
    if (!validation.valid) {
      alert(validation.error);
      // 파일 입력 초기화
      if (input) {
        input.value = '';
      }
      return;
    }
  }

  // 4. 파일 업로드 시작
  isUploading = true;

  try {
    // 선택한 모든 파일을 병렬로 업로드
    const uploadPromises = filesArray.map((file) =>
      uploadSingleFile(file)
    );

    await Promise.all(uploadPromises);
  } catch (error) {
    console.error('[FileUploadTrigger] Upload error:', error);
  } finally {
    isUploading = false;
    // 파일 입력 초기화 (재선택 가능하도록)
    if (input) {
      input.value = '';
    }
  }
}
```

#### 3. 단일 파일 업로드

```typescript
async function uploadSingleFile(file: File) {
  // 1. 파일 상태 추가 (fileUploadState에 등록)
  const fileId = addFile(id, file);

  try {
    // 2. Firebase Storage에 업로드 (진행률 추적)
    const result = await uploadFileWithProgress(
      login.uid!,
      file,
      category as UploadCategory,
      (progress) => {
        // 진행률 업데이트 (0~100)
        updateFileProgress(id, fileId, progress);
      }
    );

    // 3. 업로드 결과 처리
    if (result.success && result.url) {
      // 성공: URL 저장
      completeFileUpload(id, fileId, result.url);
    } else {
      // 실패: 에러 메시지 저장
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
```

#### 4. UI 구조

```html
<div class="file-upload-trigger">
  <!-- 숨겨진 파일 입력 -->
  <input
    type="file"
    bind:this={fileInput}
    onchange={handleFileChange}
    accept={ACCEPT_STRING}
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
```

#### 5. 주요 기능

- **파일 검증**: 크기, 타입 제한 확인 (`fileValidation.ts`)
- **로그인 확인**: 인증되지 않은 사용자는 업로드 불가
- **다중 파일 업로드**: `Promise.all()`로 병렬 처리
- **진행률 추적**: 각 파일의 업로드 진행률을 실시간으로 `fileUploadState`에 업데이트
- **에러 처리**: 업로드 실패 시 사용자에게 명확한 에러 메시지 표시
- **UI 피드백**: 업로드 중 버튼 비활성화 및 인디케이터 표시

## FileUploadList 웹 컴포넌트

**파일 위치**: `src/lib/components/FileUploadList.wc.svelte`

업로드된 파일 목록을 표시하고 관리하는 컴포넌트입니다.

### Props

```typescript
interface Props {
  id: string;                      // 업로더 고유 ID (필수, FileUploadTrigger와 동일하게 설정)
  'initial-urls'?: string;         // 초기 URL 목록 JSON 문자열 (편집 모드용)
}
```

**🔥 중요**: `initial-urls`는 kebab-case HTML 속성이므로, `$props()`에서 명시적으로 매핑해야 합니다:

```typescript
let {
  id = '',
  'initial-urls': initialUrls = '',  // ✅ kebab-case → camelCase 매핑
}: {
  id?: string;
  'initial-urls'?: string;
} = $props();
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

**Svelte 컴포넌트에서 사용**:
```html
<file-upload-list
  id="post-edit-{postId}"
  initial-urls={JSON.stringify(post.urls || [])}
></file-upload-list>
```

### 동작 방식

1. **onMount 시**:
   - `initial-urls`가 있으면 JSON 파싱하여 `initializeWithUrls()` 호출
   - `fileUploadState` 구독하여 상태 변경 감지
   - 외부에서 접근 가능한 `getUrls()` 메서드를 DOM 요소에 등록

2. **상태 변경 시**:
   - 자동으로 UI 업데이트 (진행률, 완료, 에러)
   - 파일 목록을 그리드로 표시 (5열 레이아웃)

3. **삭제 버튼 클릭 시**:
   - 사용자에게 확인 다이얼로그 표시
   - Firebase Storage에서 파일 삭제 (`deleteFileByUrl`)
   - `fileUploadState`에서 파일 제거

### 외부에서 URL 목록 가져오기

폼 제출 시 업로드된 파일의 URL 배열을 가져올 수 있습니다:

**방법 1: fileUploadState 직접 사용 (권장)**
```typescript
import { getUploadedUrls } from '../lib/services/fileUploadState';

// ✅ 모든 경우에 작동 (Portal 사용 시에도 안전)
const urls = getUploadedUrls('post-create');

console.log('업로드된 파일 URLs:', urls);
// 출력: ['https://...', 'https://...']
```

**방법 2: DOM querySelector 사용 (비권장 - Portal 사용 시 실패 가능)**
```typescript
// ❌ Portal을 사용하는 모달에서는 이 방식이 실패할 수 있음
const fileUploadList = document.querySelector('file-upload-list[id="post-create"]');
// @ts-ignore
const urls = fileUploadList?.getUrls ? fileUploadList.getUrls() : [];
```

**권장**: 항상 `getUploadedUrls()` 함수를 사용하는 것이 안전합니다.

### UI 표시 항목

- **상태별 UI**:
  - ⏳ **업로드 중**: 진행률 오버레이 표시 (0~100%)
  - ✅ **완료**: 초록색 테두리, 삭제 버튼 표시
  - ❌ **에러**: 빨간색 테두리, 에러 아이콘, 삭제 버튼 표시

- **파일 타입별 미리보기**:
  - 📷 **이미지 파일**: 썸네일 이미지 표시
  - 🎥 **동영상 파일**: 비디오 플레이어 표시
  - 📄 **문서 파일**: 확장자 표시 (PDF, ZIP 등)

- **레이아웃**:
  - 그리드 레이아웃 (데스크톱 5열, 태블릿/모바일 4열)
  - 정사각형 비율 유지 (aspect-ratio: 1)
  - 삭제 버튼은 왼쪽 상단에 배치

### 상세 구현 로직

#### 1. Props 처리 및 초기화

```typescript
let {
  id = '',
  'initial-urls': initialUrls = '',  // ✅ kebab-case 매핑
}: {
  id?: string;
  'initial-urls'?: string;
} = $props();

// 파일 목록 (반응형 상태)
let files: UploadingFile[] = $state([]);

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
        console.log(`[FileUploadList] Initializing with ${urls.length} URLs for id: ${id}`);
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

  // 외부에서 접근 가능한 메서드 등록
  if (typeof window !== 'undefined') {
    const element = document.querySelector(`file-upload-list[id="${id}"]`);
    if (element) {
      // @ts-ignore
      element.getUrls = () => getUploadedUrls(id);
    }
  }
});
```

**개선 사항**: 이전에는 DOM querySelector로 속성을 읽는 복잡한 로직이 있었지만, 이제 `$props()`의 kebab-case 매핑으로 간단하게 처리합니다.

#### 2. 파일 삭제 처리

```typescript
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
```

#### 3. 파일 타입별 미리보기 렌더링

```html
<div class="file-preview">
  {#if isImageFile(file)}
    <!-- 이미지 파일 -->
    <img src={getPreviewUrl(file)} alt={getFileName(file)} class="preview-image" />
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
  {#if file.status === 'uploading'}
    <div class="progress-overlay">
      <div class="progress-circle">{file.progress}%</div>
    </div>
  {/if}

  <!-- 에러 오버레이 -->
  {#if file.status === 'error'}
    <div class="error-overlay">
      <AlertCircle size={32} class="error-icon" />
      <div class="error-text">{$t('업로드실패')}</div>
    </div>
  {/if}

  <!-- 삭제 버튼 (왼쪽 상단) -->
  {#if file.status === 'completed' || file.status === 'error'}
    <button
      type="button"
      class="delete-button"
      onclick={() => handleDeleteFile(file.id, file.url)}
      disabled={deletingFileIds.has(file.id)}
      aria-label={$t('파일삭제')}
    >
      <X size={16} />
    </button>
  {/if}
</div>
```

#### 4. 헬퍼 함수들

```typescript
// 파일 이름 추출 (URL 또는 File 객체에서)
function getFileName(file: UploadingFile): string {
  if (file.file && file.file.name) {
    return file.file.name;
  }
  if (file.url) {
    // URL에서 파일명 추출 및 디코딩
    try {
      const urlObj = new URL(file.url);
      const pathname = urlObj.pathname;
      const parts = pathname.split('/');
      const fileName = parts[parts.length - 1];
      return decodeURIComponent(fileName);
    } catch {
      return '파일';
    }
  }
  return '파일';
}

// 이미지 파일 여부 확인
function isImageFile(file: UploadingFile): boolean {
  if (file.file && file.file.type.startsWith('image/')) {
    return true;
  }
  if (file.url) {
    // URL 확장자로 판단
    const lowerUrl = file.url.toLowerCase();
    return lowerUrl.includes('.jpg') || lowerUrl.includes('.jpeg') ||
           lowerUrl.includes('.png') || lowerUrl.includes('.gif') ||
           lowerUrl.includes('.webp') || lowerUrl.includes('.bmp') ||
           lowerUrl.includes('.svg');
  }
  return false;
}

// 동영상 파일 여부 확인
function isVideoFile(file: UploadingFile): boolean {
  if (file.file && file.file.type.startsWith('video/')) {
    return true;
  }
  if (file.url) {
    const lowerUrl = file.url.toLowerCase();
    return lowerUrl.includes('.mp4') || lowerUrl.includes('.webm') ||
           lowerUrl.includes('.mov') || lowerUrl.includes('.avi') ||
           lowerUrl.includes('.mkv');
  }
  return false;
}

// 파일 확장자 추출
function getFileExtension(file: UploadingFile): string {
  const fileName = getFileName(file);
  const parts = fileName.split('.');
  if (parts.length > 1) {
    return parts[parts.length - 1].toUpperCase();
  }
  return 'FILE';
}
```

#### 5. 주요 기능

- **초기 URL 로드**: 편집 모드에서 기존 파일 목록 표시
- **실시간 동기화**: `fileUploadState` 구독으로 상태 변경 자동 반영
- **파일 타입별 UI**: 이미지, 동영상, 문서 파일을 각각 다르게 표시
- **진행률 표시**: 업로드 중인 파일의 진행률을 오버레이로 표시
- **에러 처리**: 업로드 실패 시 에러 오버레이 표시
- **파일 삭제**: Firebase Storage와 상태 관리 동기화
- **반응형 레이아웃**: 데스크톱(5열), 태블릿/모바일(4열)

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

**⚠️ 중요**: Portal 패턴을 사용하는 모달에서는 DOM querySelector가 실패할 수 있습니다. `fileUploadState`에서 직접 URL을 가져오는 방식을 사용하세요.

```typescript
import { getUploadedUrls, destroyUploader } from '../lib/services/fileUploadState';

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

  // 3. 업로드된 파일 URL 목록 가져오기 (fileUploadState에서 직접 가져오기)
  // Portal 사용으로 인해 DOM querySelector가 실패할 수 있으므로, 상태에서 직접 가져옵니다.
  const urls = getUploadedUrls('post-create');

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
    // 파일 업로드 상태 정리
    destroyUploader('post-create');

    alert('게시글이 등록되었습니다');
    isNewPostDialogOpen = false;
    // 폼 초기화
    postTitle = '';
    postContent = '';
  } else {
    alert('게시글 등록에 실패했습니다: ' + result.error);
  }
}

/**
 * 모달 취소 핸들러
 */
function handleCancel() {
  // 파일 업로드 상태 정리
  destroyUploader('post-create');

  isNewPostDialogOpen = false;
  postTitle = '';
  postContent = '';
}
```

**DOM querySelector 방식 (비권장 - Portal 사용 시 실패 가능)**:
```typescript
// ❌ Portal을 사용하는 모달에서는 이 방식이 실패할 수 있습니다
const fileUploadList = document.querySelector('file-upload-list[id="post-create"]');
// @ts-ignore
const urls = fileUploadList?.getUrls ? fileUploadList.getUrls() : [];
```

**fileUploadState 직접 사용 방식 (권장)**:
```typescript
// ✅ 모든 경우에 작동합니다
import { getUploadedUrls } from '../lib/services/fileUploadState';
const urls = getUploadedUrls('post-create');
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
import { getUploadedUrls, destroyUploader } from '../lib/services/fileUploadState';

async function handleEditSubmit(event: Event) {
  event.preventDefault();

  // URL 가져오기 (fileUploadState에서 직접 가져오기)
  const urls = getUploadedUrls(`post-edit-${editingPost.postId}`);

  // 게시글 업데이트
  const result = await updatePost(
    editingPost.postId,
    {
      title: editTitle,
      content: editContent,
      urls: urls.length > 0 ? urls : undefined
    }
  );

  // 결과 처리
  if (result.success) {
    // 파일 업로드 상태 정리
    destroyUploader(`post-edit-${editingPost.postId}`);

    alert('게시글이 수정되었습니다');
    isEditDialogOpen = false;
  } else {
    alert('게시글 수정에 실패했습니다: ' + result.error);
  }
}

/**
 * 편집 취소 핸들러
 */
function handleEditCancel() {
  // 파일 업로드 상태 정리
  destroyUploader(`post-edit-${editingPost.postId}`);

  isEditDialogOpen = false;
  editTitle = '';
  editContent = '';
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
import { getUploadedUrls, destroyUploader } from '../lib/services/fileUploadState';

async function handleReplySubmit() {
  // 1. 내용 검증
  if (!replyContent.trim()) {
    alert('답글 내용을 입력해주세요');
    return;
  }

  // 2. 사용자 정보 확인
  const userId = $login.uid;

  // 3. 업로드된 파일 URL 목록 가져오기 (fileUploadState에서 직접 가져오기)
  const urls = getUploadedUrls(`comment-reply-${comment.commentId}`);

  // 4. Firebase에 답글 저장 (Flat Style 구조)
  const result = await createChildComment({
    parentCommentId: comment.commentId,
    userId: userId,
    content: replyContent,
    urls: urls.length > 0 ? urls : undefined
  });

  // 5. 결과 처리
  if (result.success) {
    // 파일 업로드 상태 정리
    destroyUploader(`comment-reply-${comment.commentId}`);

    alert('답글이 등록되었습니다');
    isReplyDialogOpen = false;
    replyContent = '';
  } else {
    alert('답글 등록에 실패했습니다: ' + result.error);
  }
}

/**
 * 답글 취소 핸들러
 */
function handleReplyCancel() {
  // 파일 업로드 상태 정리
  destroyUploader(`comment-reply-${comment.commentId}`);

  isReplyDialogOpen = false;
  replyContent = '';
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
import { getUploadedUrls, destroyUploader } from '../lib/services/fileUploadState';

async function handleEditSubmit() {
  // 1. 내용 검증
  if (!editContent.trim()) {
    alert('댓글 내용을 입력해주세요');
    return;
  }

  // 2. 업로드된 파일 URL 목록 가져오기 (fileUploadState에서 직접 가져오기)
  const urls = getUploadedUrls(`comment-edit-${comment.commentId}`);

  // 3. Firebase에 댓글 업데이트
  const result = await updateComment(comment.commentId, {
    content: editContent,
    urls: urls.length > 0 ? urls : undefined
  });

  // 4. 결과 처리
  if (result.success) {
    // 파일 업로드 상태 정리
    destroyUploader(`comment-edit-${comment.commentId}`);

    alert('댓글이 수정되었습니다');
    isEditDialogOpen = false;
    editContent = '';
  } else {
    alert('댓글 수정에 실패했습니다: ' + result.error);
  }
}

/**
 * 댓글 수정 취소 핸들러
 */
function handleEditCancel() {
  // 파일 업로드 상태 정리
  destroyUploader(`comment-edit-${comment.commentId}`);

  isEditDialogOpen = false;
  editContent = '';
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

### 2. Portal 사용 시 URL을 가져올 수 없음 (중요!)

**원인**: Portal 패턴(`use:portal`)으로 모달을 `document.body`로 이동시키면, `document.querySelector()`가 Web Component를 찾지 못함

**증상**:
```typescript
const fileUploadList = document.querySelector('file-upload-list[id="post-create"]');
console.log(fileUploadList); // null ← 문제!
```

**해결책**: DOM 쿼리 대신 `fileUploadState`에서 직접 URL을 가져오기

```typescript
// ❌ 잘못된 방법 (Portal 사용 시 실패)
const fileUploadList = document.querySelector('file-upload-list[id="post-create"]');
// @ts-ignore
const urls = fileUploadList?.getUrls ? fileUploadList.getUrls() : [];

// ✅ 올바른 방법 (모든 경우에 작동)
import { getUploadedUrls, destroyUploader } from '../lib/services/fileUploadState';

// URL 가져오기
const urls = getUploadedUrls('post-create');

// 제출 성공 후 상태 정리
if (result.success) {
  destroyUploader('post-create');
}

// 취소 시에도 상태 정리
function handleCancel() {
  destroyUploader('post-create');
  isDialogOpen = false;
}
```

**적용 대상**:
- PostListPage.svelte (새 게시글 작성)
- PostItem.svelte (댓글 작성, 게시글 수정)
- CommentItem.svelte (답글 작성, 댓글 수정)

### 3. Svelte 5 $destroy() 에러

**원인**: Svelte 5에서 Web Component가 DOM에서 제거될 때 `$destroy()` 메서드 호출 시도

**에러 메시지**:
```
Uncaught (in promise) Svelte error: component_api_changed
Calling `$destroy()` on a component instance is no longer valid in Svelte 5
```

**해결책**: FileUploadList.wc.svelte에서 `onDestroy` 훅 제거

```typescript
// ❌ Svelte 5 Web Component에서는 사용 금지
import { onMount, onDestroy } from 'svelte';

onDestroy(() => {
  if (unsubscribe) {
    unsubscribe();
  }
});

// ✅ Svelte 5 Web Component에서는 onDestroy 제거
import { onMount } from 'svelte';

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
```

**적용 파일**:
- FileUploadList.wc.svelte

### 4. 두 컴포넌트가 상태를 공유하지 않음

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

### 5. 편집 모드에서 기존 파일이 표시되지 않음

**원인 1**: Svelte 5 Web Component에서 `initial-urls` 속성이 `initialUrls` prop으로 자동 매핑되지 않음

**해결**:
- `$props()`에서 kebab-case 속성을 명시적으로 매핑해야 합니다

```typescript
// ❌ 잘못된 방법 (작동하지 않음)
let {
  id = '',
  initialUrls = '',  // initial-urls 속성을 받지 못함
} = $props();

// ✅ 올바른 방법 (kebab-case 명시적 매핑)
let {
  id = '',
  'initial-urls': initialUrls = '',  // ✅
}: {
  id?: string;
  'initial-urls'?: string;
} = $props();
```

**원인 2**: `initial-urls` prop에 JSON 문자열이 올바르게 전달되지 않음

**해결**:
- `initial-urls` prop에 JSON 문자열로 전달
- 빈 배열도 처리되도록 `|| []` 사용

```html
<!-- ✅ 올바른 방법 -->
<file-upload-list
  id="post-edit"
  initial-urls={JSON.stringify(post.urls || [])}
></file-upload-list>

<!-- ❌ 잘못된 방법 (JSON 문자열이 아님) -->
<file-upload-list
  id="post-edit"
  initial-urls={post.urls}
></file-upload-list>
```

### 6. 메모리 누수 방지

**원인**: 모달을 닫을 때 파일 업로드 상태가 정리되지 않음

**해결**: 모달 닫기 및 취소 핸들러에서 `destroyUploader()` 호출

```typescript
import { destroyUploader } from '../lib/services/fileUploadState';

// 제출 성공 후 정리
async function handleSubmit() {
  const result = await createPost(...);

  if (result.success) {
    destroyUploader('post-create'); // ✅ 상태 정리
    isDialogOpen = false;
  }
}

// 취소 시 정리
function handleCancel() {
  destroyUploader('post-create'); // ✅ 상태 정리
  isDialogOpen = false;
}
```

## 정리

파일 업로드 웹 컴포넌트 시스템은 다음과 같은 장점을 제공합니다:

✅ **재사용성**: 게시글, 댓글, 프로필 등 다양한 곳에서 사용 가능
✅ **유연성**: 업로드 버튼과 파일 목록을 독립적으로 배치 가능
✅ **사용자 경험**: 실시간 진행률 표시, 파일 검증, 에러 처리
✅ **타입 안전성**: TypeScript 인터페이스로 타입 체크
✅ **Firebase 통합**: Storage 업로드 및 RTDB URL 저장 자동화
✅ **편집 지원**: 기존 파일 로드 및 수정 기능
✅ **Portal 호환**: Portal 패턴과 함께 사용 시에도 안정적으로 작동
✅ **Svelte 5 호환**: Svelte 5 Web Component 표준 준수

이 시스템을 활용하여 SNS 웹 애플리케이션의 다양한 기능에서 파일 업로드를 쉽게 구현할 수 있습니다.

## 중요한 구현 규칙 (필수)

### 1. URL 가져오기는 항상 fileUploadState 사용

❌ **잘못된 방법** (Portal 사용 시 실패):
```typescript
const element = document.querySelector('file-upload-list[id="post-create"]');
const urls = element?.getUrls?.() || [];
```

✅ **올바른 방법** (모든 경우에 작동):
```typescript
import { getUploadedUrls } from '../lib/services/fileUploadState';
const urls = getUploadedUrls('post-create');
```

### 2. 상태 정리는 항상 destroyUploader 사용

모달을 닫거나 제출이 완료되면 반드시 `destroyUploader()`를 호출하여 메모리 누수를 방지합니다:

```typescript
import { destroyUploader } from '../lib/services/fileUploadState';

// 제출 성공 후
if (result.success) {
  destroyUploader('post-create');
}

// 취소 시
function handleCancel() {
  destroyUploader('post-create');
}
```

### 3. Svelte 5 Web Component에서는 onDestroy 사용 금지

FileUploadList.wc.svelte 등 Web Component 파일에서는 `onDestroy` 훅을 사용하지 않습니다. Svelte가 자동으로 정리합니다.

---

**Last Updated**: 2025-01-06
**Version**: 1.2.0 (Svelte 5 kebab-case 속성 매핑 개선)

### 변경 이력

- **v1.2.0** (2025-01-06): Svelte 5 kebab-case 속성 매핑 개선
  - **신규 섹션 추가**: "Svelte 5 Web Component 속성 매핑" 설명
  - FileUploadList.wc.svelte Props에서 kebab-case 명시적 매핑 설명 (`'initial-urls': initialUrls`)
  - FileUploadTrigger.wc.svelte 상세 구현 로직 추가
  - FileUploadList.wc.svelte 상세 구현 로직 추가 (간소화된 onMount 로직 포함)
  - 문제 해결 섹션 업데이트 (kebab-case 매핑 이슈 추가)
  - 개선 사항: DOM querySelector 대신 `$props()`의 kebab-case 매핑 사용으로 코드 간소화

- **v1.1.0** (2025-11-06): Portal 호환성 개선 및 Svelte 5 업데이트
  - `getUploadedUrls()` 직접 호출 방식으로 변경 (Portal 호환)
  - `destroyUploader()` 메모리 누수 방지 추가
  - FileUploadList.wc.svelte에서 `onDestroy` 제거 (Svelte 5 호환)
  - 문제 해결 섹션 대폭 강화

- **v1.0.0**: 초기 파일 업로드 웹 컴포넌트 시스템 구현

