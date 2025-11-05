# 사용자 관리

SNS 웹 프로젝트에서 사용자 관리는 Firebase의 Authentication과 Realtime Database를 활용합니다. 사용자 프로필, 프로필 사진, 사용자 정보 조회 및 실시간 업데이트 기능을 제공합니다.

**관련 문서**:
- [Firebase Storage 파일 업로드 가이드](./sns-web-storage.md)
- [Svelte Custom Elements 개발 가이드](./sns-custom-elements.md)
- [i18n 다국어 지원 가이드](./sns-web-i18n.md)
- [친구 관계 관리 가이드](./sns-web-friends.md)
- [게시판 개발 가이드](./sns-web-post.md)

---

# 사용자 프로필 관리

SNS 웹 프로젝트에서 사용자의 프로필 정보는 다음과 같이 구성됩니다:

- **기본 프로필 정보**: displayName(닉네임), photoURL(프로필 사진), 성별, 생년월일, 자기소개
- **프로필 사진 저장소**: Firebase Storage에 프로필 사진을 저장
- **프로필 데이터 저장소**: Firebase Realtime Database에 프로필 정보 저장
- **실시간 업데이트**: 프로필 변경 시 즉시 다른 사용자에게 반영

## 주요 기술

- **Firebase Authentication**: 사용자 인증 관리
- **Firebase Realtime Database**: 프로필 데이터 실시간 저장소
- **Firebase Cloud Storage**: 프로필 사진 파일 저장소
- **Svelte 5 Runes**: 반응형 상태 관리

---

# 사용자 프로필 데이터 구조

## Firebase Realtime Database 스키마

사용자 프로필 데이터의 저장 구조는 다음과 같습니다:

```
users/
├─ user_001/
│  ├─ displayName: "TestUser001"
│  ├─ email: "user@example.com"
│  ├─ photoURL: "https://storage.googleapis.com/.../photo.jpg"
│  ├─ gender: "male"
│  ├─ dateOfBirth: "1990-01-15"
│  ├─ bio: "사용자 자기소개"
│  ├─ createdAt: 1699564800000
│  └─ score: 0
├─ user_002/
│  ├─ displayName: "TestUser002"
│  ├─ email: "user2@example.com"
│  ├─ photoURL: null
│  ├─ gender: "female"
│  ├─ dateOfBirth: "1995-06-20"
│  ├─ bio: "..."
│  ├─ createdAt: 1699564801000
│  └─ score: 0
```

## 사용자 프로필 데이터 정의

| 필드명 | 데이터형 | 필수 | 설명 |
|--------|------|------|------|
| `displayName` | String | ○ | 사용자 닉네임 |
| `email` | String | ○ | 사용자 이메일 주소 |
| `photoURL` | String | × | Firebase Storage에서 프로필 사진 다운로드 URL |
| `gender` | String | × | 성별 (male, female, other, none) |
| `dateOfBirth` | String | × | 생년월일 (YYYY-MM-DD 형식) |
| `bio` | String | × | 사용자 자기소개 |
| `createdAt` | Number | ○ | 계정 생성일 (Unix Timestamp) |
| `score` | Number | × | 사용자 평판 점수 시스템 |

---

# 프로필 사진 저장 및 업로드

## 저장소 디렉토리 구조

프로필 사진은 **사용자별로 격리된** 디렉토리에 저장됩니다:

```
users/
└─ {userId}/
   └─ profile/
      └─ {photo_filename}
```

**예시**:
```
users/user_001/profile/1699564800000-avatar.jpg
users/user_001/profile/photo.jpg
```

## 프로필 사진 업로드 구현

프로필 사진 업로드 후, 다운로드 URL을 `/users/<uid>/photoURL`에 저장합니다.

