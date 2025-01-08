import { faker } from '@faker-js/faker';
import loginPage from "../pageobjects/login.page";
import systemMsg from "../../fixtures/textSymbols/systemMsg.json";
import { generateInvalidEmails } from "../../constants/testConstants";

describe('Login tab tests', () => {
    const email = faker.internet.email();
    const password = faker.internet.password();

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
});