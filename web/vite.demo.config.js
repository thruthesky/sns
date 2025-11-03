import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// 현재 파일의 디렉토리 경로
const __dirname = dirname(fileURLToPath(import.meta.url))

// 개발 서버 설정
// src/demo 폴더의 데모 앱을 실행하기 위한 설정
// npm run dev 명령어로 실행
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        // 데모 앱에서는 customElement 모드 활성화
        customElement: true,
      },
      // .wc.svelte 파일에만 customElement 적용
      include: /\.wc\.svelte$/
    })
  ],
  // 데모 앱의 루트 폴더
  root: 'src/demo',
  // 정적 자산 폴더 (public 폴더가 프로젝트 루트에 있으므로 명시)
  publicDir: resolve(__dirname, 'public'),
  // .env 파일의 위치를 프로젝트 루트로 지정
  // root가 'src/demo'이므로 envDir로 상위 폴더를 명시해야 함
  envDir: resolve(__dirname, '.'),
  // 빌드 출력 폴더 (데모 앱용)
  // root가 'src/demo'이므로 상대 경로는 src/demo 기준
  // ../../dist는 프로젝트 루트의 dist 폴더를 가리킴
  build: {
    outDir: '../../dist',
    emptyOutDir: false  // 라이브러리 빌드 결과물을 지우지 않음
  },
  // 개발 서버 설정
  server: {
    port: 5173,
    open: true  // 서버 시작 시 자동으로 브라우저 열기
  }
})
