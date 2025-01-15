import formsPage from "../pageobjects/forms.page";
import systemMsg from "../../fixtures/textSymbols/systemMsg.json";
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

        await expect(formsPage.inputFieldTitle).toHaveText(systemMsg.titles.inputFieldFormsTitle);
        await expect(formsPage.firstInputField).toHaveText(systemMsg.titles.typeSomething);
        await expect(formsPage.youHaveTypedInput).toBeDisplayed();
        await expect(formsPage.youHaveTypedTitle).toHaveText(systemMsg.titles.youHaveTypedTitle);

        await formsPage.firstInputField.setValue(generatedOneSymbol);
        await expect(formsPage.firstInputField).toHaveText(generatedOneSymbol);
        await formsPage.firstInputField.clearValue();
        await expect(formsPage.firstInputField).toHaveText(systemMsg.titles.typeSomething);

        await formsPage.firstInputField.setValue(generateThirtyCharacters);
        await expect(formsPage.firstInputField).toHaveText(generateThirtyCharacters);
        await formsPage.firstInputField.clearValue();
        await expect(formsPage.firstInputField).toHaveText(systemMsg.titles.typeSomething);

        await formsPage.firstInputField.setValue(generateThirtyOneCharacters);
        await expect(formsPage.firstInputField).toHaveText(generateThirtyOneCharacters.slice(0, -1));
        await formsPage.firstInputField.clearValue();
        await expect(formsPage.firstInputField).toHaveText(systemMsg.titles.typeSomething);
    })

    it("TC-09 Verify Forms buttons functionality.", async() => {
        await expect(formsPage.formsButtonsTitle).toHaveText(systemMsg.titles.buttonsTitle);
        await expect(formsPage.activeBtn).toBeDisplayed();
        await expect(formsPage.activeBtnText).toHaveText(systemMsg.buttonText.activeBtn);
        await expect(formsPage.inactiveBtn).toBeDisplayed();
        await expect(formsPage.inactiveBtnText).toHaveText(systemMsg.buttonText.inactiveBtn);

        await formsPage.activeBtn.click();
        await expect(formsPage.activePopUpTitle).toHaveText(systemMsg.titles.formsButtonActivePopUpTitle);
        await expect(formsPage.activePopUpDesc).toHaveText(systemMsg.descriptions.formsButtonActivePopUpDesc);
        await expect(formsPage.activePopUpAskMeLaterBtn).toBeDisplayed();
        await expect(formsPage.activePopUpAskMeLaterBtn).toHaveText(systemMsg.buttonText.askMeLaterBtnText);
        await expect(formsPage.activePopUpCancelBtn).toBeDisplayed();
        await expect(formsPage.activePopUpCancelBtn).toHaveText(systemMsg.buttonText.cancelBtnText);
        await expect(formsPage.activePopUpOkBtn).toBeDisplayed();
        await expect(formsPage.activePopUpOkBtn).toHaveText(systemMsg.oK);
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