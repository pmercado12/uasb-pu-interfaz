import CreateAccount from './CreateAccount';
import Login from './Login';
class LoginPage {

    constructor() {

    }

    crearAccount(email, password) {
        let createAccount = new CreateAccount();
        createAccount.getInputEmail().type(email);
        createAccount.getInputPassword().type(password);
        createAccount.getButtonCreateAccount().click();
    }

    iniciarSesion(email, password) {
        let login = new Login();
        login.getInputEmail().type(email);
        login.getInputPassword().type(password);
        login.getButtonLogin().click();
    }
}

export default LoginPage;