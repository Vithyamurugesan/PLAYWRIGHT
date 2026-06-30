import { test, expect } from "@playwright/test";

test("Uncheck Checkbox", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    const checkbox = page.locator("input[type='checkbox']").last();
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();

});