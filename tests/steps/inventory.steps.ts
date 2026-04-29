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

Then('I should see a list of available products', async ({ inventoryPage }) => {
  const itemCount = await inventoryPage.inventoryItems.count();
  console.log(`Number of inventory items found: ${itemCount}`);
  expect(itemCount).toBeGreaterThan(0);
});
