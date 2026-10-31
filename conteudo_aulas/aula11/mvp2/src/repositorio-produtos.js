const API = 'http://localhost:3000';

export class RepositorioProdutos {

    async comCodigo( codigo ) {
        const response = await fetch( API + '/produtos' );
        if ( response.status == 404 ) {
            return null;
        }
        if ( ! response.ok ) {
            throw new Error( 'Erro ao procurar o produto.' );
        }
        const produtos = await response.json();
        return produtos.find( p => p.codigo == codigo );
        // return produtos;
    }

}