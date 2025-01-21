import Page from "./base.page";

class HomePage extends Page {
    get orangeRobot() {
        return $('//*/android.widget.ImageView[1]');
    }
}

export default new HomePage();