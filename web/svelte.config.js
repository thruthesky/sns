import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
export default {
  // Vite의 전처리기 사용 (Tailwind CSS, PostCSS 등)
  preprocess: vitePreprocess(),

  compilerOptions: {
    // Custom Elements 모드 활성화
    // .wc.svelte 파일을 Web Components로 컴파일
    customElement: true,
  }
}
