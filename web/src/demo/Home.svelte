<script>
  /**
   * 홈 화면 컴포넌트
   *
   * SNS 프로젝트의 메인 홈 화면입니다.
   * 프로젝트 소개, AI 진실, 개발 로드맵, 프로젝트 개요 등을 표시합니다.
   */

  import { t } from "../lib/stores/i18n.js";
  import { ChevronDown, CheckCircle2, Circle } from "lucide-svelte";
  import { rtdb } from "../lib/utils/firebase-realtime-database.svelte.js";

  // 현재 열려있는 아코디언 아이템
  let openAccordionItem = $state(null);

  /**
   * 아코디언 아이템 토글
   * @param {string} itemId - 토글할 아이템 ID
   */
  function toggleAccordion(itemId) {
    openAccordionItem = openAccordionItem === itemId ? null : itemId;
  }

  /**
   * 아코디언 아이템 데이터
   */
  const accordionItems = [
    {
      id: "item1",
      titleKey: "home.aiTruth.item1.title",
      contentKey: "home.aiTruth.item1.content",
      hintKey: null,
    },
    {
      id: "item2",
      titleKey: "home.aiTruth.item2.title",
      contentKey: "home.aiTruth.item2.content",
      hintKey: "home.aiTruth.item2.hint",
    },
    {
      id: "item3",
      titleKey: "home.aiTruth.item3.title",
      contentKey: "home.aiTruth.item3.content",
      hintKey: "home.aiTruth.item3.hint",
      showGpl: true,
    },
  ];

  /**
   * TODO 아이템 데이터 (완료 여부 포함)
   */
  const todoItems = [
    {
      labelKey: "home.todo.item1.label",
      descriptionKey: "home.todo.item1.description",
      completed: true,
      subitems: [],
    },
    {
      labelKey: "home.todo.item2.label",
      descriptionKey: "home.todo.item2.description",
      completed: true,
      subitems: [],
    },
    {
      labelKey: "home.todo.item3.label",
      descriptionKey: "home.todo.item3.description",
      completed: true,
      subitems: [
        { key: "home.todo.item3.subitem1", completed: true },
        { key: "home.todo.item3.subitem2", completed: true },
      ],
    },
    {
      labelKey: "home.todo.item4.label",
      descriptionKey: null,
      completed: false,
      subitems: [],
    },
    {
      labelKey: "home.todo.item5.label",
      descriptionKey: null,
      completed: false,
      subitems: [
        { key: "home.todo.item5.subitem1", completed: false },
        { key: "home.todo.item5.subitem2", completed: false },
        { key: "home.todo.item5.subitem3", completed: false },
        { key: "home.todo.item5.subitem4", completed: false },
      ],
    },
    {
      labelKey: "home.todo.item6.label",
      descriptionKey: null,
      completed: false,
      subitems: [
        { key: "home.todo.item6.subitem1", completed: false },
        { key: "home.todo.item6.subitem2", completed: false },
      ],
    },
    {
      labelKey: "home.todo.item7.label",
      descriptionKey: null,
      completed: false,
      subitems: [{ key: "home.todo.item7.subitem1", completed: false }],
    },
  ];

  /**
   * 프로젝트 배지 목록
   */
  const badges = [
    "home.overview.badge1",
    "home.overview.badge2",
    "home.overview.badge3",
    "home.overview.badge4",
  ];

  // Firebase RTDB 사용자 데이터 가져오기
  // ⚠️ 중요: destructuring하지 않고 객체 자체를 사용해야 반응성이 유지됩니다
  const userRtdb = rtdb("/users/apple");
</script>

