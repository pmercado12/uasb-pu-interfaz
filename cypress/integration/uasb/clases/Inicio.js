import IniciaSesion from './IniciaSesion';
class Inicio {

    constructor(){
        console.log(1233);
    }

    iniciarSesion() {
        this.iniciaSesion = new IniciaSesion();
        let inpUsuario = this.iniciaSesion.getInputUsuario();
        inpUsuario.type('pmercado');
        let inpPassword = this.iniciaSesion.getInputPassword();
        inpUsuario.type('123456');
        this.iniciaSesion.getButtonIniciaSesion().click();
    }
}

export default Inicio;