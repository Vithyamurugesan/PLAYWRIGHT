import {test,expect,chromium} from "@playwright/test";

test("Simple Alert",async({page})=>{
    await page.goto("https://omayo.blogspot.com/")

    page.on('dialog',async(alert)=>{
        const msg=alert.message();
        console.log(msg);
        await alert.accept();

    });
    await page.locator("#alert1").click();
  
   
});
