import { test } from '@playwright/test';

test('Tab Key', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName').click();
    await page.keyboard.type('Vithya');
    await page.keyboard.press('Tab');
    await page.keyboard.type('vithya@gmail.com');

});



test('Enter Key', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    await page.locator('#currentAddress').click();
    await page.keyboard.type('Coimbatore');
    await page.keyboard.press('Enter');

});