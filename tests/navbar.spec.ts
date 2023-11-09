import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	page.goto('/');
});

for (const subPage of [
	{ name: 'Home', url: '/' },
	{ name: 'About', url: '/about-us' },
	{ name: 'Support', url: '/support-us' }
	// TODO: Add tests for new sub pages
]) {
	test(`clicking '${subPage.name}' navigates to ${subPage.url}`, async ({ page, isMobile }) => {
		if (isMobile) {
			await page.getByRole('button', { name: 'Open main menu' }).click();
		}
		await page.getByRole('link', { name: subPage.name }).click();
		await expect(page).toHaveURL(subPage.url);
		// on mobile the navbar is only the header
		await expect(page.getByRole('navigation')).toHaveScreenshot();
		if (isMobile) {
			// menu closes on navigation
			await expect(page.getByRole('button', { name: 'Close main menu' })).not.toBeVisible();
		}
	});
}

test.describe('Mobile only', () => {
	test.skip(({ isMobile }) => !isMobile, 'Mobile only');

	test('on mobile opens main menu', async ({ page }) => {
		await page.getByRole('button', { name: 'Open main menu' }).click();

		await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
		await expect(page).toHaveScreenshot();
	});

	test('on mobile closes main menu', async ({ page }) => {
		await page.getByRole('button', { name: 'Open main menu' }).click();
		await page.getByRole('button', { name: 'Close main menu' }).click();
		await expect(page.getByRole('link', { name: 'Home' })).not.toBeVisible();
	});
});
