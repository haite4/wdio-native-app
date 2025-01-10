import Page from "./base.page";

class DragPage extends Page {
    
  get dragAndDropTitle(): ChainablePromiseElement {
    return $('//android.widget.TextView[@text="Drag and Drop"]');
  }

  get refreshBtn(): ChainablePromiseElement {
    return $("~renew");
  }

  get dragPieceL1(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drag-l1"]');
  }

  get dragPieceL2(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drag-l2"]');
  }

  get dragPieceL3(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drag-l3"]');
  }

  get dragPieceC1(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drag-c1"]');
  }

  get dragPieceC2(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drag-c2"]');
  }

  get dragPieceC3(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drag-c3"]');
  }

  get dragPieceR1(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drag-r1"]');
  }

  get dragPieceR2(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drag-r2"]');
  }

  get dragPieceR3(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drag-r3"]');
  }

  get dropPieceL1(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drop-l1"]');
  }

  get dropPieceL2(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drop-l2"]');
  }

  get dropPieceL3(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drop-l3"]');
  }

  get dropPieceC1(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drop-c1"]');
  }

  get dropPieceC2(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drop-c2"]');
  }

  get dropPieceC3(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drop-c3"]');
  }

  get dropPieceR1(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drop-r1"]');
  }

  get dropPieceR2(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drop-r2"]');
  }

  get dropPieceR3(): ChainablePromiseElement {
    return $('//android.view.ViewGroup[@content-desc="drop-r3"]');
  }

  get congratsTitle(): ChainablePromiseElement {
    return $(`//android.widget.TextView[@text="Congratulations"]`);
  }

  get congratsMessage(): ChainablePromiseElement {
    return $('//*[@text="You made it, click retry if you want to try it again."]');
  }

  get retryButton(): ChainablePromiseElement {
    return $('//*[@content-desc="button-Retry"]/android.view.ViewGroup');
  }

  get robotPuzzleSection(): ChainablePromiseElement {
    return $( `//android.view.ViewGroup[@content-desc="Drag-drop-screen"]/android.widget.ImageView`);
  }

  get dragPieces(): ChainablePromiseElement[] {
    return [
      this.dragPieceL1,
      this.dragPieceL2,
      this.dragPieceL3,
      this.dragPieceC1,
      this.dragPieceC2,
      this.dragPieceC3,
      this.dragPieceR1,
      this.dragPieceR2,
      this.dragPieceR3,
    ];
  }

  get dropAreas(): ChainablePromiseElement[] {
    return [
      this.dropPieceL1,
      this.dropPieceL2,
      this.dropPieceL3,
      this.dropPieceC1,
      this.dropPieceC2,
      this.dropPieceC3,
      this.dropPieceR1,
      this.dropPieceR2,
      this.dropPieceR3,
    ];
  }

  async clickRefreshBtn(): Promise<void> {
    await this.refreshBtn.click();
  }

  async dragFirstPiece(): Promise<void> {
    await this.dragPieceToDrop(this.dragPieceL1, this.dropPieceL1);
  }

  async dragPieceToDrop(
    pieceLocator: ChainablePromiseElement,
    dropLocator: ChainablePromiseElement
  ): Promise<void> {
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

  async performDragAndDropForAll(): Promise<void> {
    for (let i = 0; i < this.dragPieces.length; i++) {
      const sourceImage = await this.dragPieces[i];
      const targetArea = await this.dropAreas[i];
      await this.dragPieceToDrop(sourceImage, targetArea);
    }
  }
}

export default new DragPage();