<div class="home">
  <!-- Vibe 배너 -->
  <div class="vibe-banner">
    <span class="vibe-text">✨ {$t("home.vibeBanner")}</span>
  </div>

  <!-- 메인 타이틀 -->
  <div class="hero-section">
    <h1 class="hero-title">{$t("home.title")}</h1>
    <p class="hero-description">
      {$t("home.description.part1")}
      <a
        href="https://open.kakao.com/o/gdj4M4Tg"
        target="_blank"
        rel="noopener noreferrer"
        class="hero-link"
      >
        {$t("home.description.linkText")}
      </a>
      {$t("home.description.part2")}
    </p>
  </div>

  <!-- 기술 스택 -->
  <section class="section techstack-section">
    <h2 class="section-title">{$t("home.techStack.title")}</h2>
    <div class="techstack-grid">
      <!-- Svelte -->
      <div class="techstack-item">
        <div class="techstack-icon svelte-icon">⚡</div>
        <h3 class="techstack-name">{$t("home.techStack.svelte")}</h3>
        <p class="techstack-description">{$t("home.techStack.svelteDesc")}</p>
      </div>

      <!-- Flutter -->
      <div class="techstack-item">
        <div class="techstack-icon flutter-icon">📱</div>
        <h3 class="techstack-name">{$t("home.techStack.flutter")}</h3>
        <p class="techstack-description">{$t("home.techStack.flutterDesc")}</p>
      </div>

      <!-- Firebase -->
      <div class="techstack-item">
        <div class="techstack-icon firebase-icon">🔥</div>
        <h3 class="techstack-name">{$t("home.techStack.firebase")}</h3>
        <p class="techstack-description">{$t("home.techStack.firebaseDesc")}</p>
      </div>

      <!-- Dokplay -->
      <a
        href="https://dokploy.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="techstack-item"
      >
        <div class="techstack-icon dokplay-icon">☁️</div>
        <h3 class="techstack-name">{$t("home.techStack.dokplay")}</h3>
        <p class="techstack-description">{$t("home.techStack.dokplayDesc")}</p>
      </a>
    </div>
  </section>

  <!-- AI 시대의 진실 (Accordion) -->
  <section class="section">
    <h2 class="section-title">{$t("home.aiTruth.title")}</h2>
    <div class="accordion">
      {#each accordionItems as item}
        <div class="accordion-item">
          <button
            class="accordion-trigger"
            onclick={() => toggleAccordion(item.id)}
            aria-expanded={openAccordionItem === item.id}
          >
            <span class="accordion-title">{$t(item.titleKey)}</span>
            <span
              class="accordion-icon"
              class:open={openAccordionItem === item.id}
            >
              <ChevronDown size={20} />
            </span>
          </button>

          {#if openAccordionItem === item.id}
            <div class="accordion-content">
              <p>{$t(item.contentKey)}</p>
              {#if item.showGpl}
                <div class="gpl-badge">{$t("home.aiTruth.item3.gpl")}</div>
              {/if}
              {#if item.hintKey}
                <div class="hint">{$t(item.hintKey)}</div>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </section>

  <!-- 개발 로드맵 (TODO) -->
  <section class="section">
    <h2 class="section-title">{$t("home.todo.title")}</h2>
    <div class="todo-list">
      {#each todoItems as item}
        <div class="todo-item">
          <div class="todo-main">
            <span class="todo-icon" class:completed={item.completed}>
              {#if item.completed}
                <CheckCircle2 size={20} />
              {:else}
                <Circle size={20} />
              {/if}
            </span>
            <div class="todo-content">
              <div class="todo-label" class:completed={item.completed}>
                {$t(item.labelKey)}
              </div>
              {#if item.descriptionKey}
                <div class="todo-description">{$t(item.descriptionKey)}</div>
              {/if}
            </div>
          </div>

          {#if item.subitems.length > 0}
            <div class="todo-subitems">
              {#each item.subitems as subitem}
                <div class="todo-subitem">
                  <span
                    class="todo-subicon"
                    class:completed={subitem.completed}
                  >
                    {#if subitem.completed}
                      <CheckCircle2 size={16} />
                    {:else}
                      <Circle size={16} />
                    {/if}
                  </span>
                  <span
                    class="todo-subtext"
                    class:completed={subitem.completed}
                  >
                    {$t(subitem.key)}
                  </span>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </section>

  <!-- 프로젝트 개요 -->
  <section class="section overview-section">
    <h2 class="section-title">{$t("home.overview.title")}</h2>
    <div class="overview-content">
      <p class="overview-text">
        <strong>{$t("home.overview.brand")}</strong>{$t(
          "home.overview.description"
        )}
      </p>
      <div class="badges">
        {#each badges as badgeKey}
          <span class="badge">{$t(badgeKey)}</span>
        {/each}
      </div>
    </div>
  </section>

  <!-- AI 시대의 변화와 성장 -->
  <section class="section change-section">
    <h2 class="section-title">{$t("home.aiChange.title")}</h2>
    <div class="change-content">
      <p class="change-description">{$t("home.aiChange.description")}</p>
      <p class="change-emphasis">
        {$t("home.aiChange.emphasis")}
        <strong class="change-highlight">{$t("home.aiChange.highlight")}</strong
        >{$t("home.aiChange.conclusion")}
      </p>
      <div class="hint">{$t("home.aiChange.hint")}</div>
    </div>
  </section>
</div>

<style>
  /* 홈 컨테이너 */
  .home {
    max-width: 100%;
    padding: 0;
  }

  /* Vibe 배너 */
  .vibe-banner {
    display: inline-block;
    margin-bottom: 1.5rem;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 9999px;
    box-shadow: 0 4px 6px rgba(102, 126, 234, 0.3);
  }

  .vibe-text {
    color: white;
    font-size: 0.875rem;
    font-weight: 500;
  }

  /* 히어로 섹션 */
  .hero-section {
    margin-bottom: 3rem;
  }

  /* 기술 스택 섹션 */
  .techstack-section {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border: 1px solid #d1d5db;
  }

  .techstack-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: flex-start;
  }

  .techstack-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0.75rem 0.875rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
    transition: all 0.2s ease;
    border: 1px solid #f0f0f0;
    flex: 0 1 auto;
    min-width: 170px;
    text-decoration: none;
    color: inherit;
  }

  .techstack-item:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
    border-color: #e5e7eb;
  }

  .techstack-icon {
    font-size: 1.75rem;
    margin-bottom: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  }

  .techstack-icon.svelte-icon {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  }

  .techstack-icon.flutter-icon {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  }

  .techstack-icon.firebase-icon {
    background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
  }

  .techstack-icon.dokplay-icon {
    background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
  }

  .techstack-name {
    font-size: 0.9rem;
    font-weight: 700;
    color: #111827;
    margin: 0 0 0.125rem 0;
  }

  .techstack-description {
    font-size: 0.7rem;
    color: #6b7280;
    line-height: 1.35;
    margin: 0;
  }

  .hero-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0 0 1rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
  }

  .hero-description {
    font-size: 1.125rem;
    color: #6b7280;
    line-height: 1.7;
    margin: 0;
  }

  .hero-link {
    color: #3b82f6;
    text-decoration: underline;
    font-weight: 500;
  }

  .hero-link:hover {
    color: #2563eb;
  }

  /* 섹션 */
  .section {
    margin-bottom: 3rem;
    padding: 2rem;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;
  }

  .section:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  .section-title {
    font-size: 1.875rem;
    font-weight: 700;
    margin: 0 0 1.5rem 0;
    color: #111827;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  /* 아코디언 */
  .accordion {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .accordion-item {
    border: 1px solid #e5e7eb;
    border-radius: 0.625rem;
    overflow: hidden;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    background: white;
  }

  .accordion-item:hover {
    border-color: #d1d5db;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.08);
    transform: translateY(-1px);
  }

  .accordion-trigger {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.95rem 1.25rem;
    background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 600;
    color: #111827;
    text-align: left;
    transition: all 0.25s ease;
  }

  .accordion-trigger:hover {
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  }

  .accordion-trigger[aria-expanded="true"] {
    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  }

  .accordion-title {
    flex: 1;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .accordion-icon {
    display: flex;
    color: #9ca3af;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    margin-left: 0.75rem;
  }

  .accordion-icon.open {
    transform: rotate(180deg);
    color: #667eea;
  }

  .accordion-content {
    padding: 0 1.25rem 1.25rem 1.25rem;
    color: #374151;
    line-height: 1.7;
    animation: slideDown 0.3s ease-out;
    background: #fafbfc;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 500px;
    }
  }

  .accordion-content p {
    margin: 0 0 0.75rem 0;
  }

  .gpl-badge {
    display: inline-block;
    margin-top: 0.875rem;
    padding: 0.5rem 0.875rem;
    background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
    border: 1px solid #86efac;
    border-radius: 0.5rem;
    font-size: 0.8125rem;
    font-weight: 600;
    color: #166534;
    box-shadow: 0 2px 4px rgba(34, 197, 94, 0.1);
  }

  .hint {
    margin-top: 0.875rem;
    padding: 0.75rem 1rem;
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border-left: 4px solid #667eea;
    border-radius: 0.5rem;
    font-size: 0.8125rem;
    color: #1e3a8a;
    line-height: 1.6;
    box-shadow: 0 2px 4px rgba(102, 126, 234, 0.08);
  }

  /* TODO 리스트 */
  .todo-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .todo-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .todo-main {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .todo-icon {
    display: flex;
    color: #9ca3af;
    margin-top: 0.125rem;
    flex-shrink: 0;
  }

  .todo-icon.completed {
    color: #10b981;
  }

  .todo-content {
    flex: 1;
  }

  .todo-label {
    font-size: 1rem;
    font-weight: 600;
    color: #111827;
    line-height: 1.5;
  }

  .todo-label.completed {
    color: #6b7280;
    text-decoration: line-through;
  }

  .todo-description {
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 0.25rem;
  }

  .todo-subitems {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .todo-subitem {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .todo-subicon {
    display: flex;
    color: #9ca3af;
    flex-shrink: 0;
  }

  .todo-subicon.completed {
    color: #10b981;
  }

  .todo-subtext {
    font-size: 0.875rem;
    color: #374151;
  }

  .todo-subtext.completed {
    color: #9ca3af;
    text-decoration: line-through;
  }

  /* 프로젝트 개요 */
  .overview-section {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border: 1px solid #bae6fd;
  }

  .overview-text {
    font-size: 1.125rem;
    color: #374151;
    line-height: 1.7;
    margin: 0 0 1.5rem 0;
  }

  .overview-text strong {
    color: #3b82f6;
    font-weight: 700;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: white;
    border: 1px solid #93c5fd;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #1e40af;
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);
  }

  /* AI 변화 섹션 */
  .change-section {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border: 1px solid #fcd34d;
  }

  .change-description {
    font-size: 1.125rem;
    color: #374151;
    line-height: 1.7;
    margin: 0 0 1rem 0;
  }

  .change-emphasis {
    font-size: 1.125rem;
    color: #78350f;
    line-height: 1.7;
    margin: 0 0 1rem 0;
  }

  .change-highlight {
    color: #b45309;
    font-weight: 700;
    text-decoration: underline;
  }

  /* 반응형 */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }

    .section {
      padding: 1.5rem;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .todo-subitems {
      margin-left: 1.5rem;
    }

    .techstack-grid {
      justify-content: center;
      gap: 0.5rem;
    }

    .techstack-item {
      min-width: 150px;
      padding: 0.6rem 0.75rem;
    }

    .techstack-icon {
      width: 38px;
      height: 38px;
      font-size: 1.5rem;
      margin-bottom: 0.25rem;
    }

    .techstack-name {
      font-size: 0.825rem;
    }

    .techstack-description {
      font-size: 0.65rem;
    }
  }

  @media (max-width: 640px) {
    .hero-title {
      font-size: 1.75rem;
    }

    .hero-description {
      font-size: 1rem;
    }

    .section {
      padding: 1rem;
    }

    .section-title {
      font-size: 1.25rem;
    }

    .accordion-trigger {
      padding: 0.875rem 1rem;
      font-size: 0.9375rem;
    }

    .accordion-content {
      padding: 0 1rem 1rem 1rem;
      font-size: 0.9375rem;
    }

    .badges {
      gap: 0.5rem;
    }

    .badge {
      font-size: 0.8125rem;
      padding: 0.375rem 0.75rem;
    }
  }
</style>
