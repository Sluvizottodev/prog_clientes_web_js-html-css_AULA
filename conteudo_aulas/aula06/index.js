import { listaFilmes } from "./lista-filmes.js";

document.addEventListener( 'DOMContentLoaded', iniciar );

function iniciar() {
//    document.querySelector( 'tbody' ).innerHTML =
//         listaFilmes.map( f => `<tr><td>${f.nome}</td><td>${f.categoria}</td></tr>` )
//             .join( '' );

    const tbody = document.querySelector( 'tbody' );

    listaFilmes.map( f => {
        const tr = document.createElement( 'tr' );
        tr.append( celula( f.nome ), celula( f.categoria ) );
        return tr;
    } ).forEach( tr => tbody.append( tr ) );
}

function celula( texto ) {
    const celula = document.createElement( 'td' );
    celula.innerText = texto;
    return celula;
}