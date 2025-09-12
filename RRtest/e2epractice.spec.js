import { test, expect } from '@playwright/test';

const baseURL = 'https://railroadsoftware.io/staging/trackAsset/client';
const email = 'ussugar@railroadsoftware.com';
const password = 'P23#Ns7oW@';

test.describe('Asset Management', () => {

  // Shared login before each test
  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseURL}/user/login/entry`);
    await page.getByRole('textbox', { name: '' }).fill(email);
    await page.getByRole('textbox', { name: '' }).fill(password);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page.getByRole('button', { name: '' })).toBeVisible({ timeout: 10000 });
  });

  test('Create New Asset', async ({ page }) => {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('link', { name: 'Assets ' }).click();
    await page.getByRole('link', { name: ' All Assets' }).click();

    await page.getByRole('button', { name: 'Manage ' }).click();
    await page.getByText('New Asset').click();

    // Select Asset Type
    await page.locator('a').filter({ hasText: 'Please select Asset type' }).click();
    await page.locator('#ce_company_equipment_type_id_chosen input').fill('swit');
    await page.locator('#ce_company_equipment_type_id_chosen').getByText('Switches', { exact: true }).click();
    console.log('✅ Asset type selected');

    // Select Asset Group
    await page.locator('a').filter({ hasText: /^Select group$/ }).click();
    await page.locator('#ce_group_chosen').getByText('3434343434ttre2@').click();
    console.log('✅ Asset group selected');

    // Enter Asset Name
    const assetName = 'Hd2';
    await page.getByRole('textbox', { name: 'Please Enter Name' }).fill(assetName);
    console.log('✅ Asset name added');

    // Select Region & Location
    await page.locator('a').filter({ hasText: 'Select region' }).click();
    await page.locator('#ce_company_region_id_chosen').getByText('6th').click();
    await page.locator('a').filter({ hasText: 'Select location' }).click();
    await page.locator('#ce_company_location_id_chosen').getByText("'Ali Sabieh").click();

    // Save Asset
    await page.getByRole('button', { name: 'Save' }).click();

    // Validate new asset appears in list
    await expect(page.getByRole('link', { name: assetName })).toBeVisible({ timeout: 10000 });
    console.log('✅ New Asset added successfully');
  });

  test('Update Asset', async ({ page }) => {
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('link', { name: 'Assets ' }).click();
    await page.getByRole('link', { name: ' Switches' }).click();

    const assetName = 'Hd2';
    const updatedName = 'Hd2 update';

    await page.getByRole('link', { name: assetName }).click();
    await page.getByRole('link', { name: 'Asset Details' }).click();

    // Update Asset Name
    await page.getByRole('textbox', { name: 'Please Enter Name' }).fill(updatedName);
    await page.getByRole('button', { name: 'Update' }).click();

    // Validate update
    await expect(page.getByRole('textbox', { name: 'Please Enter Name' })).toHaveValue(updatedName);
    console.log('✅ Asset updated successfully');
  });

});




//Update the added Asset 
// test('Update test', async ({ page }) => {
//     await page.goto('https://railroadsoftware.io/staging/trackAsset/client/user/login/entry?time=1756374172');
//     await page.getByRole('textbox', { name: '' }).click();
//     await page.getByRole('textbox', { name: '' }).fill('ussugar@railroadsoftware.com');
//     await page.getByRole('textbox', { name: '' }).click();
//     await page.getByRole('textbox', { name: '' }).click();
//     await page.getByRole('textbox', { name: '' }).fill('P23#Ns7oW@');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.getByRole('button', { name: '' }).click();
//     await page.getByRole('link', { name: 'Assets ' }).click();
//     await page.getByRole('link', { name: ' Switches' }).click();
//     await page.getByRole('link', { name: 'Hd2' }).click();
//     await page.getByRole('link', { name: 'Asset Details' }).click();
//     await page.getByRole('textbox', { name: 'Please Enter Name' }).click();
//     await page.getByRole('textbox', { name: 'Please Enter Name' }).fill('Hd2 update');
//     await page.getByRole('button', { name: 'Update' }).click();
//     await page.getByRole('button', { name: 'Update' }).click();
// });