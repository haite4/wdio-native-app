import Page from "./base.page";

class WebviePage extends Page {
    get firstHeaderText() {
        return $('//android.widget.TextView[contains(@text, "We stand with the people of Ukraine")]');
    }

    get secondHeaderText() {
        return $('//*[contains(@text, "Please support")]');
    }

    get crossIconButton() {
        return $('//android.widget.Button[@text="Close"]');
    }

    get robotIcon () {
        return $('//android.view.View[@text="WebdriverIO"]');
    }

    get webviePageTitle () {
        return $('//*[@text="Next-gen browser and mobile automation test framework for Node.js"]');
    }

    get getStartedButton() {
        return $('//*[@content-desc="Get Started"]');
    } 

    get whyWebdriverIOButton() {
        return $('//*[@content-desc="Why WebdriverIO?"]');
    } 

    get viewOnGitHubButton() {
        return $('//*[@content-desc="View on GitHub"]');
    } 

    get watchOnYouTubeButton() {
        return $('//*[@content-desc="Watch on YouTube"]');
    } 

    get firstCardTitle() {
        return $('//*[@text="Test in Real Environments"]');
    }

    get secondCardTitle() {
        return $('//*[@text="Versatile and Feature Rich"]');
    }

    get thirdCardTitle() {
        return $('//*[@text="Auto Wait"]');
    }

    get fourthCardTitle() {
        return $('//*[@text="Based on Web Standards"]');
    }

    get fifthCardTitle() {
        return $('//*[@text="Native Mobile Support"]');
    }

    get sixthCardTitle() {
        return $('//*[@text="Committed Community"]');
    }

    get componentTestingTitle() {
        return $('//*[@text="E2E and Unit / Component Testing in real Browser!"]');
    }

    get getStartedTitle() {
        return $('//*[@text="Get Started With WebdriverIO within Seconds"]');
    }

    get watchTalksTitle() {
        return $('//*[@text="Watch Talks about WebdriverIO"]');
    }

    get googleLightHouseTitle() {
        return $('//*[@text="Google Lighthouse Integration"]');
    }

    get openSourceTitle() {
        return $('//*[@text="Open Source and Open Governed"]');
    }

    get returnToHomeIcon() {
        return $('//android.widget.Image[@text="WebdriverIO"]');
    }

    get getStartedSectionTitle() {
        return $('//*[@text="Getting Started"]');
    } 

    get cornerRobotIcon() {
        return $('//*[@text="WebdriverIO AI Copilot"]');
    }

    get copyrightBottomText() {
        return $('//android.widget.TextView[@text="Copyright © 2024 OpenJS Foundation"]');
    }
}

export default new WebviePage();