import { Given, When, Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Login } from "../pages/login.page";

Given("the user is on the Voila login page", async () => {
  await new Login(getPage()).userGoToLoginPage();
});

When("the user enters and submit their phone number", async () => {
  await new Login(getPage()).userSubmitPhone();
});

When("the user enters and submit their password", async () => {
  await new Login(getPage()).userSubmitPassword();
});
