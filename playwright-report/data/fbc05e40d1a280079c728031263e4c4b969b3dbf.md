# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.ts >> Navigation & Layout >> header navigation links work
- Location: tests/navigation.spec.ts:18:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.*market/
Received string:  "http://localhost:3000/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    10 × unexpected value "http://localhost:3000/"

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
  - heading "Architected for the 1%" [level=3]
  - paragraph: Our in-house luxury line. Merging avant-garde silhouettes with hyper-premium materials sourced globally.
  - link "ENTER UNIVERSE east":
    - /url: /brands/vault-originals
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
> 26 |     await expect(page).toHaveURL(/.*market/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  27 |     await expect(page.getByText('MARKETPLACE')).toBeVisible();
  28 | 
  29 |     // Go to Collections
  30 |     if (isMobile) {
  31 |       await page.getByRole('button', { name: 'menu' }).click();
  32 |     }
  33 |     await page.getByRole('link', { name: 'COLLECTIONS' }).click();
  34 |     await expect(page).toHaveURL(/.*collections/);
  35 |     await expect(page.getByText('Vault Elite Collections')).toBeVisible();
  36 |   });
  37 | });
  38 | 
```