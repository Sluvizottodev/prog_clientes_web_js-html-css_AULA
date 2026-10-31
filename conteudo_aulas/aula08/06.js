function clonar( obj ) {
    return { ...obj }; // Clone raso (shallow)
}

const obj1 = { nome: 'Maria', email: 'maria@site.com', endereco: { cidade: 'Nova Friburgo'} };

const obj2 = clonar( obj1 );
obj2.nome = 'José';
obj2.endereco.cidade = 'Bom Jardim';

console.table( obj1 );
console.table( obj2 );