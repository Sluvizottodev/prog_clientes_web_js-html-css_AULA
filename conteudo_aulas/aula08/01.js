function concatenar( a1, a2 ) {
    return [ ...a1, ...a2 ];
}

console.log(
    concatenar( [ 'a', 'b', 'c' ], [ 1, 2, 3 ] )
);