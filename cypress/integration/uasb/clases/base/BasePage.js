import HomePage from "../home/HomePage";

class BasePage {

    constructor() {
        this.homePage = null;
    }

    getHomePage() {
        if (!this.homePage) {
            this.homePage = new HomePage();
        }
        return this.homePage;
    }
}

export default BasePage;