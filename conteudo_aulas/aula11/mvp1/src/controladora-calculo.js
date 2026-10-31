import { Calculadora } from "./calculadora.js";

export class ControladoraCalculo {

    #visao;
    #calculadora = new Calculadora();

    constructor( visao ) {
        this.#visao = visao;
    }

    // Comportamentos

    calcular() {
        const numero1 = this.#visao.numero1();
        const numero2 = this.#visao.numero2();
        try {
            const resultado = this.#calculadora.somar( numero1, numero2 );
            this.#visao.mostrarResultado( resultado );
        } catch ( erro ) {
            this.#visao.mostrarResultado( erro.message );
        }
    }
}