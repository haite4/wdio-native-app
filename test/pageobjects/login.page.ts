import Page from "./base.page";

class LoginPage extends Page {
    
  get inputEmail(): ChainablePromiseElement {
    return $(`//android.widget.EditText[@content-desc="input-email"]`);
  }

  get inputPassword(): ChainablePromiseElement {
    return $(`//android.widget.EditText[@content-desc="input-password"]`);
  }

  get btnSubmit(): ChainablePromiseElement {
    return $(
      '//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup'
    );
  }

  get loginSignUpTitle(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="Login / Sign up Form"]`);
  }

  get emailInputError(): ChainablePromiseElement {
    return $(
      `//android.widget.TextView[@text="Please enter a valid email address"]`
    );
  }

  get passwordInputError(): ChainablePromiseElement {
    return $(
      `//android.widget.TextView[@text="Please enter at least 8 characters"]`
    );
  }

  get popUpWindow(): ChainablePromiseElement {
    return $(`/hierarchy/android.widget.FrameLayout`);
  }

  get popUpWindowTitle(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@resource-id="android:id/alertTitle"]`);
  }

  get popUpWindowDescription(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@resource-id="android:id/message"]`);
  }

  get popUpWindowSubmitBtn(): ChainablePromiseElement {
    return $(`//android.widget.Button[@resource-id="android:id/button1"]`);
  }

  get signUpSwitcherTab(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="Sign up"]`);
  }

  get confirmPasswordInput(): ChainablePromiseElement {
    return $(
      `//android.widget.EditText[@content-desc="input-repeat-password"]`
    );
  }

  get passwordMismatchError(): ChainablePromiseElement {
    return $(
      `//android.widget.TextView[@text="Please enter the same password"]`
    );
  }

  get submitSignUpBtn(): ChainablePromiseElement {
    return $(
      `//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup`
    );
  }

  async clickOnPopUpSubmitBtn(): Promise<void> {
    await this.popUpWindowSubmitBtn.click();
  }

  async clickOnSubmitBtn(): Promise<void> {
    await this.btnSubmit.click();
  }

  async clickOnEmailInput(): Promise<void> {
    await this.inputEmail.click();
  }

  async clickOnPasswordInput(): Promise<void> {
    await this.inputPassword.click();
  }

  async clickOnSubmitSignUpBtn(): Promise<void> {
    await this.submitSignUpBtn.click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.inputEmail.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}

export default new LoginPage();
