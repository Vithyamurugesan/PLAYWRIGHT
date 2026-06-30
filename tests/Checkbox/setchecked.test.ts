import { test, expect } from "@playwright/test";

test("setChecked(true)", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    const checkbox = page.locator("input[type='checkbox']").first();
    await checkbox.setChecked(true);
    await expect(checkbox).toBeChecked();

});