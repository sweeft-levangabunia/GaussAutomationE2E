import {LoginURL} from "../../config/url";

const xpaths = require('./xpath')

async function Login(page, config) {
    await page.goto(LoginURL(config));

    await page.locator(xpaths.LoginInput).fill(config.testUserLogin);
    await page.locator(xpaths.PasswordInput).fill(config.testUserPassword);

    await page.locator(xpaths.LoginButton).click();
    await page.waitForSelector(xpaths.LoginPendoButton, xpaths.VisibleState);
}

async function Logout(page) {
    await page.waitForSelector(xpaths.SessionMenuDropdown, xpaths.VisibleState);
    page.locator(xpaths.SessionMenuDropdown).click();

    await page.locator(xpaths.SessionMenuLogoutLink).click();
    await page.close();
}

export {Login, Logout}