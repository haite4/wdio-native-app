import formsPage from "../pageobjects/forms.page";
import { faker } from "@faker-js/faker";

describe("Verify Forms functionality", () => {
    const randomWord = (length?: number) => {return faker.string.alpha({length: length ?? 1})};

    beforeEach("Open forms tab", async() => {
        await formsPage.openFormsTab();
    })

    it("TC-06 Verify Input and Checking fields functionality.", async () => {
        const generatedOneSymbol = randomWord();
        const generateThirtyCharacters = randomWord(30);
        const generateThirtyOneCharacters = randomWord(31);

        await expect(formsPage.inputFieldTitle).toBeDisplayed();
        await expect(formsPage.firstInputField).toBeDisplayed();
        await expect(formsPage.youHaveTypedInput).toBeDisplayed();
        await expect(formsPage.youHaveTypedTitle).toBeDisplayed();

        await formsPage.firstInputField.setValue(generatedOneSymbol);
        await expect(formsPage.firstInputField).toHaveText(generatedOneSymbol);
        await formsPage.firstInputField.clearValue();
        await expect(formsPage.firstInputField).toBeDisplayed();

        await formsPage.firstInputField.setValue(generateThirtyCharacters);
        await expect(formsPage.firstInputField).toHaveText(generateThirtyCharacters);
        await formsPage.firstInputField.clearValue();
        await expect(formsPage.firstInputField).toBeDisplayed();

        await formsPage.firstInputField.setValue(generateThirtyOneCharacters);
        await expect(formsPage.firstInputField).toHaveText(generateThirtyOneCharacters.slice(0, -1));
        await formsPage.firstInputField.clearValue();
        await expect(formsPage.firstInputField).toBeDisplayed();
    })

    it("TC-09 Verify Forms buttons functionality.", async() => {
        await expect(formsPage.formsButtonsTitle).toBeDisplayed();
        await expect(formsPage.activeBtn).toBeDisplayed();
        await expect(formsPage.activeBtnText).toBeDisplayed();
        await expect(formsPage.inactiveBtn).toBeDisplayed();
        await expect(formsPage.inactiveBtnText).toBeDisplayed();

        await formsPage.activeBtn.click();
        await expect(formsPage.activePopUpTitle).toBeDisplayed();
        await expect(formsPage.activePopUpDesc).toBeDisplayed();
        await expect(formsPage.activePopUpAskMeLaterBtn).toBeDisplayed();
        await expect(formsPage.activePopUpCancelBtn).toBeDisplayed();
        await expect(formsPage.activePopUpOkBtn).toBeDisplayed();
        await formsPage.clickOutSidePopUp();
        await expect(formsPage.activePopUpTitle).toBeDisplayed();

        await formsPage.activePopUpOkBtn.click();
        await expect(formsPage.activePopUpTitle).not.toBeDisplayed();
        await formsPage.activeBtn.click();
        await formsPage.activePopUpAskMeLaterBtn.click();
        await expect(formsPage.activePopUpTitle).not.toBeDisplayed();
        await formsPage.activeBtn.click();
        await formsPage.activePopUpCancelBtn.click();
        await expect(formsPage.activePopUpTitle).not.toBeDisplayed(); 
 })
})