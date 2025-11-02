# SNS Web Components

Svelte 5 Custom Elements를 사용한 재사용 가능한 소셜 네트워크 컴포넌트 라이브러리입니다.

## 🎯 프로젝트 개요

이 프로젝트는 **Vite 라이브러리 모드**를 사용하여 Svelte 5 Custom Elements (Web Components)를 개발합니다. SvelteKit 없이 순수 Svelte + Vite로 구성되어 경량화되고 재사용성이 높습니다.

## 🛠️ 기술 스택

- **Svelte 5.43.2**: 최신 Runes 문법 사용
- **Vite**: 라이브러리 모드로 빌드
- **Firebase**: Authentication + Realtime Database
- **Tailwind CSS**: 유틸리티 기반 스타일링
- **Web Components**: 프레임워크 독립적인 컴포넌트

## 📦 포함된 컴포넌트

### `<login-form>`
Firebase Authentication을 사용한 로그인/회원가입 폼입니다.

**사용법:**
```html
<login-form></login-form>
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
│   │   │   ├── LoginForm.wc.svelte
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
</head>
<body>
  <!-- 컴포넌트 사용 -->
  <login-form></login-form>
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

프로젝트 루트에 `.env` 파일을 생성하고 Firebase 설정을 추가하세요:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_DATABASE_URL=your_database_url
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

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
- [SNS 프로젝트 전체 개요](../docs/sns.md) - 서비스 기획 및 전체 개요
- [웹 개발 지침](../docs/web/sns-web.md) - 웹 개발 워크플로우
- [Svelte Custom Elements 개발 가이드](../docs/web/sns-custom-elements.md) - Custom Elements 개발 상세 가이드
- [프로젝트 개발 지침](../CLAUDE.md) - 전체 프로젝트 개발 규칙

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
