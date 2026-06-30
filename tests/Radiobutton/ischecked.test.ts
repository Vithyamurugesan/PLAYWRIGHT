import { test, expect } from "@playwright/test";

test("Radio Button - isChecked()", async ({ page }) => {

    await page.goto("https://demoqa.com/radio-button");
    await page.locator("label[for='yesRadio']").click();
    const status = await page.locator("#yesRadio").isChecked();
    console.log(status);
    await expect(status).toBe(true);

});