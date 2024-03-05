import xpaths from "./xpaths";
const sprintf = require('sprintf-js').sprintf
const config = require('../../config/config');
const url = require('../../config/url');

export async function Open(page) {
    await page.waitForSelector(xpaths.ConnectedTVSection, xpaths.VisibleState);

    let exist = await page.locator(xpaths.ConnectedTVMenuDropdown).isVisible();

    if (!exist) {
        await page.locator(xpaths.ConnectedTVSectionArrow).click();
        await page.locator(xpaths.ConnectedTVReporter).click();
    } else {
        await page.locator(xpaths.ConnectedTVReporter).click();
    }

    await page.waitForSelector(xpaths.ConnectedTVReportedText)
}

export async function CreatePlanning(page, reportedModel) {
    const frame = await page.frameLocator(url.Iframe(config))
    const frameHandle = await page.waitForSelector(url.Iframe(config))
    const frameWait = await frameHandle.contentFrame()

    await frame.locator(xpaths.ConnectedTVCreateNew).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningName).fill(reportedModel.Name)
    await frame.locator(xpaths.ConnectedTVCreatePlanningGender).click({force: true})
    await frame.locator(xpaths.ConnectedTVCreatePlanningGenderFemale).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningGenderMale).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningGender).click({force: true})
    await frame.locator(xpaths.ConnectedTVCreatePlanningAgeGroup).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningAgeGroup35_44).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningAgeGroup45_54).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningAgeGroup).click({force: true})
    await frame.locator(xpaths.ConnectedTVCreatePlanningNumber).fill(reportedModel.Number)
    await frame.locator(xpaths.ConnectedTVCreatePlanningTimePeriod).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningTimePeriodValue).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningTimePeriod).click({force: true})
    await frame.locator(xpaths.ConnectedTVCreatePlanningBudgetAllocationLtv).fill(reportedModel.BudgetAllocationLtv)
    await frame.locator(xpaths.ConnectedTVCreatePlanningBudgetAllocationTv).fill(reportedModel.BudgetAllocationTv)
    await frame.locator(xpaths.ConnectedTVCreatePlanningCurrency).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningCurrencyEuro).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningCurrency).click({force: true})
    await frame.locator(xpaths.ConnectedTVCreatePlanningPopulationGender).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningPopulationGenderMale).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningPopulationGender).click({force: true})
    await frame.locator(xpaths.ConnectedTVCreatePlanningPopulationAgeGroup).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningPopulationAgeGroup18_24).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningPopulationAgeGroup25_34).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningPopulationAgeGroup35_44).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningPopulationAgeGroup45_54).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningPopulationAgeGroup).click({force: true})
    await frame.locator(xpaths.ConnectedTVCreatePlanningEstimatedReach).fill(reportedModel.EstimatedReach)
    await frame.locator(xpaths.ConnectedTVCreateNewSave).click()

    await frameWait.waitForSelector(xpaths.ConnectedTVCreateSuccesMSG, xpaths.VisibleState)
    
    let SuccessMSG = await frame.locator(xpaths.ConnectedTVCreateSuccesMSG).textContent()
    if (SuccessMSG != xpaths.SuccesMSG) {
        throw new Error("Success MSG not displayed")
    }
}

export async function CreateTV(page, reportedModel) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    await frame.locator(xpaths.ConnectedTVCreateGlobalTVSection).click()
    await page.waitForTimeout(500);
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVTwitchBudget).fill(reportedModel.GlobalTVTwitchBudget)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVCurrency).click()
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVCurrencyEuro).click()
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVTargetReach).fill(reportedModel.GlobalTVTargetReach)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVTVBudget).fill(reportedModel.GlobalTVTVBudget)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVSchedulingType).click()
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVSchedulingTypeManual).click()
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVCTVBudget).fill(reportedModel.GlobalTVCTVBudget)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVYoutubeBudget).fill(reportedModel.GlobalTVYoutubeBudget)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVDigTvBudget).fill(reportedModel.GlobalTVDigTvBudget)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVCmpID).fill(reportedModel.GlobalTVCmpID)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVDcID).fill(reportedModel.GlobalTVDcID)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVAdvertiserID).fill(reportedModel.GlobalTVAdvertiserID)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVCtcID).fill(reportedModel.GlobalTVCtcID)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVGtcID).fill(reportedModel.GlobalTVGtcID)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVCountry).fill(reportedModel.GlobalTVCountry)
    await frame.locator(xpaths.ConnectedTVCreateSuccesMSGClose).click()
    await frame.locator(xpaths.ConnectedTVCreateNewSave).click()
    await page.waitForTimeout(1000);

    await frameWait.waitForSelector(xpaths.ConnectedTVCreateSuccesMSG, xpaths.VisibleState)
    
    let SuccessMSG = await frame.locator(xpaths.ConnectedTVCreateSuccesMSG).textContent()
    if (SuccessMSG != xpaths.SuccesMSG) {
        throw new Error("Success MSG not displayed")
    }
}

