import { test, expect } from '@playwright/test';

test.describe('Form Validations & Edge Cases', () => {

  test('checkout prevents advancement with missing shipping fields', async ({ page }) => {
    // Add product to cart first
    await page.goto('/product/aero-glide-vx');
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    await page.waitForTimeout(500); // Wait for modal
    
    // Go to checkout
    await page.goto('/checkout');
    await expect(page.getByText('Shipping Address')).toBeVisible();

    // Fill only the email, leave everything else empty
    await page.getByLabel('Email Address').fill('test@example.com');
    
    // Click Continue
    await page.getByRole('button', { name: 'Continue to Payment' }).click();
    
    // Because HTML5 validation is active, the state should remain on Step 1 (Shipping Address)
    // and should not reveal 'Payment Information'
    await expect(page.getByText('Payment Information')).toBeHidden();
    
    // Fill the rest
    await page.getByLabel('First Name').fill('John');
    await page.getByLabel('Last Name').fill('Doe');
    await page.getByLabel('Street Address').fill('123 Main St');
    await page.getByLabel('City').fill('New York');
    await page.getByLabel('Postal Code').fill('10001');

    // Click Continue again
    await page.getByRole('button', { name: 'Continue to Payment' }).click();

    // Now it should proceed
    await expect(page.getByText('Payment Information')).toBeVisible();
  });

  test('checkout prevents completion with incomplete payment fields', async ({ page }) => {
    // Fast path to payment step
    await page.goto('/product/aero-glide-vx');
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    await page.waitForTimeout(500);
    await page.goto('/checkout');
    
    // Fill shipping form
    await page.getByLabel('Email Address').fill('test@example.com');
    await page.getByLabel('First Name').fill('John');
    await page.getByLabel('Last Name').fill('Doe');
    await page.getByLabel('Street Address').fill('123 Main St');
    await page.getByLabel('City').fill('New York');
    await page.getByLabel('Postal Code').fill('10001');

    await page.getByRole('button', { name: 'Continue to Payment' }).click();
    
    // Leave payment empty and click Review Order
    await page.getByRole('button', { name: 'Review Order' }).click();
    
    // It should NOT advance to Order Summary
    await expect(page.getByText('Order Summary')).toBeHidden();

    // Fill Payment
    await page.getByLabel('Card Number').fill('4242424242424242');
    await page.getByLabel('Expiry').fill('12/25');
    await page.getByLabel('CVC').fill('123');
    
    // Click Review Order
    await page.getByRole('button', { name: 'Review Order' }).click();
    
    // Now it advances
    await expect(page.getByText('Order Summary')).toBeVisible();
  });

});
