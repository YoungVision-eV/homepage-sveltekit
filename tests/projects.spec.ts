import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
	await page.goto('/projects');
});

test('Projects page screenshot', async ({ page }) => {
	await expect(page).toHaveScreenshot({ fullPage: true });
});
