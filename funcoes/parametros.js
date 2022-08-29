// parâmetro de função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(2, 4);
console.log(5, 5);

// parâmetros X argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(23, 'Jonathan'));

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));
