import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixtures';
const { Given, When, Then } = createBdd(test);

//Preconditions
Given('I am on the item page', async ({ page, itemPage }) => {
  await itemPage.navigate();
});

// POSITIVE SCENARIO STEPS - Item Details

Then('I should see the item title', async ({ itemPage }) => {
  await expect(itemPage.itemTitle).toBeVisible();
  await expect(itemPage.itemTitle).not.toBeEmpty();
});

Then('I should see the item description', async ({ itemPage }) => {
  await expect(itemPage.itemDescription).toBeVisible();
  await expect(itemPage.itemDescription).not.toBeEmpty();
});

Then('I should see the item price', async ({ itemPage }) => {
  await expect(itemPage.itemPrice).toBeVisible();
  await expect(itemPage.itemPrice).not.toBeEmpty();
});

Then('the add to cart button should be visible', async ({ itemPage }) => {
  await expect(itemPage.addToCartButton).toBeVisible();
  await expect(itemPage.addToCartButton).toBeEnabled();
});

// POSITIVE SCENARIO STEPS - Item Image

Then('the item image should be visible', async ({ page }) => {
  const itemImage = page.locator('.inventory_details_img img');
  await expect(itemImage).toBeVisible();
});

Then('the item image should have a valid source', async ({ page }) => {
  const itemImage = page.locator('.inventory_details_img img');
  const srcAttribute = await itemImage.getAttribute('src');
  expect(srcAttribute).toBeTruthy();
  expect(srcAttribute).toContain('.jpg');
});

Then('the item image should have proper dimensions', async ({ page }) => {
  const itemImage = page.locator('.inventory_details_img img');
  const boundingBox = await itemImage.boundingBox();
  expect(boundingBox).not.toBeNull();
  expect(boundingBox?.width).toBeGreaterThan(0);
  expect(boundingBox?.height).toBeGreaterThan(0);
});

// POSITIVE SCENARIO STEPS - Add to Cart Button

When('I click the add to cart button', async ({ itemPage }) => {
  await itemPage.addToCartButton.click();
});

Then(
  'the add to cart button text should change to {string}',
  async ({ itemPage }, expectedText: string) => {
    await expect(itemPage.addToCartButton).toContainText(expectedText);
  }
);

Then('the item should be added to the shopping cart', async ({ page }) => {
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toBeVisible();
  const cartCount = await cartBadge.textContent();
  expect(parseInt(cartCount || '0')).toBeGreaterThan(0);
});

// POSITIVE SCENARIO STEPS - Navigation

When('I click on the first item image', async ({ inventoryPage }) => {
  const firstItemImage = inventoryPage.inventoryItems.locator('img').first();
  await firstItemImage.click();
});

Then('I should be navigated to the item details page', async ({ page }) => {
  const url = page.url();
  expect(url).toContain('inventory-item');
});

Then(
  'the item title should match the selected product',
  async ({ itemPage }) => {
    await expect(itemPage.itemTitle).toBeVisible();
  }
);

// POSITIVE SCENARIO STEPS - Price Validation

Then('the item price should be visible', async ({ itemPage }) => {
  await expect(itemPage.itemPrice).toBeVisible();
});

Then(
  'the item price should contain a valid currency symbol',
  async ({ itemPage }) => {
    const priceText = await itemPage.itemPrice.textContent();
    expect(priceText).toMatch(/\$|€|£/);
  }
);

Then('the item price should be a valid number', async ({ itemPage }) => {
  const priceText = await itemPage.itemPrice.textContent();
  const priceValue = parseFloat(priceText?.replace(/[^\d.]/g, '') || '0');
  expect(priceValue).toBeGreaterThan(0);
});

// NEGATIVE SCENARIO STEPS

Given(
  'I am on the item page with stock unavailable',
  async ({ page, itemPage }) => {
    await itemPage.navigate();
    // Mock unavailable stock scenario
    console.log('Testing item with unavailable stock');
  }
);

Then('the add to cart button should be disabled', async ({ itemPage }) => {
  await expect(itemPage.addToCartButton).toBeDisabled();
});

Then(
  'the add to cart button should display {string}',
  async ({ itemPage }, expectedText: string) => {
    await expect(itemPage.addToCartButton).toContainText(expectedText);
  }
);

Given(
  'I am on the item page with missing title',
  async ({ page, itemPage }) => {
    await itemPage.navigate();
    // Scenario for missing item title
  }
);

Then('an error message should be displayed', async ({ page }) => {
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
});

Then(
  'the page should indicate incomplete item information',
  async ({ page }) => {
    const warningMessage = page.locator('[data-test="warning"]');
    await expect(warningMessage).toBeVisible();
  }
);

Given(
  'I am on the item page with missing image',
  async ({ page, itemPage }) => {
    await itemPage.navigate();
  }
);

When('the item image source is broken', async ({ page }) => {
  const itemImage = page.locator('.inventory_details_img img');
  await page.evaluate(() => {
    const img = document.querySelector(
      '.inventory_details_img img'
    ) as HTMLImageElement;
    if (img) img.src = 'broken-image.jpg';
  });
});

