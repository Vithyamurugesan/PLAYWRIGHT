import {test,expect,chromium} from "@playwright/test";

test("Frames",async({page})=>{
    await page.goto("https://letcode.in/frame");
    const allframes=page.frames();
    console.log("No of frames:"+allframes.length);
    const myFrame=page.frame('firstFr');
    await myFrame?.fill("input[name='fname']","john");
    await myFrame?.fill("input[name='lname']","jeck");

    await page.waitForTimeout(3000);
    const frame=page.frameLocator('iframe[name="firstFr"]');
    await expect(frame.locator("p.text-sm.font-semibold.text-center")).toContainText('john');
})
