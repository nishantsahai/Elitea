import { test, expect } from '@playwright/test';

test.describe('EPAM Services - Client Work navigation', () => {
  test('should open Client Work page from Services menu', async ({ page }) => {
    await page.goto('https://www.epam.com/');
    await page.getByRole('link', { name: 'Services' }).first().click();
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
    await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
  });
});
