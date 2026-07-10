# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart-checkout.spec.ts >> Cart & Checkout Flow >> add to cart and proceed to checkout
- Location: tests/cart-checkout.spec.ts:4:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('nav').getByText('1', { exact: true }).first()
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('nav').getByText('1', { exact: true }).first()
    13 × locator resolved to <span class="absolute -top-1.5 -right-1.5 bg-primary text-background font-label-caps text-[9px] rounded-full w-4 h-4 flex items-center justify-center">1</span>
       - unexpected value "hidden"

```

```yaml
- navigation:
  - link "VAULT":
    - /url: /
  - button "menu"
- main:
  - button "favorite"
  - img "Aero Glide vX"
  - img "Thumbnail 0"
  - img "Thumbnail 1"
  - text: NEW RELEASE
  - heading "Aero Glide vX" [level=1]
  - paragraph: Vault Originals
  - text: $350 USD
  - paragraph: The ultimate marathon shoe. Features our new Nitro Foam V2 and a full-length carbon plate for explosive energy return.
  - paragraph: "SELECT COLORWAY: Phantom Black"
  - button "Phantom Black"
  - button "Neon Green"
  - paragraph: SELECT SIZE
  - link "SIZE GUIDE":
    - /url: "#"
  - button "8"
  - button "9"
  - button "10"
  - button "11"
  - button "12"
  - button "ADD TO VAULT lock"
  - heading "PRECISION ENGINEERED" [level=2]
  - heading "propulsion" [level=3]
  - paragraph: Carbon Plate
  - heading "midsole" [level=3]
  - paragraph: Nitro Foam
  - img "Tech Overlay"
  - text: SCAN DETECTED radar SYS.OP.409
- contentinfo:
  - text: VAULT
  - paragraph: © 2024 VAULT ELITE. ALL RIGHTS RESERVED.
  - link "PRIVACY":
    - /url: "#"
  - link "TERMS":
    - /url: "#"
  - link "AUTHENTICITY":
    - /url: "#"
  - link "CAREERS":
    - /url: "#"
- alert
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Cart & Checkout Flow', () => {
  4  |   test('add to cart and proceed to checkout', async ({ page, isMobile }) => {
  5  |     // 1. Clear local storage first by going to a blank page
  6  |     await page.goto('/');
  7  |     await page.evaluate(() => window.localStorage.clear());
  8  | 
  9  |     // 2. Go to product detail
  10 |     await page.goto('/product/aero-glide-vx');
  11 |     
  12 |     // Wait for hydration (important for Zustand)
  13 |     await page.waitForLoadState('networkidle');
  14 | 
  15 |     // 3. Select a size
  16 |     await page.getByRole('button', { name: '10', exact: true }).click();
  17 | 
  18 |     // 4. Click add to vault
  19 |     page.on('dialog', dialog => dialog.accept()); // Accept the alert("Added to cart!")
  20 |     await page.getByRole('button', { name: 'ADD TO VAULT' }).click();
  21 | 
  22 |     // 5. Verify header cart count updates to 1 (Cart is rendered in desktop nav and mobile nav)
  23 |     // We will look for the text "1" in the header/nav region
  24 |     const cartIconCount = page.locator('nav').getByText('1', { exact: true }).first();
> 25 |     await expect(cartIconCount).toBeVisible();
     |                                 ^ Error: expect(locator).toBeVisible() failed
  26 | 
  27 |     // 6. Navigate to checkout
  28 |     if (isMobile) {
  29 |       await page.getByRole('button', { name: 'menu' }).click();
  30 |     }
  31 |     await page.locator('nav a[href="/checkout"]').first().click();
  32 |     await expect(page).toHaveURL(/.*checkout/);
  33 | 
  34 |     // 7. Verify checkout stepper and empty state is NOT shown
  35 |     await expect(page.getByText('YOUR CART IS EMPTY')).not.toBeVisible();
  36 |     await expect(page.getByText('Shipping', { exact: true }).first()).toBeVisible();
  37 |     
  38 |     // 8. Place order flow
  39 |     // Fill shipping form
  40 |     await page.getByLabel('Email Address').fill('test@example.com');
  41 |     await page.getByLabel('First Name').fill('John');
  42 |     await page.getByLabel('Last Name').fill('Doe');
  43 |     await page.getByLabel('Street Address').fill('123 Main St');
  44 |     await page.getByLabel('City').fill('New York');
  45 |     await page.getByLabel('Postal Code').fill('10001');
  46 | 
  47 |     await page.getByRole('button', { name: 'Continue to Payment' }).click();
  48 |     await expect(page.getByText('Payment Information')).toBeVisible();
  49 |     
  50 |     // Fill payment form
  51 |     await page.getByLabel('Card Number').fill('4242424242424242');
  52 |     await page.getByLabel('Expiry').fill('12/25');
  53 |     await page.getByLabel('CVC').fill('123');
  54 | 
  55 |     await page.getByRole('button', { name: 'Review Order' }).click();
  56 |     await expect(page.getByText('Order Summary')).toBeVisible();
  57 | 
  58 |     // Final order button
  59 |     await page.getByRole('button', { name: 'PLACE ORDER' }).click();
  60 |     await expect(page).toHaveURL(/.*dashboard/);
  61 |   });
  62 | });
  63 | 
```