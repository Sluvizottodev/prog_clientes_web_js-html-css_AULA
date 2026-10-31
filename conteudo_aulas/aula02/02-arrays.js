var a = [ 10, 20, 30, 40 ];

a.push( 50, 60 ); // Insere no fim
console.log( a );

var removido = a.pop(); // Retira o último
console.log( a, ' Removeu ', removido );

removido = a.shift(); // Retira do início
console.log( a, ' Removeu ', removido );

a.unshift( 0, 5 ); // Acrescenta no início
console.log( a );

var indice = a.indexOf( 30 ); // -1 se não encontrar
console.log( 30, 'está no índice', indice );

var removidos = a.splice( indice, 1 ); // Remove no índice informado, N elementos
console.log( a, 'Removidos: ', removidos );

var novo = a.concat( [ 70, 80, 90 ], [ 100, 110 ] ); // Junta em um array
console.log( novo );

novo = novo.reverse(); // Inverte
console.log( novo );

novo = novo.sort(); // Compara como string
console.log( novo );

novo = novo.sort( function( a, b ) {
    if ( a < b ) return -1;
    if ( a == b ) return 0;
    return 1;
} );
console.log( novo );

novo = novo.sort( function( a, b ) { // Ordenação crescente
    return a - b;
} );
console.log( novo );

novo = novo.sort( function( a, b ) { // Ordenação decrescente
    return b - a;
} );
console.log( novo );

var juncao = novo.join( ' - ' );
console.log( juncao );

var numeros = [ 10, 20, 30 ];

for ( var i = 0; i < numeros.length; i++ ) {
    console.log( '>>', numeros[ i ] );
}

for ( var n of numeros ) {
    console.log( '>>', n );
}
