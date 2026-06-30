import { test } from '@playwright/test';

test('Action Timeout', async ({ page }) => {

    page.setDefaultTimeout(3000);
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    await page.locator('#username').click();

});