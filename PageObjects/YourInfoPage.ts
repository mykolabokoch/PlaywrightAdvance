import { Page, Locator } from "@playwright/test";

export class YourInfoPage{
readonly page: Page;
readonly firstNametextField: Locator;
readonly lastNametextField: Locator;
readonly postalCodetextField: Locator;
readonly continueButton: Locator;
constructor(page: Page) {
    this.page = page;
    this.firstNametextField = page.locator('#first-name');
    this.lastNametextField = page.locator('#last-name');
    this.postalCodetextField = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    
}
async enterYourDetails(firstName: string, lastName: string, postalCode: string){
await this.firstNametextField.fill(firstName);
await this.lastNametextField.fill(lastName);
await this.postalCodetextField.fill(postalCode);
await this.page.waitForTimeout(2000);
await this.continueButton.click();
}
}
