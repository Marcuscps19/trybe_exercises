// Exercício 1
console.log("Exercício 1: ");
console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log("=======================================");

// Exercício 2
console.log("Exercício 2: ");
console.log();
console.log(" O valor da soma é: ", SomaArray(numbers));

function SomaArray(numbers) {
    let soma = 0;
    for (let i = 0; i < numbers.length; i++) {
        soma += (numbers[i]);
    }
    return soma;
}
console.log("=======================================");

// Exercício 3
console.log("Exercício 3: ");
console.log();
let mediaAritmetica = SomaArray(numbers) / numbers.length;
console.log("A média aritmética dos elementos do array é: ", mediaAritmetica);
console.log("=======================================");

// Exercício 4

console.log("Exercício 4: ");
console.log();

if(mediaAritmetica > 20){
    console.log("O valor é maior que 20.");
}else {
    console.log("O valor é menor que 20.");
}

console.log("=======================================");

// Exercício 5

console.log("Exercício 5: ");
console.log();
let maiorValor = Number.MIN_VALUE;
for(let i=0; i < numbers.length; i++){
    if(numbers[i] > maiorValor){
        maiorValor = numbers[i];
    }
}
console.log("O maior valor do array é: ", maiorValor);

console.log("=======================================");

// Exercício 6

console.log("Exercício 6: ");
console.log();
let impares = 0;
for(let i=0; i < numbers.length; i++){
    if(numbers[i] % 2 != 0){
       impares++;
    }else {
        ímpares = "nenhum valor ímpar encontrado."
    }
}
console.log("A quantidade de números ímpares é: ", ímpares);

console.log("=======================================");

// Exercício 7

console.log("Exercício 7: ");
console.log();
let menorValor = Number.MAX_VALUE;
for(let index = 0; index < numbers.length; index++){
    if(numbers[index] < menorValor){
        menorValor = numbers[index];
    }
}
console.log("O maior valor do array é: ", menorValor);
console.log("=======================================");

// Exercício 8

console.log("Exercício 8: ");
console.log();
let arrayWith25Numbers = []
let number = 1;
for(let index = 0; index < 25; index++){
   arrayWith25Numbers.push(number);
   number += 1;
}
console.log("Array de 1 á 25: ");
console.log(arrayWith25Numbers);
console.log("=======================================");

// Exercício 9

console.log("Exercício 8: ");
console.log();

for(let index = 0; index < 25; index++){
    arrayWith25Numbers[index] = arrayWith25Numbers[index]/2;
}

console.log("Array dividido por 2: ");
console.log(arrayWith25Numbers);
console.log("=======================================");




