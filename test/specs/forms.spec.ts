import formsPage from "../pageobjects/forms.page";
import systemMsg from "../../fixtures/textSymbols/systemMsg.json";

describe('Forms tab test', () => {
    beforeEach(async () => {
        await formsPage.openFormsTab();
    });

    it('WD_005 - Verify Form screen elements visibility.', async () => {
        await expect(formsPage.title).toBeDisplayed();
        
        await expect(formsPage.textInputTitle).toHaveText(systemMsg.forms.inputFieldTitle);
        await expect(formsPage.textInput).toBeDisplayed();
        await expect(formsPage.textInput).toHaveText(systemMsg.forms.defaultInputText);

        await expect(formsPage.textInputResultTitle).toHaveText(systemMsg.forms.typedTextTitle);

        await expect(formsPage.switch).toBeDisplayed();
        await expect(formsPage.switchText).toHaveText(systemMsg.forms.switchTextOn);

        await expect(formsPage.dropdown).toBeDisplayed();
        await expect(formsPage.dropdownTitle).toHaveText(systemMsg.forms.dropdownTitle);
        await expect(formsPage.dropdown).toHaveText(systemMsg.forms.defaultDropdownText);
        await expect(formsPage.arrowIcon).toBeDisplayed();
        
        await expect(formsPage.activeBtn).toBeDisplayed();
        await expect(formsPage.invactiveBtn).toBeDisplayed();
    });

    it('WD_007 - Verify Toggle functionality.', async () => {
        await expect(formsPage.switch).toBeDisplayed();
        await expect(formsPage.switchText).toHaveText(systemMsg.forms.switchTextOn);

        await formsPage.switch.click();
        await expect(formsPage.switchText).toHaveText(systemMsg.forms.switchTextOff);

        await formsPage.switch.click();
        await expect(formsPage.switchText).toHaveText(systemMsg.forms.switchTextOn);
    });

    it('WD_008 - Verify Dropdown functionality.', async () => {
        await formsPage.selectDropdownItemAndVerify(systemMsg.dropdownItems.awesomeWebdriver);
        await formsPage.selectDropdownItemAndVerify(systemMsg.dropdownItems.awesomeAppium);
    });
});