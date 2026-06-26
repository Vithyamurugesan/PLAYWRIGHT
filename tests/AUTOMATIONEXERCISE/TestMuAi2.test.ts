import {test,expect,chromium} from "@playwright/test";

test("Sum test",async({page})=>{
      await page.waitForTimeout(5000);
      await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/",{'waitUntil':'networkidle'});
      await page.locator("#sum1").fill("10");
      await page.locator("#sum2").fill("20");

      const sum1Value = await page.locator("#sum1").inputValue();
      console.log(sum1Value);

      const sum2Value = await page.locator("#sum2").inputValue();
      console.log(sum2Value);
      const expected='30';

      const button = page.getByRole("button", { name: "Get Sum" });
      await button.click();
  
      
      const res = await page.locator("#addmessage").textContent();
      console.log("Result:", res);
      await expect(page.locator("#addmessage")).toHaveText("30");
      


});