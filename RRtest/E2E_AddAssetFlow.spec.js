import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://railroadsoftware.io/staging/trackAsset/client/user/login/entry?time=1756374172');
  await page.getByRole('textbox', { name: '' }).click();
  await page.getByRole('textbox', { name: '' }).fill('ussugar@railroadsoftware.com');
  await page.getByRole('textbox', { name: '' }).click();
  await page.getByRole('textbox', { name: '' }).fill('P23#Ns7oW@');
  await page.getByRole('button', { name: 'Sign In' }).click();
//  await page.getByRole('link', { name: 'Assets ' }).click();

await page.locator('[data-toggle="offcanvas"][title="Menu Collapse"]').click();


    await page.getByRole('link', { name: 'Assets' }).click();
    await console.log(':white_tick: Expanded Assets menu');

     // Click on the All Assets link
    await page.getByRole('link', { name: 'All' }).click();
    await console.log(':white_tick: Clicked All Assets link');
    

   await page.waitForURL('**/#equipments/equipments/index', { timeout: 60000 });
   await console.log(':white_tick: Successfully navigated to All Assets page');
   await page.waitForTimeout(10000);

//Add New Asset


await page.getByRole('button', { name: 'Manage ' }).click();
  await page.getByText('New Asset').click();
   await console.log('Clicked On New Asset');
    
//await page.waitForTimeout(40000); // waits for 40 seconds
 await console.log('wait 40 seconds');

  await page.locator('a').filter({ hasText: 'Please select Asset type' }).click();

  await page.locator('a').filter({ hasText: 'Please select Asset type' }).click();

  await page.locator('#ce_company_equipment_type_id_chosen').getByRole('textbox').click();
  await page.locator('#ce_company_equipment_type_id_chosen').getByRole('textbox').fill('Swit');
  await page.locator('#ce_company_equipment_type_id_chosen').getByText('Switches', { exact: true }).click();
  await page.locator('a').filter({ hasText: /^Select group$/ }).click();


//  await page.getByRole('link', { name: ' All Assets' }).click();
});