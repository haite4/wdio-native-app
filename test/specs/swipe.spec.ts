import swipePage from "../pageobjects/swipe.page";
import systemMsg from "../../fixtures/textSymbols/systemMsg.json";
import { cartTitle, cartDescription } from "../../constants/swipeCartContent";

describe("Verify functionality on swipe tab", () => {

    beforeEach("Open swipe tab", async() => {
        await swipePage.openSwipeTab();
    })

    it("TC-10 Verify swipe functionality in  the 'Swipe tab'", async() => {
        await expect(swipePage.swipeHorizontalTitle).toHaveText(systemMsg.titles.swipeHorizontalTitle);
        await expect(swipePage.whatImHidingTitle).toHaveText(systemMsg.descriptions.swipeVerticalToFindWhatImHiding);

        for(let i = 0; i <  cartTitle.length; i++ ){
                const elementIndex = i === 0 ? 1 : 2;
                await expect(swipePage.getTitleAndDescByText(cartTitle[i])).toHaveText(cartTitle[i]);
                await expect(swipePage.getTitleAndDescByText(cartDescription[i])).toHaveText(cartDescription[i]);
                const element = swipePage.getCardByIndex(elementIndex);
                await swipePage.swipeHorizontal(element);
        }
      
       await swipePage.scrollToText(systemMsg.youFoundMe);
    });
})
