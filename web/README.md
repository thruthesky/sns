# SNS Web Components

Svelte 5 Custom Elements를 사용한 재사용 가능한 소셜 네트워크 컴포넌트 라이브러리입니다.

## 🎯 프로젝트 개요

이 프로젝트는 **Vite 라이브러리 모드**를 사용하여 Svelte 5 Custom Elements (Web Components)를 개발합니다. SvelteKit 없이 순수 Svelte + Vite로 구성되어 경량화되고 재사용성이 높습니다.

## 🌐 실제 운영 사이트

**소노브닷컴(Sonub.com)**에서 본 소스 코드로 만들어진 실제 운영 중인 프로젝트를 확인할 수 있습니다. 현재 Firebase 기반으로 구축된 완전한 SNS 서비스가 실제로 작동하는 것을 볼 수 있습니다.

## 📌 공개 범위

현재 프로젝트는 **일대일 채팅 기능**까지 개발된 후 공개됩니다. 포함되는 기능은 다음과 같습니다:

- ✅ **게시판 전체 기능** - 커뮤니티, 질문답변, 뉴스, 장터 등
- ✅ **일대일 채팅 전체 기능** - 실시간 메시징
- ✅ **회원관리 전체 기능** - 회원가입, 로그인, 프로필 관리
- ✅ **운영자 페이지 기능** - 관리자 대시보드 및 관리 도구

⚠️ **중요**: 이 시점 이후로 개발되는 코드는 **비공개로 전환**됩니다. 실제 프로젝트로 운영되기 때문에 추가 개발 내용은 소스코드가 공개되지 않습니다.

## 🤖 SED AI 바이브 코딩

본 프로젝트는 **SED AI 바이브 코딩 기법**으로 개발되었습니다.

