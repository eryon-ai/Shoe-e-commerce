import { test, expect } from '@playwright/test';

test.describe('Deep Interactions & UI States', () => {

  test('cart drawer opens, traps focus, and closes correctly', async ({ page, isMobile }) => {
    await page.goto('/');

    // Ensure cart drawer is initially hidden
    const cartDrawer = page.locator('aside').filter({ hasText: 'Your Cart' });
    
    // Open cart drawer
    if (isMobile) {
      await page.getByRole('button', { name: 'menu' }).click();
      await page.locator('a[href="/checkout"]').first().click(); // Mobile cart button
    } else {
      await page.getByRole('button', { name: 'shopping_bag' }).click();
    }
    
    // Check if visible and animated in
    await expect(cartDrawer).toBeVisible();
    await expect(page.getByText('Your Cart')).toBeVisible();
    await expect(page.getByText('Your cart is empty.')).toBeVisible();

    // Close cart drawer via the 'close' button
    await page.getByRole('button', { name: 'close' }).click();
    
    // Ensure it's hidden
    await expect(cartDrawer).toBeHidden();
  });

  test('brand showcase updates content on hover', async ({ page, isMobile }) => {
    // Skip on mobile since hover is a mouse interaction
    test.skip(isMobile, 'Hover interactions are primarily for desktop');
    
    await page.goto('/');

    // Scroll to brand showcase
    await page.getByText('OUR UNIVERSES').scrollIntoViewIfNeeded();

    // The default brand is Vault Originals. Let's hover over Aethra.
    const aethraBtn = page.getByRole('button', { name: 'Aethra' });
    await aethraBtn.hover();

    // Wait a brief moment for state update and framer motion animation
    await page.waitForTimeout(500);

    // Assert the text changes to Aethra's tagline
    await expect(page.getByText('Future-Tech Athletics')).toBeVisible();

    // Hover over Nike
    const nikeBtn = page.getByRole('button', { name: 'Nike' });
    await nikeBtn.hover();
    await page.waitForTimeout(500);

    // Assert text changes to Nike's tagline
    await expect(page.getByText('Swoosh Legacy')).toBeVisible();
  });
  
  test('newsletter form validation and empty state', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to bottom
    await page.getByPlaceholder('ENTER YOUR EMAIL').scrollIntoViewIfNeeded();
    
    // Attempt to click request access without filling email
    const submitBtn = page.getByRole('button', { name: 'REQUEST ACCESS' });
    await submitBtn.click();
    
    // In native HTML5 validation, the browser blocks submission if a required field is empty.
    // We can evaluate validity state via DOM
    const input = page.getByPlaceholder('ENTER YOUR EMAIL');
    const isValid = await input.evaluate((el: HTMLInputElement) => el.checkValidity());
    expect(isValid).toBeFalsy();
    
    // Fill a valid email
    await input.fill('test@vaultelite.com');
    const isValidNow = await input.evaluate((el: HTMLInputElement) => el.checkValidity());
    expect(isValidNow).toBeTruthy();
  });

});
