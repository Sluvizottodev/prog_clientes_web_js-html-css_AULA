document.addEventListener( 'DOMContentLoaded', carregar );

const CHAVE_FILMES = 'filmes';
let filmes = [];

function carregarFilmes() {
    const conteudo = localStorage.getItem( CHAVE_FILMES );
    if ( conteudo === null ) {
        return [];
    } else {
        return JSON.parse( conteudo ); // string para Array
    }
}

function carregar() {
    filmes = carregarFilmes();
    desenharFilmes( filmes );
    document.getElementById( 'novo' ).addEventListener( 'click', novo );
    document.getElementById( 'salvar' ).addEventListener( 'click', salvar );
}

function desenharFilmes( filmes ) {
    const tbody = document.querySelector( 'tbody' );
    tbody.replaceChildren(); // Remove filhos quando vazia
    for ( const f of filmes ) {
        tbody.appendChild( criarLinha( f ) );
    }
}

function criarLinha( f ) {
    const tr = document.createElement( 'tr' );

    const botaoRemover = document.createElement( 'button' );
    botaoRemover.innerText = '🗑️';
    botaoRemover.ariaLabel = 'Remover';
    botaoRemover.addEventListener( 'click', remover );

    tr.append(
        celula( f.id ),
        celula( f.nome ),
        celula( f.categoria ),
        celula( f.ano ),
        celula( botaoRemover ),
    );
    return tr;
}

function celula( textoOuElemento ) {
    const td = document.createElement( 'td' );
    td.append( textoOuElemento );
    return td;
}

function novo() {
    document.querySelector( 'dialog' ).showModal();
}

function salvar( event ) {
    event.preventDefault();
    const filme = {
        id          : gerarId(),
        nome        : document.getElementById( 'nome' ).value,
        categoria   : document.getElementById( 'categoria' ).value,
        ano         : Number( document.getElementById( 'ano' ).value ),
    };
    // Adiciona no array
    filmes.push( filme );

    // Adiciona na tabela
    document.querySelector( 'tbody' ).appendChild( criarLinha( filme ) );

    // Salva no storage
    localStorage.setItem( CHAVE_FILMES, JSON.stringify( filmes ) );

    // Fecha o modal
    document.querySelector( 'dialog' ).close();
}

function gerarId() {
    let maiorId = 0;
    for ( const f of filmes ) {
        if ( f.id > maiorId ) {
            maiorId = f.id;
        }
    }
    return maiorId + 1;
}


function remover( event ) {

    if ( ! confirm( 'Deseja mesmo remover?' ) ) {
        return;
    }

    const botao = event.target;
    const tr = botao.parentElement.parentElement;
    console.log( tr );

    const indice = tr.sectionRowIndex;

    // Remove do array de filmes
    filmes.splice( indice, 1 );

    // Remove a linha de tabela
    tr.remove();

    // Salva no storage
    localStorage.setItem( CHAVE_FILMES, JSON.stringify( filmes ) );
}