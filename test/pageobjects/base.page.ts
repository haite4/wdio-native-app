export default class Page {
  get webvieBtn(): ChainablePromiseElement {
    return $('//*[@content-desc="Webview"]');
  }
  get loginBtn(): ChainablePromiseElement {
    return $("~Login");
  }
  get formsBtn(): ChainablePromiseElement {
    return $("~Forms");
  }
  get swipeBtn(): ChainablePromiseElement {
    return $("~Swipe");
  }
  get dragBtn(): ChainablePromiseElement {
    return $("~Drag");
  }

  get homeBtn(): ChainablePromiseElement {
    return $("~Home");
  }

  get alertOKBtn(): ChainablePromiseElement {
    return $('//android.widget.Button[@resource-id="android:id/button1"]');
  }

  get breadCrumbs(): ChainablePromiseElement {
    return $(`//android.view.View[@text="Breadcrumbs"]`);
  }

  get backToHomeIcon(): ChainablePromiseElement {
    return $(`//android.view.View[@content-desc="Home page"]/android.widget.Image`);
  }

  async openLoginTab(): Promise<void> {
    await this.loginBtn.click();
  }
  async openFormsTab(): Promise<void> {
    await this.formsBtn.click();
  }
  async openSwipeTab(): Promise<void> {
    await this.swipeBtn.click();
  }
  async openDragTab(): Promise<void> {
    await this.dragBtn.click();
  }
  async openWebvieTab(): Promise<void> {
    await this.webvieBtn.click();
  }
  async clickAlertOKBtn(): Promise<void> {
    await this.alertOKBtn.click();
  }

  async clickOnBackToHomeIcon(): Promise<void> {
    await this.backToHomeIcon.click();
  }

  async swipe(startPercentageX: number, startPercentageY: number, endPercentageX: number, endPercentageY: number, speed: number): Promise<void> {
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

  async swipeDownToExpectedElement(element: ChainablePromiseElement): Promise<void> {
    let elementVisible = false;

    while (!elementVisible) {
      await this.swipe(0.2, 0.8, 0.2, 0.7, 40);

      try {
        await expect(element).toBeDisplayed();
        elementVisible = true;
      } catch (error) {
        console.log(element.selector + " is not visible, continuing swipe...");
      }
    }

    if (!elementVisible) {
      throw new Error(
        element.selector + " is not found within the timeout period"
      );
    }
  }

  async swipeDown(): Promise<void> {
    const { width, height } = await driver.getWindowRect();
    const startX = Math.floor(width * 0.5);
    const startY = Math.floor(height * 0.8);
    const endY = Math.floor(height * 0.2);

    await browser.performActions([
      {
        action: "press",
        options: { x: startX, y: startY },
      },
      {
        action: "wait",
        options: { ms: 500 },
      },
      {
        action: "moveTo",
        options: { x: startX, y: endY },
      },
      {
        action: "release",
      },
    ]);
  }
}
