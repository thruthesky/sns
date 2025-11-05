---
name: snsweb-test-overview
version: 1.0.0
description: SNS 웹 테스트 가이드 문서의 SED 사양
author: JaeHo Song
email: thruthesky@gmail.com
homepage: https://github.com/thruthesky/
funding: ""
license: GPL
dependencies: []
"프로젝트 이름": snsweb
---

## Overview
- 이 문서는 "SNS 웹 테스트 가이드"에 대한 세부 사양을 정리하며, 기존 내용을 그대로 유지한 채 SED 구조에 맞춰 제공합니다.

## Requirements
- 문서 전반에 걸쳐 소개되는 지침과 참고 사항을 모두 숙지해야 하며, 별도의 추가 선행 조건은 원문 각 절에서 제시되는 내용을 따릅니다.

## Workflow
1. 아래 `## Detail Items` 절에 포함된 원문 목차를 검토합니다.
2. 필요한 경우 원문의 각 절을 순서대로 읽으며 프로젝트 작업 흐름에 반영합니다.
3. 문서에 명시된 모든 지침을 확인한 뒤 실제 개발 단계에 적용합니다.

## Detail Items
- 이하에는 기존 문서의 모든 내용을 원형 그대로 포함하여 참조할 수 있도록 구성했습니다.

# SNS 웹 테스트 가이드

## 목차

- [테스트 계정 정보](#테스트-계정-정보)
  - [e2e 테스트용 임시 로그인 계정](#e2e-테스트용-임시-로그인-계정)
  - [사용 방법](#사용-방법)
  - [주의사항](#주의사항)

---

## 테스트 계정 정보

### e2e 테스트용 임시 로그인 계정

개발 모드 및 e2e 테스트에서 사용할 수 있는 Firebase 전화번호 인증 테스트 계정입니다.

**중요**: 이 계정들은 Firebase Console에서 "Authentication > Sign-in method > Phone"의 **테스트 전화번호** 섹션에 등록되어 있어야 합니다.

#### 테스트 계정 1
- **국가 번호**: +1 (미국)
- **전화번호**: 1111111111
- **SMS 인증 코드**: 111111

#### 테스트 계정 2
- **국가 번호**: +1 (미국)
- **전화번호**: 2222222222
- **SMS 인증 코드**: 222222

#### 테스트 계정 3
- **국가 번호**: +1 (미국)
- **전화번호**: 3333333333
- **SMS 인증 코드**: 333333

### 사용 방법

#### 1. 수동 테스트 시
- 개발 서버 실행: `npm run dev`
- `<phone-login>` 컴포넌트에서 위의 전화번호 중 하나를 선택
- 국가 번호를 +1로 설정
- 전화번호 입력 (예: 1111111111)
- "인증 코드 전송" 클릭
- SMS 인증 코드 입력 (예: 111111)
- 로그인 완료

#### 2. e2e 테스트 시

```javascript
// Playwright 예제
await page.locator('select#country-code').selectOption('+1');
await page.locator('input#phone-number').fill('1111111111');
await page.locator('button:has-text("인증 코드 전송")').click();
await page.locator('input#verification-code').fill('111111');
await page.locator('button:has-text("로그인")').click();
```

#### 3. Jest/Vitest 단위 테스트 시

```javascript
const testAccount = {
  countryCode: '+1',
  phoneNumber: '1111111111',
  verificationCode: '111111'
};
```

### 주의사항

- ⚠️ **프로덕션 환경에서는 절대 사용하지 마세요**
- ⚠️ 테스트 전화번호는 Firebase Console에서 미리 등록되어 있어야 합니다
- ⚠️ 실제 SMS가 전송되지 않으며, reCAPTCHA 검증도 자동으로 통과됩니다
- ⚠️ 보안상 실제 사용자가 이 번호로 로그인할 수 없도록 Firebase 보안 규칙을 설정해야 합니다
