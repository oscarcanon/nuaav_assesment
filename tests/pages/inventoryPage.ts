import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly pageTitle: Locator;
  readonly inventoryItems: Locator;
  readonly shoppingCart: Locator;
  readonly filterDropdown: Locator;
  readonly addToCartButtons: Locator;
  readonly cartItems: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = this.page.locator('[data-test="title"]');
    this.inventoryItems = this.page.locator('.inventory_item');
    this.shoppingCart = this.page.locator('.shopping_cart_link');
    this.filterDropdown = this.page.locator('.product_sort_container');
    this.addToCartButtons = this.page.locator('.btn_inventory');
    this.cartItems = this.page.locator('.cart_item');
  }

  async navigate() {
    await this.page.goto('/inventory.html');
    await this.page.title();
  }

  async validateInventory() {
    await expect(this.pageTitle).toHaveText('Products');
  }
}
