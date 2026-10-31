const entreMinMax =
    ( arr, min, max ) => arr.filter( e => e >= min && e <= max );

console.log( entreMinMax( [ 1, 2, 3, 4, 5, 6, 7, 8 ], 3, 7 ) );