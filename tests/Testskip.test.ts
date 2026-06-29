import {test,expect,} from "@playwright/test";

test.only("login test",async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.click("#login2");
    await page.fill("#loginusername","admin");
    await page.fill("#loginpassword","admin");
    await page.click("//button[text()='Log in']");

    await expect.soft(page.getByRole("link",{name:"Log out"})).toBeVisible();
    await expect.soft(page.getByRole("link",{name:"Log out"})).toHaveText("Log out");
    const welcometext=await page.locator("#nameofuser").textContent();
    expect(welcometext).toBe("Welcome admin");

});


test.skip("login test skip",async({page})=>{
    test.skip(true,"Module under development");

    await page.goto("https://www.demoblaze.com/");
    await page.click("#login2");
    await page.fill("#loginusername","admin");
    await page.fill("#loginpassword","admin");
    await page.click("//button[text()='Log in']");

    await expect.soft(page.getByRole("link",{name:"Log out"})).toBeVisible();
    await expect.soft(page.getByRole("link",{name:"Log out"})).toHaveText("Log out");
    const welcometext=await page.locator("#nameofuser").textContent();
    expect(welcometext).toBe("Welcome admin");

});