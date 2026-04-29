import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { Given, When, Then } = createBdd(test);

//import { Given, When, Then } from "../fixtures/fixtures";
//import { test } from "../fixtures/fixtures";

//Preconditions
Given('I am on the login page', async ({ loginPage }) => {
  await loginPage.navigate();
});

When(
  'I log with {string} as user and {string} as password',
  async ({ loginPage }, username: string, password: string) => {
    await loginPage.logUsername(username, password);
  }
);

Then('I should be redirected to the inventory page', async ({ loginPage }) => {
  await loginPage.validateInventoryPage();
});

Then(
  'I should see a welcome message with standard_user',
  async ({ loginPage }) => {
    console.log('Validating welcome message for standard_user');
  }
);
