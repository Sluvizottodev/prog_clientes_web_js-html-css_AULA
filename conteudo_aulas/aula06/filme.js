export class Filme {

    #nome = '';
    #categoria = '';

    constructor( nome = '', categoria = '' ) {
        this.nome = nome;
        this.categoria = categoria;
    }

    get nome() { return this.#nome; }
    set nome( valor ) { this.#nome = valor; }

    get categoria() { return this.#categoria; }
    set categoria( valor ) { this.#categoria = valor; }
}