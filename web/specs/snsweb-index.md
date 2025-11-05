---
name: snsweb-index
version: 1.0.0
description: snsweb 프로젝트 사양 색인 문서의 SED 사양
author: JaeHo Song
email: thruthesky@gmail.com
homepage: https://github.com/thruthesky/
funding: ""
license: GPL
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
