// Exercício Bônus 1

console.log();
console.log("================ Exercício 1 - Bônus ================");
console.log();

let romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function romanNumeralsConverter(string){
    let naturalNumber = 0;
    let actualNumber = 0;
    let nextNumber = 0;
    
    for(let index = 0; index < string.length; index += 1){
        let actualRomanNumber = string[index];
        let nextRomanNumber = string[index+1];

        for(let key in romanNumerals){
            if(key === actualRomanNumber){
                actualNumber = romanNumerals[key];
            }
            if(key === nextRomanNumber){
                nextNumber = romanNumerals[key];
            }
        }
        if(actualNumber >= nextNumber){
            naturalNumber += actualNumber;
        }else {
            naturalNumber -= actualNumber;
        }
    }
    return naturalNumber;
}

console.log(romanNumeralsConverter('IX'));

// Exercício Bônus 2
console.log();
console.log("================ Exercício 2 - Bônus ================");
console.log();

function add(num1, num2) {
    let arrayOfSums = [];

    if(num1 === 0 && num2 === 0){
        return 0;
    }

    while(num1 != 0 || num2 != 0) {
      let algarismNum1 = num1 % 10;
      let algarismNum2 = num2 % 10;
      arrayOfSums.unshift(algarismNum1 + algarismNum2+ '');
      num1 = parseInt(num1/10);
      num2 = parseInt(num2/10);
    } 
    return parseInt(arrayOfSums.join(''));
   }

console.log(add(11,11));
