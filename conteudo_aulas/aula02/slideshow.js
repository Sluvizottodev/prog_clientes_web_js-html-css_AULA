var imagens = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];

document.addEventListener( 'DOMContentLoaded', iniciar );

var idTimer;

function iniciar() {
    mostrarPrimeiro();
    document.getElementById( 'anterior' ).onclick = anterior;
    document.getElementById( 'proximo' ).onclick = proximo;
    document.getElementById( 'parar' ).onclick = parar;

    idTimer = setInterval( function() {
        proximo();
    }, 2000 );
}

function anterior() {
    const arquivo = imagens.shift(); // Retira do início
    imagens.push( arquivo ); // Acrescenta no fim
    mostrarPrimeiro();
}

function proximo() {
    var imagem = imagens.pop(); // Retira do fim
    imagens.unshift( imagem ); // Acrescenta no início
    mostrarPrimeiro();
}

function mostrarPrimeiro() {
    var primeiraImagem = imagens[ 0 ];
    var img = document.querySelector( 'img' );
    img.src = primeiraImagem;

    var indiceBarra = primeiraImagem.indexOf( '/' );
    var indicePonto = primeiraImagem.indexOf( '.' );
    img.alt = 'Gato ' + primeiraImagem.substring( indiceBarra + 1, indicePonto );
    console.log( img.alt );
}

function parar() {
    clearInterval( idTimer );
}

// HOMEWORK
// Modifique o comportamento do botão para para que ele mostre "Iniciar"
// se parado ou "Parar", se iniciado, e alterne a exibição automática do
// slideshow.