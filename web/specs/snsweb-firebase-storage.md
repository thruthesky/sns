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

