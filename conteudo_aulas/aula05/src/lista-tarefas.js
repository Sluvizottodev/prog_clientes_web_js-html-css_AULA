
/**
 * @type {Array<{nome:string, feita: boolean}>}
 */
export const tarefas = carregarTarefas();

/**
 * Desenha as tarefas na tela.
 *
 * @param {Array<{nome:string, feita: boolean}>} tarefas
 */
export function desenharTarefas( tarefas ) {
    const ul = document.querySelector( 'ul' );
    ul.replaceChildren(); // Remove todos os filhos
    let i = 0;
    for ( const t of tarefas ) {
        const li = document.createElement( 'li' );
        li.textContent = `${t.nome} ${t.feita ? '✅' : ''}`;
        li.dataset.indice = i++; // incrementa depois
        ul.appendChild( li );
    }
}

/**
 * Carrega tarefas do storage.
 *
 * @returns {Array<{nome:string, feita: boolean}>}
 */
export function carregarTarefas() {
    const conteudo = localStorage.getItem( 'tarefas' );
    const tarefas = conteudo ? JSON.parse( conteudo ) : [];
    return tarefas;
}

/**
 * Salva as tarefas no storage.
 *
 * @param {Array<{nome:string, feita: boolean}>} tarefas
 */
export function salvarTarefas( tarefas ) {
    localStorage.setItem( 'tarefas', JSON.stringify( tarefas ) );
}