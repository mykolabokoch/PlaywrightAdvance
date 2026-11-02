import {test, expect} from '@playwright/test';
test('PUT Example 1', async ({request})=> {
const response = await request.put('https://api.restful-api.dev/objects/ff808181a09d98f701a187ba5a934d7b',
    {
        headers: {"Content-Type": "application/json"},
        data: {
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 2049.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB",
    "color": "silver"
  }
}}
)
var responseData = await response.json()
console.log(responseData)
// var fieldValue = "Hard disk size"
var cpuModel = responseData.updatedAt
console.log(cpuModel)
});