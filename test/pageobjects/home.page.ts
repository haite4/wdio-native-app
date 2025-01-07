import Page from "./base.page";

class HomePage extends Page {

    get robotImage(){
        return $(`//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]`);
    }

    get webdriverTitle(){
        return $(`//android.widget.TextView[@text="WEBDRIVER"]`)
    }

    get ioTitle(){
        return $(`//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[2]`)
    }

    get webdriverIoDescription(){
        return $(`//android.widget.TextView[@text="Demo app for the appium-boilerplate"]`)
    }

    get supportText(){
        return $(`//android.widget.TextView[@text="Support"]`)
    }
}


export default new HomePage();