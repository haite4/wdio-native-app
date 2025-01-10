import loginPage from "../pageobjects/login.page";
import generalMsg from "../../fixtures/textSymbols/generalMsg.json";
import errroMsg from "../../fixtures/textSymbols/errorMsg.json";
import successMsg from "../../fixtures/textSymbols/successMsg.json";
import { faker } from "@faker-js/faker";

describe("Verify login and register functionality", () => {
    const randomEmail = faker.internet.email();
    const randomPassword = (lenght?: number): string => {return faker.internet.password({length: lenght ?? 8})};

    beforeEach("Open login tab", async() => {
        await loginPage.openLoginTab();
    })
    it("TC-04 Login with valid credentials.", async() => {
        await expect(loginPage.loginSignUpTitle).toBeDisplayed();
        await expect(loginPage.loginSignUpTitle).toHaveText(generalMsg.loginSignUpTitle);
        await loginPage.clickOnSubmitBtn();
        await expect(loginPage.emailInputError).toBeDisplayed();
        await expect(loginPage.emailInputError).toHaveText(errroMsg.emailNotValid);
        await expect(loginPage.passwordInputError).toBeDisplayed();
        await expect(loginPage.passwordInputError).toHaveText(errroMsg.passwordNotValid);

        await loginPage.inputEmail.setValue(randomEmail);
        await expect(loginPage.inputEmail).toHaveText(randomEmail);
        await loginPage.clickOnSubmitBtn();
        await expect(await loginPage.emailInputError.isDisplayed()).toBe(false);
        await expect(loginPage.passwordInputError).toHaveText(errroMsg.passwordNotValid);
        
        await loginPage.inputPassword.setValue(randomPassword());
        await expect(await loginPage.inputPassword.getAttribute("content-desc")).toBe("input-password");
        await loginPage.clickOnSubmitBtn();
        await expect(loginPage.popUpWindow).toBeDisplayed();
        await expect(loginPage.popUpWindowTitle).toHaveText(successMsg.success);
        await expect(loginPage.popUpWindowDescription).toHaveText(successMsg.youLoggedIn);
        await expect(loginPage.popUpWindowSubmitBtn).toBeDisplayed();
        await loginPage.clickOnPopUpSubmitBtn();
        await expect(await loginPage.popUpWindowTitle.isDisplayed()).toBe(false);
    })

    it("TC-06 Verify  Password input  with  invalid  symbols  on the Login page.", async() => {
        await expect(loginPage.loginSignUpTitle).toBeDisplayed();
        await loginPage.clickOnSubmitBtn();
        await expect(loginPage.passwordInputError).toHaveText(errroMsg.passwordNotValid);
        await loginPage.inputPassword.setValue(randomPassword(7));
        await loginPage.clickOnSubmitBtn();
        await expect(loginPage.passwordInputError).toHaveText(errroMsg.passwordNotValid);
        await expect(await loginPage.inputPassword.getAttribute("content-desc")).toBe("input-password");
    })

    it("TC-08 Verify error message for mismatched passwords", async() => {
        await loginPage.signUpSwitcherTab.click();
        await loginPage.inputPassword.setValue(randomPassword());
        await loginPage.confirmPasswordInput.setValue(randomPassword());
        await loginPage.clickOnSubmitSignUpBtn();
        await expect(loginPage.passwordMismatchError).toHaveText(errroMsg.pleaseEnterTheSamePassword);
    })

    afterEach("Clear input value", async() => {
        await loginPage.inputEmail.clearValue();
        await loginPage.inputPassword.clearValue();
        if(await loginPage.confirmPasswordInput.isDisplayed()){
            await loginPage.confirmPasswordInput.clearValue();
        }
    })
})