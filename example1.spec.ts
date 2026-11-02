// import { test, expect } from '@playwright/test';
import {test} from '../myFixture';

test('has title', async ({ qaURL }) => {
  console.log("success")
});

// test('get started link', async ({ qaURL }) => {
//   await page.goto('/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
