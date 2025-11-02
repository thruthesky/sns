/**
 * SNS 웹 국제화(i18n) 모듈
 *
 * 지원 언어: 한국어(ko), 영어(en), 일본어(ja), 중국어(zh)
 *
 * 주요 기능:
 * - 브라우저 언어 자동 감지
 * - 번역 문자열 제공
 * - 변수 치환 지원
 */

import en from './en.json';
import ko from './ko.json';
import ja from './ja.json';
import zh from './zh.json';

/**
 * 지원하는 언어 타입
 * @typedef {'en' | 'ko' | 'ja' | 'zh'} Locale
 */

/**
 * 모든 언어 사전 (Dictionary)
 * @type {Record<Locale, Record<string, string>>}
 */
const DICTS = { en, ko, ja, zh };

/**
 * 언어 코드를 표준화된 Locale로 변환
 *
 * 예시:
 * - "ko-KR" → "ko"
 * - "ja-JP" → "ja"
 * - "zh-CN" → "zh"
 * - "zh-TW" → "zh"
 * - "en-US" → "en"
 *
 * @param {string | undefined} lang - 언어 코드
 * @returns {Locale} 표준화된 Locale
 */
function normalize(lang) {
  const lower = (lang ?? '').toLowerCase();

  // 한국어 변형 (ko, ko-kr) → 'ko'
  if (lower.startsWith('ko')) return 'ko';

  // 일본어 변형 (ja, ja-jp) → 'ja'
  if (lower.startsWith('ja')) return 'ja';

  // 중국어 변형 (zh, zh-cn, zh-tw, zh-hant, zh-hans) 모두 'zh'로 통일
  if (lower.startsWith('zh')) return 'zh';

  // 기본값: 영어
  return 'en';
}

/**
 * 브라우저 설정에서 사용자 언어를 자동 감지
 *
 * navigator.languages 배열을 순회하며 지원하는 언어를 찾습니다.
 * 지원하지 않는 언어는 영어(en)로 기본 설정됩니다.
 *
 * @returns {Locale} 감지된 언어
 */
export function detectLocale() {
  // 브라우저가 없는 환경 (SSR 등)에서는 영어 반환
  if (typeof navigator === 'undefined') {
    return 'en';
  }

  // navigator.languages 배열을 가져옴 (없으면 navigator.language 사용)
  const list = (navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language]
  );

  // 지원하는 언어를 찾을 때까지 순회
  for (const l of list) {
    const n = normalize(l);
    // 영어가 아닌 지원 언어를 찾으면 즉시 반환
    if (n !== 'en') return n;
  }

  // 기본값: 영어
  return 'en';
}

/**
 * i18n 인스턴스를 생성
 *
 * 사용 예시:
 * ```javascript
 * const i18n = createI18n('ko');
 * console.log(i18n.t('웰컴')); // "SNS에 오신 것을 환영합니다!"
 * console.log(i18n.t('인사', { name: '김철수' })); // "김철수님, 안녕하세요!"
 * ```
 *
 * @param {string} [initial] - 초기 언어 (생략 시 자동 감지)
 * @returns {object} i18n 객체 { t, setLocale, getLocale }
 */
export function createI18n(initial) {
  // 현재 활성화된 언어
  let locale = normalize(initial) || detectLocale();

  /**
   * 언어 변경
   * @param {string} l - 새로운 언어 코드
   */
  function setLocale(l) {
    locale = normalize(l);
  }

  /**
   * 현재 언어 가져오기
   * @returns {Locale} 현재 언어
   */
  function getLocale() {
    return locale;
  }

  /**
   * 번역 함수
   *
   * @param {string} key - 번역 키 (한글)
   * @param {Record<string, any>} [vars={}] - 치환할 변수들
   * @returns {string} 번역된 문자열
   *
   * 예시:
   * - t('웰컴') → "Welcome to SNS!" (locale이 'en'일 때)
   * - t('인사', { name: 'John' }) → "Hello, John!" (locale이 'en'일 때)
   */
  function t(key, vars = {}) {
    // 현재 언어의 사전, 없으면 영어 사전 사용
    const dict = DICTS[locale] ?? DICTS.en;

    // 키에 해당하는 번역 문자열 가져오기
    // 우선순위: 현재 언어 → 영어 → 키 자체
    const template = dict[key] ?? DICTS.en[key] ?? key;

    // {변수명} 형식을 실제 값으로 치환
    return template.replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? ''));
  }

  return { t, setLocale, getLocale };
}
