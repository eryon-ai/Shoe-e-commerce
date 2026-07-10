# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: interactions.spec.ts >> Deep Interactions & UI States >> cart drawer opens, traps focus, and closes correctly
- Location: tests/interactions.spec.ts:5:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'shopping_bag' })

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
    - generic [ref=e19]:
      - generic [ref=e20]:
        - generic [ref=e22]: 01 // NEW ARRIVAL
        - heading "Reimagined Comfort" [level=1] [ref=e23]:
          - text: Reimagined
          - text: Comfort
        - paragraph [ref=e24]: Experience hyper-functional aesthetics blending high-tech sportswear with atmospheric luxury. Step into the future.
        - generic [ref=e25]:
          - link "EXPLORE DROP" [ref=e26] [cursor=pointer]:
            - /url: /drops/limited
          - button "play_circle WATCH VIDEO" [ref=e27]:
            - generic [ref=e28]: play_circle
            - text: WATCH VIDEO
      - generic [ref=e29]:
        - link "Aero Glide vX" [ref=e32] [cursor=pointer]:
          - /url: /product/aero-glide-vx
          - img "Aero Glide vX" [ref=e34]
        - generic [ref=e35]:
          - paragraph [ref=e36]: CUSHIONING
          - paragraph [ref=e37]: Nitro Foam
        - generic [ref=e38]:
          - paragraph [ref=e39]: PROPULSION
          - paragraph [ref=e40]: Carbon Plate
    - generic [ref=e43]:
      - generic [ref=e45]: ARCHITECTED FOR THE 1%
      - generic [ref=e48]: INNOVATION MEETS LUXURY
      - generic [ref=e51]: THE FUTURE OF FOOTWEAR
      - generic [ref=e54]: NO COMPROMISES
      - generic [ref=e57]: VAULT ELITE EXCLUSIVE
      - generic [ref=e60]: ARCHITECTED FOR THE 1%
      - generic [ref=e63]: INNOVATION MEETS LUXURY
      - generic [ref=e66]: THE FUTURE OF FOOTWEAR
      - generic [ref=e69]: NO COMPROMISES
      - generic [ref=e72]: VAULT ELITE EXCLUSIVE
      - generic [ref=e75]: ARCHITECTED FOR THE 1%
      - generic [ref=e78]: INNOVATION MEETS LUXURY
      - generic [ref=e81]: THE FUTURE OF FOOTWEAR
      - generic [ref=e84]: NO COMPROMISES
      - generic [ref=e87]: VAULT ELITE EXCLUSIVE
      - generic [ref=e90]: ARCHITECTED FOR THE 1%
      - generic [ref=e93]: INNOVATION MEETS LUXURY
      - generic [ref=e96]: THE FUTURE OF FOOTWEAR
      - generic [ref=e99]: NO COMPROMISES
      - generic [ref=e102]: VAULT ELITE EXCLUSIVE
    - generic [ref=e104]:
      - generic [ref=e105]:
        - generic [ref=e106]:
          - heading "Curated Vault" [level=2] [ref=e107]
          - paragraph [ref=e108]: Exclusive collections defined by form and function.
        - link "VIEW ALL ARCHIVES arrow_forward" [ref=e109] [cursor=pointer]:
          - /url: /collections
          - text: VIEW ALL ARCHIVES
          - generic [ref=e110]: arrow_forward
      - generic [ref=e111]:
        - link "Aero Glide vX running Aero Glide vX The ultimate marathon shoe. Features our new Nitro Foam V2 and a full-length carbon plate for explosive energy return. arrow_outward" [ref=e112] [cursor=pointer]:
          - /url: /product/aero-glide-vx
          - img "Aero Glide vX" [ref=e114]
          - generic [ref=e116]:
            - generic [ref=e117]:
              - generic [ref=e118]: running
              - heading "Aero Glide vX" [level=3] [ref=e119]
              - paragraph [ref=e120]: The ultimate marathon shoe. Features our new Nitro Foam V2 and a full-length carbon plate for explosive energy return.
            - button "arrow_outward" [ref=e121]:
              - generic [ref=e122]: arrow_outward
        - link "Strata Runner Strata Runner $280" [ref=e123] [cursor=pointer]:
          - /url: /product/strata-runner
          - img "Strata Runner" [ref=e125]
          - heading "Strata Runner" [level=4] [ref=e127]
          - generic [ref=e128]: $280
        - link "Phantom Strider Ultra-lightweight track spike for the elites. Minimalist upper and aggressive traction. $280 View Specs chevron_right" [ref=e129] [cursor=pointer]:
          - /url: /product/phantom-strider
          - generic [ref=e130]:
            - heading "Phantom Strider" [level=3] [ref=e131]
            - paragraph [ref=e132]: Ultra-lightweight track spike for the elites. Minimalist upper and aggressive traction.
          - generic [ref=e133]:
            - generic [ref=e134]: $280
            - generic [ref=e135]:
              - text: View Specs
              - generic [ref=e136]: chevron_right
        - link "Nexus High Aethra Nexus High" [ref=e137] [cursor=pointer]:
          - /url: /product/nexus-high
          - img "Nexus High" [ref=e139]
          - generic [ref=e140]:
            - generic [ref=e141]: Aethra
            - heading "Nexus High" [level=3] [ref=e142]
        - link "NovaKnit Stratos $450 NovaKnit Stratos lifestyle" [ref=e143] [cursor=pointer]:
          - /url: /product/novaknit-stratos
          - img "NovaKnit Stratos" [ref=e145]
          - generic [ref=e147]: $450
          - generic [ref=e148]:
            - heading "NovaKnit Stratos" [level=3] [ref=e149]
            - paragraph [ref=e150]: lifestyle
    - generic [ref=e156]:
      - generic [ref=e157]:
        - heading "OUR UNIVERSES" [level=2] [ref=e158]
        - generic [ref=e159]:
          - button "Nike" [ref=e160]
          - button "Vault Originals" [ref=e161]
          - button "Aethra" [ref=e162]
      - generic [ref=e164]:
        - heading "Architected for the 1%" [level=3] [ref=e166]
        - paragraph [ref=e167]: Our in-house luxury line. Merging avant-garde silhouettes with hyper-premium materials sourced globally.
        - link "ENTER UNIVERSE east" [ref=e168] [cursor=pointer]:
          - /url: /brands/vault-originals
          - text: ENTER UNIVERSE
          - generic [ref=e169]: east
    - generic [ref=e170]:
      - generic [ref=e172]:
        - heading "Engineering Perfection" [level=2] [ref=e173]
        - paragraph [ref=e174]: Deconstruct the anatomy of the Aero Glide vX. Every stitch, plate, and foam cell architected for maximum efficiency.
      - generic [ref=e175]:
        - img "Technical Blueprint" [ref=e177]
        - generic [ref=e179]:
          - heading "Aero-Weave Upper" [level=4] [ref=e180]
          - paragraph [ref=e181]: Hyper-breathable ballistic mesh construction.
        - generic [ref=e185]:
          - heading "Nitro Foam V2" [level=4] [ref=e186]
          - paragraph [ref=e187]: Proprietary foam delivering 85% energy return.
        - generic [ref=e191]:
          - heading "Carbon Propulsion" [level=4] [ref=e192]
          - paragraph [ref=e193]: Full-length rigid plate for explosive toe-off.
    - generic [ref=e196]:
      - generic [ref=e197]:
        - generic [ref=e198]:
          - heading "The Journal" [level=2] [ref=e199]
          - paragraph [ref=e200]: Culture, innovation, and the stories behind the silhouettes.
        - link "READ ALL arrow_forward" [ref=e201] [cursor=pointer]:
          - /url: "#"
          - text: READ ALL
          - generic [ref=e202]: arrow_forward
      - generic [ref=e203]:
        - generic [ref=e204] [cursor=pointer]:
          - generic [ref=e205]:
            - img "The Evolution of Air" [ref=e207]
            - generic [ref=e209]: Innovation
          - generic [ref=e210]:
            - paragraph [ref=e211]: 2024-10-15 // BY EDITORIAL TEAM
            - heading "The Evolution of Air" [level=3] [ref=e212]
            - paragraph [ref=e213]: How pressurized gas revolutionized athletic performance forever.
        - generic [ref=e214]:
          - generic [ref=e215] [cursor=pointer]:
            - 'img "Into the Void: Interview with Aethra Lead Designer" [ref=e217]'
            - generic [ref=e218]:
              - paragraph [ref=e219]: Interviews
              - 'heading "Into the Void: Interview with Aethra Lead Designer" [level=4] [ref=e220]'
              - paragraph [ref=e221]: 2024-11-02
          - generic [ref=e222] [cursor=pointer]:
            - 'img "Architected for the 1%: The Vault Manifesto" [ref=e224]'
            - generic [ref=e225]:
              - paragraph [ref=e226]: Culture
              - 'heading "Architected for the 1%: The Vault Manifesto" [level=4] [ref=e227]'
              - paragraph [ref=e228]: 2024-11-20
    - generic [ref=e230]:
      - generic [ref=e231]: vpn_key
      - heading "Unlock The Vault" [level=2] [ref=e232]
      - paragraph [ref=e233]: Join the elite. Gain exclusive early access to hyper-limited drops, collaborations, and private events.
      - generic [ref=e234]:
        - textbox "ENTER YOUR EMAIL" [ref=e235]
        - button "REQUEST ACCESS arrow_forward" [ref=e236]:
          - text: REQUEST ACCESS
          - generic [ref=e237]: arrow_forward
      - paragraph [ref=e238]: By joining, you agree to our Terms of Service and Privacy Policy.
  - contentinfo [ref=e239]:
    - generic [ref=e240]:
      - generic [ref=e241]: VAULT
      - paragraph [ref=e242]: © 2024 VAULT ELITE. ALL RIGHTS RESERVED.
    - generic [ref=e244]:
      - link "PRIVACY" [ref=e245] [cursor=pointer]:
        - /url: "#"
      - link "TERMS" [ref=e246] [cursor=pointer]:
        - /url: "#"
      - link "AUTHENTICITY" [ref=e247] [cursor=pointer]:
        - /url: "#"
      - link "CAREERS" [ref=e248] [cursor=pointer]:
        - /url: "#"
  - button "Open Next.js Dev Tools" [ref=e254] [cursor=pointer]:
    - img [ref=e255]
  - alert [ref=e258]
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
> 12 |     await page.getByRole('button', { name: 'shopping_bag' }).click();
     |                                                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  43 |     await expect(page.getByText('Future-Tech Athletics')).toBeVisible();
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