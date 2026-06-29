import {test} from "@playwright/test";

test("key type",async({page})=>{
    await page.goto("https://demoqa.com/text-box");
    await page.locator("#userName").click();
    await page.keyboard.type("john");
})