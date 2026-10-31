function obterNumero() {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => resolve( 100 ), 3000 );
    } );
}

console.log( 'Número:' );
obterNumero()
    .then( numero => console.log( numero ) );
console.log( 'Fim' );