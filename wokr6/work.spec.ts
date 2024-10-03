import {test, expect } from "@playwright/test";

const testData = {
    firstName:"frank",
    lastName:"lampard",
    address:"prospektmira,28",
    number:"64050"
}
test.describe ('user register',()=>{
    test.beforeEach(async ({page})=>{
        await page.goto('file:///D:/noob11/tests/wokr6/index.html')
    })
    test.skip('register',async ({page})=>{
        await page.fill('#firstName',testData.firstName);
        await page.fill('#lastName',testData.lastName);
        await page.fill('#address',testData.address);
        await page.fill('#number',testData.number);
        await page.click('#register')
 
        const firstNameText = await page.locator("#displayFirstName").textContent()
        const lastNameText = await page.locator("#displayLastName").textContent()
        const addressText = await page.locator("#displayAddress").textContent()
        const numberText = await page.locator("#displayNumber").textContent()
        
        await page.waitForTimeout(3000)

        await expect(firstNameText).toEqual(testData.firstName)
        await expect(lastNameText).toEqual(testData.lastName)
        await expect(addressText).toEqual(testData.address)
        await expect(numberText).toEqual(testData.number)
    });
    test.skip('register with empty',async({page})=>{
        await page.fill('#firstName',testData.firstName);
        await page.fill('#lastName',testData.lastName);
        await page.click("#register")
        const error = await page.locator ('#error p').textContent();
        expect (error).toBe("Please fill in all fields.")
    });
    test.skip('register with all empty',async({page})=>{
        await page.click("#register")
        const error = await page.locator ('#error p').textContent();
        expect (error).toBe("Please fill in all fields.")
    });

})
