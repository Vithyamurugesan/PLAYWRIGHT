# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkbox\check.test.ts >> Checkbox Practice
- Location: tests\Checkbox\check.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://the-internet.herokuapp.com/checkboxes", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Checkbox Practice', async ({ page }) => {
  4  | 
> 5  |     await page.goto('https://the-internet.herokuapp.com/checkboxes');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  6  |     const checkbox = page.locator("input[type='checkbox']").first();
  7  |     await checkbox.check();
  8  |     await expect(checkbox).toBeChecked();
  9  | 
  10 | });
```