import loginPage from "../pageobjects/login.page";
import { faker } from "@faker-js/faker";

describe("Verify login and register functionality", () => {
    const randomEmail = faker.internet.email();
    const randomPassword = (lenght?: number): string => {return faker.internet.password({length: lenght ?? 8})};

    beforeEach("Open login tab", async() => {
        await loginPage.openLoginTab();
    })

    it("TC-04 Login with valid credentials.", async() => {
        await expect(loginPage.loginSignUpTitle).toBeDisplayed();
        await loginPage.clickOnSubmitBtn();
        await expect(loginPage.emailInputError).toBeDisplayed();
        await expect(loginPage.passwordInputError).toBeDisplayed();

        await loginPage.inputEmail.setValue(randomEmail);
        await expect(loginPage.inputEmail).toHaveText(randomEmail);
        await loginPage.clickOnSubmitBtn();
        await expect(loginPage.emailInputError).not.toBeDisplayed();
        await expect(loginPage.passwordInputError).toBeDisplayed();
        
        await loginPage.inputPassword.setValue(randomPassword());
        await expect(loginPage.inputPassword).toHaveAttr("content-desc", "input-password");
        await loginPage.clickOnSubmitBtn();
        await expect(loginPage.popUpWindow).toBeDisplayed();
        await expect(loginPage.popUpWindowTitle).toBeDisplayed();
        await expect(loginPage.popUpWindowDescription).toBeDisplayed();
        await expect(loginPage.popUpWindowSubmitBtn).toBeDisplayed();
        await loginPage.clickOnPopUpSubmitBtn();
        await expect(loginPage.popUpWindowTitle).not.toBeDisplayed();
    })

    it("TC-06 Verify  Password input  with  invalid  symbols  on the Login page.", async() => {
        await expect(loginPage.loginSignUpTitle).toBeDisplayed();
        await loginPage.clickOnSubmitBtn();
        await expect(loginPage.passwordInputError).toBeDisplayed();
        await loginPage.inputPassword.setValue(randomPassword(7));
        await loginPage.clickOnSubmitBtn();
        await expect(loginPage.passwordInputError).toBeDisplayed();
        await expect(loginPage.inputPassword).toHaveAttr("content-desc", "input-password")
    })

    it("TC-08 Verify error message for mismatched passwords", async() => {
        await loginPage.signUpSwitcherTab.click();
        await loginPage.inputPassword.setValue(randomPassword());
        await loginPage.confirmPasswordInput.setValue(randomPassword());
        await loginPage.clickOnSubmitSignUpBtn();
        await expect(loginPage.passwordMismatchError).toBeDisplayed();
    })

    afterEach("Clear input value", async() => {
        await loginPage.inputEmail.clearValue();
        await loginPage.inputPassword.clearValue();
        if(await loginPage.confirmPasswordInput.isDisplayed()){
            await loginPage.confirmPasswordInput.clearValue();
        }
    })
})