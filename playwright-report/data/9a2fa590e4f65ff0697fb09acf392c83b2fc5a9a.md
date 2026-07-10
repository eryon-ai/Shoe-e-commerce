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
      - link "VAULT" [ref=e4]:
        - /url: /
      - button "menu" [ref=e5]:
        - generic [ref=e6]: menu
  - main [ref=e7]:
    - generic [ref=e9]:
      - generic [ref=e10]:
        - generic [ref=e12]: 01 // NEW ARRIVAL
        - heading "Reimagined Comfort" [level=1] [ref=e13]:
          - text: Reimagined
          - text: Comfort
        - paragraph [ref=e14]: Experience hyper-functional aesthetics blending high-tech sportswear with atmospheric luxury. Step into the future.
        - generic [ref=e15]:
          - link "EXPLORE DROP" [ref=e16]:
            - /url: /drops/limited
          - button "play_circle WATCH VIDEO" [ref=e17]:
            - generic [ref=e18]: play_circle
            - text: WATCH VIDEO
      - link "Aero Glide vX" [ref=e22]:
        - /url: /product/aero-glide-vx
        - img "Aero Glide vX" [ref=e24] [cursor=pointer]
    - generic [ref=e27]:
      - generic [ref=e29]: ARCHITECTED FOR THE 1%
      - generic [ref=e32]: INNOVATION MEETS LUXURY
      - generic [ref=e35]: THE FUTURE OF FOOTWEAR
      - generic [ref=e38]: NO COMPROMISES
      - generic [ref=e41]: VAULT ELITE EXCLUSIVE
      - generic [ref=e44]: ARCHITECTED FOR THE 1%
      - generic [ref=e47]: INNOVATION MEETS LUXURY
      - generic [ref=e50]: THE FUTURE OF FOOTWEAR
      - generic [ref=e53]: NO COMPROMISES
      - generic [ref=e56]: VAULT ELITE EXCLUSIVE
      - generic [ref=e59]: ARCHITECTED FOR THE 1%
      - generic [ref=e62]: INNOVATION MEETS LUXURY
      - generic [ref=e65]: THE FUTURE OF FOOTWEAR
      - generic [ref=e68]: NO COMPROMISES
      - generic [ref=e71]: VAULT ELITE EXCLUSIVE
      - generic [ref=e74]: ARCHITECTED FOR THE 1%
      - generic [ref=e77]: INNOVATION MEETS LUXURY
      - generic [ref=e80]: THE FUTURE OF FOOTWEAR
      - generic [ref=e83]: NO COMPROMISES
      - generic [ref=e86]: VAULT ELITE EXCLUSIVE
    - generic [ref=e88]:
      - generic [ref=e90]:
        - heading "Curated Vault" [level=2] [ref=e91]
        - paragraph [ref=e92]: Exclusive collections defined by form and function.
      - generic [ref=e93]:
        - link "Aero Glide vX running Aero Glide vX The ultimate marathon shoe. Features our new Nitro Foam V2 and a full-length carbon plate for explosive energy return. arrow_outward" [ref=e94] [cursor=pointer]:
          - /url: /product/aero-glide-vx
          - img "Aero Glide vX" [ref=e96]
          - generic [ref=e98]:
            - generic [ref=e99]:
              - generic [ref=e100]: running
              - heading "Aero Glide vX" [level=3] [ref=e101]
              - paragraph [ref=e102]: The ultimate marathon shoe. Features our new Nitro Foam V2 and a full-length carbon plate for explosive energy return.
            - button "arrow_outward" [ref=e103]:
              - generic [ref=e104]: arrow_outward
        - link "Strata Runner Strata Runner $280" [ref=e105] [cursor=pointer]:
          - /url: /product/strata-runner
          - img "Strata Runner" [ref=e107]
          - heading "Strata Runner" [level=4] [ref=e109]
          - generic [ref=e110]: $280
        - link "Phantom Strider Ultra-lightweight track spike for the elites. Minimalist upper and aggressive traction. $280 View Specs chevron_right" [ref=e111] [cursor=pointer]:
          - /url: /product/phantom-strider
          - generic [ref=e112]:
            - heading "Phantom Strider" [level=3] [ref=e113]
            - paragraph [ref=e114]: Ultra-lightweight track spike for the elites. Minimalist upper and aggressive traction.
          - generic [ref=e115]:
            - generic [ref=e116]: $280
            - generic [ref=e117]:
              - text: View Specs
              - generic [ref=e118]: chevron_right
        - link "Nexus High Aethra Nexus High" [ref=e119] [cursor=pointer]:
          - /url: /product/nexus-high
          - img "Nexus High" [ref=e121]
          - generic [ref=e122]:
            - generic [ref=e123]: Aethra
            - heading "Nexus High" [level=3] [ref=e124]
        - link "NovaKnit Stratos $450 NovaKnit Stratos lifestyle" [ref=e125] [cursor=pointer]:
          - /url: /product/novaknit-stratos
          - img "NovaKnit Stratos" [ref=e127]
          - generic [ref=e129]: $450
          - generic [ref=e130]:
            - heading "NovaKnit Stratos" [level=3] [ref=e131]
            - paragraph [ref=e132]: lifestyle
      - link "VIEW ALL ARCHIVES arrow_forward" [ref=e133]:
        - /url: /collections
        - text: VIEW ALL ARCHIVES
        - generic [ref=e134]: arrow_forward
    - generic [ref=e140]:
      - generic [ref=e141]:
        - heading "OUR UNIVERSES" [level=2] [ref=e142]
        - generic [ref=e143]:
          - button "Nike" [ref=e144]
          - button "Vault Originals" [ref=e145]
          - button "Aethra" [ref=e146]
      - generic [ref=e148]:
        - heading "Architected for the 1%" [level=3] [ref=e150]
        - paragraph [ref=e151]: Our in-house luxury line. Merging avant-garde silhouettes with hyper-premium materials sourced globally.
        - link "ENTER UNIVERSE east" [ref=e152]:
          - /url: /brands/vault-originals
          - text: ENTER UNIVERSE
          - generic [ref=e153]: east
    - generic [ref=e154]:
      - generic [ref=e156]:
        - heading "Engineering Perfection" [level=2] [ref=e157]
        - paragraph [ref=e158]: Deconstruct the anatomy of the Aero Glide vX. Every stitch, plate, and foam cell architected for maximum efficiency.
      - generic [ref=e159]:
        - img "Technical Blueprint" [ref=e161]
        - heading "Aero-Weave Upper" [level=4] [ref=e166]
        - heading "Nitro Foam V2" [level=4] [ref=e171]
        - heading "Carbon Plate" [level=4] [ref=e176]
    - generic [ref=e177]:
      - generic [ref=e179]:
        - heading "The Journal" [level=2] [ref=e180]
        - paragraph [ref=e181]: Culture, innovation, and the stories behind the silhouettes.
      - generic [ref=e182]:
        - generic [ref=e183] [cursor=pointer]:
          - generic [ref=e184]:
            - img "The Evolution of Air" [ref=e186]
            - generic [ref=e188]: Innovation
          - generic [ref=e189]:
            - paragraph [ref=e190]: 2024-10-15 // BY EDITORIAL TEAM
            - heading "The Evolution of Air" [level=3] [ref=e191]
            - paragraph [ref=e192]: How pressurized gas revolutionized athletic performance forever.
        - generic [ref=e193]:
          - generic [ref=e194] [cursor=pointer]:
            - 'img "Into the Void: Interview with Aethra Lead Designer" [ref=e196]'
            - generic [ref=e197]:
              - paragraph [ref=e198]: Interviews
              - 'heading "Into the Void: Interview with Aethra Lead Designer" [level=4] [ref=e199]'
          - generic [ref=e200] [cursor=pointer]:
            - 'img "Architected for the 1%: The Vault Manifesto" [ref=e202]'
            - generic [ref=e203]:
              - paragraph [ref=e204]: Culture
              - 'heading "Architected for the 1%: The Vault Manifesto" [level=4] [ref=e205]'
    - generic [ref=e207]:
      - generic [ref=e208]: vpn_key
      - heading "Unlock The Vault" [level=2] [ref=e209]
      - paragraph [ref=e210]: Join the elite. Gain exclusive early access to hyper-limited drops, collaborations, and private events.
      - generic [ref=e211]:
        - textbox "ENTER YOUR EMAIL" [ref=e212]
        - button "REQUEST ACCESS arrow_forward" [ref=e213]:
          - text: REQUEST ACCESS
          - generic [ref=e214]: arrow_forward
      - paragraph [ref=e215]: By joining, you agree to our Terms of Service and Privacy Policy.
  - contentinfo [ref=e216]:
    - generic [ref=e217]:
      - generic [ref=e218]: VAULT
      - paragraph [ref=e219]: © 2024 VAULT ELITE. ALL RIGHTS RESERVED.
    - generic [ref=e221]:
      - link "PRIVACY" [ref=e222]:
        - /url: "#"
      - link "TERMS" [ref=e223]:
        - /url: "#"
      - link "AUTHENTICITY" [ref=e224]:
        - /url: "#"
      - link "CAREERS" [ref=e225]:
        - /url: "#"
  - button "Open Next.js Dev Tools" [ref=e231] [cursor=pointer]:
    - img [ref=e232]
  - alert [ref=e237]
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