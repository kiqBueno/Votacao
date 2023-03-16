var temas = [];
var contador = 0;

var meuInput = document.getElementById("leitor");
var meuBotao = document.getElementById("novoTema");

meuBotao.addEventListener("click", function() {   
    temas.push(meuInput.value); //adiciona o input na array
    meuInput.value = ""; //zera o input para facilitar
  
    var novoDiv = document.createElement("div"); // criar o contêiner para o novo elemento
    var novoElemento = document.createElement("p"); // criar o parágrafo com o conteúdo
    novoElemento.classList.add("classeTema");
    novoElemento.textContent = temas[temas.length - 1];
  
    novoDiv.appendChild(novoElemento); // adicionar o parágrafo ao contêiner
    incremento(novoDiv); // adicionar o botão com o contador ao contêiner
  
    document.getElementById("tema").appendChild(novoDiv, novoElemento); // adiciona a nova div acima do primeiro elemento existente});
});

function incremento(container) {
    var meuButao = document.createElement("button"); // criar um novo botão
    meuButao.textContent = "+1"; // definir o texto do botão
    
    var div = document.createElement("div")

    var valorContador = document.createElement("div"); // criar uma nova div para exibir o valor do contador
    valorContador.textContent = 0; // definir o valor inicial do contador na div
    
    var contador = 0; // inicializar o contador com o valor de 0
    
    document.getElementById("tema").appendChild(meuButao); // adicionar o botão à div
    document.getElementById("tema").appendChild(valorContador); // adicionar a div à div pai

    meuButao.addEventListener("click", function() {
        contador++; // incrementar o contador quando o botão é clicado
        valorContador.textContent = contador; // atualizar o valor do contador na div
    });
};