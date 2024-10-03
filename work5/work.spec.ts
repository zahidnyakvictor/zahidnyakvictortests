import {test, expect } from "@playwright/test";
import { isContext } from "vm";

test.skip('opennewpageandautomatic',async ({context,page})=>{
    await page.goto('file:///D:/noob11/tests/work5/index.html');
    const pagePromise = context.waitForEvent('page');
    await page.click ('#openNewWindow');
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title());
    await expect (newPage.getByRole('heading',{name:"Welcome to the New Page"})).toBeVisible();
})
 
test.skip("addcookies",async({page})=>{
    await page.goto("file:///D:/noob11/tests/work5/index.html");
    await page.click('#setCookie');
    const cookies = await page.context ().cookies ("file:///D:/noob11/tests/work5/index.html");
    const sessionCookie = cookies.find(cookies=>cookies.name === "session");
    console.log('Session cookie',sessionCookie);
    await expect (sessionCookie).toBeDefined()
})

