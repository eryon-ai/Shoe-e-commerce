import { test, expect } from '@playwright/test';

test.describe('Authentication & Route Protection', () => {
  test('unauthenticated users are redirected from /admin to /login', async ({ page }) => {
    // Navigate directly to protected route
    await page.goto('/admin');
    
    // Expect to be redirected to login
    await expect(page).toHaveURL(/.*login/);
    await expect(page.getByText('Access Vault')).toBeVisible();
  });

  test('login form sets cookie and redirects to dashboard', async ({ page }) => {
    await page.goto('/login');
    
    // Fill form (defaultValue already has admin@vaultelite.com, but let's just click)
    await page.getByRole('button', { name: 'Enter Vault' }).click();

    // Expect redirect to dashboard
    await expect(page).toHaveURL(/.*dashboard/);
    
    // Expect dashboard content
    await expect(page.getByText('ALEX CHEN')).toBeVisible();
    
    // Verify cookie was set
    const cookies = await page.context().cookies();
    const sessionCookie = cookies.find(c => c.name === 'user-session');
    expect(sessionCookie).toBeDefined();
    expect(sessionCookie?.value).toBe('authenticated');
  });
});
