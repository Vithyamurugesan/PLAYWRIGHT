import { test, expect } from '@playwright/test';

test('Checkbox Practice', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const checkbox = page.locator("input[type='checkbox']").first();
    await checkbox.check();
    await expect(checkbox).toBeChecked();

});