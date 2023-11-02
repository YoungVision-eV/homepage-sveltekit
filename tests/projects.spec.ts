import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
	await page.goto('/projects');
});

test('Projects page screenshot', async ({ page }) => {
	await expect(page).toHaveScreenshot({ fullPage: true });
});

test('Filter members_only', async ({ page }) => {
	await page.getByLabel('Nur Mitglieder').click();
	await expect(page.getByRole('list').getByText('Nur Mitglieder')).not.toBeVisible();
	await expect(page).toHaveScreenshot({ fullPage: true });
});

test('Filter for_all', async ({ page }) => {
	await page.getByLabel('Für Alle').click();
	await expect(page.getByRole('list').getByText('Für Alle')).not.toBeVisible();
	await expect(page).toHaveScreenshot({ fullPage: true });
});
