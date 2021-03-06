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

for (let indexLine = 0; indexLine < numberOfAsterisks; indexLine += 1) {
    for (let indexColumn = 0; indexColumn <= numberOfAsterisks; indexColumn += 1) {
        if (indexColumn < position) {
            line += ' ';
        } else {
            line += asterisk;
        }
    }
    console.log(line);
    position -= 1;
    line = '';
}

// Exercício 4

console.log("==================================");
console.log("Exercício 4: ");
console.log();

numberOfAsterisks = 25;
asterisk = '*';
position = (numberOfAsterisks + 1) / 2;
let right = position;
let left = position;
line = '';


for (let indexLine = 0; indexLine <= position; indexLine += 1) {
    for (let indexColumn = 0; indexColumn <= numberOfAsterisks; indexColumn += 1) {
        if (indexColumn > left && indexColumn < right) {
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

//Exercício 5

console.log("==================================");
console.log("Exercício 5: ");
console.log();

numberOfAsterisks = 7;
asterisk = '*';
position = (numberOfAsterisks + 1) / 2;
right = position;
left = position;
line = '';

if (numberOfAsterisks % 2 === 0) {
    console.log("Precisa ser um número ímpar.");
} else {
    for (let indexLine = 1; indexLine <= position; indexLine += 1) {
        for (let indexColumn = 1; indexColumn <= numberOfAsterisks; indexColumn += 1) {
            if (indexColumn === left || indexColumn === right) {
                line += asterisk;
            } else {
                if (indexLine === position) {
                    line += asterisk;
                } else {
                    line += ' ';
                }
            }
        }
        console.log(line);
        line = '';
        right += 1;
        left -= 1;
    }
}

// Exercício 6

console.log("==================================");
console.log("Exercício 6: ");
console.log();

let primeNumber = 997;
let divisorCount = 1;

for (let index = 0; index <= primeNumber / 2; index += 1) {
    if (primeNumber % index === 0) {
        divisorCount += 1;
    }
}

if (divisorCount === 2) {
    console.log("O número é primo.");
} else {
    console.log("O número não é primo.");
}


