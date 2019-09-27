import Inicio from './../clases/Inicio';
describe('Iniciar sesion', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Iniciar sesion', () => {
        //cy.visit('https://www.notasonline.es');
        const inicio = new Inicio();
        //inicio.iniciarSesion();

    });
});