```javascript
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as dbRef, update } from 'firebase/database';
import { storage, database, auth } from '$lib/utils/firebase.js';

async function uploadProfilePhoto(file) {
  const userId = auth.currentUser.uid;

  try {
    // 1. 파일명 생성 (타임스탬프 + 원본 파일명)
    const fileName = `${Date.now()}-${file.name}`;

    // 2. Firebase Storage에 파일 업로드
    const photoStorageRef = storageRef(storage, `users/${userId}/profile/${fileName}`);
    const snapshot = await uploadBytes(photoStorageRef, file);

    // 3. 다운로드 URL 생성
    const downloadURL = await getDownloadURL(snapshot.ref);

    // 4. Realtime Database의 /users/{userId}/photoURL에 저장
    const userRef = dbRef(database, `users/${userId}`);
    await update(userRef, {
      photoURL: downloadURL
    });

    console.log('프로필 사진 업로드 완료:', downloadURL);
    return downloadURL;

  } catch (error) {
    console.error('프로필 사진 업로드 실패:', error);
    throw error;
  }
}
```

## Svelte 컴포넌트 구현

`UserProfile.svelte` 컴포넌트 구현 예시:

```svelte
<script>
  import { uploadBytes, getDownloadURL, ref as storageRef } from 'firebase/storage';
  import { update, ref as dbRef } from 'firebase/database';
  import { storage, database } from '$lib/utils/firebase.js';
  import { user } from '../stores/auth.js';

  let file = $state(null);
  let preview = $state(null);
  let isSaving = $state(false);
  let successMessage = $state('');
  let errorMessage = $state('');

  // 파일 선택 이벤트 핸들러
  function handleFileSelect(event) {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    // 파일 크기 검증
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB
    const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

    if (selectedFile.size > MAX_SIZE) {
      errorMessage = '파일 크기는 5MB 이하여야 합니다';
      return;
    }

    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      errorMessage = '지원하는 파일 형식: JPEG, PNG, WebP';
      return;
    }

    file = selectedFile;

    // 미리보기 생성
    const reader = new FileReader();
    reader.onload = (e) => {
      preview = e.target?.result;
    };
    reader.readAsDataURL(file);
    errorMessage = '';
  }

  // 폼 제출 핸들러
  async function handleSubmit(event) {
    event.preventDefault();
    isSaving = true;

    try {
      const updateData = {
        displayName: formData.displayName,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth
      };

      // 새 프로필 사진이 있는 경우 업로드
      if (file) {
        const fileName = `${Date.now()}-${file.name}`;
        const photoStorageRef = storageRef(storage, `users/${$user.uid}/profile/${fileName}`);

        // Firebase Storage에 업로드
        const snapshot = await uploadBytes(photoStorageRef, file);

        // 다운로드 URL 생성
        const downloadURL = await getDownloadURL(snapshot.ref);
        updateData.photoURL = downloadURL;
      }

      // Realtime Database에 사용자 정보 저장
      const userRef = dbRef(database, `users/${$user.uid}`);
      await update(userRef, updateData);

      // 성공 메시지 표시
      successMessage = '프로필이 업데이트되었습니다';
      setTimeout(() => {
        successMessage = '';
      }, 3000);

      // 상태 초기화
      file = null;
      preview = null;

    } catch (error) {
      console.error('저장 실패:', error);
      errorMessage = '프로필 업데이트에 실패했습니다: ' + error.message;
    } finally {
      isSaving = false;
    }
  }
</script>

<!-- 파일 입력 -->
<div class="form-group">
  <label for="photo">프로필 사진</label>
  {#if preview}
    <img src={preview} alt="프로필 미리보기" class="preview-image" />
  {/if}
  <input
    type="file"
    id="photo"
    accept="image/jpeg,image/png,image/webp"
    onchange={handleFileSelect}
  />
</div>

<!-- 제출 버튼 -->
<button type="submit" disabled={isSaving} onclick={handleSubmit}>
  {isSaving ? '저장 중...' : '저장'}
</button>
```

---

# 사용자 프로필 데이터 조회

## 현재 사용자 프로필 조회

```javascript
import { ref as dbRef, get } from 'firebase/database';
import { database, auth } from '$lib/utils/firebase.js';

async function getCurrentUserProfile() {
  try {
    const userId = auth.currentUser?.uid;
    if (!userId) throw new Error('로그인 필요');

    const userRef = dbRef(database, `users/${userId}`);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.warn('사용자 프로필을 찾을 수 없습니다');
      return null;
    }
  } catch (error) {
    console.error('프로필 조회 실패:', error);
    throw error;
  }
}
```

