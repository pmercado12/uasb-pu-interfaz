class IniciaSesion {
    getInputUsuario() {
        return cy.get(`#login_usu`);
    }
    getInputPassword() {
        return cy.get(`#login_pass`);
    }
    getButtonIniciaSesion() {
        return cy.get(`#login_user_btn`);
    }
}

export default IniciaSesion;