export async function Validate(page, reportedModel) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVRowName, reportedModel.Name))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVRowStatus, xpaths.Status))

    let Checked = await frame.locator(xpaths.ConnectedTVRowEnable).isChecked()
    if (Checked) {
        throw new Error("Enable is checked")
    }

    let className = await frame.locator(xpaths.ConnectedTVRowEdit).getAttribute(xpaths.Fill)
    if (!className.includes(xpaths.Enabled)) {
        throw new Error("Edit not disabled")
    }

    className = await frame.locator(xpaths.ConnectedTVRowDelete).getAttribute(xpaths.Fill)
    if (!className.includes(xpaths.Enabled)) {
        throw new Error("Delete not enabled")
    }

    className = await frame.locator(xpaths.ConnectedTVRowLaunch).getAttribute(xpaths.Fill)
    if (!className.includes(xpaths.Disabled)) {
        throw new Error("Launch not disabled")
    }

    let Enabled = await frame.locator(xpaths.ConnectedTVRowPlaning).isEnabled()
    if (!Enabled) {
        throw new Error("Planing not enabled")
    }

    Enabled = await frame.locator(xpaths.ConnectedTVRowGlobalTV).isEnabled()
    if (!Enabled) {
        throw new Error("GlobalTV not enabled")
    }

    Enabled = await frame.locator(xpaths.ConnectedTVRowConnectedTV).isEnabled()
    if (!Enabled) {
        throw new Error("ConnectedTV not enabled")
    }

    Enabled = await frame.locator(xpaths.ConnectedTVRowXMR).isEnabled()
    if (Enabled) {
        throw new Error("XMR not disabled")
    }

    await frame.locator(xpaths.ConnectedTVRowEdit).click()
    await frameWait.waitForSelector(xpaths.ConnectedTVCreatePlanningName, xpaths.VisibleState)
    await page.waitForTimeout(1000)

    let Text = await frame.locator(xpaths.ConnectedTVCreatePlanningName).inputValue()
    if (Text != reportedModel.Name) {
        throw new Error("Name text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVCreatePlanningNumber).inputValue()
    if (Text != reportedModel.Number) {
        throw new Error("Number text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVCreatePlanningEstimatedReach).inputValue()
    if (Text != reportedModel.EstimatedReach) {
        throw new Error("EstimatedReach text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVCreatePlanningBudgetAllocationTv).inputValue()
    if (Text != reportedModel.BudgetAllocationTv) {
        throw new Error("BudgetAllocationTv text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVCreatePlanningBudgetAllocationLtv).inputValue()
    if (Text != reportedModel.BudgetAllocationLtv) {
        throw new Error("BudgetAllocationLtv text is not expected")
    }

    await frame.locator(xpaths.ConnectedTVCreateGlobalTVSection).click()
    await frameWait.waitForSelector(xpaths.ConnectedTVCreateGlobalTVCTVBudget, xpaths.VisibleState)
    await page.waitForTimeout(1000);

    Text = await frame.locator(xpaths.ConnectedTVCreateGlobalTVCTVBudget).inputValue()
    if (Text != reportedModel.GlobalTVCTVBudget) {
        throw new Error("GlobalTVCTVBudget text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVCreateGlobalTVYoutubeBudget).inputValue()
    if (Text != reportedModel.GlobalTVYoutubeBudget) {
        throw new Error("GlobalTVYoutubeBudget text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVCreateGlobalTVDigTvBudget).inputValue()
    if (Text != reportedModel.GlobalTVDigTvBudget) {
        throw new Error("GlobalTVDigTvBudget text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVCreateGlobalTVCmpID).inputValue()
    if (Text != reportedModel.GlobalTVCmpID) {
        throw new Error("GlobalTVCmpID text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVCreateGlobalTVDcID).inputValue()
    if (Text != reportedModel.GlobalTVDcID) {
        throw new Error("GlobalTVDcID text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVCreateGlobalTVAdvertiserID).inputValue()
    if (Text != reportedModel.GlobalTVAdvertiserID) {
        throw new Error("GlobalTVAdvertiserID text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVCreateGlobalTVCtcID).inputValue()
    if (Text != reportedModel.GlobalTVCtcID) {
        throw new Error("GlobalTVCtcID text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVCreateGlobalTVGtcID).inputValue()
    if (Text != reportedModel.GlobalTVGtcID) {
        throw new Error("GlobalTVGtcID text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVCreateGlobalTVCountry).inputValue()
    if (Text != reportedModel.GlobalTVCountry) {
        throw new Error("GlobalTVCountry text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVCreateGlobalTVTargetReach).inputValue()
    if (Text != reportedModel.GlobalTVTargetReach) {
        throw new Error("GlobalTVTargetReach text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVCreateGlobalTVTVBudget).inputValue()
    if (Text != reportedModel.GlobalTVTVBudget) {
        throw new Error("GlobalTVTVBudget text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVCreateGlobalTVTwitchBudget).inputValue()
    if (Text != reportedModel.GlobalTVTwitchBudget) {
        throw new Error("GlobalTVTwitchBudget text is not expected")
    }
}

export async function ValidateDashboards(page, reportedModel) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    let Enabled = await frame.locator(xpaths.ConnectedTVRowPlaning).isEnabled()
    if (Enabled) {
        await frame.locator(xpaths.ConnectedTVRowPlaning).click()
    }

    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardPlaningTotalBudget, reportedModel.DashboardPlaningBudget))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardPlaningTotalBudget2, reportedModel.DashboardPlaningBudget))

    let Text = await frame.locator(xpaths.ConnectedTVDashboardPlaningTV).textContent()
    if (Text != reportedModel.DashboardPlaningTV) {
        throw new Error("DashboardPlaningTV text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVDashboardPlaningCTV).textContent()
    if (Text != reportedModel.DashboardPlaningCTV) {
        throw new Error("DashboardPlaningCTV text is not expected")
    }

    await frame.locator(xpaths.ConnectedTVDashboardGlobalTVDash).click()

    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardPlaningTotalBudget, reportedModel.DashboardGlobalTVBudget))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardPlaningTotalBudget2, reportedModel.DashboardGlobalTVBudget))

    Text = await frame.locator(xpaths.ConnectedTVDashboardPlaningTV).textContent()
    if (Text != reportedModel.DashboardGlobalTV) {
        throw new Error("DashboardGlobalTV text is not expected")
    }

    Text = await frame.locator(xpaths.ConnectedTVDashboardPlaningCTV).textContent()
    if (Text != reportedModel.DashboardGlobalCTV) {
        throw new Error("DashboardPlaningCTV text is not expected")
    }

    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardGlobalTV, reportedModel.DashboardGlobalTVOverlapTV))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardGlobalTV, reportedModel.DashboardGlobalTVOverlapCTV))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardGlobalTVICTV, reportedModel.DashboardGlobalTVOverlapICTV))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardGlobalTVOverlap, reportedModel.DashboardGlobalTVOverlap))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardGlobalTV, reportedModel.DashboardGlobalTVBought))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardGlobalTV, reportedModel.DashboardGlobalTVObtained))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardGlobalTV, reportedModel.DashboardGlobalTVContacts))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardGlobalTV, reportedModel.DashboardGlobalTVInvestment))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardGlobalTVCTVBoughts, reportedModel.DashboardGlobalCTVBought))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardGlobalTVCTVObtained, reportedModel.DashboardGlobalCTVObtained))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardGlobalTVCTVContacts, reportedModel.DashboardGlobalCTVContacts))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardGlobalTV, reportedModel.DashboardGlobalCTVInvestment))

    await frame.locator(xpaths.ConnectedTVDashboardConnectedTVDash).click()

    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardConnectedTVReach, reportedModel.DashboardConnectedTVReach))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardConnectedTVvtr, reportedModel.DashboardConnectedTVvtr))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardConnectedTVImpressions, reportedModel.DashboardConnectedTVImpressions))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardConnectedTVFrequency, reportedModel.DashboardConnectedTVFrequency))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardConnectedTVTotalBudget, reportedModel.DashboardConnectedTVTotalBudget))
    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVDashboardConnectedTV, reportedModel.DashboardConnectedTVInvestment))
}

