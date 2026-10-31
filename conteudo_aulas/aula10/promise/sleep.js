export function sleep( milissegundos, rejeitar = false ) {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            if ( rejeitar ) {
                reject( 'Erro em ' + milissegundos );
            } else {
                resolve( milissegundos );
            }
        }, milissegundos );
    } );
}