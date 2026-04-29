import { test as setup, expect } from '@playwright/test';

const authFile = 'user.json';

setup('authenticate', async ({ page }) => {
  console.log('Setting up authentication');
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await page.context().storageState({ path: authFile });
  console.log('Authentication setup completed');
});
