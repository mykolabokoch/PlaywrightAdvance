import { Page, Locator } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { YourCartPage } from "./YourCartPage";
import { YourInfoPage } from "./YourInfoPage";
import { OverviewPage } from "./OverviewPage";
import { OrderConfirmationPage } from "./OrderConfirmationPage";

export class PageManager{
    readonly page: Page;
    readonly loginPageInstance: LoginPage;
    readonly homePageInstance: HomePage;
    readonly yourcartPageInstance: YourCartPage;
    readonly yourInfoPageInstance: YourInfoPage;
    readonly overviewPageInstance: OverviewPage;
    readonly orderConfirmationPageInstance: OrderConfirmationPage;
constructor(page: Page){
this.page = page;
this.loginPageInstance = new LoginPage(this.page);
this.homePageInstance = new HomePage(this.page);
this.yourcartPageInstance = new YourCartPage(this.page);
this.yourInfoPageInstance = new YourInfoPage(this.page);
this.overviewPageInstance = new OverviewPage(this.page);
this.orderConfirmationPageInstance = new OrderConfirmationPage(this.page);
}
instanceToLoginPage(){
    return this.loginPageInstance;
}
instanceToHomePage(){
    return this.homePageInstance;
}
instancetoYourCartPage(){
    return this.yourcartPageInstance;
}
instancetoYourInfoPage(){
    return this.yourInfoPageInstance;
}
instancetoOverviewPage(){
    return this.overviewPageInstance;
}
instancetoConfirmationPage(){
    return this.orderConfirmationPageInstance;
}
}