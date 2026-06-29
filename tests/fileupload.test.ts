import {test} from "@playwright/test";
test("File upload",async({page})=>{
    await page.goto('https://demoqa.com/upload-download');
    await page.locator('#uploadFile').setInputFiles('E:/PLAYWRIGHT/sample.txt');
    console.log("file uploaded successfully")
})