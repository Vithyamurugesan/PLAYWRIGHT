import {test,expect} from '@playwright/test';

test('Login Test',async({page})=>{
    await page.goto(process.env.BASE_URL!);
    await page.fill('#username',process.env.name!);
    await page.fill('#password',process.env.pword!);
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.success')).toBeVisible();
});