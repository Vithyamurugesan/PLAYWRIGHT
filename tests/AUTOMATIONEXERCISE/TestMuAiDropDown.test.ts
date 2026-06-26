import {test,expect,chromium} from "@playwright/test";

test("DropDown Test",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    await page.selectOption("#select-demo",{
        //label:'Monday'
        value:"Tuesday"
        //index:7
    });
    await page.waitForTimeout(5000);
    await page.selectOption("#multi-select",[
        {label:'Texas'},
        {index:2},
        {value:"Washinton"},
    ]);

});
