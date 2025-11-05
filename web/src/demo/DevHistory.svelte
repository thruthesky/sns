<script>
  /**
   * 개발일지 페이지
   *
   * 프로젝트의 스터디 로그와 진행 상황을 기록합니다.
   * 세미나별 구현 완료 사항과 배운 내용을 시각적으로 표시합니다.
   */

  import { t } from "../lib/stores/i18n.ts";
</script>

<div class="dev-history">
  <!-- 배경 그라디언트 -->
  <div class="background-gradient"></div>

  <div class="container">
    <!-- 페이지 제목 섹션 -->
    <div class="header">
      <h1 class="title">{$t("dev.history.title")}</h1>
      <p class="subtitle">{$t("dev.history.subtitle")}</p>
      <div class="update-indicator">
        <span class="indicator-dot"></span>
        {$t("dev.history.updateIndicator")}
      </div>
    </div>

    <!-- 2025-11-05 세미나 섹션 (최신) -->
    <div class="timeline-section">
      <!-- 날짜 및 제목 -->
      <div class="date-header">
        <h2 class="date-title">{$t("dev.history.seminar4.date")}</h2>
      </div>

      <!-- 구현 완료 섹션 -->
      <div class="card">
        <h3 class="card-title">{$t("dev.history.seminar4.completed")}</h3>
        <ul class="item-list">
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar4.item1")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar4.item2")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar4.item3")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar4.item4")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar4.item5")}</span>
          </li>
        </ul>
      </div>

      <!-- 배운 것들 섹션 -->
      <div class="card">
        <h3 class="card-title">{$t("dev.history.seminar4.learned")}</h3>
        <ul class="item-list">
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar4.learned1")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar4.learned2")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar4.learned3")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar4.learned4")}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 구분선 -->
    <div class="divider"></div>

    <!-- 2025-11-04 세미나 섹션 -->
    <div class="timeline-section">
      <!-- 날짜 및 제목 -->
      <div class="date-header">
        <h2 class="date-title">{$t("dev.history.seminar3.date")}</h2>
      </div>

      <!-- 구현 완료 섹션 -->
      <div class="card">
        <h3 class="card-title">{$t("dev.history.seminar3.completed")}</h3>
        <ul class="item-list">
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar3.item1")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar3.item2")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar3.item3")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar3.item4")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar3.item5")}</span>
          </li>
        </ul>
      </div>

      <!-- 배운 것들 섹션 -->
      <div class="card">
        <h3 class="card-title">{$t("dev.history.seminar3.learned")}</h3>
        <ul class="item-list">
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar3.learned1")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar3.learned2")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar3.learned3")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar3.learned4")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar3.learned5")}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 구분선 -->
    <div class="divider"></div>

    <!-- 2025-11-03 세미나 섹션 -->
    <div class="timeline-section">
      <!-- 날짜 및 제목 -->
      <div class="date-header">
        <h2 class="date-title">{$t("dev.history.seminar2.date")}</h2>
      </div>

      <!-- 구현 완료 섹션 -->
      <div class="card">
        <h3 class="card-title">{$t("dev.history.seminar2.completed")}</h3>
        <ul class="item-list">
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar2.item1")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar2.item2")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar2.item3")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar2.item4")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar2.item5")}</span>
          </li>
        </ul>
      </div>

      <!-- 배운 것들 섹션 -->
      <div class="card">
        <h3 class="card-title">{$t("dev.history.seminar2.learned")}</h3>
        <ul class="item-list">
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar2.learned1")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar2.learned2")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar2.learned3")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar2.learned4")}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 구분선 -->
    <div class="divider"></div>

    <!-- 2025-10-27 세미나 섹션 -->
    <div class="timeline-section">
      <!-- 날짜 및 제목 -->
      <div class="date-header">
        <h2 class="date-title">{$t("dev.history.seminar1.date")}</h2>
      </div>

      <!-- 구현 완료 섹션 -->
      <div class="card">
        <h3 class="card-title">{$t("dev.history.seminar1.completed")}</h3>
        <ul class="item-list">
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar1.item1")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar1.item2")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar1.item3")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar1.item4")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar1.item5")}</span>
          </li>
        </ul>
      </div>

      <!-- 배운 것들 섹션 -->
      <div class="card">
        <h3 class="card-title">{$t("dev.history.seminar1.learned")}</h3>
        <ul class="item-list">
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar1.learned1")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar1.learned2")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar1.learned3")}</span>
          </li>
          <li class="item">
            <span class="bullet">•</span>
            <span>{$t("dev.history.seminar1.learned4")}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 구분선 -->
    <div class="divider"></div>

    <!-- 향후 추가될 로그 -->
    <div class="upcoming-card">
      {$t("dev.history.upcoming")}
    </div>
  </div>
