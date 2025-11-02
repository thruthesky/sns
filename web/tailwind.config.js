/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind CSS를 적용할 파일 경로
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './src/**/*.wc.svelte',
    './index.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

