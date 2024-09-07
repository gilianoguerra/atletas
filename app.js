function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);
   
    // se campoPesquisa for uma string sem nada ou poderia ser if (campoPesquisa == "")
    if (!campoPesquisa){
      section.innerHTML = "<p>Nada foi encontrado. Você não digitou nada.<p/>"
        return
    }
// Transforma o campoPesquisa em letras minusculas para poder comparar com todos os dados dos atletas
    campoPesquisa = campoPesquisa.toLowerCase()


    // Cria uma string vazia para armazenar os resultados da pesquisa
    // Concatenando o HTML nesta string, evitamos múltiplas manipulações do DOM
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags ="";
  
    // Itera sobre cada dado da lista de resultados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      // se includes campoPesquisa - o OU é representado por || 
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){ 
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a> </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;
      }
      // então, faça

      // console.log(dado.titulo.includes(campoPesquisa))
      // Constrói o HTML de cada item da pesquisa utilizando template literals
      
    }
    // se resultados não existir tome essa ação:
    if (!resultados ) {
      resultados = "<p>Nada foi encontrado</p>"

    }
  
    // Atribui o HTML completo à seção de resultados
    section.innerHTML = resultados;
  }

  
  // console.log(dados); // Para depuração, verificar o conteúdo da lista de dados



// function pesquisar(){
//     let section = document.getElementById("resultados-pesquisa");
//     console.log(section);
    
//     // cria variavel resultados vazia para armazenar todo o texto do for
//     // pq se ficar utilizando o section.innerHTML dentro do for ele executa varias vezes o Inner
//     let resultados = ""
    
//     // para cada dado dentro da lista de dados
//     for(let dado of dados) {
//         resultados += `
//         <div class="item-resultado">
//                         <h2>
//                             <a href="#" target="_blank">${dado.titulo}</a>
//                         </h2>
//                         <p class="descricao-meta">${dado.descricao}</p>
//                             <a href=${dado.link} target="_blank">Mais Informações</a>
//         </div>      
//     `
//     }
    
//     section.innerHTML = resultados;
// }
// // console.log(dados);




