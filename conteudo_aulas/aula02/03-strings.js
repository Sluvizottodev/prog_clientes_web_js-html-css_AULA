var x = 10.999;
var s = `O valor é ${x.toFixed( 2 )}`; // Interpolação
console.log( s );

var indice = s.indexOf( 'é' ); // -1 se não encontrar
console.log( 'é no índice', indice );

console.log( s.substring( indice ) ); // Parte da string

console.log( s.replace( 'é', 'não é' ) ); // Substitui

const partes = s.split( ' ' );
console.log( partes );

console.log(
    partes.join( ' ' ).toUpperCase() // Junta o array numa string e converte p/ maiúsculas
);

console.log( s.includes( 'é' ) );

console.log( s.startsWith( 'O valor' ) );

console.log( s.endsWith( '.00' ) );

console.log( '⭐'.repeat( 5 ) );

console.log( s.at( indice ) ); // Caractere na posição

console.log( s[ indice ] ); // Caractere na posição

console.log( s, 'tem', s.length, 'caracteres' );

console.log( 'Pele'.length == 'Pelé'.length );