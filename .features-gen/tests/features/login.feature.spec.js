// Generated from: tests\features\login.feature
import { test } from "../../../tests/fixtures/fixtures.ts";

test.describe('Login Page Module', () => {

  test('Successful login with valid credentials (standard_user)', { tag: ['@smoke', '@positive', '@login'] }, async ({ Given, Then, And, loginPage }) => { 
    await Given('I am loged on the page', null, { loginPage }); 
    await Then('I should be redirected to the inventory page', null, { loginPage }); 
    await And('I should see a welcome message with standard_user', null, { loginPage }); 
  });

  test('Login with empty username and password', { tag: ['@negative', '@login', '@validation'] }, async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I click the login button without entering credentials', null, { loginPage }); 
    await Then('I should see an error message "Username is required"', null, { page }); 
  });

  test('Login with empty username', { tag: ['@negative', '@login', '@validation'] }, async ({ Given, When, Then, And, loginPage, page }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I enter password "secret_sauce"', null, { loginPage }); 
    await And('I click the login button', null, { loginPage }); 
    await Then('I should see an error message "Username is required"', null, { page }); 
  });

  test('Login with empty password', { tag: ['@negative', '@login', '@validation'] }, async ({ Given, When, Then, And, loginPage, page }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I enter username "standard_user"', null, { loginPage }); 
    await And('I click the login button', null, { loginPage }); 
    await Then('I should see an error message "Password is required"', null, { page }); 
  });

  test('Login with invalid credentials', { tag: ['@negative', '@login', '@authentication'] }, async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I log with "invalid_user" as user and "wrong_password" as password', null, { loginPage }); 
    await Then('I should see an error message "Username and password do not match any user in this service"', null, { page }); 
  });

  test('Login with non-existent user', { tag: ['@negative', '@login', '@authentication'] }, async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I log with "ghost_user" as user and "secret_sauce" as password', null, { loginPage }); 
    await Then('I should see an error message "Username and password do not match any user in this service"', null, { page }); 
  });

  test('Login with correct username and incorrect password', { tag: ['@negative', '@login', '@authentication'] }, async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I log with "standard_user" as user and "wrong_password" as password', null, { loginPage }); 
    await Then('I should see an error message "Username and password do not match any user in this service"', null, { page }); 
  });

  test('Login with locked user account', { tag: ['@negative', '@login', '@account'] }, async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I log with "locked_out_user" as user and "secret_sauce" as password', null, { loginPage }); 
    await Then('I should see an error message "Sorry, this user has been locked out."', null, { page }); 
  });

  test('Login with whitespace-only username', { tag: ['@negative', '@login', '@validation'] }, async ({ Given, When, Then, And, loginPage, page }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I enter username "   " with no spaces trimmed', null, { loginPage }); 
    await And('I enter password "secret_sauce"', null, { loginPage }); 
    await And('I click the login button', null, { loginPage }); 
    await Then('I should see an error message "Epic sadface: Username and password do not match any user in this service"', null, { page }); 
  });

  test('Login with whitespace-only password', { tag: ['@negative', '@login', '@validation'] }, async ({ Given, When, Then, And, loginPage, page }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I enter username "standard_user"', null, { loginPage }); 
    await And('I enter password "   " with no spaces trimmed', null, { loginPage }); 
    await And('I click the login button', null, { loginPage }); 
    await Then('I should see an error message "Epic sadface: Username and password do not match any user in this service"', null, { page }); 
  });

  test('Login with SQL injection in username field', { tag: ['@negative', '@login', '@security'] }, async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I log with "\' OR \'1\'=\'1" as user and "secret_sauce" as password', null, { loginPage }); 
    await Then('I should see an error message "Username and password do not match any user in this service"', null, { page }); 
  });

  test('Login with special characters in credentials', { tag: ['@negative', '@login', '@security'] }, async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I log with "standard_user<script>" as user and "secret_sauce" as password', null, { loginPage }); 
    await Then('I should see an error message "Username and password do not match any user in this service"', null, { page }); 
  });

  test('Login with extremely long username', { tag: ['@negative', '@login', '@validation'] }, async ({ Given, When, Then, And, loginPage, page }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I enter a username with 1000 characters', null, { loginPage }); 
    await And('I enter password "secret_sauce"', null, { loginPage }); 
    await And('I click the login button', null, { loginPage }); 
    await Then('I should see an error message "Username and password do not match any user in this service"', null, { page }); 
  });

  test('Login with extremely long password', { tag: ['@negative', '@login', '@validation'] }, async ({ Given, When, Then, And, loginPage, page }) => { 
    await Given('I am on the login page', null, { loginPage }); 
    await When('I enter username "standard_user"', null, { loginPage }); 
    await And('I enter a password with 1000 characters', null, { loginPage }); 
    await And('I click the login button', null, { loginPage }); 
    await Then('I should see an error message "Username and password do not match any user in this service"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":10,"tags":["@smoke","@positive","@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given I am loged on the page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the inventory page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And I should see a welcome message with standard_user","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":19,"tags":["@negative","@login","@validation"],"steps":[{"pwStepLine":13,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I click the login button without entering credentials","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Username is required\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Username is required\"","children":[{"start":31,"value":"Username is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":27,"tags":["@negative","@login","@validation"],"steps":[{"pwStepLine":19,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When I enter password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":17,"value":"\"secret_sauce\"","children":[{"start":18,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Username is required\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Username is required\"","children":[{"start":31,"value":"Username is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":36,"tags":["@negative","@login","@validation"],"steps":[{"pwStepLine":26,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When I enter username \"standard_user\"","stepMatchArguments":[{"group":{"start":17,"value":"\"standard_user\"","children":[{"start":18,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Password is required\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Password is required\"","children":[{"start":31,"value":"Password is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":45,"tags":["@negative","@login","@authentication"],"steps":[{"pwStepLine":33,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When I log with \"invalid_user\" as user and \"wrong_password\" as password","stepMatchArguments":[{"group":{"start":11,"value":"\"invalid_user\"","children":[{"start":12,"value":"invalid_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":38,"value":"\"wrong_password\"","children":[{"start":39,"value":"wrong_password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Username and password do not match any user in this service\"","children":[{"start":31,"value":"Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":38,"pickleLine":53,"tags":["@negative","@login","@authentication"],"steps":[{"pwStepLine":39,"gherkinStepLine":54,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When I log with \"ghost_user\" as user and \"secret_sauce\" as password","stepMatchArguments":[{"group":{"start":11,"value":"\"ghost_user\"","children":[{"start":12,"value":"ghost_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"secret_sauce\"","children":[{"start":37,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Username and password do not match any user in this service\"","children":[{"start":31,"value":"Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":44,"pickleLine":61,"tags":["@negative","@login","@authentication"],"steps":[{"pwStepLine":45,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When I log with \"standard_user\" as user and \"wrong_password\" as password","stepMatchArguments":[{"group":{"start":11,"value":"\"standard_user\"","children":[{"start":12,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"wrong_password\"","children":[{"start":40,"value":"wrong_password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Username and password do not match any user in this service\"","children":[{"start":31,"value":"Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":50,"pickleLine":69,"tags":["@negative","@login","@account"],"steps":[{"pwStepLine":51,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When I log with \"locked_out_user\" as user and \"secret_sauce\" as password","stepMatchArguments":[{"group":{"start":11,"value":"\"locked_out_user\"","children":[{"start":12,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"secret_sauce\"","children":[{"start":42,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Sorry, this user has been locked out.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Sorry, this user has been locked out.\"","children":[{"start":31,"value":"Sorry, this user has been locked out.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":56,"pickleLine":77,"tags":["@negative","@login","@validation"],"steps":[{"pwStepLine":57,"gherkinStepLine":78,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":79,"keywordType":"Action","textWithKeyword":"When I enter username \"   \" with no spaces trimmed","stepMatchArguments":[{"group":{"start":17,"value":"\"   \"","children":[{"start":18,"value":"   ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":59,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"And I enter password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":17,"value":"\"secret_sauce\"","children":[{"start":18,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":60,"gherkinStepLine":81,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":82,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Epic sadface: Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":31,"value":"Epic sadface: Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":64,"pickleLine":87,"tags":["@negative","@login","@validation"],"steps":[{"pwStepLine":65,"gherkinStepLine":88,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":89,"keywordType":"Action","textWithKeyword":"When I enter username \"standard_user\"","stepMatchArguments":[{"group":{"start":17,"value":"\"standard_user\"","children":[{"start":18,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":67,"gherkinStepLine":90,"keywordType":"Action","textWithKeyword":"And I enter password \"   \" with no spaces trimmed","stepMatchArguments":[{"group":{"start":17,"value":"\"   \"","children":[{"start":18,"value":"   ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":68,"gherkinStepLine":91,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":92,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Epic sadface: Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":31,"value":"Epic sadface: Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":72,"pickleLine":97,"tags":["@negative","@login","@security"],"steps":[{"pwStepLine":73,"gherkinStepLine":98,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":99,"keywordType":"Action","textWithKeyword":"When I log with \"' OR '1'='1\" as user and \"secret_sauce\" as password","stepMatchArguments":[{"group":{"start":11,"value":"\"' OR '1'='1\"","children":[{"start":12,"value":"' OR '1'='1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":37,"value":"\"secret_sauce\"","children":[{"start":38,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":75,"gherkinStepLine":100,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Username and password do not match any user in this service\"","children":[{"start":31,"value":"Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":78,"pickleLine":105,"tags":["@negative","@login","@security"],"steps":[{"pwStepLine":79,"gherkinStepLine":106,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":107,"keywordType":"Action","textWithKeyword":"When I log with \"standard_user<script>\" as user and \"secret_sauce\" as password","stepMatchArguments":[{"group":{"start":11,"value":"\"standard_user<script>\"","children":[{"start":12,"value":"standard_user<script>","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"secret_sauce\"","children":[{"start":48,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":81,"gherkinStepLine":108,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Username and password do not match any user in this service\"","children":[{"start":31,"value":"Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":84,"pickleLine":113,"tags":["@negative","@login","@validation"],"steps":[{"pwStepLine":85,"gherkinStepLine":114,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":115,"keywordType":"Action","textWithKeyword":"When I enter a username with 1000 characters","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":116,"keywordType":"Action","textWithKeyword":"And I enter password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":17,"value":"\"secret_sauce\"","children":[{"start":18,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":88,"gherkinStepLine":117,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":118,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Username and password do not match any user in this service\"","children":[{"start":31,"value":"Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":92,"pickleLine":123,"tags":["@negative","@login","@validation"],"steps":[{"pwStepLine":93,"gherkinStepLine":124,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":125,"keywordType":"Action","textWithKeyword":"When I enter username \"standard_user\"","stepMatchArguments":[{"group":{"start":17,"value":"\"standard_user\"","children":[{"start":18,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":95,"gherkinStepLine":126,"keywordType":"Action","textWithKeyword":"And I enter a password with 1000 characters","stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":127,"keywordType":"Action","textWithKeyword":"And I click the login button","stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":128,"keywordType":"Outcome","textWithKeyword":"Then I should see an error message \"Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Username and password do not match any user in this service\"","children":[{"start":31,"value":"Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end