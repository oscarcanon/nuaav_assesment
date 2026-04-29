import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { Given, When, Then } = createBdd(test);

//Preconditions
Given('I am on the inventory page', async ({ inventoryPage }) => {
  await inventoryPage.navigate();
});

When('I view the inventory', async ({ inventoryPage }) => {
  await inventoryPage.validateInventory();
});
