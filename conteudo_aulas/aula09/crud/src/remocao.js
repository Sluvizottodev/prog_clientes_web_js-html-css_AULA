export function remover( event ) {
    const tr = document.querySelector( 'tr.selecionado' );
    if ( ! tr ) {
        alert( 'Por favor, selecione uma música.' );
        return;
    }

    const id = tr.querySelector( 'td' ).textContent;
    const opcoes = {
        method: 'DELETE'
    };
    fetch( `http://localhost:3000/musicas/${id}`, opcoes )
        .then( response => {
          if ( ! response.ok ) {
            throw new Error( 'Erro ao remover a música.' );
          }
        })
        .then( () => {
            tr.remove();
        })
        .catch( erro => alert( erro.message ));
}