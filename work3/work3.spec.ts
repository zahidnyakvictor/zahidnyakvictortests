import {test,expect} from "@playwright/test"

test.skip("advanced in",async ({page})=>{
    await page.goto ("file:///D:/noob11/tests/work3/index.html")
    await page.hover ('button#hover-me');
    expect (await page.textContent ('button#hover-me')).toContain('Text Changed!');

    await page.click ('button#context-menu',{button:"right"});
    expect (await page.getByText("Context Menu Appears!").textContent()).toContain("Context Menu Appears!");

    await page.dblclick ("button#double-click");
    expect(await page.locator("img"));
     
})

test.skip("drag and drop",async ({page})=>{
    await page.goto("file:///D:/noob11/tests/work3/index.html");
    await page.dragAndDrop(".drag-source",".drop-target");
    expect(await page.textContent('.drop-target')).toContain('Success');

})

test.skip ("hand",async ({page})=>{
    await page.goto ("file:///D:/noob11/tests/work3/index.html");
    const iframeElement = await page.frame({name:'iframeName'});
    const inputSelector = '#iframe-input';
    if (iframeElement){
        await iframeElement.type (inputSelector,"Hello Playwhright")
        expect (await iframeElement.locator(inputSelector).inputValue()).toContain("Hello Playwhright");

    } else {
        console.error ('iframe is not available')
    }
})