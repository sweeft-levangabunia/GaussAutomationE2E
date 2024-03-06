import xpaths from "./xpaths";
const url = require('../../config/url');


export async function Open(page) {
    let className;

    await page.waitForSelector(xpaths.ConnectedTVSection, xpaths.VisibleState);

    className = await page.locator(xpaths.ConnectedTVMenuDropdown).getAttribute(xpaths.Class);

    if (className.includes(xpaths.ShowClass)) {
        await page.locator(xpaths.ConnectedTVSectionArrow).click();
        await page.locator(xpaths.ConnectedTVDNLTV).click();
    } else {
        await page.locator(xpaths.ConnectedTVDNLTV).click();
    }

    await page.waitForSelector(xpaths.ConnectedTVDNLTVText)
    await page.waitForTimeout(1000)
}

export async function CreateSimulator(page, DNLTVModel) {
    const frame = await page.frameLocator(url.Iframe(config))
    const frameHandle = await page.waitForSelector(url.Iframe(config))
    const frameWait = await frameHandle.contentFrame()

    await frame.locator(xpaths.ConnectedTVCreateNew).click()
    await frame.locator(xpaths.ConnectedTVCreateSimulatorName).fill(DNLTVModel.Name)
    await frame.locator(xpaths.ConnectedTVCreateSimulatorGender).click()
    await frame.locator(xpaths.ConnectedTVCreateSimulatorGenderValue).click()
    await frame.locator(xpaths.ConnectedTVCreateSimulatorDNLTVBudget).fill(DNLTVModel.DNLTVBudget)
    await frame.locator(xpaths.ConnectedTVCreateSimulatorDNLTVFrequency).fill(DNLTVModel.DNLTVFrecuency)
    await frame.locator(xpaths.ConnectedTVCreateNewSave).click()
    
    await frameWait.waitForSelector(xpaths.ConnectedTVCreateSuccesMSG, xpaths.VisibleState)
    
    let SuccessMSG = await frame.locator(xpaths.ConnectedTVCreateSuccesMSG).textContent()
    if (SuccessMSG != xpaths.SuccesMSG) {
        throw new Error("Success MSG not displayed")
    }
}
