import { test, expect } from '@playwright/test';

test.describe('Navigation & Layout', () => {
  test('homepage loads and renders hero section', async ({ page }) => {
    await page.goto('/');
    
    // Expect the title to contain Velocit-X or Vault Elite
    await expect(page).toHaveTitle(/Velocit-X Luxury Footwear/);
    
    // Check if the logo "VAULT" exists in the header
    const logo = page.locator('nav a').filter({ hasText: 'VAULT' }).first();
    await expect(logo).toBeVisible();
    
    // Check hero text
    await expect(page.getByText('Reimagined Comfort')).toBeVisible();
  });

  test('header navigation links work', async ({ page, isMobile }) => {
    await page.goto('/');
    
    // Go to Market
    if (isMobile) {
      await page.getByRole('button', { name: 'menu' }).click();
    }
    await page.getByRole('link', { name: 'MARKET' }).click();
    await expect(page).toHaveURL(/.*market/);
    await expect(page.getByText('MARKETPLACE')).toBeVisible();

    // Go to Collections
    if (isMobile) {
      await page.getByRole('button', { name: 'menu' }).click();
    }
    await page.getByRole('link', { name: 'COLLECTIONS' }).click();
    await expect(page).toHaveURL(/.*collections/);
    await expect(page.getByText('Vault Elite Collections')).toBeVisible();
  });
});
