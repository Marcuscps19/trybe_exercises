// Exercício 1
console.log("Exercício 1: ");
console.log();
let numberOfAsterisks = 3;
let asterisk = '';

for (let indexColumn = 0; indexColumn < numberOfAsterisks; indexColumn += 1) {
    asterisk = '';
    for (let indexRow = 0; indexRow < numberOfAsterisks; indexRow += 1) {
        asterisk += '*';
    }
    console.log(asterisk);
}

// Exercício 2
console.log("==================================");
console.log("Exercício 2: ");
console.log();
numberOfAsterisks = 5;
asterisk = '';

for (let index = 0; index < numberOfAsterisks; index += 1) {
    asterisk += '*';
    console.log(asterisk);
}

// Exercício 3

console.log("==================================");
console.log("Exercício 3: ");
console.log();
numberOfAsterisks = 5;
asterisk = '     ';
reversedAsterisk = '';

for (let index = 0; index < numberOfAsterisks; index += 1) {
    asterisk = asterisk.replace(' ', '*');
    reversedAsterisk = reverse(asterisk);
    console.log(reversedAsterisk);
}

function reverse(asterisk) {
    let reversedAsterisk = '';
    for (let index = asterisk.length - 1; index >= 0; index--) {
        reversedAsterisk += asterisk[index];
    }
    return reversedAsterisk;
}

// Exercício 4

asterisk = '';
baseOfAsterisks = 6;

console.log("==================================");
console.log("Exercício 4: ");
console.log();

for (let index = 0; index <= baseOfAsterisks/2; index += 1) {
    if(index === 0){
        asterisk += '*';
        console.log(asterisk);
    }else {
        asterisk += '**';
        console.log(asterisk);
    }



}
