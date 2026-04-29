import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly pageTitle: Locator;
  readonly usernameBox: Locator;
  readonly passwordBox: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameBox = this.page.locator('#user-name');
    this.passwordBox = this.page.locator('#password');
    this.loginBtn = this.page.locator('#login-button');
    this.pageTitle = this.page.locator('[data-test="title"]');
  }

  async navigate() {
    await this.page.goto('/');
    await this.page.title();
  }

  async navigateLoged() {
    await this.page.goto('/inventory.html');
    await this.page.title();
  }

  async logUsername(
    username: string = 'standard_user',
    password: string = 'secret_sauce'
  ) {
    await this.usernameBox.fill(username);
    await this.passwordBox.fill(password);
    await this.loginBtn.click();
    console.log(`Logging in with username: ${username}`);
  }

  async validate() {
    await expect(1).toBe(1);
  }

  async validateInventoryPage() {
    await expect(this.pageTitle).toHaveText('Products');
  }
}
