import { sleep } from "./sleep.js";

const umSegundo = sleep( 1000, true );
const umSegundoEMeio = sleep( 1500 );
const doisSegundos = sleep( 2000 );
console.log( 'teste' );
// Espera todas executarem, depois podemos avaliar
const resultados = Promise.allSettled( [ umSegundo, umSegundoEMeio, doisSegundos ] );
resultados.then( console.log );