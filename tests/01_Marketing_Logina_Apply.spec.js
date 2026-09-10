const { test, expect } = require("@playwright/test");


test("Login apply", async ({ page }) => {
  await page.goto("https://www.hays.com.au/jobs");
  await page.getByRole("button", { name: "Agree and Proceed" }).click();
  await page.getByRole("link", { name: "Sign In" }).click();
  await page.getByRole("textbox", { name: "email address" }).click();
  await page
    .getByRole("textbox", { name: "email address" })
    .fill("Testalamelu30@yopmail.com");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("Password@123");
  await page.getByRole("button", { name: "Sign In" }).click({ timeout: 60000 });
  await page.waitForTimeout(5000);
  await page.getByRole("textbox", { name: "search_placeholder" }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole("textbox", { name: "search_placeholder" }).click();
  await page
    .getByRole("textbox", { name: "search_placeholder" })
    .fill("Test job please do not apply");
  await page.getByRole("button", { name: " Search Jobs" }).click();
  await page
    .getByRole("listitem")
    .filter({ hasText: "Test job please do not" })
    .locator("#gtm_job_card_google_view")
    .click();

  const applyButton = page.getByRole("button", { name: /apply now/i }).first();
  await applyButton.waitFor({ state: "visible", timeout: 60000 });
  await applyButton.click();

  const selectButton = page.getByRole("button", { name: /select/i }).first();
  await selectButton.waitFor({ state: "visible", timeout: 60000 });
  await selectButton.click();

  await page.getByRole("button", { name: /apply now/i }).click();
  await page.waitForTimeout(15000);
});

