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
      - link "VAULT" [ref=e4]:
        - /url: /
      - button "menu" [ref=e5]:
        - generic [ref=e6]: menu
  - main [ref=e7]:
    - generic [ref=e8]:
      - generic [ref=e9]:
        - generic [ref=e10]:
          - button "favorite" [ref=e11]:
            - generic [ref=e12]: favorite
          - img "Aero Glide vX" [ref=e13]
        - generic [ref=e14]:
          - img "Thumbnail 0" [ref=e16] [cursor=pointer]
          - img "Thumbnail 1" [ref=e18] [cursor=pointer]
      - generic [ref=e20]:
        - generic [ref=e22]: NEW RELEASE
        - heading "Aero Glide vX" [level=1] [ref=e23]
        - paragraph [ref=e24]: Vault Originals
        - generic [ref=e25]:
          - generic [ref=e26]: $350
          - generic [ref=e27]: USD
        - paragraph [ref=e28]: The ultimate marathon shoe. Features our new Nitro Foam V2 and a full-length carbon plate for explosive energy return.
        - generic [ref=e29]:
          - paragraph [ref=e30]: "SELECT COLORWAY: Phantom Black"
          - generic [ref=e31]:
            - button "Phantom Black" [ref=e32]
            - button "Neon Green" [ref=e33]
        - generic [ref=e34]:
          - generic [ref=e35]:
            - paragraph [ref=e36]: SELECT SIZE
            - link "SIZE GUIDE" [ref=e37]:
              - /url: "#"
          - generic [ref=e38]:
            - button "8" [ref=e39]
            - button "9" [ref=e40]
            - button "10" [ref=e41]
            - button "11" [ref=e42]
            - button "12" [ref=e43]
        - button "ADD TO VAULT lock" [ref=e45]:
          - generic [ref=e46]: ADD TO VAULT
          - generic [ref=e47]: lock
    - generic [ref=e49]:
      - generic [ref=e50]:
        - heading "PRECISION ENGINEERED" [level=2] [ref=e51]:
          - text: PRECISION
          - text: ENGINEERED
        - generic [ref=e52]:
          - generic [ref=e53]:
            - heading "propulsion" [level=3] [ref=e54]
            - paragraph [ref=e55]: Carbon Plate
          - generic [ref=e56]:
            - heading "midsole" [level=3] [ref=e57]
            - paragraph [ref=e58]: Nitro Foam
      - generic [ref=e59]:
        - img "Tech Overlay" [ref=e60]
        - generic [ref=e61]:
          - generic [ref=e62]:
            - generic [ref=e63]: SCAN DETECTED
            - generic [ref=e64]: radar
          - generic [ref=e66]: SYS.OP.409
  - contentinfo [ref=e67]:
    - generic [ref=e68]:
      - generic [ref=e69]: VAULT
      - paragraph [ref=e70]: © 2024 VAULT ELITE. ALL RIGHTS RESERVED.
    - generic [ref=e72]:
      - link "PRIVACY" [ref=e73]:
        - /url: "#"
      - link "TERMS" [ref=e74]:
        - /url: "#"
      - link "AUTHENTICITY" [ref=e75]:
        - /url: "#"
      - link "CAREERS" [ref=e76]:
        - /url: "#"
  - button "Open Next.js Dev Tools" [ref=e82] [cursor=pointer]:
    - img [ref=e83]
  - alert [ref=e88]
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