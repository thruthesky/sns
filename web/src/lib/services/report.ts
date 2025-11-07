/**
 * 신고 서비스 API
 *
 * Firebase Realtime Database와 상호작용하는 신고 관련 함수들을 제공합니다.
 * 게시글 및 댓글 신고 추가, 취소, 상태 확인 기능을 구현합니다.
 *
 * 데이터 구조 (Flat Style - 통합 신고):
 * /reports/
 *   post-<post-id>-<uid>/
 *     type: "post"
 *     nodeId: "<post-id>"
 *     uid: "<uid>"
 *     reason: "abuse"
 *     message: "상세 설명"
 *     createdAt: 1698473000000
 *
 *   comment-<comment-id>-<uid>/
 *     type: "comment"
 *     nodeId: "<comment-id>"
 *     uid: "<uid>"
 *     reason: "spam"
 *     message: ""
 *     createdAt: 1698473100000
 *
 * /posts/
 *   <post-id>/
 *     reportCount: 3        # 총 신고 개수 (Cloud Functions에서 자동 관리)
 *
 * /comments/
 *   <comment-id>/
 *     reportCount: 5        # 총 신고 개수 (Cloud Functions에서 자동 관리)
 *
 * 사용 예시:
 * import { addReport, removeReport, checkReportStatus, getReportCount } from '$lib/services/report';
 *
 * // 게시글 신고 추가
 * const result = await addReport('post', 'post-id-123', 'user-uid-456', 'abuse', '욕설이 포함되어 있습니다');
 *
 * // 댓글 신고 추가
 * const result = await addReport('comment', 'comment-id-789', 'user-uid-456', 'spam');
 *
 * // 게시글 신고 취소
 * const result = await removeReport('post', 'post-id-123', 'user-uid-456');
 *
 * // 게시글 신고 상태 확인
 * const status = await checkReportStatus('post', 'post-id-123', 'user-uid-456');
 *
 * // 게시글 신고 개수 조회
 * const count = await getReportCount('post', 'post-id-123');
 */

import { database } from '../utils/firebase.js';
import { ref, get, update, remove } from 'firebase/database';
import { handleFirebaseError } from '../utils/error-handler.js';
import type {
  AddReportResult,
  RemoveReportResult,
  CheckReportStatusResult,
  ReportType,
  ReportReason
} from '../types/report';
import type { UserId, FirebaseKey } from '../types/common';

/**
 * 게시글 또는 댓글에 신고를 추가합니다.
 *
 * @param type - 신고 타입 ('post' 또는 'comment')
 * @param nodeId - 게시글 ID 또는 댓글 ID
 * @param userId - 신고자 사용자 UID
 * @param reason - 신고 사유 ('abuse', 'fake-news', 'spam', 'inappropriate', 'other')
 * @param message - 상세 설명 (선택 사항, 기본값: 빈 문자열)
 * @returns 신고 추가 결과 (success, reportId, error)
 *
 * 기능:
 * - `/reports/{type}-{nodeId}-{uid}` 경로에 신고 데이터 저장
 * - Cloud Functions에서 자동으로 reportCount 증가
 * - 중복 방지: 같은 사용자가 이미 신고했으면 덮어쓰기
 *
 * 사용 예시:
 * ```typescript
 * // 게시글 신고 (상세 설명 포함)
 * const result = await addReport('post', 'post-abc123', 'user-xyz789', 'abuse', '욕설이 포함되어 있습니다');
 *
 * // 댓글 신고 (상세 설명 없음)
 * const result = await addReport('comment', 'comment-def456', 'user-xyz789', 'spam');
 *
 * if (result.success) {
 *   console.log('신고가 접수되었습니다. ID:', result.reportId);
 * } else {
 *   console.error('신고 실패:', result.error);
 * }
 * ```
 */
export async function addReport(
  type: ReportType,
  nodeId: FirebaseKey,
  userId: UserId,
  reason: ReportReason,
  message: string = ''
): Promise<AddReportResult> {
  try {
    // nodeId에서 앞의 '-' 제거 (Firebase의 오래된 push 키 형식 대응)
    const cleanNodeId = nodeId.startsWith('-') ? nodeId.substring(1) : nodeId;

    // 신고 ID 생성: "post-{postId}-{uid}" 또는 "comment-{commentId}-{uid}"
    const reportId = `${type}-${cleanNodeId}-${userId}`;

    // 신고 데이터 객체 생성
    const reportData = {
      type,
      nodeId: cleanNodeId,
      uid: userId,
      reason,
      message: message || '',
      createdAt: Date.now()
    };

    // Firebase에 저장
    const updates: Record<string, any> = {};
    updates[`reports/${reportId}`] = reportData;

    await update(ref(database), updates);

    return {
      success: true,
      reportId
    };
  } catch (error: any) {
    console.error('[addReport] 에러 발생:', error);
    const errorInfo = handleFirebaseError(error, 'addReport');

    return {
      success: false,
      error: errorInfo.i18nKey,
      errorMessage: errorInfo.message
    };
  }
}