export async function UpdatePlanning(page, reportedModel) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    await frame.locator(xpaths.ConnectedTVRowEdit).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningGender).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningGenderMale).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningGender).click({force: true})
    await frame.locator(xpaths.ConnectedTVCreatePlanningName).fill(reportedModel.Name)
    await frame.locator(xpaths.ConnectedTVCreatePlanningAgeGroup).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningAgeGroup45_54).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningAgeGroup).click({force: true})
    await frame.locator(xpaths.ConnectedTVCreatePlanningNumber).fill(reportedModel.Number)
    await frame.locator(xpaths.ConnectedTVCreatePlanningBudgetAllocationLtv).fill(reportedModel.BudgetAllocationLtv)
    await frame.locator(xpaths.ConnectedTVCreatePlanningBudgetAllocationTv).fill(reportedModel.BudgetAllocationTv)
    await frame.locator(xpaths.ConnectedTVCreatePlanningPopulationAgeGroup).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningPopulationAgeGroup35_44).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningPopulationAgeGroup45_54).click()
    await frame.locator(xpaths.ConnectedTVCreatePlanningPopulationAgeGroup).click({force: true})
    await frame.locator(xpaths.ConnectedTVCreatePlanningEstimatedReach).fill(reportedModel.EstimatedReach)
    await frame.locator(xpaths.ConnectedTVCreateNewSave).click()

    await frameWait.waitForSelector(xpaths.ConnectedTVCreateSuccesMSG, xpaths.VisibleState)
    
    let SuccessMSG = await frame.locator(xpaths.ConnectedTVCreateSuccesMSG).textContent()
    if (SuccessMSG != xpaths.SuccesMSG) {
        throw new Error("Success MSG not displayed")
    }
}

