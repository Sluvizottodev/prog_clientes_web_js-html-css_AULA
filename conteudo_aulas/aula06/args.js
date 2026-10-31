function somar() {
    // console.log( arguments );
    let soma = 0;
    for ( const n of arguments ) {
        soma += n;
    }
    return soma;
}

console.log( somar( 10, 20, 30 ) );

const somar2 = () => {
    console.log( arguments );
};

somar2();

const somar3 = ( ...numeros ) => {
    let soma = 0;
    for ( const n of numeros ) {
        soma += n;
    }
    return soma;
};

console.log( somar3( 10, 20, 30 ) );