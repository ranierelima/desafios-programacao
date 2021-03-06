
// Para o desafio da semana trabalharemos tudo o que vimos utilizando a função tratarEvento,
// essa função é chamada ou utilizada por todos os botões do arquivo HTML construido,
// a responsabilidade de vocês é criar um CRUD para os contatos.

// Lembrando que como todos os botões chamam essa função, então nela teremos sempre mais de um evento,
// os eventos serão informados sempre no primeiro parametro e eles podem ser: salvar, editar, excluir e visualizar.

// Cada evento tem uma tratativa e uma responsabilidade diferente, para facilita um pouco, ao inves de ser realizado uma chamada para uma API
// simularemos um banco de dados, PORÉM nessa simulação só é possível realizar duas operações, salvar e listar.

// Para listar os contatos cadastrados deve ser utilizar a função recuperarDados.
// Para salvar ou atualizar um contato deve ser utilizar a função salvarDados. 

// Como desafio vocês tem que aplicar todos os conhecimentos obtidos nessa semana para aplicar nesse desafio,
// Trabalhando com listas, mapas, funções e variaveis (String, Number, Boolean).

// Antes que eu esqueça de falar, já deixei a função criada também para montar a tabela de conteudo, 
// sempre que um contato for cadastrado ou atualizado ou removido a tela de contatos salvos deve ser atualizada.

// Boa sorte a todos e qualquer dúvida, é só entrar em contato
function tratarEvento(event, index){

  let nomeContato = document.getElementById('nomeContato').value;
  let telefoneContato = document.getElementById('telefoneContato').value;
  let estadoContato = document.getElementById('estadoContato').value;

  console.log("evento: ", event, ' dados: ', nomeContato, telefoneContato, estadoContato);

  if('salvar' == event){
    salvarContato(nomeContato, telefoneContato, estadoContato);
  } else if('editar' == event){
    // REALIZAR ACAO DE EDICAO
  } else if('excluir' == event) {
    // realizar acao de exclusao
  } else if('visualizar' == event) {
     let contatos = recuperarDados();
     let contato = contatos[index];
    
     if(contato){
      document.getElementById('nomeContato').value = contato.nome;
      document.getElementById('telefoneContato').value = contato.telefone;
      document.getElementById('estadoContato').value = contato.estado;
     }

  } else {
    console.log(`Nenhuma ação válida foi selecionada`);
  }  

}

function salvarContato(nome, telefone, estado){
  // chave : valor
  let contato = {};
  contato['nome'] = nome;
  contato['telefone'] = telefone;
  contato['estado'] = estado;

  let retorno = salvarDados(contato);
  montarTabelaConteudo(retorno);
}

function montarTabelaConteudo(contatos){
  if(contatos && contatos.length){
    document.getElementById('conteudo-tabela-contatos-salvos').innerHTML = contatos.map((contato, index, arrayobj) => {
      return `
      <tr>
        <td>${contato.nome}</td>
        <td>${contato.telefone}</td>
        <td>${contato.estado}</td>
        <td>
          <span class="material-icons material-icons-outlined text-info" onclick="tratarEvento('visualizar',${index})">
           search
          </span>
        </td>
      </tr>
      `
    }).join('');
  }
}
