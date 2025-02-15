import webviewPage from "../pageobjects/webview.page";
import { webviewTabBtn } from "../../constants/btnDescContent";
import { UrlPaths } from "../../constants/urlPaths";
import swipePage from "../pageobjects/swipe.page";
import systemMsg from "../../fixtures/textSymbols/systemMsg.json";
import webviePage from "../pageobjects/webview.page";

describe("Verify functionality of webview page", () => {

    beforeEach("Open webviewTab", async () => {
        await driver.reloadSession();
        await webviewPage.openWebvieTab();
    })

    it('TC-09 - Verify functionality of the helper modal in Webview tab.', async () => {
        await webviePage.scrollToText(systemMsg.copyrightText);
        await expect(webviePage.cornerRobotIcon).toBeEnabled();
    });

    it("TC-02 Verify buttons functionality  in webdriverview tab.", async () => {
        await swipePage.waitForElement(swipePage.loadingElement, true);
        await swipePage.swipeToCenterTheScreen();
        webviewTabBtn.map(async (desc) => {
            await expect(webviewPage.getBtnByContentDescName(desc)).toBeDisplayed();
            await expect(webviewPage.getBtnByContentDescName(desc)).toHaveAttr("content-desc", desc)
        })

        for (const btn of webviewTabBtn) {
            await webviewPage.getBtnByContentDescName(btn).click();
            switch (btn) {
                case "Get Started":
                    await expect(webviewPage.getStartedTitle).toBeDisplayed();
                    await expect(webviewPage.breadCrumbs).toBeDisplayed();
                    await expect(webviewPage.getStartedBreadCrumbsText).toBeDisplayed();
                    await expect(webviewPage.backToHomeIcon).toBeDisplayed();

                    await webviewPage.clickOnBackToHomeIcon();
                    await webviewPage.waitForElement(webviewPage.getBtnByContentDescName(webviewTabBtn[0]));
                    await swipePage.swipeToCenterTheScreen();
                    break;
                case "Why WebdriverIO?":
                    await expect(webviewPage.whyWebDriverIoTitle).toBeDisplayed();
                    await expect(webviewPage.whyWebDriverIoBreadCrumbsText).toBeDisplayed();
                    await expect(webviewPage.getStartedBreadCrumbsText).toBeDisplayed();
                    await expect(webviewPage.backToHomeIcon).toBeDisplayed();

                    await webviewPage.clickOnBackToHomeIcon();
                    await webviewPage.waitForElement(webviewPage.getBtnByContentDescName(webviewTabBtn[0]));
                    await swipePage.swipeToCenterTheScreen();
                    break;
                case "View on GitHub":
                    const contexts = await driver.getContexts();

                    if (contexts.includes("WEBVIEW_chrome")) {
                        await driver.switchContext("WEBVIEW_chrome");
                        await expect(await driver.getUrl()).toContain(UrlPaths.GITHUBWDIO);
                        await driver.switchContext("NATIVE_APP");
                    } else {
                        console.error("Context webview not available");
                    }
                    await driver.back();
                    break;
                case "Watch on YouTube":
                    await webviewPage.waitForElement(webviewPage.subscribeYouTubeBtn);
                    await expect(webviewPage.subscribeYouTubeBtn).toBeDisplayed();
                    break;
            }
        }
    })
});