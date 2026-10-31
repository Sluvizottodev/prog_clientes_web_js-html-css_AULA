import { sleep } from "./sleep.js";

const umSegundo = sleep( 1000 );
const doisSegundos = sleep( 2000 );
console.log( 'teste' );
const vencedor = Promise.race( [ umSegundo, doisSegundos ] );
vencedor.then( console.log );