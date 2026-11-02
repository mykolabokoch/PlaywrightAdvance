import {test, expect} from '@playwright/test';
import { PageManager } from '../PageObjects/PageManager';

test('Sauce Demo E2E', async ({page})=> {
    const pm = new PageManager(page);

    pm.instanceToLoginPage().openSauceDemoApp();
    await page.waitForTimeout(3000);
    pm.instanceToLoginPage().loginToApplication('standard_user', 'secret_sauce');
    await page.waitForTimeout(3000);
    await pm.instanceToHomePage().addProductToCart();
    await pm.instancetoYourCartPage().proceedToCheckout();
    await pm.instancetoYourInfoPage().enterYourDetails('mykola', 'hfhf', '464343');
    await pm.instancetoOverviewPage().placeTheOrder();
    await pm.instancetoConfirmationPage().navigateToHomePage();
    await pm.instanceToHomePage().logoutFromApplication();
    pm.instanceToLoginPage().closeTheApplication();
});
// test('Sauce Demo E2E 2', async({page}) =>{
//     const loginPageInstance = new LoginPage(page);
//     const homePageInstance = new HomePage(page);
//     loginPageInstance.openSauceDemoApp();
//     await page.waitForTimeout(3000);
//     loginPageInstance.loginToApplication('standard_user', 'secret_sauce');
//     await page.waitForTimeout(3000);
//     await homePageInstance.logoutFromApplication();
// });

test('Sauce Demo E2E 3', async ({page})=> {
    const pm = new PageManager(page);

    pm.instanceToLoginPage().openSauceDemoApp();
    await page.waitForTimeout(3000);
    pm.instanceToLoginPage().loginToApplication('standard_user', 'secret_sauce');
    await page.waitForTimeout(3000);
    await pm.instanceToHomePage().addProductToCart();
    await pm.instancetoYourCartPage().proceedToCheckout();
    await pm.instancetoYourInfoPage().enterYourDetails('mykola', 'hfhf', '464342');
    await expect(page).toHaveScreenshot({maxDiffPixels: 100});
    pm.instanceToLoginPage().closeTheApplication();
});