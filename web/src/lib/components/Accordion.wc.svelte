<svelte:options customElement="sns-accordion" />

<script>
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
   * @typedef {Object} AccordionProps
   * @property {string | Array<{icon?: string, title: string, content: string, hint?: string, gpl?: string}>} [items='[]'] - 아코디언 아이템 배열
   * @property {'single' | 'multiple'} [type='single'] - 아코디언 타입
   * @property {boolean | string} [collapsible=true] - 닫기 가능 여부
   */

  // Props - Web Components에서는 HTML 속성이 문자열 또는 boolean으로 전달될 수 있음
  /** @type {AccordionProps} */
  let {
    items = '[]',
    type = 'single',
    collapsible = true
  } = $props();

  // Props 파싱 및 정규화
  let parsedItems = $derived.by(() => {
    try {
      const itemsArray = typeof items === 'string' ? JSON.parse(items) : items;
      return Array.isArray(itemsArray) ? itemsArray : [];
    } catch (e) {
      console.error('Failed to parse accordion items:', e);
      return [];
    }
  });

  // collapsible prop 정규화
  // HTML 속성: <sns-accordion collapsible> → '' (빈 문자열)
  // HTML 속성: <sns-accordion collapsible="true"> → 'true'
  // JavaScript: element.collapsible = true → true
  let isCollapsible = $derived(() => {
    const c = collapsible;
    if (typeof c === 'boolean') return c;
    if (typeof c === 'string') return c !== 'false';
    return true;
  });

  // 열려있는 아이템들을 추적 (type="single"이면 하나만, "multiple"이면 여러 개)
  let openItems = $state(new Set());

  /**
   * 아이템 토글 함수
   * @param {number} index - 토글할 아이템의 인덱스
   */
  function toggleItem(index) {
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
   * @param {number} index - 확인할 아이템의 인덱스
   * @returns {boolean}
   */
  function isOpen(index) {
    return openItems.has(index);
  }
</script>

<!-- 아코디언 컨테이너 -->
<div class="accordion w-full space-y-4">
  {#each parsedItems as item, index}
    <!-- 아코디언 아이템 -->
    <div class="accordion-item border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <!-- 아코디언 트리거 (헤더) -->
      <button
        class="accordion-trigger w-full px-6 py-4 flex items-center justify-between text-left bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all"
        onclick={() => toggleItem(index)}
        aria-expanded={isOpen(index)}
      >
        <div class="flex items-center gap-3 flex-1">
          <!-- 아이콘 -->
          {#if item.icon}
            <div class="text-2xl bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
              {item.icon}
            </div>
          {/if}
          <!-- 제목 -->
          <span class="text-lg font-semibold text-gray-800">{item.title}</span>
        </div>
        <!-- Chevron 아이콘 (열림/닫힘 표시) -->
        <div
          class="chevron transition-transform duration-200"
          class:rotate-180={isOpen(index)}
        >
          <ChevronDown size={20} class="text-gray-600" />
        </div>
      </button>

      <!-- 아코디언 콘텐츠 -->
      {#if isOpen(index)}
        <div class="accordion-content px-6 py-4 bg-white border-t border-gray-100">
          <p class="text-gray-700 leading-relaxed mb-3">{item.content}</p>
          {#if item.hint}
            <p class="text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-md border border-blue-200">
              {item.hint}
            </p>
          {/if}
          {#if item.gpl}
            <p class="text-sm text-green-600 bg-green-50 px-4 py-2 rounded-md border border-green-200 mt-2">
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
   * Tailwind CSS를 사용하므로 추가 스타일은 최소화
   */
  .chevron {
    transition: transform 0.2s ease-in-out;
  }

  .rotate-180 {
    transform: rotate(180deg);
  }

  /* 버튼 기본 스타일 초기화 */
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  button:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  /* 콘텐츠 애니메이션 */
  .accordion-content {
    animation: slideDown 0.2s ease-out;
  }

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
