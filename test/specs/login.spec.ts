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
        await loginPage.signInSwitcherTab.click();
    })

    it('TC-03 - Verify elements visibility in login and SignUp tab.', async () => {
        await loginPage.openLoginTab();

        const visibleElements = [
            loginPage.loginSignUpTitle,
            loginPage.signUpSwitcherTab,
            loginPage.signInSwitcherTab,
            loginPage.inputEmail,
            loginPage.letterIcon,
            loginPage.inputPassword,
            loginPage.lockIcon,
            loginPage.loginSubmitBtn,
        ];

        for (const element of visibleElements) {
            await expect(element).toBeDisplayed();
        }

        await loginPage.signUpSwitcherTab.click();
        await expect(loginPage.confirmPasswordInput).toBeDisplayed();
        await expect(loginPage.secondLockIcon).toBeDisplayed();
        await expect(loginPage.submitSignUpBtn).toBeDisplayed();
        await expect(loginPage.description).not.toBeDisplayed();
    });

    it('TC-05 - Verify email input with invalid symbols on the Login page.', async () => {
        await loginPage.signInSwitcherTab.click();
        await loginPage.loginBtn.click();
        await expect(loginPage.loginSignUpTitle).toBeDisplayed();

        for (const email of generateInvalidEmails()) {
            await loginPage.enterEmail(email);
            await loginPage.clickLoginSubmitBtn();
            await expect(loginPage.emailInputError).toHaveText(new RegExp(systemMsg.invalidEmail));
        }
    });

    it('TC-07 - Sign up with valid credentials.', async () => {
        const validPassword = randomPassword()

        await loginPage.loginBtn.click();
        await loginPage.signUpSwitcherTab.click();

        await loginPage.submitSignUpBtn.click();
        await expect(loginPage.emailInputError).toHaveText(systemMsg.invalidEmail);
        await expect(loginPage.passwordInputError).toHaveText(systemMsg.invalidPassword);
        await expect(loginPage.passwordMismatchError).toHaveText(systemMsg.confirmPasswordMismatch);

        await loginPage.inputEmail.setValue(randomEmail);
        await loginPage.submitSignUpBtn.click();
        await expect(loginPage.emailInputError).not.toBeDisplayed();
        await expect(loginPage.passwordInputError).toBeDisplayed();

        await loginPage.inputPassword.setValue(validPassword);
        await loginPage.submitSignUpBtn.click();
        await expect(loginPage.passwordInputError).not.toBeDisplayed();

        await loginPage.confirmPasswordInput.setValue(validPassword);
        await loginPage.submitSignUpBtn.click();
        await expect(loginPage.signUpSuccessMsg).toHaveText(systemMsg.signUpSuccess);
        await loginPage.clickOnPopUpSubmitBtn();
    });

    afterEach("Clear input value", async() => {
        await loginPage.inputEmail.clearValue();
        await loginPage.inputPassword.clearValue();
        if(await loginPage.confirmPasswordInput.isDisplayed()){
            await loginPage.confirmPasswordInput.clearValue();
        }
    })
})
