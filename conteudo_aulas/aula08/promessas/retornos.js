
Promise.resolve( 10 )
    .then( numero => {
        console.log( numero );
        throw new Error( 'deu ruim' );
    } )
    .then( () => {
        console.log( 'Após imprimir' );
    } )
    .catch( erro => {
        console.log( 'Ops: ', erro );
    } );