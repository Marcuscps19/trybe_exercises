// Exercise 1
console.log("=============== Exercise 1 ===============");
console.log();

function isPalindrome(string) {
    let originalString = string;
    if (originalString === string.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('socorrammesubinoonibusemmarrocos'));

// Exercise 2
console.log();
console.log("=============== Exercise 2 ===============");
console.log();

function checkHigherValueIndex(arrayOfNumbers) {
    let higherValue = Number.NEGATIVE_INFINITY;
    let higherValueIndex = 0;
    for (let index = 0; index < arrayOfNumbers.length; index += 1) {
        if (arrayOfNumbers[index] > higherValue) {
            higherValue = arrayOfNumbers[index];
            higherValueIndex = index;
        }
    }
    return higherValueIndex;
}

let arrayOfNumbers = [210, 150, 150, -70, 45, 10];
console.log(checkHigherValueIndex(arrayOfNumbers));

// Exercise 3
console.log();
console.log("=============== Exercise 3 ===============");
console.log();

function checkLowerValueIndex(arrayOfNumbers) {
    let lowerValue = Number.MAX_VALUE;
    let lowerValueIndex = 0;
    for (let index = 0; index < arrayOfNumbers.length; index += 1) {
        if (arrayOfNumbers[index] < lowerValue) {
            lowerValue = arrayOfNumbers[index];
            lowerValueIndex = index;
        }
    }
    return lowerValueIndex;
}

console.log("The lowest value index is: " + checkLowerValueIndex(arrayOfNumbers));

// Exercise 4
console.log();
console.log("=============== Exercise 4 ===============");
console.log();

function checkNameWithMoreCaracteres(arrayOfNames) {
    let nameWithMoreCaracteres = '';

    for (let index = 0; index < arrayOfNames.length; index++) {
        if (arrayOfNames[index].length > nameWithMoreCaracteres.length) {
            nameWithMoreCaracteres = arrayOfNames[index];
        }
    }

    return nameWithMoreCaracteres;
}

let arrayOfNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(checkNameWithMoreCaracteres(arrayOfNames));

// Exercise 5
console.log();
console.log("=============== Exercise 5 ===============");
console.log();

function checkTheMostRepeatedNumber(arrayOfNumbers) {
    let highestCount = 0;
    let count = 1;
    let mostRepeatedNumber = 0;

    for (let slowIndex = 0 ;slowIndex < arrayOfNumbers.length; slowIndex += 1) {
        for (let fastIndex = slowIndex+1;fastIndex < arrayOfNumbers.length; fastIndex += 1) {
            if(arrayOfNumbers[slowIndex] === arrayOfNumbers[fastIndex]){
                count += 1;
            }
        }
        if(highestCount <= count){
            highestCount = count;
            count = 1;
            mostRepeatedNumber = arrayOfNumbers[slowIndex];
        }else {
            count = 1;
        }
    }
    return mostRepeatedNumber;
}

let array = [16, 16, 3, 5, 5, 16, 16, 5];
console.log(checkTheMostRepeatedNumber(array));

// Exercise 6
console.log();
console.log("=============== Exercise 6 ===============");
console.log();

function sumNumbers(number){
    let sum = 0;
    for(let index = 0; index <= number; index += 1 ){
        sum += index;
    }
    return sum;
}

console.log(sumNumbers(5));

// Exercise 7
console.log();
console.log("=============== Exercise 7 ===============");
console.log();

function checkTheEndeOfTheWord(word, ending) {
    let countEnding = ending.length;
    let wordEnding = word.substring(word.length - countEnding);
    if(wordEnding === ending){
        return true;
    } else {
        return false;
    }
}

console.log(checkTheEndeOfTheWord('trybers', 'trybers'));