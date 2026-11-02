import { Page, Locator } from "@playwright/test";
export class LoginPage{
readonly page: Page;
readonly usernametextField: Locator;
readonly passwordtextField: Locator;
readonly loginButton: Locator;
constructor(page: Page){
    this.page = page;
    this.usernametextField = page.locator('#user-name');
    this.passwordtextField = page.locator('#password');
    this.loginButton = page.locator("#login-button");
}

async openSauceDemoApp(){
await this.page.goto('https://www.saucedemo.com/');
}
async loginToApplication(usename: string, password: string){
    await this.usernametextField.fill(usename);
    await this.passwordtextField.fill(password);
    await this.page.waitForTimeout(2000);
    await this.loginButton.click();
}
async closeTheApplication(){
    await this.page.close();
}
}