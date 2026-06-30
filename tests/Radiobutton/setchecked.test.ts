import { test, expect } from "@playwright/test";

test("Radio Button - setChecked(true)", async ({ page }) => {

    await page.goto("https://demoqa.com/radio-button");
    const radio = page.locator("#yesRadio");
    await radio.setChecked(true);
    await expect(radio).toBeChecked();

});