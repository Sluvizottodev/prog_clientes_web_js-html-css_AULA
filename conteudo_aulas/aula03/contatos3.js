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
    desenharContatos();
    document.getElementById( 'remover' ).addEventListener( 'click', remover );
    document.getElementById( 'novo' ).addEventListener( 'click', novo );
    document.getElementById( 'salvar' ).addEventListener( 'click', salvar );
}

function desenharContatos() {
    const tbody = document.querySelector( 'tbody' );
    tbody.replaceChildren(); // Limpa
    tbody.addEventListener( 'click', aoClicarNaLinha );

    const frag = document.createDocumentFragment();
    for ( const c of contatos ) {
        const linha = criarLinhaParaContato( c );
        frag.appendChild( linha );
        // linha.addEventListener( 'click', aoClicarNaLinha );
    }
    tbody.appendChild( frag );
}

function celula( texto ) {
    const td = document.createElement( 'td' );
    td.innerText = texto;
    return td;
}

function aoClicarNaLinha( event ) {
    console.log( event.target );
    const tr = event.target.parentElement;
    console.log( tr );
    tr.classList.toggle( 'ativo' );
    // Inativa as outras linhas
    const ativos = document.querySelectorAll( '.ativo' );
    for ( const linha of ativos ) {
        linha.classList.remove( 'ativo' );
    }
    tr.classList.toggle( 'ativo' );
}


function remover( event ) {
    const linhaAtiva = document.querySelector( '.ativo' );
    if ( ! linhaAtiva ) {
        alert( 'Por favor, selecione uma linha.' );
        return;
    }
    const indice = linhaAtiva.sectionRowIndex; // Posição da linha no tbody
    console.log( indice );
    contatos.splice( indice, 1 ); // Remove do array pelo índice, 1 elemento

    linhaAtiva.remove();
}

function novo() {
    document.querySelector( 'dialog' ).showModal();
}

function salvar( event ) {
    event.preventDefault(); // Cancela o comportamento padrão do botão, que fecha o dialog
    const nome = document.getElementById( 'nome' ).value;
    const telefone = document.getElementById( 'telefone' ).value;
    const id = gerarId();
    const contato = { id: id, nome: nome, telefone: telefone };
    // Adiciona no array
    contatos.push( contato );
    // Adiciona na tabela
    const linha = criarLinhaParaContato( contato );
    document.querySelector( 'tbody' ).append( linha );
    // Fecha o modal
    document.querySelector( 'dialog' ).close();
    // Limpa o formulário
    document.querySelector( 'form' ).reset();
}

function gerarId() {
    let maiorId = 0;
    for ( const c of contatos ) {
        if ( c.id > maiorId ) {
            maiorId = c.id;
        }
    }
    return maiorId + 1;
}


function criarLinhaParaContato( c ) {
    const linha = document.createElement( 'tr' );
    linha.append(
        celula( c.id ),
        celula( c.nome ),
        celula( c.telefone )
    );
    return linha;
}