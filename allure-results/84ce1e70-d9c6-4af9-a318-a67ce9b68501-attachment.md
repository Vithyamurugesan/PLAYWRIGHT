# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AUTOMATIONEXERCISE\TestCase4.test.ts >> Logout User
- Location: tests\AUTOMATIONEXERCISE\TestCase4.test.ts:3:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#header')
Expected substring: "Logout"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#header')

```

```yaml
- heading "This page isn’t working" [level=1]
- paragraph:
  - strong: automationexercise.com
  - text: is currently unable to handle this request.
- text: HTTP ERROR 500
```

# Test source

```ts
  1  | import { chromium, test, expect } from '@playwright/test';
  2  | 
  3  | test('Logout User', async ({ page }) => {
  4  |     const browser = await chromium.launch({
  5  |         headless: false
  6  |     });
  7  |   await page.goto('https://automationexercise.com/');
  8  |   await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');
  9  |   await page.getByRole('link', { name: ' Signup / Login' }).click();
  10 |   await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  11 | 
  12 |   await page.locator('input[data-qa="login-email"]').fill('vithyakm0998@gmail.com');
  13 |   await page.getByRole('textbox', { name: 'Password' }).click();
  14 |   await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
  15 |   await page.getByRole('button', { name: 'Login' }).click();
> 16 |   await expect(page.locator('#header')).toContainText('Logout');
     |                                         ^ Error: expect(locator).toContainText(expected) failed
  17 |   await expect(page.locator('#header')).toContainText('Logged in as Vithyak');
  18 |   await page.getByRole('link', { name: 'Logout' }).click();
  19 |   await expect(page).toHaveURL('https://automationexercise.com/login');
  20 | });
```