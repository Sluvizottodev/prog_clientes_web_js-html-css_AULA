
const controller = new AbortController();

document.querySelector( 'button' )
    .addEventListener( 'click', consultar, { signal: controller.signal } );

document.querySelector( '#cancelar' )
    .addEventListener( 'click', cancelar, { signal: controller.signal } );


function consultar() {
    // fetch( 'https://pokeapi.co/api/v2', { signal: AbortSignal.timeout( 1 ) } )
    fetch( 'https://pokeapi.co/api/v2', { signal: controller.signal } )
        .then( response => {
            if ( ! response.ok ) {
                throw new Error( 'Erro consultando site.' );
            }
            return response.text();
        } )
        .then( html => document.querySelector( 'div' ).innerText = html )
        .catch( erro => document.querySelector( 'div' ).innerText = erro.message );
}

function cancelar() {
    controller.abort(); // Gera um sinal para abortar
}