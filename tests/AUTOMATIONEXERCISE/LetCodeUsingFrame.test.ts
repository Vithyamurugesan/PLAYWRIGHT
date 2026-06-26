import {test,expect,chromium,Frame} from "@playwright/test";

test("Using frame.locator",async({page})=>{
    const frame = page.frameLocator("iframe[src='/frame']");
    await page.goto("https://letcode.in/frame");
    const allframes=page.frames();
    console.log("No of frames:"+allframes.length);

    await frame.locator("input[name='fname']").fill("john");
    await frame.locator("input[name='lname']").fill("jeck");
    const text = await frame.locator("#result").textContent();

    expect(text).toContain("You have entered");
    expect(text).toContain("john");
    expect(text).toContain("jeck");

    await page.waitForTimeout(3000);
    const innerFrame=frame.frameLocator("iframe[src='/innerframe']");
    await innerFrame.locator("input[name='email']").fill("john@gmail.com");

});