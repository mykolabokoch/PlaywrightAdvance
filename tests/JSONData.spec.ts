import {test} from '@playwright/test';
import jsonArray from "../tests/testData2.json"


// jsonArray.forEach((data)=>{
// test(`Navigate to saucedemo ${data.username}`, async ({page})=> {
// await page.goto('https://www.saucedemo.com/');
// await page.fill('#user-name', data.username);
// await page.fill('#password', data.password);
// await page.close();
// });
// })

for(const data of jsonArray){
test(`Navigate to saucedemo ${data.username}`, async ({page})=> {
await page.goto('https://www.saucedemo.com/');
await page.fill('#user-name', data.username);
await page.fill('#password', data.password);
await page.close();
});
}