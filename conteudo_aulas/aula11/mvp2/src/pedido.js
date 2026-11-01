import { ItemPedido } from "./item-pedido.js";
import { Produto } from "./produto.js";

export class Pedido {
    constructor( repositorio ) {
        this.itens = [];
        this.repositorio = repositorio;
    }
    #desconto = 0;

    total() {
        let soma = 0;
        for ( const item of this.itens ) {
            soma += item.subtotal();
        }

        if(Number(isNaN(this.#desconto))){
            return soma;
        }
        if(this.#desconto > soma) return 0;
        return soma - Math.abs(this.#desconto);
    }

    async procurarProduto( codigo ) {
        const produto = await this.repositorio.comCodigo( codigo );
        if ( ! produto ) {
            throw new Error( 'Produto não encontrado.' );
        }
        return new Produto( produto.codigo, produto.descricao, produto.preco );
    }

    async adicionarItem( codigo, quantidade ) {
        const produto = await this.procurarProduto( codigo );
        const qtd = this.#validarNumero( quantidade );
        const itemPedido = new ItemPedido( produto, qtd );
        this.itens.push( itemPedido );
        return itemPedido;
    }

    #validarNumero( numero, mensagem ) {
        const n = Number( numero );
        if ( isNaN( n ) ) {
            throw new Error( mensagem );
        }
        return n;
    }

    async atualizarDesconto (desconto){
        this.#desconto = desconto;
    }

}