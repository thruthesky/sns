import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// 현재 파일의 디렉토리 경로
const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * Site1 개발 서버 설정
 *
 * src/site1 폴더의 정적 HTML 페이지를 실행하기 위한 설정
 * Custom Elements를 통합한 PHILGO 커뮤니티 사이트 데모
 *
 * 실행 방법:
 * npm run dev:site1
 */
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        // site1에서는 customElement 모드 활성화
        customElement: true,
      },
      // .wc.svelte 파일에만 customElement 적용
      include: /\.wc\.svelte$/
    })
  ],
  // 경로 alias 설정
  // $lib을 src/lib으로 매핑 (SvelteKit 스타일)
  resolve: {
    alias: {
      '$lib': resolve(__dirname, './src/lib')
    }
  },
  // site1 앱의 루트 폴더
  root: 'src/site1',
  // 정적 자산 폴더 (public 폴더가 프로젝트 루트에 있으므로 명시)
  publicDir: resolve(__dirname, 'public'),
  // .env 파일의 위치를 프로젝트 루트로 지정
  // root가 'src/site1'이므로 envDir로 상위 폴더를 명시해야 함
  envDir: resolve(__dirname, '.'),
  // 빌드 출력 폴더 (site1 앱용)
  // root가 'src/site1'이므로 상대 경로는 src/site1 기준
  // ../../dist-site1은 프로젝트 루트의 dist-site1 폴더를 가리킴
  build: {
    outDir: '../../dist-site1',
    emptyOutDir: true  // site1 빌드 시 기존 파일 삭제
  },
  // 개발 서버 설정
  server: {
    port: 5174,  // demo는 5173이므로 5174 사용 (포트 충돌 방지)
    open: true,  // 서버 시작 시 자동으로 브라우저 열기
    // dist 폴더 접근 허용 (Custom Elements 라이브러리 로드를 위해)
    fs: {
      allow: [
        resolve(__dirname, '.'),  // 프로젝트 루트
        resolve(__dirname, 'dist'),  // dist 폴더
      ]
    }
  }
})
