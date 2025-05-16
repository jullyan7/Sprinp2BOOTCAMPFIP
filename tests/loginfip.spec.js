import { test, expect } from '@playwright/test';

test('Login PDD', async ({ page }) => {
  await page.goto('https://pddtestev2.gerenciatiunifip.opalstacked.com/login/');
 // digitar email 
   await page.getByRole('textbox', { name: 'Email institucional' }).fill('jullyanbrl@gmail.com');
 // digitar senha 
  await page.getByRole('textbox', { name: 'Senha' }).fill('Jully9708+)');
 // clicar em login 
  await page.getByRole('button', { name: 'Entrar' }).click();
  // verificar se logo da fip aparece 
  await expect(page.getByRole('navigation').getByRole('link').first()).toBeVisible();
});