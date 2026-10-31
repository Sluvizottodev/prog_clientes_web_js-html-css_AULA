
class Contato {
    nome = '';
    idade = 0;
    telefone = '';

    comNome( nome ) {
        this.nome = nome;
        return this;
    }

    comIdade( idade ) {
        this.idade = idade;
        return this;
    }

    comTelefone( tel ) {
        this.telefone = tel;
        return this;
    }

    static novo() {
        return new Contato();
    }
}

const c = Contato.novo()
    .comNome( 'Alice' )
    .comIdade( 21 )
    .comTelefone( '22334455' );

console.table( c );