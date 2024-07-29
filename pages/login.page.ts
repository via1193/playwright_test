import { expect, Page } from "@playwright/test";

export class Login {
  private readonly page: Page;
  private readonly url: string = "https://voila.id/account/login";

  constructor(page: Page) {
    this.page = page;
  }

  public async userGoToLoginPage() {
    await this.page.goto(this.url);
  }

  public async userSubmitPhone() {
    await this.page
      .locator('[data-test-id="CT_component_login_input"]')
      .click();
    await this.page
      .locator('[data-test-id="CT_component_login_input"]')
      .fill("081295139590");
    await this.page
      .locator('[data-test-id="CT_component_login_submit"]')
      .click();
  }

  public async userSubmitPassword() {
    await this.page
      .locator(
        '[data-test-id="CT_Component_VerificationMethodModal_UsePassword"]'
      )
      .click();
    await this.page
      .locator('[data-test-id="CT_component_password_input"]')
      .click();
    await this.page
      .locator('[data-test-id="CT_component_password_input"]')
      .fill("Testing12345");
    await this.page
      .locator('[data-test-id="CT_Component_SubmitLogin"]')
      .click();
  }
}
