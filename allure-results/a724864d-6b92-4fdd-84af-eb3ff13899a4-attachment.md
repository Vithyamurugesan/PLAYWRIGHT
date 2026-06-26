# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AUTOMATIONEXERCISE\LetCodeFrames.test.ts >> Frames
- Location: tests\AUTOMATIONEXERCISE\LetCodeFrames.test.ts:3:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('iframe[name="firstFr"]').contentFrame().locator('p.text-sm.font-semibold.text-center')
Expected substring: "john"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('iframe[name="firstFr"]').contentFrame().locator('p.text-sm.font-semibold.text-center')

```

```yaml
- heading "Enter Details" [level=1]
- text: First Name
- textbox "Enter name": jeck
- text: Last Name
- textbox "Enter email"
- iframe
- insertion:
  - iframe
```

# Test source

```ts
  1  | import {test,expect,chromium} from "@playwright/test";
  2  | 
  3  | test("Frames",async({page})=>{
  4  |     await page.goto("https://letcode.in/frame");
  5  |     const allframes=page.frames();
  6  |     console.log("No of frames:"+allframes.length);
  7  |     const myFrame=page.frame('firstFr');
  8  |     await myFrame?.fill("input[name='fname']","john");
  9  |     await myFrame?.fill("input[name='fname']","jeck");
  10 | 
  11 |     await page.waitForTimeout(3000);
  12 |     const frame=page.frameLocator('iframe[name="firstFr"]');
> 13 |     await expect(frame.locator("p.text-sm.font-semibold.text-center")).toContainText('john');
     |                                                                        ^ Error: expect(locator).toContainText(expected) failed
  14 | 
  15 | 
  16 | 
  17 | })
```