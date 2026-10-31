var x = 10;
let y = 20;

{
    let z = 30;
    console.log( z );
    var a = 'hello';
}
console.log( a );
// console.log( z ); // dá erro

teste();
teste2();

function teste() {
    for ( var i = 0; i < 5; i++ ) {
        console.log( i );
    }
    console.log( `O valor de i pode ser acessado aqui: ${i}` );
}

function teste2() {
    for ( let i = 0; i < 5; i++ ) {
        console.log( i );
    }
    console.log( `O valor de i NÃO pode ser acessado aqui: ${i}` );
}

