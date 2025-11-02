/**
 * i18n 스토어
 *
 * 모든 컴포넌트에서 i18n 번역 기능을 사용할 수 있도록 합니다.
 *
 * 사용법:
 * import { t, setLocale, locale } from '../stores/i18n.js';
 *
 * // 번역하기
 * const title = t('프로젝트_명칭'); // "한바보 v0.2" (locale이 'ko'일 때)
 *
 * // 언어 변경
 * setLocale('en'); // 영어로 변경
 *
 * // 현재 언어 확인
 * console.log($locale); // 'en'
 */

import { writable, derived } from 'svelte/store';
import { createI18n, detectLocale } from '../i18n/index.js';

// 브라우저 언어 자동 감지하여 초기 locale 설정
const initialLocale = detectLocale();

// i18n 인스턴스 생성
const i18nInstance = createI18n(initialLocale);

/**
 * 현재 활성화된 locale을 저장하는 writable 스토어
 * @type {import('svelte/store').Writable<'ko' | 'en' | 'ja' | 'zh'>}
 */
export const locale = writable(initialLocale);

/**
 * 언어를 변경하는 함수
 *
 * @param {string} newLocale - 새로운 언어 코드 ('ko', 'en', 'ja', 'zh')
 */
export function setLocale(newLocale) {
  i18nInstance.setLocale(newLocale);
  locale.set(i18nInstance.getLocale());
}

/**
 * 번역 함수를 제공하는 derived 스토어
 *
 * 사용 예시:
 * - Svelte 컴포넌트: {$t('프로젝트_명칭')}
 * - JavaScript: $t('인사', { name: '홍길동' })
 */
export const t = derived(
  locale,
  ($locale) => {
    // locale이 변경될 때마다 새로운 번역 함수 반환
    return (key, vars = {}) => i18nInstance.t(key, vars);
  }
);
