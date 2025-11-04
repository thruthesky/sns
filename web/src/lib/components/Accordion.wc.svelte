<svelte:options customElement="sns-accordion" />

<script lang="ts">
  /**
   * Accordion Web Component
   *
   * 접을 수 있는 아코디언 형태의 컴포넌트입니다.
   * 여러 개의 아이템을 포함할 수 있으며, 한 번에 하나만 열리는 단일 모드를 지원합니다.
   *
   * Props:
   * - items: 아코디언 아이템 배열 (JSON 문자열 또는 배열)
   *   각 아이템 형식: { icon, title, content, hint?, gpl? }
   * - type: 'single' (하나만 열림, 기본값) 또는 'multiple' (여러 개 열림)
   * - collapsible: 열린 아이템을 다시 클릭하여 닫을 수 있는지 여부 (기본값: true)
   *
   * 사용 예시:
   * <sns-accordion
   *   items='[{"icon":"💡","title":"제목","content":"내용","hint":"힌트"}]'
   *   type="single"
   *   collapsible
   * ></sns-accordion>
   */

  import { ChevronDown } from 'lucide-svelte';

  /**
   * 아코디언 아이템 타입 정의
   */
  type AccordionItem = {
    icon?: string;
    title: string;
    content: string;
    hint?: string;
    gpl?: string;
  };

  /**
   * 아코디언 타입 ('single' 또는 'multiple')
   */
  type AccordionType = 'single' | 'multiple';

  /**
   * Props - Web Components에서는 HTML 속성이 문자열 또는 boolean으로 전달될 수 있음
   */
  let {
    items = '[]',
    type = 'single' as AccordionType,
    collapsible = true
  }: {
    items?: string | AccordionItem[];
    type?: AccordionType;
    collapsible?: boolean | string;
  } = $props();

  /**
   * Props 파싱 및 정규화
   * items가 JSON 문자열이면 파싱하고, 배열이면 그대로 사용
   */
  let parsedItems = $derived.by((): AccordionItem[] => {
    try {
      const itemsArray = typeof items === 'string' ? JSON.parse(items) : items;
      return Array.isArray(itemsArray) ? itemsArray : [];
    } catch (e) {
      console.error('Failed to parse accordion items:', e);
      return [];
    }
  });

  /**
   * collapsible prop 정규화
   * HTML 속성: <sns-accordion collapsible> → '' (빈 문자열)
   * HTML 속성: <sns-accordion collapsible="true"> → 'true'
   * JavaScript: element.collapsible = true → true
   */
  let isCollapsible = $derived.by((): boolean => {
    const c = collapsible;
    if (typeof c === 'boolean') return c;
    if (typeof c === 'string') return c !== 'false';
    return true;
  });

  /**
   * 열려있는 아이템들을 추적 (type="single"이면 하나만, "multiple"이면 여러 개)
   */
  let openItems = $state<Set<number>>(new Set());

  /**
   * 아이템 토글 함수
   * @param index - 토글할 아이템의 인덱스
   */
  function toggleItem(index: number): void {
    const newOpenItems = new Set(openItems);

    if (type === 'single') {
      // single 모드: 하나만 열림
      if (newOpenItems.has(index)) {
        // 이미 열려있으면
        if (isCollapsible) {
          newOpenItems.delete(index); // 닫기
        }
      } else {
        // 닫혀있으면
        newOpenItems.clear(); // 다른 모든 아이템 닫기
        newOpenItems.add(index); // 이 아이템만 열기
      }
    } else {
      // multiple 모드: 여러 개 열림
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index);
      } else {
        newOpenItems.add(index);
      }
    }

    openItems = newOpenItems;
  }

  /**
   * 아이템이 열려있는지 확인
   * @param index - 확인할 아이템의 인덱스
   * @returns 열려있으면 true, 닫혀있으면 false
   */
  function isOpen(index: number): boolean {
    return openItems.has(index);
  }
</script>

