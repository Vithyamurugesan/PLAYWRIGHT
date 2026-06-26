# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AUTOMATIONEXERCISE\TestMuAi.test.ts >> Demo test
- Location: tests\AUTOMATIONEXERCISE\TestMuAi.test.ts:3:1

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import {test,expect,chromium} from "@playwright/test";
  2  | 
  3  | test("Demo test",async({page})=>{
  4  |      await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
  5  | 
  6  |      const title=await page.title();
  7  |      console.log(title);
  8  |      const currenturl=await page.url();
  9  |      console.log(currenturl);
  10 | 
  11 |      const msg=await page.locator('input#user-message');
  12 |      console.log(await msg.getAttribute("placeholder"));
  13 |      await page.getByRole('textbox',{name:'Please enter your Message'}).fill('Vithya');
  14 |      await page.locator('#showInput').click();
  15 |      const aftermsg=await page.locator('#message').textContent();
  16 |      console.log(aftermsg);
> 17 |      page.waitForTimeout(5000);
     |           ^ Error: page.waitForTimeout: Test ended.
  18 |      await expect(page.locator('#message')).toHaveText('Vithya');
  19 |      
  20 | 
  21 | 
  22 | });
  23 | 
  24 | 
```