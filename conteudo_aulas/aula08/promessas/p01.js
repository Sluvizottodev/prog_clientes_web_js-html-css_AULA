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
const p = obterFrutas();
p.then( function( frutas ) {
    console.log( 'Quero comprar todas: ', ...frutas );
} );
p.catch( function( erro ) {
    console.error( erro, ':(' );
} );
console.log( 'Fim' );