 export default class Page {
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

    get breadCrumbs(){
        return $(`//android.view.View[@text="Breadcrumbs"]`)
    }

    get backToHomeIcon(){
        return $(`//android.view.View[@content-desc="Home page"]/android.widget.Image`)
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

    async clickOnBackToHomeIcon(){
        await this.backToHomeIcon.click();
    }
 
    async swipe(startPercentageX: number, startPercentageY: number, endPercentageX: number, endPercentageY: number, speed: number) {
        const { width, height } = await driver.getWindowRect();
   
        const startX = Math.floor(width * startPercentageX);
        const startY = Math.floor(height * startPercentageY);
        const endX = Math.floor(width * endPercentageX);
        const endY = Math.floor(height * endPercentageY);
   
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerMove', duration: speed, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
    }

    async swipeDownToExpectedElement(element: ChainablePromiseElement) {
        let elementVisible = false;
 
        while (!elementVisible) {
            await this.swipe(0.2, 0.8, 0.2, 0.7, 100); 
 
            try {
                await expect(element).toBeDisplayed();
                elementVisible = true;
            } catch (error) {
                console.log(element.selector + " is not visible, continuing swipe...");
            }
        }
 
        if (!elementVisible) {
            throw new Error(element.selector + " is not found within the timeout period");
        }
    }
}