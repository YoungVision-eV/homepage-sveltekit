import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/support-us');
});

test('index page screenshot', async ({ page }) => {
	await expect(page).toHaveScreenshot({ fullPage: true });
});

test('Expanding Fördermitglieder', async ({ page }) => {
	await page.getByRole('button', { name: 'Show benefits' }).click();
	await expect(page.getByTestId('benefits')).toHaveScreenshot();
});
