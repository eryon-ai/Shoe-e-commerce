# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: wishlist.spec.ts >> Wishlist Flow >> add item to wishlist from market and view in wishlist
- Location: tests/wishlist.spec.ts:4:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('nav a[href="/wishlist"]').first()
    - locator resolved to <a href="/wishlist" aria-label="View Wishlist, 1 items" class="text-on-surface-variant hover:text-on-surface transition-colors hover:scale-105 transition-transform duration-300 relative flex items-center">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    49 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "VAULT" [ref=e4]:
        - /url: /
      - button "close" [ref=e5]:
        - generic [ref=e6]: close
    - generic [ref=e7]:
      - link "DROPS" [ref=e8]:
        - /url: /drops/limited
      - link "COLLECTIONS" [ref=e9]:
        - /url: /collections
      - link "ARCHIVE" [ref=e10]:
        - /url: /stories
      - link "MARKET" [ref=e11]:
        - /url: /market
      - generic [ref=e13]:
        - link "favorite WISHLIST (1)" [ref=e14]:
          - /url: /wishlist
          - generic [ref=e15]: favorite
          - text: WISHLIST (1)
        - link "person ACCOUNT" [ref=e16]:
          - /url: /login
          - generic [ref=e17]: person
          - text: ACCOUNT
        - link "shopping_bag CART (0)" [ref=e18]:
          - /url: /checkout
          - generic [ref=e19]: shopping_bag
          - text: CART (0)
  - main [ref=e20]:
    - generic [ref=e21]:
      - generic [ref=e22]:
        - navigation [ref=e23]:
          - link "HOME" [ref=e24]:
            - /url: /
          - generic [ref=e25]: chevron_right
          - generic [ref=e26]: MARKET
        - heading "MARKETPLACE" [level=1] [ref=e27]
      - generic [ref=e29]:
        - combobox [ref=e30] [cursor=pointer]:
          - option "Trending" [selected]
          - 'option "Price: Low to High"'
          - 'option "Price: High to Low"'
          - option "Newest Arrivals"
        - generic: expand_more
    - generic [ref=e32]:
      - article [ref=e33] [cursor=pointer]:
        - generic [ref=e35]: NEW
        - button "favorite" [ref=e36]:
          - generic [ref=e37]: favorite
        - link "Aero Glide vX" [ref=e38]:
          - /url: /product/aero-glide-vx
          - img "Aero Glide vX" [ref=e40]
        - generic [ref=e41]:
          - heading "Aero Glide vX" [level=4] [ref=e42]
          - paragraph [ref=e43]: Phantom Black / Neon Green
          - generic [ref=e44]:
            - generic [ref=e45]: $350
            - button "add_shopping_cart ADD" [ref=e46]:
              - generic [ref=e47]: add_shopping_cart
              - text: ADD
      - article [ref=e48] [cursor=pointer]:
        - button "favorite" [ref=e49]:
          - generic [ref=e50]: favorite
        - link "Strata Runner" [ref=e51]:
          - /url: /product/strata-runner
          - img "Strata Runner" [ref=e53]
        - generic [ref=e54]:
          - heading "Strata Runner" [level=4] [ref=e55]
          - paragraph [ref=e56]: Concrete Gray / White
          - generic [ref=e57]:
            - generic [ref=e58]: $280
            - button "add_shopping_cart ADD" [ref=e59]:
              - generic [ref=e60]: add_shopping_cart
              - text: ADD
      - article [ref=e61] [cursor=pointer]:
        - button "favorite" [ref=e62]:
          - generic [ref=e63]: favorite
        - link "Phantom Strider" [ref=e64]:
          - /url: /product/phantom-strider
          - img "Phantom Strider" [ref=e66]
        - generic [ref=e67]:
          - heading "Phantom Strider" [level=4] [ref=e68]
          - paragraph [ref=e69]: White/Silver
          - generic [ref=e70]:
            - generic [ref=e71]: $280
            - button "add_shopping_cart ADD" [ref=e72]:
              - generic [ref=e73]: add_shopping_cart
              - text: ADD
      - article [ref=e74] [cursor=pointer]:
        - generic [ref=e75]:
          - generic [ref=e76]: LIMITED
          - generic [ref=e77]: NEW
        - button "favorite" [ref=e78]:
          - generic [ref=e79]: favorite
        - link "Nexus High" [ref=e80]:
          - /url: /product/nexus-high
          - img "Nexus High" [ref=e82]
        - generic [ref=e83]:
          - heading "Nexus High" [level=4] [ref=e84]
          - paragraph [ref=e85]: Ultraviolet / Obsidian
          - generic [ref=e86]:
            - generic [ref=e87]: $420
            - button "add_shopping_cart ADD" [ref=e88]:
              - generic [ref=e89]: add_shopping_cart
              - text: ADD
      - article [ref=e90] [cursor=pointer]:
        - button "favorite" [ref=e91]:
          - generic [ref=e92]: favorite
        - link "NovaKnit Stratos" [ref=e93]:
          - /url: /product/novaknit-stratos
          - img "NovaKnit Stratos" [ref=e95]
        - generic [ref=e96]:
          - heading "NovaKnit Stratos" [level=4] [ref=e97]
          - paragraph [ref=e98]: Cloud White / Carbon
          - generic [ref=e99]:
            - generic [ref=e100]: $450
            - button "add_shopping_cart ADD" [ref=e101]:
              - generic [ref=e102]: add_shopping_cart
              - text: ADD
      - article [ref=e103] [cursor=pointer]:
        - button "favorite" [ref=e104]:
          - generic [ref=e105]: favorite
        - link "Crimson Velocity" [ref=e106]:
          - /url: /product/crimson-velocity
          - img "Crimson Velocity" [ref=e108]
        - generic [ref=e109]:
          - heading "Crimson Velocity" [level=4] [ref=e110]
          - paragraph [ref=e111]: Blood Red
          - generic [ref=e112]:
            - generic [ref=e113]: $195
            - button "add_shopping_cart ADD" [ref=e114]:
              - generic [ref=e115]: add_shopping_cart
              - text: ADD
      - article [ref=e116] [cursor=pointer]:
        - generic [ref=e118]: LIMITED
        - button "favorite" [ref=e119]:
          - generic [ref=e120]: favorite
        - link "Aethra Void Walker" [ref=e121]:
          - /url: /product/aethra-void-walker
          - img "Aethra Void Walker" [ref=e123]
        - generic [ref=e124]:
          - heading "Aethra Void Walker" [level=4] [ref=e125]
          - paragraph [ref=e126]: Cyber Black
          - generic [ref=e127]:
            - generic [ref=e128]: $850
            - button "add_shopping_cart ADD" [ref=e129]:
              - generic [ref=e130]: add_shopping_cart
              - text: ADD
      - article [ref=e131] [cursor=pointer]:
        - generic [ref=e133]: NEW
        - button "favorite" [ref=e134]:
          - generic [ref=e135]: favorite
        - link "Heavy Step X1" [ref=e136]:
          - /url: /product/heavy-step-x1
          - img "Heavy Step X1" [ref=e138]
        - generic [ref=e139]:
          - heading "Heavy Step X1" [level=4] [ref=e140]
          - paragraph [ref=e141]: Industrial Orange / Black
          - generic [ref=e142]:
            - generic [ref=e143]: $310
            - button "add_shopping_cart ADD" [ref=e144]:
              - generic [ref=e145]: add_shopping_cart
              - text: ADD
      - article [ref=e146] [cursor=pointer]:
        - generic [ref=e147]:
          - generic [ref=e148]: LIMITED
          - generic [ref=e149]: NEW
        - button "favorite" [ref=e150]:
          - generic [ref=e151]: favorite
        - link "Quantum Aero-X" [ref=e152]:
          - /url: /product/quantum-aero-x
          - img "Quantum Aero-X" [ref=e154]
        - generic [ref=e155]:
          - heading "Quantum Aero-X" [level=4] [ref=e156]
          - paragraph [ref=e157]: Gold/Black / Platinum
          - generic [ref=e158]:
            - generic [ref=e159]: $1200
            - button "add_shopping_cart ADD" [ref=e160]:
              - generic [ref=e161]: add_shopping_cart
              - text: ADD
      - article [ref=e162] [cursor=pointer]:
        - generic [ref=e164]: LIMITED
        - button "favorite" [ref=e165]:
          - generic [ref=e166]: favorite
        - link "Apex Synthwave" [ref=e167]:
          - /url: /product/apex-synthwave
          - img "Apex Synthwave" [ref=e169]
        - generic [ref=e170]:
          - heading "Apex Synthwave" [level=4] [ref=e171]
          - paragraph [ref=e172]: Neon Blue/Pink
          - generic [ref=e173]:
            - generic [ref=e174]: $950
            - button "add_shopping_cart ADD" [ref=e175]:
              - generic [ref=e176]: add_shopping_cart
              - text: ADD
  - contentinfo [ref=e177]:
    - generic [ref=e178]:
      - generic [ref=e179]: VAULT
      - paragraph [ref=e180]: © 2024 VAULT ELITE. ALL RIGHTS RESERVED.
    - generic [ref=e182]:
      - link "PRIVACY" [ref=e183]:
        - /url: "#"
      - link "TERMS" [ref=e184]:
        - /url: "#"
      - link "AUTHENTICITY" [ref=e185]:
        - /url: "#"
      - link "CAREERS" [ref=e186]:
        - /url: "#"
  - button "Open Next.js Dev Tools" [ref=e192] [cursor=pointer]:
    - img [ref=e193]
  - alert [ref=e198]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Wishlist Flow', () => {
  4  |   test('add item to wishlist from market and view in wishlist', async ({ page, isMobile }) => {
  5  |     // Navigate directly to market
  6  |     await page.goto('/market');
  7  |     await page.evaluate(() => window.localStorage.clear());
  8  |     await page.reload();
  9  | 
  10 |     // Find the first product heart icon and click it
  11 |     // Using a specific product if possible, or just the first heart button
  12 |     const firstHeart = page.locator('button:has(span.material-symbols-outlined:has-text("favorite"))').first();
  13 |     await firstHeart.click();
  14 | 
  15 |     // Navigate to wishlist
  16 |     if (isMobile) {
  17 |       await page.getByRole('button', { name: 'menu' }).click();
  18 |     }
> 19 |     await page.locator('nav a[href="/wishlist"]').first().click();
     |                                                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  20 |     await expect(page).toHaveURL(/.*wishlist/);
  21 | 
  22 |     // Expect the empty state to NOT be there
  23 |     await expect(page.getByText('WISHLIST IS CURRENTLY EMPTY')).not.toBeVisible();
  24 |     
  25 |     // Expect an item to exist (Add To Bag button indicates items are present)
  26 |     await expect(page.getByRole('button', { name: 'ADD TO BAG' })).toBeVisible();
  27 |   });
  28 | });
  29 | 
```