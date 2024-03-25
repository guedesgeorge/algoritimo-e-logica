      /*
      Faça um programa que tenha um menu e apresente a seguinte mensagem:

      Olá usuário! Digite o número da opção desejada 

      1. Cadastrar item na lista 
      2. Mostrar itens cadastrados 
      3. Sair do programa

      -----------
      O programa deverá capturar o número digitado pelo usuario e mostrar o 
      seguinte cenários: 

      Caso o usuario digite 1, ele podera cadastrar um  item em uma lista
      Casso o usuário digite 2, ele podera ver itens cadastrados 
      Se não houver nenhum item cadastrado, mostrar a mensagem:
      Não existem itens cadastrados 
      Caso o usuario digite 3, a aplicação deverá ser encerrado

      */

      /*
      Dados de entrada do usuario
      1. numero desejado 
      2. item da lista 


      Variaveis 
      1. opções digitadas
      2. lista de itens 
      */

        let option;
        let items = []

          while(option != 3){

        option = Number(prompt(`Olá usuario digite o número da opção desejada

          1. cadastrar um item na lista 
          2. Mostrar itens cadastrados
          3. Sair do programa `));


          switch(option) {
            case 1:
              let item = prompt("Digite o item desejado")
              items.push(item)
              break;
              case 2:
              if(items.length == 0){
                alert("Não existem itens cadastrados")
              }else{
                alert(items)
              }
              break;
              case 3:
                alert("Tchau")
                break;
              default:
                alert("Opção invalida. tente novamente")
          }

          }




