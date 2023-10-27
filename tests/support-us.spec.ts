import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/support-us');
});

test('index page screenshot', async ({ page }) => {
	await expect(page).toHaveScreenshot({ fullPage: true });
});
