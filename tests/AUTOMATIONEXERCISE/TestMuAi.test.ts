import {test,expect,chromium} from "@playwright/test";

test("Demo test",async({page})=>{
     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");

     const title=await page.title();
     console.log(title);
     const currenturl=await page.url();
     console.log(currenturl);

     const msg=await page.locator('input#user-message');
     console.log(await msg.getAttribute("placeholder"));
     await page.getByRole('textbox',{name:'Please enter your Message'}).fill('Vithya');
     await page.locator('#showInput').click();
     const aftermsg=await page.locator('#message').textContent();
     console.log(aftermsg);
     page.waitForTimeout(5000);
     await expect(page.locator('#message')).toHaveText('Vithya');
     


});

