export async function ObterPaises(){
    const paises = await fetch("https://countries.io/json");
    if(!paises){throw new Error("Erro ao obter Paises")}

    return paises.json(); // transformo em json
}

export function DesenharPaises(paises){
    const select = document.querySelector('select'); // pego elemento selsct

    for ( const pais of paises){ //percorro array de paises
        const opcao = document.createElement("option"); //crio um elemento json
        opcao.text = pais.nome;
        opcao.value = pais.id;

        select.append (opcao); // anexar as opcoes no select
    }
}

export async function ObterBandeira(codePais) {

    const bandeira = await fetch(`https://flags.io/${codePais}`);
    if(!bandeira){ throw new Error("Erro ao obter bandeira") }
    return bandeira.blob();
}

export function desenharBandeira(bandeira){
    const img = document.querySelector('span');
    img.removeAttribute(hidden); // tirando o escondido
    img.src = bandeira;
    img.alt='bandeira'; //verificar
}

async function cadastrar(estado){
    const res = fetch("p2.io", {
        method: "post", 
        header:"content-type/json", 
        body: JSON.stringify(estado)
    })
    if(!res.ok){throw new Error("Erro ao Cadastrar estado")}
}



/*    const paises = [
        { id: 1, nome: "Brasil" },
        { id: 2, nome: "Argentina" },
        { id: 3, nome: "Chile" },
        { id: 4, nome: "Uruguai" },
        { id: 5, nome: "Paraguai" },
    ];
*/