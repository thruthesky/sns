---
name: snsweb
version: 1.0.0
description: snsweb 프로젝트 사양 색인 문서의 SED 사양
author: JaeHo Song
email: thruthesky@gmail.com
homepage: https://github.com/thruthesky/
funding: ""
license: SED Specification License v1.0
dependencies: []
"프로젝트 이름": snsweb
---

## Overview
- snsweb 프로젝트 전반의 사양 문서를 체계적으로 탐색하기 위한 중앙 색인이며, 각 문서의 주제와 활용 맥락을 신속하게 파악할 수 있도록 정리했습니다.

## Requirements
- DTOC에 열거된 문서가 최신 상태로 저장소에 존재해야 하며, 링크 탐색이 가능한 Markdown 렌더러 또는 편집기를 사용해야 합니다.
- 각 문서의 세부 요구사항을 적용하기 전에 관련 선행 문서와 의존성을 반드시 확인해야 합니다.

## Workflow
1. 아래 DTOC 표에서 필요한 사양 문서를 식별합니다.
2. 해당 링크를 열어 문서를 정독하고, 문서에 정의된 요구사항과 절차를 프로젝트 작업 항목에 반영합니다.
3. 관련 문서를 모두 검토한 뒤 개발·테스트·배포 단계별 체크리스트를 갱신하고, 미충족 항목이 없는지 검증합니다.

## Detail Items
- 아래 표는 snsweb 프로젝트 사양 모음의 DTOC이며, 각 문서의 주제와 핵심 확인 포인트를 한눈에 제공합니다.
- 표 이후에는 기존 색인 문서를 원문 그대로 수록하여 상세 안내와 외부 참조 링크를 확인할 수 있습니다.

| 문서 | 주요 주제 | 핵심 포인트 |
| --- | --- | --- |
| [snsweb-deploy-overview.md](snsweb-deploy-overview.md) | 배포 및 운영 개요 | 배포 환경 구성, 모니터링, 백업 정책을 종합적으로 설명 |
| [snsweb-development-codingguideline.md](snsweb-development-codingguideline.md) | 코딩 가이드라인 | Firebase, 타입 네이밍, 컴포넌트 구성에 대한 코딩 규칙 제공 |
| [snsweb-development-quickstart.md](snsweb-development-quickstart.md) | 개발 빠른 시작 | 로컬 개발 환경 준비와 초기 실행 절차 안내 |
| [snsweb-development-workflow.md](snsweb-development-workflow.md) | 개발 워크플로우 | SED 절차에 맞춘 단계별 개발 흐름과 협업 규칙 정의 |
| [snsweb-firebase-cloudfunctions.md](snsweb-firebase-cloudfunctions.md) | Firebase 클라우드 함수 | 핸들러 구조, 배포 전략, 테스트 요구사항 명시 |
| [snsweb-firebase-database.md](snsweb-firebase-database.md) | Firebase 데이터베이스 | 데이터 구조, 인덱스, 트랜잭션 처리 지침 포함 |
| [snsweb-firebase-security.md](snsweb-firebase-security.md) | 보안 규칙 | Realtime Database 보안 규칙 작성 원칙과 검증 절차 |
| [snsweb-firebase-storage.md](snsweb-firebase-storage.md) | 스토리지 사양 | 파일 업로드 정책, 권한 설정, 용량 관리 기준 제시 |
| [snsweb-forum-overview.md](snsweb-forum-overview.md) | 포럼 개요 | 게시글, 댓글, 좋아요 등 포럼 기능 전반 구조 설명 |
| [snsweb-forum-comments.md](snsweb-forum-comments.md) | 포럼 댓글 | 댓글 작성, 수정, 삭제 플로우와 검증 로직 정의 |
| [snsweb-forum-likes.md](snsweb-forum-likes.md) | 포럼 좋아요 | 좋아요 토글, 집계, 알림 처리 흐름 구체화 |
| [snsweb-friends-overview.md](snsweb-friends-overview.md) | 친구 기능 개요 | 친구 요청, 승인, 차단 및 목록 관리 요건 |
| [snsweb-i18n-overview.md](snsweb-i18n-overview.md) | 다국어 지원 | i18n 구성 전략과 번역 리소스 관리 지침 |
| [snsweb-production-customelements.md](snsweb-production-customelements.md) | 프로덕션 커스텀 엘리먼트 | Custom Elements 배포 및 최적화 정책 |
| [snsweb-test-overview.md](snsweb-test-overview.md) | 테스트 개요 | 단위, 통합, E2E 테스트 전략과 커버리지 목표 |
| [snsweb-user-overview.md](snsweb-user-overview.md) | 사용자 관리 | 회원 가입, 인증, 권한 관리 시나리오 정리 |

