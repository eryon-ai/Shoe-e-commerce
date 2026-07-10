# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: forms.spec.ts >> Form Validations & Edge Cases >> checkout prevents completion with incomplete payment fields
- Location: tests/forms.spec.ts:39:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Add to Cart' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "VAULT" [ref=e4] [cursor=pointer]:
        - /url: /
      - generic [ref=e5]:
        - link "DROPS" [ref=e6] [cursor=pointer]:
          - /url: /drops/limited
        - link "COLLECTIONS" [ref=e7] [cursor=pointer]:
          - /url: /collections
        - link "ARCHIVE" [ref=e8] [cursor=pointer]:
          - /url: /stories
        - link "MARKET" [ref=e9] [cursor=pointer]:
          - /url: /market
      - generic [ref=e10]:
        - link "View Wishlist, 0 items" [ref=e11] [cursor=pointer]:
          - /url: /wishlist
          - generic [ref=e12]: favorite
        - link "Sign In" [ref=e13] [cursor=pointer]:
          - /url: /login
          - generic [ref=e14]: person
        - link "View Cart, 0 items" [ref=e15] [cursor=pointer]:
          - /url: /checkout
          - generic [ref=e16]: shopping_bag
  - main [ref=e17]:
    - generic [ref=e18]:
      - generic [ref=e19]:
        - generic [ref=e20]:
          - button "favorite" [ref=e21]:
            - generic [ref=e22]: favorite
          - img "Aero Glide vX" [ref=e23]
        - generic [ref=e24]:
          - img "Thumbnail 0" [ref=e26] [cursor=pointer]
          - img "Thumbnail 1" [ref=e28] [cursor=pointer]
      - generic [ref=e30]:
        - generic [ref=e32]: NEW RELEASE
        - heading "Aero Glide vX" [level=1] [ref=e33]
        - paragraph [ref=e34]: Vault Originals
        - generic [ref=e35]:
          - generic [ref=e36]: $350
          - generic [ref=e37]: USD
        - paragraph [ref=e38]: The ultimate marathon shoe. Features our new Nitro Foam V2 and a full-length carbon plate for explosive energy return.
        - generic [ref=e39]:
          - paragraph [ref=e40]: "SELECT COLORWAY: Phantom Black"
          - generic [ref=e41]:
            - button "Phantom Black" [ref=e42]
            - button "Neon Green" [ref=e43]
        - generic [ref=e44]:
          - generic [ref=e45]:
            - paragraph [ref=e46]: SELECT SIZE
            - link "SIZE GUIDE" [ref=e47] [cursor=pointer]:
              - /url: "#"
          - generic [ref=e48]:
            - button "8" [ref=e49]
            - button "9" [ref=e50]
            - button "10" [ref=e51]
            - button "11" [ref=e52]
            - button "12" [ref=e53]
        - button "ADD TO VAULT lock" [ref=e55]:
          - generic [ref=e56]: ADD TO VAULT
          - generic [ref=e57]: lock
    - generic [ref=e59]:
      - generic [ref=e60]:
        - heading "PRECISION ENGINEERED" [level=2] [ref=e61]:
          - text: PRECISION
          - text: ENGINEERED
        - generic [ref=e62]:
          - generic [ref=e63]:
            - heading "propulsion" [level=3] [ref=e64]
            - paragraph [ref=e65]: Carbon Plate
          - generic [ref=e66]:
            - heading "midsole" [level=3] [ref=e67]
            - paragraph [ref=e68]: Nitro Foam
      - generic [ref=e69]:
        - img "Tech Overlay" [ref=e70]
        - generic [ref=e71]:
          - generic [ref=e72]:
            - generic [ref=e73]: SCAN DETECTED
            - generic [ref=e74]: radar
          - generic [ref=e76]: SYS.OP.409
  - contentinfo [ref=e77]:
    - generic [ref=e78]:
      - generic [ref=e79]: VAULT
      - paragraph [ref=e80]: © 2024 VAULT ELITE. ALL RIGHTS RESERVED.
    - generic [ref=e82]:
      - link "PRIVACY" [ref=e83] [cursor=pointer]:
        - /url: "#"
      - link "TERMS" [ref=e84] [cursor=pointer]:
        - /url: "#"
      - link "AUTHENTICITY" [ref=e85] [cursor=pointer]:
        - /url: "#"
      - link "CAREERS" [ref=e86] [cursor=pointer]:
        - /url: "#"
  - button "Open Next.js Dev Tools" [ref=e92] [cursor=pointer]:
    - img [ref=e93]
  - alert [ref=e96]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Form Validations & Edge Cases', () => {
  4  | 
  5  |   test('checkout prevents advancement with missing shipping fields', async ({ page }) => {
  6  |     // Add product to cart first
  7  |     await page.goto('/product/aero-glide-vx');
  8  |     await page.getByRole('button', { name: 'Add to Cart' }).click();
  9  |     await page.waitForTimeout(500); // Wait for modal
  10 |     
  11 |     // Go to checkout
  12 |     await page.goto('/checkout');
  13 |     await expect(page.getByText('Shipping Address')).toBeVisible();
  14 | 
  15 |     // Fill only the email, leave everything else empty
  16 |     await page.getByLabel('Email Address').fill('test@example.com');
  17 |     
  18 |     // Click Continue
  19 |     await page.getByRole('button', { name: 'Continue to Payment' }).click();
  20 |     
  21 |     // Because HTML5 validation is active, the state should remain on Step 1 (Shipping Address)
  22 |     // and should not reveal 'Payment Information'
  23 |     await expect(page.getByText('Payment Information')).toBeHidden();
  24 |     
  25 |     // Fill the rest
  26 |     await page.getByLabel('First Name').fill('John');
  27 |     await page.getByLabel('Last Name').fill('Doe');
  28 |     await page.getByLabel('Street Address').fill('123 Main St');
  29 |     await page.getByLabel('City').fill('New York');
  30 |     await page.getByLabel('Postal Code').fill('10001');
  31 | 
  32 |     // Click Continue again
  33 |     await page.getByRole('button', { name: 'Continue to Payment' }).click();
  34 | 
  35 |     // Now it should proceed
  36 |     await expect(page.getByText('Payment Information')).toBeVisible();
  37 |   });
  38 | 
  39 |   test('checkout prevents completion with incomplete payment fields', async ({ page }) => {
  40 |     // Fast path to payment step
  41 |     await page.goto('/product/aero-glide-vx');
> 42 |     await page.getByRole('button', { name: 'Add to Cart' }).click();
     |                                                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  43 |     await page.waitForTimeout(500);
  44 |     await page.goto('/checkout');
  45 |     
  46 |     // Fill shipping form
  47 |     await page.getByLabel('Email Address').fill('test@example.com');
  48 |     await page.getByLabel('First Name').fill('John');
  49 |     await page.getByLabel('Last Name').fill('Doe');
  50 |     await page.getByLabel('Street Address').fill('123 Main St');
  51 |     await page.getByLabel('City').fill('New York');
  52 |     await page.getByLabel('Postal Code').fill('10001');
  53 | 
  54 |     await page.getByRole('button', { name: 'Continue to Payment' }).click();
  55 |     
  56 |     // Leave payment empty and click Review Order
  57 |     await page.getByRole('button', { name: 'Review Order' }).click();
  58 |     
  59 |     // It should NOT advance to Order Summary
  60 |     await expect(page.getByText('Order Summary')).toBeHidden();
  61 | 
  62 |     // Fill Payment
  63 |     await page.getByLabel('Card Number').fill('4242424242424242');
  64 |     await page.getByLabel('Expiry').fill('12/25');
  65 |     await page.getByLabel('CVC').fill('123');
  66 |     
  67 |     // Click Review Order
  68 |     await page.getByRole('button', { name: 'Review Order' }).click();
  69 |     
  70 |     // Now it advances
  71 |     await expect(page.getByText('Order Summary')).toBeVisible();
  72 |   });
  73 | 
  74 | });
  75 | 
```