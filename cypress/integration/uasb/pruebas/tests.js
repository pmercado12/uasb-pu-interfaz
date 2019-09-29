import HomePage from './../clases/home/HomePage';
import LoginPage from './../clases/login/LoginPage';
import Header from './../clases/home/Header';
import NoteSection from './../clases/home/NoteSection';
describe('Pruebas', () => {
    let fechaActual = new Date();
    let correoNuevo = 'yosoygrood' + fechaActual.getTime() + '@hotmail.com';
    //let correoNuevo = 'yosoygrood@hotmail.com';
    let passwordNuevo = '123456';

    beforeEach(() => {
        cy.visit('/');
    });

    it('Crear cuenta', () => {
        let homePage = new HomePage();
        homePage.irRegisterLogin();
        let loginPage = new LoginPage();
        loginPage.crearAccount(correoNuevo, passwordNuevo);
        let header = new Header();
        header.getButtonLogout().should('be.visible');
    });

    it('Intentar crear cuenta con mismo correo', () => {
        let homePage = new HomePage();
        homePage.irRegisterLogin();
        let loginPage = new LoginPage();
        loginPage.crearAccount(correoNuevo, passwordNuevo);
        cy.contains('Email also exists in system. Please Login.').should('be.visible');
    });

    it('Iniciar sesion con error en email/password', () => {
        let homePage = new HomePage();
        homePage.irRegisterLogin();
        let loginPage = new LoginPage();
        let passwordIncorrecto = passwordNuevo + 'incorrecto';
        loginPage.iniciarSesion(correoNuevo, passwordIncorrecto);
        cy.contains('Email and password do not match').should('be.visible');
    });

    it('Iniciar sesion correctamente email/password', () => {
        let homePage = new HomePage();
        homePage.irRegisterLogin();
        let loginPage = new LoginPage();
        loginPage.iniciarSesion(correoNuevo, passwordNuevo);
        let header = new Header();
        header.getButtonLogout().should('be.visible');
    });

    it('Crear Nota', () => {
        let homePage = new HomePage();
        homePage.irRegisterLogin();
        let loginPage = new LoginPage();
        loginPage.iniciarSesion(correoNuevo, passwordNuevo);
        let noteSection = new NoteSection();
        let fecha = new Date();
        let time = fecha.getTime();
        let nota1 = 'nota ' + time;
        noteSection.crearNota(nota1, 'contenido nota ' + time);
        noteSection.existeNota(nota1);
    });
});
