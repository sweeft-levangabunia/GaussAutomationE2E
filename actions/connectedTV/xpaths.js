const xpaths = {
    ConnectedTVSection: `//span[normalize-space()='Gauss for Digital TV']`,
    ConnectedTVSectionArrow: `//li[normalize-space()='Gauss for Digital TV']//div[@class='MuiBox-root css-1l5qkav']`,
    ConnectedTVMenuDropdown: `//div[@class="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-unbudi"]`,
    ConnectedTVDNLTV: `//span[normalize-space()='DNLTV']`,
    ConnectedTVDNLTVText: `//h4[normalize-space()='Gauss for Connected TV: DNLTV']`,
    ConnectedTVReporter: `//span[normalize-space()='Reporting']`,
    ConnectedTVReportedText: `//h4[normalize-space()='Gauss for Digital TV: Reporting']`,

    ConnectedTVCreatePlanningName: `//input[@name="pipelineName"]`,
    ConnectedTVCreatePlanning: `//div[@class='MuiBackdrop-root MuiBackdrop-invisible css-esi9ax']`,
    ConnectedTVCreatePlanningGender: `//div[contains(@class,'MuiGrid-root MuiGrid-container css-of3t72')]//div[2]//div[1]//div[1]//div[1]//div[1]//label[1]//div[1]//div[1]`,
    ConnectedTVCreatePlanningGenderFemale: `//li[contains(@value,'female')]//label[contains(@class,'MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1d2889v')]`,
    ConnectedTVCreatePlanningGenderMale: `//li[@value='male']//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1d2889v']`,
    ConnectedTVCreatePlanningAgeGroup: `//div[contains(@class,'MuiGrid-root MuiGrid-container css-of3t72')]//div[2]//div[1]//div[1]//div[1]//div[2]//label[1]//div[1]//div[1]`,
    ConnectedTVCreatePlanningAgeGroup35_44: `//li[@value='35_44']//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1d2889v']`,
    ConnectedTVCreatePlanningAgeGroup45_54: `//li[@value='45_54']//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1d2889v']`,
    ConnectedTVCreatePlanningTimePeriod: `//div[@id='select-Time Period']`,
    ConnectedTVCreatePlanningTimePeriodValue: `//li[normalize-space()='Day']`,
    ConnectedTVCreatePlanningEstimatedReach: `//input[@name="estimatedReach"]`,
    ConnectedTVCreatePlanningNumber: `//input[@name="frequencyCapNumber"]`,
    ConnectedTVCreatePlanningBudgetAllocationLtv: `//input[@name="budgetAllocationLtv"]`,
    ConnectedTVCreatePlanningCurrency: `//div[@id="select-Currency"]`,
    ConnectedTVCreatePlanningCurrencyEuro: `//li[@data-value="EUR"]`,
    ConnectedTVCreatePlanningBudgetAllocationTv: `//input[@name="budgetAllocationTv"]`,
    ConnectedTVCreatePlanningPopulationGender: `//div[4]//div[1]//div[1]//div[1]//div[1]//label[1]//div[1]//div[1]`,
    ConnectedTVCreatePlanningPopulationGenderMale: `//li[@value='male']//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1d2889v']`,
    ConnectedTVCreatePlanningPopulationAgeGroup: `//div[4]//div[1]//div[1]//div[1]//div[2]//label[1]//div[1]//div[1]`,
    ConnectedTVCreatePlanningPopulationAgeGroup18_24: `//li[@value='18_24']//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1d2889v']`,
    ConnectedTVCreatePlanningPopulationAgeGroup25_34: `//li[@value='25_34']//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1d2889v']`,
    ConnectedTVCreatePlanningPopulationAgeGroup35_44: `//li[@value='35_44']//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1d2889v']`,
    ConnectedTVCreatePlanningPopulationAgeGroup45_54: `//li[@value='45_54']//label[@class='MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1d2889v']`,

    ConnectedTVCreateGlobalTVSection: `//button[normalize-space()='Gauss TV / CTV Configuration']`,
    ConnectedTVCreateGlobalTVCmpID: `//div[@class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-spacing-xs-3 MuiGrid-grid-xs-12 MuiGrid-grid-md-9 css-6rzxdu']/div[1]/label[1]/div[1]/div[1]/input[1]`,
    ConnectedTVCreateGlobalTVDcID: `//div[@class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-spacing-xs-3 MuiGrid-grid-xs-12 MuiGrid-grid-md-9 css-6rzxdu']/div[2]/label[1]/div[1]/div[1]/input[1]`,
    ConnectedTVCreateGlobalTVAdvertiserID: `//div[@class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-spacing-xs-3 MuiGrid-grid-xs-12 MuiGrid-grid-md-9 css-6rzxdu']/div[3]/label[1]/div[1]/div[1]/input[1]`,
    ConnectedTVCreateGlobalTVCtcID: `//div[@class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-spacing-xs-3 MuiGrid-grid-xs-12 MuiGrid-grid-md-9 css-6rzxdu']/div[4]/label[1]/div[1]/div[1]/input[1]`,
    ConnectedTVCreateGlobalTVGtcID: `//div[@class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-spacing-xs-3 MuiGrid-grid-xs-12 MuiGrid-grid-md-9 css-6rzxdu']/div[5]/label[1]/div[1]/div[1]/input[1]`,
    ConnectedTVCreateGlobalTVCountry: `//div[@class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-spacing-xs-3 MuiGrid-grid-xs-12 MuiGrid-grid-md-9 css-6rzxdu']/div[6]/label[1]/div[1]/div[1]/input[1]`,
    ConnectedTVCreateGlobalTVTargetReach: `//div[@class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-spacing-xs-3 MuiGrid-grid-xs-12 MuiGrid-grid-md-9 css-6rzxdu']/div[7]/label[1]/div[1]/div[1]/input[1]`,
    ConnectedTVCreateGlobalTVTVBudget: `//div[contains(@class,'MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 css-6jh6w')]//div[1]//label[1]//div[1]//div[1]//input[1]`,
    ConnectedTVCreateGlobalTVCTVBudget: `//div[contains(@class,'MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1h77wgb')]//div[2]//label[1]//div[1]//div[1]//input[1]`,
    ConnectedTVCreateGlobalTVYoutubeBudget: `//div[contains(@class,'MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 css-6jh6w')]//div[3]//label[1]//div[1]//div[1]//input[1]`,
    ConnectedTVCreateGlobalTVDigTvBudget: `//div[contains(@class,'MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 css-6jh6w')]//div[4]//label[1]//div[1]//div[1]//input[1]`,
    ConnectedTVCreateGlobalTVTwitchBudget: `//div[contains(@class,'MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 css-6jh6w')]//div[5]//label[1]//div[1]//div[1]//input[1]`,
    ConnectedTVCreateGlobalTVCurrency: `//div[@id='select-Currency']`,
    ConnectedTVCreateGlobalTVCurrencyEuro: `//li[contains(text(),'€')]`,
    ConnectedTVCreateGlobalTVSchedulingType: `//div[@id='select-Scheduling type']`,
    ConnectedTVCreateGlobalTVSchedulingTypeManual: `//li[normalize-space()='Manual']`,

    ConnectedTVRowEnable: `//div[@data-rowindex='0']//input[@type='checkbox']`,
    ConnectedTVRowName: `//div[@data-rowindex='0']//span[contains(text(), "%s")]`,
    ConnectedTVRowStatus: `//div[@data-rowindex='0']//div[contains(text(), "%s")]`,
    ConnectedTVRowLaunch: `(//div[@data-rowindex='0']//*[name()='svg'])[1]`,
    ConnectedTVRowEdit: `(//div[@data-rowindex='0']//*[name()='svg'])[2]`,
    ConnectedTVRowDelete: `(//div[@data-rowindex='0']//*[name()='svg'])[3]`,
    ConnectedTVRowPlaning: `//div[@data-rowindex='0']//div[@role ='button'][1]`,
    ConnectedTVRowGlobalTV: `//div[@data-rowindex='0']//div[@role ='button'][2]`,
    ConnectedTVRowConnectedTV: `//div[@data-rowindex='0']//div[@role ='button'][3]`,
    ConnectedTVRowXMR: `//div[@data-rowindex='0']//div[@role ='button'][4]`,
    ConnectedTVRowConfirm: `//button[normalize-space()='Confirm']`,
    ConnectedTVRowStatus: `//div[@class='MuiDataGrid-virtualScrollerRenderZone css-1inm7gi']//div[1]//div[3]//div[1]//div[2]//div[1]`,

    ConnectedTVDashboardPlaning: `//button[normalize-space()='Planning']`,
    ConnectedTVDashboardGlobalTVDash: `//button[normalize-space()='Global TV']`,
    ConnectedTVDashboardConnectedTVDash: `//button[normalize-space()='Connected TV']`,
    ConnectedTVDashboardPlaningTotalBudget: `//div[@class='MuiBox-root css-gajhq5']//h4[@class='MuiTypography-root MuiTypography-h4 css-qhhx4d'][contains(text(),'%s')]`,
    ConnectedTVDashboardPlaningTotalBudget2: `//div[@class='MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root css-1ghzyz0']//h4[@class='MuiTypography-root MuiTypography-h4 css-qhhx4d'][contains(text(),'%s')]`,
    ConnectedTVDashboardPlaningCTV: `//div[@class='MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root css-1ghzyz0']//div[2]//span[1]`,
    ConnectedTVDashboardPlaningTV: `//div[@class='MuiBox-root css-u9j9k9']//div[1]//span[1]`,
    ConnectedTVDashboardGlobalTV: `//h5[normalize-space()='%s']`,
    ConnectedTVDashboardGlobalTVICTV: `(//h5[normalize-space()='%s'])[1]`,
    ConnectedTVDashboardGlobalTVOverlap: `(//h5[normalize-space()='%s'])[1]`,
    ConnectedTVDashboardGlobalTVCTVBoughts: `(//h5[normalize-space()='%s'])[1]`,
    ConnectedTVDashboardGlobalTVCTVObtained: `(//h5[normalize-space()='%s'])[2]`,
    ConnectedTVDashboardGlobalTVCTVContacts: `(//h5[normalize-space()='%s'])[3]`,
    ConnectedTVDashboardConnectedTV: `//h5[normalize-space()='%s']`,
    ConnectedTVDashboardConnectedTVReach: `(//h5[normalize-space()='%s'])[1]`,
    ConnectedTVDashboardConnectedTVvtr: `(//h5[normalize-space()='%s'])[2]`,
    ConnectedTVDashboardConnectedTVImpressions: `(//h5[normalize-space()='%s'])[1]`,
    ConnectedTVDashboardConnectedTVFrequency: `(//h5[normalize-space()='%s'])[2]`,
    ConnectedTVDashboardConnectedTVTotalBudget: `//h4[contains(text(),'%s')]`,

    ConnectedTVCreateNew: `//button[normalize-space()='Create New']`,
    ConnectedTVCreateSimulator: `//button[@id=':rn:-T-1']`,
    ConnectedTVCreateSimulatorName: `//input[@name="campaignName"]`,
    ConnectedTVCreateSimulatorGender: `//div[@id='select-Gender']`,
    ConnectedTVCreateSimulatorGenderValue: `//li[normalize-space()='M/F 18-34']`,
    ConnectedTVCreateSimulatorTVBudget: `//input[@name="ltvBudget"]`,
    ConnectedTVCreateSimulatorDNLTVBudget: `//input[@name="dnltvBudget"]`,
    ConnectedTVCreateSimulatorCurrency: `//div[@id='select-Currency']`,
    ConnectedTVCreateSimulatorGRPTV: `//input[@name="grpTv"]`,
    ConnectedTVCreateSimulatorTVReach: `//input[@name="tvReach"]`,
    ConnectedTVCreateSimulatorDNLTVFrequency: `//input[@name="dnltvFrequency"]`,
    ConnectedTVCreateSimulatorTVFrequency: `//input[@name="tvFrequency"]`,
    ConnectedTVCreateNewSave: `//button[normalize-space()='Save']`,

    ConnectedTVCreateInsights: `//button[@id=':rn:-T-0']`,
    ConnectedTVCreateInsightsCampaign: `//input[@name="campaign"]`,
    ConnectedTVCreateInsightsTargetDemo: `//input[@name="targetedDemo"]`,
    ConnectedTVCreateInsightsFormat: `//input[@name="format"]`,
    ConnectedTVCreateInsightsPopulation: `//input[@name="population"]`,
    ConnectedTVCreateInsightsTotalImpressions: `//input[@name="totalImpressions"]`,
    ConnectedTVCreateInsightsRatioOnTargetYt: `//input[@name="ratioOnTargetYt"]`,
    ConnectedTVCreateInsightsRatioOnTargetReplay: `//input[@name="ratioOnTargetReplay"]`,
    ConnectedTVCreateInsightsRatioOnTargetAvod: `//input[@name="ratioOnTargetAvod"]`,
    ConnectedTVCreateInsightsOverlapLtvYt: `//input[@name="overlapLtvYt"]`,
    ConnectedTVCreateInsightsOverlapLtvReplay: `//input[@name="overlapLtvReplay"]`,
    ConnectedTVCreateInsightsOverlapLtvAvod: `//input[@name="overlapLtvAvod"]`,
    ConnectedTVCreateInsightsTotalReachCoViewedYt: `//input[@name="totalReachCoViewedYt"]`,
    ConnectedTVCreateInsightsTotalReachCoViewedReplay: `//input[@name="totalReachCoViewedReplay"]`,
    ConnectedTVCreateInsightsTotalReachCoViewedAvod: `//input[@name="totalReachCoViewedAvod"]`,
    ConnectedTVCreateInsightsDuplicatedReachYtXReplay: `//input[@name="duplicatedReachYtXReplay"]`,
    ConnectedTVCreateInsightsDuplicatedReachReplayXAvod: `//input[@name="duplicatedReachReplayXAvod"]`,
    ConnectedTVCreateInsightsTVCover: `//input[@name="tvCover"]`,
    ConnectedTVCreateInsightsTotalReachLtv: `//input[@name="totalReachLtv"]`,
    ConnectedTVCreateInsightsTotalReachCoViewedDnltv: `//input[@name="totalReachCoViewedDnltv"]`,
    ConnectedTVCreateInsightsOverlapReachDnltv: `//input[@name="overlapReachDnltv"]`,
    ConnectedTVCreateInsightsIncrementalReachDnltv: `//input[@name="incrementalReachDnltv"]`,
    ConnectedTVCreateInsightsDnltvCover: `//input[@name="dnltvCover"]`,
    ConnectedTVCreateInsightsIncrementalDnltvCover: `//input[@name="incrementalDnltvCover"]`,
    ConnectedTVCreateInsightsClientTvBudget: `//input[@name="clientTvBudget"]`,
    ConnectedTVCreateInsightsDnltvBudget: `//input[@name="dnltvBudget"]`,
    ConnectedTVCreateInsightsCpm: `//input[@name="cpm"]`,
    ConnectedTVCreateInsightsCurrency: `//input[@name="currency"]`,
    ConnectedTVCreateInsightsVerifiedDevice: `//input[@name="verifiedDevice"]`,
    ConnectedTVCreateInsightsDnltvBudgetPercent: `//input[@name="dnltvBudgetPercent"]`,
    ConnectedTVCreateInsightsLtvBudgetPercent: `//input[@name="ltvBudgetPercent"]`,
    ConnectedTVCreateInsightsFrequency: `//input[@name="frequency"]`,
    ConnectedTVCreateInsightsCompletionRate: `//input[@name="completionRate"]`,
    ConnectedTVCreateInsightsCpv: `//input[@name="cpv"]`,
    ConnectedTVCreateInsightsUploadButton: `//button[normalize-space()='+ UPLOAD CSV']`,
    ConnectedTVCreateInsightsUploadedItem: `//button[contains(@class,'styles_btn__YUf31')]`,
    ConnectedTVCreateSuccesMSG: `//div[@role='alert']`,
    ConnectedTVCreateSuccesMSGClose: `//*[name()='path' and contains(@d,'M7.172 5.7')]`,

    ConnectedTVDNLRowEnable: `//div[@data-rowindex='0']//input[@type='checkbox']`,
    ConnectedTVDNLRowName: `//div[@data-rowindex='0']//span[contains(text(), "%s")]`,
    ConnectedTVDNLRowStatus: `//div[@data-rowindex='0']//div[contains(text(), "%s")]`,
    ConnectedTVDNLRowLaunch: `(//div[@data-rowindex='0']//*[name()='svg'])[1]`,
    ConnectedTVDNLRowEdit: `(//div[@data-rowindex='0']//*[name()='svg'])[2]`,
    ConnectedTVDNLRowDelete: `(//div[@data-rowindex='0']//*[name()='svg'])[3]`,
    ConnectedTVDNLRowPlaning: `//div[@data-rowindex='0']//div[@role ='button'][1]`,
    ConnectedTVDNLRowGlobalTV: `//div[@data-rowindex='0']//div[@role ='button'][2]`,
    ConnectedTVDNLRowConnectedTV: `//div[@data-rowindex='0']//div[@role ='button'][3]`,
    ConnectedTVDNLRowXMR: `//div[@data-rowindex='0']//div[@role ='button'][4]`,
    ConnectedTVDNLRowConfirm: `//button[normalize-space()='Confirm']`,
    ConnectedTVDNLRowStatus: `//div[@class='MuiDataGrid-virtualScrollerRenderZone css-1inm7gi']//div[1]//div[3]//div[1]//div[2]//div[1]`,

    iFrame: `//iframe`, 
    ShowClass: `hidden`,
    Class: `class`,
    SuccesMSG: 'Saved Successfully',
    VisibleState: `{state: "visible"}`,
    DetachedState: `{state: "detached"}`,
    Status: `Unspecified`,
    Fill: `fill`,
    Disabled: `#FAFAFA`,
    Enabled: `#4F5B67`,
    StatusUnspecified: `Unspecified`,
    StatusStarting: `Starting`,
}

module.exports = xpaths
