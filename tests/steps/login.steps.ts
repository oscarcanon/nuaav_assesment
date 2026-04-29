import { expect, Page } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';

const { Given, When, Then } = createBdd(test);

//Preconditions
Given('I am on the login page', async ({ loginPage }) => {
  await loginPage.navigate();
});

Given('I am loged on the page', async ({ loginPage }) => {
  await loginPage.navigateLoged();
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

// NEGATIVE SCENARIO STEPS

When(
  'I click the login button without entering credentials',
  async ({ loginPage }) => {
    await loginPage.loginBtn.click();
  }
);

When('I enter password {string}', async ({ loginPage }, password: string) => {
  await loginPage.passwordBox.fill(password);
});

When('I enter username {string}', async ({ loginPage }, username: string) => {
  await loginPage.usernameBox.fill(username);
});

When('I click the login button', async ({ loginPage }) => {
  await loginPage.loginBtn.click();
});

Then(
  'I should see an error message {string}',
  async ({ page }, errorMessage: string) => {
    const errorElement = page.locator('[data-test="error"]');
    await expect(errorElement).toBeVisible();
    await expect(errorElement).toContainText(errorMessage);
  }
);

When(
  'I enter username {string} with no spaces trimmed',
  async ({ loginPage }, username: string) => {
    await loginPage.usernameBox.fill(username);
  }
);

When(
  'I enter password {string} with no spaces trimmed',
  async ({ loginPage }, password: string) => {
    await loginPage.passwordBox.fill(password);
  }
);

When('I enter a username with 1000 characters', async ({ loginPage }) => {
  const longUsername = 'a'.repeat(1000);
  await loginPage.usernameBox.fill(longUsername);
});

When('I enter a password with 1000 characters', async ({ loginPage }) => {
  const longPassword = 'p'.repeat(1000);
  await loginPage.passwordBox.fill(longPassword);
});

Then(
  'the username input field should be visible and empty',
  async ({ loginPage }) => {
    await expect(loginPage.usernameBox).toBeVisible();
    await expect(loginPage.usernameBox).toHaveValue('');
  }
);

Then(
  'the password input field should be visible and empty',
  async ({ loginPage }) => {
    await expect(loginPage.passwordBox).toBeVisible();
    await expect(loginPage.passwordBox).toHaveValue('');
  }
);

Then('the login button should be enabled', async ({ loginPage }) => {
  await expect(loginPage.loginBtn).toBeEnabled();
});

Then('no session cookie should be created', async ({ page }) => {
  const cookies = await page.context().cookies();
  const sessionCookie = cookies.find(
    (cookie) =>
      cookie.name.toLowerCase().includes('session') ||
      cookie.name.toLowerCase().includes('auth')
  );
  expect(sessionCookie).toBeUndefined();
});

Then('I should still be on the login page', async ({ page }) => {
  // Verify we're still on login page by checking the URL or login form presence
  const loginForm = page.locator('#login-button');
  await expect(loginForm).toBeVisible();
});
