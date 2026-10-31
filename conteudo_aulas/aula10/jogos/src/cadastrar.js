import { API_JOGOS } from "./api.js";

const dialog = document.querySelector( 'dialog' );
const botaoSalvar = document.querySelector( '#salvar' );
const botaoCancelar = document.querySelector( '#cancelar' );

botaoSalvar.addEventListener( 'click', salvar );
botaoCancelar.addEventListener( 'click', cancelar );

export function cadastrar() {
    dialog.showModal();
}

export async function salvar( event ) {
    event.preventDefault();

    const form = dialog.querySelector( 'form' );
    const valido = form.reportValidity();
    if ( ! valido ) {
        return;
    }

    const jogo = {
        nome: document.querySelector( '#nome' ).value,
        desenvolvedora: document.querySelector( '#desenvolvedora' ).value,
    };

    try {
        await cadastrarJogo( jogo );
    } catch ( erro ) {
        alert( erro.message );
        return;
    }

    dialog.close();
}

export function cancelar( event ) {
    event.preventDefault();
    dialog.close();
}

async function cadastrarJogo( jogo ) {
    const response = await fetch( API_JOGOS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( jogo )
    } );
    if ( ! response.ok ) {
        throw new Error( 'Erro cadastrando o jogo.' );
    }
}