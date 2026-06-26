import {test,expect,chromium} from "@playwright/test";

test("Simplesample Alert",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/")

    page.on('dialog',async(alert)=>{
        const msg=alert.message();
        console.log(msg);
        await alert.accept();

    });
    await page.waitForTimeout(3000);
    await page.getByRole("button", { name: "Click Me" }).nth(0).click();
  
   
});
