Feature: Inventory Page Module
  As a user
  I want to view the inventory items
  So that I can select and purchase products

  # POSITIVE SCENARIOS
  @smoke
  @positive
  Scenario: View inventory items
    Given I am on the inventory page
    When I view the inventory
    Then I should see a list of available products
