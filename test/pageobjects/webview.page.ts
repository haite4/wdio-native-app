import Page from "./base.page";

class WebviewPage extends Page {
    
  get robotImage() {
    return $(`//android.view.View[@text="WebdriverIO"]`);
  }

  get getStartedTitle() {
    return $(`//android.widget.TextView[@text="Getting Started"]`);
  }

  get getStartedBreadCrumbsText() {
    return $(`//android.widget.TextView[@text="Getting Started"]`);
  }

  get whyWebDriverIoTitle() {
    return $(`//android.widget.TextView[@text="Why Webdriver.IO?"]`);
  }

  get whyWebDriverIoBreadCrumbsText() {
    return $(`//android.view.View[@text="Why Webdriver.IO?"]`);
  }

  get subscribeYouTubeBtn() {
    return $(`//android.view.ViewGroup[@content-desc="Subscribe to WebdriverIO."]`);
  }

  get cornerRobotIcon() {
    return $('//*[@text="WebdriverIO AI Copilot"]');
}

  getBtnByContentDescName(desc: string) {
      return $(`//android.view.View[@content-desc="${desc}"]`);
  }
}

export default new WebviewPage();
