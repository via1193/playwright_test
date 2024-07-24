import { Page } from "@playwright/test"

export class Transaction {
    private readonly page: Page
    private readonly url: string = 'https://voila.id'

    constructor(page: Page) {
        this.page = page;
    }

    public async userGotoHomepage() {
        await this.page.goto(this.url);
    }

    public async userSignIn() {
        await this.page.locator('[data-test-id="CT-SignIn-Btn"]').click();
        await this.page.locator('[data-test-id="CT_component_login_input"]').click();
        await this.page.locator('[data-test-id="CT_component_login_input"]').fill("081295139590");
        await this.page.locator('[data-test-id="CT_component_login_submit"]').click();
        await this.page.locator('[data-test-id="CT_Component_VerificationMethodModal_UsePassword"]').click();
        await this.page.locator('[data-test-id="CT_component_password_input"]').click();
        await this.page.locator('[data-test-id="CT_component_password_input"]').fill("Testing12345");
        await this.page.locator('[data-test-id="CT_Component_SubmitLogin"]').click();
    }

    public async userSearchProduct() {
        await this.page.locator('[data-test-id="CT-Search"]').click();
        await this.page.locator('[data-test-id="CT-Search-Input"]').fill("shoe");
        await this.page.waitForResponse(response => response.request().resourceType() === 'xhr');
    }

    public async userSelectProduct() {
        await this.page.locator('[data-test-id="CT_component_product-item_default"]').nth(3).click();
        await this.page.pause()
    }
}