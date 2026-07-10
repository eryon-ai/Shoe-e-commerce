# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: interactions.spec.ts >> Deep Interactions & UI States >> brand showcase updates content on hover
- Location: tests/interactions.spec.ts:26:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Future-Tech Athletics')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Future-Tech Athletics')

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
  - text: 01 // NEW ARRIVAL
  - heading "Reimagined Comfort" [level=1]
  - paragraph: Experience hyper-functional aesthetics blending high-tech sportswear with atmospheric luxury. Step into the future.
  - link "EXPLORE DROP":
    - /url: /drops/limited
  - button "play_circle WATCH VIDEO"
  - link "Aero Glide vX":
    - /url: /product/aero-glide-vx
    - img "Aero Glide vX"
  - paragraph: CUSHIONING
  - paragraph: Nitro Foam
  - paragraph: PROPULSION
  - paragraph: Carbon Plate
  - text: ARCHITECTED FOR THE 1% INNOVATION MEETS LUXURY THE FUTURE OF FOOTWEAR NO COMPROMISES VAULT ELITE EXCLUSIVE ARCHITECTED FOR THE 1% INNOVATION MEETS LUXURY THE FUTURE OF FOOTWEAR NO COMPROMISES VAULT ELITE EXCLUSIVE ARCHITECTED FOR THE 1% INNOVATION MEETS LUXURY THE FUTURE OF FOOTWEAR NO COMPROMISES VAULT ELITE EXCLUSIVE ARCHITECTED FOR THE 1% INNOVATION MEETS LUXURY THE FUTURE OF FOOTWEAR NO COMPROMISES VAULT ELITE EXCLUSIVE
  - heading "Curated Vault" [level=2]
  - paragraph: Exclusive collections defined by form and function.
  - link "VIEW ALL ARCHIVES arrow_forward":
    - /url: /collections
  - link "Aero Glide vX running Aero Glide vX The ultimate marathon shoe. Features our new Nitro Foam V2 and a full-length carbon plate for explosive energy return. arrow_outward":
    - /url: /product/aero-glide-vx
    - img "Aero Glide vX"
    - text: running
    - heading "Aero Glide vX" [level=3]
    - paragraph: The ultimate marathon shoe. Features our new Nitro Foam V2 and a full-length carbon plate for explosive energy return.
    - button "arrow_outward"
  - link "Strata Runner Strata Runner $280":
    - /url: /product/strata-runner
    - img "Strata Runner"
    - heading "Strata Runner" [level=4]
    - text: $280
  - link "Phantom Strider Ultra-lightweight track spike for the elites. Minimalist upper and aggressive traction. $280 View Specs chevron_right":
    - /url: /product/phantom-strider
    - heading "Phantom Strider" [level=3]
    - paragraph: Ultra-lightweight track spike for the elites. Minimalist upper and aggressive traction.
    - text: $280 View Specs chevron_right
  - link "Nexus High Aethra Nexus High":
    - /url: /product/nexus-high
    - img "Nexus High"
    - text: Aethra
    - heading "Nexus High" [level=3]
  - link "NovaKnit Stratos $450 NovaKnit Stratos lifestyle":
    - /url: /product/novaknit-stratos
    - img "NovaKnit Stratos"
    - text: $450
    - heading "NovaKnit Stratos" [level=3]
    - paragraph: lifestyle
  - heading "OUR UNIVERSES" [level=2]
  - button "Nike"
  - button "Vault Originals"
  - button "Aethra"
  - heading "Step into the Void" [level=3]
  - paragraph: Cyberpunk aesthetics meeting athletic utility. Aethra is the brand for the neon-drenched future.
  - link "ENTER UNIVERSE east":
    - /url: /brands/aethra
  - heading "Engineering Perfection" [level=2]
  - paragraph: Deconstruct the anatomy of the Aero Glide vX. Every stitch, plate, and foam cell architected for maximum efficiency.
  - img "Technical Blueprint"
  - heading "Aero-Weave Upper" [level=4]
  - paragraph: Hyper-breathable ballistic mesh construction.
  - heading "Nitro Foam V2" [level=4]
  - paragraph: Proprietary foam delivering 85% energy return.
  - heading "Carbon Propulsion" [level=4]
  - paragraph: Full-length rigid plate for explosive toe-off.
  - heading "The Journal" [level=2]
  - paragraph: Culture, innovation, and the stories behind the silhouettes.
  - link "READ ALL arrow_forward":
    - /url: "#"
  - img "The Evolution of Air"
  - text: Innovation
  - paragraph: 2024-10-15 // BY EDITORIAL TEAM
  - heading "The Evolution of Air" [level=3]
  - paragraph: How pressurized gas revolutionized athletic performance forever.
  - 'img "Into the Void: Interview with Aethra Lead Designer"'
  - paragraph: Interviews
  - 'heading "Into the Void: Interview with Aethra Lead Designer" [level=4]'
  - paragraph: 2024-11-02
  - 'img "Architected for the 1%: The Vault Manifesto"'
  - paragraph: Culture
  - 'heading "Architected for the 1%: The Vault Manifesto" [level=4]'
  - paragraph: 2024-11-20
  - text: vpn_key
  - heading "Unlock The Vault" [level=2]
  - paragraph: Join the elite. Gain exclusive early access to hyper-limited drops, collaborations, and private events.
  - textbox "ENTER YOUR EMAIL"
  - button "REQUEST ACCESS arrow_forward"
  - paragraph: By joining, you agree to our Terms of Service and Privacy Policy.
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
  3  | test.describe('Deep Interactions & UI States', () => {
  4  | 
  5  |   test('cart drawer opens, traps focus, and closes correctly', async ({ page }) => {
  6  |     await page.goto('/');
  7  | 
  8  |     // Ensure cart drawer is initially hidden
  9  |     const cartDrawer = page.locator('aside').filter({ hasText: 'Your Cart' });
  10 |     
  11 |     // Open cart drawer
  12 |     await page.getByRole('button', { name: 'shopping_bag' }).click();
  13 |     
  14 |     // Check if visible and animated in
  15 |     await expect(cartDrawer).toBeVisible();
  16 |     await expect(page.getByText('Your Cart')).toBeVisible();
  17 |     await expect(page.getByText('Your cart is empty.')).toBeVisible();
  18 | 
  19 |     // Close cart drawer via the 'close' button
  20 |     await page.getByRole('button', { name: 'close' }).click();
  21 |     
  22 |     // Ensure it's hidden
  23 |     await expect(cartDrawer).toBeHidden();
  24 |   });
  25 | 
  26 |   test('brand showcase updates content on hover', async ({ page, isMobile }) => {
  27 |     // Skip on mobile since hover is a mouse interaction
  28 |     test.skip(isMobile, 'Hover interactions are primarily for desktop');
  29 |     
  30 |     await page.goto('/');
  31 | 
  32 |     // Scroll to brand showcase
  33 |     await page.getByText('OUR UNIVERSES').scrollIntoViewIfNeeded();
  34 | 
  35 |     // The default brand is Vault Originals. Let's hover over Aethra.
  36 |     const aethraBtn = page.getByRole('button', { name: 'Aethra' });
  37 |     await aethraBtn.hover();
  38 | 
  39 |     // Wait a brief moment for state update and framer motion animation
  40 |     await page.waitForTimeout(500);
  41 | 
  42 |     // Assert the text changes to Aethra's tagline
> 43 |     await expect(page.getByText('Future-Tech Athletics')).toBeVisible();
     |                                                           ^ Error: expect(locator).toBeVisible() failed
  44 | 
  45 |     // Hover over Nike
  46 |     const nikeBtn = page.getByRole('button', { name: 'Nike' });
  47 |     await nikeBtn.hover();
  48 |     await page.waitForTimeout(500);
  49 | 
  50 |     // Assert text changes to Nike's tagline
  51 |     await expect(page.getByText('Swoosh Legacy')).toBeVisible();
  52 |   });
  53 |   
  54 |   test('newsletter form validation and empty state', async ({ page }) => {
  55 |     await page.goto('/');
  56 |     
  57 |     // Scroll to bottom
  58 |     await page.getByPlaceholder('ENTER YOUR EMAIL').scrollIntoViewIfNeeded();
  59 |     
  60 |     // Attempt to click request access without filling email
  61 |     const submitBtn = page.getByRole('button', { name: 'REQUEST ACCESS' });
  62 |     await submitBtn.click();
  63 |     
  64 |     // In native HTML5 validation, the browser blocks submission if a required field is empty.
  65 |     // We can evaluate validity state via DOM
  66 |     const input = page.getByPlaceholder('ENTER YOUR EMAIL');
  67 |     const isValid = await input.evaluate((el: HTMLInputElement) => el.checkValidity());
  68 |     expect(isValid).toBeFalsy();
  69 |     
  70 |     // Fill a valid email
  71 |     await input.fill('test@vaultelite.com');
  72 |     const isValidNow = await input.evaluate((el: HTMLInputElement) => el.checkValidity());
  73 |     expect(isValidNow).toBeTruthy();
  74 |   });
  75 | 
  76 | });
  77 | 
```