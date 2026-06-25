import {chromium,test,expect} from "@playwright/test";

test("Resgister User",async()=>{
    const browser=await chromium.launch({
        headless:false
    });
    const context =await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://automationexercise.com/login");
    await page.getByPlaceholder('Name').fill('Vithyak');
    await page.locator('[data-qa="signup-email"]').fill('vithyakm09@gmail.com');
    await page.getByRole('button',{name:'Signup'}).click();
    

    await expect(page.getByText('Enter Account Information')).toBeVisible();
    await page.locator('#id_gender2').check();

    await page.locator('[data-qa="password"]').fill('12345678');
    await page.locator('#newsletter').check();
    await page.locator('#optin').check();

    await page.locator('#first_name').fill('vithyaK');
    await page.locator('[data-qa="last_name"]').fill('M');
    await page.locator('[data-qa="company"]').fill('xyz');
    await page.locator('[data-qa="address"]').fill('pnp');
    await page.locator('#country').selectOption('India');
    await page.locator('[data-qa="state"]').fill('tamilnadu');
    await page.locator('[data-qa="city"]').fill('salem');
    await page.locator('[data-qa="zipcode"]').fill('636109');
    await page.locator('[data-qa="mobile_number"]').fill('9876543219');

    await page.getByRole('button',{name:'Create Account'}).click();
    await expect(page.getByText('Account Created!')).toBeVisible();
}
)