</div>

<style>
  /* 메인 컨테이너 */
  .dev-history {
    position: relative;
    min-height: 100vh;
    background: #f0f2f5;
    padding: 1.5rem;
  }

  /* 배경 그라디언트 */
  .background-gradient {
    position: absolute;
    inset: 0;
    background: radial-gradient(
        circle at top,
        rgba(198, 219, 255, 0.35),
        transparent 55%
      ),
      radial-gradient(
        circle at bottom,
        rgba(214, 233, 218, 0.3),
        transparent 60%
      );
    pointer-events: none;
  }

  /* 컨테이너 */
  .container {
    position: relative;
    max-width: 48rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  /* 헤더 섹션 */
  .header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .title {
    font-size: 2.25rem;
    font-weight: 700;
    color: #050505;
    margin: 0;
    letter-spacing: -0.025em;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 0.875rem;
    color: #5d6472;
    margin: 0;
    line-height: 1.5;
  }

  /* 업데이트 인디케이터 */
  .update-indicator {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    padding: 0.25rem 0.75rem;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
    color: #1877f2;
    box-shadow: 0 1px 3px rgba(207, 219, 244, 0.5);
    backdrop-filter: blur(8px);
  }

  .indicator-dot {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    background: #44c46f;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(68, 196, 111, 0.45);
  }

  /* 타임라인 섹션 */
  .timeline-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* 날짜 헤더 */
  .date-header {
    background: rgba(255, 255, 255, 0.8);
    border-left: 4px solid #1877f2;
    padding: 1rem;
    box-shadow: 0 1px 3px rgba(190, 212, 255, 0.4);
  }

  .date-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #050505;
    margin: 0;
  }

  /* 카드 */
  .card {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 1.5rem;
    padding: 1.5rem;
    box-shadow: 0 10px 25px rgba(204, 217, 240, 0.45);
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .card-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #050505;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  /* 아이템 리스트 */
  .item-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.875rem;
    color: #5d6472;
    line-height: 1.6;
  }

  .bullet {
    color: #1877f2;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }

  /* 구분선 */
  .divider {
    border-top: 1px solid #dfe1e6;
    margin: 1rem 0;
  }

  /* 향후 로그 카드 */
  .upcoming-card {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 1.5rem;
    padding: 2rem;
    text-align: center;
    font-size: 0.875rem;
    color: #5d6472;
    box-shadow: 0 10px 25px rgba(204, 217, 240, 0.45);
    backdrop-filter: blur(8px);
  }

  /* 반응형 디자인 */
  @media (max-width: 768px) {
    .dev-history {
      padding: 1rem;
    }

    .title {
      font-size: 1.875rem;
    }

    .card {
      padding: 1.25rem;
    }

    .date-title {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 640px) {
    .title {
      font-size: 1.5rem;
    }

    .subtitle {
      font-size: 0.8125rem;
    }

    .card {
      padding: 1rem;
      border-radius: 1rem;
    }

    .card-title {
      font-size: 1rem;
    }

    .item {
      font-size: 0.8125rem;
    }

    .upcoming-card {
      padding: 1.5rem;
      font-size: 0.8125rem;
    }
  }
</style>
