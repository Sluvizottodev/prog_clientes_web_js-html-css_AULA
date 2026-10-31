import { API_JOGOS } from "./api.js";

export async function listar() {
    try {
        const jogos = await obterJogos();
        desenharJogos( jogos );
    } catch ( erro ) {
        alert( erro.message );
    }
}


async function obterJogos() {
    const response = await fetch( API_JOGOS, { signal: AbortSignal.timeout( 1000 ) } );
    if ( ! response.ok ) {
        throw new Error( 'Erro obtendo os jogos.' );
    }
    return await response.json();
}

function desenharJogos( jogos ) {
    const frag = document.createDocumentFragment();
    frag.append( ...jogos.map( criarLinha ) );

    const tbody = document.querySelector( 'tbody' );
    tbody.replaceChildren();
    tbody.append( frag );
}

function criarLinha( { id, nome, desenvolvedora } ) {
    return criar( 'tr',
        criar( 'td', id ),
        criar( 'td', nome ),
        criar( 'td', desenvolvedora ),
    );
}

function criar( elemento, ...filhos ) {
    const el = document.createElement( elemento );
    el.append( ...filhos );
    return el;
}
