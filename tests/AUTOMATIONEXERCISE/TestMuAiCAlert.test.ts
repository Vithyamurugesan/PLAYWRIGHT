import {test,expect,chromium} from "@playwright/test";

test("Confirm Alert",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/")

    page.on('dialog',async(alert)=>{
        const msg=alert.message();
        console.log(msg);
        await alert.dismiss();

    });
    await page.waitForTimeout(3000);
    await page.getByRole("button", { name: "Click Me" }).nth(1).click();
    await page.waitForTimeout(3000);
    expect(page.locator('#confirm-demo')).toHaveText("You pressed Cancel!");
   
});
