const xpaths = {
    LoginInput: `//input[@name='email']`,
    PasswordInput: `//input[@name='password']`,
    LoginButton: `//button[normalize-space()='Sign In']`,
    LoginPendoButton: `//a[@href='/']//*[name()='svg']`,

    SessionMenuDropdown: `//div[@id="app"]//div[contains(@class, "MuiAvatar-root")]`,
    SessionMenuLogoutLink: `//p[normalize-space()='Logout']`,

    VisibleState: `{state: "visible"}`,
}

module.exports = xpaths

