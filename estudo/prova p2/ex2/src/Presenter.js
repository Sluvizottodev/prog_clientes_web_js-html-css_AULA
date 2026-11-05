import Estados from "./Estado.js"

export default class PresenterEstados{
    #view;
    #model = new Estados();
    constructor(view){
        this.#view = view;
    }

    async desenharEstados() {
        try{
            const estados = await this.#model.obterEstados();
            this.#view.desenharEstados(estados);
        } catch(e){
            this.#view.obterError(e.message);
        }
    }
}