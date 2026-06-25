import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tutorialsninja.com/demo/');
  await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();

  await page.getByText('My Account Register Login').click();
  await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();

  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByRole('button', { name: '$ Currency  ' })).toBeVisible();

  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill(process.env.name!);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.pword!);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#content')).toContainText('My Account');
}
)