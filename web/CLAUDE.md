SNS 개발 지침
- 본 문서는 SNS 개발에 관한 지침을 제공하며, 개발 할 때, 반드시 따라야 할 규칙과 예제를 포함하므로, 본 문서를 따라서 개발을 진행해야 한다.
- 반드시 아래의 [워크플로우](#워크플로우)를 따라야 한다.

## 📖 문서 구조 원칙

**본 CLAUDE.md 문서는 요약 및 레퍼런스 역할을 합니다:**
- ✅ **CLAUDE.md**: 핵심 규칙과 요약 설명만 포함, 자세한 예제는 제외
- ✅ **specs/*.md**: 상세한 설명, 예제 코드, 사용법 포함
- ✅ **레퍼런스 링크**: CLAUDE.md에서 specs/*.md로 연결

이를 통해 CLAUDE.md는 간결하게 유지하고, 상세한 정보는 각 주제별 문서에서 확인할 수 있습니다.

# 워크플로우
- [ ] **🔥 필수: 모든 개발 작업 전에 [specs/index.md](specs/index.md) 문서를 먼저 확인해야 합니다.** 이 문서는 모든 개발 문서의 색인이며, 필요한 문서 또는 기술 내용을 찾기 위한 중앙 참조점입니다.
- [ ] **🔥 필수: [specs/instructions.md](specs/instructions.md) 문서를 반드시 참고해야 합니다.** 이 문서는 SED (Spec-Exact Development)의 핵심 지침을 포함하고 있으며, 각 spec 파일을 어떻게 활용해야 하는지에 대한 상세한 설명이 있습니다.
  - [ ] Index-Driven Development: index.md를 먼저 읽고, 관련 문서를 식별하고, workflow를 따르는 원칙
  - [ ] Dependency Resolution: YAML 헤더 파싱, dependencies 로드, step 기반 실행 순서
  - [ ] Specification Obedience: AI가 사양서를 정확히 따라야 하는 원칙
- [ ] 프로젝트 루트의 specs/ 폴더에 있는 관련 문서를 먼저 참고하여, 개발자에게 어떤 문서를 참고하는지 알려준다.
- [ ] 각 문서에 명시된 워크플로를 준수해야 한다.
- [ ] **Firebase Cloud Functions 개발** 시에는 반드시 다음 문서들을 참고해야 합니다:
  - [ ] [specs/sns-firebase-cloud-functions.md](specs/sns-firebase-cloud-functions.md) - Cloud Functions 개발 가이드 (필수)
  - [ ] [specs/sns-web-database.md](specs/sns-web-database.md) - 데이터베이스 구조 가이드 (필수)
  - [ ] 추가적으로 관련된 specs/*.md 문서들을 확인해야 합니다
- [ ] 웹 개발 할 때에는 항상 [Svelte MCP 문서](https://svelte.dev/docs/mcp/overview)를 참고해야 한다.
- [ ] 소스 코드 수정 할 때 유의 사항:
- [ ] 모든 경로 이동(라우팅, navigation)은 반드시 `navigate()` 함수를 사용해 SPA 방식으로 처리한다.
- [ ] 반드시 한글로 상세한 설명을 작성해야 한다.
- [ ] 특히, 각 항목/요소/섹션/UI 별로 명칭을 적어서, 개발자간 소통을 원활하게 해야 한다.
- [ ] 각 기술 스택에 맞는 MCP 를 활용해야 한다.
- [ ] **문서 작성 및 수정 시 준수 사항**:
  - [ ] 모든 `specs/*.md` 문서 상단에는 **목차 (Table of Contents)** 를 항상 업데이트해야 한다
  - [ ] 새로운 섹션을 추가하면 목차에 해당 섹션을 즉시 추가한다
  - [ ] 섹션 제목을 변경하면 목차도 함께 업데이트한다
  - [ ] 섹션 삭제 시 목차에서도 해당 항목을 제거한다
  - [ ] 목차는 Markdown 링크 형식으로 작성하여 클릭으로 이동 가능하게 한다

## 📝 SED (Spec-Exact Development) 문서 작성

**사용자가 "스펙", "Spec", "SED" 등의 표현을 하면서 "문서로 작성해주세요"라고 요청하면, 반드시 [docs/sed.md](docs/sed.md) 문서를 참고하여 작성해야 합니다.**

### SED란?

SED (Spec-Exact Development)는 AI가 사양서를 정확히 따라 개발하는 방법론입니다. 핵심 원칙:
- **AI는 추론하지 않습니다**: 사양서에 명시된 내용만 구현
- **사양서가 절대 기준**: 모든 구현은 사양서를 정확히 따름
- **완벽한 사양서 필요**: 클래스명, 함수명, 파라미터, 로직까지 모두 명시

### SED 문서 구조

모든 SED 형식 문서는 다음 구조를 따라야 합니다:

1. **YAML 헤더**: 문서 메타데이터 (name, version, description, author, license, dependencies)
2. **개요 (Overview)**: 문서의 간략한 요약
3. **요구사항 (Requirements)**: 필수 라이브러리, 도구, 환경 변수
4. **워크플로우 (Workflow)**: AI가 따라야 할 순서대로 된 단계
5. **상세 항목 (Details)**: 각 컴포넌트에 대한 완벽한 설명
   - 데이터베이스 스키마 (버전, 테이블 구조, 인덱스, 외래키)
   - 기능 사양 (API, 파라미터, 리턴값, 에러 처리)
   - 라우팅 사양 (경로, 리다이렉트, 접근 제어)
   - 함수 사양 (이름, 역할, 파라미터, 위치, 호출 시점)
   - UI/UX 요구사항 (디자인 시스템, 색상, 타이포그래피, 레이아웃)
   - 테스트 사양 (유닛, E2E, 성능, 보안)

### 핵심 규칙

- ✅ **모든 세부사항 명시**: 클래스명, 함수명, 변수명, 파라미터 타입까지 정확히 기술
- ✅ **완전한 소스 코드 포함**: 사양서에 구현 가능한 완전한 코드 예제 제공
- ✅ **사양 점수 90점 이상**: 개발 시작 전 사양 완성도가 90점 이상이어야 함
- ✅ **명확한 워크플로우**: AI가 따라야 할 단계를 순서대로 명확히 기술
- ❌ **모호한 표현 금지**: "적절히", "필요에 따라" 같은 추론이 필요한 표현 금지

### 상세 가이드

SED 문서 작성 시 반드시 참고해야 할 문서:
- **[docs/sed.md](docs/sed.md)** - Spec-Exact Development (SED) Manifesto (필수)

이 문서는 다음을 포함합니다:
- SED 개념 정의 및 철학
- 사양서 완성도 평가 기준
- 데이터베이스, 기능, 라우팅, 함수, UI/UX, 테스트 사양 작성 예제
- YAML 헤더 템플릿 및 파일 구조
- 금지된 개발 방식 (점진적 프롬프트 수정, 사양 없는 디자인 변경)

### 사용 예시

사용자 요청: "게시판 기능을 SED 형식으로 문서화해주세요"

AI 응답:
1. [docs/sed.md](docs/sed.md) 문서 참조
2. YAML 헤더 작성 (name, version, description, author, license, dependencies)
3. 데이터베이스 스키마 상세 명시 (MySQL 버전, 테이블 구조, 인덱스, 외래키)
4. 모든 함수 명세 작성 (createPost, updatePost, deletePost - 파라미터, 리턴값, 위치, 호출 시점)
5. 라우팅 명세 작성 (/post/list, /post/detail/:id, /post/create)
6. UI/UX 요구사항 작성 (Material Design 3.0, 색상, 타이포그래피)
7. 테스트 사양 작성 (유닛 테스트 200개, E2E 테스트 15개, 커버리지 80% 이상)

---

# 코딩 가이드라인

## ⚠️ Firebase Auth vs RTDB 필드명 차이 (매우 중요)

**프로필 사진 필드명이 서로 다릅니다:**
- **Firebase Authentication**: `photoURL` (대문자 URL) 사용
- **Realtime Database**: `photoUrl` (camelCase url) 사용

### 핵심 규칙
- ❌ **절대로 혼용하지 마세요**: Auth에 `photoUrl`이나 RTDB에 `photoURL`을 사용하면 안 됩니다
- ✅ Firebase Auth API는 `photoURL` 대문자를 요구합니다 (Firebase SDK 스펙)
- ✅ RTDB에는 프로젝트 네이밍 규칙에 따라 `photoUrl` camelCase를 사용합니다

### 상세 가이드
자세한 사용 예제와 설명은 다음 문서를 참고하세요:
- [specs/sns-web-coding-guideline.md](specs/sns-web-coding-guideline.md) - Firebase Auth vs RTDB 필드명 차이 섹션

---

## 🔥 Firebase 에러 처리 (매우 중요)

**모든 Firebase 관련 작업 시 반드시 `error-handler.js`를 사용해야 합니다.**

### 필수 규칙
- ✅ 모든 Firebase 작업에서 `handleFirebaseError()` 사용 필수
- ✅ 에러 메시지는 i18n 키로 반환하여 다국어 지원
- ✅ 사용자에게는 친화적인 메시지, 개발자에게는 상세한 로그 제공
- ❌ `error.message`를 직접 사용자에게 표시 금지

### 상세 가이드
자세한 사용 예제와 에러 타입은 다음 문서를 참고하세요:
- [specs/sns-web-coding-guideline.md](specs/sns-web-coding-guideline.md) - Firebase 에러 처리 섹션
- [src/lib/utils/error-handler.js](src/lib/utils/error-handler.js) - 에러 처리 로직

---

## ⚡ 숫자 값 증/감 연산 (increment 함수)

**클라이언트와 서버 모두에서 숫자 값을 증감시킬 때는 반드시 `increment()` 함수를 사용해야 합니다.**

### 🔥 핵심 규칙
- ✅ 모든 숫자 증/감 연산에서 `increment()` 함수 사용 필수
- ✅ `increment(1)` - 1씩 증가, `increment(-1)` - 1씩 감소
- ✅ 동시성 안전함 (서버 측 원자적 연산)
- ❌ **절대 금지**: 자식 노드 수를 세어서 `set()`으로 업데이트
- ❌ 트랜잭션 대신 `increment()` 사용 (더 효율적)

### 장점
- 여러 사용자가 동시에 업데이트해도 정확함
- 트랜잭션보다 빠르고 안정적
- 모든 자식 노드를 읽을 필요가 없어서 비용 절감

### 상세 가이드
자세한 사용 예제와 피해야 할 패턴은 다음 문서를 참고하세요:
- [specs/sns-web-coding-guideline.md](specs/sns-web-coding-guideline.md) - increment 함수 사용법 섹션

---

## 반응형 상태 관리

- **Firebase Realtime Database 사용 시 `rtdb()` 함수를 최대한 활용합니다**
  - `rtdb()` 함수는 Svelte 5의 `$state` 기반 반응형 래퍼로 실시간 데이터를 자동으로 동기화합니다
  - 데이터 변경 시 자동으로 UI가 업데이트되므로 수동 구독 관리가 불필요합니다
  - 사용 예시: `const userRtdb = rtdb('users/uid');`

## DatabaseListView 컴포넌트

- **무한 스크롤 리스트 구현 시 `DatabaseListView` 컴포넌트를 활용합니다**
  - Firebase Realtime Database의 데이터를 무한 스크롤로 표시하는 재사용 가능한 컴포넌트입니다
  - 두 가지 스크롤 방식 지원:
    - **Body 스크롤**: DatabaseListView를 body에 직접 마운트하여 전체 페이지 스크롤 사용
    - **Container 스크롤**: 래퍼 컨테이너로 감싸고 높이를 지정하여 특정 영역만 스크롤
  - 자세한 사용법은 [specs/sns-web-coding-guideline.md](specs/sns-web-coding-guideline.md)의 "DatabaseListView 컴포넌트" 섹션 참조

## 아이콘 사용 가이드라인

**아이콘을 표시할 때는 항상 lucide-svelte 아이콘을 먼저 고려합니다**

### 핵심 규칙
- ✅ 아이콘이 필요할 때는 **lucide-svelte**를 우선적으로 사용
- ✅ lucide-svelte는 이미 프로젝트 종속성에 포함되어 있음
- ✅ Tree-shakable하여 번들 크기 최적화에 유리
- ✅ Svelte 5와 완벽하게 호환됨

### 상세 가이드
자세한 사용 예제, Props, 스타일링 방법은 다음 문서를 참고하세요:
- [specs/sns-web-coding-guideline.md](specs/sns-web-coding-guideline.md) - 아이콘 사용 가이드라인 섹션

---

## 상세한 코딩 가이드라인

- **상세한 코딩 가이드라인은 별도 문서를 참조하세요**
  - [specs/sns-web-coding-guideline.md](specs/sns-web-coding-guideline.md) - 상세한 코딩 규칙 및 패턴


# 프로젝트 구조

앱과 웹을 하나의 저장소에서 관리하는 모노레포(Monorepo) 구조를 따릅니다.

## 디렉토리 구조

**상세한 디렉토리 구조는 다음 문서를 참고하세요:**
- [specs/snsweb-development-codingguideline.md](specs/snsweb-development-codingguideline.md) - 프로젝트 디렉토리 구조 및 코딩 가이드라인

## 웹 개발

- **소스 코드 위치**: `/web` 폴더
- **작업 폴더**: `./web` 폴더에서 소스 코드 작업 및 빌드
- **참고 문서**:
  - [specs/sns-web.md](specs/sns-web.md)
  - [specs/sns-custom-elements.md](specs/sns-custom-elements.md)

### 개발 서버 실행

프로젝트는 두 가지 개발 서버를 제공합니다:

1. **데모 앱 (Demo App)**
   ```bash
   npm run dev
   ```
   - 포트: 5173
   - 위치: `src/demo/`
   - 목적: Custom Elements 개발 및 테스트

2. **Site1 (Custom Elements 통합 테스트)**
   ```bash
   npm run dev:site1
   ```
   - 포트: 5174
   - 위치: `src/site1/`
   - 목적: 기존 정적 HTML 페이지에 Custom Elements를 통합하는 방법 테스트
   - 사용 사례: PHILGO 커뮤니티 사이트 데모
   - 상세 문서: [specs/snsweb-development-quickstart.md](specs/snsweb-development-quickstart.md) 참조

**Site1의 특징:**
- Svelte 앱이 아닌 순수 HTML + Custom Elements
- 기존 웹사이트에 Custom Elements를 `<script>` 태그로 간단히 통합
- Custom Elements의 재사용성 및 실제 통합 시나리오 검증

## 앱 개발

- **소스 코드 위치**: `/app` 폴더
- **작업 폴더**: `./app` 폴더에서 소스 코드 작업 및 빌드
- **참고 문서**: [../specs/app/sns-app.md](../specs/app/sns-app.md)


# MCP 목록
MCP 는 컨텍스트 윈도우의 토큰 낭비로 인해, 필요한 경우에만 enable 해서 쓰면 된다.
- [ ] Svelte MCP 문서: https://svelte.dev/docs/mcp/overview
- [ ] Playwright MCP 문서: https://github.com/microsoft/playwright-mcp
- [ ] Chrome DevTools Protocol MCP 문서: https://github.com/ChromeDevTools/chrome-devtools-mcp



# 개발 문서 레퍼런스 목록

## 🔥 필수: 모든 개발 문서 색인은 [specs/index.md](specs/index.md)를 참조하세요

**[specs/index.md](specs/index.md) 문서는 다음을 포함합니다:**
- ✅ 모든 개발 문서의 DTOC (Document Table of Contents) 표
- ✅ 각 문서의 주요 주제 및 핵심 포인트 요약
- ✅ 상황별 참고 문서 매핑 표
- ✅ 개발 시작 시 권장 문서 읽기 순서
- ✅ 문서 간 의존성 및 참조 관계

**왜 index.md를 사용해야 하나요?**
- 📖 모든 문서를 한눈에 파악할 수 있습니다
- 🎯 필요한 문서를 빠르게 찾을 수 있습니다
- 🔄 문서 업데이트 시 중앙에서 관리됩니다
- 💡 개발 워크플로우를 효율적으로 계획할 수 있습니다

---

## 핵심 문서 빠른 참조

아래는 가장 자주 참조하는 핵심 문서들입니다. 상세한 목록은 **반드시** [specs/index.md](specs/index.md)를 확인하세요.

### 📚 웹 개발 핵심 문서
- **[specs/sns-custom-elements.md](specs/sns-custom-elements.md)** - Svelte Custom Elements 개발 (필수)
- **[specs/sns-web-coding-guideline.md](specs/sns-web-coding-guideline.md)** - 코딩 가이드라인 (필수)
- **[specs/sns-web-database.md](specs/sns-web-database.md)** - 데이터베이스 구조 (필수)
- **[specs/sns-web-security.md](specs/sns-web-security.md)** - Firebase 보안 규칙 (필수)

### 🔥 Firebase 개발 문서
- **[specs/sns-firebase-cloud-functions.md](specs/sns-firebase-cloud-functions.md)** - Cloud Functions 개발 가이드 (필수)

### 📱 앱 개발 문서
- **[../specs/app/sns-app.md](../specs/app/sns-app.md)** - Flutter 앱 개발 지침

---

## 📌 더 많은 문서는?

**모든 개발 문서의 전체 목록, 상세 설명, 참고 시점, 워크플로우 등은 아래 문서를 확인하세요:**

### 🔥 [specs/index.md](specs/index.md) ← 모든 문서의 색인

이 문서는 다음을 포함합니다:
- 전체 문서 DTOC 표 (주제, 핵심 포인트 요약)
- 개발 시작 시 권장 문서 읽기 순서
- 상황별 참고 문서 매핑 표
- 각 문서의 포함 내용 및 참고 시점
- 문서 간 의존성 및 참조 관계

---

# 테스트 가이드

테스트 계정 정보 및 테스트 방법은 [specs/sns-web-test.md](specs/sns-web-test.md) 문서를 참고하세요.


## 경로

본 항목은 각 페이지(메뉴)의 경로를 설명합니다. 이 경로를 바탕으로 네비게이션 및 라우팅을 하고, 테스트 및 각종 자동화 스크립트에서 활용할 수 있습니다.
- `/` - 홈 페이지
- `/menu` - 메뉴 페이지
- `/user/login` - 로그인 페이지
- `/user/profile` - 사용자 프로필 페이지
- `/post/list` - 게시물 목록 페이지
- `/post/detail/:id` - 게시물 상세 페이지 (`:id`는 게시물 고유 ID)
- `/settings` - 설정 페이지
- `/admin` - 관리자 페이지
- `/about` - 앱 정보 페이지
- `/help` - 도움말 페이지
- `/terms` - 이용 약관 페이지
- `/privacy` - 개인정보 처리방침 페이지
- `/contact` - 문의하기 페이지
- `/chat/list` - 채팅 목록 페이지