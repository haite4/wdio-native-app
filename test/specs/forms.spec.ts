import formsPage from "../pageobjects/forms.page";
import generalMsg from "../../fixtures/textSymbols/generalMsg.json";
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

        await expect(formsPage.inputFieldTitle).toHaveText(generalMsg.inputFieldFormsTitle);
        await expect(formsPage.firstInputField).toHaveText(generalMsg.typeSomething);
        await expect(formsPage.youHaveTypedInput).toBeDisplayed();
        await expect(formsPage.youHaveTypedTitle).toHaveText(generalMsg.youHaveTypedTitle);
        await formsPage.firstInputField.setValue(generatedOneSymbol);
        await expect(formsPage.firstInputField).toHaveText(generatedOneSymbol);
        await formsPage.firstInputField.clearValue();
        await expect(formsPage.firstInputField).toHaveText(generalMsg.typeSomething);
        await formsPage.firstInputField.setValue(generateThirtyCharacters);
        await expect(formsPage.firstInputField).toHaveText(generateThirtyCharacters);
        await formsPage.firstInputField.clearValue();
        await expect(formsPage.firstInputField).toHaveText(generalMsg.typeSomething);
        await formsPage.firstInputField.setValue(generateThirtyOneCharacters);
        await expect(formsPage.firstInputField).toHaveText(generateThirtyOneCharacters.slice(0, -1));
        await formsPage.firstInputField.clearValue();
        await expect(formsPage.firstInputField).toHaveText(generalMsg.typeSomething);
    })

    it("TC-09 Verify Forms buttons functionality.", async() => {
        await expect(formsPage.formsButtonsTitle).toHaveText(generalMsg.buttonsTitle);
        await expect(formsPage.activeBtn).toBeDisplayed();
        await expect(formsPage.activeBtnText).toHaveText(generalMsg.activeBtn);
        await expect(formsPage.inactiveBtn).toBeDisplayed();
        await expect(formsPage.inactiveBtnText).toHaveText(generalMsg.inactiveBtn);
        await formsPage.activeBtn.click();
        await expect(formsPage.activePopUpTitle).toHaveText(generalMsg.formsButtonActivePopUpTitle);
        await expect(formsPage.activePopUpDesc).toHaveText(generalMsg.formsButtonActivePopUpDesc);
        await expect(formsPage.activePopUpAskMeLaterBtn).toBeDisplayed();
        await expect(formsPage.activePopUpAskMeLaterBtn).toHaveText(generalMsg.askMeLaterBtnText);
        await expect(formsPage.activePopUpCancelBtn).toBeDisplayed();
        await expect(formsPage.activePopUpCancelBtn).toHaveText(generalMsg.cancelBtnText);
        await expect(formsPage.activePopUpOkBtn).toBeDisplayed();
        await expect(formsPage.activePopUpOkBtn).toHaveText(generalMsg.oK);
        await driver.action("pointer", { parameters: { pointerType: 'touch' } })
        .move({ x: 50, y: 50 })
        .down().up().perform(true);
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