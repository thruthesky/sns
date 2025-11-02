<script>
  function goBack() {
    window.history.pushState({}, '', '/menu');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
</script>

<div class="terms-container">
  <div class="terms-card">
    <h2 class="page-title">이용 약관</h2>
    <div class="construction-content">
      <div class="construction-icon">🚧</div>
      <p class="construction-message">이 페이지는 공사중입니다</p>
      <p class="construction-description">이용 약관 페이지를 개발 중이며, 곧 업데이트될 예정입니다.</p>
    </div>
    <button class="back-button" onclick={goBack}>메뉴로 돌아가기</button>
  </div>
</div>

<style>
  .terms-container {
    width: 100%;
    max-width: 28rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .terms-card {
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }

  .page-title {
    margin: 0 0 2rem 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #111827;
    text-align: center;
  }

  .construction-content {
    text-align: center;
    margin-bottom: 2rem;
  }

  .construction-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .construction-message {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
  }

  .construction-description {
    margin: 0;
    font-size: 0.95rem;
    color: #6b7280;
  }

  .back-button {
    width: 100%;
    padding: 0.75rem;
    background-color: #3b82f6;
    color: #ffffff;
    border: none;
    border-radius: 0.375rem;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .back-button:hover {
    background-color: #2563eb;
  }

  @media (max-width: 640px) {
    .terms-card {
      padding: 1.5rem;
    }

    .page-title {
      font-size: 1.25rem;
    }
  }
</style>
