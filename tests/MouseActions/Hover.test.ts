import {test,expect} from "@playwright/test";

test("Mouse Hover",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/hovers");
    const image = page.locator(".figure").first();
    await image.hover();
    await expect(page.locator("text=name: user1")).toBeVisible();

});
