export class VisaoCalculo {

    // Entradas

    numero1() {
        return document.getElementById( 'n1' ).value;
    }

    numero2() {
        return document.getElementById( 'n2' ).value;
    }

    // Saídas

    mostrarResultado( resultado ) {
        document.querySelector( 'output' ).value = resultado;
    }

    // Configuração de eventos

    dispararAoCalcular( funcao ) {
        document.getElementById( 'calcular' ).addEventListener( 'click', ev => {
            ev.preventDefault();
            funcao();
        } );
    }

}