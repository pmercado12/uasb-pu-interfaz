class Header {
    constructor() {

    }

    getButtonRegisterLogin() {
        return cy.get("nav a[href='/create_account']");
    }

    getButtonLogout() {
        return cy.get("nav a[href='/logout']");
    }
}

export default Header;