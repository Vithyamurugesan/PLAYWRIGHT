import { test } from '@playwright/test';

test('Test Timeout Example', async ({ page }) => {
    test.setTimeout(5000);
    await page.goto('https://the-internet.herokuapp.com');
    await page.waitForTimeout(6000);
});