const multiplicar =
    ( arr, multiplicador ) => arr.map( e => e * multiplicador );

console.log(
    multiplicar( [ 1, 2, 3, 4 ], 2 )
);