## 다른 사용자 프로필 조회

```javascript
async function getUserProfile(userId) {
  try {
    const userRef = dbRef(database, `users/${userId}`);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.warn(`사용자 ${userId}의 프로필을 찾을 수 없습니다`);
      return null;
    }
  } catch (error) {
    console.error('프로필 조회 실패:', error);
    throw error;
  }
}
```

## 사용자 프로필 실시간 감시

Svelte 스토어를 활용하여 사용자 프로필을 실시간으로 감시할 수 있습니다:

```javascript
// src/lib/stores/user.js
import { writable } from 'svelte/store';
import { onValue, ref as dbRef } from 'firebase/database';
import { database } from '$lib/utils/firebase.js';

function createUserStore(userId) {
  const { subscribe, set } = writable(null);

  if (userId) {
    // 실시간 감시 시작
    const userRef = dbRef(database, `users/${userId}`);
    const unsubscribe = onValue(
      userRef,
      (snapshot) => {
        if (snapshot.exists()) {
          set(snapshot.val());
        } else {
          set(null);
        }
      },
      (error) => {
        console.error('프로필 감시 실패:', error);
      }
    );

    // 구독 해제
    return () => unsubscribe();
  }

  return subscribe;
}

export const userProfile = {
  subscribe: (callback) => {
    // 사용자 ID를 전달받아 감시 시작
  }
};
```

---

# 사용자 데이터 검증

## 데이터 유효성 검증

```javascript
function validateUserProfile(data) {
  const errors = [];

  // displayName 검증
  if (!data.displayName || data.displayName.trim().length === 0) {
    errors.push('닉네임은 필수입니다');
  }
  if (data.displayName.length > 50) {
    errors.push('닉네임은 50자 이하여야 합니다');
  }

  // gender 검증
  const validGenders = ['male', 'female', 'other', 'none'];
  if (data.gender && !validGenders.includes(data.gender)) {
    errors.push('성별은 올바른 값이어야 합니다');
  }

  // dateOfBirth 검증 (YYYY-MM-DD 형식)
  if (data.dateOfBirth) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(data.dateOfBirth)) {
      errors.push('생년월일은 YYYY-MM-DD 형식이어야 합니다');
    }
    // 미래 날짜 검증
    const birthDate = new Date(data.dateOfBirth);
    if (birthDate > new Date()) {
      errors.push('생년월일은 과거여야 합니다');
    }
  }

  // bio 검증
  if (data.bio && data.bio.length > 500) {
    errors.push('자기소개는 500자 이하여야 합니다');
  }

  return errors;
}
```

---

# 보안 규칙

## Firebase Realtime Database 보안 규칙

사용자의 프로필 데이터는 다음과 같이 보호됩니다:

```json
{
  "rules": {
    "users": {
      "$uid": {
        // 모든 사용자가 읽기 가능
        ".read": true,
        // 본인만 쓰기 가능
        ".write": "auth.uid == $uid",
        // 필수 필드 검증
        ".validate": "newData.hasChildren(['displayName', 'email'])"
      }
    }
  }
}
```

## Firebase Storage 보안 규칙

