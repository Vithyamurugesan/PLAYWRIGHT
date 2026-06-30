import { test, expect } from "@playwright/test";

test("Radio Button - check()", async ({ page }) => {

    await page.goto("https://demoqa.com/radio-button");
    const yesRadio = page.locator("label[for='yesRadio']");
    await yesRadio.click();
    await expect(page.locator("#yesRadio")).toBeChecked();

});