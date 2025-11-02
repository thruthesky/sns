/**
 * 데모 앱 진입점
 *
 * Svelte 5 Custom Elements 라이브러리의 데모 애플리케이션입니다.
 * 개발 및 테스트를 위한 앱입니다.
 */

import './app.css';
import { mount } from 'svelte';
import App from './App.svelte';

// Svelte 5에서는 mount 함수를 사용하여 컴포넌트를 마운트합니다
// new App()은 더 이상 사용되지 않습니다
const app = mount(App, {
  target: document.getElementById('app'),
});

export default app;
