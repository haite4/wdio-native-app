import dragDropPage from "../pageobjects/dragDrop.page";
import generalMsg from "../../fixtures/textSymbols/generalMsg.json";
import successMsg from "../../fixtures/textSymbols/successMsg.json";

describe("Verify drap and drop functionality", () => {

    beforeEach("Open drag and drop tab", async() => {
        await dragDropPage.openDragTab();
    })
    it("TC-11 Verify refreshing the Drag-and-Drop puzzle.", async() => {
        await expect(dragDropPage.dragAndDropTitle).toHaveText(generalMsg.dragDropTitle);
        await expect(dragDropPage.robotPuzzleSection).toBeDisplayed();
        for (let piece of dragDropPage.dragPieces) {
            await expect(piece).toBeDisplayed();
        }
        await expect(dragDropPage.refreshBtn).toBeDisplayed();
        await dragDropPage.dragPieceToDrop(dragDropPage.dragPieceL2, dragDropPage.dropPieceL2);
        await expect(dragDropPage.dragPieceL2).not.toBeDisplayed();
        await expect(dragDropPage.dropPieceL2).not.toBeDisplayed();
        await dragDropPage.clickRefreshBtn();
        await expect(dragDropPage.dragPieceL2).toBeDisplayed();
        await expect(dragDropPage.dropPieceL2).toBeDisplayed();
    })

    it("TC-13 Verify completing the puzzle.", async() => {
        await dragDropPage.performDragAndDropForAll();
        await expect(dragDropPage.congratsTitle).toHaveText(successMsg.dragCongratsTitle);
        await expect(dragDropPage.congratsMessage).toHaveText(successMsg.dragCongratsMsg);
        await expect(dragDropPage.retryButton).toBeDisplayed(); 
    })
})  