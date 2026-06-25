import {chromium,test,expect} from "@playwright/test";

test("Resgister User",async()=>{
    const browser=await chromium.launch({
        headless:false
    });
    const context =await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://automationexercise.com/login");
    await page.getByPlaceholder('Name').fill('Vithyak');
    await page.locator('[data-qa="signup-email"]').fill('vithyak143@gmail.com');
    await page.getByRole('button',{name:'Signup'}).click();

    await expect(page.getByText('Enter Account Information')).toBeVisible();

    






}
)
