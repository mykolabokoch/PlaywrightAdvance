import {test} from '@playwright/test';
test('E2E test', async ({page})=> {
await page.goto('https://www.saucedemo.com/');
await page.pause();
await page.locator('#user-name').fill(process.env.username || 'standard_user');
await page.locator('#password').fill(process.env.password || 'secret_sauce');
await page.locator("#login-button").click();
//add items to the cart
await page.locator('#add-to-cart-sauce-labs-backpack').click();
//click on cart logo
await page.locator('#shopping_cart_container').click();
//click on checkout
await page.locator('#checkout').click();
//enter details
await page.locator('#first-name').fill('mykola');
await page.locator('#last-name').fill('bokoch');
await page.locator("#postal-code").fill('574884');
//click on continue
await page.locator('#continue').click();
//clikc on finish
await page.locator('#finish').click();
//validate the message, click on back to home
const confirmmessage = await page.locator('.complete-header').textContent();
console.log('message is '+ confirmmessage);
await page.locator('#back-to-products').click();
//logout
// await page.locator('#react-burger-menu-btn').click();
// await page.locator('#logout_sidebar_link').click();
// await page.close();
})