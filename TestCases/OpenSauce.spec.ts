import {test} from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';
import { log } from 'node:console';
import { HomePage } from '../PageObjects/HomePage';
import { YourCartPage } from '../PageObjects/YourCartPage';
import { YourInfoPage } from '../PageObjects/YourInfoPage';
import { OverviewPage } from '../PageObjects/OverviewPage';
import { OrderConfirmationPage } from '../PageObjects/OrderConfirmationPage';

test('Sauce Demo E2E', async ({page})=> {
    const loginPageInstance = new LoginPage(page);
    const homePageInstance = new HomePage(page);
    const yourInfoPageInstance = new YourInfoPage(page);
    const yourCartInstance = new YourCartPage(page);
    const overviewPageInstance = new OverviewPage(page);
    const orderConfirmationPageInstance = new OrderConfirmationPage(page);
    loginPageInstance.openSauceDemoApp();
    await page.waitForTimeout(3000);
    loginPageInstance.loginToApplication('standard_user', 'secret_sauce');
    await page.waitForTimeout(3000);
    await homePageInstance.addProductToCart();
    await yourCartInstance.proceedToCheckout();
    await yourInfoPageInstance.enterYourDetails('mykola', 'hfhf', '464343');
    await overviewPageInstance.placeTheOrder();
    await orderConfirmationPageInstance.navigateToHomePage();
    await homePageInstance.logoutFromApplication();
    loginPageInstance.closeTheApplication();
});
test('Sauce Demo E2E 2', async({page}) =>{
    const loginPageInstance = new LoginPage(page);
    const homePageInstance = new HomePage(page);
    loginPageInstance.openSauceDemoApp();
    await page.waitForTimeout(3000);
    loginPageInstance.loginToApplication('standard_user', 'secret_sauce');
    await page.waitForTimeout(3000);
    await homePageInstance.logoutFromApplication();
});