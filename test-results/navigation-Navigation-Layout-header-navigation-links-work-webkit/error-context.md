# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Navigation & Layout >> header navigation links work
- Location: tests/navigation.spec.ts:18:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Vault Elite Collections')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Vault Elite Collections')

```

```yaml
- navigation:
  - link "VAULT":
    - /url: /
  - link "DROPS":
    - /url: /drops/limited
  - link "COLLECTIONS":
    - /url: /collections
  - link "ARCHIVE":
    - /url: /stories
  - link "MARKET":
    - /url: /market
  - link "View Wishlist, 0 items":
    - /url: /wishlist
  - link "Sign In":
    - /url: /login
  - link "View Cart, 0 items":
    - /url: /checkout
- main:
  - heading "The Market" [level=1]
  - paragraph: Explore our curated selection of hyper-limited drops and premium footwear. Innovation meets absolute luxury.
  - complementary:
    - textbox "Search Market..."
    - text: search
    - heading "Brand" [level=3]
    - text: Vault Originals Nike Aethra
    - button "Clear Brand"
  - button "favorite"
  - link "Aero Glide vX":
    - /url: /product/aero-glide-vx
    - img "Aero Glide vX"
  - paragraph: Vault Originals
  - heading "Aero Glide vX" [level=2]
  - paragraph: $ 350.00
  - button "add"
  - button "favorite"
  - link "Strata Runner":
    - /url: /product/strata-runner
    - img "Strata Runner"
  - paragraph: Nike
  - heading "Strata Runner" [level=2]
  - paragraph: $ 280.00
  - button "Buy arrow_right_alt"
  - button "favorite"
  - link "Phantom Strider":
    - /url: /product/phantom-strider
    - img "Phantom Strider"
  - paragraph: Vault Originals
  - heading "Phantom Strider" [level=2]
  - paragraph: $ 280.00
  - button "Buy arrow_right_alt"
  - text: Exclusive Drop
  - button "favorite"
  - link "Nexus High":
    - /url: /product/nexus-high
    - img "Nexus High"
  - paragraph: Aethra
  - heading "Nexus High" [level=2]
  - paragraph: $ 420.00
  - button "Buy arrow_right_alt"
  - button "favorite"
  - link "NovaKnit Stratos":
    - /url: /product/novaknit-stratos
    - img "NovaKnit Stratos"
  - paragraph: Vault Originals
  - heading "NovaKnit Stratos" [level=2]
  - paragraph: $ 450.00
  - button "Buy arrow_right_alt"
  - button "favorite"
  - link "Crimson Velocity":
    - /url: /product/crimson-velocity
    - img "Crimson Velocity"
  - paragraph: Nike
  - heading "Crimson Velocity" [level=2]
  - paragraph: $ 195.00
  - button "Buy arrow_right_alt"
  - text: Exclusive Drop
  - button "favorite"
  - link "Aethra Void Walker":
    - /url: /product/aethra-void-walker
    - img "Aethra Void Walker"
  - paragraph: Aethra
  - heading "Aethra Void Walker" [level=2]
  - paragraph: $ 850.00
  - button "Buy arrow_right_alt"
  - button "favorite"
  - link "Heavy Step X1":
    - /url: /product/heavy-step-x1
    - img "Heavy Step X1"
  - paragraph: Vault Originals
  - heading "Heavy Step X1" [level=2]
  - paragraph: $ 310.00
  - button "Buy arrow_right_alt"
  - text: Exclusive Drop
  - button "favorite"
  - link "Quantum Aero-X":
    - /url: /product/quantum-aero-x
    - img "Quantum Aero-X"
  - paragraph: Vault Originals
  - heading "Quantum Aero-X" [level=2]
  - paragraph: $ 1200.00
  - button "Buy arrow_right_alt"
  - text: Exclusive Drop
  - button "favorite"
  - link "Apex Synthwave":
    - /url: /product/apex-synthwave
    - img "Apex Synthwave"
  - paragraph: Aethra
  - heading "Apex Synthwave" [level=2]
  - paragraph: $ 950.00
  - button "Buy arrow_right_alt"
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
  3  | test.describe('Navigation & Layout', () => {
  4  |   test('homepage loads and renders hero section', async ({ page }) => {
  5  |     await page.goto('/');
  6  |     
  7  |     // Expect the title to contain Velocit-X or Vault Elite
  8  |     await expect(page).toHaveTitle(/Velocit-X Luxury Footwear/);
  9  |     
  10 |     // Check if the logo "VAULT" exists in the header
  11 |     const logo = page.locator('nav a').filter({ hasText: 'VAULT' }).first();
  12 |     await expect(logo).toBeVisible();
  13 |     
  14 |     // Check hero text
  15 |     await expect(page.getByText('Reimagined Comfort')).toBeVisible();
  16 |   });
  17 | 
  18 |   test('header navigation links work', async ({ page, isMobile }) => {
  19 |     await page.goto('/');
  20 |     
  21 |     // Go to Market
  22 |     if (isMobile) {
  23 |       await page.getByRole('button', { name: 'menu' }).click();
  24 |     }
  25 |     await page.getByRole('link', { name: 'MARKET' }).click();
  26 |     await expect(page).toHaveURL(/.*market/);
  27 |     await expect(page.getByText('MARKETPLACE')).toBeVisible();
  28 | 
  29 |     // Go to Collections
  30 |     if (isMobile) {
  31 |       await page.getByRole('button', { name: 'menu' }).click();
  32 |     }
  33 |     await page.getByRole('link', { name: 'COLLECTIONS' }).click();
  34 |     await expect(page).toHaveURL(/.*collections/);
> 35 |     await expect(page.getByText('Vault Elite Collections')).toBeVisible();
     |                                                             ^ Error: expect(locator).toBeVisible() failed
  36 |   });
  37 | });
  38 | 
```