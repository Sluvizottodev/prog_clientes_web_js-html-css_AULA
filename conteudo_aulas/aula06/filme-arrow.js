
const filme = {
    nome: 'Minions 4',
    categoria: 'Animação',
    toString: function() {
        return this.nome + ' - ' + this.categoria;
    },
    toString2: () => this.nome + ' - ' + this.categoria
};

console.log( filme.toString() );
console.log( filme.toString2() );

const toStr = filme.toString;
console.log( toStr() );

const toStr2 = filme.toString.bind( filme );
console.log( toStr2() );

const toStr3 = filme.toString2.bind( filme );
console.log( toStr3() );