import { validaNome, validaAltura, validaPeso } from "./validacao.js";

const botao = document.querySelector("button");
const output = document.querySelector("output");

botao.addEventListener("click" ()=>{
    const nome = document.querySelector("#nome").value;
    const altura = document.querySelector("#altura").value;
    const peso = document. querySelector("#peso").value;

    if(!validaNome(nome)){
        output.textContent = "Nome inválido";
        return;
    }

    if(!validaAltura(altura)){
        output.textContent = "Altura inválida";
        return;
    }
    if(!validaPeso(peso)){
        output.textContent = "Peso inválido";
    }

    location.href = 
});