const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('kartowka');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('ferczx');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('wermishel');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.locator('li').filter({ hasText: 'kartowka' }).getByLabel('Toggle Todo').check();
  await page.locator('li').filter({ hasText: 'ferczx' }).getByLabel('Toggle Todo').check();
  await page.locator('li').filter({ hasText: 'wermishel' }).getByLabel('Toggle Todo').check();
  await page.locator('li').filter({ hasText: 'kartowka' }).getByLabel('Toggle Todo').uncheck();
  await page.locator('li').filter({ hasText: 'ferczx' }).getByLabel('Toggle Todo').uncheck();
  await page.locator('li').filter({ hasText: 'wermishel' }).getByLabel('Toggle Todo').uncheck();
  await page.getByRole('link', { name: 'Completed' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();