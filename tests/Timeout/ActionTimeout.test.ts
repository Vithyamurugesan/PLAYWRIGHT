import { test } from '@playwright/test';

test('Action Timeout', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com');

    await page.locator('#username').click();

});