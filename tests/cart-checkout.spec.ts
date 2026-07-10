import { test, expect } from '@playwright/test';

test.describe('Cart & Checkout Flow', () => {
  test('add to cart and proceed to checkout', async ({ page, isMobile }) => {
    // 1. Clear local storage first by going to a blank page
    await page.goto('/');
    await page.evaluate(() => window.localStorage.clear());

    // 2. Go to product detail
    await page.goto('/product/aero-glide-vx');
    
    // Wait for hydration (important for Zustand)
    await page.waitForLoadState('networkidle');

    // 3. Select a size
    await page.getByRole('button', { name: '10', exact: true }).click();

    // 4. Click add to vault
    page.on('dialog', dialog => dialog.accept()); // Accept the alert("Added to cart!")
    await page.getByRole('button', { name: 'ADD TO VAULT' }).click();

    // 5. Verify header cart count updates to 1 (Cart is rendered in desktop nav and mobile nav)
    if (isMobile) {
      await page.getByRole('button', { name: 'menu' }).click();
      await expect(page.locator('nav').getByText('CART (1)')).toBeVisible();
    } else {
      const cartIconCount = page.locator('nav').getByText('1', { exact: true }).first();
      await expect(cartIconCount).toBeVisible();
    }

    // 6. Navigate to checkout
    await page.locator('nav a[href="/checkout"]').first().click();
    await expect(page).toHaveURL(/.*checkout/);

    // 7. Verify checkout stepper and empty state is NOT shown
    await expect(page.getByText('YOUR CART IS EMPTY')).not.toBeVisible();
    await expect(page.getByText('Shipping', { exact: true }).first()).toBeVisible();
    
    // 8. Place order flow
    // Fill shipping form
    await page.getByLabel('Email Address').fill('test@example.com');
    await page.getByLabel('First Name').fill('John');
    await page.getByLabel('Last Name').fill('Doe');
    await page.getByLabel('Street Address').fill('123 Main St');
    await page.getByLabel('City').fill('New York');
    await page.getByLabel('Postal Code').fill('10001');

    await page.getByRole('button', { name: 'Continue to Payment' }).click();
    await expect(page.getByText('Payment Information')).toBeVisible();
    
    // Fill payment form
    await page.getByLabel('Card Number').fill('4242424242424242');
    await page.getByLabel('Expiry').fill('12/25');
    await page.getByLabel('CVC').fill('123');

    await page.getByRole('button', { name: 'Review Order' }).click();
    await expect(page.getByText('Order Summary')).toBeVisible();

    // Final order button
    await page.getByRole('button', { name: 'PLACE ORDER' }).click();
    await expect(page).toHaveURL(/.*dashboard/);
  });
});
