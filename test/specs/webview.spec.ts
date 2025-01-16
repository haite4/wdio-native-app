import webviewPage from "../pageobjects/webview.page";
import { webviewTabBtn } from "../../constants/btnDescContent";
import systemMsg from "../../fixtures/textSymbols/systemMsg.json";
import { UrlPaths } from "../../constants/urlPaths";
import swipePage from "../pageobjects/swipe.page";

describe("Verify functionality of webview page", () => {

    beforeEach("Open webviewTab", async () => {
        await webviewPage.openWebvieTab();
    })

    it("TC-02 Verify buttons functionality  in webdriverview tab.", async () => {
        await swipePage.waitForElement(swipePage.loadingElement, true);
        await swipePage.swipeToCenterTheScreen();
        webviewTabBtn.map(async (desc) => {
            await expect(webviewPage.getBtnByContentDescName(desc)).toBeDisplayed();
            await expect(await webviewPage.getBtnByContentDescName(desc).getAttribute("content-desc")).toBe(desc);
        })

        for (const btn of webviewTabBtn) {
            switch (btn) {
                case "Get Started":
                    await webviewPage.getBtnByContentDescName(btn).click();
                    await expect(webviewPage.getStartedTitle).toHaveText(systemMsg.titles.gettingStartedTitle);
                    await expect(webviewPage.breadCrumbs).toBeDisplayed();
                    await expect(webviewPage.getStartedBreadCrumbsText).toHaveText(systemMsg.titles.gettingStartedTitle);
                    await expect(webviewPage.backToHomeIcon).toBeDisplayed();

                    await webviewPage.clickOnBackToHomeIcon();
                    await webviewPage.waitForElement(webviewPage.getBtnByContentDescName(webviewTabBtn[0]));
                    await swipePage.swipeToCenterTheScreen();
                    break;
                case "Why WebdriverIO?":
                    await webviewPage.getBtnByContentDescName(btn).click();
                    await expect(webviewPage.whyWebDriverIoTitle).toHaveText(systemMsg.titles.whyWebdriverIoBreadCrumbsText);
                    await expect(webviewPage.whyWebDriverIoBreadCrumbsText).toHaveText(systemMsg.titles.whyWebdriverIoBreadCrumbsText);
                    await expect(webviewPage.getStartedBreadCrumbsText).toHaveText(systemMsg.titles.gettingStartedTitle);
                    await expect(webviewPage.backToHomeIcon).toBeDisplayed();

                    await webviewPage.clickOnBackToHomeIcon();
                    await webviewPage.waitForElement(webviewPage.getBtnByContentDescName(webviewTabBtn[0]));
                    await swipePage.swipeToCenterTheScreen();
                    break;
                case "View on GitHub":
                    await webviewPage.getBtnByContentDescName(btn).click();
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
                    await webviewPage.getBtnByContentDescName(btn).click();
                    await webviewPage.waitForElement(webviewPage.subscribeYouTubeBtn);
                    await expect(webviewPage.subscribeYouTubeBtn).toBeDisplayed();
                    break;
            }
        }
    })
});