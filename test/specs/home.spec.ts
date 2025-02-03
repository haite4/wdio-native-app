import homePage from "../pageobjects/home.page";
import webviePage from "../pageobjects/webvie.page";
import loginPage from "../pageobjects/login.page";
import formsPage from "../pageobjects/forms.page";
import swipePage from "../pageobjects/swipe.page";
import dragPage from "../pageobjects/drag.page";

describe("Verify functionality of home page", () => {

  it("TC 02. Verify elements visibility on the Home screen", async () => {
    await expect(homePage.robotImage).toBeDisplayed();
    await expect(homePage.webdriverTitle).toBeDisplayed();
    await expect(homePage.ioTitle).toBeDisplayed();
    await expect(homePage.webdriverIoDescription).toBeDisplayed();
    await expect(homePage.supportText).toBeDisplayed();
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

  it('WD_001 - Verify elements visibility in webdriverview tab.', async () => {
    await expect(homePage.orangeRobot).toBeDisplayed();
  });

  it('WD_004 - Check main navigation menu functionality.', async () => {
      await webviePage.openWebvieTab();

      await expect(webviePage.robotIcon).toBeDisplayed();

      await homePage.openLoginTab();
      await expect(loginPage.emailInputField).toBeDisplayed();

      await homePage.openFormsTab();
      await expect(formsPage.textInput).toBeDisplayed();

      await homePage.openSwipeTab();
      await expect(swipePage.swipePageTitle).toBeDisplayed();

      await homePage.openDragTab();
      await expect(dragPage.refreshBtn).toBeDisplayed();

      await homePage.openHomeTab();
      await expect(homePage.orangeRobot).toBeDisplayed();
  });
  
});