- 🔗 **SED 홈페이지**: [https://www.npmjs.com/package/sedai](https://www.npmjs.com/package/sedai)

### ⚠️ 라이선스 주의사항

본 프로젝트는 **SED LICENSE**를 따릅니다. 

**중요**: 인공지능(AI)을 통해 웹/앱을 개발하더라도 **저작권은 개발자 본인에게 있지 않으며**, **원 SED Spec 저작자**에게 있습니다. 이 점을 반드시 유념하시기 바랍니다.

SED 스펙에 SED LICENSE를 적용하면, 업데이트(파생) 스펙 및 인공지능으로 생성한 저작물의 저작권이 원 스펙 저작자에게 있습니다.

## 🛠️ 기술 스택

- **Svelte 5.43.2**: 최신 Runes 문법 사용
- **Vite**: 라이브러리 모드로 빌드
- **Firebase**: Authentication + Realtime Database
- **Tailwind CSS**: 유틸리티 기반 스타일링
- **Web Components**: 프레임워크 독립적인 컴포넌트

## 📦 포함된 컴포넌트

### `<phone-login>`
Firebase Phone Authentication을 사용한 전화번호 로그인 폼입니다.

**사용법:**
```html
<phone-login></phone-login>
```

**이벤트:**
- `login-success`: 로그인 성공 시 발생
- `login-error`: 로그인 실패 시 발생

### `<post-list>`
Firebase Realtime Database의 게시물을 실시간으로 표시합니다.

**사용법:**
```html
<post-list path="posts" limit="10"></post-list>
```

**Props:**
- `path`: 데이터베이스 경로 (기본값: 'posts')
- `limit`: 표시할 게시물 수 (기본값: 10)

**이벤트:**
- `post-click`: 게시물 클릭 시 발생

## 🚀 시작하기

### 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버가 `http://localhost:5173`에서 시작됩니다.

### 라이브러리 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다:
- `sns-components.es.js` (ESM 모듈)
- `sns-components.umd.js` (UMD 모듈)

## 📂 프로젝트 구조

```
web/
├── src/
│   ├── lib/                        # 라이브러리 소스
│   │   ├── components/             # Web Components
│   │   │   ├── PhoneLogin.wc.svelte
│   │   │   └── PostList.wc.svelte
│   │   ├── stores/                 # 공유 스토어
│   │   │   ├── auth.js
│   │   │   └── database.js
│   │   ├── utils/                  # 유틸리티
│   │   │   └── firebase.js
│   │   └── index.js                # 라이브러리 진입점
│   └── demo/                       # 개발/테스트 앱
│       ├── index.html
│       ├── main.js
│       ├── App.svelte
│       └── app.css
├── dist/                           # 빌드 출력
├── package.json
├── vite.config.js                  # 라이브러리 빌드 설정
├── vite.demo.config.js             # 개발 서버 설정
├── svelte.config.js
└── tailwind.config.js
```

## 💡 사용 방법

### HTML에서 직접 사용

```html
<!DOCTYPE html>
<html>
<head>
  <!-- 라이브러리 로드 -->
  <script type="module" src="./dist/sns-components.es.js"></script>
  <!-- Google reCAPTCHA (Phone Login에 필요) -->
  <script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer></script>
</head>
<body>
  <!-- 컴포넌트 사용 -->
  <phone-login></phone-login>
  <post-list path="posts" limit="10"></post-list>
</body>
</html>
```

### JavaScript에서 사용

```javascript
import '@sns/web-components';
import { auth, signIn, signOut, user } from '@sns/web-components';

// 사용자 상태 구독
user.subscribe($user => {
  if ($user) {
    console.log('로그인됨:', $user.email);
  }
});

// 로그인
await signIn('user@example.com', 'password');

// 로그아웃
await signOut();
```

## 🔧 Firebase 설정

현재 라이브러리는 환경 변수가 아닌 정적 설정 파일을 사용합니다.  
Firebase 콘솔에서 **Project settings → Your apps → SDK setup and configuration → Config** 값을 확인한 뒤, 다음 파일을 수정하세요.

- 경로: `src/config/firebase.web-config.js`
- 수정 방법: 기본으로 포함된 객체의 값을 자신의 프로젝트 값으로 교체

```js
// src/config/firebase.web-config.js
export const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  databaseURL: 'https://YOUR_PROJECT-default-rtdb.firebaseio.com',
  projectId: 'YOUR_PROJECT',
  storageBucket: 'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'YOUR_APP_ID'
};
```

여러 환경(개발/운영 등)을 나눠야 한다면, 파일을 환경별로 분리하거나 번들 과정에서 원하는 설정 파일을 선택하도록 스크립트를 구성하면 됩니다.

## ✨ 주요 특징

- ✅ **경량**: SvelteKit 없이 순수 Svelte + Vite 라이브러리 모드
- ✅ **재사용 가능**: 프레임워크 독립적인 Web Components
- ✅ **실시간**: Firebase Realtime Database를 통한 실시간 데이터 동기화
- ✅ **타입 안전**: JSDoc 주석으로 타입 정보 제공
- ✅ **한글 문서화**: 모든 코드에 한글 주석 포함
- ✅ **데모 앱 포함**: 개발 및 테스트를 위한 독립 앱

## 📚 관련 문서

### Svelte 공식 문서
- [Svelte 5 Custom Elements 공식 문서](https://svelte.dev/docs/svelte/custom-elements)
- [Svelte MCP 문서](https://svelte.dev/docs/mcp/overview)

### 프로젝트 문서
- [SNS 프로젝트 전체 개요](../specs/sns.md) - 서비스 기획 및 전체 개요
- [웹 개발 지침](specs/sns-web.md) - 웹 개발 워크플로우
- [Svelte Custom Elements 개발 가이드](specs/sns-custom-elements.md) - Custom Elements 개발 상세 가이드
- [프로젝트 개발 지침](CLAUDE.md) - 전체 프로젝트 개발 규칙

## 📝 스크립트

- `npm run dev` - 개발 서버 실행 (데모 앱)
- `npm run build` - 라이브러리 빌드
- `npm run preview` - 빌드 결과물 미리보기

## 🤝 기여

이 프로젝트는 SNS 소셜 네트워크 서비스의 일부입니다. 기여 방법은 프로젝트 루트의 문서를 참고하세요.

## 📄 라이선스

이 프로젝트의 라이선스는 프로젝트 루트를 참고하세요.

---

**🎨 Made with Svelte 5 & Firebase**