export async function UpdateTV(page, updatedReportingModel) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    await frame.locator(xpaths.ConnectedTVCreateGlobalTVSection).click()
    await page.waitForTimeout(500);
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVTwitchBudget).fill(updatedReportingModel.GlobalTVTwitchBudget)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVCurrency).click()
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVCurrencyEuro).click()
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVTargetReach).fill(updatedReportingModel.GlobalTVTargetReach)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVTVBudget).fill(updatedReportingModel.GlobalTVTVBudget)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVSchedulingType).click()
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVSchedulingTypeManual).click()
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVCTVBudget).fill(updatedReportingModel.GlobalTVCTVBudget)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVYoutubeBudget).fill(updatedReportingModel.GlobalTVYoutubeBudget)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVDigTvBudget).fill(updatedReportingModel.GlobalTVDigTvBudget)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVCmpID).fill(updatedReportingModel.GlobalTVCmpID)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVDcID).fill(updatedReportingModel.GlobalTVDcID)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVAdvertiserID).fill(updatedReportingModel.GlobalTVAdvertiserID)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVCtcID).fill(updatedReportingModel.GlobalTVCtcID)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVGtcID).fill(updatedReportingModel.GlobalTVGtcID)
    await frame.locator(xpaths.ConnectedTVCreateGlobalTVCountry).fill(updatedReportingModel.GlobalTVCountry)
    await frame.locator(xpaths.ConnectedTVCreateSuccesMSGClose).click()
    await frame.locator(xpaths.ConnectedTVCreateNewSave).click()
    await page.waitForTimeout(1000);

    await frameWait.waitForSelector(xpaths.ConnectedTVCreateSuccesMSG, xpaths.VisibleState)
    
    let SuccessMSG = await frame.locator(xpaths.ConnectedTVCreateSuccesMSG).textContent()
    if (SuccessMSG != xpaths.SuccesMSG) {
        throw new Error("Success MSG not displayed")
    }
}

