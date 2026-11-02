import {test, expect} from '@playwright/test';
test('DELETE Example 1', async ({request})=> {
const response = await request.delete('https://api.restful-api.dev/objects/ff808181a09d98f701a187ba5a934d7b')
var responseData = await response.json()
// var fieldValue = "Hard disk size"
var nameValue = responseData.message
console.log(nameValue)
});