프로필 사진 저장소의 보안 규칙:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // /users/{userId}/profile 경로의 파일
    match /users/{userId}/profile/{fileName=**} {
      allow read: if true;  // 모든 사용자가 읽기 가능
      allow write: if request.auth.uid == userId;  // 본인만 쓰기 가능
      allow delete: if request.auth.uid == userId;  // 본인만 삭제 가능
    }
  }
}
```

---

# 프로필 사진 URL 저장 패턴

## URL 저장 구조

```
/users/{userId}/photoURL = "https://storage.googleapis.com/.../photo.jpg"
```

## 주의사항

1. **URL은 주기적으로 갱신**: 다운로드 URL은 유효기간이 있으므로 새로운 사진 업로드 시마다 갱신
2. **URL 검증**: URL이 유효한지 확인하고 404 에러 처리
3. **여러 사진 관리**: 향후 여러 프로필 사진을 지원하려면 `/users/{userId}/photos/{photoId}` 구조 고려
4. **이전 사진 정리**: 새 사진 업로드 후 이전 사진은 Storage에서 삭제

---

# 실제 구현 예시

## 프로필 업데이트 플로우

```javascript
async function updateUserProfile(userData) {
  try {
    // 데이터 검증
    const validationErrors = validateUserProfile(userData);
    if (validationErrors.length > 0) {
      throw new Error(validationErrors[0]);
    }

    // 프로필 업데이트
    const userRef = dbRef(database, `users/${auth.currentUser.uid}`);
    await update(userRef, userData);

    return { success: true };

  } catch (error) {
    if (error.code === 'PERMISSION_DENIED') {
      console.error('권한 오류: 다른 사용자의 프로필을 수정할 수 없습니다');
      return { success: false, error: '권한 없음' };
    } else if (error.code === 'NETWORK_ERROR') {
      console.error('네트워크 오류가 발생했습니다');
      return { success: false, error: '네트워크 오류' };
    } else {
      console.error('저장 실패:', error);
      return { success: false, error: error.message };
    }
  }
}
```

---

# 사용자 속성 분리 (user-props)

## 개요

사용자 노드 `/users/<uid>/` 에 있는 각 개별 속성은 `user-props` 노드에 별도로 저장됩니다.
이는 **특정 속성에 대한 대량 조회를 효율적으로 수행**하기 위한 데이터베이스 최적화 전략입니다.

### 필요성

- **효율성**: 회원 목록을 조회할 때 `/users/` 에서 모든 사용자와 그들의 전체 정보를 가져오는 것은 비효율적입니다
- **대량 쿼리**: `/user-props/displayName` 경로에서만 모든 사용자의 이름을 빠르게 조회할 수 있습니다
- **네트워크 최적화**: 필요한 필드만 선택적으로 조회하여 데이터 전송량 최소화

### 예시

- **경우 1**: 회원 목록 페이지에서 모든 사용자의 이름만 필요
  - ❌ 비효율: `/users/` 조회 → 각 사용자의 모든 정보(이메일, 성별, 생년월일 등) 전송
  - ✅ 효율: `/user-props/displayName` 조회 → 필요한 이름만 전송

- **경우 2**: 최신 가입 회원 확인
  - ❌ 비효율: `/users/` 에서 모든 사용자 정보 가져온 후 `createdAt`로 정렬
  - ✅ 효율: `/user-props/createdAt` 에서 `orderByValue()` 로 직접 정렬 조회

## 데이터 구조

```
/user-props/
  /displayName/
    ├── <uid1>: "사용자1"
    ├── <uid2>: "사용자2"
    └── <uid3>: "사용자3"
  /photoUrl/
    ├── <uid1>: "https://firebasestorage.googleapis.com/..."
    ├── <uid2>: "https://firebasestorage.googleapis.com/..."
    └── <uid3>: null
  /createdAt/
    ├── <uid1>: 1698473000000
    ├── <uid2>: 1698473100000
    └── <uid3>: 1698473200000
  /updatedAt/
    ├── <uid1>: 1698474000000
    ├── <uid2>: 1698474100000
    └── <uid3>: 1698474200000
  /gender/
    ├── <uid1>: "M"
    ├── <uid2>: "F"
    └── <uid3>: "M"
  /birthYear/
    ├── <uid1>: 1990
    ├── <uid2>: 1985
    └── <uid3>: 2000
```

## 분리 가능한 속성

다음 속성들은 `/user-props/` 에서 분리하여 관리할 수 있습니다:

- `displayName`: 사용자 이름
- `photoUrl`: 프로필 사진 URL
- `createdAt`: 계정 생성일
- `updatedAt`: 프로필 수정일
- `gender`: 성별
- `birthYear`: 생년
- `birthMonth`: 생월
- `birthDay`: 생일
- `bio`: 자기소개

## 분리하면 안 되는 속성

다음 속성들은 민감한 정보이므로 분리하지 않습니다:

- `email`: 이메일 주소 (민감 정보)
- `password`: 비밀번호 (절대 저장 금지)
- 기타 개인정보

## 자동 동기화 (Cloud Functions)

사용자 프로필이 업데이트될 때마다 `user-props`도 자동으로 동기화됩니다.
이는 `onUserProfileUpdate` Cloud Function을 통해 수행됩니다.

```typescript
// firebase/functions/src/index.ts
import * as functions from 'firebase-functions/v2';
import * as admin from 'firebase-admin';

