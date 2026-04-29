// Generated from: tests\features\login.feature
import { test } from "../../../tests/fixtures/fixtures.ts";

test.describe('Login Page Module', () => {

  test('Successful login with valid credentials (standard_user)', { tag: ['@smoke', '@positive'] }, async ({ Given, When, Then, And, loginPage }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I log with "standard_user" as user and "secret_sauce" as password', null, { loginPage }); 
    await Then('I should be redirected to the inventory page', null, { loginPage }); 
    await And('I should see a welcome message with standard_user', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":9,"tags":["@smoke","@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I log with \"standard_user\" as user and \"secret_sauce\" as password","stepMatchArguments":[{"group":{"start":11,"value":"\"standard_user\"","children":[{"start":12,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"secret_sauce\"","children":[{"start":40,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the inventory page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And I should see a welcome message with standard_user","stepMatchArguments":[]}]},
]; // bdd-data-end