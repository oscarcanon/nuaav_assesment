// Generated from: tests\features\item.feature
import { test } from "../../../tests/fixtures/fixtures.ts";

test.describe('Item Page Module', () => {

  test('View item details', { tag: ['@smoke', '@positive'] }, async ({ Given, inventoryPage }) => { 
    await Given('I am on the inventory page', null, { inventoryPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\item.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":9,"tags":["@smoke","@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I am on the inventory page","stepMatchArguments":[]}]},
]; // bdd-data-end