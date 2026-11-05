export default class Estado{
    async obterEstados(){
        const estados = await fetch("https://p2.io/estados");
        if(!estados.ok) {throw new Error('Erro ao obter estados')}
        return estados.json();
    }
}