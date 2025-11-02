SNS 개발 지침
- 본 문서는 SNS 개발에 관한 지침을 제공하며, 개발 할 때, 반드시 따라야 할 규칙과 예제를 포함하므로, 본 문서를 따라서 개발을 진행해야 한다.
- 반드시 아래의 [워크플로우](#워크플로우)를 따라야 한다.

# 워크플로우
- [ ] 프로젝트 루트의 docs/ 폴더에 있는 관련 문서를 먼저 참고하여, 개발자에게 어떤 문서를 참고하는지 알려준다.
- [ ] 각 문서에 명시된 워크플로를 준수해야 한다.
- [ ] **웹 개발**을 할 때에는 다음 문서를 반드시 참고해야 한다:
  - [ ] [docs/sns.md](docs/sns.md) - SNS 프로젝트 전체 개요 및 기획
  - [ ] [docs/web/sns-web.md](docs/web/sns-web.md) - 웹 개발 지침
  - [ ] [docs/web/sns-custom-elements.md](docs/web/sns-custom-elements.md) - Svelte Custom Elements 개발 상세 가이드
- [ ] **모바일 앱 개발**을 할 때에는 다음 문서를 반드시 참고해야 한다:
  - [ ] [docs/sns.md](docs/sns.md) - SNS 프로젝트 전체 개요 및 기획
  - [ ] [docs/app/sns-app.md](docs/app/sns-app.md) - Flutter 앱 개발 지침
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