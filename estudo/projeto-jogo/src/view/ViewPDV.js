/**
 * View (1) Percebe evento,
 * (7) Atualiza a tela
 */
import PresenterPDV from "../presenter/PresenterPDV.js";
export default class VisaoPDV {
    #presenter;

    constructor(){
        this.#presenter = new PresenterPDV(this);
    }

    iniciar(){

    }
}