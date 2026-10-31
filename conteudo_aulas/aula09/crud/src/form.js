export function salvar( event ) {
    event.preventDefault();

    const form = document.querySelector( 'form' );
    if ( ! form.reportValidity() ) {
        return;
    }

    const musica = {
        id: document.querySelector( '#id' ).value,
        nome: document.querySelector( '#nome' ).value,
        artista: document.querySelector( '#artista' ).value,
    };

    const novo = ! musica.id; // 0, false, null, undefined, NaN, ''

    let url, method;
    if ( novo ) {
        url = 'http://localhost:3000/musicas';
        method = 'POST';
    } else {
        url = 'http://localhost:3000/musicas/' + musica.id;
        method = 'PUT';
    }

    const opcoes = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( musica )
    };
    fetch( url, opcoes )
        .then( response => {
            if ( ! response.ok ) {
                throw new Error( 'Erro salvando a música.' );
            }
        })
        .then( () => {
            // location.href = '/';
            location.reload();
        })
        .catch( erro => alert( erro.message ) );

}

export function abrir( id ) {
    document.querySelector( 'dialog' ).showModal();
    if ( id ) {
        fetch( `http://localhost:3000/musicas/${id}` )
            .then( response => {
                if ( ! response.ok ) {
                    throw new Error( 'Erro obtendo a música.' );
                }
                return response.json();
            } )
            .then( ( { id, nome, artista } ) => {
                document.querySelector( '#id' ).value = id;
                document.querySelector( '#nome' ).value = nome;
                document.querySelector( '#artista' ).value = artista;
            } )
            .catch( erro => alert( erro.message ) );
    }
}

export function fechar( event ) {
    event.preventDefault();
    document.querySelector( 'dialog' ).close();
}