# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Parameterize.test.ts >> Google Search Parameterized Test >> Search Flow - Selenium
- Location: tests\Parameterize.test.ts:13:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('h3').first()
    - waiting for navigation to finish...
    - navigated to "https://www.google.com/search?q=Selenium&sca_esv=2ab59e100257b972&source=hp&ei=yiBCatXSHM2zvr0P7pm3oQ0&iflsig=ABILxe8AAAAAakIu2qI7ZhZO6X7MoDWupcwp89Qu77MC&ved=0ahUKEwjV3-XG-KuVAxXNma8BHe7MLdQQ4dUDCCA…"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - separator [ref=e3]
    - iframe [ref=e8]:
      - generic [ref=f2e2]:
        - generic [ref=f2e3]:
          - checkbox "I'm not a robot" [ref=f2e7]
          - generic [ref=f2e10]: I'm not a robot
        - generic [ref=f2e14]: reCAPTCHA
    - separator [ref=e9]
    - generic [ref=e10]:
      - text: About this page
      - text: Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
      - link "Why did this happen?" [ref=e11] [cursor=pointer]:
        - /url: "#"
      - generic [ref=e12]:
        - text: "IP address: 49.206.117.252"
        - text: "Time: 2026-06-29T07:37:57Z"
        - text: "URL: https://www.google.com/search?q=Selenium&sca_esv=2ab59e100257b972&source=hp&ei=yiBCatXSHM2zvr0P7pm3oQ0&iflsig=ABILxe8AAAAAakIu2qI7ZhZO6X7MoDWupcwp89Qu77MC&ved=0ahUKEwjV3-XG-KuVAxXNma8BHe7MLdQQ4dUDCCA&uact=5&oq=Selenium&gs_lp=Egdnd3Mtd2l6IghTZWxlbml1bUgKUABYAHAAeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgCgAgCYAwCSBwCgBwCyBwC4BwDCBwDIBwCACAE&sclient=gws-wiz&sei=1CBCat-ODb_Dp84PlKnV2AU"
  - iframe [active] [ref=e16]:
    - dialog [ref=f5e3]:
      - generic [ref=f5e4]:
        - generic [ref=f5e7]:
          - text: Select all images with a
          - strong [ref=f5e8]: bus
        - table [ref=f5e11]:
          - rowgroup [ref=f5e12]:
            - row [ref=f5e13]:
              - button [ref=f5e14]
              - button [active] [ref=f5e18]
              - button [ref=f5e22]
            - row [ref=f5e25]:
              - button [ref=f5e26]
              - button [ref=f5e29]
              - button [ref=f5e32]
            - row [ref=f5e35]:
              - button [ref=f5e36]
              - button [ref=f5e39]
              - button [ref=f5e42]
      - generic [ref=f5e48]:
        - generic [ref=f5e49]:
          - button "Get a new challenge" [ref=f5e51] [cursor=pointer]
          - button "Get an audio challenge" [ref=f5e53] [cursor=pointer]
          - button "Help" [ref=f5e55] [cursor=pointer]
        - button "Verify" [ref=f5e57] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | const searchData = [
  4  |     { keyword: "Playwright", expectedTitle: "Playwright" },
  5  |     { keyword: "Selenium", expectedTitle: "Selenium" },
  6  |     { keyword: "Cypress", expectedTitle: "Cypress" }
  7  | ];
  8  | 
  9  | test.describe("Google Search Parameterized Test", () => {
  10 | 
  11 |     for (const data of searchData) {
  12 | 
  13 |         test(`Search Flow - ${data.keyword}`, async ({ page }) => {
  14 | 
  15 |             await page.goto("https://www.google.com");
  16 | 
  17 |             await page.locator('textarea[name="q"]').fill(data.keyword);
  18 |             await page.keyboard.press("Enter");
  19 | 
  20 |             const firstResult = page.locator("h3").first();
> 21 |             await firstResult.click();
     |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  22 | 
  23 |             await expect(page).toHaveTitle(
  24 |                 new RegExp(data.expectedTitle, "i")
  25 |             );
  26 |         });
  27 | 
  28 |     }
  29 | 
  30 | });
```