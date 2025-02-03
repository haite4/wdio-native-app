import Page from "./base.page";

class FormsPage extends Page {

  get title() {
    return $('//*[@text="Form components"]');
}  

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

  get switch() {
    return $('~switch');
  }

  get switchText() {
      return $('~switch-text');
  }

  get dropdownTitle() {
    return $('//android.widget.TextView[@text="Dropdown:"]');
  }

  get dropdown() {
      return $('//android.widget.EditText[@text="Select an item..."]');
  }

  get arrowIcon() {
    return $('//android.widget.TextView[@text="󰅀"]');
  }

  get activeBtnAlertText() {
    return $('//android.widget.TextView[@text="This button is active"]');
  }


  async clickOutSidePopUp() {
    await driver.action("pointer", { parameters: { pointerType: 'touch' } }).move({ x: 50, y: 50 }).down().up().perform(true);
  }

   
  async enterText(text: string): Promise<void> {
    await this.firstInputField.setValue(text); 
}

  async clickSwitch(): Promise<void> {
      await this.switch.click();
  }

  async selectDropdownItemAndVerify(itemText: string): Promise<void> {
      await this.arrowIcon.click();
      await $(`//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="${itemText}"]`).click();
      await expect($(`//android.widget.EditText[@text="${itemText}"]`)).toBeDisplayed();
  }

  async clickActiveBtn(): Promise<void> {
      await this.activeBtn.click();
  }

  async clickActiveBtnAlertOKBtn(): Promise<void> {
      await this.activePopUpOkBtn.click();
  }
}

export default new FormsPage();