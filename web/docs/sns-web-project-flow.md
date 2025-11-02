# SNS Web 프로젝트 플로우

- 본 문서는 SNS 웹 프로젝트 개발 플로우에 대한 개요를 제공합니다. Svelte 5 Custom Elements와 Firebase를 활용한 개발 환경 설정 및 주요 흐름을 설명합니다.
  - 본 SNS 프로젝트의 전체적인 흐름을 파악하고자 할 때 이 문서를 참고하면 됩니다.

## 전체 구조 개요
- 저장소 최상단 `web/` 폴더는 **Svelte 5 + Vite** 기반의 라이브러리/데모 프로젝트입니다.
- `vite.config.js`는 라이브러리 번들을, `vite.demo.config.js`는 데모 애플리케이션 개발 서버를 담당합니다.
- 모든 사용자 인터랙션은 `src/lib/`에서 정의한 **Web Component**(Custom Element)와 **Firebase 스토어**를 통해 처리됩니다.

## 1. 기본 Vite 앱 부팅 순서 (`npm run build` 이후 프리뷰 또는 `vite` 기본 엔트리)
```
web/index.html
  -> src/main.js
    -> src/App.svelte
      -> src/lib/Counter.svelte
```
- `web/index.html` : `#app` 루트 노드를 만들고 `/src/main.js`를 모듈로 로드합니다.
- `web/src/main.js` : Svelte의 `mount` 함수로 `App.svelte`를 `#app`에 부착하고, 전역 CSS `app.css`를 함께 불러옵니다.
- `web/src/App.svelte` : 기본 템플릿 UI. Vite/Svelte 로고와 `Counter` 컴포넌트를 렌더링하여 런타임이 동작하는지 확인하는 초기 화면을 제공합니다.
- `web/src/lib/Counter.svelte` : Svelte 5 Runes(`$state`)를 활용한 간단한 상태 증가 버튼. 기본 번들의 반응형 파이프라인을 보여주는 예시입니다.

## 2. Firebase 초기화 파이프라인
```
src/lib/components/*.wc.svelte
 or src/demo/App.svelte
    -> src/lib/index.js
      -> src/lib/utils/firebase.js
        -> Firebase App/Auth/Database 인스턴스 생성
```
- `src/lib/utils/firebase.js`
  1. `import.meta.env.VITE_*` 값으로 Firebase 설정 객체를 구성합니다.
  2. `initializeApp(firebaseConfig)` 호출로 Firebase 앱을 생성합니다.
  3. `getAuth`, `getDatabase`를 호출하여 Auth/Realtime Database 인스턴스를 export 합니다.
  4. 이 파일이 처음 import 되는 시점에 한 번만 초기화가 이뤄집니다.
- `src/lib/stores/auth.js`와 `src/lib/stores/database.js`는 위에서 export 한 인스턴스를 사용해 인증/데이터베이스 로직을 구성합니다.
- 환경 변수는 `.env` (또는 `.env.example`)에 정의하며, Vite가 빌드/런타임에서 자동 주입합니다.

## 3. 라이브러리 엔트리 (`npm run build`)
```
vite.config.js (library mode)
  -> build.lib.entry = src/lib/index.js
    -> components/LoginForm.wc.svelte (customElement 등록)
    -> components/PostList.wc.svelte (customElement 등록)
    -> stores/*, utils/firebase.js 재노출
```
- `vite.config.js`는 `customElement: true` 옵션을 `.wc.svelte` 파일에만 적용하여, `LoginForm`/`PostList`가 자동으로 `customElements.define()` 됩니다.
- 번들 결과물은 `dist/sns-components.es.js`(ESM)와 `dist/sns-components.umd.js`이며, Firebase 패키지는 외부 의존성으로 분리됩니다.
- 라이브러리를 불러오는 프로젝트는 HTML에서 `<script type="module" src=".../sns-components.es.js"></script>` 형태로 삽입하면 Custom Element가 전역에 등록됩니다.

## 4. 데모 앱 실행 흐름 (`npm run dev`)
```
vite.demo.config.js (root=src/demo)
  -> src/demo/index.html
    -> src/demo/main.js
      -> src/demo/App.svelte
        -> <login-form> / <post-list> Custom Element 사용
```
- `vite.demo.config.js` : 데모 루트를 `src/demo`로 지정하고, 동일하게 `.wc.svelte`만 Custom Element로 컴파일합니다. `envDir`를 프로젝트 루트로 돌려 Firebase 환경 변수를 공유합니다.
- `src/demo/index.html` : 데모 전용 `#app` 노드를 만들고 `./main.js`를 로드합니다.
- `src/demo/main.js` : 메인 앱과 동일하게 `App.svelte`를 마운트합니다.
- `src/demo/App.svelte`
  1. `import '../lib/index.js'`로 라이브러리 엔트리를 즉시 로드하며 Firebase와 Custom Element를 초기화합니다.
  2. `user` 스토어를 구독해 로그인 상태를 표시하고, `signOut` 함수를 버튼에 바인딩합니다.
  3. 탭 UI(`login`, `posts`, `about`)를 구성해 각 Custom Element를 시연합니다.
  4. `<login-form>`의 `login-success`/`login-error` 이벤트를 받아 상태 메시지를 업데이트합니다.
  5. `<post-list>`에서 게시물 클릭 시 `post-click` 이벤트로 상세 정보를 띄웁니다.

