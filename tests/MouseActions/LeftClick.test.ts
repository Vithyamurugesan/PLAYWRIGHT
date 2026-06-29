import {test,expect} from "@playwright/test";
test("Left click",async({page})=>{
    await page.goto("https://www.leafground.com/button.xhtml");
    await page.getByRole('button', { name: 'Click' }).click();

})