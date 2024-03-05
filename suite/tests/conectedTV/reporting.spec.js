import {test} from '@playwright/test';
import {Login, Logout} from "../../../actions/user/login";
import {Open, CreatePlanning, CreateTV, Validate, ValidateDashboards,
    UpdatePlanning, UpdateTV, Enable, Disable, Delete} from "../../../actions/connectedTV/reporting";
import {Open as dnlOpen} from "../../../actions/connectedTV/DNLTV";
import {ReportingModel, UpdatedReportingModel} from "../../../models/connectedTV/reporting";

const config = require('../../../config/config')

ReportingModel.Name = config.prefixGauss + Date.now()
UpdatedReportingModel.Name = "updated" + config.prefixGauss + Date.now()

test('Test Reporter', async ({page}) => {
    test.setTimeout(config.timeout)
    await test.step("Login", async () => {
        await Login(page, config);
    })

    await test.step("Reporter Open", async () => {
        await Open(page)
    })
    await test.step("Reporter Create Planning", async () => {
        await CreatePlanning(page, ReportingModel);
    })
    await test.step("Reporter Create Global/connected TV", async () => {
        await CreateTV(page, ReportingModel);
    })
    await test.step("Reporter Validate Creates", async () => {
        await dnlOpen(page)
        await Open(page)
        await Validate(page, ReportingModel);
    })
    await test.step("Reporter Validate Dashboards", async () => {
        await dnlOpen(page)
        await Open(page)
        await ValidateDashboards(page, ReportingModel);
    })
    await test.step("Reporter Update Planning", async () => {
        await dnlOpen(page)
        await Open(page)
        await UpdatePlanning(page, UpdatedReportingModel);
    })
    await test.step("Reporter Update Global/connected TV", async () => {
        await UpdateTV(page, UpdatedReportingModel);
    })
    await test.step("Reporter Validate Updates", async () => {
        await dnlOpen(page)
        await Open(page)
        await Validate(page, UpdatedReportingModel);
    })
        await test.step("Reporter Validate Updated Dashboards", async () => {
        await dnlOpen(page)
        await Open(page)
        await ValidateDashboards(page, UpdatedReportingModel);
    })
    await test.step("Reporter Enable Pipeline", async () => {
        await dnlOpen(page)
        await Open(page)
        await Enable(page, UpdatedReportingModel);
    })
    await test.step("Reporter Disable Pipeline", async () => {
        await dnlOpen(page)
        await Open(page)
        await Disable(page, UpdatedReportingModel);
    })
    await test.step("Reporter Delete Pipeline", async () => {
        await dnlOpen(page)
        await Open(page)
        await Delete(page, UpdatedReportingModel);
    })

    await test.step("Log Out", async () => {
        await Logout(page);
    })
})
