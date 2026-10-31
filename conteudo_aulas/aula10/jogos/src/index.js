import { listar } from "./listagem.js";
import { cadastrar } from "./cadastrar.js";

listar();

document.querySelector( '#cadastrar' ).addEventListener( 'click', cadastrar );
