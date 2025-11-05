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
- [ ] 프로젝트 루트의 specs/ 폴더에 있는 관련 문서를 먼저 참고하여, 개발자에게 어떤 문서를 참고하는지 알려준다.
- [ ] 각 문서에 명시된 워크플로를 준수해야 한다.
- [ ] **웹 개발**을 할 때에는 항상 (반드시) 본 문서의 아래 항목에 있는 [개발 문서 레퍼런스 목록](#개발-문서-레퍼런스-목록)을 반드시 참고해야 하며, 어떤 문서를 참고하는지 개발자에게 반드시 먼저 알려준다.
- [ ] **모바일 앱 개발**을 할 때에는 항상 (반드시) 본 문서의 아래 항목에 있는 [개발 문서 레퍼런스 목록](#개발-문서-레퍼런스-목록)을 반드시 참고해야 하며, 어떤 문서를 참고하는지 개발자에게 반드시 먼저 알려준다.
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

```
sns/
├── specs/                          # 프로젝트 문서
│   ├── sns.md                      # SNS 전체 개요 및 기획
│   └── app/                        # 앱 개발 문서
│       └── sns-app.md              # Flutter 앱 개발 지침
├── web/                            # 웹 프로젝트 (Svelte 5 Custom Elements)
│   ├── specs/                      # 웹 개발 문서
│   │   ├── sns-web.md              # 웹 개발 지침
│   │   └── sns-custom-elements.md  # Svelte Custom Elements 개발 상세 가이드
│   ├── src/
│   │   ├── lib/                    # 라이브러리 소스
│   │   └── demo/                   # 개발/테스트 앱
│   └── dist/                       # 빌드 출력
└── app/                            # 모바일 앱 프로젝트 (Flutter)
    └── lib/                        # Flutter 소스
```

## 웹 개발

- **소스 코드 위치**: `/web` 폴더
- **작업 폴더**: `./web` 폴더에서 소스 코드 작업 및 빌드
- **참고 문서**:
  - [specs/sns-web.md](specs/sns-web.md)
  - [specs/sns-custom-elements.md](specs/sns-custom-elements.md)

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

아래는 `specs/` 폴더의 모든 개발 문서 목록입니다. 각 문서는 특정 상황에 맞춰 참고해야 하며, 문서에 명시된 워크플로우를 반드시 준수해야 합니다.

## 📚 전체 프로젝트 문서

### [../specs/sns.md](../specs/sns.md) - SNS 프로젝트 전체 개요 및 기획

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

### [specs/sns-web.md](specs/sns-web.md) - 웹 개발 지침

**포함 내용**:
- 웹 개발 워크플로우 및 필수 체크사항
- Svelte 5 Custom Elements 기반 개발 접근 방식
- 프레임워크 독립적인 Web Components 개발 철학
- 관련 문서 링크 (Custom Elements 가이드, 프로젝트 README 등)
- 외부 참고 자료 (Svelte 공식 문서, MCP 문서)

**참고 시점**:
- ✅ **웹 개발을 시작하기 전 필수로 확인** (워크플로우의 시작점)
- ✅ 웹 프로젝트의 전반적인 개발 방향을 이해하고자 할 때
- ✅ Custom Elements 개발 가이드로 이동하기 전 기본 지침 확인 시

### [specs/sns-custom-elements.md](specs/sns-custom-elements.md) - Svelte Custom Elements 개발 상세 가이드

**포함 내용**:
- Svelte 5 Runes (`$state`, `$derived`, `$effect` 등) 사용법
- Custom Elements (Web Components) 작성 방법
- `.wc.svelte` 파일 구조 및 네이밍 규칙
- props 전달, 이벤트 처리, 슬롯 사용법
- Firebase 통합 (Authentication, Realtime Database)
- 반응형 상태 관리 및 실시간 데이터 바인딩
- 컴포넌트 라이프사이클 및 최적화 기법
- 실제 예제 코드 (LoginForm, PostList 등)

**참고 시점**:
- ✅ **웹 개발 시 항상(반드시) 참고해야 하는 핵심 문서**
- ✅ 새로운 Custom Element 컴포넌트를 작성할 때
- ✅ Svelte 5 Runes 사용법을 확인할 때
- ✅ Firebase 연동 방법을 구현할 때
- ✅ Web Components의 props, 이벤트, 슬롯 처리 방법을 찾을 때

### [specs/sns-web-quick-start.md](specs/sns-web-quick-start.md) - 웹 개발 퀵 스타트

**포함 내용**:
- 개발 환경 설정 (Node.js, 패키지 설치)
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

### [specs/sns-web-project-flow.md](specs/sns-web-project-flow.md) - 웹 프로젝트 플로우

**포함 내용**:
- 전체 프로젝트 구조 및 파일 간 관계
- Vite 앱 부팅 순서 및 진입점 (`index.html` → `main.js` → `App.svelte`)
- Firebase 초기화 파이프라인
- Custom Elements 등록 및 사용 흐름
- 데모 앱 개발 서버 실행 과정
- 라이브러리 빌드 파이프라인
- 각 설정 파일의 역할 (`vite.config.js`, `vite.demo.config.js`, `svelte.config.js`)

**참고 시점**:
- ✅ 프로젝트의 전체적인 흐름을 파악하고자 할 때
- ✅ 빌드 프로세스를 이해하고자 할 때
- ✅ 파일 간 의존성 관계를 확인할 때
- ✅ Vite 설정이나 진입점을 수정해야 할 때
- ✅ 데모 앱과 라이브러리 빌드의 차이를 이해하고자 할 때

### [specs/sns-web-deploy.md](specs/sns-web-deploy.md) - 웹 배포 가이드

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

### [specs/sns-web-i18n.md](specs/sns-web-i18n.md) - 웹 국제화(i18n) 개발 가이드

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

### [specs/sns-web-security.md](specs/sns-web-security.md) - Firebase 보안 규칙 개발 가이드

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

### [specs/sns-web-storage.md](specs/sns-web-storage.md) - 파일 및 사진 업로드 개발 가이드

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

### [specs/sns-web-user.md](specs/sns-web-user.md) - 사용자 관리 개발 가이드

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

### [specs/sns-web-database.md](specs/sns-web-database.md) - 데이터베이스 구조 가이드

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

### [specs/sns-web-post.md](specs/sns-web-post.md) - 게시판 개발 가이드

**포함 내용**:
- 게시판 주요 기능 (글 작성, 목록, 수정, 삭제)
- 데이터베이스 구조 레퍼런스 (`sns-web-database.md` 참조)
- 카테고리 관리 및 사용 방법
- API 함수 구현 (`createPost`, `listenToPosts`, `updatePost`, `deletePost`)
- ForumPost 타입 정의
- 페이지 구조 및 컴포넌트 구현 (`PostListPage.svelte`)
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

### [specs/sns-web-comments.md](specs/sns-web-comments.md) - 댓글 개발 가이드

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

### [specs/sns-web-likes.md](specs/sns-web-likes.md) - 좋아요 개발 가이드

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

### [specs/sns-web-friends.md](specs/sns-web-friends.md) - 친구 관계 관리 개발 가이드

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

### [specs/sns-web-coding-guideline.md](specs/sns-web-coding-guideline.md) - 코딩 가이드라인

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

**참고 시점**:
- ✅ **모든 웹 개발 작업 시 참고해야 하는 핵심 문서**
- ✅ 아이콘을 사용할 때
- ✅ Firebase 데이터베이스 작업을 할 때
- ✅ 무한 스크롤 리스트를 구현할 때
- ✅ 로그인 사용자 정보를 관리할 때
- ✅ 반응형 상태를 구현할 때

---

## 🔥 Firebase Cloud Functions 개발 문서

### [specs/sns-firebase-cloud-functions.md](specs/sns-firebase-cloud-functions.md) - Firebase Cloud Functions 개발 가이드

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

### [../specs/app/sns-app.md](../specs/app/sns-app.md) - Flutter 앱 개발 지침

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
1. **[../specs/sns.md](../specs/sns.md)** - 전체 프로젝트 이해
2. **[specs/sns-web-quick-start.md](specs/sns-web-quick-start.md)** - 개발 환경 설정
3. **[specs/sns-web.md](specs/sns-web.md)** - 웹 개발 워크플로우 확인
4. **[specs/sns-custom-elements.md](specs/sns-custom-elements.md)** - Custom Elements 개발 (개발 중 항상 참고)
5. **[specs/sns-web-coding-guideline.md](specs/sns-web-coding-guideline.md)** - 코딩 가이드라인 (필수)
6. **[specs/sns-web-project-flow.md](specs/sns-web-project-flow.md)** - 프로젝트 구조 파악
7. **[specs/sns-web-database.md](specs/sns-web-database.md)** - 데이터베이스 구조 (필수)
8. **[specs/sns-web-i18n.md](specs/sns-web-i18n.md)** - 다국어 지원 구현 (i18n)
9. **[specs/sns-web-security.md](specs/sns-web-security.md)** - Firebase 보안 규칙 (필수)
10. **[specs/sns-web-storage.md](specs/sns-web-storage.md)** - 파일 업로드 기능 구현
11. **[specs/sns-web-user.md](specs/sns-web-user.md)** - 사용자 프로필 관리
12. **[specs/sns-web-post.md](specs/sns-web-post.md)** - 게시판 개발 가이드
13. **[specs/sns-web-comments.md](specs/sns-web-comments.md)** - 댓글 개발 가이드
14. **[specs/sns-web-likes.md](specs/sns-web-likes.md)** - 좋아요 개발 가이드
15. **[specs/sns-web-friends.md](specs/sns-web-friends.md)** - 친구 관계 관리 가이드
16. **[specs/sns-firebase-cloud-functions.md](specs/sns-firebase-cloud-functions.md)** - Cloud Functions 개발 가이드
17. **[specs/sns-web-deploy.md](specs/sns-web-deploy.md)** - 배포 시 참고

#### 앱 개발자용
1. **[../specs/sns.md](../specs/sns.md)** - 전체 프로젝트 이해
2. **[../specs/app/sns-app.md](../specs/app/sns-app.md)** - Flutter 앱 개발 가이드

### 상황별 참고 문서

| 상황 | 참고 문서 |
|------|----------|
| 프로젝트 처음 시작 | `sns-web-quick-start.md` |
| 컴포넌트 개발 | `sns-custom-elements.md` (필수) |
| 코딩 규칙 및 패턴 | `sns-web-coding-guideline.md` (필수) |
| 프로젝트 구조 이해 | `sns-web-project-flow.md` |
| 데이터베이스 구조 확인 | `sns-web-database.md` (필수) |
| 다국어 지원 구현 | `sns-web-i18n.md` (필수) |
| Firebase 보안 규칙 | `sns-web-security.md` (필수) |
| 파일 & 사진 업로드 | `sns-web-storage.md` (필수) |
| 사용자 프로필 관리 | `sns-web-user.md` (필수) |
| 게시판 기능 개발 | `sns-web-post.md` (필수) |
| 댓글/대댓글 기능 개발 | `sns-web-comments.md` (필수) |
| 좋아요 기능 개발 | `sns-web-likes.md` (필수) |
| 친구/팔로우 기능 개발 | `sns-web-friends.md` (필수) |
| Cloud Functions 개발 | `sns-firebase-cloud-functions.md` (필수) |
| 무한 스크롤 리스트 구현 | `sns-web-coding-guideline.md` - DatabaseListView 섹션 |
| 아이콘 사용 | `sns-web-coding-guideline.md` - 아이콘 사용 가이드라인 섹션 |
| 반응형 상태 관리 | `sns-web-coding-guideline.md` - Firebase 로그인 사용자 관리 섹션 |
| 빌드 & 배포 | `sns-web-deploy.md` |
| 전체 서비스 컨셉 확인 | `sns.md` |
| 워크플로우 확인 | `sns-web.md` |

---

## ⚠️ 중요 참고사항

- 모든 웹 개발 작업 시 **반드시** `sns-custom-elements.md`와 `sns-web-coding-guideline.md` 문서를 참고해야 합니다
- **데이터베이스 구조** (`sns-web-database.md`)는 **필수 문서**입니다. 모든 데이터 경로와 구조를 이 문서에서 확인해야 합니다
- **게시판 개발** 시 `sns-web-post.md`, `sns-web-comments.md`, `sns-web-likes.md`를 **반드시** 함께 참고해야 합니다
- **댓글/좋아요 기능** 개발 시 `sns-web-comments.md`와 `sns-web-likes.md`를 참고하고, 백엔드 로직은 `sns-firebase-cloud-functions.md`를 확인하세요
- **Firebase 보안 규칙** (`sns-web-security.md`)은 **필수 문서**입니다. AppCheck는 비용이 매우 비싸므로 완전한 Security Rules를 구현해야 합니다
- **Cloud Functions 개발** 시 `sns-firebase-cloud-functions.md`를 **필수로** 참고하고, 클라이언트와 백엔드의 역할 구분을 명확히 해야 합니다
- **친구/팔로우 기능** 개발 시 `sns-web-friends.md`를 참고하여 양방향/단방향 관계를 올바르게 구현하세요
- 각 문서에 명시된 워크플로우는 **필수적으로** 준수해야 합니다
- 문서 간 상호 참조 링크를 활용하여 관련 정보를 빠르게 찾을 수 있습니다
- 소스 코드 작성 시 한글 주석을 상세하게 작성해야 합니다

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
- `/about` - 앱 정보 페이지
- `/help` - 도움말 페이지
- `/terms` - 이용 약관 페이지
- `/privacy` - 개인정보 처리방침 페이지
- `/contact` - 문의하기 페이지
- `/chat/list` - 채팅 목록 페이지