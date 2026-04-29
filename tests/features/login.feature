Feature: Login Page Module
  As a user
  I want to log in to the application
  So that I can access my account and features

  # POSITIVE SCENARIOS
  @smoke
  @positive
  @login
  Scenario: Successful login with valid credentials (standard_user)
    Given I am loged on the page
    Then I should be redirected to the inventory page
    And I should see a welcome message with standard_user

  # NEGATIVE SCENARIOS
  @negative
  @login
  @validation
  Scenario: Login with empty username and password
    Given I am on the login page
    When I click the login button without entering credentials
    Then I should see an error message "Username is required"

  @negative
  @login
  @validation
  Scenario: Login with empty username
    Given I am on the login page
    When I enter password "secret_sauce"
    And I click the login button
    Then I should see an error message "Username is required"

  @negative
  @login
  @validation
  Scenario: Login with empty password
    Given I am on the login page
    When I enter username "standard_user"
    And I click the login button
    Then I should see an error message "Password is required"

  @negative
  @login
  @authentication
  Scenario: Login with invalid credentials
    Given I am on the login page
    When I log with "invalid_user" as user and "wrong_password" as password
    Then I should see an error message "Username and password do not match any user in this service"

  @negative
  @login
  @authentication
  Scenario: Login with non-existent user
    Given I am on the login page
    When I log with "ghost_user" as user and "secret_sauce" as password
    Then I should see an error message "Username and password do not match any user in this service"

  @negative
  @login
  @authentication
  Scenario: Login with correct username and incorrect password
    Given I am on the login page
    When I log with "standard_user" as user and "wrong_password" as password
    Then I should see an error message "Username and password do not match any user in this service"

  @negative
  @login
  @account
  Scenario: Login with locked user account
    Given I am on the login page
    When I log with "locked_out_user" as user and "secret_sauce" as password
    Then I should see an error message "Sorry, this user has been locked out."

  @negative
  @login
  @validation
  Scenario: Login with whitespace-only username
    Given I am on the login page
    When I enter username "   " with no spaces trimmed
    And I enter password "secret_sauce"
    And I click the login button
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"

  @negative
  @login
  @validation
  Scenario: Login with whitespace-only password
    Given I am on the login page
    When I enter username "standard_user"
    And I enter password "   " with no spaces trimmed
    And I click the login button
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"

  @negative
  @login
  @security
  Scenario: Login with SQL injection in username field
    Given I am on the login page
    When I log with "' OR '1'='1" as user and "secret_sauce" as password
    Then I should see an error message "Username and password do not match any user in this service"

  @negative
  @login
  @security
  Scenario: Login with special characters in credentials
    Given I am on the login page
    When I log with "standard_user<script>" as user and "secret_sauce" as password
    Then I should see an error message "Username and password do not match any user in this service"

  @negative
  @login
  @validation
  Scenario: Login with extremely long username
    Given I am on the login page
    When I enter a username with 1000 characters
    And I enter password "secret_sauce"
    And I click the login button
    Then I should see an error message "Username and password do not match any user in this service"

  @negative
  @login
  @validation
  Scenario: Login with extremely long password
    Given I am on the login page
    When I enter username "standard_user"
    And I enter a password with 1000 characters
    And I click the login button
    Then I should see an error message "Username and password do not match any user in this service"


