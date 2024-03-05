import {test} from '@playwright/test';
import {Login, Logout} from "../../actions/user/login";
import {Open, CreateSimulator} from "../../actions/connectedTV/DNLTV";
import {DNLTVModel} from "../../models/connectedTV/DNLTV/DNLTV";

const config = require('../../config/config')

DNLTVModel.Name = config.prefixGauss + Date.now()

test('Test DNLTV', async ({page}) => {
    test.setTimeout(config.timeout + 10000)

    await test.step("Login", async () => {
        await Login(page, config);
    })

    await test.step("DNLTV Open", async () => {
        await Open(page)
    })
    await test.step("DNLTV Create", async () => {
        await CreateSimulator(page, DNLTVModel);
    })

    await test.step("Log Out", async () => {
        await Logout(page);
    })
})
