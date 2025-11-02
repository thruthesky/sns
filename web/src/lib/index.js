/**
 * SNS Web Components 라이브러리 진입점
 *
 * 모든 Custom Elements와 유틸리티를 내보냅니다.
 *
 * 사용법:
 * // HTML에서 사용
 * <script type="module" src="./dist/sns-components.es.js"></script>
 *
 * // JavaScript에서 사용
 * import '@sns/web-components';
 * import { auth, database, signIn, signOut } from '@sns/web-components';
 */

// Web Components 가져오기
// .wc.svelte 파일을 import하면 자동으로 customElements.define() 호출됨
import './components/PostList.wc.svelte';
import './components/PhoneLogin.wc.svelte';

// 레이아웃 컴포넌트
import './components/Topbar.wc.svelte';
import './components/LeftSidebar.wc.svelte';
import './components/RightSidebar.wc.svelte';
import './components/Layout.wc.svelte';

// UI 컴포넌트
import './components/Accordion.wc.svelte';

// Firebase 유틸리티 내보내기
export { auth, database } from './utils/firebase.js';

// 인증 스토어 및 함수 내보내기
export {
  user,
  loading,
  signIn,
  signUp,
  signOut
} from './stores/auth.js';

// 데이터베이스 유틸리티 내보내기
export {
  writeData,
  updateData,
  deleteData,
  pushData,
  readData,
  createRealtimeStore,
  setupPresence
} from './stores/database.js';

console.log('SNS Web Components 로드됨 ✅');
