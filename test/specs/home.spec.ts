import homePage from "../pageobjects/home.page";
import webviePage from "../pageobjects/webvie.page";
import loginPage from "../pageobjects/login.page";
import formsPage from "../pageobjects/forms.page";
import swipePage from "../pageobjects/swipe.page";
import dragPage from "../pageobjects/drag.page";

describe('Home tab test', () => {
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