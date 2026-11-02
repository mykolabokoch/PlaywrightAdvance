import {test} from '@playwright/test';
import fs from "fs";
import {parse} from "csv-parse/sync";

const data = parse(fs.readFileSync("tests/tests/testData.csv"),{
    columns: true,
    skip_empty_lines: true
}) as any[];

data.forEach((record)=>{
test(`Navigate with: ${record.username}`, async ({page})=> {
await page.goto('https://www.saucedemo.com/');
await page.fill('#user-name', record.username);
await page.fill('#password', record.password);
await page.close();
});
})

// for(const record of data){

// test(`Navigate with: ${record.username}`, async ({page})=> {
// console.log(data)
// await page.goto('https://www.saucedemo.com/');
// await page.fill('#user-name', record.username);
// await page.fill('#password', record.password);
// await page.close();
// });
// }
