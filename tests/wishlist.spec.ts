import { test, expect } from '@playwright/test';

test.describe('Wishlist Flow', () => {
  test('add item to wishlist from market and view in wishlist', async ({ page, isMobile }) => {
    // Navigate directly to market
    await page.goto('/market');
    await page.evaluate(() => window.localStorage.clear());
    await page.reload();

    // Find the first product heart icon and click it
    // Using a specific product if possible, or just the first heart button
    const firstHeart = page.locator('button:has(span.material-symbols-outlined:has-text("favorite"))').first();
    await firstHeart.click();

    // Navigate to wishlist
    if (isMobile) {
      await page.getByRole('button', { name: 'menu' }).click();
    }
    await page.locator('nav a[href="/wishlist"]').first().click();
    await expect(page).toHaveURL(/.*wishlist/);

    // Expect the empty state to NOT be there
    await expect(page.getByText('WISHLIST IS CURRENTLY EMPTY')).not.toBeVisible();
    
    // Expect an item to exist (Add To Bag button indicates items are present)
    await expect(page.getByRole('button', { name: 'ADD TO BAG' })).toBeVisible();
  });
});
