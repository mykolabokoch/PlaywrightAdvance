import {test, expect} from '@playwright/test';
test('POST Example 1', async ({request})=> {
const response = await request.post('https://api.restful-api.dev/objects',
    {
        headers: {"Content-Type": "application/json"},
        data: {
                "name": "Apple MacBook Pro 16",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
  }
        }}
)
var responseData = await response.json()
console.log(responseData)
var fieldValue = "Hard disk size"
var cpuModel = responseData.data[fieldValue]
console.log(cpuModel)
});