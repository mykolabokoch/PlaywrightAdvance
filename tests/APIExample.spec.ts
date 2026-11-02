import {test, expect} from '@playwright/test';
// test('Example 1', async ({request})=> {
// const response = await request.get('https://api.restful-api.dev/objects/')
// console.log(await response.json())
// console.log(await response.status())
// expect(response.status()).toBe(200)
// });
// test('Example 2', async ({request})=> {
// const response = await request.get('https://api.restful-api.dev/objects/7')
// var responseData = await response.json()
// var nameValue = responseData.name
// var mnfYear = responseData.data.year
// console.log(nameValue)
// console.log(mnfYear)

// });
test('Example 3', async ({request})=> {
const response = await request.get('https://api.restful-api.dev/objects?id=3&id=5&id=10')
var responseData = await response.json()
var nameValue = responseData[1].name
var mnfYear = responseData[1].data.color
console.log(nameValue)
console.log(mnfYear)
});