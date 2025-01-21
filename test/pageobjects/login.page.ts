import Page from "./base.page";

class LoginPage extends Page {
    get loginTitle() {
        return $('//*[@text="Login / Sign up Form"]');
    }

    get emailInputField() {
        return $('~input-email');
    }

    get passwordInputField() {
        return $('~input-password');
    }

    get loginSubmitBtn() {
        return $('~button-LOGIN');
    }

    get loginSuccessMsg() {
        return $('//android.widget.TextView[@text="You are logged in!"]') ;
    }

    get signUpSuccessMsg() {
        return $('//*[@resource-id="android:id/message"]');
    }

    get invalidEmailMsg() {
        return $('//*[@text="Please enter a valid email address"]');
    }

    get invalidPasswordMsg() {
        return $('//*[@text="Please enter at least 8 characters"]');
    }

    get mooveToSignUpForm() {
        return $('//*[@text="Sign up"]');
    }

    get mooveToLoginForm() {
        return $('(//android.widget.TextView[@text="Login"])[1]');
    }

    get signUpButton() {
        return $('//*[@content-desc="button-SIGN UP"]');
    }

    get confirmPasswortInputField() {
        return $('//*[@content-desc="input-repeat-password"]');
    }

    get confirmPasswordErrorMsg() {
        return $('//*[@text="Please enter the same password"]');
    }

    get letterIcon() {
        return $('//android.widget.TextView[@text="󰇰"]');
    }

    get lockIcon() {
        return $('//android.widget.TextView[@text="󰍁"]');
    }

    get secondLockIcon() {
        return $('(//android.widget.TextView[@text="󰍁"])[2]');
    }

    get description() {
        return $('//*[contains(@text, "When the device has Touch/FaceID (iOS)")]');
    }

    async enterEmail(email: string) {
        await this.emailInputField.setValue(email);
    }

    async enterPassword(password: string) {
        await this.passwordInputField.setValue(password);
    }

    async enterConfirmPasswort(password: string) {
        await this.confirmPasswortInputField.setValue(password);
    }

    async clickLoginSubmitBtn() {
        await this.loginSubmitBtn.click();
    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginSubmitBtn();
    }
}

export default new LoginPage();