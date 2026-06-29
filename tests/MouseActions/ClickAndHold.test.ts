// playwright doesnt have the ClickAndHole() method and 
import {test} from '@playwright/test';
test('Click and hold',async({page})=>{
    await page.goto('https://www.leafground.com/drag.xhtml');
    const element = page.locator("#form\\:drag");
    await element.hover();
    await page.mouse.down();
    await page.waitForTimeout(3000);
    await page.mouse.up();
});
