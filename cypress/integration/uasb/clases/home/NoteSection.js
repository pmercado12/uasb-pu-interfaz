class NoteSection {

    constructor() {

    }

    getInputTituloNota() {
        return cy.get("#edit_title");
    }

    getTxtAreaContenido() {
        return cy.get("#edit_textarea");
    }

    getButtonSaveNota() {
        return cy.get("#btnSaveNote").first();
    }

    existeNota(tituloNota) {
        cy.contains('#savedNotes', tituloNota).should('be.visible');
    }

    crearNota(tituloNota, contenidoNota) {
        this.getInputTituloNota().type(tituloNota);
        this.getTxtAreaContenido().type(contenidoNota);
        this.getButtonSaveNota().click();
    }

}

export default NoteSection;