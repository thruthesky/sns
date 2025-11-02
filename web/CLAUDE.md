SNS 개발 지침
- 본 문서는 SNS 개발에 관한 지침을 제공하며, 개발 할 때, 반드시 따라야 할 규칙과 예제를 포함하므로, 본 문서를 따라서 개발을 진행해야 한다.
- 반드시 아래의 [워크플로우](#워크플로우)를 따라야 한다.

# 워크플로우
- [ ] 프로젝트 루트의 docs/ 폴더에 있는 관련 문서를 먼저 참고하여, 개발자에게 어떤 문서를 참고하는지 알려준다.
- [ ] 각 문서에 명시된 워크플로를 준수해야 한다.
- [ ] **웹 개발**을 할 때에는 항상 (반드시) 본 문서의 아래 항목에 있는 [개발 문서 레퍼런스 목록](#개발-문서-레퍼런스-목록)을 반드시 참고해야 하며, 어떤 문서를 참고하는지 개발자에게 반드시 먼저 알려준다.
- [ ] **모바일 앱 개발**을 할 때에는 항상 (반드시) 본 문서의 아래 항목에 있는 [개발 문서 레퍼런스 목록](#개발-문서-레퍼런스-목록)을 반드시 참고해야 하며, 어떤 문서를 참고하는지 개발자에게 반드시 먼저 알려준다.
- [ ] 웹 개발 할 때에는 항상 [Svelte MCP 문서](https://svelte.dev/docs/mcp/overview)를 참고해야 한다.
- [ ] 소스 코드 수정 할 때 유의 사항:
  - [ ] 반드시 한글로 상세한 설명을 작성해야 한다.
  - [ ] 특히, 각 항목/요소/섹션/UI 별로 명칭을 적어서, 개발자간 소통을 원활하게 해야 한다.
  - [ ] 각 기술 스택에 맞는 MCP 를 활용해야 한다.


# 프로젝트 구조

앱과 웹을 하나의 저장소에서 관리하는 모노레포(Monorepo) 구조를 따릅니다.

## 디렉토리 구조

```
sns/
├── docs/                           # 프로젝트 문서
│   ├── sns.md                      # SNS 전체 개요 및 기획
│   └── app/                        # 앱 개발 문서
│       └── sns-app.md              # Flutter 앱 개발 지침
├── web/                            # 웹 프로젝트 (Svelte 5 Custom Elements)
│   ├── docs/                       # 웹 개발 문서
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
  - [docs/sns-web.md](docs/sns-web.md)
  - [docs/sns-custom-elements.md](docs/sns-custom-elements.md)

## 앱 개발

- **소스 코드 위치**: `/app` 폴더
- **작업 폴더**: `./app` 폴더에서 소스 코드 작업 및 빌드
- **참고 문서**: [../docs/app/sns-app.md](../docs/app/sns-app.md)


# MCP 목록
- [ ] Svelte MCP 문서: https://svelte.dev/docs/mcp/overview
- [ ] Playwright MCP 문서: https://github.com/microsoft/playwright-mcp
- [ ] Chrome DevTools Protocol MCP 문서: https://github.com/ChromeDevTools/chrome-devtools-mcp



# 개발 문서 레퍼런스 목록

아래는 `docs/` 폴더의 모든 개발 문서 목록입니다. 각 문서는 특정 상황에 맞춰 참고해야 하며, 문서에 명시된 워크플로우를 반드시 준수해야 합니다.

## 📚 전체 프로젝트 문서

### [../docs/sns.md](../docs/sns.md) - SNS 프로젝트 전체 개요 및 기획

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

### [docs/sns-web.md](docs/sns-web.md) - 웹 개발 지침

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

### [docs/sns-custom-elements.md](docs/sns-custom-elements.md) - Svelte Custom Elements 개발 상세 가이드

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

### [docs/sns-web-quick-start.md](docs/sns-web-quick-start.md) - 웹 개발 퀵 스타트

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

### [docs/sns-web-project-flow.md](docs/sns-web-project-flow.md) - 웹 프로젝트 플로우

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

### [docs/sns-web-deploy.md](docs/sns-web-deploy.md) - 웹 배포 가이드

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

### [docs/sns-web-i18n.md](docs/sns-web-i18n.md) - 웹 국제화(i18n) 개발 가이드

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

### [docs/sns-web-security.md](docs/sns-web-security.md) - Firebase 보안 규칙 개발 가이드

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

---

## 📱 앱 개발 문서

### [../docs/app/sns-app.md](../docs/app/sns-app.md) - Flutter 앱 개발 지침

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
1. **[../docs/sns.md](../docs/sns.md)** - 전체 프로젝트 이해
2. **[docs/sns-web-quick-start.md](docs/sns-web-quick-start.md)** - 개발 환경 설정
3. **[docs/sns-web.md](docs/sns-web.md)** - 웹 개발 워크플로우 확인
4. **[docs/sns-custom-elements.md](docs/sns-custom-elements.md)** - Custom Elements 개발 (개발 중 항상 참고)
5. **[docs/sns-web-project-flow.md](docs/sns-web-project-flow.md)** - 프로젝트 구조 파악
6. **[docs/sns-web-i18n.md](docs/sns-web-i18n.md)** - 다국어 지원 구현 (i18n)
7. **[docs/sns-web-security.md](docs/sns-web-security.md)** - Firebase 보안 규칙 (필수)
8. **[docs/sns-web-deploy.md](docs/sns-web-deploy.md)** - 배포 시 참고

#### 앱 개발자용
1. **[../docs/sns.md](../docs/sns.md)** - 전체 프로젝트 이해
2. **[../docs/app/sns-app.md](../docs/app/sns-app.md)** - Flutter 앱 개발 가이드

### 상황별 참고 문서

| 상황 | 참고 문서 |
|------|----------|
| 프로젝트 처음 시작 | `sns-web-quick-start.md` |
| 컴포넌트 개발 | `sns-custom-elements.md` (필수) |
| 프로젝트 구조 이해 | `sns-web-project-flow.md` |
| 다국어 지원 구현 | `sns-web-i18n.md` (필수) |
| Firebase 보안 규칙 | `sns-web-security.md` (필수) |
| 빌드 & 배포 | `sns-web-deploy.md` |
| 전체 서비스 컨셉 확인 | `sns.md` |
| 워크플로우 확인 | `sns-web.md` |

---

## ⚠️ 중요 참고사항

- 모든 웹 개발 작업 시 **반드시** `sns-custom-elements.md` 문서를 참고해야 합니다
- **Firebase 보안 규칙** (`sns-web-security.md`)은 **필수 문서**입니다. AppCheck는 비용이 매우 비싸므로 완전한 Security Rules를 구현해야 합니다
- 각 문서에 명시된 워크플로우는 **필수적으로** 준수해야 합니다
- 문서 간 상호 참조 링크를 활용하여 관련 정보를 빠르게 찾을 수 있습니다
- 소스 코드 작성 시 한글 주석을 상세하게 작성해야 합니다

---

# 테스트 계정 정보

## e2e 테스트용 임시 로그인 계정

개발 모드 및 e2e 테스트에서 사용할 수 있는 Firebase 전화번호 인증 테스트 계정입니다.

**중요**: 이 계정들은 Firebase Console에서 "Authentication > Sign-in method > Phone"의 **테스트 전화번호** 섹션에 등록되어 있어야 합니다.

### 테스트 계정 1
- **국가 번호**: +1 (미국)
- **전화번호**: 1111111111
- **SMS 인증 코드**: 111111

### 테스트 계정 2
- **국가 번호**: +1 (미국)
- **전화번호**: 2222222222
- **SMS 인증 코드**: 222222

### 테스트 계정 3
- **국가 번호**: +1 (미국)
- **전화번호**: 3333333333
- **SMS 인증 코드**: 333333

### 사용 방법

1. **수동 테스트 시**:
   - 개발 서버 실행: `npm run dev`
   - `<phone-login>` 컴포넌트에서 위의 전화번호 중 하나를 선택
   - 국가 번호를 +1로 설정
   - 전화번호 입력 (예: 1111111111)
   - "인증 코드 전송" 클릭
   - SMS 인증 코드 입력 (예: 111111)
   - 로그인 완료

2. **e2e 테스트 시**:
   ```javascript
   // Playwright 예제
   await page.locator('select#country-code').selectOption('+1');
   await page.locator('input#phone-number').fill('1111111111');
   await page.locator('button:has-text("인증 코드 전송")').click();
   await page.locator('input#verification-code').fill('111111');
   await page.locator('button:has-text("로그인")').click();
   ```

3. **Jest/Vitest 단위 테스트 시**:
   ```javascript
   const testAccount = {
     countryCode: '+1',
     phoneNumber: '1111111111',
     verificationCode: '111111'
   };
   ```

### 주의사항

- ⚠️ **프로덕션 환경에서는 절대 사용하지 마세요**
- ⚠️ 테스트 전화번호는 Firebase Console에서 미리 등록되어 있어야 합니다
- ⚠️ 실제 SMS가 전송되지 않으며, reCAPTCHA 검증도 자동으로 통과됩니다
- ⚠️ 보안상 실제 사용자가 이 번호로 로그인할 수 없도록 Firebase 보안 규칙을 설정해야 합니다


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