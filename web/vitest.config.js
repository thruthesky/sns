/**
 * Vitest 설정 파일
 *
 * Svelte 5 Custom Elements 기반 프로젝트의 유닛 테스트를 위한 설정입니다.
 *
 * 주요 설정:
 * - Svelte 플러그인 통합 (hot module reload 비활성화)
 * - happy-dom 환경 (브라우저 API 시뮬레이션)
 * - 글로벌 테스트 API (describe, it, expect 등)
 * - 코드 커버리지 수집 (v8 provider)
 */

import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  // Svelte 플러그인 설정
  // - hot: Vitest 환경에서는 HMR 비활성화
  plugins: [svelte({ hot: !process.env.VITEST })],

  // 테스트 설정
  test: {
    // 글로벌 테스트 API 활성화
    // - describe, it, expect 등을 import 없이 사용 가능
    globals: true,

    // 테스트 환경: happy-dom
    // - DOM API를 시뮬레이션하는 경량 환경
    // - jsdom보다 빠르고 가벼움
    environment: 'happy-dom',

    // 테스트 셋업 파일
    // - 모든 테스트 실행 전에 로드됨
    // - Firebase 모킹, 글로벌 설정 등
    setupFiles: './tests/setup.js',

    // 테스트 파일 패턴
    // - src/ 폴더 내 *.test.js, *.spec.js 파일
    include: ['src/**/*.{test,spec}.{js,ts}'],

    // 코드 커버리지 설정
    coverage: {
      // v8 provider 사용 (빠르고 정확함)
      provider: 'v8',

      // 리포터 형식
      // - text: 터미널에 출력
      // - json: JSON 파일로 저장
      // - html: HTML 리포트 생성 (coverage/ 폴더)
      reporter: ['text', 'json', 'html'],

      // 커버리지 제외 경로
      exclude: [
        'node_modules/',
        'dist/',
        'tests/',
        '*.config.js',
        '*.config.ts'
      ]
    }
  }
});
