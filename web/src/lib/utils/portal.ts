/**
 * Portal 유틸리티 함수
 *
 * DOM 요소를 document.body로 이동하여 렌더링합니다.
 * 이렇게 하면 부모 컨테이너의 CSS(overflow, position 등) 영향을 받지 않습니다.
 *
 * 사용 예시:
 * ```svelte
 * <script>
 *   import { portal } from '$lib/utils/portal';
 * </script>
 *
 * <div class="modal-backdrop" use:portal>
 *   <!-- 모달 내용 -->
 * </div>
 * ```
 *
 * 동작 방식:
 * 1. 요소를 원래 위치에서 제거
 * 2. document.body에 추가
 * 3. 언마운트 시 정리
 */

/**
 * Portal Svelte Action
 *
 * @param node - DOM 요소
 * @returns destroy 함수가 포함된 객체
 */
export function portal(node: HTMLElement) {
  // 1. 원래 위치 저장 (복원을 위해)
  const originalParent = node.parentElement;
  const originalNextSibling = node.nextSibling;

  // 2. document.body로 이동
  document.body.appendChild(node);

  // 3. 정리 함수 반환
  return {
    destroy() {
      // 언마운트 시 원래 위치로 복원 (선택 사항)
      // 또는 단순히 document.body에서 제거
      if (node.parentElement === document.body) {
        document.body.removeChild(node);
      }

      // 필요하다면 원래 위치로 복원:
      // if (originalParent) {
      //   originalParent.insertBefore(node, originalNextSibling);
      // }
    }
  };
}
