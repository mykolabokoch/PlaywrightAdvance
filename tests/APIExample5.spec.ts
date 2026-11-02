import {test, expect} from '@playwright/test';
test('DELETE Example 1', async ({request})=> {
const username = "email.com"
const password = "API token"
const credentials = `${username}:${password}`
const base64 = Buffer.from(credentials).toString('base64')
const response = await request.get('https://api.restful-api.dev/objects/ff808181a09d98f701a187ba5a934d7b',
    {
        headers: {
            'Authorization': `Basic ${base64}`
        }
    }
)
var responseData = await response.json()
console.log(responseData)
});