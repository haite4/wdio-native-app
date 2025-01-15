import Page from "./base.page";

class FormsPage extends Page {
    
  get inputFieldTitle(){
    return $(`//android.widget.TextView[@text="Input field:"]`);
  }

  get firstInputField(){
    return $(`//android.widget.EditText[@content-desc="text-input"]`);
  }

  get youHaveTypedInput(){
    return $(`//android.widget.TextView[@content-desc="input-text-result"]`);
  }

  get youHaveTypedTitle(){
    return $(`//android.widget.TextView[@text="You have typed:"]`);
  }

  get formsButtonsTitle(){
    return $(`//android.widget.TextView[@text="Buttons"]`);
  }

  get activeBtn(){
    return $(`//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup`);
  }

  get activeBtnText(){
    return $(`//android.widget.TextView[@text="Active"]`);
  }

  get inactiveBtn(){
    return $(`//android.view.ViewGroup[@content-desc="button-Inactive"]/android.view.ViewGroup`);
  }

  get inactiveBtnText(){
    return $(`//android.widget.TextView[@text="Inactive"]`);
  }

  get activePopUpTitle(){
    return $(`//android.widget.TextView[@resource-id="android:id/alertTitle"]`);
  }

  get activePopUpDesc(){
    return $(`//android.widget.TextView[@resource-id="android:id/message"]`);
  }

  get activePopUpAskMeLaterBtn(){
    return $(`//android.widget.Button[@resource-id="android:id/button3"]`);
  }

  get activePopUpCancelBtn(){
    return $(`//android.widget.Button[@resource-id="android:id/button2"]`);
  }

  get activePopUpOkBtn(){
    return $(`//android.widget.Button[@resource-id="android:id/button1"]`);
  }

  async clickOutSidePopUp() {
    await driver.action("pointer", { parameters: { pointerType: 'touch' } }).move({ x: 50, y: 50 }).down().up().perform(true);
  }
}

export default new FormsPage();
