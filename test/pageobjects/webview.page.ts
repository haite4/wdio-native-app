import Page from "./base.page";

class WebviewPage extends Page {
    
  get robotImage(): ChainablePromiseElement {
    return $(`//android.view.View[@text="WebdriverIO"]`);
  }

  get getStartedTitle(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="Getting Started"]`);
  }

  get getStartedBreadCrumbsText(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="Getting Started"]`);
  }

  get whyWebDriverIoTitle(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="Why Webdriver.IO?"]`);
  }

  get whyWebDriverIoBreadCrumbsText(): ChainablePromiseElement {
    return $(`//android.view.View[@text="Why Webdriver.IO?"]`);
  }

  get repositoriesTabInGh(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="Repositories"]`);
  }

  get subscribeYouTubeBtn(): ChainablePromiseElement {
    return $(`//android.view.ViewGroup[@content-desc="Subscribe to WebdriverIO."]`);
  }

  getBtnByContentDescName(desc: string): ChainablePromiseElement {
    return $(`//android.view.View[@content-desc="${desc}"]`);
  }
}

export default new WebviewPage();
