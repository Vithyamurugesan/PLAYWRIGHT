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
    - navigated to "https://www.google.com/search?q=Selenium&sca_esv=2ab59e100257b972&source=hp&ei=pSBCaubdEP6wwcsP1M-JqQc&iflsig=ABILxe8AAAAAakIutfGRMla8zEgzXAD7isQbdp1b1AHL&ved=0ahUKEwimxIe1-KuVAxV-WHADHdRnInUQ4dUDCC4…"
    - waiting for" https://www.google.com/search?q=Selenium&sca_esv=2ab59e100257b972&source=hp&ei=pSBCaubdEP6wwcsP1M-JqQc&iflsig=ABILxe8AAAAAakIutfGRMla8zEgzXAD7isQbdp1b1AHL&ved=0ahUKEwimxIe1-KuVAxV-WHADHdRnInUQ4dUDCC4…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DSelenium%26sca_esv%3D2ab59e100257b972%26source%3Dhp%26ei%3DpSBCaubdEP6wwcsP1M-JqQc%26iflsig%3DABILxe8AAAAAakIutfGRMla8z…"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - separator [ref=e3]
  - iframe [ref=e8]:
    - generic [ref=f2e2]:
      - generic [ref=f2e3]:
        - checkbox "I'm not a robot" [ref=f2e7]
        - generic [ref=f2e11]: I'm not a robot
      - generic [ref=f2e15]: reCAPTCHA
  - separator [ref=e9]
  - generic [ref=e10]:
    - text: About this page
    - text: Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
    - link "Why did this happen?" [ref=e11] [cursor=pointer]:
      - /url: "#"
    - generic [ref=e12]:
      - text: "IP address: 49.206.117.252"
      - text: "Time: 2026-06-29T07:37:14Z"
      - text: "URL: https://www.google.com/search?q=Selenium&sca_esv=2ab59e100257b972&source=hp&ei=pSBCaubdEP6wwcsP1M-JqQc&iflsig=ABILxe8AAAAAakIutfGRMla8zEgzXAD7isQbdp1b1AHL&ved=0ahUKEwimxIe1-KuVAxV-WHADHdRnInUQ4dUDCC4&uact=5&oq=Selenium&gs_lp=Egdnd3Mtd2l6IghTZWxlbml1bUgNUABYAHAAeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgCgAgCYAwCSBwCgBwCyBwC4BwDCBwDIBwCACAE&sclient=gws-wiz&sei=qCBCatbVGrvAp84P6p66-QQ"
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