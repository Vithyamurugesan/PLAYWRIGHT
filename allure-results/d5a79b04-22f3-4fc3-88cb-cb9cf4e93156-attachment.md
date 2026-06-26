# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AUTOMATIONEXERCISE\TestCase3.test.ts >> Invalid Login
- Location: tests\AUTOMATIONEXERCISE\TestCase3.test.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Your email or password is incorrect!')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Your email or password is incorrect!')

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address": vithya@09944@gmail.com
- textbox "Password": "12345678"
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name"
- textbox "Email Address"
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Login system development"
  - link "Software testing tools"
  - link "Software"
- insertion:
  - iframe
```

# Test source

```ts
  1  | import { chromium, test, expect } from '@playwright/test';
  2  | 
  3  | test('Invalid Login', async ({ page }) => {
  4  |     const browser = await chromium.launch({
  5  |         headless: false
  6  |     });
  7  |   await page.goto('https://automationexercise.com/');
  8  |   await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');
  9  |   await page.getByRole('link', { name: ' Signup / Login' }).click();
  10 |   await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  11 | 
  12 |   await page.locator('input[data-qa="login-email"]').fill('vithya@09944@gmail.com');
  13 |   await page.getByRole('textbox', { name: 'Password' }).click();
  14 |   await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
  15 |   await page.getByRole('button', { name: 'Login' }).click();
> 16 |   await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
     |                                                                        ^ Error: expect(locator).toBeVisible() failed
  17 | })
```