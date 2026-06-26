import { chromium, test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    const browser = await chromium.launch({
        headless: false
    });
  await page.goto('https://automationexercise.com/');
  await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();

 await page.locator('input[data-qa="login-email"]').fill('vithyakm0998@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#header')).toContainText('Logout');
  await expect(page.getByText('Logged in as')).toBeVisible({ timeout: 10000 });


  //await page.getByRole('link', { name: ' Delete Account' }).click();
  //await expect(page.locator('b')).toContainText('Account Deleted!');
  //await page.getByRole('link', { name: 'Continue' }).click();
  //await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
});
