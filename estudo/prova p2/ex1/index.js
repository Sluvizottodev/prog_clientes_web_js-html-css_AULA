import {ObterPaises, ObterBandeira, desenharBandeira, DesenharPaises} from './PaisesComBandeira.js'

await iniciar();
document.querySelector('select').addEventListener('onChange', Bandeira(document.querySelector('select').text))

async function iniciar(){
    try{
        const paises = await ObterPaises();
        DesenharPaises (paises);
    }catch(e){
        document.querySelector('output').innerText(e.message)
    }
}

async function Bandeira(name){
    const countries = await fecth("https://countries.io/json");
    if(!countries){throw new Error("bandeira index")}
    const country = countries.filter(c => (c.name === name))
    const bandeira = ObterBandeira(country.code);
    desenharBandeira(bandeira)
}