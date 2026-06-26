# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AUTOMATIONEXERCISE\TestMuAi2.test.ts >> Sum test
- Location: tests\AUTOMATIONEXERCISE\TestMuAi2.test.ts:3:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#addmessage')
Expected: "20"
Received: "Entered value is not a number"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#addmessage')
    13 × locator resolved to <p class="mt-20" id="addmessage">Entered value is not a number</p>
       - unexpected value "Entered value is not a number"

```

```yaml
- paragraph: Entered value is not a number
```

# Test source

```ts
  1  | import {test,expect,chromium} from "@playwright/test";
  2  | 
  3  | test("Sum test",async({page})=>{
  4  |       await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
  5  |       await page.locator("#sum1").fill("10");
  6  |       await page.locator("#sum2").fill("20");
  7  | 
  8  |       const sum1Value = await page.locator("#sum1").inputValue();
  9  |       console.log(sum1Value);
  10 | 
  11 |       const sum2Value = await page.locator("#sum2").inputValue();
  12 |       console.log(sum2Value);
  13 |       const expected=Number(sum1Value)+Number(sum2Value);
  14 | 
  15 |       const button = page.getByRole("button", { name: "Get Sum" });
  16 |       await button.click();
  17 |       page.waitForTimeout(5000);
> 18 |       await expect(page.locator("#addmessage")).toHaveText(expected.toString());
     |                                                 ^ Error: expect(locator).toHaveText(expected) failed
  19 |       const res = await page.locator("#addmessage").textContent();
  20 |       console.log("Result:", res);
  21 |       
  22 | 
  23 | 
  24 | })
```