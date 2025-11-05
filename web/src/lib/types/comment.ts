/**
 * 댓글 타입 정의
 *
 * Firebase Realtime Database의 댓글 데이터 구조를 정의합니다.
 * 데이터 구조 (Flat Style): /comments/{commentId}
 */

import type { Timestamp, UserId, FirebaseKey, CreateResult } from './common';

/**
 * 댓글 데이터 구조
 */
export interface Comment {
  postId: FirebaseKey; // 소속 게시글 ID
  uid: UserId;
  content: string;
  depth: number; // 댓글 깊이 (1~12)
  order: string; // 계층적 정렬을 위한 필드
  parentId: FirebaseKey | null; // 부모 댓글 ID (최상위는 null)
  likeCount: number; // 좋아요 개수 (Cloud Functions에서 자동 관리)
  commentCount: number; // 자식 댓글(대댓글) 개수 (Cloud Functions에서 자동 관리)
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

/**
 * 댓글 ID가 포함된 댓글 데이터
 */
export interface CommentWithId extends Comment {
  commentId: FirebaseKey;
}

/**
 * 최상위 댓글 생성 파라미터
 */
export interface CreateTopLevelCommentParams {
  postId: FirebaseKey;
  userId: UserId;
  content: string;
}

/**
 * 대댓글 생성 파라미터
 */
export interface CreateChildCommentParams {
  parentCommentId: FirebaseKey;
  userId: UserId;
  content: string;
}

/**
 * 댓글 생성 결과
 */
export interface CreateCommentResult extends CreateResult {
  commentId?: FirebaseKey;
}

/**
 * 댓글 리스너 콜백 함수
 */
export type CommentsCallback = (comments: CommentWithId[]) => void;
