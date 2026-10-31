export class CalculoError extends Error {
    constructor( mensagem = '' ) {
        super( mensagem );
        this.name = 'CalculoError';
    }
}

export class Calculadora {

    /**
     * Retorna a soma de dois números.
     * Lança exceção se eles estiverem incorretos.
     *
     * @param {string} numero1
     * @param {string} numero2
     * @returns {number}
     * @throws {CalculoError}
     */
    somar( numero1, numero2 ) {
        const n1 = this.#validarNumero( numero1, 'Número 1 inválido.' );
        const n2 = this.#validarNumero( numero2, 'Número 2 inválido.' );
        return n1 + n2;
    }

    #validarNumero( numero, mensagem ) {
        const n = Number( numero );
        if ( isNaN( n ) ) {
            throw new CalculoError( mensagem );
        }
        return n;
    }
}