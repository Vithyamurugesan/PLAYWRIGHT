import { chromium, test, expect } from '@playwright/test';

test('Logout User', async ({ page }) => {
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
  await expect(page.locator('#header')).toContainText('Logged in as Vithyak');
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page).toHaveURL('https://automationexercise.com/login');
});