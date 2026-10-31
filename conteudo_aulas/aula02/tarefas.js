document.addEventListener( 'DOMContentLoaded',  iniciar );

function iniciar() {
    document.querySelector( 'button').onclick = adicionar;

    document.getElementById( 'descricao' ).onkeydown = pressionar;
}

function adicionar() {
    var campoDescricao = document.getElementById( 'descricao' );

    var texto = campoDescricao.value;
    var li = `<li>${texto}</li>`;
    document.querySelector( 'ul' ).innerHTML += li;

    var elementos = Array.from( document.querySelectorAll( 'ul li' ) );
    for ( var li of elementos ) {
        li.ondblclick = duploClique;
    }

    campoDescricao.value = ''; // Limpa
    campoDescricao.focus();
}

function pressionar( event ) {
    // console.log( event );
    if ( event.key == 'Enter' ) {
        document.querySelector( 'button' ).click();
    }
}

function duploClique( event ) {
    // console.log( event );
    var li = event.target; // target é o elemento que foi clicado !
    var texto = li.innerText; // li.textContent
    if ( ! window.confirm( `Remover "${texto}"?`) ) {
        return;
    }
    li.remove();
}