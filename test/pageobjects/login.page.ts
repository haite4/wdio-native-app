import Page from "./base.page";

class LoginPage extends Page {
    
  get inputEmail(){
    return $(`//android.widget.EditText[@content-desc="input-email"]`);
  }

  get inputPassword(){
    return $(`//android.widget.EditText[@content-desc="input-password"]`);
  }

  get btnSubmit(){
    return $(
      '//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup'
    );
  }

  get loginSignUpTitle(){
    return $(`//android.widget.TextView[@text="Login / Sign up Form"]`);
  }

  get emailInputError(){
    return $(`//android.widget.TextView[@text="Please enter a valid email address"]`);
  }

  get passwordInputError(){
    return $(`//android.widget.TextView[@text="Please enter at least 8 characters"]`);
  }

  get popUpWindow(){
    return $(`/hierarchy/android.widget.FrameLayout`);
  }

  get popUpWindowTitle(){
    return $(`//android.widget.TextView[@resource-id="android:id/alertTitle"]`);
  }

  get popUpWindowDescription(){
    return $(`//android.widget.TextView[@resource-id="android:id/message"]`);
  }

  get popUpWindowSubmitBtn(){
    return $(`//android.widget.Button[@resource-id="android:id/button1"]`);
  }

  get signUpSwitcherTab(){
    return $(`//android.widget.TextView[@text="Sign up"]`);
  }

  get confirmPasswordInput(){
    return $( `//android.widget.EditText[@content-desc="input-repeat-password"]`);
  }

  get passwordMismatchError(){
    return $(`//android.widget.TextView[@text="Please enter the same password"]`);
  }

  get submitSignUpBtn(){
    return $(`//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup`);
  }

  async clickOnPopUpSubmitBtn(){
    await this.popUpWindowSubmitBtn.click();
  }

  async clickOnSubmitBtn(){
    await this.btnSubmit.click();
  }

  async clickOnEmailInput(){
    await this.inputEmail.click();
  }

  async clickOnPasswordInput(){
    await this.inputPassword.click();
  }

  async clickOnSubmitSignUpBtn(){
    await this.submitSignUpBtn.click();
  }

  async login(username: string, password: string){
    await this.inputEmail.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}

export default new LoginPage();
