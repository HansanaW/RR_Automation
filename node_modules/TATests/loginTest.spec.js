import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://railroadsoftware.io/staging/trackAsset/client/user/login/entry?time=1755162527');
  await page.getByRole('textbox', { name: '' }).fill('whansi933@gmail.com');
  await page.getByRole('textbox', { name: '' }).click();
  await page.getByRole('textbox', { name: '' }).fill('Hansana@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
});