import { sleep } from "./sleep.js";

const umSegundo = sleep( 1000, true );
const doisSegundos = sleep( 2000 );
console.log( 'teste' );
// Espera todas executarem MAS cancela se uma rejeitar
const resultados = Promise.all( [ umSegundo, doisSegundos ] );
resultados
    .then( console.log )
    .catch( console.error );