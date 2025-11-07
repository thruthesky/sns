/**
 * 신고 기능 관련 타입 정의
 *
 * 이 파일은 신고 기능에서 사용하는 타입들을 정의합니다.
 * - ReportReason: 신고 사유 (5가지)
 * - ReportType: 신고 대상 타입 (게시글, 댓글)
 * - ReportWithId: 신고 데이터 (ID 포함)
 * - AddReportResult: 신고 추가 결과
 * - RemoveReportResult: 신고 취소 결과
 */

import type { FirebaseKey, UserId } from './common';

/**
 * 신고 사유 (Reason)
 *
 * 사용자가 선택할 수 있는 5가지 신고 사유:
 * - abuse: 욕설, 시비, 모욕, 명예훼손
 * - fake-news: 가짜 뉴스, 잘못된 정보
 * - spam: 스팸, 악용
 * - inappropriate: 카테고리에 맞지 않는 글 등록
 * - other: 기타
 */
export type ReportReason = 'abuse' | 'fake-news' | 'spam' | 'inappropriate' | 'other';

/**
 * 신고 대상 타입
 *
 * - post: 게시글 신고
 * - comment: 댓글 신고
 */
export type ReportType = 'post' | 'comment';

/**
 * 신고 데이터 인터페이스 (ID 제외)
 *
 * Firebase Realtime Database의 /reports/ 노드에 저장되는 데이터 구조
 *
 * @property type - 신고 대상 타입 ('post' 또는 'comment')
 * @property nodeId - 게시글 ID 또는 댓글 ID
 * @property uid - 신고자 사용자 UID
 * @property reason - 신고 사유 (5가지 중 하나)
 * @property message - 상세 설명 (선택 사항, 기본값: 빈 문자열)
 * @property createdAt - 신고 생성 시간 (Unix timestamp, 밀리초)
 */
export interface Report {
  type: ReportType;
  nodeId: string;
  uid: UserId;
  reason: ReportReason;
  message: string;
  createdAt: number;
}

/**
 * 신고 데이터 인터페이스 (ID 포함)
 *
 * 클라이언트에서 신고 목록을 렌더링할 때 사용
 *
 * @property reportId - 신고 고유 ID (형식: "post-{postId}-{uid}" 또는 "comment-{commentId}-{uid}")
 * @property type - 신고 대상 타입
 * @property nodeId - 게시글 ID 또는 댓글 ID
 * @property uid - 신고자 사용자 UID
 * @property reason - 신고 사유
 * @property message - 상세 설명
 * @property createdAt - 신고 생성 시간
 */
export interface ReportWithId extends Report {
  reportId: string;
}

/**
 * 신고 추가 결과
 *
 * @property success - 성공 여부
 * @property reportId - 생성된 신고 ID (성공 시)
 * @property error - i18n 에러 키 (실패 시)
 * @property errorMessage - 원본 에러 메시지 (실패 시)
 */
export interface AddReportResult {
  success: boolean;
  reportId?: string;
  error?: string;
  errorMessage?: string;
}

/**
 * 신고 취소 결과
 *
 * @property success - 성공 여부
 * @property error - i18n 에러 키 (실패 시)
 * @property errorMessage - 원본 에러 메시지 (실패 시)
 */
export interface RemoveReportResult {
  success: boolean;
  error?: string;
  errorMessage?: string;
}

/**
 * 신고 상태 확인 결과
 *
 * @property isReported - 신고 여부
 * @property reportId - 신고 ID (신고한 경우)
 */
export interface CheckReportStatusResult {
  isReported: boolean;
  reportId?: string;
}

/**
 * 신고 사유 상수
 *
 * 타입 안정성을 위해 상수 객체로 정의
 */
export const REPORT_REASONS = {
  ABUSE: 'abuse',
  FAKE_NEWS: 'fake-news',
  SPAM: 'spam',
  INAPPROPRIATE: 'inappropriate',
  OTHER: 'other'
} as const;
