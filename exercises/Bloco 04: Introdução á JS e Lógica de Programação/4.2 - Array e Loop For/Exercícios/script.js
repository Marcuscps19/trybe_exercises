// Exercício 1
console.log("Exercício 1: ");
console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}
console.log("=======================================");

// Exercício 2
console.log("Exercício 2: ");
console.log();
console.log(" O valor da soma é: ", SumArray(numbers));

function SumArray(numbers) {
    let sum = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        sum += (numbers[index]);
    }
    return sum;
}
console.log("=======================================");

// Exercício 3
console.log("Exercício 3: ");
console.log();
let 
aritmethicAverage = SumArray(numbers) / numbers.length;
console.log("A média aritmética dos elementos do array é: ", 
aritmethicAverage);
console.log("=======================================");

// Exercício 4

console.log("Exercício 4: ");
console.log();

if(
aritmethicAverage > 20){
    console.log("O valor é maior que 20.");
}else {
    console.log("O valor é menor ou igual a 20.");
}

console.log("=======================================");

// Exercício 5

console.log("Exercício 5: ");
console.log();
let maxValue = Number.MIN_VALUE;
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > maxValue){
        maxValue = numbers[index];
    }
}
console.log("O maior valor do array é: ", maxValue);

console.log("=======================================");

// Exercício 6

console.log("Exercício 6: ");
console.log();
let odd = 0;
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 != 0){
       odd += 1;
    }
}
if(odd === 0){
    console.log("Nenhum valor ímpar encontrado.");
}else {
    console.log("A quantidade de números ímpares é: ", odd);
}

console.log("=======================================");

// Exercício 7

console.log("Exercício 7: ");
console.log();
let menorValor = Number.MAX_VALUE;
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] < menorValor){
        menorValor = numbers[index];
    }
}
console.log("O menor valor do array é: ", menorValor);
console.log("=======================================");

// Exercício 8

console.log("Exercício 8: ");
console.log();
let arrayWith25Numbers = []
for(let index = 1; index <= 25; index += 1){
   arrayWith25Numbers.push(index);
}
console.log("Array de 1 á 25: ");
console.log(arrayWith25Numbers);
console.log("=======================================");

// Exercício 9

console.log("Exercício 9: ");
console.log();

for(let index = 0; index < 25; index++){
    arrayWith25Numbers[index] = arrayWith25Numbers[index]/2;
}

console.log("Array dividido por 2: ");
console.log(arrayWith25Numbers);
console.log("=======================================");


// [Bônus] Exercícios 

// Exercício 1

for(let rightIndex = 1; rightIndex < numbers.length; rightIndex += 1){
    for(let leftIndex = 0; leftIndex < numbers.length-rightIndex; leftIndex +=1){
        if(numbers[leftIndex] > numbers[leftIndex+1]){
           let aux = numbers[leftIndex];
           numbers[leftIndex] = numbers[leftIndex+1];
           numbers[leftIndex+1] = aux; 
        }
    }
}
console.log("Vetor ordenado em ordem crescente: ");
console.log(numbers);
console.log("=======================================");

// // Exercício 2

for(let rightIndex = 1; rightIndex < numbers.length; rightIndex += 1){
    for(let leftIndex = 0; leftIndex < numbers.length-rightIndex; leftIndex += 1){
        if(numbers[leftIndex] < numbers[leftIndex+1]){
           let aux = numbers[leftIndex];
           numbers[leftIndex] = numbers[leftIndex+1];
           numbers[leftIndex+1] = aux; 
        }
    }
}

console.log("Vetor ordenado em ordem decrescente: ");
console.log(numbers);
console.log("=======================================");

// Exercício 3

// Esse exercício foi refatorado baseado no código do Murilo Gonçalves, que possibilitou a retirada de um laço for. Link:
// https://github.com/MuriloGon/trybe-exercises/pull/10/commits/37c323d1674d221dacfcc53deec8cfe8361df89f

let newArray = [];
console.log(numbers);

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index+1] != undefined){
        newArray.push(numbers[index] * numbers[index+1]);
    }else {
        newArray.push(numbers[index] *2);
    }
}
console.log("Array após multiplicação: ");
console.log(newArray);
console.log("=======================================");
