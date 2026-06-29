import {test,expect} from "@playwright/test";
test('Right Click',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/context_menu");
    page.on('dialog',async dialog=>{
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.locator("#hot-spot").click({button:'right'});
})