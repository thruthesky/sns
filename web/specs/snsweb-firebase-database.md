---
name: snsweb
version: 1.0.0
description: Firebase Realtime Database 구조 가이드 문서의 SED 사양
author: JaeHo Song
email: thruthesky@gmail.com
homepage: https://github.com/thruthesky/
funding: ""
license: SED Specification License v1.0
dependencies: []
"프로젝트 이름": snsweb
---

## Overview
- 이 문서는 "Firebase Realtime Database 구조 가이드"에 대한 세부 사양을 정리하며, 기존 내용을 그대로 유지한 채 SED 구조에 맞춰 제공합니다.

## Requirements
- 문서 전반에 걸쳐 소개되는 지침과 참고 사항을 모두 숙지해야 하며, 별도의 추가 선행 조건은 원문 각 절에서 제시되는 내용을 따릅니다.

## Workflow
1. 아래 `## Detail Items` 절에 포함된 원문 목차를 검토합니다.
2. 필요한 경우 원문의 각 절을 순서대로 읽으며 프로젝트 작업 흐름에 반영합니다.
3. 문서에 명시된 모든 지침을 확인한 뒤 실제 개발 단계에 적용합니다.

## Detail Items
- 이하에는 기존 문서의 모든 내용을 원형 그대로 포함하여 참조할 수 있도록 구성했습니다.

# Firebase Realtime Database 구조 가이드

본 문서는 SNS 웹 애플리케이션의 Firebase Realtime Database 스키마 정의를 제공합니다.
각 기능의 상세한 구현 방법은 해당 가이드 문서를 참고하세요.

## 워크플로우

### 📋 문서의 범위

본 문서는 **데이터베이스 구조(스키마)와 구조에 대한 설명만** 포함합니다.

- ✅ **포함되는 내용**:
  - Firebase Realtime Database 경로 및 구조 정의
  - 각 필드의 타입 및 설명
  - 데이터 구조 예시
  - 클라이언트/백엔드 역할 구분 (어떤 필드를 누가 저장하는지)

- ❌ **포함되지 않는 내용**:
  - 구체적인 구현 코드 예제 (TypeScript, JavaScript)
  - 케이스별 상세 설명 및 사용 예시
  - API 함수 사용법

**구현 예제와 상세 설명**은 다음 개별 가이드 문서를 참고하세요:
- [Firebase Cloud Functions 개발 가이드](./sns-firebase-cloud-functions.md) - Cloud Functions 구현 예제
- [좋아요 개발 가이드](./sns-web-likes.md) - 좋아요 기능 구현 예제
- [댓글 개발 가이드](./sns-web-comments.md) - 댓글 기능 구현 예제
- [게시판 개발 가이드](./sns-web-post.md) - 게시판 기능 구현 예제

### 🔀 클라이언트와 백엔드의 데이터 책임 구분

**매우 중요**: DB 구조의 각 필드는 **클라이언트가 저장**하거나 **백엔드가 업데이트**하도록 명확히 구분되어 있습니다.

| 필드 유형 | 책임 주체 | 예시 필드 |
|----------|---------|----------|
| **사용자 입력 데이터** | 클라이언트만 저장 | `title`, `content`, `uid`, `createdAt` |
| **카운터 필드** | 백엔드만 업데이트 | `likeCount`, `commentCount`, `postCount` |
| **통계 및 집계** | 백엔드만 업데이트 | `/stats/counters/*`, `/categories/{category}/postCount` |
| **속성 분리 데이터** | 백엔드만 동기화 | `/user-props/displayName/{uid}` |

⚠️ **개발 시 필수 준수 사항**:
- 클라이언트는 **절대로** 카운터 필드를 직접 증가/감소시키지 않습니다
- 클라이언트는 **절대로** 통계 데이터를 직접 계산하여 저장하지 않습니다
- 백엔드(Cloud Functions)만이 카운터, 통계, 속성 분리 작업을 수행합니다

**⚠️ 중요 원칙**: 웹/앱 클라이언트에서는 **최소한의 정보만 RTDB에 기록**하고, **추가적인 정보 업데이트는 Firebase Cloud Functions 백엔드에서 처리**합니다.

### 클라이언트와 백엔드의 역할 분리

**클라이언트의 역할 (최소한의 데이터만 저장):**
- ✅ 사용자가 직접 입력한 데이터만 RTDB에 저장합니다 (예: 게시글 제목, 내용, 댓글 내용)
- ✅ 기본적인 메타데이터만 포함합니다 (예: uid, createdAt, category)
- ❌ 카운터 증가/감소를 직접 처리하지 않습니다 (예: likeCount, commentCount)
- ❌ 데이터 집계 및 통계를 직접 계산하지 않습니다 (예: stats/counters, categories)
- ❌ 속성 분리 작업을 직접 하지 않습니다 (예: user-props/)

