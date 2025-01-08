import Page from "./base.page";

class DragPage extends Page {
    pieceNames = ["l1", "l2", "l3", "c1", "c2", "c3", "r1", "r2", "r3"];

    get dragAndDropTitle() {
        return $('//android.widget.TextView[@text="Drag and Drop"]');
    }
    
    get refreshBtn() {
        return $('~renew');
    }

    /**
     * Dynamic getter for drag pieces
     * @param {string} pieceName - The name of the drag piece (e.g., "l1", "c2").
     * @returns {ChainablePromiseElement} - The WebdriverIO element.
     */
    dragPiece(pieceName: String): ChainablePromiseElement {
        return $(`//android.view.ViewGroup[@content-desc="drag-${pieceName}"]`);
    }

    /**
     * Dynamic getter for drop pieces
     * @param {string} pieceName - The name of the drop piece (e.g., "l1", "c2").
     * @returns {ChainablePromiseElement} - The WebdriverIO element.
     */
    dropPiece(pieceName: String): ChainablePromiseElement {
        return $(`//android.view.ViewGroup[@content-desc="drop-${pieceName}"]`);
    }

    get congratsTitle() {
        return $('//android.widget.ImageView');
    }

    get congratsMessage() {
        return $('//*[@text="You made it, click retry if you want to try it again."]');
    }

    get retryButton() {
        return $('//*[@content-desc="button-Retry"]/android.view.ViewGroup');
    }

    async assertDragPiecesVisible() {
        for (let name of this.pieceNames) {
            await expect(this.dragPiece(name)).toBeDisplayed();
        }
    }

    async dragPieceToDrop(pieceLocator: ChainablePromiseElement, dropLocator: ChainablePromiseElement) {
        const piece = await pieceLocator;  
        const dropTarget = await dropLocator;  

        await driver.performActions([{
            type: 'pointer',
            id: 'action1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, origin: piece },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: 200, origin: dropTarget },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
    }

    async clickRefreshBtn() {
        await this.refreshBtn.click();
        await browser.pause(500);
    }

    async dragFirstPiece() {
        await this.dragPieceToDrop(this.dragPiece(this.pieceNames[0]), this.dropPiece(this.dragPiece(this.pieceNames[0])));
    }
}

export default new DragPage();