export async function Enable(page, reportedModel) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVRowName, reportedModel.Name))

    let Checked = await frame.locator(xpaths.ConnectedTVRowEnable).isChecked()
    if (!Checked) {
        await frame.locator(xpaths.ConnectedTVRowEnable).click()
    }else{
        throw new Error("Enable is checked")  
    }
    await frame.locator(xpaths.ConnectedTVRowConfirm).click()
    await page.waitForTimeout(1500)

    Checked = await frame.locator(xpaths.ConnectedTVRowEnable).isChecked()
    if (!Checked) {
        throw new Error("Enable is not checked")
    }

    let className = await frame.locator(xpaths.ConnectedTVRowEdit).getAttribute(xpaths.Fill)
    if (!className.includes(xpaths.Disabled)) {
        throw new Error("Edit not disabled")
    }

    className = await frame.locator(xpaths.ConnectedTVRowDelete).getAttribute(xpaths.Fill)
    if (!className.includes(xpaths.Disabled)) {
        throw new Error("Delete not Disabled")
    }

    className = await frame.locator(xpaths.ConnectedTVRowLaunch).getAttribute(xpaths.Fill)
    if (!className.includes(xpaths.Enabled)) {
        throw new Error("Launch not enabled")
    }

    let text = await frame.locator(xpaths.ConnectedTVRowStatus).textContent()
    if (text != xpaths.StatusUnspecified) {
        throw new Error("Status is not expected")
    }

    await frame.locator(xpaths.ConnectedTVRowLaunch).click()
    await frame.locator(xpaths.ConnectedTVRowConfirm).click()
    await page.waitForTimeout(1500)

    text = await frame.locator(xpaths.ConnectedTVRowStatus).textContent()
    if (text != xpaths.StatusStarting) {
        throw new Error("Status is not expected")
    }
}

export async function Disable(page, reportedModel) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVRowName, reportedModel.Name))

    let Checked = await frame.locator(xpaths.ConnectedTVRowEnable).isChecked()
    if (Checked) {
        await frame.locator(xpaths.ConnectedTVRowEnable).click()
    }else{
        throw new Error("Enable is not checked")  
    }
    await frame.locator(xpaths.ConnectedTVRowConfirm).click()
    await page.waitForTimeout(1000)

    Checked = await frame.locator(xpaths.ConnectedTVRowEnable).isChecked()
    if (Checked) {
        throw new Error("Enable is checked")
    }

    let className = await frame.locator(xpaths.ConnectedTVRowEdit).getAttribute(xpaths.Fill)
    if (!className.includes(xpaths.Enabled)) {
        throw new Error("Edit not Enabled")
    }

    className = await frame.locator(xpaths.ConnectedTVRowDelete).getAttribute(xpaths.Fill)
    if (!className.includes(xpaths.Enabled)) {
        throw new Error("Delete not Enabled")
    }

    className = await frame.locator(xpaths.ConnectedTVRowLaunch).getAttribute(xpaths.Fill)
    if (!className.includes(xpaths.Disabled)) {
        throw new Error("Launch not Disabled")
    }
}

export async function Delete(page, reportedModel) {
    const frame = await page.frameLocator(xpaths.iFrame)
    const frameHandle = await page.waitForSelector(xpaths.iFrame)
    const frameWait = await frameHandle.contentFrame()

    await frameWait.waitForSelector(sprintf(xpaths.ConnectedTVRowName, reportedModel.Name))

    let Checked = await frame.locator(xpaths.ConnectedTVRowEnable).isChecked()
    if (Checked) {
        throw new Error("Enable is checked")
    }

    let className = await frame.locator(xpaths.ConnectedTVRowDelete).getAttribute(xpaths.Fill)
    if (className.includes(xpaths.Enabled)) {
        await frame.locator(xpaths.ConnectedTVRowDelete).click()
        await frame.locator(xpaths.ConnectedTVRowConfirm).click()
    }else{
        throw new Error("Delete not Enabled")
    }
    await page.waitForTimeout(2000)

    let True = await frameWait.locator(sprintf(xpaths.ConnectedTVRowName, reportedModel.Name)).isVisible()
    if (True) {
        throw new Error("Pipeline is still exist")
    }
}