// Declacarão  de função
function minhaFuncao(param){
    //bloco de código
}

//MinhaFuncao("param");

//Expressão de função

// Diferença principal: HOISTING
// Funções e var são "listada" no topo do arquivo.

console.log(apresentar());

function apresentar(){
    return "Olá";
}

console.log(soma(2, 2));
const soma = function(num1, num2) {return num1 + num2}
