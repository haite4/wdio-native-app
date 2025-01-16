import dragDropPage from "../pageobjects/dragDrop.page";
import systemMsg from "../../fixtures/textSymbols/systemMsg.json";

describe("Verify drap and drop functionality", () => {

    beforeEach("Open drag and drop tab", async() => {
        await dragDropPage.openDragTab();
    })
    
    it("TC-11 Verify refreshing the Drag-and-Drop puzzle.", async() => {
        const dragPieceL2 = dragDropPage.dragPiece(dragDropPage.pieceNames[1])
        const dropPieceL2 =  dragDropPage.dropPiece(dragDropPage.pieceNames[1])

        await expect(dragDropPage.dragAndDropTitle).toHaveText(systemMsg.titles.dragDropTitle);
        await expect(dragDropPage.robotPuzzleSection).toBeDisplayed();
        for (let piece of dragDropPage.pieceNames) {
            await expect(dragDropPage.dragPiece(piece)).toBeDisplayed();
        }

        await expect(dragDropPage.refreshBtn).toBeDisplayed();
        await dragDropPage.dragPieceToDrop(dragPieceL2, dropPieceL2);
        await expect(dragPieceL2).not.toBeDisplayed();
        await expect(dropPieceL2).not.toBeDisplayed();

        await dragDropPage.clickRefreshBtn();
        await expect(dragPieceL2).toBeDisplayed();
        await expect(dropPieceL2).toBeDisplayed();
    })

    it("TC-13 Verify completing the puzzle.", async() => {
        await dragDropPage.performDragAndDropForAll();
        await expect(dragDropPage.congratsTitle).toHaveText(systemMsg.titles.dragCongratsTitle);
        await expect(dragDropPage.congratsMessage).toHaveText(systemMsg.success.dragCongratsMsg);
        await expect(dragDropPage.retryButton).toBeDisplayed(); 
    })
})  