<script>
  /**
   * SNS Web Components 데모 애플리케이션
   *
   * Custom Elements를 테스트하고 시연하는 앱입니다.
   */

  // Custom Elements 로드
  import '../lib/index.js';
  import { t } from '../lib/stores/i18n.js';

  // 홈 화면 컴포넌트 임포트
  import Home from './Home.svelte';
</script>

<!-- 새 레이아웃 적용 -->
<sns-layout>
  <!-- 헤더 -->
  <header class="header">
    <h1 class="title">
      {$t('데모제목')}
    </h1>
    <p class="subtitle">
      {$t('데모부제')}
    </p>
  </header>

  <!-- 홈 콘텐츠 -->
  <main class="content">
    <Home />
  </main>

  <!-- 푸터 -->
  <footer class="footer">
    <p>{$t('푸터')}</p>
  </footer>
</sns-layout>

<style>
  /* 헤더 */
  .header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0 0.5rem 0;
    color: #111827;
  }

  .subtitle {
    font-size: 1rem;
    color: #6b7280;
    margin: 0;
  }

  /* 콘텐츠 */
  .content {
    max-width: 800px;
    margin: 0 auto;
  }

  /* 푸터 */
  .footer {
    max-width: 800px;
    margin: 2rem auto 0;
    padding-top: 2rem;
    border-top: 1px solid #e5e7eb;
    text-align: center;
    color: #6b7280;
  }

  .footer p {
    margin: 0;
    font-size: 0.875rem;
  }

  /* 반응형 */
  @media (max-width: 640px) {
    .title {
      font-size: 1.5rem;
    }

    .subtitle {
      font-size: 0.875rem;
    }
  }
</style>
