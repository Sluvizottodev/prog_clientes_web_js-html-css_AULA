
export function validaNome(nome){
    if(nome.length < 2 && nome.length > 100) return false;
    return true;
}

export function validaAltura (altura){
    altura = Number(altura);
    if(isNaN(altura)) return false;
    if(altura < 0.6 && altura > 2.99) return false;
    return true;
}

export function validaPeso(peso){
    peso = Number(peso); // converte para número
    if(isNaN(peso)) return false; // verifica se é número
    if(peso <40 || peso >300) return false; // valida se está dentro do intervalo
    return true; //se não der falso em nada, tá certo rapá
}