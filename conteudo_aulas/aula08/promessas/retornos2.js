
Promise.resolve( 10 )
    .then( numero => {
        console.log( numero );
        return numero + 1;
    } )
    .then( ( novoNumero ) => {
        console.log( 'Após imprimir', novoNumero );
    } )
    .catch( erro => {
        console.log( 'Ops: ', erro );
    } );