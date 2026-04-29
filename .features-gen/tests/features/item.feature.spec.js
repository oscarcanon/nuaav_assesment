// Generated from: tests\features\item.feature
import { test } from "../../../tests/fixtures/fixtures.ts";

test.describe('Item Page Module', () => {

  test('View item details successfully', { tag: ['@smoke', '@positive', '@item-details'] }, async ({ Given, Then, And, itemPage, page }) => { 
    await Given('I am on the item page', null, { itemPage, page }); 
    await Then('I should see the item title', null, { itemPage }); 
    await And('I should see the item description', null, { itemPage }); 
    await And('I should see the item price', null, { itemPage }); 
    await And('the add to cart button should be visible', null, { itemPage }); 
  });

  test('Item image displays correctly', { tag: ['@positive', '@item-image', '@ui'] }, async ({ Given, Then, And, itemPage, page }) => { 
    await Given('I am on the item page', null, { itemPage, page }); 
    await Then('the item image should be visible', null, { page }); 
    await And('the item image should have a valid source', null, { page }); 
    await And('the item image should have proper dimensions', null, { page }); 
  });

  test('Add to cart button is functional', { tag: ['@positive', '@item-button', '@interaction'] }, async ({ Given, When, Then, And, itemPage, page }) => { 
    await Given('I am on the item page', null, { itemPage, page }); 
    await When('I click the add to cart button', null, { itemPage }); 
    await Then('the add to cart button text should change to "Remove from cart"', null, { itemPage }); 
    await And('the item should be added to the shopping cart', null, { page }); 
  });

  test('Navigate to item details from inventory', { tag: ['@positive', '@item-navigation'] }, async ({ Given, When, Then, And, inventoryPage, itemPage, page }) => { 
    await Given('I am on the inventory page', null, { inventoryPage }); 
    await When('I click on the first item image', null, { inventoryPage }); 
    await Then('I should be navigated to the item details page', null, { page }); 
    await And('the item title should match the selected product', null, { itemPage }); 
  });

  test('Item price is displayed correctly', { tag: ['@positive', '@price-display', '@validation'] }, async ({ Given, Then, And, itemPage, page }) => { 
    await Given('I am on the item page', null, { itemPage, page }); 
    await Then('the item price should be visible', null, { itemPage }); 
    await And('the item price should contain a valid currency symbol', null, { itemPage }); 
    await And('the item price should be a valid number', null, { itemPage }); 
  });

  test('Item image fails to load', { tag: ['@negative', '@item-image', '@validation'] }, async ({ Given, When, Then, And, itemPage, page }) => { 
    await Given('I am on the item page', null, { itemPage, page }); 
    await When('the item image source is broken', null, { page }); 
    await Then('an image placeholder should be displayed', null, { page }); 
    await And('the broken image indicator should appear', null, { page }); 
  });

  test('Add to cart button is disabled', { tag: ['@negative', '@item-button', '@validation'] }, async ({ Given, Then, And, itemPage, page }) => { 
    await Given('I am on the item page with stock unavailable', null, { itemPage, page }); 
    await Then('the add to cart button should be disabled', null, { itemPage }); 
    await And('the add to cart button should display "Out of Stock"', null, { itemPage }); 
  });

  test('Item title is missing', { tag: ['@negative', '@item-details', '@validation'] }, async ({ Given, Then, And, itemPage, page }) => { 
    await Given('I am on the item page with missing title', null, { itemPage, page }); 
    await Then('an error message should be displayed', null, { page }); 
    await And('the page should indicate incomplete item information', null, { page }); 
  });

  test('Item image is missing or null', { tag: ['@negative', '@item-image', '@validation'] }, async ({ Given, Then, And, itemPage, page }) => { 
    await Given('I am on the item page with missing image', null, { itemPage, page }); 
    await Then('no item image should be visible', null, { page }); 
    await And('a default placeholder image should appear', null, { page }); 
  });

  test('Item price is missing', { tag: ['@negative', '@item-price', '@validation'] }, async ({ Given, Then, itemPage, page }) => { 
    await Given('I am on the item page with missing price', null, { itemPage, page }); 
    await Then('the price field should be empty or show "N/A"', null, { itemPage }); 
  });

  test('Item description is missing', { tag: ['@negative', '@item-description', '@validation'] }, async ({ Given, Then, itemPage, page }) => { 
    await Given('I am on the item page with missing description', null, { itemPage, page }); 
    await Then('the description field should be empty or show "No description available"', null, { itemPage }); 
  });

  test('Item image loads slowly', { tag: ['@edge-case', '@item-image', '@performance'] }, async ({ Given, Then, And, itemPage, page }) => { 
    await Given('I am on the item page with slow network conditions', null, { itemPage, page }); 
    await Then('the item image should eventually load', null, { page }); 
    await And('a loading indicator should be displayed while loading', null, { page }); 
    await And('the page should remain functional during image load', null, { itemPage }); 
  });

  test('Multiple rapid clicks on add to cart button', { tag: ['@edge-case', '@item-button', '@interaction'] }, async ({ Given, When, Then, And, itemPage, page }) => { 
    await Given('I am on the item page', null, { itemPage, page }); 
    await When('I click the add to cart button multiple times rapidly', null, { itemPage }); 
    await Then('the item should be added to cart only once', null, { page }); 
    await And('the button state should remain consistent', null, { itemPage }); 
  });

  test('Navigate back to inventory from item details', { tag: ['@edge-case', '@item-navigation'] }, async ({ Given, When, Then, And, itemPage, loginPage, page }) => { 
    await Given('I am viewing an item details page', null, { itemPage, page }); 
    await When('I click the back button or navigate to inventory', null, { page }); 
    await Then('I should be redirected to the inventory page', null, { loginPage }); 
    await And('the previously added items should still be in the cart', null, { page }); 
  });

  test('Item image has proper alt text for accessibility', { tag: ['@edge-case', '@item-image', '@accessibility'] }, async ({ Given, Then, And, itemPage, page }) => { 
    await Given('I am on the item page', null, { itemPage, page }); 
    await Then('the item image should have descriptive alt text', null, { page }); 
    await And('the alt text should match the item name', null, { itemPage, page }); 
  });

  test('Add to cart button styling and visibility', { tag: ['@edge-case', '@item-button', '@ui'] }, async ({ Given, Then, And, itemPage, page }) => { 
    await Given('I am on the item page', null, { itemPage, page }); 
    await Then('the add to cart button should be prominently displayed', null, { itemPage }); 
    await And('the add to cart button should have clear visual styling', null, { itemPage }); 
    await And('the button should be easily clickable with proper size', null, { itemPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\item.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":10,"tags":["@smoke","@positive","@item-details"],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I am on the item page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see the item title","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And I should see the item description","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And I should see the item price","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the add to cart button should be visible","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":20,"tags":["@positive","@item-image","@ui"],"steps":[{"pwStepLine":15,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given I am on the item page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the item image should be visible","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"And the item image should have a valid source","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"And the item image should have proper dimensions","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":29,"tags":["@positive","@item-button","@interaction"],"steps":[{"pwStepLine":22,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given I am on the item page","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When I click the add to cart button","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then the add to cart button text should change to \"Remove from cart\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Remove from cart\"","children":[{"start":46,"value":"Remove from cart","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"And the item should be added to the shopping cart","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":37,"tags":["@positive","@item-navigation"],"steps":[{"pwStepLine":29,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given I am on the inventory page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When I click on the first item image","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then I should be navigated to the item details page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"And the item title should match the selected product","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":46,"tags":["@positive","@price-display","@validation"],"steps":[{"pwStepLine":36,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given I am on the item page","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then the item price should be visible","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"And the item price should contain a valid currency symbol","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"And the item price should be a valid number","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":56,"tags":["@negative","@item-image","@validation"],"steps":[{"pwStepLine":43,"gherkinStepLine":57,"keywordType":"Context","textWithKeyword":"Given I am on the item page","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When the item image source is broken","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then an image placeholder should be displayed","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"And the broken image indicator should appear","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":65,"tags":["@negative","@item-button","@validation"],"steps":[{"pwStepLine":50,"gherkinStepLine":66,"keywordType":"Context","textWithKeyword":"Given I am on the item page with stock unavailable","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then the add to cart button should be disabled","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":68,"keywordType":"Outcome","textWithKeyword":"And the add to cart button should display \"Out of Stock\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Out of Stock\"","children":[{"start":39,"value":"Out of Stock","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":55,"pickleLine":73,"tags":["@negative","@item-details","@validation"],"steps":[{"pwStepLine":56,"gherkinStepLine":74,"keywordType":"Context","textWithKeyword":"Given I am on the item page with missing title","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":75,"keywordType":"Outcome","textWithKeyword":"Then an error message should be displayed","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"And the page should indicate incomplete item information","stepMatchArguments":[]}]},
  {"pwTestLine":61,"pickleLine":81,"tags":["@negative","@item-image","@validation"],"steps":[{"pwStepLine":62,"gherkinStepLine":82,"keywordType":"Context","textWithKeyword":"Given I am on the item page with missing image","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then no item image should be visible","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":84,"keywordType":"Outcome","textWithKeyword":"And a default placeholder image should appear","stepMatchArguments":[]}]},
  {"pwTestLine":67,"pickleLine":89,"tags":["@negative","@item-price","@validation"],"steps":[{"pwStepLine":68,"gherkinStepLine":90,"keywordType":"Context","textWithKeyword":"Given I am on the item page with missing price","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":91,"keywordType":"Outcome","textWithKeyword":"Then the price field should be empty or show \"N/A\"","stepMatchArguments":[{"group":{"start":40,"value":"\"N/A\"","children":[{"start":41,"value":"N/A","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":72,"pickleLine":96,"tags":["@negative","@item-description","@validation"],"steps":[{"pwStepLine":73,"gherkinStepLine":97,"keywordType":"Context","textWithKeyword":"Given I am on the item page with missing description","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":98,"keywordType":"Outcome","textWithKeyword":"Then the description field should be empty or show \"No description available\"","stepMatchArguments":[{"group":{"start":46,"value":"\"No description available\"","children":[{"start":47,"value":"No description available","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":77,"pickleLine":104,"tags":["@edge-case","@item-image","@performance"],"steps":[{"pwStepLine":78,"gherkinStepLine":105,"keywordType":"Context","textWithKeyword":"Given I am on the item page with slow network conditions","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":106,"keywordType":"Outcome","textWithKeyword":"Then the item image should eventually load","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"And a loading indicator should be displayed while loading","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":108,"keywordType":"Outcome","textWithKeyword":"And the page should remain functional during image load","stepMatchArguments":[]}]},
  {"pwTestLine":84,"pickleLine":113,"tags":["@edge-case","@item-button","@interaction"],"steps":[{"pwStepLine":85,"gherkinStepLine":114,"keywordType":"Context","textWithKeyword":"Given I am on the item page","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":115,"keywordType":"Action","textWithKeyword":"When I click the add to cart button multiple times rapidly","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":116,"keywordType":"Outcome","textWithKeyword":"Then the item should be added to cart only once","stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":117,"keywordType":"Outcome","textWithKeyword":"And the button state should remain consistent","stepMatchArguments":[]}]},
  {"pwTestLine":91,"pickleLine":121,"tags":["@edge-case","@item-navigation"],"steps":[{"pwStepLine":92,"gherkinStepLine":122,"keywordType":"Context","textWithKeyword":"Given I am viewing an item details page","stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":123,"keywordType":"Action","textWithKeyword":"When I click the back button or navigate to inventory","stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":124,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the inventory page","stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":125,"keywordType":"Outcome","textWithKeyword":"And the previously added items should still be in the cart","stepMatchArguments":[]}]},
  {"pwTestLine":98,"pickleLine":130,"tags":["@edge-case","@item-image","@accessibility"],"steps":[{"pwStepLine":99,"gherkinStepLine":131,"keywordType":"Context","textWithKeyword":"Given I am on the item page","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":132,"keywordType":"Outcome","textWithKeyword":"Then the item image should have descriptive alt text","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":133,"keywordType":"Outcome","textWithKeyword":"And the alt text should match the item name","stepMatchArguments":[]}]},
  {"pwTestLine":104,"pickleLine":138,"tags":["@edge-case","@item-button","@ui"],"steps":[{"pwStepLine":105,"gherkinStepLine":139,"keywordType":"Context","textWithKeyword":"Given I am on the item page","stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":140,"keywordType":"Outcome","textWithKeyword":"Then the add to cart button should be prominently displayed","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":141,"keywordType":"Outcome","textWithKeyword":"And the add to cart button should have clear visual styling","stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":142,"keywordType":"Outcome","textWithKeyword":"And the button should be easily clickable with proper size","stepMatchArguments":[]}]},
]; // bdd-data-end