import { test, expect } from '@playwright/test';

test.describe('Portal 패턴 적용 모달 위치 테스트', () => {
  test.beforeEach(async ({ page }) => {
    // 개발 서버 접속
    await page.goto('http://localhost:5173/');
  });

  test('댓글 작성 모달이 화면 중앙에 표시되어야 함', async ({ page }) => {
    // 글 목록 페이지로 이동
    await page.goto('http://localhost:5173/post/list');
    await page.waitForTimeout(2000);

    // 첫 번째 글의 댓글 버튼 클릭
    const commentButton = page.locator('button').filter({ hasText: /댓글|Comment/i }).first();
    await commentButton.click();
    await page.waitForTimeout(500);

    // 모달 백드롭 확인
    const modalBackdrop = page.locator('.modal-backdrop').first();
    await expect(modalBackdrop).toBeVisible();

    // 모달의 위치 확인
    const modal = page.locator('.modal').first();
    await expect(modal).toBeVisible();

    // 모달의 bounding box 가져오기
    const modalBox = await modal.boundingBox();
    const viewportSize = page.viewportSize();

    if (modalBox && viewportSize) {
      // 모달의 중심점 계산
      const modalCenterX = modalBox.x + modalBox.width / 2;
      const modalCenterY = modalBox.y + modalBox.height / 2;

      // Viewport의 중심점
      const viewportCenterX = viewportSize.width / 2;
      const viewportCenterY = viewportSize.height / 2;

      // 중앙에서 벗어난 정도 (허용 오차: 100px)
      const xOffset = Math.abs(modalCenterX - viewportCenterX);
      const yOffset = Math.abs(modalCenterY - viewportCenterY);

      console.log(`모달 중심: (${modalCenterX}, ${modalCenterY})`);
      console.log(`Viewport 중심: (${viewportCenterX}, ${viewportCenterY})`);
      console.log(`오프셋: X=${xOffset}px, Y=${yOffset}px`);

      // 모달이 화면 중앙 근처에 있는지 확인
      expect(xOffset).toBeLessThan(100);
      expect(yOffset).toBeLessThan(100);

      // 모달이 viewport 안에 완전히 들어있는지 확인
      expect(modalBox.x).toBeGreaterThanOrEqual(0);
      expect(modalBox.y).toBeGreaterThanOrEqual(0);
      expect(modalBox.x + modalBox.width).toBeLessThanOrEqual(viewportSize.width);
    }
  });

  test('글 수정 모달이 화면 중앙에 표시되어야 함', async ({ page }) => {
    // 로그인 필요 (테스트 계정 사용)
    await page.goto('http://localhost:5173/user/login');
    await page.waitForTimeout(1000);

    // 이메일/비밀번호 입력 필드 확인
    const emailInput = page.locator('input[type="email"]').first();
    if (await emailInput.isVisible()) {
      await emailInput.fill('test@example.com');
      const passwordInput = page.locator('input[type="password"]').first();
      await passwordInput.fill('test123456');
      const loginButton = page.locator('button').filter({ hasText: /로그인|Login/i }).first();
      await loginButton.click();
      await page.waitForTimeout(2000);
    }

    // 글 목록 페이지로 이동
    await page.goto('http://localhost:5173/post/list');
    await page.waitForTimeout(2000);

    // 첫 번째 글의 수정 버튼 클릭 (... 메뉴)
    const moreButton = page.locator('button[aria-label*="더보기"], button').filter({ hasText: /⋮|\.\.\./ }).first();
    if (await moreButton.isVisible()) {
      await moreButton.click();
      await page.waitForTimeout(300);

      const editButton = page.locator('button').filter({ hasText: /수정|Edit/i }).first();
      await editButton.click();
      await page.waitForTimeout(500);

      // 모달 확인
      const modal = page.locator('.modal').first();
      await expect(modal).toBeVisible();

      const modalBox = await modal.boundingBox();
      const viewportSize = page.viewportSize();

      if (modalBox && viewportSize) {
        const modalCenterX = modalBox.x + modalBox.width / 2;
        const modalCenterY = modalBox.y + modalBox.height / 2;
        const viewportCenterX = viewportSize.width / 2;
        const viewportCenterY = viewportSize.height / 2;

        const xOffset = Math.abs(modalCenterX - viewportCenterX);
        const yOffset = Math.abs(modalCenterY - viewportCenterY);

        console.log(`글 수정 모달 중심: (${modalCenterX}, ${modalCenterY})`);
        console.log(`오프셋: X=${xOffset}px, Y=${yOffset}px`);

        expect(xOffset).toBeLessThan(100);
        expect(yOffset).toBeLessThan(100);
      }
    }
  });
});
