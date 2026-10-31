const consultar = document.querySelector( 'button' );
const div = document.querySelector( 'div' );

consultar.addEventListener( 'click', obterConteudo );

async function obterConteudo() {
    try {
        const response = await fetch( 'https://pokeapi.co/api/v2' );
        if ( ! response.ok ) {
            throw new Error( 'Erro com status ' + response.status );
        }
        const texto = await response.text();
        div.textContent = texto;
    } catch ( erro ) {
        div.textContent = erro.message;
    }
}