import { test, expect } from "@playwright/test";

test("Using frameLocator", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/iframe");

    const frame = page.frameLocator("#mce_0_ifr");
    await expect(frame.locator("#tinymce")).toBeVisible();
    const text = await frame.locator("#tinymce").textContent();
    console.log("Editor Text:", text);

});




test("Using frame", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/iframe");
    await page.waitForSelector("#mce_0_ifr");
    const allFrames = page.frames();
    const frame = allFrames[1];
    await expect(frame.locator("#tinymce")).toBeVisible();
    const text = await frame.locator("#tinymce").textContent();
    console.log("Editor Text:", text);

});




test("Using frames", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/iframe");
    const frames = page.frames();
    console.log("Total Frames:", frames.length);
    for (const frame of frames) {
        console.log("Frame URL:", frame.url());
    }
    const editorFrame = frames[1];
    await expect(editorFrame.locator("#tinymce")).toBeVisible();
    const text = await editorFrame.locator("#tinymce").textContent();
    console.log("Editor Text:", text);

});
