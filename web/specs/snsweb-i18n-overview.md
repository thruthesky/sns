---
name: snsweb
version: 1.0.0
description: SNS 웹 국제화(i18n) 개발 가이드 문서의 SED 사양
author: JaeHo Song
email: thruthesky@gmail.com
homepage: https://github.com/thruthesky/
funding: ""
license: SED Specification License v1.0
dependencies: []
"프로젝트 이름": snsweb
---

## Overview
- 이 문서는 "SNS 웹 국제화(i18n) 개발 가이드"에 대한 세부 사양을 정리하며, 기존 내용을 그대로 유지한 채 SED 구조에 맞춰 제공합니다.

## Requirements
- 문서 전반에 걸쳐 소개되는 지침과 참고 사항을 모두 숙지해야 하며, 별도의 추가 선행 조건은 원문 각 절에서 제시되는 내용을 따릅니다.

## Workflow
1. 아래 `## Detail Items` 절에 포함된 원문 목차를 검토합니다.
2. 필요한 경우 원문의 각 절을 순서대로 읽으며 프로젝트 작업 흐름에 반영합니다.
3. 문서에 명시된 모든 지침을 확인한 뒤 실제 개발 단계에 적용합니다.

## Detail Items
- 이하에는 기존 문서의 모든 내용을 원형 그대로 포함하여 참조할 수 있도록 구성했습니다.

# SNS 웹 국제화(i18n) 개발 가이드

> 본 문서는 SNS 웹 애플리케이션에서 국제화(i18n)를 구현하는 방법에 대한 지침을 제공합니다.
> 다국어 지원을 구현할 때에는 반드시 본 문서를 참고해야 합니다.

## 📋 목차

