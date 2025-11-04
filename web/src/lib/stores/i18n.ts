/**
 * i18n 스토어
 *
 * 모든 컴포넌트에서 i18n 번역 기능을 사용할 수 있도록 합니다.
 *
 * 사용법:
 * import { t, setLocale, locale } from '../stores/i18n';
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
import type { Writable, Readable } from 'svelte/store';
import { createI18n, detectLocale } from '../i18n/index.js';

/**
 * 지원하는 언어 코드 타입
 */
export type Locale = 'ko' | 'en' | 'ja' | 'zh';

/**
 * 언어 선택 옵션 인터페이스
 */
export interface LocaleOption {
  /** 언어 코드 */
  code: Locale;
  /** 표시될 레이블 (국기 이모지 + 언어명) */
  label: string;
}

/**
 * 번역 함수 타입
 * @param key - 번역 키
 * @param vars - 변수 치환을 위한 객체
 * @returns 번역된 문자열
 */
export type TranslateFunction = (key: string, vars?: Record<string, string | number>) => string;

/**
 * 로컬 스토리지 키
 */
const STORAGE_KEY = 'sns-web-locale';

/**
 * 지원하는 언어 목록
 * 언어 선택기 UI에서 사용됩니다.
 */
export const SUPPORTED_LOCALES: LocaleOption[] = [
  { code: 'ko', label: '🇰🇷 한국어' },
  { code: 'en', label: '🇺🇸 English' },
  { code: 'ja', label: '🇯🇵 日本語' },
  { code: 'zh', label: '🇨🇳 中文' }
];

/**
 * 저장된 Locale 가져오기
 * localStorage에서 이전에 저장된 언어 설정을 불러옵니다.
 *
 * @returns 저장된 언어 코드 또는 null
 */
function getStoredLocale(): Locale | null {
  // SSR 환경에서는 localStorage 사용 불가
  if (typeof localStorage === 'undefined') return null;

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;

  // 지원하는 언어 목록에 있는지 확인
  const matched = SUPPORTED_LOCALES.find((option) => option.code === stored);
  return matched ? matched.code : null;
}

// 브라우저 언어 자동 감지하여 초기 locale 설정
// 1순위: localStorage에 저장된 값
// 2순위: 브라우저 언어 자동 감지
const initialLocale: Locale = getStoredLocale() ?? detectLocale();

// i18n 인스턴스 생성
const i18nInstance = createI18n(initialLocale);

// 초기 locale을 localStorage에 저장
if (typeof localStorage !== 'undefined') {
  localStorage.setItem(STORAGE_KEY, i18nInstance.getLocale());
}

/**
 * 현재 활성화된 locale을 저장하는 writable 스토어
 * 언어가 변경되면 자동으로 UI가 업데이트됩니다.
 */
export const locale: Writable<Locale> = writable(initialLocale);

/**
 * 언어를 변경하는 함수
 * UI와 localStorage를 모두 업데이트합니다.
 *
 * @param newLocale - 새로운 언어 코드 ('ko', 'en', 'ja', 'zh')
 *
 * 사용 예시:
 * setLocale('en'); // 영어로 변경
 * setLocale('ko'); // 한국어로 변경
 */
export function setLocale(newLocale: string): void {
  // i18n 인스턴스의 locale 변경
  i18nInstance.setLocale(newLocale);

  // 정규화된 locale 값 가져오기 (지원하지 않는 언어면 기본값으로 변경됨)
  const normalized = i18nInstance.getLocale() as Locale;

  // 스토어 업데이트
  locale.set(normalized);

  // localStorage에 저장 (브라우저 환경에서만)
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, normalized);
  }
}

/**
 * 번역 함수를 제공하는 derived 스토어
 * locale이 변경될 때마다 자동으로 새로운 번역 함수를 생성합니다.
 *
 * 사용 예시:
 * - Svelte 컴포넌트: {$t('프로젝트_명칭')}
 * - JavaScript: $t('인사', { name: '홍길동' })
 *
 * 변수 치환 예시:
 * $t('환영메시지', { name: '홍길동', age: 25 })
 * // "안녕하세요, 홍길동님! 나이: 25세" (ko.json에 정의된 형식에 따라)
 */
export const t: Readable<TranslateFunction> = derived(
  locale,
  ($locale) => {
    // locale이 변경될 때마다 새로운 번역 함수 반환
    return (key: string, vars: Record<string, string | number> = {}) => i18nInstance.t(key, vars);
  }
);
