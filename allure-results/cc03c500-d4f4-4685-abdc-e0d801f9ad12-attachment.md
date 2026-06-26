# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AUTOMATIONEXERCISE\TestMuAi2.test.ts >> Sum test
- Location: tests\AUTOMATIONEXERCISE\TestMuAi2.test.ts:3:1

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('sum2')

```

# Test source

```ts
  1  | import {test,expect,chromium} from "@playwright/test";
  2  | 
  3  | test("Sum test",async({page})=>{
  4  |       await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
  5  |       
  6  | 
  7  |       const sum1=await page.locator('#sum1');
  8  |       await page.locator('#sum1').fill('10');
  9  |       console.log(sum1.inputValue());
  10 | 
> 11 |       await page.locator('sum2').fill('20');
     |                                  ^ Error: locator.fill: Target page, context or browser has been closed
  12 |       await page.getByRole('button',{name:'Get Sum'}).click();
  13 |       const box=await page.getByRole('button',{name:'Get Sum'}).boundingBox();
  14 |       console.log(box);
  15 | 
  16 |       const res=await page.locator('.mt-20').textContent()
  17 |       console.log(res);
  18 | 
  19 |       
  20 | 
  21 | 
  22 | 
  23 | })
```