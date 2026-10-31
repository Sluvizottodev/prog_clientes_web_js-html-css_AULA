import { Calculadora } from "./calculadora.js";
import { VisaoCalculo } from "./visao-calculo.js";

export class ControladoraCalculo {

    #visao = new VisaoCalculo();
    #calculadora = new Calculadora();

    // Inicialização

    iniciar() {
        this.#visao.dispararAoCalcular( this.calcular.bind( this ) );
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