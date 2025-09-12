import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    //Login
  await page.goto('https://railroadsoftware.io/staging/trackAsset/client/user/login/entry?time=1756374172');
  await page.getByRole('textbox', { name: '' }).click();
  await page.getByRole('textbox', { name: '' }).click();
  await page.getByRole('textbox', { name: '' }).fill('ussugar@railroadsoftware.com');
  await page.getByRole('textbox', { name: '' }).click();
  await page.getByRole('textbox', { name: '' }).click();
  await page.getByRole('textbox', { name: '' }).fill('P23#Ns7oW@');
  await page.getByRole('button', { name: 'Sign In' }).click();

  console.log('Login PASS');


  //Navigate to Asset page
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('link', { name: 'Assets ' }).click();
  await page.getByRole('link', { name: ' All Assets' }).click();

  //Add New Asset
  await page.getByRole('button', { name: 'Manage ' }).click();
  await page.getByText('New Asset').click();

  console.log('Add New Asset Page PASS');


  //Select Asset type

  await page.locator('a').filter({ hasText: 'Please select Asset type' }).click();
  await page.locator('#ce_company_equipment_type_id_chosen').getByRole('textbox').click();
  await page.locator('#ce_company_equipment_type_id_chosen').getByRole('textbox').fill('swit');
  await page.locator('#ce_company_equipment_type_id_chosen').getByText('Switches', { exact: true }).click();
   await console.log('Asset type selected PASS');

//Select Asset Group

  await page.locator('a').filter({ hasText: /^Select group$/ }).click(); 
  await page.locator('#ce_group_chosen').getByText('3434343434ttre2@').click();
await console.log('Asset Group selected');

console.log('Asset Group added PASS');


//Add Asset Name

  await page.getByRole('textbox', { name: 'Please Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Please Enter Name' }).fill('Hdq210xkiii');
console.log('Asset name added');


console.log('Asset name added PASS');


//Select Region

  await page.locator('a').filter({ hasText: 'Select region' }).click();
  await page.locator('#ce_company_region_id_chosen').getByText('6th').click();
  await page.locator('a').filter({ hasText: 'Select location' }).click();

console.log('Region added PASS');


//await page.locator('#ce_company_location_id_chosen').getByText('\'Ali Sabieh').click();
   
  
//  await page.getByRole('button', { name: 'Save' }).click();
//    await console.log('Add new Asset successfully');

//Select Location


await page.locator('#ce_company_location_id_chosen').getByText('INKYSLOCATION').click();
console.log('location added PASS');


//Save Asset

// await page.getByRole('button', { name: 'Save' }).click();

await page.click('button.save', { timeout: 60000 }); // 60 seconds


  // await console.log('Add new Asset successfully');
 await page.goto('https://railroadsoftware.io/staging/trackAsset/client/#miscequipments/equipments_v3/index%7Ctypeid%7C1TjhVCPlNorxrbQa_WxzbP7F5KMjZWHZUjcHH0fn4_o%7Ctabelement%7C');

});






// //Update the added Asset 
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


// //Delete