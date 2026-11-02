import { Page, Locator } from "@playwright/test";

export class OrderConfirmationPage{
readonly page: Page;
readonly backToHomeButton: Locator;
readonly orderConfirmationMessage: Locator;
constructor(page: Page){
this.page = page;
this.backToHomeButton = page.locator('#back-to-products');
this.orderConfirmationMessage = page.locator('.complete-header');
}
async navigateToHomePage(){
    await this.orderConfirmationMessage.waitFor();
    await this.backToHomeButton.click();
    await this.page.waitForTimeout(2000);
}
}