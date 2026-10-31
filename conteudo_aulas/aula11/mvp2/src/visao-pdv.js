import { PresenterPDV } from './presenter-pdv.js';

export class VisaoPDV {

    #presenter;

    constructor() {
        this.#presenter = new PresenterPDV( this );
    }


    iniciar() {

        document.querySelector( '#codigo' ).addEventListener( 'blur', () => {
            this.#presenter.procurarProduto();
        } );

        document.querySelector( '#adicionar' ).addEventListener( 'click', () => {
            this.#presenter.adicionarItem();
        } );
    }


    #entrada() {
        const texto = document.querySelector( '#codigo' ).value;
        const [ codigo, quantidade ] = texto.split( '*' );
        return { codigo, quantidade };
    }

    codigo() {
        return this.#entrada().codigo;
    }

    quantidade() {
        return this.#entrada().quantidade || '1';
    }

    mostrarProduto( { descricao, preco } ) {
        document.querySelector( '#produto' ).textContent = `${descricao} - R$ ${preco}`;
    }

    mostrarMensagem( mensagem ) {
        alert( mensagem );
    }

    adicionarItem( item ) {
        const { produto, quantidade } = item;
        const tr = document.createElement( 'tr' );
        tr.append(
            this.#celula( '' ),
            this.#celula( produto.descricao ),
            this.#celula( produto.preco ),
            this.#celula( quantidade ),
            this.#celula( item.subtotal() )
        );
        document.querySelector( 'tbody' ).append( tr );
    }

    atualizarTotal( total ) {
        document.querySelector( '#total' ).textContent = `R$ ${total}`;
    }


    #celula( ...filhos ) {
        const td = document.createElement( 'td' );
        td.append( ...filhos );
        return td;
    }
}