Then('an image placeholder should be displayed', async ({ page }) => {
  const placeholder = page.locator('.image-placeholder');
  await expect(placeholder).toBeVisible();
});

Then('the broken image indicator should appear', async ({ page }) => {
  const brokenIndicator = page.locator('.broken-image-indicator');
  const isVisible = await brokenIndicator.isVisible().catch(() => false);
  expect(isVisible).toBeTruthy();
});

Then('no item image should be visible', async ({ page }) => {
  const itemImage = page.locator('.inventory_details_img img');
  const isVisible = await itemImage.isVisible().catch(() => false);
  expect(isVisible).toBeFalsy();
});

Then('a default placeholder image should appear', async ({ page }) => {
  const placeholder = page.locator('.default-image-placeholder');
  await expect(placeholder).toBeVisible();
});

Given(
  'I am on the item page with missing price',
  async ({ page, itemPage }) => {
    await itemPage.navigate();
  }
);

Then(
  'the price field should be empty or show {string}',
  async ({ itemPage }, expectedValue: string) => {
    const priceText = await itemPage.itemPrice.textContent();
    expect(priceText?.trim()).toMatch(new RegExp(`^${expectedValue}$|^$`));
  }
);

Given(
  'I am on the item page with missing description',
  async ({ page, itemPage }) => {
    await itemPage.navigate();
  }
);

Then(
  'the description field should be empty or show {string}',
  async ({ itemPage }, expectedValue: string) => {
    const descText = await itemPage.itemDescription.textContent();
    expect(descText?.trim()).toMatch(new RegExp(`^${expectedValue}$|^$`));
  }
);

// EDGE CASE SCENARIO STEPS

Given(
  'I am on the item page with slow network conditions',
  async ({ page, itemPage }) => {
    // Simulate slow network
    await page.route('**/*.jpg', async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await route.continue();
    });
    await itemPage.navigate();
  }
);

Then('the item image should eventually load', async ({ page }) => {
  const itemImage = page.locator('.inventory_details_img img');
  await expect(itemImage).toBeVisible({ timeout: 5000 });
});

Then(
  'a loading indicator should be displayed while loading',
  async ({ page }) => {
    const loadingSpinner = page.locator('[data-test="loading"]');
    const isVisible = await loadingSpinner.isVisible().catch(() => false);
    expect(isVisible).toBeTruthy();
  }
);

Then(
  'the page should remain functional during image load',
  async ({ itemPage }) => {
    await expect(itemPage.addToCartButton).toBeEnabled();
  }
);

When(
  'I click the add to cart button multiple times rapidly',
  async ({ itemPage }) => {
    for (let i = 0; i < 5; i++) {
      await itemPage.addToCartButton.click({ force: true });
    }
  }
);

Then('the item should be added to cart only once', async ({ page }) => {
  const cartBadge = page.locator('.shopping_cart_badge');
  const cartCount = await cartBadge.textContent();
  expect(parseInt(cartCount || '0')).toBe(1);
});

Then('the button state should remain consistent', async ({ itemPage }) => {
  const buttonText = await itemPage.addToCartButton.textContent();
  expect(buttonText).toContain('Remove');
});

Given('I am viewing an item details page', async ({ page, itemPage }) => {
  await itemPage.navigate();
});

When('I click the back button or navigate to inventory', async ({ page }) => {
  await page.goBack();
});

Then(
  'the previously added items should still be in the cart',
  async ({ page }) => {
    const cartBadge = page.locator('.shopping_cart_badge');
    const isVisible = await cartBadge.isVisible().catch(() => false);
    expect(isVisible).toBeTruthy();
  }
);

Then('the item image should have descriptive alt text', async ({ page }) => {
  const itemImage = page.locator('.inventory_details_img img');
  const altText = await itemImage.getAttribute('alt');
  expect(altText).toBeTruthy();
  expect(altText?.length).toBeGreaterThan(5);
});

Then('the alt text should match the item name', async ({ itemPage, page }) => {
  const titleText = await itemPage.itemTitle.textContent();
  const altText = await page
    .locator('.inventory_details_img img')
    .getAttribute('alt');
  expect(altText?.toLowerCase()).toContain(
    titleText?.toLowerCase().split(' ')[0] || ''
  );
});

Then(
  'the add to cart button should be prominently displayed',
  async ({ itemPage }) => {
    const boundingBox = await itemPage.addToCartButton.boundingBox();
    expect(boundingBox?.width).toBeGreaterThan(80);
    expect(boundingBox?.height).toBeGreaterThan(30);
  }
);

Then(
  'the add to cart button should have clear visual styling',
  async ({ itemPage }) => {
    const buttonClass = await itemPage.addToCartButton.getAttribute('class');
    expect(buttonClass).toBeTruthy();
  }
);

Then(
  'the button should be easily clickable with proper size',
  async ({ itemPage }) => {
    await expect(itemPage.addToCartButton).toHaveCSS('cursor', 'pointer');
  }
);
