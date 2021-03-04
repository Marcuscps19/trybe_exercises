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
asterisk = '*';
let line = '';
let position = numberOfAsterisks; 

for (let indexLine = 0; indexLine < numberOfAsterisks; indexLine += 1){
    for (let indexColumn = 0; indexColumn <= numberOfAsterisks; indexColumn += 1){
        if(indexColumn < position){
            line += ' ';
        } else {
            line += asterisk;
        }
    }
    console.log(line);
    position -= 1;
    line = '';
}

// Exercício 3

console.log("==================================");
console.log("Exercício 4: ");
console.log();

numberOfAsterisks = 25;
asterisk = '*';
position = ( numberOfAsterisks + 1 ) / 2; 
let right = position;
let left = position;
line = '';


for (let indexLine = 0; indexLine <= position; indexLine += 1){
    for (let indexColumn = 0; indexColumn <= numberOfAsterisks; indexColumn += 1){
        if(indexColumn > left && indexColumn < right){
            line = line + asterisk;
        } else {
            line = line + ' ';
        }
    }
    console.log(line);
    line = ' ';
    right += 1;
    left -= 1;
}


