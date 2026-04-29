// Generated from: tests\features\inventory.feature
import { test } from "../../../tests/fixtures/fixtures.ts";

test.describe('Inventory Page Module', () => {

  test('View inventory items', { tag: ['@smoke', '@positive'] }, async ({ Given, When, inventoryPage, loginPage }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I log with "standard_user" as user and "secret_sauce" as password', null, { loginPage }); 
    await Given('I am on the inventory page', null, { inventoryPage }); 
    await When('I view the inventory', null, { inventoryPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\inventory.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":9,"tags":["@smoke","@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I log with \"standard_user\" as user and \"secret_sauce\" as password","stepMatchArguments":[{"group":{"start":11,"value":"\"standard_user\"","children":[{"start":12,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"secret_sauce\"","children":[{"start":40,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am on the inventory page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I view the inventory","stepMatchArguments":[]}]},
]; // bdd-data-end