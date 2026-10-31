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

try {
    const f1 = await frutas();
    console.log( 'Frutas: ', f1 );
    const f2 = await frutas2();
    console.log( 'Frutas 2: ', f2 );
} catch ( erro ) {
    console.error( error.message );
}