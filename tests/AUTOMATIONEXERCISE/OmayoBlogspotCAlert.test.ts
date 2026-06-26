import {test,expect,chromium} from "@playwright/test";

test("Confirmation Alert",async({page})=>{
    await page.goto("https://omayo.blogspot.com/")

    page.on('dialog',async(alert)=>{
        const msg=alert.message();
        console.log(msg);
        await alert.dismiss();

    });
    await page.locator("#confirm").click();
  
   
});