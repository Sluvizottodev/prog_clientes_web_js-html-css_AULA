document.addEventListener( 'DOMContentLoaded', iniciar );

const contatos = [
    { id: 1, nome: 'Márcia Souza', telefone: '22 99999-8888' },
    { id: 2, nome: 'Júlia Costa',  telefone: '22 98888-7777' },
    { id: 3, nome: 'Paulo Silva',  telefone: '22 97777-6666' },
];

contatos.sort( function comparar( c1, c2 ) {
    if ( c1.nome < c2.nome ) return -1;
    else if ( c1.nome == c2.nome ) return 0;
    return 1;
} );

function iniciar() {
    const tbody = document.querySelector( 'tbody' );
    tbody.innerHTML = ''; // Limpa
    for ( const c of contatos ) {
        const linha =
            `<tr>
                <td>${c.id}</td>
                <td>${c.nome}</td>
                <td>${c.telefone}</td>
            </tr>`;
        tbody.innerHTML += linha;
    }
}