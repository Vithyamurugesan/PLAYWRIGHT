import {test,expect} from "@playwright/test";

test("Handle New Window",async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows");
    console.log("First windoe url:",page.url());

    //click new window button and wait for the new window 
    const [newWindow]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click(),
    ]);

    //wait for the new window to load
    await newWindow.waitForLoadState("domcontentloaded");
    //get the url
    console.log("New window url:",newWindow.url());
    //get the heading text

    const heading= await newWindow.locator("#sampleHeading").textContent();
    console.log("heading:",heading);

    await expect(newWindow.locator("#sampleHeading")).toHaveText("This is a sample page");
    await newWindow.close();
});