## 5. 각 주요 컴포넌트/스토어 상세 흐름
### 5.1 `<login-form>` (`src/lib/components/LoginForm.wc.svelte`)
```
폼 제출
  -> signIn 또는 signUp (src/lib/stores/auth.js)
    -> Firebase Auth API
      -> 성공 시 CustomEvent('login-success')
      -> 실패 시 CustomEvent('login-error')
```
- Rune 기반 `email`, `password`, `displayName`, `loading` 상태로 폼 입력을 관리합니다.
- `isSignUpMode`로 로그인/회원가입 모드를 전환하고, 성공하면 폼 데이터를 초기화합니다.
- 이벤트는 `bubbles: true`, `composed: true` 설정으로 Shadow DOM 바깥에서도 수신 가능합니다.

### 5.2 인증 스토어 (`src/lib/stores/auth.js`)
```
onAuthStateChanged(auth)
  -> user writable 업데이트
  -> loading writable false
signIn / signUp / signOut
  -> Firebase Auth 호출
  -> 결과 객체 { success, error? } 반환
```
- 전역 `user` 스토어는 로그인 상태를 유지하고, 컴포넌트 어디서든 `import { user } ...`로 접근 가능합니다.
- 에러 코드별 한글 메시지를 매핑하여 UI 친화적인 피드백을 제공합니다.

### 5.3 `<post-list>` (`src/lib/components/PostList.wc.svelte`)
```
컴포넌트 마운트
  -> ref(database, path) 생성
    -> onValue 구독
      -> snapshot 데이터 정렬/슬라이싱
        -> posts 상태 반영
클릭/키보드 이벤트
  -> CustomEvent('post-click', { detail: { post } })
```
- `limit` 속성으로 출력 개수를 제어하며, 최신 `timestamp` 순으로 정렬합니다.
- 로딩/에러 상태를 자체적으로 관리하여 컴포넌트 단위로 UX를 완성합니다.

### 5.4 데이터베이스 유틸 (`src/lib/stores/database.js`)
```
createRealtimeStore(path)
  -> writable 스토어 생성
  -> onValue 로 데이터 실시간 반영
  -> unsubscribe() 제공
CRUD 메서드
  -> writeData / updateData / deleteData / pushData / readData
setupPresence(userId)
  -> .info/connected 감시
  -> status/{userId} 경로 업데이트
```
- 데모 앱 외부에서도 재사용 가능한 API 모듈로, 다른 프런트엔드에서 그대로 가져다 쓸 수 있습니다.

## 6. 초기 화면 렌더링 요약
- **Vite 기본 엔트리** : `App.svelte`가 Svelte/Vite 로고 + Counter 버튼을 출력합니다. 이는 라이브러리 코드와 별개이며, 프로젝트 템플릿 확인 용도입니다.
- **데모 엔트리** : `App.svelte`가 바로 `<login-form>` 탭을 보여주며, 로그인 이벤트에 따라 `<post-list>` 탭으로 이동합니다. 로그인하지 않은 상태라도 탭 이동은 가능하고, 게시물 보기에서는 경고 메시지를 표시합니다.
- **라이브러리 소비자** : 외부 프로젝트에서 `<login-form>`이나 `<post-list>`를 DOM에 배치하면, import 시점에 Firebase가 초기화되고 동일한 흐름으로 작동합니다.

## 7. 실행 및 테스트 팁
- `npm run dev` : 데모 앱을 실행하여 Custom Element를 실시간 확인합니다.
- `npm run build` : `dist/` 폴더에 라이브러리 번들을 생성합니다.
- Firebase 연결이 되지 않은 상태에서는 placeholder 설정으로 앱이 초기화되나, 실제 데이터/인증은 동작하지 않으므로 `.env`를 올바르게 채워야 합니다.

이 구조를 이해하면, 원하는 Custom Element를 추가하거나 Firebase 로직을 확장할 때 어느 계층을 수정해야 하는지 빠르게 파악할 수 있습니다.
