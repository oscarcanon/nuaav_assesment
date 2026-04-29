Feature: Login Page Module
  As a user
  I want to log in to the application
  So that I can access my account and features

  # POSITIVE SCENARIOS
  @smoke
  @positive
  Scenario: Successful login with valid credentials (standard_user)
    Given I am on the login page
    When I log with "standard_user" as user and "secret_sauce" as password
    Then I should be redirected to the inventory page
    And I should see a welcome message with standard_user
