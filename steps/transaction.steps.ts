import { Given, When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Transaction } from '../pages/transaction.page';
import { expect } from '@playwright/test';

Given("the user is on the homepage", async () => {
    await new Transaction(getPage()).userGotoHomepage()
});

When("the user signs in with valid credentials", async () => {
    await new Transaction(getPage()).userSignIn()
});

When("the user searches for a product", async () => {
    await new Transaction(getPage()).userSearchProduct()
});

When("the user selects a product from the search results", async () => {
    await new Transaction(getPage()).userSelectProduct()
});

When("the user adds the product to the cart", async () => {
    await new Transaction(getPage()).userAddtoCart();
});

When("the user navigates to the cart", async () => {
    await new Transaction(getPage()).userNavigatestoCart();
});

When("the user proceeds to checkout", async () => {
    await new Transaction(getPage()).userCheckout();
});

When("the user selects a shipping method", async () => {
    await new Transaction(getPage()).userSelectShippingMethod();
})

When("the user confirms the shipping method", async () => {
    await new Transaction(getPage()).userConfirmShippingMethod();
})

When("the user selects a payment method", async () => {
    await new Transaction(getPage()).userSelectPaymentMethod();
})

When("the user confirms the payment method", async () => {
    await new Transaction(getPage()).userConfirmPaymentMethod();
})

Then('the total amount should be less than 10,000,000', async () => {
    await new Transaction(getPage()).validationAmountTransaction();
})