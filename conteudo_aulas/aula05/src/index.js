import { desenharTarefas, salvarTarefas, tarefas } from "./lista-tarefas.js";
import { criarTarefa } from "./tarefa.js";

document.addEventListener( 'DOMContentLoaded', iniciar );

function iniciar() {
    desenharTarefas( tarefas );
    document.querySelector( '#adicionar' ).addEventListener( 'click', adicionar );
    document.querySelector( 'ul' ).addEventListener( 'dblclick', remover );
}

/**
 * Adicione a tarefa na lista.
 *
 * @param {Event} event
 */
function adicionar( event ) {
    event.preventDefault();

    const form = document.querySelector( 'form' );
    if ( ! form.reportValidity() ) { // É válido?
        return;
    }

    /** @type {HTMLInputElement} */
    const campoNome = document.querySelector( '#nome' );
    const tarefa = criarTarefa( campoNome.value, false );
    tarefas.push( tarefa );
    salvarTarefas( tarefas );
    desenharTarefas( tarefas );
    // Limpa e põe o foco
    campoNome.value = '';
    campoNome.focus();
}

/**
 * @param {Event} event
 */
function remover( event ) {
    /** @type {HTMLLIElement} */
    const li = event.target;

    if ( ! confirm( `Deseja mesmo remover "${li.textContent}" ?` ) ) {
        return;
    }

    li.remove(); // Remove da tela
    tarefas.splice( li.dataset.indice, 1 ); // Remove do array
    salvarTarefas( tarefas ); // Atualiza o storage
}