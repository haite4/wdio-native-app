export default class Page {
    
  get webvieBtn(){
    return $('//*[@content-desc="Webview"]');
  }

  get loginBtn(){
    return $("~Login");
  }

  get formsBtn(){
    return $("~Forms");
  }

  get swipeBtn(){
    return $("~Swipe");
  }

  get dragBtn(){
    return $("~Drag");
  }

  get homeBtn(){
    return $("~Home");
  }

  get alertOKBtn(){
    return $('//android.widget.Button[@resource-id="android:id/button1"]');
  }

  get breadCrumbs(){
    return $(`//android.view.View[@text="Breadcrumbs"]`);
  }

  get backToHomeIcon(){
    return $(`//android.view.View[@content-desc="Home page"]/android.widget.Image`);
  }

  get loadingElement(){
    return $(`//android.widget.TextView[@text="LOADING..."]`)
  }

  async openLoginTab(){
    await this.loginBtn.click();
  }

  async openFormsTab(){
    await this.formsBtn.click();
  }

  async openSwipeTab(){
    await this.swipeBtn.click();
  }

  async openDragTab(){
    await this.dragBtn.click();
  }

  async openWebvieTab(){
    await this.webvieBtn.click();
  }

  async clickAlertOKBtn(){
    await this.alertOKBtn.click();
  }

  async clickOnBackToHomeIcon(){
    await this.backToHomeIcon.click();
  }

  async openHomeTab() {
    await this.homeBtn.click();
  }
  
  async swipe(startPercentageX: number, startPercentageY: number, endPercentageX: number, endPercentageY: number, speed: number){
    const { width, height } = await driver.getWindowRect();

    const startX = Math.floor(width * startPercentageX);
    const startY = Math.floor(height * startPercentageY);
    const endX = Math.floor(width * endPercentageX);
    const endY = Math.floor(height * endPercentageY);

    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: startX, y: startY },
          { type: "pointerDown", button: 0 },
          { type: "pointerMove", duration: speed, x: endX, y: endY },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  async waitForElement(element: ChainablePromiseElement, shouldDisappear: boolean = false, timeout: number = 40000, timeoutMsg: string = 'Element did not meet the condition within the timeout') {
    await driver.waitUntil(
      async () => {
        const isDisplayed = await element.isDisplayed();
        return shouldDisappear ? !isDisplayed : isDisplayed;
      },
      {
        timeout,
        timeoutMsg,
      }
    );
  }

  async scrollToText(text: string) {
    await driver.execute('mobile: scroll', {
        strategy: '-android uiautomator',
        selector: `new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`
    });
}

}
