import {test,expect,chromium} from "@playwright/test";

test("Prompt Alert",async({page})=>{
    await page.goto("https://omayo.blogspot.com/")

    page.on('dialog',async(alert)=>{
        const msg=alert.message();
        console.log(msg);
        await alert.accept("john");

    });
    await page.locator('#prompt').click();
   
  
   
});