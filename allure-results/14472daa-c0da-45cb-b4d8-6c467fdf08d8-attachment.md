# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Testtags.test.ts >> Demo Web Shop - Login Tests >> Valid Login @smoke
- Location: tests\Testtags.test.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demowebshop.tricentis.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Demo Web Shop - Login Tests', () => {
  4  | 
  5  |     test('Valid Login @smoke', async ({ page }) => {
  6  | 
> 7  |         await page.goto('https://demowebshop.tricentis.com/');
     |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  8  | 
  9  |         await page.click('text=Log in');
  10 | 
  11 |         await page.fill('#Emai', 'jenny04@gmail.com');
  12 |         await page.fill('#Password', '123456');
  13 | 
  14 |         await page.click('input[value="Log in"]');
  15 | 
  16 |         
  17 |     });
  18 | 
  19 |     test('Invalid Login @regression', async ({ page }) => {
  20 | 
  21 |         await page.goto('https://demowebshop.tricentis.com/');
  22 | 
  23 |         await page.click('text=Log in');
  24 | 
  25 |         await page.fill('#Email', 'jenny@gmail.com');
  26 |         await page.fill('#Password', '123');
  27 | 
  28 |         await page.click('input[value="Log in"]');
  29 | 
  30 |         await expect(page.locator('.validation-summary-errors'))
  31 |             .toContainText('Login was unsuccessful');
  32 |     });
  33 | 
  34 | });
```