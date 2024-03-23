import xpaths from "./xpaths";
const config = require('../../config/config');


export async function Open(page) {
    await page.waitForSelector(xpaths.ConnectedTVSection, xpaths.VisibleState);

    let exist = await page.locator(xpaths.ConnectedTVMenuDropdown).isVisible();

    if (!exist) {
        await page.locator(xpaths.ConnectedTVSectionArrow).click();
        await page.locator(xpaths.ConnectedTVDNLTV).click();
    } else {
        await page.locator(xpaths.ConnectedTVDNLTV).click();
    }

    await page.waitForSelector(xpaths.ConnectedTVDNLTVText)
}

export async function CreateSimulator(page, DNLTVModel) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
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

export async function Validate(page, DNLTVModel) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
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