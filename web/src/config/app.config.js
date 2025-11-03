/**
 * 애플리케이션 설정 파일
 *
 * 이 파일은 애플리케이션 전역 설정을 관리합니다.
 */

/**
 * 사이트 URL
 */
export const siteUrl = 'https://vibers.kr/';

/**
 * 게시판 카테고리 설정
 *
 * 각 카테고리는 영문 키(key)와 번역 레이블(label) 참조로 구성됩니다.
 * 번역은 src/lib/i18n/{언어}.json 파일에서 관리됩니다.
 *
 * 사용 예시:
 * import { POST_CATEGORIES } from '$lib/config/app.config.js';
 * import { t } from '$lib/stores/i18n.js';
 *
 * POST_CATEGORIES.forEach(category => {
 *   console.log(category.key);          // 'community'
 *   console.log($t(category.label));    // '커뮤니티' (한국어인 경우)
 * });
 */
export const POST_CATEGORIES = [
  {
    // 커뮤니티 게시판
    key: 'community',
    label: 'label.category.community'
  },
  {
    // 질문답변 게시판
    key: 'qna',
    label: 'label.category.qna'
  },
  {
    // 뉴스 게시판
    key: 'news',
    label: 'label.category.news'
  },
  {
    // 회원장터 게시판
    key: 'market',
    label: 'label.category.market'
  }
];
