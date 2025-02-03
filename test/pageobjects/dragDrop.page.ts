import Page from "./base.page";

class DragPage extends Page {
  pieceNames = ["l1", "l2", "l3", "c1", "c2", "c3", "r1", "r2", "r3"];

  get dragAndDropTitle(){
    return $('//android.widget.TextView[@text="Drag and Drop"]');
  }

  get refreshBtn(){
    return $("~renew");
  }

  get congratsTitle(){
    return $(`//android.widget.TextView[@text="Congratulations"]`);
  }

  get congratsMessage(){
    return $('//*[@text="You made it, click retry if you want to try it again."]');
  }

  get retryButton(){
    return $('//*[@content-desc="button-Retry"]/android.view.ViewGroup');
  }

  get robotPuzzleSection(){
    return $(`//android.view.ViewGroup[@content-desc="Drag-drop-screen"]/android.widget.ImageView`);
  }

  /**
    * Dynamic getter for drag pieces
    * @param {string} pieceName - The name of the drag piece (e.g., "l1", "c2").
    * @returns {ChainablePromiseElement} - The WebdriverIO element.
    */

  dragPiece(pieceName: string): ChainablePromiseElement {
    return $(`//android.view.ViewGroup[@content-desc="drag-${pieceName}"]`);
  }

  /**
   * Dynamic getter for drop pieces
   * @param {string} pieceName - The name of the drop piece (e.g., "l1", "c2").
   * @returns {ChainablePromiseElement} - The WebdriverIO element.
   */

  dropPiece(pieceName: string): ChainablePromiseElement {
    return $(`//android.view.ViewGroup[@content-desc="drop-${pieceName}"]`);
  }

  async clickRefreshBtn(){
    await this.refreshBtn.click();
  }

  async dragPieceToDrop(pieceLocator: ChainablePromiseElement, dropLocator: ChainablePromiseElement){
    await driver.performActions([
      {
        type: "pointer",
        id: "action1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, origin: await pieceLocator },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 100 },
          { type: "pointerMove", duration: 200, origin: await dropLocator },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  async performDragAndDropForAll(){
    for (let i = 0; i < this.pieceNames.length; i++) {
      const sourceImage = await this.dragPiece(this.pieceNames[i]);
      const targetArea = await this.dropPiece(this.pieceNames[i]);
      await this.dragPieceToDrop(sourceImage, targetArea);
    }
  }
}

export default new DragPage();
