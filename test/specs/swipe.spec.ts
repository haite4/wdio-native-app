import swipePage from "../pageobjects/swipe.page";
import generalMsg from "../../fixtures/textSymbols/generalMsg.json";

describe("Verify functionality on swipe tab", () => {

    beforeEach("Open swipe tab", async() => {
        await swipePage.openSwipeTab();
    })

    it("TC-10 Verify swipe functionality in  the 'Swipe tab'", async() => {
        await expect(swipePage.swipeHorizontalTitle).toHaveText(generalMsg.swipeHorizontalTitle);
        await expect(swipePage.whatImHidingTitle).toHaveText(generalMsg.swipeVerticalToFindWhatImHiding);
    })
})