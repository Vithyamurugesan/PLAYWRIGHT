import {test} from "@playwright/test";
test("Shift key used for up and down",async({page})=>{
    await page.goto("https://demoqa.com/text-box");
    await page.locator('#userName').click();
    await page.keyboard.down('Shift');
    await page.keyboard.type('playwright');
    await page.keyboard.up('Shift');

});