function concatenar( ...arr ) { [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ], [ 'd', 'e' ] ]
    const novo = [];
    for ( const a of arr ) {
        novo.push( ...a );
    }
    return novo;
}

console.log(
    concatenar( [ 'a', 'b', 'c' ], [ 1, 2, 3 ], [ 'd', 'e' ] )
);