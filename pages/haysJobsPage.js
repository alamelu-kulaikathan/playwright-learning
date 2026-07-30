class HaysJobsPage {
  constructor(page) {
    this.page = page;
  }

  async gotoJobsPage() {
    await this.page.goto("https://www.hays.com.au/jobs");
  }

  async acceptCookies() {
    await this.page.getByRole("button", { name: "Agree and Proceed" }).click();
  }

  async signIn(email, password) {
    await this.page.getByRole("link", { name: "Sign In" }).click();
    await this.page.getByRole("textbox", { name: "email address" }).click();
    await this.page.getByRole("textbox", { name: "email address" }).fill(email);
    await this.page.getByRole("textbox", { name: "Password" }).click();
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
    await this.page.getByRole("button", { name: "Sign In" }).click({ timeout: 60000 });
    await this.page.getByRole("textbox", { name: "search_placeholder" }).waitFor({ state: "visible", timeout: 60000 });
  }

  async searchJob(jobTitle) {
    await this.page.getByRole("textbox", { name: "search_placeholder" }).click();
    await this.page.getByRole("textbox", { name: "search_placeholder" }).fill(jobTitle);
    await this.page.getByRole("button", { name: " Search Jobs" }).click();
  }

  async openJobResult() {
    await this.page
      .getByRole("listitem")
      .filter({ hasText: "Test job please do not" })
      .locator("#gtm_job_card_google_view")
      .click();
  }

  async applyForJob() {
    const applyButton = this.page.getByRole("button", { name: /apply now/i }).first();
    await applyButton.waitFor({ state: "visible", timeout: 60000 });
    await applyButton.click();

    const selectButton = this.page.getByRole("button", { name: /select/i }).first();
    await selectButton.waitFor({ state: "visible", timeout: 60000 });
    await selectButton.click();

    const finalApplyButton = this.page.getByRole("button", { name: /apply now/i }).first();
    await finalApplyButton.waitFor({ state: "visible", timeout: 60000 });
    await finalApplyButton.click();
  }
}

module.exports = HaysJobsPage;