/**
 * 사용자 프로필 업데이트 시 user-props 자동 동기화
 */
export const onUserProfileUpdate = functions.database.onValueUpdated(
  '/users/{uid}',
  async (event) => {
    const uid = event.params.uid as string;
    const userData = event.data.after.val();

    const propsUpdate: any = {};

    // 각 속성을 user-props로 복사
    if (userData.displayName !== undefined) {
      propsUpdate[`user-props/displayName/${uid}`] = userData.displayName;
    }
    if (userData.photoUrl !== undefined) {
      propsUpdate[`user-props/photoUrl/${uid}`] = userData.photoUrl;
    }
    if (userData.createdAt !== undefined) {
      propsUpdate[`user-props/createdAt/${uid}`] = userData.createdAt;
    }
    if (userData.updatedAt !== undefined) {
      propsUpdate[`user-props/updatedAt/${uid}`] = userData.updatedAt;
    }
    if (userData.gender !== undefined) {
      propsUpdate[`user-props/gender/${uid}`] = userData.gender;
    }
    if (userData.birthYear !== undefined) {
      propsUpdate[`user-props/birthYear/${uid}`] = userData.birthYear;
    }

    // 한 번의 업데이트로 모든 props 동기화
    await admin.database().ref().update(propsUpdate);
  }
);
```

## API 함수 예시

### 모든 사용자 이름 조회

```javascript
import { ref, query, get, orderByKey } from 'firebase/database';
import { database } from '$lib/utils/firebase.js';

/**
 * 모든 사용자의 displayName 조회
 */
async function getAllUserNames() {
  try {
    const namesRef = ref(database, 'user-props/displayName');
    const q = query(namesRef, orderByKey());
    const snapshot = await get(q);

    const users = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        users.push({
          uid: childSnapshot.key,
          displayName: childSnapshot.val()
        });
      });
    }

    return users;
  } catch (error) {
    console.error('사용자 이름 조회 실패:', error);
    return [];
  }
}
```

### 최신 가입 회원 조회

```javascript
import { ref, query, orderByValue, limitToLast, get } from 'firebase/database';

/**
 * 최신 10명의 가입 회원 조회
 */
async function getRecentUsers(limit = 10) {
  try {
    const createdAtRef = ref(database, 'user-props/createdAt');
    const q = query(
      createdAtRef,
      orderByValue(),
      limitToLast(limit)
    );
    const snapshot = await get(q);

    const users = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        users.unshift({
          uid: childSnapshot.key,
          createdAt: childSnapshot.val()
        });
      });
    }

    return users;
  } catch (error) {
    console.error('최신 회원 조회 실패:', error);
    return [];
  }
}
```

---

# 핵심 요약

1. **프로필 사진은 `/users/{userId}/profile/` 디렉토리에 저장**: 사용자별로 격리되어 보안 강화
2. **photoUrl은 `/users/{userId}/photoUrl`에 저장**: 다운로드 URL을 Realtime Database에 저장하여 쉽게 접근
3. **프로필 보안은 보안 규칙으로 관리**: Firebase 보안 규칙을 통해 본인 프로필만 수정 가능
4. **프로필 데이터는 실시간으로 동기화**: 다른 사용자의 프로필 변경이 즉시 반영됨
5. **displayName은 필수 필드**: 사용자 식별을 위해 반드시 필요
6. **user-props로 대량 쿼리 최적화**: 특정 속성만 필요할 때 `/user-props/` 경로 사용하여 효율성 향상
7. **Cloud Functions로 자동 동기화**: 프로필 업데이트 시 user-props도 자동으로 동기화되어 데이터 일관성 보장
