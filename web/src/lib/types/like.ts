/**
 * 좋아요 타입 정의
 *
 * Firebase Realtime Database의 좋아요 데이터 구조를 정의합니다.
 * 데이터 구조 (Flat Style - 통합 좋아요):
 * /likes/
 *   post-<post-id>-<uid>: 1      # 게시글 좋아요
 *   comment-<comment-id>-<uid>: 1 # 댓글 좋아요
 */

import type { UserId, FirebaseKey, ApiResult } from './common';

/**
 * 좋아요 타입
 * 'post': 게시글 좋아요, 'comment': 댓글 좋아요
 */
export type LikeType = 'post' | 'comment';

/**
 * 좋아요 항목 데이터 구조
 * getLikes()에서 반환하는 개별 좋아요 항목
 */
export interface Like {
  uid: UserId;
  value: number; // 항상 1 (좋아요 표시)
}

/**
 * @deprecated PostLike는 Like로 이름이 변경되었습니다. Like를 사용하세요.
 */
export type PostLike = Like;

/**
 * 좋아요 추가 결과
 */
export type AddLikeResult = ApiResult;

/**
 * 좋아요 취소 결과
 */
export type RemoveLikeResult = ApiResult;

/**
 * 좋아요 토글 결과
 * 성공 시 최종 좋아요 상태(isLiked)를 포함
 */
export interface ToggleLikeResult extends ApiResult {
  isLiked: boolean; // true: 좋아요 추가됨, false: 좋아요 취소됨
}

/**
 * 좋아요 상태 리스너 콜백 함수
 * listenToLikeStatus()에서 사용
 */
export type LikeStatusCallback = (isLiked: boolean) => void;

/**
 * 좋아요 추가 파라미터
 */
export interface AddLikeParams {
  postId: FirebaseKey;
  userId: UserId;
}

/**
 * 좋아요 취소 파라미터
 */
export interface RemoveLikeParams {
  postId: FirebaseKey;
  userId: UserId;
}

/**
 * 좋아요 토글 파라미터
 */
export interface ToggleLikeParams {
  postId: FirebaseKey;
  userId: UserId;
}
