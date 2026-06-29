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

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - link "Tricentis Demo Web Shop" [ref=e7] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=e8]
      - generic [ref=e9]:
        - list [ref=e11]:
          - listitem [ref=e12]:
            - link "Register" [ref=e13] [cursor=pointer]:
              - /url: /register
          - listitem [ref=e14]:
            - link "Log in" [ref=e15] [cursor=pointer]:
              - /url: /login
          - listitem [ref=e16]:
            - link "Shopping cart (0)" [ref=e17] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e18]:
            - link "Wishlist (0)" [ref=e19] [cursor=pointer]:
              - /url: /wishlist
        - generic [ref=e22]: You have no items in your shopping cart.
      - generic [ref=e24]:
        - textbox [ref=e25]: Search store
        - button "Search" [ref=e26]
    - generic [ref=e27]:
      - list [ref=e28]:
        - listitem [ref=e29]:
          - link "Books" [ref=e30] [cursor=pointer]:
            - /url: /books
        - listitem [ref=e31]:
          - link "Computers" [ref=e32] [cursor=pointer]:
            - /url: /computers
          - list [ref=e33]:
            - listitem [ref=e34]:
              - link "Desktops" [ref=e35] [cursor=pointer]:
                - /url: /desktops
            - listitem [ref=e36]:
              - link "Notebooks" [ref=e37] [cursor=pointer]:
                - /url: /notebooks
            - listitem [ref=e38]:
              - link "Accessories" [ref=e39] [cursor=pointer]:
                - /url: /accessories
        - listitem [ref=e40]:
          - link "Electronics" [ref=e41] [cursor=pointer]:
            - /url: /electronics
          - list [ref=e42]:
            - listitem [ref=e43]:
              - link "Camera, photo" [ref=e44] [cursor=pointer]:
                - /url: /camera-photo
            - listitem [ref=e45]:
              - link "Cell phones" [ref=e46] [cursor=pointer]:
                - /url: /cell-phones
        - listitem [ref=e47]:
          - link "Apparel & Shoes" [ref=e48] [cursor=pointer]:
            - /url: /apparel-shoes
        - listitem [ref=e49]:
          - link "Digital downloads" [ref=e50] [cursor=pointer]:
            - /url: /digital-downloads
        - listitem [ref=e51]:
          - link "Jewelry" [ref=e52] [cursor=pointer]:
            - /url: /jewelry
        - listitem [ref=e53]:
          - link "Gift Cards" [ref=e54] [cursor=pointer]:
            - /url: /gift-cards
      - link "Categories" [ref=e56] [cursor=pointer]:
        - /url: ""
        - text: Categories
      - list [ref=e57]:
        - listitem [ref=e58]:
          - link "Books" [ref=e59] [cursor=pointer]:
            - /url: /books
        - listitem [ref=e60]:
          - link "Computers" [ref=e61] [cursor=pointer]:
            - /url: /computers
          - list [ref=e62]:
            - listitem [ref=e63]:
              - link "Desktops" [ref=e64] [cursor=pointer]:
                - /url: /desktops
            - listitem [ref=e65]:
              - link "Notebooks" [ref=e66] [cursor=pointer]:
                - /url: /notebooks
            - listitem [ref=e67]:
              - link "Accessories" [ref=e68] [cursor=pointer]:
                - /url: /accessories
        - listitem [ref=e69]:
          - link "Electronics" [ref=e70] [cursor=pointer]:
            - /url: /electronics
          - list [ref=e71]:
            - listitem [ref=e72]:
              - link "Camera, photo" [ref=e73] [cursor=pointer]:
                - /url: /camera-photo
            - listitem [ref=e74]:
              - link "Cell phones" [ref=e75] [cursor=pointer]:
                - /url: /cell-phones
        - listitem [ref=e76]:
          - link "Apparel & Shoes" [ref=e77] [cursor=pointer]:
            - /url: /apparel-shoes
        - listitem [ref=e78]:
          - link "Digital downloads" [ref=e79] [cursor=pointer]:
            - /url: /digital-downloads
        - listitem [ref=e80]:
          - link "Jewelry" [ref=e81] [cursor=pointer]:
            - /url: /jewelry
        - listitem [ref=e82]:
          - link "Gift Cards" [ref=e83] [cursor=pointer]:
            - /url: /gift-cards
    - generic [ref=e84]:
      - generic [ref=e85]:
        - generic [ref=e86]:
          - strong [ref=e88]: Categories
          - list [ref=e90]:
            - listitem [ref=e91]:
              - link "Books" [ref=e92] [cursor=pointer]:
                - /url: /books
            - listitem [ref=e93]:
              - link "Computers" [ref=e94] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=e95]:
              - link "Electronics" [ref=e96] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=e97]:
              - link "Apparel & Shoes" [ref=e98] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=e99]:
              - link "Digital downloads" [ref=e100] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=e101]:
              - link "Jewelry" [ref=e102] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=e103]:
              - link "Gift Cards" [ref=e104] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=e105]:
          - strong [ref=e107]: Manufacturers
          - list [ref=e109]:
            - listitem [ref=e110]:
              - link "Tricentis" [ref=e111] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=e112]:
          - strong [ref=e114]: Popular tags
          - generic [ref=e115]:
            - list [ref=e117]:
              - listitem [ref=e118]:
                - link "apparel" [ref=e119] [cursor=pointer]:
                  - /url: /producttag/4/apparel
              - listitem [ref=e120]:
                - link "awesome" [ref=e121] [cursor=pointer]:
                  - /url: /producttag/8/awesome
              - listitem [ref=e122]:
                - link "book" [ref=e123] [cursor=pointer]:
                  - /url: /producttag/10/book
              - listitem [ref=e124]:
                - link "camera" [ref=e125] [cursor=pointer]:
                  - /url: /producttag/13/camera
              - listitem [ref=e126]:
                - link "cell" [ref=e127] [cursor=pointer]:
                  - /url: /producttag/12/cell
              - listitem [ref=e128]:
                - link "compact" [ref=e129] [cursor=pointer]:
                  - /url: /producttag/9/compact
              - listitem [ref=e130]:
                - link "computer" [ref=e131] [cursor=pointer]:
                  - /url: /producttag/6/computer
              - listitem [ref=e132]:
                - link "cool" [ref=e133] [cursor=pointer]:
                  - /url: /producttag/3/cool
              - listitem [ref=e134]:
                - link "digital" [ref=e135] [cursor=pointer]:
                  - /url: /producttag/16/digital
              - listitem [ref=e136]:
                - link "jeans" [ref=e137] [cursor=pointer]:
                  - /url: /producttag/14/jeans
              - listitem [ref=e138]:
                - link "jewelry" [ref=e139] [cursor=pointer]:
                  - /url: /producttag/11/jewelry
              - listitem [ref=e140]:
                - link "nice" [ref=e141] [cursor=pointer]:
                  - /url: /producttag/1/nice
              - listitem [ref=e142]:
                - link "shirt" [ref=e143] [cursor=pointer]:
                  - /url: /producttag/5/shirt
              - listitem [ref=e144]:
                - link "shoes" [ref=e145] [cursor=pointer]:
                  - /url: /producttag/7/shoes
              - listitem [ref=e146]:
                - link "TCP" [ref=e147] [cursor=pointer]:
                  - /url: /producttag/19/tcp
            - link "View all" [ref=e149] [cursor=pointer]:
              - /url: /producttag/all
      - generic [ref=e150]:
        - generic [ref=e151]:
          - strong [ref=e153]: Newsletter
          - generic [ref=e155]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=e157]
            - button "Subscribe" [ref=e159]
        - generic [ref=e160]:
          - strong [ref=e162]: Community poll
          - generic [ref=e164]:
            - strong [ref=e165]: Do you like nopCommerce?
            - list [ref=e166]:
              - listitem [ref=e167]:
                - radio "Excellent" [ref=e168]
                - text: Excellent
              - listitem [ref=e169]:
                - radio "Good" [ref=e170]
                - text: Good
              - listitem [ref=e171]:
                - radio "Poor" [ref=e172]
                - text: Poor
              - listitem [ref=e173]:
                - radio "Very bad" [ref=e174]
                - text: Very bad
            - button "Vote" [ref=e176]
      - generic [ref=e179]:
        - generic [ref=e181]:
          - link "Speed | Tricentis" [ref=e182] [cursor=pointer]:
            - /url: https://www.tricentis.com/speed/
            - img "Speed | Tricentis" [ref=e183]
          - link "Tricentis Academy" [ref=e184] [cursor=pointer]:
            - /url: https://academy.tricentis.com
            - img "Tricentis Academy" [ref=e185]
        - generic [ref=e186]:
          - heading "Welcome to our store" [level=2] [ref=e188]
          - generic [ref=e189]:
            - paragraph [ref=e190]: Welcome to the new Tricentis store!
            - paragraph [ref=e191]: Feel free to shop around and explore everything.
        - generic [ref=e192]:
          - strong [ref=e194]: Featured products
          - generic [ref=e196]:
            - link "Picture of $25 Virtual Gift Card" [ref=e198] [cursor=pointer]:
              - /url: /25-virtual-gift-card
              - img "Picture of $25 Virtual Gift Card" [ref=e199]
            - generic [ref=e200]:
              - heading "$25 Virtual Gift Card" [level=2] [ref=e201]:
                - link "$25 Virtual Gift Card" [ref=e202] [cursor=pointer]:
                  - /url: /25-virtual-gift-card
              - generic "911 review(s)"
              - generic [ref=e203]: $25 Gift Card. Gift Cards must be redeemed through our site Web site toward the purchase of eligible products.
              - generic [ref=e204]:
                - generic [ref=e205]: "25.00"
                - button "Add to cart" [ref=e207]
          - generic [ref=e209]:
            - link "Picture of 14.1-inch Laptop" [ref=e211] [cursor=pointer]:
              - /url: /141-inch-laptop
              - img "Picture of 14.1-inch Laptop" [ref=e212]
            - generic [ref=e213]:
              - heading "14.1-inch Laptop" [level=2] [ref=e214]:
                - link "14.1-inch Laptop" [ref=e215] [cursor=pointer]:
                  - /url: /141-inch-laptop
              - generic "1712 review(s)"
              - generic [ref=e216]: Unique Asian-influenced imprint wraps the laptop both inside and out
              - generic [ref=e217]:
                - generic [ref=e218]: "1590.00"
                - button "Add to cart" [ref=e220]
          - generic [ref=e222]:
            - link "Picture of Build your own cheap computer" [ref=e224] [cursor=pointer]:
              - /url: /build-your-cheap-own-computer
              - img "Picture of Build your own cheap computer" [ref=e225]
            - generic [ref=e226]:
              - heading "Build your own cheap computer" [level=2] [ref=e227]:
                - link "Build your own cheap computer" [ref=e228] [cursor=pointer]:
                  - /url: /build-your-cheap-own-computer
              - generic "924 review(s)"
              - generic [ref=e229]: Build it
              - generic [ref=e230]:
                - generic [ref=e231]: "800.00"
                - button "Add to cart" [ref=e233]
          - generic [ref=e235]:
            - link "Picture of Build your own computer" [ref=e237] [cursor=pointer]:
              - /url: /build-your-own-computer
              - img "Picture of Build your own computer" [ref=e238]
            - generic [ref=e239]:
              - heading "Build your own computer" [level=2] [ref=e240]:
                - link "Build your own computer" [ref=e241] [cursor=pointer]:
                  - /url: /build-your-own-computer
              - generic "431 review(s)"
              - generic [ref=e242]: Build it
              - generic [ref=e243]:
                - generic [ref=e244]: "1200.00"
                - button "Add to cart" [ref=e246]
          - generic [ref=e248]:
            - link "Picture of Build your own expensive computer" [ref=e250] [cursor=pointer]:
              - /url: /build-your-own-expensive-computer-2
              - img "Picture of Build your own expensive computer" [ref=e251]
            - generic [ref=e252]:
              - heading "Build your own expensive computer" [level=2] [ref=e253]:
                - link "Build your own expensive computer" [ref=e254] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
              - generic "440 review(s)"
              - generic [ref=e255]: Build it
              - generic [ref=e256]:
                - generic [ref=e257]: "1800.00"
                - button "Add to cart" [ref=e259]
          - generic [ref=e261]:
            - link "Picture of Simple Computer" [ref=e263] [cursor=pointer]:
              - /url: /simple-computer
              - img "Picture of Simple Computer" [ref=e264]
            - generic [ref=e265]:
              - heading "Simple Computer" [level=2] [ref=e266]:
                - link "Simple Computer" [ref=e267] [cursor=pointer]:
                  - /url: /simple-computer
              - generic "399 review(s)"
              - generic [ref=e268]: Build it
              - generic [ref=e269]:
                - generic [ref=e270]: "800.00"
                - button "Add to cart" [ref=e272]
  - generic [ref=e273]:
    - generic [ref=e274]:
      - generic [ref=e275]:
        - heading "Information" [level=3] [ref=e276]
        - list [ref=e277]:
          - listitem [ref=e278]:
            - link "Sitemap" [ref=e279] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e280]:
            - link "Shipping & Returns" [ref=e281] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e282]:
            - link "Privacy Notice" [ref=e283] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e284]:
            - link "Conditions of Use" [ref=e285] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e286]:
            - link "About us" [ref=e287] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e288]:
            - link "Contact us" [ref=e289] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e290]:
        - heading "Customer service" [level=3] [ref=e291]
        - list [ref=e292]:
          - listitem [ref=e293]:
            - link "Search" [ref=e294] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e295]:
            - link "News" [ref=e296] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e297]:
            - link "Blog" [ref=e298] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e299]:
            - link "Recently viewed products" [ref=e300] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e301]:
            - link "Compare products list" [ref=e302] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e303]:
            - link "New products" [ref=e304] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e305]:
        - heading "My account" [level=3] [ref=e306]
        - list [ref=e307]:
          - listitem [ref=e308]:
            - link "My account" [ref=e309] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e310]:
            - link "Orders" [ref=e311] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e312]:
            - link "Addresses" [ref=e313] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e314]:
            - link "Shopping cart" [ref=e315] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e316]:
            - link "Wishlist" [ref=e317] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e318]:
        - heading "Follow us" [level=3] [ref=e319]
        - list [ref=e320]:
          - listitem [ref=e321]:
            - link "Facebook" [ref=e322] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e323]:
            - link "Twitter" [ref=e324] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e325]:
            - link "RSS" [ref=e326] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e327]:
            - link "YouTube" [ref=e328] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e329]:
            - link "Google+" [ref=e330] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e331]:
      - text: Powered by
      - link "nopCommerce" [ref=e332] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e333]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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