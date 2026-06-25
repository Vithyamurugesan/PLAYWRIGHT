import {chromium,test} from "@playwright/test";

test("Browser cmds test",async()=>{
    const browser =await chromium.launch({
        headless:false
    });
    const context =await browser.newContext();
    const page =await context.newPage();

    await page.goto("https://www.demoblaze.com/");

    const title=await page.title();
    console.log("Page tiltle is: ",title)

    const currenturl=page.url();
    console.log("The current url is:",currenturl);

    //const html=await page.content();
    //console.log("HTML CONTENT:",html)

    await page.close();

    await browser.close();


})