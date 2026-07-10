import { test, expect } from '@playwright/test';

test.describe('Visual Regression Suite', () => {
  // We need to wait for fonts and images to load before taking screenshots.
  // We can do this by waiting for the network to be idle.
  
  test('homepage matches baseline', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    
    // The hero image floating animation might cause flakiness, 
    // we can either disable animations or mask it, but let's test a full page screenshot.
    // To prevent animation flakiness in screenshots, we can inject CSS to stop animations:
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-play-state: paused !important;
          transition: none !important;
        }
      `
    });

    // Capture the entire page to ensure no layout/z-index issues
    await expect(page).toHaveScreenshot('homepage.png', { fullPage: true, maxDiffPixels: 200 });
  });

  test('collections page matches baseline', async ({ page }) => {
    await page.goto('/collections', { waitUntil: 'networkidle' });
    await expect(page).toHaveScreenshot('collections.png', { fullPage: true, maxDiffPixels: 200 });
  });

  test('product page matches baseline', async ({ page }) => {
    // Visit specific product
    await page.goto('/product/aero-glide-vx', { waitUntil: 'networkidle' });
    
    // Stop animations to prevent flaky screenshots
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-play-state: paused !important;
          transition: none !important;
        }
      `
    });

    await expect(page).toHaveScreenshot('product-page.png', { fullPage: true, maxDiffPixels: 200 });
  });
});
