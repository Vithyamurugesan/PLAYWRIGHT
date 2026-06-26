import {test,expect,chromium} from "@playwright/test";

test("Prom Alert",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/")

    page.on('dialog',async(alert)=>{
        const msg=alert.message();
        console.log(msg);
        await alert.accept("john");

    });
    await page.waitForTimeout(3000);
    await page.getByRole("button", { name: "Click Me" }).nth(2).click();
    await page.waitForTimeout(3000);
    await expect(page.locator('#prompt-demo')).toContainText("'john'");
});