<!-- 아코디언 컨테이너 -->
<div class="accordion">
  {#each parsedItems as item, index}
    <!-- 아코디언 아이템 -->
    <div class="accordion-item">
      <!-- 아코디언 트리거 (헤더) -->
      <button
        class="accordion-trigger"
        onclick={() => toggleItem(index)}
        aria-expanded={isOpen(index)}
      >
        <div class="trigger-content">
          <!-- 아이콘 -->
          {#if item.icon}
            <div class="icon-container">
              {item.icon}
            </div>
          {/if}
          <!-- 제목 -->
          <span class="title">{item.title}</span>
        </div>
        <!-- Chevron 아이콘 (열림/닫힘 표시) -->
        <div
          class="chevron"
          class:rotate-180={isOpen(index)}
        >
          <ChevronDown size={20} />
        </div>
      </button>

      <!-- 아코디언 콘텐츠 -->
      {#if isOpen(index)}
        <div class="accordion-content">
          <p class="content-text">{item.content}</p>
          {#if item.hint}
            <p class="hint-box">
              {item.hint}
            </p>
          {/if}
          {#if item.gpl}
            <p class="gpl-box">
              {item.gpl}
            </p>
          {/if}
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  /**
   * 아코디언 스타일
   * Tailwind CSS 클래스를 순수 CSS로 변환
   */

  /* 아코디언 컨테이너 */
  .accordion {
    width: 100%; /* w-full */
    display: flex;
    flex-direction: column;
    gap: 1rem; /* space-y-4 */
  }

  /* 아코디언 아이템 */
  .accordion-item {
    border: 1px solid #e5e7eb; /* border border-gray-200 */
    border-radius: 0.5rem; /* rounded-lg */
    overflow: hidden;
    background-color: #ffffff; /* bg-white */
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
    transition: box-shadow 0.3s ease; /* transition-shadow */
  }

  .accordion-item:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* hover:shadow-md */
  }

  /* 아코디언 트리거 (헤더) */
  .accordion-trigger {
    width: 100%; /* w-full */
    padding: 1rem 1.5rem; /* px-6 py-4 */
    display: flex; /* flex */
    align-items: center; /* items-center */
    justify-content: space-between; /* justify-between */
    text-align: left; /* text-left */
    background: linear-gradient(to right, #eff6ff, #faf5ff); /* bg-gradient-to-r from-blue-50 to-purple-50 */
    transition: all 0.3s ease; /* transition-all */
    cursor: pointer;
    border: none;
    font-family: inherit;
  }

  .accordion-trigger:hover {
    background: linear-gradient(to right, #dbeafe, #f3e8ff); /* hover:from-blue-100 hover:to-purple-100 */
  }

  .accordion-trigger:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  /* 트리거 콘텐츠 (아이콘 + 제목) */
  .trigger-content {
    display: flex; /* flex */
    align-items: center; /* items-center */
    gap: 0.75rem; /* gap-3 */
    flex: 1; /* flex-1 */
  }

  /* 아이콘 컨테이너 */
  .icon-container {
    font-size: 1.5rem; /* text-2xl */
    background-color: #ffffff; /* bg-white */
    border-radius: 9999px; /* rounded-full */
    width: 2.5rem; /* w-10 */
    height: 2.5rem; /* h-10 */
    display: flex; /* flex */
    align-items: center; /* items-center */
    justify-content: center; /* justify-center */
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
  }

  /* 제목 */
  .title {
    font-size: 1.125rem; /* text-lg */
    font-weight: 600; /* font-semibold */
    color: #1f2937; /* text-gray-800 */
  }

  /* Chevron 아이콘 */
  .chevron {
    transition: transform 0.2s ease-in-out; /* transition-transform duration-200 */
    color: #4b5563; /* text-gray-600 */
  }

  .rotate-180 {
    transform: rotate(180deg);
  }

  /* 아코디언 콘텐츠 */
  .accordion-content {
    padding: 1rem 1.5rem; /* px-6 py-4 */
    background-color: #ffffff; /* bg-white */
    border-top: 1px solid #f3f4f6; /* border-t border-gray-100 */
    animation: slideDown 0.2s ease-out;
  }

  /* 콘텐츠 텍스트 */
  .content-text {
    color: #374151; /* text-gray-700 */
    line-height: 1.625; /* leading-relaxed */
    margin-bottom: 0.75rem; /* mb-3 */
  }

  /* 힌트 박스 */
  .hint-box {
    font-size: 0.875rem; /* text-sm */
    color: #2563eb; /* text-blue-600 */
    background-color: #eff6ff; /* bg-blue-50 */
    padding: 0.5rem 1rem; /* px-4 py-2 */
    border-radius: 0.375rem; /* rounded-md */
    border: 1px solid #bfdbfe; /* border border-blue-200 */
  }

  /* GPL 박스 */
  .gpl-box {
    font-size: 0.875rem; /* text-sm */
    color: #16a34a; /* text-green-600 */
    background-color: #f0fdf4; /* bg-green-50 */
    padding: 0.5rem 1rem; /* px-4 py-2 */
    border-radius: 0.375rem; /* rounded-md */
    border: 1px solid #bbf7d0; /* border border-green-200 */
    margin-top: 0.5rem; /* mt-2 */
  }

  /* 콘텐츠 애니메이션 */
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