- [개요](#개요)
- [다국어 지원 전략](#다국어-지원-전략)
- [프로젝트 구조](#프로젝트-구조)
- [구현 방법](#구현-방법)
- [Svelte 컴포넌트에서 사용하기](#svelte-컴포넌트에서-사용하기)
- [참고 자료](#참고-자료)

---

## 개요

SNS 웹 프로젝트는 **한국어(ko)**, **영어(en)**, **일본어(ja)**, **중국어(zh)** 4개 언어를 지원합니다.

국제화(i18n) 구현을 통해:
- ✅ 사용자 브라우저 설정에 따라 자동으로 언어 감지
- ✅ 사용자가 UI에서 언어를 직접 선택 가능
- ✅ Web Components의 `lang` 속성으로 언어 전달
- ✅ 변수 치환을 통한 동적 메시지 생성

---

## 다국어 지원 전략

### 1. 언어 자동 감지
사용자의 브라우저 설정(`navigator.languages`)을 기반으로 기본 언어를 자동으로 감지합니다.

### 2. 수동 언어 선택
UI에 언어 선택기를 제공하여 사용자가 원하는 언어를 직접 선택할 수 있습니다.

### 3. 언어 파일 관리
각 언어별로 별도의 JSON 파일을 생성하여 번역 문자열을 중앙 관리합니다.

**중요 규칙**:
- ⚠️ **모든 키는 반드시 한글로 작성**해야 합니다
- ⚠️ 키는 모든 언어 파일에서 동일하게 사용됩니다
- ⚠️ 영어 번역이 없을 경우, 키 자체(한글)가 표시됩니다

---

## 프로젝트 구조

i18n 관련 파일은 다음과 같이 구성됩니다:

```
web/src/
├── lib/
│   └── i18n/
│       ├── index.js        # i18n 로직 (언어 감지, 번역 함수)
│       ├── en.json          # 영어 번역
│       ├── ko.json          # 한국어 번역
│       ├── ja.json          # 일본어 번역
│       └── zh.json          # 중국어 번역
```

### 언어 파일 위치
- **경로**: `web/src/lib/i18n/`
- **파일**: `en.json`, `ko.json`, `ja.json`, `zh.json`
- **진입점**: `web/src/lib/i18n/index.js`

---

## 구현 방법

### 1단계: 언어별 JSON 파일 생성

각 언어별 번역 파일을 생성합니다.

#### `web/src/lib/i18n/ko.json` (한국어)

```json
{
  "웰컴": "SNS에 오신 것을 환영합니다!",
  "로그인": "로그인",
  "회원가입": "회원가입",
  "인사": "{name}님, 안녕하세요!"
}
```

#### `web/src/lib/i18n/en.json` (영어)

```json
{
  "웰컴": "Welcome to SNS!",
  "로그인": "Login",
  "회원가입": "Sign Up",
  "인사": "Hello, {name}!"
}
```

#### `web/src/lib/i18n/ja.json` (일본어)

```json
{
  "웰컴": "SNSへようこそ!",
  "로그인": "ログイン",
  "회원가입": "登録",
  "인사": "{name}さん、こんにちは!"
}
```

#### `web/src/lib/i18n/zh.json` (중국어)

```json
{
  "웰컴": "欢迎来到SNS!",
  "로그인": "登录",
  "회원가입": "注册",
  "인사": "{name}，你好!"
}
```

**주의사항**:
- 모든 키(`"웰컴"`, `"로그인"` 등)는 **한글**로 작성됩니다
- 변수 치환은 `{변수명}` 형식을 사용합니다 (예: `{name}`)

---

### 2단계: i18n 로직 구현

`web/src/lib/i18n/index.js` 파일을 생성하여 i18n 로직을 구현합니다.

```javascript
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

// 지원 언어 타입 정의
export type Locale = 'en' | 'ko' | 'ja' | 'zh';

// 모든 언어 사전 (Dictionary)
const DICTS: Record<Locale, Record<string, string>> = { en, ko, ja, zh };

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
function normalize(lang: string | undefined): Locale {
  const lower = (lang ?? '').toLowerCase();

  if (lower.startsWith('ko')) return 'ko';
  if (lower.startsWith('ja')) return 'ja';
  // 중국어 변형(zh, zh-cn, zh-tw, zh-hant, zh-hans) 모두 'zh'로 통일
  if (lower.startsWith('zh')) return 'zh';

  return 'en'; // 기본값: 영어
}

/**
 * 브라우저 설정에서 사용자 언어를 자동 감지
 *
 * navigator.languages 배열을 순회하며 지원하는 언어를 찾습니다.
 * 지원하지 않는 언어는 영어(en)로 기본 설정됩니다.
 *
 * @returns {Locale} 감지된 언어
 */
export function detectLocale(): Locale {
  const list = (navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language]
  ) as string[];

  for (const l of list) {
    const n = normalize(l);
    if (n !== 'en') return n; // 지원되는 언어면 즉시 반환
  }

  return 'en'; // 기본값: 영어
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
export function createI18n(initial?: string) {
  // 현재 활성화된 언어
  let locale: Locale = normalize(initial) || detectLocale();

  /**
   * 언어 변경
   * @param {string} l - 새로운 언어 코드
   */
  function setLocale(l: string) {
    locale = normalize(l);
  }

  /**
   * 현재 언어 가져오기
   * @returns {Locale} 현재 언어
   */
  function getLocale(): Locale {
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
  function t(key: string, vars: Record<string, any> = {}): string {
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
```

**주요 함수 설명**:

| 함수 | 설명 | 예시 |
|------|------|------|
| `normalize(lang)` | 언어 코드를 표준화 | `"ko-KR"` → `"ko"` |
| `detectLocale()` | 브라우저 언어 자동 감지 | `"ko"` 또는 `"en"` |
| `createI18n(lang)` | i18n 인스턴스 생성 | `createI18n('ko')` |
| `t(key, vars)` | 번역 문자열 가져오기 | `t('웰컴')` |
| `setLocale(lang)` | 언어 변경 | `setLocale('en')` |
| `getLocale()` | 현재 언어 확인 | `'ko'` |

---

## Svelte 컴포넌트에서 사용하기

### 기본 사용법

Custom Element에서 i18n을 사용하는 예시입니다.

#### `web/src/lib/components/MyWidget.wc.svelte`

```svelte
<svelte:options tag="my-widget" />

<script lang="ts">
  import { createI18n } from '$lib/i18n';

  // 호스트 페이지에서 <my-widget lang="ko"> 형태로 언어를 전달받음
  export let lang: string | undefined;

  // i18n 인스턴스 생성
  const i18n = createI18n(lang);

  // lang 속성이 변경되면 언어 업데이트
  $: if (lang) i18n.setLocale(lang);
</script>

<!-- 번역 문자열 사용 -->
<div class="widget">
  <h1>{i18n.t('웰컴')}</h1>
  <p>{i18n.t('인사', { name: 'Kim' })}</p>

  <button>{i18n.t('로그인')}</button>
  <button>{i18n.t('회원가입')}</button>
</div>

<style>
  :host {
    display: block;
  }

  .widget {
    padding: 20px;
  }
</style>
```

### HTML에서 Custom Element 사용

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>SNS 데모</title>
  <script type="module" src="/dist/sns-components.es.js"></script>
</head>
<body>
  <!-- 한국어로 표시 -->
  <my-widget lang="ko"></my-widget>

  <!-- 영어로 표시 -->
  <my-widget lang="en"></my-widget>

  <!-- 일본어로 표시 -->
  <my-widget lang="ja"></my-widget>

  <!-- 언어 미지정 시 브라우저 설정에 따라 자동 감지 -->
  <my-widget></my-widget>
</body>
</html>
```

### 동적 언어 변경 예시

```svelte
<svelte:options tag="language-selector" />

<script lang="ts">
  import { createI18n, type Locale } from '$lib/i18n';

  export let lang: string | undefined;
  const i18n = createI18n(lang);

  // 지원 언어 목록
  const languages: { code: Locale; name: string }[] = [
    { code: 'ko', name: '한국어' },
    { code: 'en', name: 'English' },
    { code: 'ja', name: '日本語' },
    { code: 'zh', name: '中文' }
  ];

  // 언어 변경 핸들러
  function changeLanguage(newLang: Locale) {
    i18n.setLocale(newLang);
    lang = newLang;
  }
</script>

<div class="language-selector">
  <h3>{i18n.t('언어선택')}</h3>

  {#each languages as { code, name }}
    <button
      class:active={i18n.getLocale() === code}
      onclick={() => changeLanguage(code)}
    >
      {name}
    </button>
  {/each}
</div>

<style>
  .language-selector button.active {
    background-color: blue;
    color: white;
  }
</style>
```

---

## 참고 자료

- [SNS 웹 개발 가이드](sns-web.md) - 웹 개발 전체 가이드
- [Custom Elements 개발 가이드](sns-custom-elements.md) - Svelte Custom Elements 상세 가이드
- [웹 개발 퀵 스타트](sns-web-quick-start.md) - 개발 환경 설정