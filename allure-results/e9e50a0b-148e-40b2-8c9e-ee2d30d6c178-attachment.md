# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AUTOMATIONEXERCISE\TestCase2.test.ts >> test
- Location: tests\AUTOMATIONEXERCISE\TestCase2.test.ts:3:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#header')
Timeout: 5000ms
- Expected substring  -  1
+ Received string     + 27

- Logout
+
+ 		
+ 			
+ 				
+ 					
+ 						
+ 							
+ 						
+ 					
+ 					
+ 						
+ 							
+ 								 Home
+ 								 Products
+ 								 Cart
+ 								 Signup / Login
+ 								 Test Cases
+ 								 API Testing
+ 								 Video Tutorials
+ 								 Contact us
+ 							
+ 						
+ 					
+ 				
+ 			
+ 		
+ 	

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#header')
    14 × locator resolved to <header id="header">…</header>
       - unexpected value "
		
			
				
					
						
							
						
					
					
						
							
								 Home
								 Products
								 Cart
								 Signup / Login
								 Test Cases
								 API Testing
								 Video Tutorials
								 Contact us
							
						
					
				
			
		
	"

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
```

# Test source

```ts
  1  | import { chromium, test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |     const browser = await chromium.launch({
  5  |         headless: false
  6  |     });
  7  |   await page.goto('https://automationexercise.com/');
  8  |   await expect(page.locator('#slider-carousel')).toContainText('AutomationExercise');
  9  |   await page.getByRole('link', { name: ' Signup / Login' }).click();
  10 |   await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  11 | 
  12 |  await page.locator('input[data-qa="login-email"]').fill('sowndariya23@gmail.com');
  13 |   await page.getByRole('textbox', { name: 'Password' }).click();
  14 |   await page.getByRole('textbox', { name: 'Password' }).fill('Sow@911!');
  15 |   await page.getByRole('button', { name: 'Login' }).click();
> 16 |   await expect(page.locator('#header')).toContainText('Logout');
     |                                         ^ Error: expect(locator).toContainText(expected) failed
  17 |   await expect(page.getByText('Logged in as')).toBeVisible({ timeout: 10000 });
  18 | 
  19 | 
  20 |   await page.getByRole('link', { name: ' Delete Account' }).click();
  21 |   await expect(page.locator('b')).toContainText('Account Deleted!');
  22 |   await page.getByRole('link', { name: 'Continue' }).click();
  23 |   await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
  24 | });
  25 | 
```