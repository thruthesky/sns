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
│   ├── web/                        # 웹 개발 문서
│   │   ├── sns-web.md              # 웹 개발 지침
│   │   └── sns-custom-elements.md  # Svelte Custom Elements 개발 상세 가이드
│   └── app/                        # 앱 개발 문서
│       └── sns-app.md              # Flutter 앱 개발 지침
├── web/                            # 웹 프로젝트 (Svelte 5 Custom Elements)
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
  - [docs/web/sns-web.md](docs/web/sns-web.md)
  - [docs/web/sns-custom-elements.md](docs/web/sns-custom-elements.md)

## 앱 개발

- **소스 코드 위치**: `/app` 폴더
- **작업 폴더**: `./app` 폴더에서 소스 코드 작업 및 빌드
- **참고 문서**: [docs/app/sns-app.md](docs/app/sns-app.md)


# MCP 목록
- [ ] Svelte MCP 문서: https://svelte.dev/docs/mcp/overview
- [ ] Playwright MCP 문서: https://github.com/microsoft/playwright-mcp
- [ ] Chrome DevTools Protocol MCP 문서: https://github.com/ChromeDevTools/chrome-devtools-mcp



# 개발 문서 레퍼런스 목록

아래는 `docs/` 폴더의 모든 개발 문서 목록입니다. 각 문서는 특정 상황에 맞춰 참고해야 하며, 문서에 명시된 워크플로우를 반드시 준수해야 합니다.

## 📚 전체 프로젝트 문서

### [docs/sns.md](docs/sns.md) - SNS 프로젝트 전체 개요 및 기획

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

### [docs/web/sns-web.md](docs/web/sns-web.md) - 웹 개발 지침

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

### [docs/web/sns-custom-elements.md](docs/web/sns-custom-elements.md) - Svelte Custom Elements 개발 상세 가이드

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

### [docs/web/sns-web-quick-start.md](docs/web/sns-web-quick-start.md) - 웹 개발 퀵 스타트

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

### [docs/web/sns-web-project-flow.md](docs/web/sns-web-project-flow.md) - 웹 프로젝트 플로우

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

### [docs/web/sns-web-deploy.md](docs/web/sns-web-deploy.md) - 웹 배포 가이드

**포함 내용**:
- 배포 전 체크리스트
- 프로젝트 빌드 프로세스 상세 설명
  - 라이브러리 빌드 (`build:lib`) - Web Components 번들 생성
  - 데모 앱 빌드 (`build:demo`) - HTML, JS, CSS 생성
- 빌드 흐름도 및 파일 변환 과정
- 최종 빌드 결과물 구조
- GitHub Pages 배포 방법 (수동 배포 / gh-pages 패키지)
- 문제 해결 가이드 (빌드 실패, 404 에러, 환경 변수 등)
- 추가 배포 옵션 (Vercel, Netlify)

**참고 시점**:
- ✅ 프로젝트를 프로덕션 환경에 배포할 때
- ✅ 빌드 명령어와 결과물을 이해하고자 할 때
- ✅ GitHub Pages, Vercel, Netlify 등에 배포할 때
- ✅ 빌드 관련 문제를 해결해야 할 때
- ✅ 환경 변수 설정 방법을 확인할 때

---

## 📱 앱 개발 문서

### [docs/app/sns-app.md](docs/app/sns-app.md) - Flutter 앱 개발 지침

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
1. **[docs/sns.md](docs/sns.md)** - 전체 프로젝트 이해
2. **[docs/web/sns-web-quick-start.md](docs/web/sns-web-quick-start.md)** - 개발 환경 설정
3. **[docs/web/sns-web.md](docs/web/sns-web.md)** - 웹 개발 워크플로우 확인
4. **[docs/web/sns-custom-elements.md](docs/web/sns-custom-elements.md)** - Custom Elements 개발 (개발 중 항상 참고)
5. **[docs/web/sns-web-project-flow.md](docs/web/sns-web-project-flow.md)** - 프로젝트 구조 파악
6. **[docs/web/sns-web-deploy.md](docs/web/sns-web-deploy.md)** - 배포 시 참고

#### 앱 개발자용
1. **[docs/sns.md](docs/sns.md)** - 전체 프로젝트 이해
2. **[docs/app/sns-app.md](docs/app/sns-app.md)** - Flutter 앱 개발 가이드

### 상황별 참고 문서

| 상황 | 참고 문서 |
|------|----------|
| 프로젝트 처음 시작 | `sns-web-quick-start.md` |
| 컴포넌트 개발 | `sns-custom-elements.md` (필수) |
| 프로젝트 구조 이해 | `sns-web-project-flow.md` |
| 빌드 & 배포 | `sns-web-deploy.md` |
| 전체 서비스 컨셉 확인 | `sns.md` |
| 워크플로우 확인 | `sns-web.md` |

---

## ⚠️ 중요 참고사항

- 모든 웹 개발 작업 시 **반드시** `sns-custom-elements.md` 문서를 참고해야 합니다
- 각 문서에 명시된 워크플로우는 **필수적으로** 준수해야 합니다
- 문서 간 상호 참조 링크를 활용하여 관련 정보를 빠르게 찾을 수 있습니다
- 소스 코드 작성 시 한글 주석을 상세하게 작성해야 합니다
