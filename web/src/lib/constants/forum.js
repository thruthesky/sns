/**
 * 게시판 카테고리 설정
 *
 * SNS 웹 애플리케이션의 게시판에서 사용할 카테고리 목록입니다.
 * 각 카테고리는 value와 label을 포함하며, 데이터베이스 경로와
 * UI 표시에 사용됩니다.
 *
 * 사용 예시:
 * import { FORUM_CATEGORIES } from '$lib/constants/forum.js';
 *
 * FORUM_CATEGORIES.forEach(cat => {
 *   console.log(cat.value, cat.label);
 * });
 */

/**
 * 게시판 카테고리 목록
 * @type {Array<{value: string, label: string}>}
 */
export const FORUM_CATEGORIES = [
  { value: 'community', label: '커뮤니티' },
  { value: 'qna', label: '질문과답변' },
  { value: 'news', label: '뉴스' },
  { value: 'market', label: '회원장터' }
];

/**
 * 카테고리 값으로 라벨을 조회하는 헬퍼 함수
 *
 * @param {string} categoryValue - 카테고리 값
 * @returns {string} 해당 카테고리의 라벨, 없으면 빈 문자열
 *
 * 사용 예시:
 * const label = getCategoryLabel('community'); // '커뮤니티'
 */
export function getCategoryLabel(categoryValue) {
  const category = FORUM_CATEGORIES.find((cat) => cat.value === categoryValue);
  return category ? category.label : '';
}
