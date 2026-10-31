import { ControladoraCalculo } from "./controladora-calculo.js";

export class VisaoCalculo {

    #controladora = null;

    constructor() {
        // Se passa para ser controlada
        this.#controladora = new ControladoraCalculo( this );
    }

    // Inicialização

    iniciar() {
        document.getElementById( 'calcular' ).addEventListener( 'click', ev => {
            ev.preventDefault();
            this.#controladora.calcular();
        } );
    }

    // Entradas

    numero1() {
        return document.getElementById( 'n1' ).value;
    }

    numero2() {
        return document.getElementById( 'n2' ).value;
    }

    // Saídas

    mostrarResultado( resultado ) {
        document.querySelector( 'output' ).value = resultado;
    }

}