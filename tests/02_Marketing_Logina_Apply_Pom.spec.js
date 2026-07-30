const { test, expect } = require("@playwright/test");
const HaysJobsPage = require("../pages/haysJobsPage");

test("Login apply", async ({ page }) => {
  const haysPage = new HaysJobsPage(page);

  await haysPage.gotoJobsPage();
  await haysPage.acceptCookies();
  await haysPage.signIn("Testalamelu30@yopmail.com", "Password@123");
  await haysPage.searchJob("Test job please do not apply");
  await haysPage.openJobResult();
  await haysPage.applyForJob();

  await expect(page.getByText(/application/i)).toBeVisible({ timeout: 60000 });
});

