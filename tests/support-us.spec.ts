import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/support-us');
});

test('support-us page screenshot', async ({ page }) => {
	await expect(page).toHaveScreenshot({ fullPage: true });
});

test('Expanding Fördermitglieder', async ({ page }) => {
	await page.getByRole('button', { name: 'Show benefits' }).click();
	await expect(page.getByTestId('benefits')).toHaveScreenshot();
});

test.describe('Donation method details', () => {
	for (const method of ['Partner werden', 'Geld spenden', 'Expertise Spenden', 'Sachspenden']) {
		test(`Expanding '${method}'`, async ({ isMobile, page }) => {
			const element = page.getByRole(isMobile ? 'button' : 'tab', { name: new RegExp(method) });
			await element.click();
			let targetElement;
			if (isMobile) {
				// TODO: Find a better accessor
				const controlledId = await element.getAttribute('aria-controls');
				targetElement = page.locator(`id=${controlledId}`);
			} else {
				targetElement = page.getByRole('tabpanel');
			}
			await expect(targetElement).toHaveScreenshot();
		});
	}
});
