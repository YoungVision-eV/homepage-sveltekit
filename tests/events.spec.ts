import { test, expect } from '@playwright/test';

test('Summer Gathering 2024 screenshot', async ({ page }) => {
	await page.goto('/events/summer-gathering-2024');
	expect(await page.screenshot()).toMatchSnapshot();
});
