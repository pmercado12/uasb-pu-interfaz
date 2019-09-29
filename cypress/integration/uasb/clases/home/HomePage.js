import Header from './Header';
class HomePage {

    constructor() {

    }

    irRegisterLogin() {
        let header = new Header();
        header.getButtonRegisterLogin().click();
    }
}

export default HomePage;