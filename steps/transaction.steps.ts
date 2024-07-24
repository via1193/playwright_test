import { Given, When} from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Transaction } from '../pages/transaction.page';

Given("the user is on the homepage", async function () {
    await new Transaction(getPage()).userGotoHomepage()
});

When("the user signs in with valid credentials", async function () {
    await new Transaction(getPage()).userSignIn()
});

When("the user searches for a product", async () => {
    await new Transaction(getPage()).userSearchProduct()
})

When("the user selects a product from the search results", async () => {
    await new Transaction(getPage()).userSelectProduct()
})

