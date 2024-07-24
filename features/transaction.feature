@checkout-va-payment
Feature: Checkout using Virtual Account (VA) payment method

  Scenario: User checks out with VA payment method
    Given the user is on the homepage
    When the user signs in with valid credentials
    And the user searches for a product
    And the user selects a product from the search results
    And the user adds the product to the cart
    And the user navigates to the cart
    And the user proceeds to checkout
    And the user selects a shipping method
    And the user confirms the shipping method
    And the user selects a payment method
    And the user confirms the payment method
    Then the total amount should be less than 10,000,000
