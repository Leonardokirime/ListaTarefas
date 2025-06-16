function adicionarTarefa() {
      
      const inputTarefa = document.getElementById("inputTarefa") // Linha par que o usuario coloque o que deseja na tarefa
      let tarefa = inputTarefa.value.trim() // pegando  o valor do input

      const aviso = document.getElementById("mensagem")
      
      // Bloco abaixo realiza esturtura condicional do código para que seja adcionado uma tarefa valida

      if (tarefa == ""){
        let mensagemErro = "Digite uma tarefa valida!"
        aviso.textContent = mensagemErro; // Erro se o usuario não colocar valor valido
      } else{
        let mensagemSucesso = "Tarefa adicionada com sucesso!"; //FeedBack para o usuario de que está sendo adcionado com sucesso suas tarefas
        aviso.textContent = mensagemSucesso; // Retornando a primeira linha da função
       
        let listaTarefas = document.getElementById("listaTarefas") // linha que cria a "ul"
        let novaTarefa = document.createElement("li") // linha que cria e ordena as tarefas
        // Listando a "li"
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
      }

      inputTarefa.value="" //Deixando o placeholder limpo sem que precise apagar o que foi escrito

}