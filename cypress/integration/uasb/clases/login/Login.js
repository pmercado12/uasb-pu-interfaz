class Login {

    constructor() {

    }        

    getInputEmail() {
        return cy.get(`#loginEmail`);
    }
    getInputPassword() {
        return cy.get(`input[placeholder='Enter Password']`);
    }
    getButtonLogin() {
        return cy.contains(`button[type="submit"]`, 'Login');
    }
}

export default Login;