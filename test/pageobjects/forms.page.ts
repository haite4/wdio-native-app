import Page from "./base.page";

class FormsPage extends Page {
    
  get inputFieldTitle(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="Input field:"]`);
  }

  get firstInputField(): ChainablePromiseElement {
    return $(`//android.widget.EditText[@content-desc="text-input"]`);
  }

  get youHaveTypedInput(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@content-desc="input-text-result"]`);
  }

  get youHaveTypedTitle(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="You have typed:"]`);
  }

  get formsButtonsTitle(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="Buttons"]`);
  }

  get activeBtn(): ChainablePromiseElement {
    return $(`//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup`);
  }

  get activeBtnText(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="Active"]`);
  }

  get inactiveBtn(): ChainablePromiseElement {
    return $(`//android.view.ViewGroup[@content-desc="button-Inactive"]/android.view.ViewGroup`);
  }

  get inactiveBtnText(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="Inactive"]`);
  }

  get activePopUpTitle(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@resource-id="android:id/alertTitle"]`);
  }

  get activePopUpDesc(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@resource-id="android:id/message"]`);
  }

  get activePopUpAskMeLaterBtn(): ChainablePromiseElement {
    return $(`//android.widget.Button[@resource-id="android:id/button3"]`);
  }

  get activePopUpCancelBtn(): ChainablePromiseElement {
    return $(`//android.widget.Button[@resource-id="android:id/button2"]`);
  }

  get activePopUpOkBtn(): ChainablePromiseElement {
    return $(`//android.widget.Button[@resource-id="android:id/button1"]`);
  }
}

export default new FormsPage();
