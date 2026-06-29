import {test} from "@playwright/test";
test('Drag To',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    await page.locator("#column-a").dragTo(page.locator("#column-b"));

})


test('Drag and Drop', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    await page.dragAndDrop('#column-a', '#column-b');

});