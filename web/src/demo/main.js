/**
 * 데모 앱 진입점
 *
 * Svelte 5 Custom Elements 라이브러리의 데모 애플리케이션입니다.
 * 개발 및 테스트를 위한 앱입니다.
 */

import './app.css';
import App from './App.svelte';

// Svelte 앱 마운트
const app = new App({
  target: document.getElementById('app'),
});

export default app;
