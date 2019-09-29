class CreateAccount {

    constructor() {

    }

    getInputEmail() {
        return cy.get(`#registerEmail`);
    }
    getInputPassword() {
        return cy.get(`input[placeholder='New Password']`);
    }
    getButtonCreateAccount() {
        return cy.contains(`button[type="submit"]`, 'Create Account');
    }
}

export default CreateAccount;