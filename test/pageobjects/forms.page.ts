import Page from "./base.page";

class FormsPage extends Page {
    get title() {
        return $('//*[@text="Form components"]');
    }

    get textInputTitle() {
        return $('//*[@text="Input field:"]');
    }

    get textInput() {
        return $('~text-input');
    }

    get textInputResultTitle() {
        return $('//*[@text="You have typed:"]');
    }

    get textInputResult() {
        return $('~input-text-result');
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

    get invactiveBtn() {
        return $('//android.widget.TextView[@text="Inactive"]');
    }
    
    get activeBtn() {
        return $('~button-Active');
    }

    get activeBtnAlertText() {
        return $('//android.widget.TextView[@text="This button is active"]');
    }

    get activeBtnAlertOKBtn() {
        return $('~button-OK'); 
    }
    
    async enterText(text: string): Promise<void> {
        await this.textInput.setValue(text); 
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
        await this.activeBtnAlertOKBtn.click();
    }
}

export default new FormsPage();