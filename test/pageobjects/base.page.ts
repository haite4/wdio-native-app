export default class Page {
    get homeBtn() {
        return $('//*[@content-desc="Home"]');
    }
    get webvieBtn() {
        return $('//*[@content-desc="Webview"]');
    }
    get loginBtn() {
        return $('~Login');
    }
    get formsBtn() {
        return $('~Forms');
    }
    get swipeBtn() {
        return $('~Swipe');
    }
    get dragBtn() {
        return $('~Drag');
    }
    get alertOKBtn() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    async openHomeTab() {
        await this.homeBtn.click();
    }

    async openLoginTab() {
        await this.loginBtn.click();
    }
    
    async openFormsTab() {
        await this.formsBtn.click();
    }

    async openSwipeTab() {
        await this.swipeBtn.click();
    }

    async openDragTab() {
        await this.dragBtn.click();
    }

    async openWebvieTab() {
        await this.webvieBtn.click();
    }

    async clickAlertOKBtn() {
        await this.alertOKBtn.click();
    }

    async scrollToText(text: string) {
        await driver.execute('mobile: scroll', {
            strategy: '-android uiautomator',
            selector: `new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`
        });
    }
}
