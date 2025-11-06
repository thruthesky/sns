/**
 * 게시글 타입 정의
 *
 * Firebase Realtime Database의 게시글 데이터 구조를 정의합니다.
 * 데이터 구조 (Flat Style): /posts/{postId}
 */

import type { Timestamp, UserId, FirebaseKey, ApiResult, CreateResult } from './common';
import type { PostCategory } from './category';
export type { PostCategory, POST_CATEGORIES } from './category';

/**
 * 게시글 데이터 구조
 */
export interface Post {
  uid: UserId;
  title: string;
  content: string;
  author: string;
  category: PostCategory;
  order: string; // "<category>-<timestamp>" 형식
  createdAt: Timestamp;
  updatedAt: Timestamp;
  likeCount: number;
  commentCount: number;
  urls?: string[]; // 첨부 파일 URL 목록 (선택)
}

/**
 * 게시글 ID가 포함된 게시글 데이터
 */
export interface PostWithId extends Post {
  postId: FirebaseKey;
}

/**
 * 게시글 생성 파라미터
 */
export interface CreatePostParams {
  category: PostCategory;
  uid: UserId;
  author: string;
  title: string;
  content: string;
}

/**
 * 게시글 수정 파라미터
 */
export interface UpdatePostParams {
  title?: string;
  content?: string;
  urls?: string[]; // 첨부 파일 URL 목록 (선택)
}

/**
 * 게시글 생성 결과
 */
export interface CreatePostResult extends CreateResult {
  postId?: FirebaseKey;
}

/**
 * 게시글 업데이트 결과
 */
export type UpdatePostResult = ApiResult;

/**
 * 게시글 삭제 결과
 */
export type DeletePostResult = ApiResult;

/**
 * 게시글 리스너 콜백 함수
 */
export type PostsCallback = (posts: PostWithId[]) => void;
