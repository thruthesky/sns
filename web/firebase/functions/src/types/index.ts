/**
 * Firebase Cloud Functions TypeScript 타입 정의
 * SNS 프로젝트의 모든 타입을 통합 관리합니다.
 */

/**
 * 게시판 카테고리 상수
 * - community: 커뮤니티
 * - qna: 질문과 답변
 * - news: 뉴스
 * - market: 회원장터
 */
export const FORUM_CATEGORIES = ["community", "qna", "news", "market"] as const;

/**
 * 게시판 카테고리 타입
 */
export type ForumCategory = (typeof FORUM_CATEGORIES)[number];

/**
 * 게시글 데이터 인터페이스
 */
export interface PostData {
  /** 작성자 UID */
  uid?: string;
  /** 작성자 displayName */
  author?: string;
  /** 게시글 제목 */
  title?: string;
  /** 게시판 카테고리 */
  category?: ForumCategory | string;
  /** 정렬용 문자열 (Flat style: "<category>-<timestamp>") */
  order?: string;
  /** 생성 시간 (Unix timestamp, 밀리초) */
  createdAt?: number;
  /** 수정 시간 (Unix timestamp, 밀리초) */
  updatedAt?: number;
  /** 좋아요 개수 (Cloud Functions에서 자동 관리) */
  likeCount?: number;
  /** 댓글 개수 (Cloud Functions에서 자동 관리) */
  commentCount?: number;
}

/**
 * 댓글 데이터 인터페이스
 */
export interface CommentData {
  /** 소속 게시글 ID (Flat style) */
  postId?: string;
  /** 작성자 UID */
  uid?: string;
  /** 부모 댓글 ID (첫 레벨은 null) */
  parentId?: string | null;
  /** 댓글 깊이 (1~12) */
  depth?: number;
  /** 정렬용 문자열 (postId 접두사 포함) */
  order?: string;
  /** 생성 시간 (Unix timestamp, 밀리초) */
  createdAt?: number;
  /** 수정 시간 (Unix timestamp, 밀리초) */
  updatedAt?: number;
  /** 좋아요 개수 (Cloud Functions에서 자동 관리) */
  likeCount?: number;
}

/**
 * 사용자 데이터 인터페이스
 */
export interface UserData {
  /** 사용자 닉네임 */
  displayName?: string;
  /** 프로필 사진 URL (사용자 업로드) */
  photoUrl?: string;
  /** Firebase Auth photoURL (대문자, deprecated) */
  photoURL?: string;
  /** 계정 생성 시간 (Unix timestamp, 밀리초) */
  createdAt?: number;
  /** 프로필 수정 시간 (Unix timestamp, 밀리초) */
  updatedAt?: number;
  /** 성별 (M|F) */
  gender?: string;
  /** 생년 */
  birthYear?: number;
  /** 생월 */
  birthMonth?: number;
  /** 생일 */
  birthDay?: number;
}

/**
 * likeId 파싱 결과 인터페이스
 * 형식: "post-<post-id>-<uid>" 또는 "comment-<comment-id>-<uid>"
 */
export interface ParsedLikeId {
  /** 좋아요 타입 (post | comment) */
  type: "post" | "comment";
  /** 노드 ID (postId 또는 commentId) */
  nodeId: string;
  /** 사용자 UID */
  uid: string;
}
