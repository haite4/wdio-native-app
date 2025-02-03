import dragPage from "../pageobjects/drag.page";

describe('Drag and drop tab test', () => {
    const dragPieces = dragPage.pieceNames.map(name => dragPage.dragPiece(name));
    const dropPieces = dragPage.pieceNames.map(name => dragPage.dropPiece(name));
    
    beforeEach(async () => {
        await dragPage.openDragTab();
        await dragPage.clickRefreshBtn();
    });

    
    it('WD_010 - Verify moving the piece of puzzle on the corresponding place.', async () => {
        for (let i = 0; i < dragPieces.length; i++) {
            await dragPage.dragPieceToDrop(dragPieces[i], dropPieces[i]);
            await expect(dragPieces[i]).not.toBeDisplayed();
        }
    });

    it('WD_012 - Verify moving the piece of puzzle on the non-corresponding place.', async () => {
        for (let i = 0; i < dragPieces.length; i++) {
            await dragPage.dragPieceToDrop(dragPieces[i], dragPieces[i]);
            await expect(dragPieces[i]).toBeDisplayed();

            const incorrectDropIndex = (i + 1) % dropPieces.length; 
            await dragPage.dragPieceToDrop(dragPieces[i], dropPieces[incorrectDropIndex]);
            await expect(dragPieces[i]).toBeDisplayed();
        }

        await dragPage.dragPieceToDrop(dragPieces[0], dragPage.refreshBtn);
        await expect(dragPieces[0]).toBeDisplayed();
    });

    it('WD_014 - Verify retry functionality after completing the puzzle.', async () => {
        for (let i = 0; i < dragPieces.length; i++) {
            await dragPage.dragPieceToDrop(dragPieces[i], dropPieces[i]);
        }

        await expect(dragPage.congratsTitle).toBeDisplayed();
        await expect(dragPage.congratsMessage).toBeDisplayed();
        await expect(dragPage.retryButton).toBeDisplayed();

        await dragPage.retryButton.click();

        await expect(dragPage.dragAndDropTitle).toBeDisplayed();
        await dragPage.assertDragPiecesVisible();
    });

    it("TC-11 Verify refreshing the Drag-and-Drop puzzle.", async() => {
        const dragPieceL2 = dragPage.dragPiece(dragPage.pieceNames[1])
        const dropPieceL2 =  dragPage.dropPiece(dragPage.pieceNames[1])

        await expect(dragPage.dragAndDropTitle).toBeDisplayed();
        await expect(dragPage.robotPuzzleSection).toBeDisplayed();
        for (let piece of dragPage.pieceNames) {
            await expect(dragPage.dragPiece(piece)).toBeDisplayed();
        }

        await expect(dragPage.refreshBtn).toBeDisplayed();
        await dragPage.dragPieceToDrop(dragPieceL2, dropPieceL2);
        await expect(dragPieceL2).not.toBeDisplayed();
        await expect(dropPieceL2).not.toBeDisplayed();

        await dragPage.clickRefreshBtn();
        await expect(dragPieceL2).toBeDisplayed();
        await expect(dropPieceL2).toBeDisplayed();
    })

    it("TC-13 Verify completing the puzzle.", async() => {
        await dragPage.performDragAndDropForAll();
        await expect(dragPage.congratsTitle).toBeDisplayed();
        await expect(dragPage.congratsMessage).toBeDisplayed();
        await expect(dragPage.retryButton).toBeDisplayed(); 
    })
});