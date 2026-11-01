export default class Pergunta {
    constuctor({id,texto, categoria, dificuldade, resposta, alternativas, dica}){
        this.id = id;
        this.texto = texto;
        this.categoria = categoria;
        this.dificuldade = dificuldade;
        this.resposta = resposta;
        this.alternativas = alternativas;
        this.dica = dica || '';
    }
}