아래부터는 기존 문서 전문입니다.

SNS 웹 개발 지침
- 본 문서는 SNS 웹 개발에 관한 지침을 제공하며, 개발 할 때, 반드시 따라야 할 규칙과 예제를 포함하므로, 본 문서를 따라서 개발을 진행해야 합니다.
- 반드시 아래의 [워크플로우](#워크플로우)를 따라야 합니다.

# 워크플로우
- [ ] 웹 개발 할 때에는 항상(반드시) [SNS 커스텀 엘리먼트 개발 지침](./sns-custom-elements.md) 문서를 참고 해야 하며 개발자에게 이 문서를 참고한다고 알려줍니다.
- [ ] **Firebase 데이터베이스를 사용할 때에는 반드시** [Firebase 보안 규칙 개발 가이드](./sns-web-security.md) 문서를 참고 해야 합니다. AppCheck는 비용이 매우 비싸므로 완전한 Security Rules를 구현해야 합니다.
- [ ] CSS 스타일 디자인 할 때에는 반드시, Tailwind CSS를 사용해야 한다.
  - [ ] 이 때, `class="..."` 방식으로 스타일을 지정하지 않으며, `<style>` 태그 내에서 Tailwind 지시자를 사용하여 스타일을 지정해야 합니다. 아래의 [CSS 디자인](#css-디자인) 섹션을 참고하세요.
  - [ ] 만약, `class="..."` 방식으로 된 스타일이 있다면, 반드시 이를 `<style>` 태그 내의 Tailwind 지시자로 변경해야 합니다.

---

## 기술 스택

**플랫폼**: Svelte 5 (버전: `svelte@5.43.2`)

- **개발 방식**: Svelte + Vite 라이브러리 모드
- **빌드 설정**: `customElement: true` 방식으로 Web Components 생성
- **CSS**: Tailwind CSS
- **아이콘**: lucide-svelte (https://lucide.dev/guide/packages/lucide-svelte)
- **목적**: www.philgo.com 및 www.sonub.com 등 다양한 Philgo 플랫폼에서 **동일한 컴포넌트 공유 및 재사용**

---

## 관련 문서

- [SNS 프로젝트 전체 개요](../../specs/sns.md) - 서비스 기획 및 전체 개요
- [Svelte Custom Elements 개발 가이드](./sns-custom-elements.md) - Custom Elements 개발 상세 가이드
- [Firebase 보안 규칙 개발 가이드](./sns-web-security.md) - Firebase Security Rules 구현 (AppCheck 비용 절감, **필수**)
- [프로젝트 개발 지침](../CLAUDE.md) - 전체 프로젝트 개발 워크플로우 및 규칙
- [웹 프로젝트 README](../README.md) - 웹 프로젝트 사용법 및 설정

### 외부 문서
- [Svelte 5 Custom Elements 공식 문서](https://svelte.dev/docs/svelte/custom-elements)
- [Svelte MCP 문서](https://svelte.dev/docs/mcp/overview)
- [Firebase Security Rules 공식 문서](https://firebase.google.com/docs/database/security)



## CSS 디자인
- Tailwind CSS를 사용하여 스타일을 지정합니다.
- 스타일 지정은 반드시 `<style>` 태그 내에서 Tailwind 지시자를 사용하여 지정해야 합니다.
- 예제:

```svelte
<style>
  .example {
    @apply text-lg font-bold text-blue-500;
  }
</style>

<div class="example">
  Tailwind CSS를 사용한 예제입니다.
</div>
```

---

# 상세한 개발 문서 레퍼런스

이 섹션은 각 개발 문서의 포함 내용과 참고 시점을 상세하게 설명합니다.

## 📚 전체 프로젝트 문서

### [../specs/sns.md](../../specs/sns.md) - SNS 프로젝트 전체 개요 및 기획

**포함 내용**:
- 로컬 기반 소셜 모임 서비스의 전체 컨셉 및 목적
- 핵심 가치 및 서비스 차별화 포인트
- 주요 기능 명세 (친구 관리, 로컬 채팅, 글/사진 공유, 실시간 알림)
- 기술 스택 선정 이유 (Svelte 5, Firebase, Flutter)
- 개발 원칙 및 가이드라인
- 사용자 플로우 및 실시간 기능 구현 방식

**참고 시점**:
- ✅ 프로젝트 전체 목표와 방향성을 이해하고자 할 때
- ✅ 새로운 기능 기획 시 서비스 컨셉과 일치하는지 확인할 때
- ✅ 기술 스택 선정 배경을 이해하고자 할 때
- ✅ 웹/앱 개발 전에 전체 프로젝트 맥락을 파악할 때

---

## 🌐 웹 개발 문서

### [snsweb-index.md](snsweb-index.md) - snsweb 프로젝트 사양 색인 (본 문서)

**포함 내용**:
- 모든 개발 문서의 DTOC (Document Table of Contents) 표
- 각 문서의 주요 주제 및 핵심 포인트 요약
- 개발 시작 시 권장 문서 읽기 순서
- 상황별 참고 문서 매핑 표
- 각 문서의 포함 내용 및 참고 시점
- 문서 간 의존성 및 참조 관계

**참고 시점**:
- ✅ **모든 개발 작업 전에 필수로 확인**
- ✅ 필요한 문서 또는 기술 내용을 찾을 때
- ✅ 개발 워크플로우를 계획할 때

### [snsweb-development-workflow.md](snsweb-development-workflow.md) - 개발 워크플로우

**포함 내용**:
- SED 절차에 맞춘 단계별 개발 흐름
- 협업 규칙 정의
- Git 워크플로우
- 코드 리뷰 프로세스
- 배포 전 체크리스트

**참고 시점**:
- ✅ 새로운 기능 개발을 시작할 때
- ✅ 팀 협업 규칙을 확인할 때
- ✅ Git 브랜치 전략을 수립할 때

### [snsweb-development-quickstart.md](snsweb-development-quickstart.md) - 개발 빠른 시작

**포함 내용**:
- 로컬 개발 환경 준비
- Node.js, 패키지 설치
- 프로젝트 구조 설명 (`web/src/lib/`, `web/src/demo/`)
- Firebase 설정 방법 (`.env` 파일 구성)
- 개발 서버 실행 및 핫 리로드
- 빌드 및 미리보기 명령어
- 주요 파일 및 폴더 역할 설명

**참고 시점**:
- ✅ **처음 프로젝트를 세팅할 때 가장 먼저 참고**
- ✅ 개발 환경을 새로 구축해야 할 때
- ✅ 다른 개발자에게 프로젝트 시작 방법을 안내할 때
- ✅ Firebase 초기 설정이 필요할 때

### [snsweb-development-codingguideline.md](snsweb-development-codingguideline.md) - 코딩 가이드라인

**포함 내용**:
- 아이콘 사용 가이드라인 (lucide-svelte)
- Firebase Realtime Database 코딩 규칙
- 타입 네이밍 규칙
- `createRealtimeStore()` 함수형 API 사용법
- Firebase Server Values (`increment`, `serverTimestamp`)
- Firebase 로그인 사용자 관리 (`login`)
- `DatabaseListView` 컴포넌트 사용법
- 무한 스크롤 구현 방법
- 반응형 상태 관리 패턴
- 프로젝트 디렉토리 구조

**참고 시점**:
- ✅ **모든 웹 개발 작업 시 참고해야 하는 핵심 문서**
- ✅ 아이콘을 사용할 때
- ✅ Firebase 데이터베이스 작업을 할 때
- ✅ 무한 스크롤 리스트를 구현할 때
- ✅ 로그인 사용자 정보를 관리할 때
- ✅ 반응형 상태를 구현할 때

### [snsweb-production-customelements.md](snsweb-production-customelements.md) - 프로덕션 커스텀 엘리먼트

**포함 내용**:
- Custom Elements 배포 정책
- 최적화 기법
- 번들 크기 최적화
- 브라우저 호환성

**참고 시점**:
- ✅ Custom Element 컴포넌트를 개발할 때
- ✅ Svelte 5 Runes 사용법을 확인할 때
- ✅ Firebase 연동 방법을 구현할 때
- ✅ Web Components의 props, 이벤트, 슬롯 처리 방법을 찾을 때

### [snsweb-firebase-database.md](snsweb-firebase-database.md) - Firebase 데이터베이스

**포함 내용**:
- Firebase Realtime Database 전체 구조 정의
- 사용자 정보 데이터 구조 (`/users/`, `/user-props/`)
- 사용자 속성 분리 전략 및 효율적인 데이터 조회
- **게시판 데이터 구조** (`/posts/{category}/{postId}`)
  - 카테고리별 게시글 저장 (community, qna, news, market)
  - 게시글 필드: uid, title, content, author, category, createdAt, updatedAt
  - 카테고리 상수 정의 (FORUM_CATEGORIES)
- 친구 관계 데이터 구조 (`/friends/`, `/followers/`, `/following/`)
- Cloud Functions를 통한 데이터 동기화

**참고 시점**:
- ✅ **데이터베이스 구조를 확인하거나 설계할 때 필수로 참고**
- ✅ 새로운 데이터 경로를 추가할 때
- ✅ Firebase Realtime Database 쿼리를 작성할 때
- ✅ 게시판 기능을 개발할 때
- ✅ 사용자 속성을 효율적으로 조회해야 할 때
- ✅ 친구 관계 기능을 구현할 때

### [snsweb-firebase-security.md](snsweb-firebase-security.md) - 보안 규칙

**포함 내용**:
- AppCheck의 비용 문제 및 보안 규칙 필요성
- Firebase Security Rules 개요 및 권한 조건
- Realtime Database 보안 규칙 구현 방법
- 인증 기반 접근 제어 (Authentication-based Access Control)
- 필드 검증 및 데이터 무결성 보장
- 보안 규칙 배포 및 테스트 방법
- Rate Limiting 및 악의적 요청 차단 전략
- 비용 최적화 기법

**참고 시점**:
- ✅ **Firebase 보안을 설계할 때 필수로 참고**
- ✅ 새로운 데이터 경로를 생성할 때
- ✅ AppCheck의 비용 문제를 이해하고자 할 때
- ✅ 악의적 요청으로부터 보호해야 할 때
- ✅ 사용자별 권한 제어를 구현할 때
- ✅ 데이터 검증 규칙을 작성할 때
- ✅ 프로덕션 환경에 배포하기 전에

### [snsweb-firebase-storage.md](snsweb-firebase-storage.md) - 스토리지 사양

**포함 내용**:
- Firebase Storage를 사용한 파일 업로드 구현 방법
- 프로필 사진, 게시물 이미지 등 파일 업로드 처리
- Firebase Storage 보안 규칙 설정
- 사용자별 파일 업로드 경로 관리 (`/users/{userId}/`)
- 업로드된 파일 URL을 Realtime Database에 저장
- 파일 접근 권한 제어 (사용자 쓰기, 전체 읽기)
- 클라이언트 측 파일 검증 및 에러 처리

**참고 시점**:
- ✅ **파일 및 사진 업로드 기능을 구현할 때 필수로 참고**
- ✅ 프로필 사진 업로드 기능을 추가할 때
- ✅ 게시물 이미지 업로드를 구현할 때
- ✅ Firebase Storage 보안 규칙을 설정할 때
- ✅ 파일 접근 권한을 제어해야 할 때
- ✅ 업로드된 파일 URL을 데이터베이스에 저장할 때

### [snsweb-forum-overview.md](snsweb-forum-overview.md) - 포럼 개요

**포함 내용**:
- 게시판 주요 기능 (글 작성, 목록, 수정, 삭제)
- 데이터베이스 구조 레퍼런스
- 카테고리 관리 및 사용 방법
- API 함수 구현 (`createPost`, `listenToPosts`, `updatePost`, `deletePost`)
- ForumPost 타입 정의
- 페이지 구조 및 컴포넌트 구현
- Svelte 5 Runes를 사용한 상태 관리
- 실시간 게시글 리스너 구현
- 글쓰기 모달 다이얼로그
- Firebase 보안 규칙 (게시판용)
- 향후 개발 계획 (댓글, 좋아요, 검색, 이미지 업로드 등)

**참고 시점**:
- ✅ **게시판 기능을 개발할 때 필수로 참고**
- ✅ 새로운 게시글 작성 기능을 구현할 때
- ✅ 게시글 목록을 표시할 때
- ✅ 실시간 게시글 동기화를 구현할 때
- ✅ 게시판 API 함수를 작성할 때
- ✅ 카테고리별 게시글을 관리할 때
- ✅ 게시글 수정/삭제 기능을 추가할 때

### [snsweb-forum-comments.md](snsweb-forum-comments.md) - 포럼 댓글

**포함 내용**:
- 댓글 트리 구조 (스레딩) 구현 방법
- 댓글/대댓글 데이터 구조 및 필드 설명
- `order` 필드를 사용한 트리 구조 평탄화 및 정렬
- 댓글 API 함수 구현 (`createComment`, `createReply`, `listenToComments`)
- 첫 번째 레벨 댓글과 자식 댓글(대댓글) 작성
- 댓글 작성자 정보 조회
- 댓글 좋아요 기능 (`comment-props`)
- Firebase 보안 규칙 (댓글용)
- 최대 깊이 12단계 지원

**참고 시점**:
- ✅ **댓글 및 대댓글 기능을 개발할 때 필수로 참고**
- ✅ 트리 구조 댓글을 구현할 때
- ✅ 댓글 정렬 로직을 작성할 때
- ✅ 댓글 작성/조회 API를 구현할 때
- ✅ 댓글 UI 컴포넌트를 작성할 때

### [snsweb-forum-likes.md](snsweb-forum-likes.md) - 포럼 좋아요

**포함 내용**:
- 게시글/댓글 좋아요 통합 구조
- 단일 레벨 노드 구조 (`/likes/post-{postId}-{uid}`)
- 클라이언트와 백엔드(Cloud Functions) 역할 구분
- 좋아요 추가/취소 API 함수 구현
- `likeCount` 자동 증감 (Cloud Functions)
- 실시간 좋아요 상태 추적
- Firebase 보안 규칙 (좋아요용)
- 전체 통계 자동 집계 (`stats/counters/like`)

**참고 시점**:
- ✅ **좋아요 기능을 개발할 때 필수로 참고**
- ✅ 게시글/댓글 좋아요 UI를 구현할 때
- ✅ 좋아요 API 함수를 작성할 때
- ✅ 좋아요 통계를 표시할 때
- ✅ Cloud Functions와 연동할 때

### [snsweb-friends-overview.md](snsweb-friends-overview.md) - 친구 기능 개요

**포함 내용**:
- 친구/팔로워/팔로잉 데이터 구조
- 상호 친구 관계 vs 단방향 팔로우
- 친구 관계 API 함수 구현
- `/friends/`, `/followers/`, `/following/` 경로 관리
- 양방향 친구 요청 및 수락 로직
- 팔로우/언팔로우 기능
- Firebase 보안 규칙 (친구 관계용)
- Cloud Functions를 통한 데이터 동기화

**참고 시점**:
- ✅ **친구/팔로우 기능을 개발할 때 필수로 참고**
- ✅ 친구 요청 UI를 구현할 때
- ✅ 팔로워/팔로잉 목록을 표시할 때
- ✅ 친구 관계 API를 작성할 때
- ✅ 친구 관계 동기화를 구현할 때

### [snsweb-i18n-overview.md](snsweb-i18n-overview.md) - 다국어 지원

**포함 내용**:
- 국제화(i18n) 개요 및 지원 언어 (한국어, 영어, 일본어, 중국어)
- 다국어 지원 전략 (자동 감지, 수동 선택, 언어 파일 관리)
- i18n 프로젝트 구조 및 파일 구성
- 언어별 JSON 번역 파일 작성 방법
- i18n 로직 구현 (`createI18n`, `detectLocale`, `normalize`)
- 번역 함수 사용법 및 변수 치환
- Svelte Custom Element에서 i18n 사용 예시
- HTML에서 `lang` 속성으로 언어 전달
- 동적 언어 변경 구현 (언어 선택기)

**참고 시점**:
- ✅ **다국어 지원을 구현할 때 필수로 참고**
- ✅ 번역 문자열을 추가하거나 수정할 때
- ✅ 새로운 언어를 추가할 때
- ✅ Custom Element에 i18n을 통합할 때
- ✅ 언어 선택기 UI를 구현할 때
- ✅ 브라우저 언어 자동 감지 로직을 이해하고자 할 때

### [snsweb-test-overview.md](snsweb-test-overview.md) - 테스트 개요

**포함 내용**:
- 단위, 통합, E2E 테스트 전략
- 커버리지 목표
- 테스트 프레임워크 설정
- 테스트 작성 가이드

**참고 시점**:
- ✅ 테스트 코드를 작성할 때
- ✅ CI/CD 파이프라인을 구축할 때

### [snsweb-user-overview.md](snsweb-user-overview.md) - 사용자 관리

**포함 내용**:
- 사용자 프로필 데이터 구조 및 필드 정의
  - Firebase Realtime Database 스키마 (displayName, email, photoURL, gender, dateOfBirth, bio, createdAt, score)
  - 각 필드의 타입 및 필수 여부
- 프로필 사진 업로드 구현
  - Firebase Storage 저장소 경로 규칙 (`/users/{userId}/profile/`)
  - 다운로드 URL을 `/users/{userId}/photoURL`에 저장
  - 파일 유효성 검사 (크기, MIME 타입)
  - 미리보기 생성 및 표시
- Svelte 컴포넌트 구현 예제 (UserProfile.svelte)
- 사용자 정보 조회 및 업데이트 (get, onValue)
- 사용자 데이터 검증 (클라이언트 사이드)
- Firebase 보안 규칙 (자신의 프로필만 수정 가능)
- 에러 처리 및 권장사항

**참고 시점**:
- ✅ **사용자 프로필 관리 기능을 구현할 때 필수로 참고**
- ✅ 프로필 사진 업로드 기능을 추가할 때
- ✅ 사용자 정보를 Realtime Database에 저장할 때
- ✅ 프로필 수정 페이지를 만들 때
- ✅ 사용자별 프로필 보안 규칙을 설정할 때
- ✅ 사용자 정보 검증을 구현할 때

### [snsweb-deploy-overview.md](snsweb-deploy-overview.md) - 배포 및 운영 개요

**포함 내용**:
- 배포 전 체크리스트
- 프로젝트 빌드 프로세스 상세 설명
  - 라이브러리 빌드 (`build:lib`) - Web Components 번들 생성
  - 데모 앱 빌드 (`build:demo`) - HTML, JS, CSS 생성
- 빌드 흐름도 및 파일 변환 과정
- 최종 빌드 결과물 구조
- GitHub Pages 배포 방법 (수동 배포 / gh-pages 패키지 / GitHub Actions 자동 배포)
- 문제 해결 가이드 (빌드 실패, 404 에러, 환경 변수 등)
- 추가 배포 옵션 (Vercel, Netlify)

**참고 시점**:
- ✅ 프로젝트를 프로덕션 환경에 배포할 때
- ✅ 빌드 명령어와 결과물을 이해하고자 할 때
- ✅ GitHub Pages, Vercel, Netlify 등에 배포할 때
- ✅ GitHub Actions CI/CD 자동 배포를 설정할 때
- ✅ 빌드 관련 문제를 해결해야 할 때
- ✅ 환경 변수 설정 방법을 확인할 때

---

## 🔥 Firebase Cloud Functions 개발 문서

### [snsweb-firebase-cloudfunctions.md](snsweb-firebase-cloudfunctions.md) - Firebase 클라우드 함수

**포함 내용**:
- Cloud Functions 개발 환경 설정
- 코드 작성 지침 및 프로젝트 구조
- `index.ts` 파일 상세 가이드
- Configuration 관리 (`getConfig`)
- Global Options 설정
- Firebase Admin 초기화
- 데이터베이스 트리거 구현 예제
- 전체 통계 (`stats/counters`) 관리
- 카테고리 통계 (`categories`) 관리
- Unit Test 및 Integration Test 가이드
- 설계 철학 및 주의사항

**참고 시점**:
- ✅ **Firebase Cloud Functions 개발 시 필수로 참고**
- ✅ 서버리스 백엔드 로직을 구현할 때
- ✅ 데이터베이스 트리거를 작성할 때
- ✅ 통계 자동 집계를 구현할 때
- ✅ Cloud Functions 테스트를 작성할 때
- ✅ 백엔드 로직과 클라이언트 역할을 구분할 때

---

## 📱 앱 개발 문서

### [../specs/app/sns-app.md](../../specs/app/sns-app.md) - Flutter 앱 개발 지침

**포함 내용**:
- Flutter 앱 개발 워크플로우
- 모바일 앱 아키텍처 및 구조
- Firebase 연동 (Authentication, Realtime Database)
- 상태 관리 방식
- 플랫폼별 설정 (iOS, Android)

**참고 시점**:
- ✅ Flutter 모바일 앱 개발을 시작할 때
- ✅ 앱의 전반적인 구조를 이해하고자 할 때
- ✅ Firebase를 Flutter와 연동할 때
- ✅ iOS/Android 빌드 설정이 필요할 때

---

## 📖 문서 활용 가이드

### 개발 시작 시 권장 문서 읽기 순서

#### 웹 개발자용
1. **[../specs/sns.md](../../specs/sns.md)** - 전체 프로젝트 이해
2. **[snsweb-development-quickstart.md](snsweb-development-quickstart.md)** - 개발 환경 설정
3. **[snsweb-index.md](snsweb-index.md)** - 웹 개발 워크플로우 확인 (본 문서)
4. **[snsweb-production-customelements.md](snsweb-production-customelements.md)** - Custom Elements 개발 (개발 중 항상 참고)
5. **[snsweb-development-codingguideline.md](snsweb-development-codingguideline.md)** - 코딩 가이드라인 (필수)
6. **[snsweb-development-workflow.md](snsweb-development-workflow.md)** - 프로젝트 구조 파악
7. **[snsweb-firebase-database.md](snsweb-firebase-database.md)** - 데이터베이스 구조 (필수)
8. **[snsweb-i18n-overview.md](snsweb-i18n-overview.md)** - 다국어 지원 구현 (i18n)
9. **[snsweb-firebase-security.md](snsweb-firebase-security.md)** - Firebase 보안 규칙 (필수)
10. **[snsweb-firebase-storage.md](snsweb-firebase-storage.md)** - 파일 업로드 기능 구현
11. **[snsweb-user-overview.md](snsweb-user-overview.md)** - 사용자 프로필 관리
12. **[snsweb-forum-overview.md](snsweb-forum-overview.md)** - 게시판 개발 가이드
13. **[snsweb-forum-comments.md](snsweb-forum-comments.md)** - 댓글 개발 가이드
14. **[snsweb-forum-likes.md](snsweb-forum-likes.md)** - 좋아요 개발 가이드
15. **[snsweb-friends-overview.md](snsweb-friends-overview.md)** - 친구 관계 관리 가이드
16. **[snsweb-firebase-cloudfunctions.md](snsweb-firebase-cloudfunctions.md)** - Cloud Functions 개발 가이드
17. **[snsweb-deploy-overview.md](snsweb-deploy-overview.md)** - 배포 시 참고

#### 앱 개발자용
1. **[../specs/sns.md](../../specs/sns.md)** - 전체 프로젝트 이해
2. **[../specs/app/sns-app.md](../../specs/app/sns-app.md)** - Flutter 앱 개발 가이드

### 상황별 참고 문서

| 상황 | 참고 문서 |
|------|----------|
| 프로젝트 처음 시작 | `snsweb-development-quickstart.md` |
| 컴포넌트 개발 | `snsweb-production-customelements.md` (필수) |
| 코딩 규칙 및 패턴 | `snsweb-development-codingguideline.md` (필수) |
| 프로젝트 구조 이해 | `snsweb-development-workflow.md` |
| 데이터베이스 구조 확인 | `snsweb-firebase-database.md` (필수) |
| 다국어 지원 구현 | `snsweb-i18n-overview.md` (필수) |
| Firebase 보안 규칙 | `snsweb-firebase-security.md` (필수) |
| 파일 & 사진 업로드 | `snsweb-firebase-storage.md` (필수) |
| 사용자 프로필 관리 | `snsweb-user-overview.md` (필수) |
| 게시판 기능 개발 | `snsweb-forum-overview.md` (필수) |
| 댓글/대댓글 기능 개발 | `snsweb-forum-comments.md` (필수) |
| 좋아요 기능 개발 | `snsweb-forum-likes.md` (필수) |
| 친구/팔로우 기능 개발 | `snsweb-friends-overview.md` (필수) |
| Cloud Functions 개발 | `snsweb-firebase-cloudfunctions.md` (필수) |
| 무한 스크롤 리스트 구현 | `snsweb-development-codingguideline.md` - DatabaseListView 섹션 |
| 아이콘 사용 | `snsweb-development-codingguideline.md` - 아이콘 사용 가이드라인 섹션 |
| 반응형 상태 관리 | `snsweb-development-codingguideline.md` - Firebase 로그인 사용자 관리 섹션 |
| 빌드 & 배포 | `snsweb-deploy-overview.md` |
| 전체 서비스 컨셉 확인 | `sns.md` |
| 워크플로우 확인 | `snsweb-index.md` (본 문서) |

---

## ⚠️ 중요 참고사항

- 모든 웹 개발 작업 시 **반드시** `snsweb-production-customelements.md`와 `snsweb-development-codingguideline.md` 문서를 참고해야 합니다
- **데이터베이스 구조** (`snsweb-firebase-database.md`)는 **필수 문서**입니다. 모든 데이터 경로와 구조를 이 문서에서 확인해야 합니다
- **게시판 개발** 시 `snsweb-forum-overview.md`, `snsweb-forum-comments.md`, `snsweb-forum-likes.md`를 **반드시** 함께 참고해야 합니다
- **댓글/좋아요 기능** 개발 시 `snsweb-forum-comments.md`와 `snsweb-forum-likes.md`를 참고하고, 백엔드 로직은 `snsweb-firebase-cloudfunctions.md`를 확인하세요
- **Firebase 보안 규칙** (`snsweb-firebase-security.md`)은 **필수 문서**입니다. AppCheck는 비용이 매우 비싸므로 완전한 Security Rules를 구현해야 합니다
- **Cloud Functions 개발** 시 `snsweb-firebase-cloudfunctions.md`를 **필수로** 참고하고, 클라이언트와 백엔드의 역할 구분을 명확히 해야 합니다
- **친구/팔로우 기능** 개발 시 `snsweb-friends-overview.md`를 참고하여 양방향/단방향 관계를 올바르게 구현하세요
- 각 문서에 명시된 워크플로우는 **필수적으로** 준수해야 합니다
- 문서 간 상호 참조 링크를 활용하여 관련 정보를 빠르게 찾을 수 있습니다
- 소스 코드 작성 시 한글 주석을 상세하게 작성해야 합니다
