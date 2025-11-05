---
name: snsweb
version: 1.0.0
description: 웹 개발 퀵 스타트 문서의 SED 사양
author: JaeHo Song
email: thruthesky@gmail.com
homepage: https://github.com/thruthesky/
funding: ""
license: SED Specification License v1.0
dependencies: []
"프로젝트 이름": snsweb
---

## Overview
- 이 문서는 "웹 개발 퀵 스타트"에 대한 세부 사양을 정리하며, 기존 내용을 그대로 유지한 채 SED 구조에 맞춰 제공합니다.

## Requirements
- 문서 전반에 걸쳐 소개되는 지침과 참고 사항을 모두 숙지해야 하며, 별도의 추가 선행 조건은 원문 각 절에서 제시되는 내용을 따릅니다.

## Workflow
1. 아래 `## Detail Items` 절에 포함된 원문 목차를 검토합니다.
2. 필요한 경우 원문의 각 절을 순서대로 읽으며 프로젝트 작업 흐름에 반영합니다.
3. 문서에 명시된 모든 지침을 확인한 뒤 실제 개발 단계에 적용합니다.

## Detail Items
- 이하에는 기존 문서의 모든 내용을 원형 그대로 포함하여 참조할 수 있도록 구성했습니다.

# 웹 개발 퀵 스타트

SNS 웹 프로젝트를 빠르게 시작할 수 있도록 안내합니다.

---

## 필수 요구사항

### 기본 환경 준비

- **Node.js**: 18.x 이상
- **npm**: 9.x 이상 (Node.js와 함께 설치됨)
- **Git**: 코드 버전관리

### 환경 확인

```bash
# Node.js 버전 확인
node --version  # v18.0.0 이상

# npm 버전 확인
npm --version   # 9.0.0 이상
```

---

## 빠른 시작 방법

### 1. 프로젝트 복제 (이미 복제한 경우 생략)

```bash
git clone <repository-url>
cd sns
```

### 2. 웹 프로젝트로 이동

```bash
cd web
```

### 3. 의존성 설치

```bash
npm install
```

이제 설치가 완료되었습니다. 다음 단계로 진행하세요.

---

## 🔧 Firebase 설정

### 1. 환경 변수 파일 생성

```bash
# .env.example 파일을 .env로 복사
cp .env.example .env
```

### 2. Firebase 설정 입력

`.env` 파일을 편집하여 실제 Firebase 프로젝트 정보를 입력하세요:

```env
# Firebase 설정
VITE_FIREBASE_API_KEY=your_actual_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your_project_id-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
```

### 3. Firebase 프로젝트 정보 확인

Firebase Console에서 프로젝트 설정을 확인하세요:

1. [Firebase Console](https://console.firebase.google.com/) 접속
2. 프로젝트 선택
3. **프로젝트 설정** (톱니바퀴 아이콘) 클릭
4. **내 앱** 섹션에서 웹 앱 선택
5. **SDK 설정 및 구성** 탭 클릭
6. 표시된 설정 값을 `.env` 파일에 입력

---

## 💻 개발 서버 실행

### 개발 서버를 시작

```bash
npm run dev
```

**정상 실행 시:**
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 브라우저에서 확인

개발 서버가 시작되면 브라우저를 열어주세요.
자동으로 열리지 않으면 `http://localhost:5173`에 접속하세요.

### Hot Module Replacement (HMR)

개발 모드에서 실행 중일 때 코드를 수정하면 브라우저가 자동으로 새로고침됩니다.
저장만 하면 즉시 반영되므로 개발이 빠릅니다.

---

## 📦 라이브러리 빌드

### 프로덕션 빌드

```bash
npm run build
```

### 빌드 결과물

빌드가 완료되면 `dist/` 폴더에 아래 파일들이 생성됩니다:

```
dist/
├── sns-components.es.js     # ESM 모듈 (ES6 import/export)
├── sns-components.umd.js    # UMD 모듈 (범용)
└── style.css                # 스타일 파일 (있을 경우)
```

### 빌드 결과 미리보기

```bash
npm run preview
```

빌드된 결과물을 로컬 서버에서 실행 확인할 수 있습니다.

---

## 🔄 개발 서버 워크플로우

### 기본적인 개발 개발 흐름

1. **개발 서버 시작**
   ```bash
   npm run dev
   ```

2. **컴포넌트 개발**
   - `src/lib/components/`에서 `.wc.svelte` 파일 생성/수정
   - 자동으로 결과물이 브라우저에 반영됨

3. **데모 앱에서 테스트**
   - `src/demo/App.svelte`에서 컴포넌트 사용
   - 동작을 바로 확인

4. **빌드 및 배포**
   ```bash
   npm run build
   ```

---

## 📁 주요 파일 및 폴더

### 개발 시 자주 접근하는 파일들

```
web/
├── src/
│   ├── lib/
│   │   ├── components/          # 모든 Web Components 개발
│   │   │   ├── *.wc.svelte      # Custom Elements
│   │   │   └── ...
│   │   ├── stores/              # 상태 관리 스토어
│   │   ├── utils/               # 유틸리티 함수
│   │   └── index.js             # 라이브러리 진입점
│   └── demo/                    # 개발/테스트 앱
│       ├── App.svelte           # 데모 앱 메인 컴포넌트
│       └── index.html           # 데모 앱 HTML
├── .env                         # Firebase 설정 (Git에서 제외됨)
├── .env.example                 # 설정 샘플 파일
├── package.json                 # 프로젝트 정보 및 의존성
├── vite.config.js               # 라이브러리 빌드 설정
└── vite.demo.config.js          # 데모 앱 개발 서버 설정
```

---

## 🆘 문제 해결

### 포트 이미 사용 중 오류

**설치 실행 시:**
```
Port 5173 is in use, trying another one...
```

**해결 방법:**
- Vite가 자동으로 다른 포트 찾음
- 또는 기존 프로세스를 종료하세요:
  ```bash
  # macOS/Linux
  lsof -ti:5173 | xargs kill -9
  ```

### 의존성 설치 실패

**해결 방법:**
```bash
# node_modules 폴더 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
```

### Firebase 연결 실패

**확인 사항:**
1. `.env` 파일이 존재하는지 확인
2. Firebase 설정 값이 올바른지 확인
3. Firebase 프로젝트가 활성화되어 있는지 확인
4. `.env` 파일 수정 후 개발 서버 재시작

---

## 📚 추가 참고

### 더 자세한 정보

- [웹 개발 지침](./sns-web.md) - 웹 개발 워크플로우 및 규칙
- [Svelte Custom Elements 개발 가이드](./sns-custom-elements.md) - Custom Elements 개발 상세 가이드
- [웹 프로젝트 README](../README.md) - 프로젝트 상세 설명 및 기능

### 외부 문서

- [Svelte 5 튜토리얼](https://svelte.dev/tutorial/svelte/welcome-to-svelte)
- [Svelte 5 Custom Elements 문서](https://svelte.dev/docs/svelte/custom-elements)
- [Vite 공식 문서](https://vitejs.dev/)
- [Firebase 공식 문서](https://firebase.google.com/docs)

---

## 🎯 자주 사용하는 명령어

### 개발 중 자주 쓰는 명령어 모음

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 라이브러리 빌드
npm run build

# 빌드 결과 미리보기
npm run preview

# 패키지 업데이트 확인
npm outdated

# 특정 패키지 업데이트
npm update <package-name>
```

---

## ✅ 체크리스트

프로젝트를 시작할 수 있는지 확인하세요:

- [ ] Node.js 18.x 이상 설치됨
- [ ] 프로젝트 복제 완료
- [ ] `npm install` 실행 완료
- [ ] `.env` 파일 생성 및 Firebase 설정 완료
- [ ] `npm run dev` 실행 성공
- [ ] 브라우저에서 `http://localhost:5173` 접속 가능
- [ ] 데모 앱이 정상적으로 표시됨

모든 항목이 체크되었다면 개발을 시작할 준비가 완료되었습니다! 🎉
