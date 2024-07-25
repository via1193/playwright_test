import { expect, Page } from "@playwright/test";

export class Transaction {
  private readonly page: Page;
  private readonly url: string = "https://voila.id";

  constructor(page: Page) {
    this.page = page;
  }

  public async userGotoHomepage() {
    await this.page.goto(this.url);
  }

  public async userSignIn() {
    await this.page.locator('[data-test-id="CT-SignIn-Btn"]').click();
    await this.page
      .locator('[data-test-id="CT_component_login_input"]')
      .click();
    await this.page
      .locator('[data-test-id="CT_component_login_input"]')
      .fill("081295139590");
    await this.page
      .locator('[data-test-id="CT_component_login_submit"]')
      .click();
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

  public async userSearchProduct() {
    await this.page.locator('[data-test-id="CT-Search"]').click();
    await this.page.locator('[data-test-id="CT-Search-Input"]').fill("shoe");
  }

  public async userSelectProduct() {
    await this.page.waitForSelector(
      '[data-test-id="CT_component_product-item_default"]'
    );
    await this.page.waitForTimeout(3000);
    await this.page
      .locator('[data-test-id="CT_component_product-item_default"]')
      .nth(3)
      .click(); // Greggo Derby Shoes Brown
  }

  public async userAddtoCart() {
    await this.page.locator('[data-test-id="CT-add-to-bag-desktop"]').click();
    await this.page.waitForTimeout(3000);
  }

  public async userNavigatestoCart() {
    await this.page.locator('[data-test-id="CT-Go-To-Cart"]').click();
  }

  public async userCheckout() {
    await this.page
      .locator('[data-test-id="CT_Component_btnCheckout"]')
      .click();
  }

  public async userSelectShippingMethod() {
    await this.page.waitForTimeout(3000);
    await this.page
      .locator('[data-test-id="CT_Component_ShippingSelector_ButtonShipping"]')
      .click();
    // await this.page.locator('[data-test-id="CT_Component_NavigationSection"]').click();
    await this.page.waitForSelector(
      '[data-test-id="CT_component_shipping-item-item"]',
      { timeout: 15000 }
    );
    await this.page
      .locator('[data-test-id="CT_component_shipping-item-item"]')
      .nth(1)
      .click(); // JNE REG
  }

  public async userConfirmShippingMethod() {
    await this.page.locator('button:has-text("Confirm")').click();
  }

  public async userSelectPaymentMethod() {
    await this.page.waitForTimeout(3000);
    await this.page
      .locator('[data-test-id="CT_Component_SelectorPayment_ButtonPayment"]')
      .nth(1)
      .click(); // payment-list
      await this.page.locator('[data-test-id="CT_Component_PaymentGroup_ButtonPaymentGroup"]').nth(0).click(); // Virtual Account Faster
      await this.page.locator('[data-test-id="CT_Component_SelectorPayment_ButtonSelectBank_VABCA"]').click();
  }

  public async userConfirmPaymentMethod() {
    await this.page.locator('[data-test-id="CT_Component_PaymentListFooter_ButtonConfirm"]').click();
  }

  public async validationAmountTransaction() {
    const totalAmountLocator = await this.page.locator('p._15kd2we68._17zx15tgg._17zx15t9s._17zx15te8'); // Amount element

    await totalAmountLocator.waitFor({ state: 'visible' });
  
    const textContent = await totalAmountLocator.textContent();
    console.log('Text Content:', textContent);
  
    if (textContent === null || textContent === undefined) {
      throw new Error('Failed to retrieve text content');
    }
  
    const numericString = textContent.replace(/[^\d]/g, '');
  
    // return parseFloat(numericString) || 0;
    const numericValue = parseFloat(numericString) || 0;
    expect(numericValue).toBeLessThan(10000000);
  }  
}