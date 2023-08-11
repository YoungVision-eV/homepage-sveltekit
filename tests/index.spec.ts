import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test('index page screenshot', async ({ page }) => {
	await expect(page).toHaveScreenshot();
});
test('index page has navigation', async ({ page }) => {
	await expect(page.getByRole('navigation')).toBeVisible();
});

for (const subPage of [
	{ name: 'Home', url: '/' }
	// TODO: Add tests for new sub pages
]) {
	test(`clicking '${subPage.name}' navigates to ${subPage.url}`, async ({ page, isMobile }) => {
		if (isMobile) {
			await page.getByRole('button', { name: 'Open main menu' }).click();
		}
		await page.getByRole('link', { name: subPage.name }).click();
		await expect(page).toHaveURL(subPage.url);
	});
}

test.describe('Mobile only', () => {
	test.skip(({ isMobile }) => !isMobile, 'Mobile only');

	test('on mobile opens main menu', async ({ page }) => {
		await page.getByRole('button', { name: 'Open main menu' }).click();
		await expect(page).toHaveScreenshot();
		await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
	});
});
