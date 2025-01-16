import homePage from "../pageobjects/home.page";
import systemMsg from "../../fixtures/textSymbols/systemMsg.json";

describe("Verify functionality of home page", () => {
  
    it("TC 02. Verify elements visibility on the Home screen", async () => {
      await expect(homePage.robotImage).toBeDisplayed();
      await expect(homePage.webdriverTitle).toBeDisplayed();
      await expect(homePage.ioTitle).toBeDisplayed();
      await expect(homePage.webdriverIoDescription).toHaveText(systemMsg.descriptions.webdriverIoDesc);
      await expect(homePage.supportText).toBeDisplayed();
      await expect(homePage.supportText).toHaveText(systemMsg.support);
    });

    it("TC-03 Observe tabs in the main navigation menu.", async() => {
        const tabs = [
          homePage.webvieBtn,
          homePage.loginBtn,
          homePage.formsBtn,
          homePage.swipeBtn,
          homePage.dragBtn,
          homePage.homeBtn
        ]

        for(const tab of tabs){
          await expect(tab).toBeDisplayed()
        }
    });
  
});
