import {test, expect} from "@playwright/test"

test.skip('proba', async({page})=>{
    await page.goto("https://demo.playwright.dev/todomvc")
    await page.goto("https://demo.playwright.dev/todomvc")
    

})