**백엔드(Cloud Functions)의 역할 (자동 데이터 처리):**
- ✅ 클라이언트가 저장한 데이터를 감지하여 추가 데이터를 자동으로 업데이트합니다
- ✅ 카운터 자동 증가/감소 (예: likeCount, commentCount, postCount)
- ✅ 전체 통계 자동 집계 (예: stats/counters/like, stats/counters/post)
- ✅ 사용자 속성 분리 자동 동기화 (예: /users/{uid} → /user-props/displayName/{uid})
- ✅ 데이터 무결성 보장 (예: 게시글 삭제 시 관련 댓글/좋아요 정리)

**구체적인 예시**는 각 기능별 개발 가이드 문서를 참고하세요:
- [좋아요 개발 가이드 - 워크플로우 및 설계 원칙](./sns-web-likes.md#워크플로우-및-설계-원칙)
- [Firebase Cloud Functions 개발 가이드](./sns-firebase-cloud-functions.md)

이러한 역할 분리를 통해 다음과 같은 이점을 얻을 수 있습니다:
- 🔒 **데이터 무결성**: 백엔드에서 일관되게 처리하여 중복 증가/감소 방지
- ⚡ **성능 최적화**: 클라이언트는 단순 작업만 수행하여 빠른 응답
- 🔧 **유지보수성**: 비즈니스 로직이 백엔드에 집중되어 관리 용이
- 🌐 **플랫폼 독립성**: 웹/앱 모두 동일한 백엔드 로직 공유

- [Firebase Realtime Database 구조 가이드](#firebase-realtime-database-구조-가이드)
  - [워크플로우](#워크플로우)
    - [📋 문서의 범위](#-문서의-범위)
    - [🔀 클라이언트와 백엔드의 데이터 책임 구분](#-클라이언트와-백엔드의-데이터-책임-구분)
  - [클라이언트와 백엔드의 역할 분리](#클라이언트와-백엔드의-역할-분리)
  - [개요](#개요)
  - [데이터베이스 전체 구조](#데이터베이스-전체-구조)
  - [사용자 정보 (users)](#사용자-정보-users)
    - [데이터 구조](#데이터-구조)
    - [필드 설명](#필드-설명)
    - [클라이언트/서버 역할 분리](#클라이언트서버-역할-분리)
    - [관련 가이드](#관련-가이드)
  - [사용자 속성 분리 (user-props)](#사용자-속성-분리-user-props)
    - [데이터 구조](#데이터-구조-1)
    - [클라이언트/서버 역할 분리](#클라이언트서버-역할-분리-1)
    - [관련 가이드](#관련-가이드-1)
  - [게시판 (Posts)](#게시판-posts)
    - [데이터 구조](#데이터-구조-2)
    - [카테고리](#카테고리)
    - [클라이언트/서버 역할 분리](#클라이언트서버-역할-분리-2)
    - [관련 가이드](#관련-가이드-2)
  - [좋아요 (likes)](#좋아요-likes)
    - [데이터 구조](#데이터-구조-3)
    - [특징](#특징)
    - [클라이언트/서버 역할 분리](#클라이언트서버-역할-분리-3)
    - [관련 가이드](#관련-가이드-3)
  - [댓글 (Comments)](#댓글-comments)
    - [데이터 구조](#데이터-구조-4)
    - [order 필드 형식](#order-필드-형식)
    - [클라이언트/서버 역할 분리](#클라이언트서버-역할-분리-4)
    - [관련 가이드](#관련-가이드-4)
  - [통계 (stats)](#통계-stats)
    - [데이터 구조](#데이터-구조-5)
    - [동작 방식](#동작-방식)
      - [1. 게시글 생성 시 post 카운터 증가](#1-게시글-생성-시-post-카운터-증가)
      - [2. 게시글 삭제 시 post 카운터 감소](#2-게시글-삭제-시-post-카운터-감소)
      - [3. 댓글 생성 시 comment 카운터 증가](#3-댓글-생성-시-comment-카운터-증가)
      - [4. 댓글 삭제 시 comment 카운터 감소](#4-댓글-삭제-시-comment-카운터-감소)
    - [클라이언트/서버 역할 분리](#클라이언트서버-역할-분리-5)
    - [주의사항](#주의사항)
    - [관련 가이드](#관련-가이드-5)
  - [카테고리 통계 (categories)](#카테고리-통계-categories)
    - [데이터 구조](#데이터-구조-6)
    - [데이터 예시](#데이터-예시)
    - [Cloud Functions 동기화](#cloud-functions-동기화)
      - [1. 게시글 작성 시 postCount 증가](#1-게시글-작성-시-postcount-증가)
      - [2. 댓글 작성 시 commentCount 증가](#2-댓글-작성-시-commentcount-증가)
      - [3. 게시글 삭제 시 postCount 감소](#3-게시글-삭제-시-postcount-감소)
      - [4. 댓글 삭제 시 commentCount 감소](#4-댓글-삭제-시-commentcount-감소)
    - [클라이언트/서버 역할 분리](#클라이언트서버-역할-분리-6)
    - [주의사항](#주의사항-1)
    - [관련 가이드](#관련-가이드-6)
  - [친구 관계 (friends, followers, following)](#친구-관계-friends-followers-following)
    - [데이터 구조](#데이터-구조-7)
    - [설명](#설명)
    - [클라이언트/서버 역할 분리](#클라이언트서버-역할-분리-7)
    - [관련 가이드](#관련-가이드-7)
  - [주요 설계 원칙](#주요-설계-원칙)
    - [1. Flat Style 구조](#1-flat-style-구조)
    - [2. 속성 분리](#2-속성-분리)
    - [3. Cloud Functions 활용](#3-cloud-functions-활용)
    - [4. 보안 규칙](#4-보안-규칙)
  - [주의사항](#주의사항-2)
    - [Firebase Auth vs RTDB 필드명 차이](#firebase-auth-vs-rtdb-필드명-차이)
  - [관련 가이드 문서](#관련-가이드-문서)
  - [참고 자료](#참고-자료)


---

## 개요

- Firebase Realtime Database(RTDB)는 실시간 데이터 동기화가 필요한 SNS 웹 애플리케이션에 적합합니다.
- 데이터는 **flat style** 구조로 저장되어 쿼리 효율성을 극대화합니다.
- 애플리케이션에서는 필요한 최소한의 데이터만 저장하고, Firebase Cloud Functions를 사용하여 복잡한 데이터 처리 및 집계를 수행합니다.

---

## 데이터베이스 전체 구조

```
Firebase Realtime Database (루트)
├── users/                    # 사용자 프로필
├── user-props/               # 사용자 속성 (대량 쿼리 최적화)
├── posts/                    # 게시글
├── likes/                    # 게시글 및 댓글 좋아요 (통합)
├── comments/                 # 댓글
├── categories/               # 카테고리 통계 (Cloud Functions 관리)
├── friends/                  # 친구 관계
├── followers/                # 팔로워 (나를 팔로우하는 사용자)
└── following/                # 팔로잉 (내가 팔로우하는 사용자)
```

---

## 사용자 정보 (users)

사용자 프로필 정보는 `/users/<uid>/` 경로에 저장됩니다.

### 데이터 구조

```
/users/
├── <uid1>/
│   ├── displayName: "사용자1"
│   ├── photoUrl: "https://firebasestorage.googleapis.com/..."
│   ├── gender: "M"
│   ├── birthYear: 1990
│   ├── birthMonth: 1
│   ├── birthDay: 15
│   ├── bio: "자기소개"
│   ├── createdAt: 1698473000000
│   └── updatedAt: 1698474000000
└── <uid2>/
    ├── displayName: "사용자2"
    ├── photoUrl: null
    ├── gender: "F"
    ├── createdAt: 1698473100000
    └── updatedAt: 1698474100000
```

### 필드 설명

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| `displayName` | string | ✅ | 사용자 닉네임 |
| `photoUrl` | string | ❌ | 프로필 사진 URL |
| `gender` | (M|F) | ❌ | 성별 |
| `birthYear` | number | ❌ | 생년 |
| `birthMonth` | number | ❌ | 생월 |
| `birthDay` | number | ❌ | 생일 |
| `bio` | string | ❌ | 자기소개 |
| `createdAt` | number | ✅ | 계정 생성 시간 |
| `updatedAt` | number | ✅ | 프로필 수정 시간 |

### 클라이언트/서버 역할 분리

사용자 정보의 경우:
- **클라이언트는** `displayName`, `photoUrl`, `gender`, `birthYear`, `birthMonth`, `birthDay`, `bio` 를 저장할 수 있고,
- **서버는** `createdAt` 과 `updatedAt` 만 저장할 수 있습니다.

### ⚠️ 중요: Firebase Auth vs RTDB 필드

**/users/<uid> 노드에는 Firebase Auth 정보를 저장하지 않습니다:**

Firebase Authentication의 다음 필드들은 `/users/<uid>` 노드에 **저장하지 않습니다**:
- ❌ `phoneNumber` - Firebase Auth에서만 관리
- ❌ `email` - Firebase Auth에서만 관리
- ❌ `photoURL` (대문자 URL) - Firebase Auth에서만 관리

이들 정보는 `login` 인스턴스를 통해 접근할 수 있습니다. 자세한 사용법은 [코딩 가이드라인 - Firebase 로그인 사용자 관리](./sns-web-coding-guideline.md#firebase-로그인-사용자-관리-login)를 참고하세요.

**단, `photoUrl`(camelCase)은 예외입니다:**

- ✅ **`photoUrl`** (camelCase) - 사용자가 직접 업로드한 프로필 사진 URL을 RTDB에 저장
- 이는 Firebase Auth의 `photoURL`(대문자)과 **다른 필드**입니다
- 사용자가 Firebase Storage에 사진을 업로드하면, 다운로드 URL을 `/users/<uid>/photoUrl`에 저장합니다

**필드명 차이 요약:**

| 필드 | 위치 | 설명 |
|------|------|------|
| `phoneNumber` | Firebase Auth | 전화번호 (login.phoneNumber로 접근) |
| `email` | Firebase Auth | 이메일 (login.email로 접근) |
| `photoURL` (대문자) | Firebase Auth | Firebase Auth 프로필 사진 |
| `photoUrl` (camelCase) | RTDB | 사용자 업로드 프로필 사진 (login.data.photoUrl로 접근) |

자세한 내용은 [사용자 관리 개발 가이드](./sns-web-user.md)와 [코딩 가이드라인](./sns-web-coding-guideline.md#firebase-로그인-사용자-관리-login)을 참고하세요.

### 관련 가이드

- **📖 구현 가이드**: [사용자 관리 개발 가이드](./sns-web-user.md) - 프로필 관리, 프로필 사진 업로드, 사용자 정보 조회
- **📖 파일 업로드**: [파일 및 사진 업로드 가이드](./sns-web-storage.md) - 프로필 사진 Firebase Storage 업로드
- **📖 보안**: [Firebase 보안 규칙 개발 가이드](./sns-web-security.md) - 사용자 프로필 접근 제어

---

## 사용자 속성 분리 (user-props)

특정 속성에 대한 대량 조회를 효율적으로 수행하기 위해 사용자 속성을 별도로 관리합니다.

### 데이터 구조

```
/user-props/
  /displayName/
    ├── <uid1>: "사용자1"
    ├── <uid2>: "사용자2"
    └── <uid3>: "사용자3"
  /photoUrl/
    ├── <uid1>: "https://..."
    ├── <uid2>: null
    └── <uid3>: "https://..."
  /createdAt/
    ├── <uid1>: 1698473000000
    ├── <uid2>: 1698473100000
    └── <uid3>: 1698473200000
  /updatedAt/
    ├── <uid1>: 1698474000000
    ├── <uid2>: 1698474100000
    └── <uid3>: 1698474200000
```

### 클라이언트/서버 역할 분리

사용자 속성 분리의 경우:
- **클라이언트는** 직접 저장하지 않으며, `/users/<uid>` 노드의 필드를 수정합니다.
- **서버는** `/users/<uid>` 노드의 변경을 감지하여 `/user-props/displayName/<uid>`, `/user-props/photoUrl/<uid>` 등의 필드를 자동으로 동기화합니다. (Cloud Functions)

### 관련 가이드

- **📖 구현 가이드**: [사용자 관리 개발 가이드 - 사용자 속성 분리](./sns-web-user.md#사용자-속성-분리-user-props) - 속성 분리 전략, 효율적인 대량 조회 방법

---

## 게시판 (Posts)

게시글 데이터는 `/posts/` 경로에 flat style로 저장됩니다.

### 데이터 구조

```
/posts/
  <post-id>/
    ├── uid: "사용자 UID"
    ├── title: "게시글 제목"
    ├── content: "게시글 내용"
    ├── author: "작성자 displayName"
    ├── category: "community"  # community, qna, news, market
    ├── order: "community-1234567890"
    ├── createdAt: 1698473000000
    ├── updatedAt: 1698473000000
    ├── likeCount: 0  # Cloud Functions로 관리
    └── commentCount: 0  # Cloud Functions로 관리
```

### 카테고리

지원 카테고리: `community` (커뮤니티), `qna` (질문과 답변), `news` (뉴스), `market` (회원장터)

카테고리 상수 정의 및 사용법은 [게시판 개발 가이드](./sns-web-post.md)를 참고하세요.

### 클라이언트/서버 역할 분리

게시글의 경우:
- **클라이언트는** `uid`, `title`, `content`, `author`, `category`, `order`, `createdAt`, `updatedAt` 를 저장할 수 있고,
- **서버는** `likeCount`, `commentCount` 만 저장할 수 있습니다. (Cloud Functions가 자동으로 관리)

### 관련 가이드

- **📖 구현 가이드**: [게시판 개발 가이드](./sns-web-post.md) - 게시글 작성, 조회, 수정, 삭제, 카테고리 관리
- **📖 좋아요 기능**: [좋아요 개발 가이드](./sns-web-likes.md) - 게시글/댓글 좋아요 추가/취소, likeCount 관리
- **📖 보안 규칙**: [Firebase 보안 규칙 개발 가이드](./sns-web-security.md) - 게시판 접근 제어, 권한 관리

---

## 좋아요 (likes)

게시글과 댓글의 좋아요를 통합하여 단일 레벨 노드 구조로 관리합니다.

### 데이터 구조

```
/likes/
  ├── post-<post-id>-<uid>: 1    # 게시글 좋아요
  ├── post-<post-id>-<uid>: 1
  ├── comment-<comment-id>-<uid>: 1 # 댓글 좋아요
  ├── comment-<comment-id>-<uid>: 1
  └── ...
```

### 특징

- **통합 구조**: 게시글과 댓글의 좋아요를 하나의 `/likes/` 노드에서 통합 관리
- **키 형식**: `{type}-{nodeId}-{uid}` 형식으로 노드 타입과 ID를 명확하게 구분
  - 게시글 좋아요: `/likes/post-<post-id>-<uid>`
    - 형식 예: `post-abc123-user456`
  - 댓글 좋아요: `/likes/comment-<comment-id>-<uid>`
    - 형식 예: `comment-xyz789-user456`
  - 첫 번째 하이픈으로 타입(post/comment) 식별 가능
  - 두 번째 하이픈으로 nodeId(postId/commentId) 분리 가능
  - 마지막 부분은 사용자 UID
- **값**: 항상 1 (존재 여부로 판단)
- **likeCount 관리**: Cloud Functions에서 자동으로 각 게시글/댓글의 likeCount 갱신
  - likeId를 파싱하여 타입과 nodeId 추출 가능

### 클라이언트/서버 역할 분리

좋아요의 경우:
- **클라이언트는** `/likes/post-<post-id>-<uid>` 또는 `/likes/comment-<comment-id>-<uid>` 노드를 추가/삭제할 수 있고,
- **서버는** 해당 게시글 또는 댓글의 `likeCount` 필드를 자동으로 업데이트합니다. (Cloud Functions)

### 관련 가이드

- **📖 구현 가이드**: [좋아요 개발 가이드](./sns-web-likes.md) - 좋아요 추가/취소, 상태 확인, Cloud Functions 연동
- **📖 게시글**: [데이터베이스 구조 가이드 - 게시판](#게시판-posts) - 게시글 저장 구조
- **📖 댓글**: [데이터베이스 구조 가이드 - 댓글](#댓글-comments) - 댓글 저장 구조
- **📖 Cloud Functions**: [Firebase Cloud Functions 개발 가이드](./sns-firebase-cloud-functions.md) - likeCount 자동 관리

---

## 댓글 (Comments)

댓글은 트리 구조를 지원하여 최대 12단계까지 대댓글을 작성할 수 있습니다.

### 데이터 구조

```
/comments/
  <comment-id>/
    ├── postId: "게시글 ID"
    ├── uid: "작성자 UID"
    ├── content: "댓글 내용"
    ├── depth: 1  # 댓글 깊이 (1~12)
    ├── order: "<post-id>-00001,0000,000,..."  # postId 접두사가 포함된 정렬용 문자열
    ├── parentId: null  # 부모 댓글 ID (첫 레벨은 null)
    ├── likeCount: 0  # 좋아요 개수 (Cloud Functions로 관리)
    ├── createdAt: 1698473000000
    └── updatedAt: 1698473000000
```

### order 필드 형식

order 필드는 postId를 접두사로 포함하여, 특정 게시글의 댓글만을 효율적으로 조회할 수 있습니다.

```
"<post-id>-00001,0000,000,000,000,000,000,000,000,000,000,000"
 ^^^^^^^^^  ^^^^^  ^^^^  ^^^  ^^^  ^^^  ^^^  ^^^  ^^^  ^^^  ^^^  ^^^  ^^^
 postId     L0    L1    L2   L3   L4   L5   L6   L7   L8   L9   L10  L11
```

- **postId**: 게시글 ID (접두사)
- **구분자**: 하이픈(-)으로 postId와 레벨 구분
- **L0**: 5자리 (첫 번째 레벨 댓글)
- **L1**: 4자리 (두 번째 레벨)
- **L2~L11**: 3자리 (세 번째 레벨 이후)

**예시 (post-abc123 게시글의 댓글):**
```
post-abc123-00001,0000,000,...  # 첫 번째 댓글
post-abc123-00001,0001,000,...  # 첫 번째 댓글의 첫 번째 답글
post-abc123-00002,0000,000,...  # 두 번째 댓글
```

**쿼리 방법 및 구현 예제**는 [댓글 개발 가이드](./sns-web-comments.md)를 참고하세요.

**이점:**
- 단일 인덱스(`order`)만으로 효율적인 범위 쿼리 가능
- `parentId` 같은 추가 인덱스가 불필요
- Firebase가 자동으로 order 순서대로 정렬하여 반환
- 여러 게시글의 댓글이 같은 `/comments/` 노드에 저장되어도 postId로 구분 가능

### 클라이언트/서버 역할 분리

댓글의 경우:
- **클라이언트는** `postId`, `uid`, `content`, `depth`, `order`, `parentId`, `createdAt`, `updatedAt` 를 저장할 수 있고,
- **서버는** `likeCount` 만 저장할 수 있습니다. (Cloud Functions가 자동으로 관리)

### 관련 가이드

- **📖 구현 가이드**: [댓글 개발 가이드](./sns-web-comments.md) - 댓글 작성, 트리 구조, order 필드, 대댓글 구현
- **📖 댓글 좋아요**: [좋아요 개발 가이드](./sns-web-likes.md) - 댓글 좋아요 추가/취소, likeCount 관리
- **📖 Cloud Functions**: [Firebase Cloud Functions 개발 가이드](./sns-firebase-cloud-functions.md) - commentCount 자동 관리

---

## 통계 (stats)

전체 사용자, 글, 댓글, 좋아요의 총 개수를 추적합니다.
이 데이터는 **클라이언트에서 직접 수정하지 않으며**, **Firebase Cloud Functions에 의해 자동으로 관리**됩니다.

### 데이터 구조

```
/stats/
  /counters/
    ├── user: 42           # 전체 사용자 총 개수 (Cloud Functions 관리)
    ├── post: 128          # 전체 게시글 총 개수 (Cloud Functions 관리)
    ├── comment: 456       # 전체 댓글 총 개수 (Cloud Functions 관리)
    └── like: 1234         # 전체 좋아요 총 개수 (Cloud Functions 관리)
```

### 동작 방식

각 카운터는 Firebase Cloud Functions에 의해 자동으로 증가/감소됩니다:
- **user**: 사용자 등록 시 +1
- **post**: 게시글 생성 시 +1, 삭제 시 -1
- **comment**: 댓글 생성 시 +1, 삭제 시 -1
- **like**: 좋아요 추가 시 +1, 취소 시 -1

**구체적인 구현 예제**는 [Firebase Cloud Functions 개발 가이드](./sns-firebase-cloud-functions.md)의 "데이터베이스 트리거 구현 예제 > 전체 통계 (stats/counters) 관리" 섹션을 참고하세요.

### 클라이언트/서버 역할 분리

통계의 경우:
- **클라이언트는** 읽기만 가능하며, 직접 수정할 수 없습니다.
- **서버는** `user`, `post`, `comment`, `like` 카운터를 자동으로 관리합니다. (Cloud Functions)

### 주의사항

- ⚠️ **클라이언트에서 직접 수정 금지**: `stats` 노드는 Firebase Cloud Functions에 의해서만 수정됩니다
- ⚠️ **읽기 권한만 허용**: 모든 사용자가 글/댓글 통계를 조회할 수 있도록 보안 규칙 설정
- ✅ **increment() 사용**: 동시성 안전한 서버 측 증가 연산 사용
- ✅ **음수 방지**: 삭제 시에도 increment(-1)로 자동 관리

### 관련 가이드

- **📖 게시글 기능**: [게시판 개발 가이드](./sns-web-post.md) - 게시글 작성, 수정, 삭제
- **📖 댓글 기능**: [댓글 개발 가이드](./sns-web-comments.md) - 댓글 작성, 삭제
- **📖 Cloud Functions**: [Firebase Cloud Functions 개발 가이드](./sns-firebase-cloud-functions.md) - 트리거 함수 구현

---

## 카테고리 통계 (categories)

게시판 카테고리별 통계 정보(게시글 개수, 댓글 개수)를 관리합니다.
이 데이터는 **클라이언트에서 직접 수정하지 않으며**, **Firebase Cloud Functions에 의해 자동으로 관리**됩니다.

### 데이터 구조

```
/categories/
  <category-id>/
    ├── value: "community"      # 카테고리 값 (community, qna, news, market)
    ├── label: "커뮤니티"       # 카테고리 라벨
    ├── postCount: 42           # 해당 카테고리의 총 게시글 수 (Cloud Functions 관리)
    └── commentCount: 156       # 해당 카테고리의 총 댓글 수 (Cloud Functions 관리)
```

### 데이터 예시

```json
{
  "categories": {
    "community": {
      "value": "community",
      "label": "커뮤니티",
      "postCount": 42,
      "commentCount": 156
    },
    "qna": {
      "value": "qna",
      "label": "질문과답변",
      "postCount": 28,
      "commentCount": 89
    },
    "news": {
      "value": "news",
      "label": "뉴스",
      "postCount": 15,
      "commentCount": 32
    },
    "market": {
      "value": "market",
      "label": "회원장터",
      "postCount": 19,
      "commentCount": 45
    }
  }
}
```

### Cloud Functions 동기화

각 카테고리의 통계는 Firebase Cloud Functions에 의해 자동으로 업데이트됩니다:
- **postCount**: 게시글 작성 시 +1, 삭제 시 -1
- **commentCount**: 댓글 작성 시 +1, 삭제 시 -1

**구체적인 구현 예제**는 [Firebase Cloud Functions 개발 가이드](./sns-firebase-cloud-functions.md)의 "데이터베이스 트리거 구현 예제 > 카테고리 통계 (categories) 관리" 섹션을 참고하세요.

### 클라이언트/서버 역할 분리

카테고리 통계의 경우:
- **클라이언트는** 읽기만 가능하며, 직접 수정할 수 없습니다.
- **서버는** `value`, `label`, `postCount`, `commentCount` 필드를 자동으로 관리합니다. (Cloud Functions)

### 주의사항

- ⚠️ **클라이언트에서 직접 수정 금지**: `categories` 노드는 Firebase Cloud Functions에 의해서만 수정됩니다
- ⚠️ **읽기 권한만 허용**: 모든 사용자가 카테고리 통계를 조회할 수 있도록 보안 규칙 설정
- ✅ **트랜잭션 사용**: 동시성 문제 방지를 위해 `transaction()`을 사용합니다
- ✅ **음수 방지**: 삭제 시 `Math.max(0, ...)`으로 음수 방지

### 관련 가이드

- **📖 게시글 기능**: [게시판 개발 가이드](./sns-web-post.md) - 게시글 작성, 수정, 삭제
- **📖 댓글 기능**: [댓글 개발 가이드](./sns-web-comments.md) - 댓글 작성, 삭제
- **📖 Cloud Functions**: [Firebase Cloud Functions 개발 가이드](./sns-firebase-cloud-functions.md) - 트리거 함수 구현
- **📖 보안 규칙**: [Firebase 보안 규칙 개발 가이드](./sns-web-security.md) - categories 읽기 권한 설정

---

## 친구 관계 (friends, followers, following)

사용자 간의 관계를 관리합니다.

### 데이터 구조

```
/friends/
  <uid>/
    ├── <other-uid1>: 1698473000000
    ├── <other-uid2>: 1698473100000
    └── ...

/followers/
  <uid>/
    ├── <follower-uid1>: 1698473000000
    └── ...

/following/
  <uid>/
    ├── <following-uid1>: 1698473000000
    └── ...
```

### 설명

- **friends**: 상호 친구 관계 (양방향)
- **followers**: 나를 팔로우하는 사용자 (단방향 수신)
- **following**: 내가 팔로우하는 사용자 (단방향 발신)
- 각 값은 관계 형성 시간 (Unix timestamp, 밀리초)

### 클라이언트/서버 역할 분리

친구 관계의 경우:
- **클라이언트는** `/friends/<uid>/<other-uid>`, `/followers/<uid>/<follower-uid>`, `/following/<uid>/<following-uid>` 노드를 추가/삭제하여 친구 관계를 요청할 수 있고,
- **서버는** 친구 추가/삭제 시 양방향 관계 동기화를 자동으로 처리합니다. (Cloud Functions)
  - 예: A가 B를 팔로우하면 `/following/<A-uid>/<B-uid>`와 `/followers/<B-uid>/<A-uid>`가 모두 업데이트됨

### 관련 가이드

- **📖 구현 가이드**: [친구 관계 관리 개발 가이드](./sns-web-friends.md) - 친구 추가, 팔로우, 언팔로우, 친구 목록 조회
- **📖 사용자 정보**: [사용자 관리 개발 가이드](./sns-web-user.md) - 사용자 프로필 조회, 기본 정보
- **📖 보안 규칙**: [Firebase 보안 규칙 개발 가이드](./sns-web-security.md) - 친구 관계 접근 제어

---

## 주요 설계 원칙

### 1. Flat Style 구조

- 데이터를 단순하고 평탄한 구조로 저장
- 복잡한 다단계 노드 구조 회피
- 쿼리 효율성과 성능 극대화

### 2. 속성 분리

- 특정 속성에 대한 대량 조회가 필요한 경우 별도 경로에서 관리
- 예: `user-props/displayName`
- 네트워크 최적화 및 쿼리 성능 향상

### 3. Cloud Functions 활용

클라이언트와 백엔드의 역할을 명확히 분리하여 데이터 무결성과 성능을 보장합니다.

**원칙:**
- ✅ **클라이언트는 최소한의 데이터만 RTDB에 기록**
  - 사용자가 직접 입력한 데이터 (게시글, 댓글 내용 등)
  - 기본 메타데이터 (uid, createdAt, category)
- ✅ **백엔드(Cloud Functions)는 추가 데이터 자동 처리**
  - 카운터 자동 증가/감소 (likeCount, commentCount, postCount)
  - 전체 통계 자동 집계 (stats/counters)
  - 사용자 속성 분리 자동 동기화 (user-props)
  - 데이터 무결성 보장

**클라이언트에서 하지 말아야 할 작업:**
- ❌ 카운터 직접 증가/감소 (`increment()` 사용 금지)
- ❌ 데이터 집계 및 통계 직접 계산
- ❌ 속성 분리 작업 직접 수행
- ❌ 복잡한 비즈니스 로직 처리

**구체적인 예시와 구현 방법은 각 기능별 개발 가이드 문서를 참고하세요:**
- [좋아요 개발 가이드](./sns-web-likes.md) - 좋아요 기능 클라이언트/백엔드 역할 구분 예시
- [댓글 개발 가이드](./sns-web-comments.md) - 댓글 기능 구현 예시
- [게시판 개발 가이드](./sns-web-post.md) - 게시판 기능 구현 예시
- [Firebase Cloud Functions 개발 가이드](./sns-firebase-cloud-functions.md) - 백엔드 로직 구현 상세 가이드

### 4. 보안 규칙

- Firebase Security Rules로 접근 권한 제어
- 각 데이터 섹션별로 읽기/쓰기 권한 정의
- 데이터 검증 규칙 포함

---

## 주의사항

### Firebase Auth vs RTDB 필드명 차이

**프로필 사진 필드명이 다릅니다:**
- **Firebase Auth**: `photoURL` (대문자 URL)
- **RTDB**: `photoUrl` (camelCase url)

자세한 내용과 구현 예제는 [사용자 관리 개발 가이드](./sns-web-user.md) 및 [코딩 가이드라인 - Firebase Auth vs RTDB 필드명 차이](../CLAUDE.md#firebase-auth-vs-rtdb-필드명-차이-매우-중요)를 참고하세요.

---

## 관련 가이드 문서

전체 데이터베이스 구조와 관련된 상세한 개발 가이드:

- **[사용자 관리](./sns-web-user.md)** - 사용자 프로필, 속성 분리, Cloud Functions
- **[게시판](./sns-web-post.md)** - 게시글 작성, 수정, 삭제
- **[좋아요](./sns-web-likes.md)** - 게시글/댓글 좋아요 기능, Cloud Functions 연동
- **[댓글](./sns-web-comments.md)** - 댓글 트리 구조, order 필드, 대댓글
- **[카테고리 통계](#카테고리-통계-categories)** - 게시글/댓글 개수 자동 관리, Cloud Functions 트리거
- **[친구 관계](./sns-web-friends.md)** - 친구, 팔로우, 팔로워 관리
- **[Firebase 보안](./sns-web-security.md)** - 보안 규칙 설정

---

## 참고 자료

- [Firebase Realtime Database 공식 문서](https://firebase.google.com/docs/database)
- [Firebase Security Rules 공식 문서](https://firebase.google.com/docs/rules)
- [Firebase Cloud Functions 공식 문서](https://firebase.google.com/docs/functions)
