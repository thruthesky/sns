/**
 * 게시판 카테고리 타입 정의
 *
 * 이 파일은 게시판 카테고리 관련 타입을 정의합니다.
 * 카테고리 라벨은 i18n을 통해 다국어 지원됩니다.
 *
 * 사용 예시:
 * ```typescript
 * import { POST_CATEGORIES, type PostCategory } from '$lib/types/category';
 * import { t } from '$lib/stores/i18n';
 *
 * // 카테고리 목록 표시
 * POST_CATEGORIES.forEach(category => {
 *   console.log(category); // 'community', 'qna', 'news', 'market'
 *   console.log($t(`label.category.${category}`)); // 번역된 라벨
 * });
 * ```
 */

/**
 * 게시판 카테고리 타입
 *
 * 사용 가능한 카테고리:
 * - 'community': 커뮤니티
 * - 'qna': 질문답변
 * - 'news': 뉴스
 * - 'market': 회원장터
 */
export type PostCategory = 'community' | 'qna' | 'news' | 'market';

/**
 * 게시판 카테고리 키 배열
 *
 * 모든 카테고리의 목록을 readonly 배열로 제공합니다.
 * 이 배열을 사용하여 카테고리 탭이나 선택 메뉴를 동적으로 생성할 수 있습니다.
 *
 * 카테고리 라벨은 i18n 키 형식으로 제공됩니다:
 * - `label.category.${category}` (예: 'label.category.community')
 *
 * 사용 예시:
 * ```typescript
 * // 카테고리 탭 렌더링
 * {#each POST_CATEGORIES as category}
 *   <button>{$t(`label.category.${category}`)}</button>
 * {/each}
 * ```
 */
export const POST_CATEGORIES: readonly PostCategory[] = [
  'community',
  'qna',
  'news',
  'market'
] as const;
