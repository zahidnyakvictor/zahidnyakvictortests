import {test} from "playwright/test"; 

test.skip("automatic",async ({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc');
    const newTodo = await page.getByPlaceholder ("what needs to be done?")
    await newTodo.fill('fergi');
    await newTodo.press("Enter");
    await newTodo.fill('william');
    await newTodo.press('Enter');
    await page.waitForTimeout (3000)

    const firstTodo = page.getByTestId ('todo-item').nth(0);
    await firstTodo.getByRole("checkbox").check();
})

test.skip('handly form',async ({page})=>{
    await page.goto("https://demo.playwright.dev/todomvc");
    const placeholder = '[placeholder="What needs to be done?"]';
    await page.fill(placeholder,"dodo");
    await page.locator(placeholder).press("Enter");

    const checkbox = await page.locator ('.toggle');
    await checkbox.check();
    await page.waitForTimeout(3000);
    })
