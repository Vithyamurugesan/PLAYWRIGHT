import {test,expect} from "@playwright/test";

test("Iterate windows",async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows")

    //open new tab
    const [tab]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click(),
    ]);

    //wait for the new tab to load
    await tab.waitForLoadState();

    //open new window
    const [window]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click(),
    ]);

    await tab.waitForLoadState();

    const pages=context.pages();

    console.log("number of pages:",pages.length);

    for (const p of pages){
        console.log("-------------");
        console.log("URL:",p.url());
        console.log("title:",await p.title());
    }
});

test("Iterate window attribute",async({page,context})=>{
     await page.goto("https://demoqa.com/browser-windows");
     const [tab]=await Promise.all([context.waitForEvent("page"),
        page.locator("#tabButton").click()]);
        
        await tab.waitForLoadState();
       
       
       
        const [window]=await Promise.all([
            context.waitForEvent("page"),
            page.locator("#windowButton").click()
        ]);
        await window.waitForLoadState();

        //Get all pages
        const pages=context.pages();
        console.log("Total Pages opened:",pages.length);

        for(const p of pages){
            console.log("URL:",p.url());
            if(p.url().includes("sample")){
                const text=await p.locator("#sampleHeading").textContent();
                console.log("Sample Page Heading:",text);
            }
        }
});







   

