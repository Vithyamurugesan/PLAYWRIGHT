import { test, expect } from "@playwright/test";

test("Single Window", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Windows.html");

    const [newPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("text=click")
    ]);

    await newPage.waitForLoadState();

    console.log(await newPage.title());

    await expect(newPage).toHaveTitle(/Selenium/);

});