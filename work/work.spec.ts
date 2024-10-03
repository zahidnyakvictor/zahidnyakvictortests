import {test} from "playwright/test";

test.skip('basic navic' ,async ({page})=>{
  await page.goto("https://gitlab.com");
  await page.waitForTimeout(5000);  
  await page.reload();
}) 

test.skip ("interectiv", async ({page})=>{
    await page.goto("https://gitlab.com");
    await page.locator('#be-navigation-desktop').getByRole('link',{name:'Get free trial'}).click();
    await page.locator('[data-testid="new-user-first-name-field"]').fill("goga");
    await page.locator('[data-testid="new-user-last-name-field"]').fill("pipshvili");

})
test.skip ('using',async ({page})=>{
     await page.goto("https://gitlab.com");
     await page.click(':has-text("Sign in")');
     await page.waitForTimeout(2000);
     })