import { test, expect } from '@playwright/test';

test('Assertion Timeout', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    await page.locator('button').click();
    await expect(page.locator('#finish')).toHaveText('Hello World!', {timeout: 2000});
});