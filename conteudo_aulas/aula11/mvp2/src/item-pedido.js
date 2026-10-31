import { Produto } from "./produto.js";

export class ItemPedido {

    constructor( produto, quantidade ) {
        this.produto = produto;
        this.quantidade = quantidade;
    }

    subtotal() {
        return this.produto.preco * this.quantidade;
    }
}