// string, number, boolean, object -> Array, Map, Set, ...

var x = 10;
console.log( x, typeof x );

var y = Number( '10' );
console.log( y, typeof y );

var z = parseInt( '10.5' );
console.log( z );

var f = parseFloat( '10.5' );
console.log( f );

var a = parseInt( 'A' );
console.log( a, isNaN( a ) );

var i1 = 10 / 0;
console.log( i1 );

var i2 = -10 / 0;
console.log( i2 );

var s;
console.log( s, typeof s );

var n = null;
console.log( typeof null );

var contato = {
    nome: 'Ana',
    telefone: { ddd: '22', numero: '99999-8888' },
    temWhatapp: true,
    telefoneFormatado: function() {
        return '(' + this.telefone.ddd + ') ' + this.telefone.numero;
    },
    telefoneFormatado2() {
        return '(' + this.telefone.ddd + ') ' + this.telefone.numero;
    },
};

console.log( contato.telefone.ddd );
console.log( contato.telefoneFormatado() );
console.log( contato.telefoneFormatado2() );

console.log( JSON.stringify( contato ) );
console.log( contato['telefone']['ddd'] );

for ( var prop in contato ) {
    console.log( 'O', prop, 'do tipo', typeof contato[prop], 'é', contato[prop] );
}