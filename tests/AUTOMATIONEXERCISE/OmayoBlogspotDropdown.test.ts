import {expect,test} from "@playwright/test";

test("Omayo Dropdown",async({page})=>{
     await page.goto("https://omayo.blogspot.com/");
     await page.selectOption("#drop1",{
        value:'abc'});      
     });

test("Omayo Dropdown using label",async({page})=>{
     await page.goto("https://omayo.blogspot.com/");
     await page.selectOption("#drop1",{
        label:'doc 1'});      
     });


test("Omayo Dropdown using index",async({page})=>{
     await page.goto("https://omayo.blogspot.com/");
     await page.selectOption("#drop1",{
        index:2});      
     });



test("Omayo Dropdown get the selected option",async({page})=>{
     await page.goto("https://omayo.blogspot.com/");
     await page.selectOption("#drop1",{
        index:2}); 
    const value=await page.locator('#drop1').inputValue();
    console.log(value);    
    
    });



test("Omayo Dropdown get the all dropdown options",async({page})=>{
     await page.goto("https://omayo.blogspot.com/");
     const options = await page.locator("#drop1 option").allTextContents();
     console.log(options);

     //count options
     const count = await page.locator("#drop1 option").count();
     console.log(count);


     //print
    
     for (const option of options) {
        console.log(option);
     }

    });


