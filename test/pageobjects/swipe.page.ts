import Page from "./base.page";

class SwipePage extends  Page {
    
    get swipeHorizontalTitle(){
        return $(`//android.widget.TextView[@text="Swipe horizontal"]`)
    }

    get whatImHidingTitle(){
        return $(`//android.widget.TextView[@text="Or swipe vertical to find what I'm hiding."]`)
    }

    get youFoundMeText(){
        return $(`//android.widget.TextView[@text="You found me!!!"]`)
    }

    getCardByIndex(index: number){
        return  $(`(//android.view.ViewGroup[@content-desc="card"])[${index}]`); 
    }

    getTitleAndDescByText(text: string){
       return $(`//android.widget.TextView[@text="${text}"]`);
    }

    async swipeInDirection(element: ChainablePromiseElement, direction: string){
        const { width, height } = await element.getSize(); 
        const { x, y } = await element.getLocation(); 
    
        await driver.execute('mobile: scrollGesture', {
            left: x,      
            top: y,        
            width: width,  
            height: height, 
            direction: direction, 
            percent: 0.5
        });
    }

    async swipeHorizontal(element: ChainablePromiseElement){
     await this.swipeInDirection(element, "right")
    }

    async swipeToCenterTheScreen(){
        await this.swipe(0.5, 0.5, 0.5, 0.2, 100);
    }
}


export default new SwipePage();