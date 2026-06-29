# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TestGrouping.test.ts >> Demo Web Shop - Login Tests >> Valid Login
- Location: tests\TestGrouping.test.ts:5:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://demowebshop.tricentis.com/login"
Received: "https://demowebshop.tricentis.com/"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://demowebshop.tricentis.com/"

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "jenny04@gmail.com":
      - /url: /customer/info
  - listitem:
    - link "Log out":
      - /url: /logout
  - listitem:
    - link "Shopping cart (1)":
      - /url: /cart
  - listitem:
    - link "Wishlist (3)":
      - /url: /wishlist
- status
- textbox: Search store
- button "Search"
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Categories
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Manufacturers
- list:
  - listitem:
    - link "Tricentis":
      - /url: /tricentis
- strong: Popular tags
- list:
  - listitem:
    - link "apparel":
      - /url: /producttag/4/apparel
  - listitem:
    - link "awesome":
      - /url: /producttag/8/awesome
  - listitem:
    - link "book":
      - /url: /producttag/10/book
  - listitem:
    - link "camera":
      - /url: /producttag/13/camera
  - listitem:
    - link "cell":
      - /url: /producttag/12/cell
  - listitem:
    - link "compact":
      - /url: /producttag/9/compact
  - listitem:
    - link "computer":
      - /url: /producttag/6/computer
  - listitem:
    - link "cool":
      - /url: /producttag/3/cool
  - listitem:
    - link "digital":
      - /url: /producttag/16/digital
  - listitem:
    - link "jeans":
      - /url: /producttag/14/jeans
  - listitem:
    - link "jewelry":
      - /url: /producttag/11/jewelry
  - listitem:
    - link "nice":
      - /url: /producttag/1/nice
  - listitem:
    - link "shirt":
      - /url: /producttag/5/shirt
  - listitem:
    - link "shoes":
      - /url: /producttag/7/shoes
  - listitem:
    - link "TCP":
      - /url: /producttag/19/tcp
- link "View all":
  - /url: /producttag/all
- strong: Newsletter
- text: "Sign up for our newsletter:"
- textbox
- button "Subscribe"
- strong: Community poll
- strong: Do you like nopCommerce?
- list:
  - listitem: Excellent (6828 vote(s) - 50.6%)
  - listitem: Good (3463 vote(s) - 25.7%)
  - listitem: Poor (799 vote(s) - 5.9%)
  - listitem: Very bad (2392 vote(s) - 17.7%)
- text: 13482 vote(s)...
- link:
  - /url: https://www.tricentis.com/speed/
- link:
  - /url: https://academy.tricentis.com
- img
- text: Tricentis Academy Prev Next
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- img
- text: 1 2
- heading "Welcome to our store" [level=2]
- paragraph: Welcome to the new Tricentis store!
- paragraph: Feel free to shop around and explore everything.
- strong: Featured products
- link "Picture of $25 Virtual Gift Card":
  - /url: /25-virtual-gift-card
  - img "Picture of $25 Virtual Gift Card"
- heading "$25 Virtual Gift Card" [level=2]:
  - link "$25 Virtual Gift Card":
    - /url: /25-virtual-gift-card
- text: "25.00"
- button "Add to cart"
- link "Picture of 14.1-inch Laptop":
  - /url: /141-inch-laptop
  - img "Picture of 14.1-inch Laptop"
- heading "14.1-inch Laptop" [level=2]:
  - link "14.1-inch Laptop":
    - /url: /141-inch-laptop
- text: "1590.00"
- button "Add to cart"
- link "Picture of Build your own cheap computer":
  - /url: /build-your-cheap-own-computer
  - img "Picture of Build your own cheap computer"
- heading "Build your own cheap computer" [level=2]:
  - link "Build your own cheap computer":
    - /url: /build-your-cheap-own-computer
- text: "800.00"
- button "Add to cart"
- link "Picture of Build your own computer":
  - /url: /build-your-own-computer
  - img "Picture of Build your own computer"
- heading "Build your own computer" [level=2]:
  - link "Build your own computer":
    - /url: /build-your-own-computer
- text: "1200.00"
- button "Add to cart"
- link "Picture of Build your own expensive computer":
  - /url: /build-your-own-expensive-computer-2
  - img "Picture of Build your own expensive computer"
- heading "Build your own expensive computer" [level=2]:
  - link "Build your own expensive computer":
    - /url: /build-your-own-expensive-computer-2
- text: "1800.00"
- button "Add to cart"
- link "Picture of Simple Computer":
  - /url: /simple-computer
  - img "Picture of Simple Computer"
- heading "Simple Computer" [level=2]:
  - link "Simple Computer":
    - /url: /simple-computer
- text: "800.00"
- button "Add to cart"
- heading "Information" [level=3]
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & Returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy Notice":
      - /url: /privacy-policy
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- heading "Customer service" [level=3]
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- heading "My account" [level=3]
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /customer/orders
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
- heading "Follow us" [level=3]
- list:
  - listitem:
    - link "Facebook":
      - /url: http://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: http://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Google+":
      - /url: https://plus.google.com/+nopcommerce
- text: Powered by
- link "nopCommerce":
  - /url: http://www.nopcommerce.com/
- text: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Demo Web Shop - Login Tests', () => {
  4  | 
  5  |     test('Valid Login', async ({ page }) => {
  6  | 
  7  |         await page.goto('https://demowebshop.tricentis.com/');
  8  | 
  9  |         await page.click('text=Log in');
  10 | 
  11 |         await page.fill('#Email', 'jenny04@gmail.com');
  12 |         await page.fill('#Password', '123456');
  13 | 
  14 |         await page.click('input[value="Log in"]');
  15 | 
> 16 |         await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  17 |     });
  18 | 
  19 |     test('Invalid Login', async ({ page }) => {
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