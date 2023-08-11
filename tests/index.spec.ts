import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	page.goto('/');
});

test('index page screenshot', async ({ page }) => {
	await expect(page).toHaveScreenshot();
});
test('index page has navigation to home', async ({ page }) => {
	await expect(page.getByRole('navigation')).toBeVisible();
});

test('clicking Home navigates to Home', async ({ page }) => {
	await page.getByRole('link', { name: 'Home' }).click();
	await expect(page).toHaveURL('/');
});
