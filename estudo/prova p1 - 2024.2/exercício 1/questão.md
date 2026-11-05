<script src="cadastro.js" type="module" ></script>
<h1>Cadastro de Atleta</h1>
<form>
<label for="nome">Nome :< /label>
<input type="text" id="nome" />

<label for="peso">Peso :< /label><input type="text" id="peso" />
<label for="altura">Altura :< /label> <input type="text" id="altura" />
<button type="button" >Salvar</button>
<output></output>
</form>

Implemente o arquivo "cadastro. js" de forma que, quando o botão Salvar for acionado, os dados do
formulário sejam obtidos, validados e, se válidos, salvos em um array de objetos em localStorage, a ser
mantido na chave "atletas". Caso haja algum dado inválido, exibir uma mensagem que detalhe ao usuário
o problema. As validações devem ser feitas por uma função no arquivo "validacao.js" - a ser criado por
você -, que deve ser utilizado por "cadastro. js". As seguintes validações devem ocorrer: nome deve ter
entre 2 e 100 caracteres; a altura deve ser um número e estar entre 0,60 e 2,99 metros (inclusive ambos); o
peso deve ser um número e estar entre 40 e 300 kg (inclusive ambos). Quaisquer mensagens devem ser
exibidas na tag output. Após salvar, deve-se redirecionar o usuário para "atletas.html", modificando o
valor da propriedade location.url.
