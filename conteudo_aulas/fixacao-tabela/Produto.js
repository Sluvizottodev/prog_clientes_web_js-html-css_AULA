export class Produto{
    //declara
    #id = '';
    #nome = '';
    #preco = '';
    #quantidade = '';

    //construtor
    constructor(id = '', nome = '', preco = '', quantidade = ''){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.#quantidade = quantidade;
    }


    //setters


    //getters

}