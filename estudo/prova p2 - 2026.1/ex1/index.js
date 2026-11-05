import {ObterPaises, ObterBandeira, desenharBandeira, DesenharPaises} from './PaisesComBandeira.js'

await iniciar();
const select = document.querySelector('select');
select.addEventListener('change', () => Bandeira(select.selectedOptions[0].text))

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
    const countriesJson = await countries.json();
    const country = countriesJson.filter(c => (c.name === name))
    const bandeira = await ObterBandeira(country.code);
    desenharBandeira(bandeira)
}