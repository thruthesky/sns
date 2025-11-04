# 파이어베이스 클라우드 함수 (Firebase Cloud Functions) 개발 가이드

파이어베이스 클라우드 함수 개발을 할 때 꼭 지켜야하는 지침들을 모아놓은 문서입니다.

---

## 📋 목차

- [1. 개요](#1-개요)
- [2. 개발 환경 설정](#2-개발-환경-설정)
- [3. 코드 작성 지침](#3-코드-작성-지침)
- [4. 프로젝트 구조](#4-프로젝트-구조)
- [5. index.ts 파일 상세 가이드](#5-indexts-파일-상세-가이드)
  - [5.1 파일 개요](#51-파일-개요)
  - [5.2 Configuration 관리 (getConfig)](#52-configuration-관리-getconfig)
  - [5.3 Global Options 설정](#53-global-options-설정)
  - [5.4 Firebase Admin 초기화](#54-firebase-admin-초기화)
  - [5.5 핵심 함수: onChatMessageCreated](#55-핵심-함수-onchatmessagecreated)
- [6. 설계 철학](#6-설계-철학)
- [7. 주의사항](#7-주의사항)
- [8. 관련 문서](#8-관련-문서)

---

## 1. 개요

파이어베이스 클라우드 함수는 서버리스 환경에서 백엔드 코드를 실행할 수 있는 기능을 제공합니다. SNS 프로젝트에서는 게시글, 댓글, 좋아요 등의 이벤트 발생 시 자동으로 실행되는 백그라운드 함수를 구현하여 다음과 같은 작업을 자동화합니다:

- **사용자 프로필 동기화**: `/users/{uid}` 변경 시 `/user-props/` 자동 업데이트
- **좋아요/댓글 개수 동기화**: `/post-props/likes/` 변경 시 `/posts/{category}/{postId}/likeCount` 업데이트
- **게시글 삭제 시 연관 데이터 정리**: 게시글 삭제 시 좋아요, 댓글 등 연관 데이터 자동 삭제
- **알림 트리거 및 전송**: 좋아요, 댓글, 친구 요청 등의 이벤트 발생 시 알림 전송

**참고**: 이 문서에서 사용하는 모든 경로는 Firebase Realtime Database의 최상위 경로(`/`)에서 시작합니다. 예: `/users/{uid}`, `/posts/{category}/{postId}`

이 문서에서는 파이어베이스 클라우드 함수를 개발할 때 따라야 할 지침들을 안내합니다.

---

## 2. 개발 환경 설정

### 설치 현황

- ✅ **Firebase CLI 및 Firebase Cloud Functions SDK**: 이미 설치 완료
- ✅ **Node.js 및 필요한 모든 npm 패키지**: 설치 완료

### 디렉토리 구조

- **Firebase 프로젝트 루트**: `./firebase/` 폴더
  - Firebase 관련 설정, 파일, 코드 등이 위치
- **Cloud Functions 코드**: `./firebase/functions/` 폴더
  - 클라우드 함수 소스 코드 위치
  - `package.json` 파일 존재
- **진입점 파일**: `./firebase/functions/src/index.ts`
  - 모든 Cloud Functions의 시작점

### 참고 문서

- **Firebase 공식 문서**: [Get Started with Cloud Functions](https://firebase.google.com/docs/functions/get-started)
- **TypeScript 가이드**: [Cloud Functions with TypeScript](https://firebase.google.com/docs/functions/typescript)

---

## 3. 코드 작성 지침

### 필수 규칙

1. **Firebase Cloud Functions Gen 2 버전 사용**:
   - ⚠️ **모든 Cloud Functions는 반드시 Gen 2 버전으로 작성**
   - Gen 1 API (`functions.https.onRequest`, `functions.database.ref()`) 사용 금지
   - Gen 2 API 사용: `onRequest`, `onValueCreated`, `onValueUpdated` 등
   - 참고: [Firebase Functions Gen 2 문서](https://firebase.google.com/docs/functions/2nd-gen)

2. **SNS 데이터 구조 준수**:
   - Firebase Realtime Database 최상위 경로 사용
   - 게시글: `/posts/{category}/{postId}`
   - 사용자: `/users/{uid}`
   - 게시글 속성: `/post-props/likes/{postId}/{uid}`, `/post-props/comments/{postId}/{commentId}`
   - 채팅: `/chat/messages/{roomId}/{messageId}`
   - 채팅 참여: `/chat/joins/{uid}/{roomId}`

3. **비동기 처리**:
   - 모든 비동기 작업은 `async/await` 구문 사용
   - Promise 체인 방식은 가급적 피하기

4. **에러 처리**:
   - 꼭 필요한 경우에만 에러 핸들링 작성
   - 불필요한 try-catch 블록은 피하기
   - 에러 발생 시 적절한 로그 남기기

5. **코드 주석**:
   - 모든 함수에 JSDoc 형식의 주석 작성
   - 복잡한 로직은 한글 주석으로 설명

6. **타입 안전성**:
   - TypeScript 타입을 명확히 지정
   - `any` 타입 사용 지양

---

## 4. 프로젝트 구조

```
firebase/
├── functions/
│   ├── src/
│   │   ├── index.ts              # 메인 진입점 (트리거 함수 정의)
│   │   ├── functions.ts          # 비즈니스 로직 함수들
│   │   ├── interfaces.ts         # TypeScript 인터페이스 정의
│   │   └── ... (기타 모듈)
│   ├── package.json              # npm 의존성
│   └── tsconfig.json             # TypeScript 설정
├── firebase.json                 # Firebase 프로젝트 설정
└── .firebaserc                   # Firebase 프로젝트 alias
```

### 파일별 역할

| 파일 | 역할 | 설명 |
|------|------|------|
| `index.ts` | **트리거 정의** | 어떤 경로에서 어떤 이벤트가 발생하면 함수를 실행할지 정의 |
| `functions.ts` | **비즈니스 로직** | 실제 데이터 처리 및 RTDB 업데이트 로직 구현 |
| `interfaces.ts` | **타입 정의** | TypeScript 인터페이스 및 타입 선언 |

---

## 5. index.ts 파일 상세 가이드

### 5.1 파일 개요

`firebase/functions/src/index.ts`는 Firebase Cloud Functions **Gen 2**의 **메인 진입점**으로, SNS 이벤트(게시글 생성, 좋아요, 댓글 등) 발생 시 자동으로 실행되는 백그라운드 함수를 정의합니다.

**주요 역할**:
- Firebase Admin SDK 초기화
- 환경별 설정 관리
- **Gen 2 API**를 사용한 트리거 함수 정의 및 이벤트 라우팅

**파일 위치**: [firebase/functions/src/index.ts](../firebase/functions/src/index.ts)

**중요**: 모든 함수는 `firebase-functions/v2` 패키지를 사용해야 합니다:
```typescript
// ✅ Gen 2 (올바름)
import { onValueCreated } from "firebase-functions/v2/database";

// ❌ Gen 1 (사용 금지)
import * as functions from "firebase-functions";
```

---

### 5.2 Configuration 관리 (getConfig)

#### 목적

환경 변수(`GCLOUD_PROJECT` 또는 `FIREBASE_PROJECT`)에 따라 적절한 Firebase 프로젝트 설정을 반환합니다.

#### 지원하는 프로젝트

| 프로젝트 | 환경 변수 값 | Database URL | Region |
|---------|-------------|--------------|--------|
| **test5** | `test5` 또는 `withcenter-test-5` 포함 | `https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app/` | `asia-southeast1` |

#### 코드 예시

```typescript
const getConfig = () => {
  const projectValue =
    process.env.GCLOUD_PROJECT || process.env.FIREBASE_PROJECT || "";

  if (projectValue === "test5" || projectValue.includes("withcenter-test-5")) {
    return {
      databaseURL:
        "https://withcenter-test-5-default-rtdb.asia-southeast1.firebasedatabase.app/",
      region: "asia-southeast1",
    };
  } else {
    throw new Error(`Unknown FIREBASE_PROJECT value: ${projectValue}`);
  }
};
```

#### 배포 시 프로젝트 선택

```bash
# test5 프로젝트에 배포
firebase deploy --only functions --project=test5
```

#### 주의사항

- `GCLOUD_PROJECT`는 Firebase 배포 시 자동으로 설정됨
- `FIREBASE_PROJECT`는 로컬 테스트/에뮬레이터용
- **Region은 반드시 Database Region과 일치해야 함** (Database 트리거 사용 시)

---

### 5.3 Global Options 설정

#### 목적

**비용 관리**를 위해 동시에 실행 가능한 컨테이너 수를 제한합니다.

#### 설정 내용

```typescript
setGlobalOptions({ maxInstances: 10 });
```

- **maxInstances: 10**: 최대 10개의 컨테이너만 동시 실행
- 예상치 못한 트래픽 급증 시 **비용 폭탄 방지**
- 성능 저하를 감수하고 비용 통제 우선

#### 함수별 개별 설정 가능 (Gen 2)

**Gen 2에서는 전역 설정과 개별 설정 모두 가능합니다:**

```typescript
import { setGlobalOptions } from "firebase-functions/v2";
import { onRequest } from "firebase-functions/v2/https";
import { onValueCreated } from "firebase-functions/v2/database";

// 전역 설정 (모든 함수에 적용)
setGlobalOptions({
  region: "asia-southeast1",
  maxInstances: 10,
});

// 개별 함수 설정 (전역 설정 오버라이드)
export const myFunction = onRequest(
  {
    region: "asia-southeast1",
    maxInstances: 5,  // 이 함수는 최대 5개만
  },
  (req, res) => {
    res.send("Hello");
  }
);

// Database 트리거도 동일
export const onLikeCreated = onValueCreated(
  {
    ref: "/post-props/likes/{postId}/{userId}",
    region: "asia-southeast1",
    maxInstances: 3,  // 좋아요 함수는 최대 3개만
  },
  async (event) => {
    // 처리 로직...
  }
);
```

#### 참고사항

- ⚠️ **Gen 2 전용**: 이 프로젝트는 Gen 2 API만 사용합니다
- **전역 설정**: `setGlobalOptions()`로 모든 함수의 기본값 설정
- **개별 설정**: 함수별로 옵션 객체를 전달하여 전역 설정 오버라이드 가능
- **Region 필수**: Database 트리거는 반드시 Database Region과 일치해야 함

---

### 5.4 Firebase Admin 초기화

#### 목적

Firebase Admin SDK를 초기화하여 Realtime Database, Firestore 등에 접근할 수 있도록 설정합니다.

#### 코드 예시

```typescript
if (!admin.apps.length) {
  admin.initializeApp({
    databaseURL: config.databaseURL,
  });

  console.log(
    `Firebase Admin initialized with database URL: ${config.databaseURL}`
  );
}
```

#### 동작 방식

1. **중복 초기화 방지**: `admin.apps.length`로 이미 초기화되었는지 확인
2. **Database URL 설정**: `getConfig()`에서 받은 URL 사용
3. **로그 출력**: 초기화 성공 시 Database URL 로그

#### 주의사항

- Firebase Admin은 **한 번만 초기화**되어야 함
- 여러 번 초기화 시도 시 에러 발생 가능

---

### 5.5 핵심 함수 예제: 좋아요 개수 동기화

#### 함수 정의 (Gen 2)

```typescript
// Gen 2 API import
import { onValueCreated } from "firebase-functions/v2/database";
import { DatabaseEvent } from "firebase-functions/v2/database";
import * as admin from "firebase-admin";

/**
 * 좋아요가 추가되면 게시글의 likeCount를 자동으로 업데이트
 */
export const onLikeCreated = onValueCreated(
  "/post-props/likes/{postId}/{userId}",
  async (event: DatabaseEvent<admin.database.DataSnapshot>) => {
    const postId = event.params.postId as string;
    const userId = event.params.userId as string;

    console.log(`좋아요 추가: postId=${postId}, userId=${userId}`);

    // 실제 처리 함수 호출
    await updateLikeCount(postId);
  }
);
```

#### 트리거 경로

`/post-props/likes/{postId}/{userId}`

- 이 경로에 **새로운 데이터가 생성**되면 자동으로 함수 실행
- `{postId}`, `{userId}`는 와일드카드 파라미터

#### 함수 실행 흐름

```typescript
// Step 1: 파라미터 추출
const postId = event.params.postId as string;
const userId = event.params.userId as string;
const likeData = event.data.val(); // 좋아요 타임스탬프

// Step 2: 데이터 검증
if (!postId || !userId) {
  console.error("postId 또는 userId가 없습니다");
  return;
}

// Step 3: 게시글 카테고리 조회
const postSnapshot = await admin.database()
  .ref(`/posts`)
  .orderByChild("id")
  .equalTo(postId)
  .once("value");

if (!postSnapshot.exists()) {
  console.error(`게시글을 찾을 수 없습니다: ${postId}`);
  return;
}

// Step 4: 좋아요 개수 증가
await updateLikeCount(postId);
```

#### 각 단계 설명

| 단계 | 설명 | 코드 |
|------|------|------|
| **Step 1: 파라미터 추출** | 트리거 경로에서 postId, userId 추출<br/>좋아요 데이터 가져오기 | `event.params.postId`<br/>`event.data.val()` |
| **Step 2: 데이터 검증** | postId, userId 존재 여부 확인 | `if (!postId \|\| !userId) return;` |
| **Step 3: 게시글 조회** | 해당 게시글이 존재하는지 확인 | `admin.database().ref('/posts')` |
| **Step 4: 좋아요 개수 증가** | 게시글의 likeCount를 업데이트 | `updateLikeCount(postId)` |

#### 함수의 역할

이 Cloud Function은 다음과 같은 작업을 **자동으로** 처리합니다:

1. **좋아요 생성 감지**: `/post-props/likes/{postId}/{userId}`에 새로운 데이터가 생성되면 자동으로 트리거
2. **데이터 검증**: postId, userId 존재 여부 확인
3. **게시글 조회**: 해당 게시글이 실제로 존재하는지 확인
4. **좋아요 개수 업데이트**: 게시글의 `likeCount` 필드를 자동으로 증가

#### 실제 처리 함수 예제: updateLikeCount

**위치**: [firebase/functions/src/functions.ts](../firebase/functions/src/functions.ts)

```typescript
/**
 * 좋아요 개수를 계산하여 게시글에 업데이트
 */
async function updateLikeCount(postId: string) {
  // 1. 해당 게시글의 모든 좋아요 개수 조회
  const likesSnapshot = await admin.database()
    .ref(`/post-props/likes/${postId}`)
    .once("value");

  const likeCount = likesSnapshot.numChildren();

  // 2. 게시글이 속한 카테고리 찾기
  const categoriesSnapshot = await admin.database()
    .ref("/posts")
    .once("value");

  let targetPath = null;
  categoriesSnapshot.forEach((categorySnapshot) => {
    const categoryKey = categorySnapshot.key;
    if (categorySnapshot.child(postId).exists()) {
      targetPath = `/posts/${categoryKey}/${postId}/likeCount`;
    }
  });

  if (!targetPath) {
    console.error(`게시글 경로를 찾을 수 없습니다: ${postId}`);
    return;
  }

  // 3. 좋아요 개수 업데이트
  await admin.database().ref(targetPath).set(likeCount);

  console.log(`좋아요 개수 업데이트 완료: ${targetPath} = ${likeCount}`);
}
```

**처리 내역**:
- `/post-props/likes/{postId}` 경로의 모든 자식 개수 계산
- 해당 게시글이 속한 카테고리 찾기
- `/posts/{category}/{postId}/likeCount` 업데이트

---

#### 5.5.1 SNS 이벤트 처리 자동화 프로세스

##### 클라이언트와 Cloud Functions의 역할 분담

**클라이언트 (Svelte)가 하는 일**:
- 최소한의 데이터만 전송 → 네트워크 비용 절감
- 좋아요 추가 시 전송 데이터:
  ```typescript
  // /post-props/likes/{postId}/{userId} 경로에 타임스탬프 저장
  const updates = {};
  updates[`/post-props/likes/${postId}/${userId}`] = serverTimestamp();
  await update(ref(database), updates);
  ```

**Cloud Functions가 자동으로 처리하는 일**:
- 좋아요 개수 계산
- 게시글의 `likeCount` 필드 자동 업데이트
- 알림 트리거 (선택사항)

---

##### Cloud Functions의 2단계 처리 과정

**Step 1: 좋아요 개수 계산**

```typescript
// /post-props/likes/{postId}의 모든 자식 개수 조회
const likesSnapshot = await admin.database()
  .ref(`/post-props/likes/${postId}`)
  .once("value");

const likeCount = likesSnapshot.numChildren();
console.log(`게시글 ${postId}의 좋아요 개수: ${likeCount}`);
```

**Step 2: 게시글의 likeCount 업데이트**

```typescript
// 게시글의 likeCount 필드 업데이트
await admin.database()
  .ref(`/posts/${category}/${postId}/likeCount`)
  .set(likeCount);
```

**결과**:
```
/posts/
  community/
    post-abc123/
      title: "안녕하세요"
      content: "게시글 내용"
      userId: "user-A-uid"
      likeCount: 5  ← Cloud Functions가 자동으로 업데이트

/post-props/
  likes/
    post-abc123/
      user-A-uid: 1698473000000
      user-B-uid: 1698473100000
      user-C-uid: 1698473200000
      user-D-uid: 1698473300000
      user-E-uid: 1698473400000
```

**SNS 관련 추가 예제**:

##### 댓글 개수 동기화 Cloud Function

```typescript
/**
 * 댓글이 추가되면 게시글의 commentCount를 자동으로 업데이트 (Gen 2)
 */
export const onCommentCreated = onValueCreated(
  "/post-props/comments/{postId}/{commentId}",
  async (event) => {
    const postId = event.params.postId as string;

    // 댓글 개수 계산
    const commentsSnapshot = await admin.database()
      .ref(`/post-props/comments/${postId}`)
      .once("value");

    const commentCount = commentsSnapshot.numChildren();

    // 게시글의 commentCount 업데이트
    const categoriesSnapshot = await admin.database()
      .ref("/posts")
      .once("value");

    categoriesSnapshot.forEach((categorySnapshot) => {
      if (categorySnapshot.child(postId).exists()) {
        const categoryKey = categorySnapshot.key;
        admin.database()
          .ref(`/posts/${categoryKey}/${postId}/commentCount`)
          .set(commentCount);
      }
    });
  }
);
```

##### 사용자 프로필 동기화 Cloud Function

```typescript
/**
 * 사용자 프로필 업데이트 시 user-props 자동 동기화 (Gen 2)
 */
export const onUserUpdated = onValueUpdated(
  "/users/{uid}",
  async (event) => {
    const uid = event.params.uid as string;
    const newData = event.data.after.val();

    // displayName 또는 photoURL이 변경되었는지 확인
    const updates: { [key: string]: any } = {};

    if (newData.displayName) {
      updates[`/user-props/names/${uid}`] = newData.displayName;
    }

    if (newData.photoURL) {
      updates[`/user-props/photos/${uid}`] = newData.photoURL;
    }

    if (Object.keys(updates).length > 0) {
      await admin.database().ref().update(updates);
      console.log(`사용자 프로필 동기화 완료: ${uid}`);
    }
  }
);
```

---

## 6. 설계 철학

### Keep Trigger Functions Simple

주석에서 언급된 것처럼, **트리거 함수는 단순하게 유지**해야 합니다.

#### 트리거 함수가 해야 할 일

✅ **해야 할 일**:
1. 이벤트에서 데이터 추출
2. `postId`, `userId`, `commentId` 등 파라미터 추출
3. 간단한 데이터 검증
4. 적절한 핸들러 함수로 라우팅

❌ **하지 말아야 할 일**:
1. 복잡한 비즈니스 로직 구현
2. 여러 단계의 RTDB 조회 및 업데이트
3. 복잡한 데이터 변환 및 계산

#### 비즈니스 로직 분리

실제 비즈니스 로직 (좋아요/댓글 개수 계산, 사용자 프로필 동기화 등)은 **별도 함수**에서 처리합니다:

```typescript
// index.ts (트리거 함수) - 단순하게! (Gen 2)
import { onValueCreated } from "firebase-functions/v2/database";

export const onLikeCreated = onValueCreated(
  "/post-props/likes/{postId}/{userId}",
  async (event) => {
    const postId = event.params.postId as string;
    const userId = event.params.userId as string;

    // 간단한 검증 후 바로 라우팅
    if (!postId || !userId) return;
    await updateLikeCount(postId);
  }
);

// functions.ts (비즈니스 로직) - 복잡한 로직 구현
export async function updateLikeCount(postId: string) {
  // 좋아요 개수 계산
  // 게시글 카테고리 찾기
  // likeCount 업데이트
  // ...
}
```

#### 장점

- **가독성 향상**: 트리거 함수만 보면 어떤 이벤트에서 어떤 처리를 하는지 한눈에 파악
- **유지보수 용이**: 비즈니스 로직 변경 시 `functions.ts`만 수정
- **테스트 용이**: 비즈니스 로직 함수를 독립적으로 단위 테스트 가능
- **재사용성**: 같은 비즈니스 로직을 다른 트리거에서도 사용 가능

---

## 7. 주의사항

### 7.1 환경 변수 설정 필수

배포 시 **올바른 프로젝트 설정**이 필요합니다:

```bash
# 프로젝트 확인
firebase use

# 프로젝트 전환
firebase use test5

# 배포
firebase deploy --only functions
```

### 7.2 비용 관리

- `maxInstances: 10`으로 동시 실행 제한
- 예상치 못한 트래픽 급증 시 성능 저하 가능 (비용 vs 성능 trade-off)
- 필요 시 `maxInstances` 값 조정

### 7.3 Region 일치

**Database trigger는 반드시 database region과 일치해야 합니다**:

- test5 프로젝트: `asia-southeast1`

Region이 일치하지 않으면 함수가 트리거되지 않습니다!

### 7.4 RTDB 구조 준수

SNS Cloud Functions 개발 시 반드시 최상위 경로 구조를 따라야 합니다:

- **게시글**: `/posts/{category}/{postId}`
- **사용자**: `/users/{uid}`
- **좋아요**: `/post-props/likes/{postId}/{userId}`
- **댓글**: `/post-props/comments/{postId}/{commentId}`
- **채팅 메시지**: `/chat/messages/{roomId}/{messageId}`
- **채팅 참여**: `/chat/joins/{uid}/{roomId}`

### 7.5 Firebase Admin 모듈

프로젝트에서 Firebase Admin SDK를 사용하려면:

```bash
# firebase/functions 폴더에서 실행
cd firebase/functions
npm install firebase-admin
```

이미 설치되어 있어야 하지만, 누락 시 위 명령어로 설치하세요.

### 7.6 TypeScript 타입 정의

`interfaces.ts`에 정의된 타입을 반드시 사용하세요:

```typescript
// 게시글 인터페이스
interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
  category: string;
  createdAt: number;
  likeCount?: number;
  commentCount?: number;
}

// 사용 예시
const postData = event.data.val() as Post;
```

### 7.7 Firebase Cloud Functions Gen 2 필수 사항

⚠️ **매우 중요**: 모든 Cloud Functions는 반드시 Gen 2 버전으로 작성해야 합니다.

#### Gen 2 vs Gen 1 비교

| 구분 | Gen 1 (사용 금지) | Gen 2 (필수) |
|------|------------------|-------------|
| **Import** | `import * as functions from "firebase-functions"` | `import { onValueCreated } from "firebase-functions/v2/database"` |
| **트리거** | `functions.database.ref().onCreate()` | `onValueCreated(path, handler)` |
| **Region 설정** | `functions.region("asia-southeast1")` | `setGlobalOptions({ region: "asia-southeast1" })` |
| **최대 인스턴스** | `runWith({ maxInstances: 10 })` | `setGlobalOptions({ maxInstances: 10 })` |

#### Gen 2 필수 패키지

```json
{
  "dependencies": {
    "firebase-admin": "^12.0.0",
    "firebase-functions": "^5.0.0"  // ← Gen 2는 5.0.0 이상
  }
}
```

#### Gen 2 함수 작성 템플릿

```typescript
// ✅ 올바른 Gen 2 함수
import { onValueCreated } from "firebase-functions/v2/database";
import { setGlobalOptions } from "firebase-functions/v2";
import * as admin from "firebase-admin";

// Global 옵션 설정
setGlobalOptions({
  region: "asia-southeast1",
  maxInstances: 10,
});

export const onLikeCreated = onValueCreated(
  "/post-props/likes/{postId}/{userId}",
  async (event) => {
    const postId = event.params.postId as string;
    // 처리 로직...
  }
);
```

```typescript
// ❌ 잘못된 Gen 1 함수 (사용 금지)
import * as functions from "firebase-functions";

export const onLikeCreated = functions
  .region("asia-southeast1")
  .database
  .ref("/post-props/likes/{postId}/{userId}")
  .onCreate(async (snapshot, context) => {
    // ...
  });
```

---

## 8. 관련 문서

### SNS 프로젝트 문서

- **[SNS 웹 개발 가이드 (sns-web.md)](./sns-web.md)**:
  - 웹 개발 워크플로우
  - Svelte 5 Custom Elements 개발
  - Firebase 통합

- **[SNS 코딩 가이드라인 (sns-web-coding-guideline.md)](./sns-web-coding-guideline.md)**:
  - 반응형 상태 관리
  - RTDB 데이터 구조
  - Firebase Server Values 사용법

- **[SNS 보안 규칙 가이드 (sns-web-security.md)](./sns-web-security.md)**:
  - Firebase Security Rules 구현
  - 인증 기반 접근 제어

- **[SNS 사용자 관리 가이드 (sns-web-user.md)](./sns-web-user.md)**:
  - 사용자 프로필 데이터 구조
  - 프로필 사진 업로드

### Firebase 공식 문서

- **[Cloud Functions Gen 2 시작하기](https://firebase.google.com/docs/functions/get-started?gen=2nd)**
- **[Cloud Functions Gen 2로 마이그레이션](https://firebase.google.com/docs/functions/2nd-gen)**
- **[Database Triggers (Gen 2)](https://firebase.google.com/docs/functions/database-events?gen=2nd)**
- **[TypeScript 가이드](https://firebase.google.com/docs/functions/typescript)**
- **[Best Practices](https://firebase.google.com/docs/functions/best-practices)**

---

## 마무리

이 문서는 Firebase Cloud Functions **Gen 2**의 **메인 진입점인 index.ts** 파일을 중심으로 작성되었습니다.

**핵심 포인트**:
- ✅ **Gen 2 필수 사용**: 모든 함수는 `firebase-functions/v2` 패키지 사용
- ✅ **트리거 함수는 단순하게**: 라우팅과 검증만 수행
- ✅ **비즈니스 로직은 별도 분리**: `functions.ts`에서 구현
- ✅ **최상위 경로 사용**: `/{ROOT_FOLDER}/` 제거, `/posts/`, `/users/` 등 직접 사용
- ✅ **비용 관리**: `setGlobalOptions({ maxInstances: 10 })`로 비용 통제
- ✅ **Region 일치**: Database trigger는 database region과 일치 필수

이 문서는 SNS 프로젝트의 백그라운드 처리를 담당하는 Cloud Functions 개발 가이드입니다! 🚀

---

**Last Updated**: 2025-01-03
**Version**: 2.0.0 (Gen 2 전환)
**Author**: SNS 개발팀