document.querySelector( 'button' )
    .addEventListener( 'click', pesquisar );

function pesquisar( event ) {
    event.preventDefault();
    const nome = document.querySelector( '#pesquisa' ).value;
    fetch( `https://pokeapi.co/api/v2/pokemon/${nome}` )
        .then( response => {
            if ( response.status == 404 ) {
                throw new Error( 'Pokemon não encontrado.' );
            } else if ( ! response.ok ) {
                throw new Error( 'Erro ao obter o pokemon.' );
            }
            response.json()
                .then( pokemon => {
                    // const imagem = pokemon.sprites.front_default;
                    const imagem = pokemon.sprites.other.home.front_default;
                    document.querySelector( 'img' ).src = imagem;
                } );
        } )
        .catch( error => alert( error.message ) );
}