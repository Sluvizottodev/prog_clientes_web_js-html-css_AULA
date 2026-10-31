fetch( 'index.html' )
    .then( ( response ) => {
        if ( ! response.ok ) {
            throw new Error( 'Erro obtendo index.' );
        }
        response.text()
            .then( conteudo => {
                document.body.textContent = conteudo;
            } );
    } )
    .catch( erro => {
        console.error( erro );
    } );