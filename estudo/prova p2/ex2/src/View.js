import PresenterEstados from "./Presenter";

export default class ViewEstados{
    #presenter;
    constructor(){
        this.#presenter = new PresenterEstados(this);
    }

    desenharEstados(estados){
        const tbody =  document.querySelector('tbody');
        for(const estado of estados){
            const tr = document.createElement('tr')
            tr.append(this.#celula(estado.id), this.#celula(estado.nome), this.#celula(estado.uf));
            tbody.append(tr);
        }
    }

    #celula(...itens){
        const td = document.createElement('td');
        td.append(...itens);
        return td;
    }

    obterError(message){
        output = document.querySelector('output');
        output.innerText(message);
    }
}