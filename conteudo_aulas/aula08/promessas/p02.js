function obterFrutas() {
    return new Promise( ( resolve, reject ) => {
        if ( Math.random() >= 0.5 ) {
            resolve( [ 'Maçã', 'Pêra', 'Uva', 'Caqui', 'Melancia' ] );
            return;
        }
        reject( 'Sem frutas hoje.' );
    } );
}

console.log( 'Obtendo frutas.' );
obterFrutas()
    .then( function( frutas ) {
        console.log( 'Quero comprar todas: ', ...frutas );
    } )
    .catch( function( erro ) {
        console.error( erro, ':(' );
    } );
console.log( 'Fim' );