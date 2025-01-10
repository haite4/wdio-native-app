import Page from "./base.page";

class SwipePage extends  Page {
    get swipeHorizontalTitle(): ChainablePromiseElement{
        return $(`//android.widget.TextView[@text="Swipe horizontal"]`)
    }

    get whatImHidingTitle(): ChainablePromiseElement{
        return $(`//android.widget.TextView[@text="Or swipe vertical to find what I'm hiding."]`)
    }
}

export default new SwipePage();