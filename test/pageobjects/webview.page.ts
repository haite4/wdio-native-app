import Page from "./base.page";

class WebviewPage extends Page {
    get robotImage(){
        return $(`//android.view.View[@text="WebdriverIO"]`)
    }

    get getStartedTitle(){
        return $(`//android.widget.TextView[@text="Getting Started"]`)
    }
    
    get getStartedBreadCrumbsText(){
        return  $(`//android.view.View[@text="Getting Started"]`)
    }

    get whyWebDriverIoTitle(){
        return $(`//android.widget.TextView[@text="Why Webdriver.IO?"]`)
    }

    get whyWebDriverIoBreadCrumbsText(){
        return  $(`//android.view.View[@text="Why Webdriver.IO?"]`)
    }

    getBtnByContentDescName(desc: string){
        return $(`//android.view.View[@content-desc="${desc}"]`)
    }
}

export default new WebviewPage();