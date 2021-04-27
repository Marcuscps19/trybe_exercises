// ============== Exercício 1 ==============

const fatorial = number => {
  for (let index = number - 1; index > 0; index -= 1) {
    number *= index;
  }
  console.log(number);
};

fatorial(5);

// ============== Exercício 1(Bônus) ==============

const recursiveFatorial = number => (number > 1 ? number * recursiveFatorial(number - 1) : 1);
console.log(recursiveFatorial(5));

// ============== Exercício 2 ==============

const longestWord = phrase => {
    const array = phrase.split(' ');
    let wordLength = 0;
    let longestWord = '';

    for(const word of array){
        if(word.length > wordLength){
            wordLength = word.length;
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// ============== Exercício 3 ==============
// Olhar na Pasta Exercício 3

// ============== Exercício 4 ==============


// - Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// *Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:*
// *JavaScript;*
// *HTML; ... #goTrybe".*

const topSkills = ['Javascript', 'HTML', 'CSS', 'Java', 'SoftSkills'];

const swapX = string => {
    let text = 'Minhas principais x';
    return text.replace('x', string);
};

const concatenateString = stringFromSwapX => {
    let phrase = stringFromSwapX;
    topSkills.forEach(element => {
        phrase += `
        - ${element}`;
    })
    
    return phrase;
}

console.log(concatenateString(swapX('Skills são:')));



