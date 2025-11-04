/**
 * SNS Web Components 라이브러리 진입점
 *
 * 모든 Custom Elements와 유틸리티를 내보냅니다.
 *
 * 사용법:
 * // HTML에서 사용
 * <script type="module" src="./dist/sns-components.es.js"></script>
 *
 * // JavaScript/TypeScript에서 사용
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

// 개발 도구 컴포넌트
import './components/TestFab.wc.svelte';

// Firebase 유틸리티 내보내기
export { auth, database, storage } from './utils/firebase.js';

// Firebase 타입 내보내기
export type { FirebaseApp } from 'firebase/app';
export type { Auth, User } from 'firebase/auth';
export type { Database } from 'firebase/database';
export type { FirebaseStorage } from 'firebase/storage';

// 인증 스토어 및 함수 내보내기
export {
  user,
  loading,
  signIn,
  signUp,
  signOut
} from './stores/auth.js';

// 인증 관련 타입 내보내기
export type { AuthResult } from './stores/auth.js';

// 데이터베이스 유틸리티 내보내기
export {
  writeData,
  updateData,
  deleteData,
  pushData,
  readData,
  createRealtimeStore,
  rtdb,  // createRealtimeStore의 alias (짧은 이름)
  setupPresence
} from './stores/database.js';

// 데이터베이스 관련 타입 내보내기
export type {
  RealtimeStoreState,
  RealtimeStore,
  DataOperationResult,
  PushDataResult,
  ReadDataResult,
  UserStatus
} from './stores/database.js';

// 에러 핸들러 내보내기
export {
  handleFirebaseError,
  logAndShowError,
  mapFirebaseErrorCode
} from './utils/error-handler.js';

// 에러 핸들러 타입 내보내기
export type {
  FirebaseError,
  ErrorInfo,
  ShowToastFunction,
  TranslateFunction
} from './utils/error-handler.js';

// 게시판 서비스 내보내기
export {
  createPost,
  listenToPosts,
  updatePost,
  deletePost
} from './services/forum.js';

// 게시판 관련 타입 내보내기
export type {
  Post,
  PostWithId,
  PostCategory,
  CreatePostParams,
  UpdatePostParams,
  CreatePostResult,
  UpdatePostResult,
  DeletePostResult,
  PostsCallback
} from './types/post';

// 카테고리 관련 타입 및 상수 내보내기
export type { PostCategory as Category } from './types/category';
export { POST_CATEGORIES } from './types/category';

// 댓글 서비스 내보내기
export {
  createTopLevelComment,
  createChildComment,
  listenToComments
} from './services/comment.js';

// 댓글 관련 타입 내보내기
export type {
  Comment,
  CommentWithId,
  CreateTopLevelCommentParams,
  CreateChildCommentParams,
  CreateCommentResult,
  CommentsCallback
} from './types/comment';

// 좋아요 서비스 내보내기
export {
  addLike,
  removeLike,
  checkLikeStatus,
  listenToLikeStatus,
  getPostLikes,
  toggleLike
} from './services/like.js';

// 좋아요 관련 타입 내보내기
export type {
  PostLike,
  AddLikeResult,
  RemoveLikeResult,
  ToggleLikeResult,
  LikeStatusCallback,
  AddLikeParams,
  RemoveLikeParams,
  ToggleLikeParams
} from './types/like';

// 공통 타입 내보내기
export type {
  ApiResult,
  CreateResult,
  Timestamp,
  UserId,
  FirebaseKey
} from './types/common';

console.log('SNS Web Components 로드됨 ✅');
