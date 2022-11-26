const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 922225555";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa);


// O const foi usado para defenir o tipo do objeto, porem acima nós alteramos ele, isso porque o const permite mudar os valores do objeto, mas não o objeto inteiro como fizemos abaixo.

// const novaPessoa = {
//     nome: "Pedro",
//     profissao: "Professor",
// };

// pessoa = novaPessoa;
