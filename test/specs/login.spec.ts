import loginPage from "../pageobjects/login.page";
import { faker } from "@faker-js/faker";
import systemMsg from "../../fixtures/textSymbols/systemMsg.json";
import { generateInvalidEmails } from "../../constants/testConstants";

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

    it('TC-03 - Verify elements visibility in login tab.', async () => {
        await loginPage.openLoginTab();

        const visibleElements = [
            loginPage.loginTitle,
            loginPage.mooveToSignUpForm,
            loginPage.mooveToLoginForm,
            loginPage.emailInputField,
            loginPage.letterIcon,
            loginPage.passwordInputField,
            loginPage.lockIcon,
            loginPage.loginSubmitBtn,
        ];

        for (const element of visibleElements) {
            await expect(element).toBeDisplayed();
        }

        await loginPage.mooveToSignUpForm.click();
        await expect(loginPage.confirmPasswortInputField).toBeDisplayed();
        await expect(loginPage.secondLockIcon).toBeDisplayed();
        await expect(loginPage.signUpButton).toBeDisplayed();
        await expect(loginPage.description).not.toBeDisplayed();
    });

    it('TC-05 - Verify email input with invalid symbols on the Login page.', async () => {
        await loginPage.loginBtn.click();
        await loginPage.mooveToLoginForm.click();
        await expect(loginPage.loginTitle).toBeDisplayed();

        for (const email of generateInvalidEmails()) {
            await loginPage.enterEmail(email);
            await loginPage.clickLoginSubmitBtn();
            await expect(loginPage.invalidEmailMsg).toHaveText(new RegExp(systemMsg.invalidEmail));
        }
    });

    it('TC-07 - Sign up with valid credentials.', async () => {
        await loginPage.loginBtn.click();
        await loginPage.mooveToSignUpForm.click();

        await loginPage.signUpButton.click();
        await expect(loginPage.invalidEmailMsg).toHaveText(systemMsg.invalidEmail);
        await expect(loginPage.invalidPasswordMsg).toHaveText(systemMsg.invalidPassword);
        await expect(loginPage.confirmPasswordErrorMsg).toHaveText(systemMsg.confirmPasswordMismatch);

        await loginPage.emailInputField.setValue(email);
        await loginPage.signUpButton.click();
        await expect(loginPage.invalidEmailMsg).not.toBeDisplayed();
        await expect(loginPage.invalidPasswordMsg).toHaveText(systemMsg.invalidPassword);

        await loginPage.passwordInputField.setValue(password);
        await loginPage.signUpButton.click();
        await expect(loginPage.invalidPasswordMsg).not.toBeDisplayed();

        await loginPage.confirmPasswortInputField.setValue(password);
        await loginPage.signUpButton.click();
        await expect(loginPage.signUpSuccessMsg).toHaveText(systemMsg.signUpSuccess);
    });
})
