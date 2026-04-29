// Generated from: tests\features\inventory.feature
import { test } from "../../../tests/fixtures/fixtures.ts";

test.describe('Inventory Page Module', () => {

  test('View inventory items', { tag: ['@smoke', '@positive'] }, async ({ Given, When, Then, inventoryPage }) => { 
    await Given('I am on the inventory page', null, { inventoryPage }); 
    await When('I view the inventory', null, { inventoryPage }); 
    await Then('I should see a list of available products', null, { inventoryPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\inventory.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":9,"tags":["@smoke","@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I am on the inventory page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I view the inventory","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see a list of available products","stepMatchArguments":[]}]},
]; // bdd-data-end