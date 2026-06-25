import {test,chromium} from"@playwright/test";

test("Navigation Commands", async () => {
    const browser = await chromium.launch({ headless: false });

    const page = await browser.newPage();

    await page.goto("https://www.google.com");
    await page.goto("https://www.demoblaze.com");

    await page.goBack();
    console.log(await page.title());

    await page.goForward();
    console.log(await page.title());

    await page.reload();
 

    await browser.close();
});