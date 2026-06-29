import {test,expect} from "@playwright/test";
test("Double click",async({page})=>{
    await page.goto("https://demoqa.com/buttons");
    await page.locator("#doubleClickBtn").dblclick();
});