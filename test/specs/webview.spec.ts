import  webviewPage from "../pageobjects/webview.page";
import path from "path";
import { resizeImage, deleteImages } from "../../helpers/imageHelper";
import { webviewTabBtn } from "../../constants/btnDescContent";
import generalMsg from "../../fixtures/textSymbols/generalMsg.json";
import fs from "fs";

describe("Verify functionality of webview page", () => {
    const TEST_IMAGE_1_PATH = path.resolve("fixtures" ,"images", "robot.png");
    const TEST_IMAGE_SAVED_PATH = path.resolve("fixtures", "images", "savedImage.png");
    const TEST_RESIZED_IMAGE = path.resolve( "fixtures", "images", "output.png");
    const TEST_RESIZED_IMAGE1 = path.resolve("fixtures", "images", "output1.png");

    const filesToDelete = [TEST_IMAGE_SAVED_PATH, TEST_RESIZED_IMAGE, TEST_RESIZED_IMAGE1];
    it("TC-02 Verify buttons functionality  in webdriverview tab.", async() => {
        await webviewPage.openWebvieTab();
        await webviewPage.robotImage.saveScreenshot(TEST_IMAGE_SAVED_PATH);
        const { width, height } = await webviewPage.robotImage.getSize();
        await resizeImage(TEST_IMAGE_1_PATH, TEST_RESIZED_IMAGE, width, height);
        await resizeImage(TEST_IMAGE_SAVED_PATH, TEST_RESIZED_IMAGE1, width, height);

        const TEST_RESIZED_IMAGE_1_BS64  = fs.readFileSync(TEST_RESIZED_IMAGE).toString("base64");
        const TEST_RESIZED_IMAGE_2_BS64 = fs.readFileSync(TEST_RESIZED_IMAGE1).toString("base64");
           
        const comparison = await driver.compareImages("getSimilarity", TEST_RESIZED_IMAGE_1_BS64, TEST_RESIZED_IMAGE_2_BS64,{});
        await expect(comparison.score).toBeGreaterThanOrEqual(0.3);
        await webviewPage.swipeDownToExpectedElement(webviewPage.getBtnByContentDescName(webviewTabBtn[3]))
        webviewTabBtn.map(async (desc) => {
            await expect(webviewPage.getBtnByContentDescName(desc)).toBeDisplayed();
            await expect(await webviewPage.getBtnByContentDescName(desc).getAttribute("content-desc")).toBe(desc);
        })

        for(const btn of webviewTabBtn){
            switch(btn){
                case "Get Started":
                    await webviewPage.getBtnByContentDescName(btn).click();
                    await expect(webviewPage.getStartedTitle).toHaveText(generalMsg.gettingStartedTitle);
                    await expect(webviewPage.breadCrumbs).toBeDisplayed();
                    await expect(webviewPage.getStartedBreadCrumbsText).toHaveText(generalMsg.gettingStartedTitle);
                    await expect(webviewPage.backToHomeIcon).toBeDisplayed();
                    await webviewPage.clickOnBackToHomeIcon();
                    await webviewPage.swipeDownToExpectedElement(webviewPage.getBtnByContentDescName(webviewTabBtn[3]));
                    break;
                case "Why WebdriverIO?":
                    await webviewPage.getBtnByContentDescName(btn).click();
                    await expect(webviewPage.whyWebDriverIoTitle).toHaveText(generalMsg.whyWebdriverIoBreadCrumbsText);
                    await expect(webviewPage.whyWebDriverIoBreadCrumbsText).toHaveText(generalMsg.whyWebdriverIoBreadCrumbsText);
                    await expect(webviewPage.getStartedBreadCrumbsText).toHaveText(generalMsg.gettingStartedTitle);
                    await expect(webviewPage.backToHomeIcon).toBeDisplayed();
                    await webviewPage.clickOnBackToHomeIcon();
                    await webviewPage.swipeDownToExpectedElement(webviewPage.getBtnByContentDescName(webviewTabBtn[3]));
                    break;
                case "View on GitHub":
                    await webviewPage.getBtnByContentDescName(btn).click();
                    await expect(webviewPage.repositoriesTabInGh).toBeDisplayed();
                    await driver.back();
                    await webviewPage.swipeDownToExpectedElement(webviewPage.getBtnByContentDescName(webviewTabBtn[3]));
                    break;
                case "Watch on YouTube":
                    console.log("Current context", await driver.getContext());
                    await webviewPage.getBtnByContentDescName(btn).click();
                    const contexts =  await driver.getContexts();
                    console.log(contexts)
                    if (contexts.includes("WEBVIEW_chrome")) {
                        await driver.switchContext("WEBVIEW_chrome");
                    } else {
                        throw new Error("WEBVIEW_chrome not found in available contexts");
                    }

                    console.log("Second context", await driver.getContext());

                    console.log("Current url", await driver.getUrl());
                    break;
                }
      
        await expect(webviewPage.getBtnByContentDescName(webviewTabBtn[0])).toBeDisplayed();
    }
    })

    afterEach("Delete Images", async() => {        
        await deleteImages(filesToDelete);
    })
})