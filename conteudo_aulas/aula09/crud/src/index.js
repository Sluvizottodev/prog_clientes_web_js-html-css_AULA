import { abrir, salvar, fechar } from "./form.js";
import { remover } from "./remocao.js";

function iniciar() {

    fetch( 'http://localhost:3000/musicas' )
        .then( response => {
            if ( ! response.ok ) {
                throw new Error( 'Erro obtendo as músicas.' );
            }
            return response.json();
        } )
        .then( musicas => desenharMusicas( musicas ) )
        .catch( erro => alert( erro.message ) );

    document.querySelector( '#novo' ).addEventListener( 'click', () => abrir() );
    document.querySelector( '#remover' ).addEventListener( 'click', remover );
    document.querySelector( '#alterar' ).addEventListener( 'click', () => {
        const id = document.querySelector( 'tr.selecionado td' )?.textContent;
        abrir( id );
    } );

    document.querySelector( '#salvar' ).addEventListener( 'click', salvar );
    document.querySelector( '#fechar' ).addEventListener( 'click', fechar );

    document.querySelector( 'tbody' ).addEventListener( 'click', selecionar );
}

iniciar();

/**
 * Desenha as músicas na tabela.
 * @param {Array<{id:string, nome: string, artista: string}>} musicas
 */
function desenharMusicas( musicas ) {
    document.querySelector( 'tbody' ).innerHTML = musicas
        .map( ( {id, nome, artista} ) =>
            `<tr><td>${id}</td><td>${nome}</td><td>${artista}</td></tr>`
        ).join( '' );

}

/**
 *
 * @param {Event} event
 */
function selecionar( event ) {

    const tr = event.target.closest( 'tr' );
    const selecionado = tr.classList.contains( 'selecionado' );

    document.querySelectorAll( 'tbody tr.selecionado' )
        .forEach( tr => tr.classList.remove( 'selecionado' ) );

    if ( ! selecionado ) {
        tr.classList.toggle( 'selecionado' );
    }
}