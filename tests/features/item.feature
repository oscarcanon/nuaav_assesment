Feature: Item Page Module
  As a user
  I want to view the details for an item
  So that I can select and purchase the product

  # POSITIVE SCENARIOS
  @smoke
  @positive
  @item-details
  Scenario: View item details successfully
    Given I am on the item page
    Then I should see the item title
    And I should see the item description
    And I should see the item price
    And the add to cart button should be visible

  @positive
  @item-image
  @ui
  Scenario: Item image displays correctly
    Given I am on the item page
    Then the item image should be visible
    And the item image should have a valid source
    And the item image should have proper dimensions

  @positive
  @item-button
  @interaction
  Scenario: Add to cart button is functional
    Given I am on the item page
    When I click the add to cart button
    Then the add to cart button text should change to "Remove from cart"
    And the item should be added to the shopping cart

  @positive
  @item-navigation
  Scenario: Navigate to item details from inventory
    Given I am on the inventory page
    When I click on the first item image
    Then I should be navigated to the item details page
    And the item title should match the selected product

  @positive
  @price-display
  @validation
  Scenario: Item price is displayed correctly
    Given I am on the item page
    Then the item price should be visible
    And the item price should contain a valid currency symbol
    And the item price should be a valid number

  # NEGATIVE SCENARIOS
  @negative
  @item-image
  @validation
  Scenario: Item image fails to load
    Given I am on the item page
    When the item image source is broken
    Then an image placeholder should be displayed
    And the broken image indicator should appear

  @negative
  @item-button
  @validation
  Scenario: Add to cart button is disabled
    Given I am on the item page with stock unavailable
    Then the add to cart button should be disabled
    And the add to cart button should display "Out of Stock"

  @negative
  @item-details
  @validation
  Scenario: Item title is missing
    Given I am on the item page with missing title
    Then an error message should be displayed
    And the page should indicate incomplete item information

  @negative
  @item-image
  @validation
  Scenario: Item image is missing or null
    Given I am on the item page with missing image
    Then no item image should be visible
    And a default placeholder image should appear

  @negative
  @item-price
  @validation
  Scenario: Item price is missing
    Given I am on the item page with missing price
    Then the price field should be empty or show "N/A"

  @negative
  @item-description
  @validation
  Scenario: Item description is missing
    Given I am on the item page with missing description
    Then the description field should be empty or show "No description available"

  # EDGE CASE SCENARIOS
  @edge-case
  @item-image
  @performance
  Scenario: Item image loads slowly
    Given I am on the item page with slow network conditions
    Then the item image should eventually load
    And a loading indicator should be displayed while loading
    And the page should remain functional during image load

  @edge-case
  @item-button
  @interaction
  Scenario: Multiple rapid clicks on add to cart button
    Given I am on the item page
    When I click the add to cart button multiple times rapidly
    Then the item should be added to cart only once
    And the button state should remain consistent

  @edge-case
  @item-navigation
  Scenario: Navigate back to inventory from item details
    Given I am viewing an item details page
    When I click the back button or navigate to inventory
    Then I should be redirected to the inventory page
    And the previously added items should still be in the cart

  @edge-case
  @item-image
  @accessibility
  Scenario: Item image has proper alt text for accessibility
    Given I am on the item page
    Then the item image should have descriptive alt text
    And the alt text should match the item name

  @edge-case
  @item-button
  @ui
  Scenario: Add to cart button styling and visibility
    Given I am on the item page
    Then the add to cart button should be prominently displayed
    And the add to cart button should have clear visual styling
    And the button should be easily clickable with proper size