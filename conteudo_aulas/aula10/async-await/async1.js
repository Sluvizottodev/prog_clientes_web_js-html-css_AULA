
function frutas() {
    return new Promise( ( resolve, reject ) => {
        if ( Math.random() >= 0.5 ) {
            return resolve( [ 'pêra', 'uva', 'maçã' ] );
        }
        reject( new Error( 'Sem frutas hoje :(' ) );
    } );
}

async function frutas2() {
    if ( Math.random() >= 0.5 ) {
        return [ 'pêra', 'uva', 'maçã' ];
    }
    throw new Error( 'Sem frutas hoje :(' );
}

frutas()
    .then( console.log )
    .catch( erro => console.error( erro.message ) );

frutas2()
    .then( console.log )
    .catch( erro => console.error( erro.message ) );