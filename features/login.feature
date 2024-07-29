@login-using-password
Feature: User Login

  Scenario: Successful login with valid credentials
    Given the user is on the Voila login page
    When the user enters and submit their phone number
    And the user enters and submit their password