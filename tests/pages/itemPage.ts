import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class ItemPage extends BasePage {
  readonly itemTitle: Locator;
  readonly itemDescription: Locator;
  readonly itemPrice: Locator;
  readonly addToCartButton: Locator;
  readonly itemImage: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    super(page);
    this.itemTitle = this.page.locator('.inventory_details_name');
    this.itemDescription = this.page.locator('.inventory_details_desc');
    this.itemPrice = this.page.locator('.inventory_details_price');
    this.addToCartButton = this.page.locator('.btn_inventory');
    this.itemImage = this.page.locator('.inventory_details_img img');
    this.backButton = this.page.locator('[data-test="back-to-products"]');
  }

  async navigate() {
    await this.page.goto('/inventory-item.html?id=1');
    await this.page.title();
  }

  async validateItemImage() {
    await expect(this.itemImage).toBeVisible();
  }

  async validateAddToCartButton() {
    await expect(this.addToCartButton).toBeVisible();
    await expect(this.addToCartButton).toBeEnabled();
  }

  async clickAddToCart() {
    await this.addToCartButton.click();
  }

  async getAddToCartButtonText() {
    return await this.addToCartButton.textContent();
  }

  async navigateBack() {
    await this.backButton.click();
  }
}
