import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://railroadsoftware.io/staging/trackAsset/client/user/login/entry?time=1756374172');
  await page.getByRole('textbox', { name: '' }).click();
  await page.getByRole('textbox', { name: '' }).fill('ussugar@railroadsoftware.com');
  await page.getByRole('textbox', { name: '' }).click();
  await page.getByRole('textbox', { name: '' }).fill('P23#Ns7oW@');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('link', { name: 'Assets ' }).click();
  await page.getByRole('link', { name: ' All Assets' }).click();
  await page.getByRole('button', { name: 'Manage ' }).click();
  await page.getByText('New Asset').click();
  await page.locator('a').filter({ hasText: 'Please select Asset type' }).click();
  await page.locator('#ce_company_equipment_type_id_chosen').getByRole('textbox').click();
  await page.locator('#ce_company_equipment_type_id_chosen').getByRole('textbox').fill('swi');
  await page.locator('#ce_company_equipment_type_id_chosen').getByText('Switches', { exact: true }).click();
  await page.locator('a').filter({ hasText: /^Select group$/ }).click();
  await page.locator('#ce_group_chosen').getByText('Bridge Inspection').click();
  await page.getByRole('textbox', { name: 'Please Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Please Enter Name' }).fill('demof16');
  await page.locator('a').filter({ hasText: 'Select region' }).click();
  await page.locator('#ce_company_region_id_chosen').getByText('Acker').click();
  await page.locator('a').filter({ hasText: 'Select location' }).click();
  await page.locator('#ce_company_location_id_chosen').getByText('12', { exact: true }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://railroadsoftware.io/staging/trackAsset/client/#miscequipments/equipments_v3/index|typeid|bIaghL5uHtTNRekgf3NscUstuFrbLLUhs9_LygNvgV0|tabelement|');
});