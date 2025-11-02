import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

// 라이브러리 모드 설정
// Web Components를 빌드하여 다양한 플랫폼에서 재사용 가능하도록 함
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        // Custom Elements 모드 활성화
        // .wc.svelte 파일을 Web Components로 컴파일
        customElement: true,
      },
      // .wc.svelte 파일에만 customElement 적용
      include: /\.wc\.svelte$/
    })
  ],
  build: {
    lib: {
      // 라이브러리 진입점
      entry: resolve(__dirname, 'src/lib/index.js'),
      name: 'SNSComponents',  // UMD 빌드의 전역 변수명
      formats: ['es', 'umd'],  // ESM, UMD 형식으로 빌드
      fileName: (format) => `sns-components.${format}.js`
    },
    rollupOptions: {
      // Firebase는 외부 의존성으로 처리 (번들에 포함하지 않음)
      external: ['firebase'],
      output: {
        // UMD 빌드용 전역 변수 설정
        globals: {
          firebase: 'firebase'
        }
      }
    }
  }
})
