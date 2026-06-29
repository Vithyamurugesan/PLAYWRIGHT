import { test, expect } from '@playwright/test';

test.describe.skip('Demo Web Shop - Login Tests', () => {

    test('Valid Login', async ({ page }) => {

        await page.goto('https://demowebshop.tricentis.com/');

        await page.click('text=Log in');

        await page.fill('#Email', 'jenny04@gmail.com');
        await page.fill('#Password', '123456');

        await page.click('input[value="Log in"]');

        
    });

    test('Invalid Login', async ({ page }) => {

        await page.goto('https://demowebshop.tricentis.com/');

        await page.click('text=Log in');

        await page.fill('#Email', 'jenny@gmail.com');
        await page.fill('#Password', '123');

        await page.click('input[value="Log in"]');

        await expect(page.locator('.validation-summary-errors'))
            .toContainText('Login was unsuccessful');
    });

});