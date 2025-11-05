---
name: snsweb-firebase-cloudfunctions
version: 1.0.0
description: 파이어베이스 클라우드 함수 (Firebase Cloud Functions) 개발 가이드 문서의 SED 사양
author: JaeHo Song
email: thruthesky@gmail.com
homepage: https://github.com/thruthesky/
funding: ""
license: GPL
dependencies: []
"프로젝트 이름": snsweb
---

## Overview
- 이 문서는 "파이어베이스 클라우드 함수 (Firebase Cloud Functions) 개발 가이드"에 대한 세부 사양을 정리하며, 기존 내용을 그대로 유지한 채 SED 구조에 맞춰 제공합니다.

## Requirements
- 문서 전반에 걸쳐 소개되는 지침과 참고 사항을 모두 숙지해야 하며, 별도의 추가 선행 조건은 원문 각 절에서 제시되는 내용을 따릅니다.

## Workflow
1. 아래 `## Detail Items` 절에 포함된 원문 목차를 검토합니다.
2. 필요한 경우 원문의 각 절을 순서대로 읽으며 프로젝트 작업 흐름에 반영합니다.
3. 문서에 명시된 모든 지침을 확인한 뒤 실제 개발 단계에 적용합니다.

## Detail Items
- 이하에는 기존 문서의 모든 내용을 원형 그대로 포함하여 참조할 수 있도록 구성했습니다.

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
- [8. 데이터베이스 트리거 구현 예제](#8-데이터베이스-트리거-구현-예제)
  - [8.1 전체 통계 (stats/counters) 관리](#81-전체-통계-statscounters-관리)
  - [8.2 카테고리 통계 (categories) 관리](#82-카테고리-통계-categories-관리)
- [9. Unit Test 가이드](#9-unit-test-가이드)
  - [9.1 테스트 전략 개요](#91-테스트-전략-개요)
  - [9.2 리팩토링된 프로젝트 구조](#92-리팩토링된-프로젝트-구조)
  - [9.3 함수 로직 분리 철학](#93-함수-로직-분리-철학)
  - [9.4 테스트 환경 설정](#94-테스트-환경-설정)
  - [9.5 테스트 실행 방법](#95-테스트-실행-방법)
  - [9.6 Unit Test 예제](#96-unit-test-예제)
  - [9.7 Integration Test 예제](#97-integration-test-예제)
- [10. 관련 문서](#10-관련-문서)

---

## 1. 개요

파이어베이스 클라우드 함수는 서버리스 환경에서 백엔드 코드를 실행할 수 있는 기능을 제공합니다. SNS 프로젝트에서는 게시글, 댓글, 좋아요 등의 이벤트 발생 시 자동으로 실행되는 백그라운드 함수를 구현하여 다음과 같은 작업을 자동화합니다:

- **사용자 프로필 동기화**: `/users/{uid}` 변경 시 `/user-props/` 자동 업데이트
- **좋아요/댓글 개수 동기화**: `/likes/` 변경 시 `/posts/{postId}/likeCount` 또는 `/comments/{commentId}/likeCount` 업데이트 (통합 좋아요 구조)
- **게시글 삭제 시 연관 데이터 정리**: 게시글 삭제 시 좋아요, 댓글 등 연관 데이터 자동 삭제
- **알림 트리거 및 전송**: 좋아요, 댓글, 친구 요청 등의 이벤트 발생 시 알림 전송

**참고**: 이 문서에서 사용하는 모든 경로는 Firebase Realtime Database의 최상위 경로(`/`)에서 시작합니다. 예: `/users/{uid}`, `/posts/{postId}`

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
   - 게시글: `/posts/{postId}`
   - 사용자: `/users/{uid}`
   - 통합 좋아요 (Flat Style): `/likes/{type}-{nodeId}-{uid}` (값: 1)
     - 게시글 좋아요: `/likes/post-{postId}-{uid}`
     - 댓글 좋아요: `/likes/comment-{commentId}-{uid}`
   - 댓글: `/comments/{commentId}`
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
│   │   ├── index.ts              # 메인 진입점 (이벤트 핸들러만 정의)
│   │   ├── types/
│   │   │   └── index.ts          # TypeScript 타입 정의 (PostData, CommentData 등)
│   │   ├── handlers/             # 비즈니스 로직 핸들러
│   │   │   ├── post.handler.ts   # 게시글 관련 비즈니스 로직
│   │   │   ├── comment.handler.ts # 댓글 관련 비즈니스 로직
│   │   │   ├── like.handler.ts   # 좋아요 관련 비즈니스 로직
│   │   │   └── user.handler.ts   # 사용자 관련 비즈니스 로직
│   │   └── utils/                # 순수 함수 유틸리티
│   │       ├── like.utils.ts     # 좋아요 ID 파싱 등
│   │       └── post.utils.ts     # 게시글 조회 유틸리티
│   ├── test/                     # 테스트 파일
│   │   ├── unit/                 # Unit Tests (순수 함수 테스트)
│   │   │   └── like.utils.test.ts
│   │   └── integration/          # Integration Tests (핸들러 테스트)
│   │       ├── test-setup.ts     # firebase-functions-test 설정
│   │       ├── onPostCreate.test.ts
│   │       └── onLike.test.ts
│   ├── package.json              # npm 의존성
│   └── tsconfig.json             # TypeScript 설정
├── firebase.json                 # Firebase 프로젝트 설정
└── .firebaserc                   # Firebase 프로젝트 alias
```

### 파일별 역할

| 파일/폴더 | 역할 | 설명 |
|------|------|------|
| `index.ts` | **이벤트 핸들러** | Gen 2 트리거 함수만 정의 (5-10줄), 비즈니스 로직은 handlers/로 위임 |
| `types/` | **타입 정의** | TypeScript 인터페이스 및 타입 선언 (PostData, CommentData 등) |
| `handlers/` | **비즈니스 로직** | 실제 데이터 처리 및 RTDB 업데이트 로직 구현 (firebase-admin 의존) |
| `utils/` | **순수 함수** | Firebase 의존성 없는 순수 함수 (parseLikeId 등) |
| `test/unit/` | **Unit Tests** | 순수 함수 및 비즈니스 로직 테스트 (Emulator 불필요) |
| `test/integration/` | **Integration Tests** | firebase-functions-test로 이벤트 핸들러 테스트 |

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
# test5 프로젝트에 배포 (권장)
cd firebase/functions
npm run deploy

# 또는 프로젝트를 명시적으로 지정
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
  // /likes/post-{postId}-{uid} 형태의 모든 좋아요 조회 (통합 좋아요 구조)
  const prefix = `post-${postId}-`;
  const likesSnapshot = await admin.database()
    .ref("/likes")
    .orderByKey()
    .startAt(prefix)
    .endAt(`${prefix}\uf8ff`)
    .once("value");

  let likeCount = 0;
  if (likesSnapshot.exists()) {
    likeCount = likesSnapshot.numChildren();
  }

  // 2. 좋아요 개수 업데이트
  await admin.database()
    .ref(`/posts/${postId}/likeCount`)
    .set(likeCount);

  console.log(`좋아요 개수 업데이트 완료: /posts/${postId}/likeCount = ${likeCount}`);
}
```

**처리 내역**:
- `/likes/` 경로에서 `post-{postId}-{uid}` 또는 `comment-{commentId}-{uid}` 패턴의 좋아요 개수 계산 (통합 좋아요 구조)
- `/posts/{postId}/likeCount` 또는 `/comments/{commentId}/likeCount` 업데이트

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
  .ref(`/posts/${postId}/likeCount`)
  .set(likeCount);
```

**결과**:
```
/posts/
  post-abc123/
    title: "안녕하세요"
    content: "게시글 내용"
    uid: "user-A-uid"
    likeCount: 5  ← Cloud Functions가 자동으로 업데이트

/likes/
  post-post-abc123-user-A-uid: 1
  post-post-abc123-user-B-uid: 1
  post-post-abc123-user-C-uid: 1
  post-post-abc123-user-D-uid: 1
  post-post-abc123-user-E-uid: 1
```

**SNS 관련 추가 예제**:

##### 댓글 좋아요 개수 동기화 Cloud Function

```typescript
/**
 * 댓글 좋아요가 추가되면 댓글의 likeCount를 자동으로 업데이트 (Gen 2)
 * 통합 좋아요 구조: /likes/comment-{commentId}-{uid}
 */
export const onCommentLikeCreated = onValueCreated(
  "/likes/comment-{commentId}-{userId}",
  async (event) => {
    const commentId = event.params.commentId as string;

    // 댓글 좋아요 개수 계산
    const prefix = `comment-${commentId}-`;
    const likesSnapshot = await admin.database()
      .ref("/likes")
      .orderByKey()
      .startAt(prefix)
      .endAt(`${prefix}\uf8ff`)
      .once("value");

    const likeCount = likesSnapshot.numChildren();

    // 댓글의 likeCount 업데이트
    await admin.database()
      .ref(`/comments/${commentId}/likeCount`)
      .set(likeCount);
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

### 7.1 배포 방법

#### 권장 배포 명령어

**`npm run deploy` 명령을 사용하여 배포하는 것을 권장합니다:**

```bash
# firebase/functions 폴더에서 실행
cd firebase/functions
npm run deploy
```

이 명령은 다음 작업을 자동으로 수행합니다:
1. TypeScript 빌드 (`npm run build`)
2. ESLint 검사 (`npm run lint`)
3. Firebase Functions 배포 (`firebase deploy --only functions`)

#### 프로젝트 설정

배포 시 **올바른 프로젝트 설정**이 필요합니다:

```bash
# 프로젝트 확인
firebase use

# 프로젝트 전환 (필요시)
firebase use test5

# 배포 (권장)
npm run deploy

# 또는 직접 배포
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

- **게시글**: `/posts/{postId}`
- **사용자**: `/users/{uid}`
- **통합 좋아요 (Flat Style)**: `/likes/{type}-{nodeId}-{uid}` (값: 1)
  - 게시글 좋아요: `/likes/post-{postId}-{uid}`
  - 댓글 좋아요: `/likes/comment-{commentId}-{uid}`
- **댓글**: `/comments/{commentId}`
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

## 8. 데이터베이스 트리거 구현 예제

본 섹션에서는 Firebase Realtime Database의 데이터 변경 이벤트에 반응하여 자동으로 실행되는 Cloud Functions 구현 예제를 제공합니다.

**중요**: 이 섹션의 모든 예제는 **sns-web-database.md**에 정의된 데이터베이스 구조를 기반으로 합니다. 데이터베이스 구조는 [SNS 데이터베이스 구조 가이드](./sns-web-database.md)를 참고하세요.

### 8.1 전체 통계 (stats/counters) 관리

전체 사용자, 게시글, 댓글, 좋아요의 총 개수를 자동으로 추적하는 Cloud Functions 구현 예제입니다.

**데이터베이스 경로**: `/stats/counters/`
- `user`: 전체 사용자 총 개수
- `post`: 전체 게시글 총 개수
- `comment`: 전체 댓글 총 개수
- `like`: 전체 좋아요 총 개수

**원칙**: 클라이언트는 이 경로를 직접 수정하지 않으며, Cloud Functions만이 업데이트합니다.

#### 8.1.1 사용자 등록 시 user 카운터 증가

새로운 사용자가 등록되면 `/stats/counters/user`를 1 증가시킵니다.

```typescript
// onUserCreate 함수 내 로직
if (userData) {
  // 📊 전체 사용자 통계 업데이트: user +1
  const statsUpdates = {} as Record<string, unknown>;
  statsUpdates[`stats/counters/user`] = admin.database.ServerValue.increment(1);
  await admin.database().ref().update(statsUpdates);
}
```

**트리거 경로**: `/users/{uid}`
**이벤트**: onCreate
**동작**: `/stats/counters/user` +1

#### 8.1.2 게시글 생성 시 post 카운터 증가

새로운 게시글이 생성되면 `/stats/counters/post`를 1 증가시킵니다.

```typescript
// onPostCreate 함수 내 로직
if (postData.category) {
  // 📊 전체 글 통계 업데이트: post +1
  const statsUpdates = {} as Record<string, unknown>;
  statsUpdates[`stats/counters/post`] = admin.database.ServerValue.increment(1);
  await admin.database().ref().update(statsUpdates);
}
```

**트리거 경로**: `/posts/{postId}`
**이벤트**: onCreate
**동작**: `/stats/counters/post` +1

#### 8.1.3 게시글 삭제 시 post 카운터 감소

게시글이 삭제되면 `/stats/counters/post`를 1 감소시킵니다.

```typescript
// onPostDelete 함수 내 로직
if (postData.category) {
  // 📊 전체 글 통계 업데이트: post -1
  const statsUpdates = {} as Record<string, unknown>;
  statsUpdates[`stats/counters/post`] = admin.database.ServerValue.increment(-1);
  await admin.database().ref().update(statsUpdates);
}
```

**트리거 경로**: `/posts/{postId}`
**이벤트**: onDelete
**동작**: `/stats/counters/post` -1

#### 8.1.4 댓글 생성 시 comment 카운터 증가

새로운 댓글이 생성되면 `/stats/counters/comment`를 1 증가시킵니다.

```typescript
// onCommentCreate 함수 내 로직
if (postData?.category) {
  // 📊 전체 댓글 통계 업데이트: comment +1
  const statsUpdates = {} as Record<string, unknown>;
  statsUpdates[`stats/counters/comment`] = admin.database.ServerValue.increment(1);
  await admin.database().ref().update(statsUpdates);
}
```

**트리거 경로**: `/comments/{commentId}`
**이벤트**: onCreate
**동작**: `/stats/counters/comment` +1

#### 8.1.5 댓글 삭제 시 comment 카운터 감소

댓글이 삭제되면 `/stats/counters/comment`를 1 감소시킵니다.

```typescript
// onCommentDelete 함수 내 로직
if (postData?.category) {
  // 📊 전체 댓글 통계 업데이트: comment -1
  const statsUpdates = {} as Record<string, unknown>;
  statsUpdates[`stats/counters/comment`] = admin.database.ServerValue.increment(-1);
  await admin.database().ref().update(statsUpdates);
}
```

**트리거 경로**: `/comments/{commentId}`
**이벤트**: onDelete
**동작**: `/stats/counters/comment` -1

#### 8.1.6 좋아요 추가 시 like 카운터 증가

사용자가 게시글 또는 댓글에 좋아요를 추가하면 `/stats/counters/like`를 1 증가시킵니다.

```typescript
// onLike 함수 내 로직
if (type === "post" || type === "comment") {
  // 📊 전체 좋아요 통계 업데이트: like +1
  const statsUpdates = {} as Record<string, unknown>;
  statsUpdates[`stats/counters/like`] = admin.database.ServerValue.increment(1);
  await admin.database().ref().update(statsUpdates);
}
```

**트리거 경로**: `/likes/{likeId}`
**이벤트**: onCreate
**동작**: `/stats/counters/like` +1

#### 8.1.7 좋아요 취소 시 like 카운터 감소

사용자가 좋아요를 취소하면 `/stats/counters/like`를 1 감소시킵니다.

```typescript
// onCancelLike 함수 내 로직
if (type === "post" || type === "comment") {
  // 📊 전체 좋아요 통계 업데이트: like -1
  const statsUpdates = {} as Record<string, unknown>;
  statsUpdates[`stats/counters/like`] = admin.database.ServerValue.increment(-1);
  await admin.database().ref().update(statsUpdates);
}
```

**트리거 경로**: `/likes/{likeId}`
**이벤트**: onDelete
**동작**: `/stats/counters/like` -1

### 8.2 카테고리 통계 (categories) 관리

게시판 카테고리별 게시글 개수와 댓글 개수를 자동으로 추적하는 Cloud Functions 구현 예제입니다.

**데이터베이스 경로**: `/categories/{categoryId}/`
- `postCount`: 해당 카테고리의 총 게시글 수
- `commentCount`: 해당 카테고리의 총 댓글 수

**원칙**: 클라이언트는 이 경로를 직접 수정하지 않으며, Cloud Functions만이 업데이트합니다.

#### 8.2.1 게시글 작성 시 postCount 증가

새로운 게시글이 생성되면 해당 카테고리의 `postCount`를 자동으로 1 증가시킵니다.

```typescript
/**
 * 게시글 작성 시 카테고리 통계 업데이트
 * /posts/{postId} 경로에 새 게시글이 생성될 때 트리거됨
 */
export const onPostCreate = functions.database.onCreate('/posts/{postId}', async (snapshot, context) => {
  const post = snapshot.val();
  const category = post.category;  // 'community', 'qna', 'news', 'market'

  // 카테고리 postCount 증가
  await admin
    .database()
    .ref(`categories/${category}/postCount`)
    .transaction((currentCount) => {
      return (currentCount || 0) + 1;
    });
});
```

**트리거 경로**: `/posts/{postId}`
**이벤트**: onCreate
**동작**: `/categories/{category}/postCount` +1

#### 8.2.2 댓글 작성 시 commentCount 증가

새로운 댓글이 생성되면 해당 게시글의 카테고리를 확인한 후 `commentCount`를 자동으로 1 증가시킵니다.

```typescript
/**
 * 댓글 작성 시 카테고리 통계 업데이트
 * /comments/{commentId} 경로에 새 댓글이 생성될 때 트리거됨
 */
export const onCommentCreate = functions.database.onCreate('/comments/{commentId}', async (snapshot, context) => {
  const comment = snapshot.val();
  const postId = comment.postId;

  // 게시글 정보 조회 (카테고리 확인용)
  const postSnapshot = await admin.database().ref(`posts/${postId}`).get();
  const post = postSnapshot.val();

  if (post) {
    const category = post.category;

    // 카테고리 commentCount 증가
    await admin
      .database()
      .ref(`categories/${category}/commentCount`)
      .transaction((currentCount) => {
        return (currentCount || 0) + 1;
      });
  }
});
```

**트리거 경로**: `/comments/{commentId}`
**이벤트**: onCreate
**동작**: `/categories/{category}/commentCount` +1

#### 8.2.3 게시글 삭제 시 postCount 감소

게시글이 삭제되면 해당 카테고리의 `postCount`를 1 감소시킵니다.

```typescript
/**
 * 게시글 삭제 시 카테고리 통계 업데이트
 * /posts/{postId} 경로의 게시글이 삭제될 때 트리거됨
 */
export const onPostDelete = functions.database.onDelete('/posts/{postId}', async (snapshot, context) => {
  const post = snapshot.val();
  const category = post.category;

  // 카테고리 postCount 감소
  await admin
    .database()
    .ref(`categories/${category}/postCount`)
    .transaction((currentCount) => {
      return Math.max(0, (currentCount || 0) - 1);
    });
});
```

**트리거 경로**: `/posts/{postId}`
**이벤트**: onDelete
**동작**: `/categories/{category}/postCount` -1 (음수 방지)

#### 8.2.4 댓글 삭제 시 commentCount 감소

댓글이 삭제되면 해당 카테고리의 `commentCount`를 1 감소시킵니다.

```typescript
/**
 * 댓글 삭제 시 카테고리 통계 업데이트
 * /comments/{commentId} 경로의 댓글이 삭제될 때 트리거됨
 */
export const onCommentDelete = functions.database.onDelete('/comments/{commentId}', async (snapshot, context) => {
  const comment = snapshot.val();
  const postId = comment.postId;

  // 게시글 정보 조회 (카테고리 확인용)
  const postSnapshot = await admin.database().ref(`posts/${postId}`).get();
  const post = postSnapshot.val();

  if (post) {
    const category = post.category;

    // 카테고리 commentCount 감소
    await admin
      .database()
      .ref(`categories/${category}/commentCount`)
      .transaction((currentCount) => {
        return Math.max(0, (currentCount || 0) - 1);
      });
  }
});
```

**트리거 경로**: `/comments/{commentId}`
**이벤트**: onDelete
**동작**: `/categories/{category}/commentCount` -1 (음수 방지)

#### 8.2.5 주의사항

- ✅ **transaction() 사용**: 동시성 문제 방지를 위해 `transaction()`을 사용합니다
- ✅ **음수 방지**: 삭제 시 `Math.max(0, ...)`으로 음수 방지
- ⚠️ **클라이언트에서 직접 수정 금지**: `categories` 노드는 Cloud Functions에 의해서만 수정됩니다
- ⚠️ **읽기 권한만 허용**: 모든 사용자가 카테고리 통계를 조회할 수 있도록 보안 규칙 설정

---

## 9. Unit Test 가이드

### 9.1 테스트 전략 개요

Firebase Cloud Functions의 테스트는 **두 가지 접근 방식**을 사용합니다:

#### 접근 방식 1: Unit Tests (단위 테스트)
- **대상**: 순수 함수 (`utils/`) 및 비즈니스 로직 (`handlers/`)
- **특징**: Firebase 의존성 최소화, 빠른 실행
- **도구**: Mocha + Chai
- **Emulator 필요 여부**: ❌ 불필요

#### 접근 방식 2: Integration Tests (통합 테스트)
- **대상**: 이벤트 핸들러 (`index.ts`의 트리거 함수)
- **특징**: firebase-functions-test로 이벤트 래핑
- **도구**: firebase-functions-test + Mocha + Chai
- **Emulator 필요 여부**: ❌ 불필요 (오프라인 모드)

### 9.2 리팩토링된 프로젝트 구조

#### 코드 분리 아키텍처

```
src/
├── index.ts          # 📌 이벤트 핸들러 (Thin Wrapper)
│                     # - Gen 2 트리거 함수만 정의
│                     # - 5-10줄의 간단한 라우팅 로직
│                     # - 복잡한 로직 없음
│
├── handlers/         # 🔧 비즈니스 로직 (Business Logic)
│   ├── post.handler.ts
│   ├── comment.handler.ts
│   ├── like.handler.ts
│   └── user.handler.ts
│                     # - 실제 데이터 처리 로직
│                     # - firebase-admin 의존
│                     # - 테스트 시 모킹 필요 (선택사항)
│
├── utils/            # 🎯 순수 함수 (Pure Functions)
│   ├── like.utils.ts
│   └── post.utils.ts
│                     # - Firebase 의존성 없음
│                     # - 입력 → 출력 변환만 수행
│                     # - 테스트 시 모킹 불필요
│
└── types/            # 📦 타입 정의
    └── index.ts
```

#### index.ts 예제 (리팩토링 후)

```typescript
// ✅ 리팩토링 후: 이벤트 핸들러만 정의 (5-10줄)
import { onValueCreated } from "firebase-functions/v2/database";
import { handleLikeCreate } from "./handlers/like.handler";

/**
 * 좋아요 추가 시 게시글/댓글의 likeCount 자동 업데이트
 */
export const onLike = onValueCreated("/likes/{likeId}", async (event) => {
  const likeId = event.params.likeId as string;

  logger.info("좋아요 추가 감지", { likeId });

  // 비즈니스 로직 핸들러 호출
  return await handleLikeCreate(likeId);
});
```

### 9.3 함수 로직 분리 철학

#### 왜 로직을 분리하는가?

**문제점 (리팩토링 전)**:
- ❌ `index.ts`에 모든 로직이 집중 (500+ 줄)
- ❌ 각 트리거 함수가 50-100줄씩 차지
- ❌ 테스트하기 어려움 (Firebase Event 객체 모킹 필요)
- ❌ 코드 재사용 불가능
- ❌ 유지보수 어려움

**해결책 (리팩토링 후)**:
- ✅ `index.ts`는 이벤트 라우팅만 담당 (5-10줄)
- ✅ `handlers/`에 비즈니스 로직 분리
- ✅ `utils/`에 순수 함수 분리
- ✅ 각 함수를 독립적으로 테스트 가능
- ✅ 코드 재사용 가능
- ✅ 유지보수 용이

#### 분리 패턴

```typescript
// ❌ Before: 모든 로직이 index.ts에 (50+ 줄)
export const onLike = onValueCreated("/likes/{likeId}", async (event) => {
  const likeId = event.params.likeId as string;

  // 50줄의 복잡한 로직...
  const parsed = parseLikeId(likeId);
  if (!parsed) return;

  const { type, nodeId, uid } = parsed;

  if (type === "post") {
    const postRef = await getPostReference(nodeId);
    await postRef.child("likeCount").set(increment(1));
  }

  const updates = {};
  updates["stats/counters/like"] = increment(1);
  await db.ref().update(updates);
  // ... 더 많은 로직
});
```

```typescript
// ✅ After: 로직 분리 (5-10줄)

// 📁 index.ts (이벤트 핸들러)
export const onLike = onValueCreated("/likes/{likeId}", async (event) => {
  const likeId = event.params.likeId as string;
  return await handleLikeCreate(likeId);  // 비즈니스 로직으로 위임
});

// 📁 handlers/like.handler.ts (비즈니스 로직)
export async function handleLikeCreate(likeId: string) {
  const parsed = parseLikeId(likeId);  // utils에서 가져온 순수 함수
  if (!parsed) return { success: false, error: "Invalid likeId" };

  const { type, nodeId, uid } = parsed;

  // 실제 데이터 처리 로직...
  return { success: true, type, nodeId, uid };
}

// 📁 utils/like.utils.ts (순수 함수)
export function parseLikeId(likeId: string): ParsedLikeId | null {
  // likeId 파싱 로직 (Firebase 의존성 없음)
  const firstDashIndex = likeId.indexOf("-");
  // ...
  return { type, nodeId, uid };
}
```

### 9.4 테스트 환경 설정

#### 9.4.1 의존성 설치

```bash
cd firebase/functions
npm install --save-dev mocha chai @types/mocha @types/chai ts-node
```

**이미 설치된 패키지**:
- `firebase-functions-test@^3.1.0` (Integration Test용)

#### 9.4.2 테스트 스크립트 추가

`package.json`에 다음 스크립트를 추가합니다:

```json
{
  "scripts": {
    "test": "mocha --require ts-node/register 'test/**/*.test.ts' --timeout 10000",
    "test:unit": "mocha --require ts-node/register 'test/unit/**/*.test.ts' --timeout 5000",
    "test:integration": "mocha --require ts-node/register 'test/integration/**/*.test.ts' --timeout 10000",
    "test:watch": "mocha --require ts-node/register 'test/**/*.test.ts' --watch --watch-extensions ts"
  }
}
```

#### 9.4.3 테스트 폴더 구조

```
test/
├── unit/                          # Unit Tests
│   └── like.utils.test.ts         # parseLikeId 함수 테스트
└── integration/                   # Integration Tests
    ├── test-setup.ts              # firebase-functions-test 설정
    ├── onPostCreate.test.ts       # onPostCreate 핸들러 테스트
    └── onLike.test.ts             # onLike 핸들러 테스트
```

### 9.5 테스트 실행 방법

#### 전체 테스트 실행

```bash
npm run test
```

**출력 예시**:
```
  parseLikeId - likeId 파싱 함수
    ✅ 정상 케이스
      ✓ 게시글 좋아요 ID를 올바르게 파싱한다 (단순한 형식)
      ✓ 댓글 좋아요 ID를 올바르게 파싱한다 (단순한 형식)
      ✓ nodeId에 하이픈(-)이 포함된 경우를 올바르게 처리한다
      ✓ nodeId에 복잡한 하이픈(-)이 포함된 경우를 올바르게 처리한다
      ✓ 댓글 좋아요에서도 복잡한 nodeId 하이픈 처리가 정상 작동한다
    ❌ 에러 케이스
      ✓ 하이픈이 없는 likeId는 null을 반환한다
      ✓ 잘못된 type은 null을 반환한다
      ✓ type만 있고 nodeId와 uid가 없는 경우 null을 반환한다
      ✓ type과 nodeId만 있고 uid가 없는 경우 null을 반환한다
      ✓ 빈 문자열은 null을 반환한다
      ✓ type 다음에 하이픈이 하나만 있는 경우 null을 반환한다
    🔍 경계값 테스트
      ✓ 최소한의 유효한 likeId를 파싱한다
      ✓ 매우 긴 nodeId와 uid를 처리한다

  13 passing (11ms)
```

#### Unit Tests만 실행

```bash
npm run test:unit
```

#### Integration Tests만 실행

```bash
npm run test:integration
```

#### Watch 모드 (파일 변경 시 자동 재실행)

```bash
npm run test:watch
```

### 9.6 Unit Test 예제

#### 9.6.1 순수 함수 테스트 (utils/)

**파일**: `test/unit/like.utils.test.ts`

```typescript
/**
 * Unit Test: like.utils.ts
 * parseLikeId 함수의 순수 함수 테스트
 *
 * Mocking 불필요: 순수 함수로 외부 의존성이 없음
 */

import { expect } from "chai";
import { parseLikeId } from "../../src/utils/like.utils";

describe("parseLikeId - likeId 파싱 함수", () => {
  describe("✅ 정상 케이스", () => {
    it("게시글 좋아요 ID를 올바르게 파싱한다 (단순한 형식)", () => {
      const likeId = "post-abc123-user456";
      const result = parseLikeId(likeId);

      expect(result).to.not.be.null;
      expect(result?.type).to.equal("post");
      expect(result?.nodeId).to.equal("abc123");
      expect(result?.uid).to.equal("user456");
    });

    it("nodeId에 복잡한 하이픈(-)이 포함된 경우를 올바르게 처리한다", () => {
      // Firebase push() 키는 하이픈을 포함할 수 있음
      const likeId = "post-OdEWc-SaDELU2Y51FDy-zodDYjqcmfb5WHi1rVYrUJi0d2j2-user123abc456";
      const result = parseLikeId(likeId);

      expect(result).to.not.be.null;
      expect(result?.type).to.equal("post");
      expect(result?.nodeId).to.equal("OdEWc-SaDELU2Y51FDy-zodDYjqcmfb5WHi1rVYrUJi0d2j2");
      expect(result?.uid).to.equal("user123abc456");
    });
  });

  describe("❌ 에러 케이스", () => {
    it("하이픈이 없는 likeId는 null을 반환한다", () => {
      const likeId = "invalidlikeid";
      const result = parseLikeId(likeId);

      expect(result).to.be.null;
    });

    it("잘못된 type은 null을 반환한다", () => {
      const likeId = "invalid-abc123-user456";
      const result = parseLikeId(likeId);

      expect(result).to.be.null;
    });
  });
});
```

**테스트 실행**:
```bash
npm run test:unit
```

**테스트 커버리지**:
- ✅ 정상 케이스 (5 tests)
- ❌ 에러 케이스 (6 tests)
- 🔍 경계값 테스트 (2 tests)
- **총 13개 테스트, 모두 통과**

### 9.7 Integration Test 예제

#### 9.7.1 firebase-functions-test 설정

**파일**: `test/integration/test-setup.ts`

```typescript
import * as functionsTest from "firebase-functions-test";
import * as admin from "firebase-admin";

// firebase-functions-test 초기화 (오프라인 모드)
const testEnv = functionsTest({
  projectId: "test-project-id",
}, "./service-account-key.json");  // 선택사항

// Firebase Admin 초기화 (테스트용)
if (!admin.apps.length) {
  admin.initializeApp({
    projectId: "test-project-id",
    databaseURL: "https://test-project-id-default-rtdb.firebaseio.com",
  });
}

export { testEnv, admin };

// 테스트 종료 시 정리
export function cleanup() {
  testEnv.cleanup();
}
```

#### 9.7.2 이벤트 핸들러 테스트

**파일**: `test/integration/onLike.test.ts`

```typescript
/**
 * Integration Test: onLike 이벤트 핸들러
 * firebase-functions-test를 사용하여 실제 이벤트 핸들러 테스트
 */

import { expect } from "chai";
import { testEnv, cleanup } from "./test-setup";
import * as myFunctions from "../../src/index";
import { PostData } from "../../src/types";

describe("onLike Integration Test", () => {
  after(() => {
    cleanup();
  });

  it("좋아요 추가 시 handleLikeCreate가 호출된다", async () => {
    // ✅ firebase-functions-test로 핸들러 래핑
    const wrapped = testEnv.wrap(myFunctions.onLike);

    const likeId = "post-abc123-user456";

    // 테스트용 DataSnapshot 생성
    const snap = testEnv.database.makeDataSnapshot(1, `/likes/${likeId}`);

    // 이벤트 핸들러 실행
    const result = await wrapped(snap, { params: { likeId } });

    // 검증
    expect(result).to.not.be.undefined;
    expect(result.success).to.be.true;
    expect(result.type).to.equal("post");
    expect(result.nodeId).to.equal("abc123");
    expect(result.uid).to.equal("user456");
  });

  it("잘못된 likeId는 에러를 반환한다", async () => {
    const wrapped = testEnv.wrap(myFunctions.onLike);

    const likeId = "invalid-format";
    const snap = testEnv.database.makeDataSnapshot(1, `/likes/${likeId}`);

    const result = await wrapped(snap, { params: { likeId } });

    expect(result.success).to.be.false;
    expect(result.error).to.equal("Invalid likeId format");
  });
});
```

**테스트 실행**:
```bash
npm run test:integration
```

#### 9.7.3 Integration Test의 장점

- ✅ **Emulator 불필요**: firebase-functions-test의 오프라인 모드 사용
- ✅ **실제 이벤트 흐름 테스트**: index.ts → handlers/ → utils/ 전체 스택 검증
- ✅ **빠른 실행**: 네트워크 요청 없이 로컬에서 실행
- ✅ **모킹 최소화**: firebase-functions-test가 Event 객체 자동 생성

---

## 10. 관련 문서

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

이 문서는 Firebase Cloud Functions **Gen 2**의 **메인 진입점인 index.ts** 파일과 **Unit Test 가이드**를 중심으로 작성되었습니다.

**핵심 포인트**:
- ✅ **Gen 2 필수 사용**: 모든 함수는 `firebase-functions/v2` 패키지 사용
- ✅ **3-Tier 아키텍처**: `index.ts` (이벤트 핸들러) → `handlers/` (비즈니스 로직) → `utils/` (순수 함수)
- ✅ **트리거 함수는 단순하게**: 이벤트 라우팅과 검증만 수행 (5-10줄)
- ✅ **비즈니스 로직 분리**: `handlers/`에서 실제 데이터 처리 구현
- ✅ **순수 함수 분리**: `utils/`에 Firebase 의존성 없는 유틸리티 함수
- ✅ **테스트 가능한 구조**: Unit Tests (utils/) + Integration Tests (handlers/, index.ts)
- ✅ **Emulator 불필요**: firebase-functions-test의 오프라인 모드 활용
- ✅ **최상위 경로 사용**: `/{ROOT_FOLDER}/` 제거, `/posts/`, `/users/` 등 직접 사용
- ✅ **비용 관리**: `setGlobalOptions({ maxInstances: 10 })`로 비용 통제
- ✅ **Region 일치**: Database trigger는 database region과 일치 필수

이 문서는 SNS 프로젝트의 백그라운드 처리를 담당하는 Cloud Functions 개발 및 테스트 가이드입니다! 🚀

---

**Last Updated**: 2025-01-05
**Version**: 3.0.0 (리팩토링 및 Unit Test 추가)
**Author**: SNS 개발팀