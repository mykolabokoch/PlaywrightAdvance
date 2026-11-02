import {test} from '@playwright/test';
import { PageManager } from '../PageObjects/PageManager';

test('Sauce Demo E2E 2', async({page}) =>{
    const pageManager = new PageManager(page);
    pageManager.instanceToLoginPage().openSauceDemoApp();
    await page.waitForTimeout(3000);
    pageManager.instanceToLoginPage().closeTheApplication();
});