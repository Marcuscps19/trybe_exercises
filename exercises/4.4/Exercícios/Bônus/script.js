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

console.log(romanNumeralsConverter('MMCMLXIV'));