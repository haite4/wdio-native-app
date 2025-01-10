import Page from "./base.page";

class HomePage extends Page {
  get robotImage(): ChainablePromiseElement {
    return $(`//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]`);
 }

  get webdriverTitle(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="WEBDRIVER"]`);
  }

  get ioTitle(): ChainablePromiseElement {
    return $(`//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[2]`);
  }

  get webdriverIoDescription(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="Demo app for the appium-boilerplate"]`);
  }

  get supportText(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="Support"]`);
  }
}

export default new HomePage();
