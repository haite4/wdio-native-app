import Page from "./base.page";

class SwipePage extends Page {
    get swipePageTitle () {
        return $('//android.widget.TextView[@text="Swipe horizontal"]');
    }
}

export default new SwipePage();