/**
 * 게시글 또는 댓글의 신고를 취소합니다.
 *
 * @param type - 신고 타입 ('post' 또는 'comment')
 * @param nodeId - 게시글 ID 또는 댓글 ID
 * @param userId - 신고자 사용자 UID
 * @returns 신고 취소 결과 (success, error)
 *
 * 기능:
 * - `/reports/{type}-{nodeId}-{uid}` 경로의 데이터 삭제
 * - Cloud Functions에서 자동으로 reportCount 감소
 *
 * 사용 예시:
 * ```typescript
 * // 게시글 신고 취소
 * const result = await removeReport('post', 'post-abc123', 'user-xyz789');
 *
 * // 댓글 신고 취소
 * const result = await removeReport('comment', 'comment-def456', 'user-xyz789');
 *
 * if (result.success) {
 *   console.log('신고가 취소되었습니다.');
 * } else {
 *   console.error('신고 취소 실패:', result.error);
 * }
 * ```
 */
export async function removeReport(
  type: ReportType,
  nodeId: FirebaseKey,
  userId: UserId
): Promise<RemoveReportResult> {
  try {
    // nodeId에서 앞의 '-' 제거
    const cleanNodeId = nodeId.startsWith('-') ? nodeId.substring(1) : nodeId;

    // 신고 ID 생성
    const reportId = `${type}-${cleanNodeId}-${userId}`;

    // Firebase에서 삭제
    await remove(ref(database, `reports/${reportId}`));

    return {
      success: true
    };
  } catch (error: any) {
    console.error('[removeReport] 에러 발생:', error);
    const errorInfo = handleFirebaseError(error, 'removeReport');

    return {
      success: false,
      error: errorInfo.i18nKey,
      errorMessage: errorInfo.message
    };
  }
}

/**
 * 사용자가 특정 게시글/댓글을 이미 신고했는지 확인합니다.
 *
 * @param type - 신고 타입 ('post' 또는 'comment')
 * @param nodeId - 게시글 ID 또는 댓글 ID
 * @param userId - 사용자 UID
 * @returns 신고 상태 확인 결과 (isReported, reportId)
 *
 * 기능:
 * - `/reports/{type}-{nodeId}-{uid}` 경로의 데이터 존재 여부 확인
 *
 * 사용 예시:
 * ```typescript
 * // 게시글 신고 여부 확인
 * const status = await checkReportStatus('post', 'post-abc123', 'user-xyz789');
 *
 * if (status.isReported) {
 *   console.log('이미 신고한 게시글입니다. 신고 ID:', status.reportId);
 * } else {
 *   console.log('아직 신고하지 않은 게시글입니다.');
 * }
 * ```
 */
export async function checkReportStatus(
  type: ReportType,
  nodeId: FirebaseKey,
  userId: UserId
): Promise<CheckReportStatusResult> {
  try {
    // nodeId에서 앞의 '-' 제거
    const cleanNodeId = nodeId.startsWith('-') ? nodeId.substring(1) : nodeId;

    // 신고 ID 생성
    const reportId = `${type}-${cleanNodeId}-${userId}`;

    // Firebase에서 데이터 조회
    const snapshot = await get(ref(database, `reports/${reportId}`));

    if (snapshot.exists()) {
      return {
        isReported: true,
        reportId
      };
    } else {
      return {
        isReported: false
      };
    }
  } catch (error: any) {
    console.error('[checkReportStatus] 에러 발생:', error);
    // 에러 발생 시 신고하지 않은 것으로 간주
    return {
      isReported: false
    };
  }
}

/**
 * 특정 게시글/댓글의 신고 개수를 조회합니다.
 *
 * @param type - 신고 타입 ('post' 또는 'comment')
 * @param nodeId - 게시글 ID 또는 댓글 ID
 * @returns 신고 개수 (없으면 0)
 *
 * 기능:
 * - `/posts/{postId}/reportCount` 또는 `/comments/{commentId}/reportCount` 조회
 *
 * 사용 예시:
 * ```typescript
 * // 게시글 신고 개수 조회
 * const count = await getReportCount('post', 'post-abc123');
 * console.log('총 신고 개수:', count);
 *
 * // 댓글 신고 개수 조회
 * const count = await getReportCount('comment', 'comment-def456');
 * console.log('총 신고 개수:', count);
 * ```
 */
export async function getReportCount(
  type: ReportType,
  nodeId: FirebaseKey
): Promise<number> {
  try {
    // nodeId에서 앞의 '-' 제거
    const cleanNodeId = nodeId.startsWith('-') ? nodeId.substring(1) : nodeId;

    // 경로 결정
    const path = type === 'post'
      ? `posts/${cleanNodeId}/reportCount`
      : `comments/${cleanNodeId}/reportCount`;

    // Firebase에서 데이터 조회
    const snapshot = await get(ref(database, path));

    if (snapshot.exists()) {
      return snapshot.val() || 0;
    } else {
      return 0;
    }
  } catch (error: any) {
    console.error('[getReportCount] 에러 발생:', error);
    return 0;
  }
}
