import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=facebook&oq=facebook&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDcyMjNqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'فيسبوك - تسجيل الدخول أو الاشتراك فيسبوك https://www.facebook.com ›' }).click();
  await page.getByTestId('royal_email').click();
  await page.getByTestId('royal_email').fill('test1');
  await page.getByTestId('royal_pass').click();
  await page.getByTestId('royal_pass').fill('test2');
  
});