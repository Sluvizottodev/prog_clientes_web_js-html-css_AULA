
/**
 * Cria um objeto de Tarefa.
 *
 * @param {string} nome
 * @param {boolean} feita
 * @returns {{nome:string, feita: boolean}}
 */
export function criarTarefa( nome, feita ) {
    return { nome: nome, feita: feita };
}
