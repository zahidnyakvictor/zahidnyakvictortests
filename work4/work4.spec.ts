import {test,expect} from '@playwright/test';

test.skip ('handing',async ({page})=>{
    await page.goto('file:///D:/noob11/tests/work4/index.html');
let alertMassage='';
    page.on ('dialog',async (dialog)=>{
        expect (dialog.type ()).toBe ("alert");
        alertMassage = await dialog.message();
        await dialog.accept();
    })
await page.click ('#show-alert');
expect(alertMassage).toBe('This is a simple alert.')
});     
 
test.skip ('cifirm',async ({page})=>{
    await page.goto('file:///D:/noob11/tests/work4/index.html');
    let alertMessage= '';
    page.on ("dialog",async(dialog)=>{
        alertMessage = dialog.message();
        await dialog.dismiss();

    })
    await page.click('#show-confirm');
    expect(alertMessage).toBe ('You clicked Cancel.');
})
 
test.skip ("pop-uptest",async ({page})=>{
    await page.goto ('file:///D:/noob11/tests/work4/index.html');
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.click ('#open-popup'),
    ])
    await popup.waitForLoadState();
    await popup.close
})
 
