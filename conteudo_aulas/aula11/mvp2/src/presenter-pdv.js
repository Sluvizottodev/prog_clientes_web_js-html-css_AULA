import { Pedido } from './pedido.js';
import { RepositorioProdutos } from './repositorio-produtos.js';

export class PresenterPDV {

    #visao = null;
    #pedido = new Pedido( new RepositorioProdutos() ); // model

    constructor( visao ) {
        this.#visao = visao;
    }

    async procurarProduto() {
        const codigo = this.#visao.codigo();
        // const quantidade = this.#visao.quantidade();
        try {
            const produto = await this.#pedido.procurarProduto( codigo );
            this.#visao.mostrarProduto( produto );
        } catch ( erro ) {
            this.#visao.mostrarMensagem( erro.message );
        }
    }

    async adicionarItem() {
        const codigo = this.#visao.codigo();
        const quantidade = this.#visao.quantidade();
        try {
            const item = await this.#pedido.adicionarItem( codigo, quantidade );
            this.#visao.adicionarItem( item );
            this.#visao.atualizarTotal( this.#pedido.total() );
        } catch ( erro ) {
            this.#visao.mostrarMensagem( erro.message );
        }
    }
    async adicionarDesconto(){
        const desconto = this.#visao.desconto();
        try{
            const descontoAtualizado = this.#pedido.atualizarDesconto(desconto);
            this.#visao.atualizarTotal(this.#pedido.total());
        }catch(e){
            throw new e;
        }
    }
}