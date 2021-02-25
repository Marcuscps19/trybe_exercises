let a = 22;
let b = 32;
let c = 46;

console.log('Os números são, ', a, 'e', b);
console.log();

/* Exercício 1 */
console.log('===================================================================');
console.log('Exercício 1: ');
console.log();
console.log('A soma é: ', soma(a, b));
console.log('A subtração é: ', subtracao(a, b));
console.log('A multiplicação é: ', multiplicacao(a, b));
console.log('A divisão: ', divisao(a, b));
console.log('O resto da divisão é: ', modulo(a, b));

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}


// Exercício 2
console.log('===================================================================');
console.log('Exercício 2: ');
console.log();
console.log('O número maior é: ', qualEhMaior(a, b));

function qualEhMaior(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log('===================================================================');

// Exercício 3
console.log('===================================================================');
console.log('Exercício 3: ');
console.log();
console.log('O número maior é: ', qualEhMaior(a, b, c));

function qualEhMaior(a, b) {
    if (a > b && a > c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}

// Exercício 4
console.log('===================================================================');
console.log('Exercício 4: ');
console.log();
console.log('The number is: ', positivoOuNegativo(c));

function positivoOuNegativo(a) {
    if (a > 0) {
        return 'positive';
    } else if (a < 0) {
        return 'negative';
    } else {
        return 0;
    }
}

// Exercício 5
// considerando que os lados do triângulo já passaram pela condição de existência.
console.log('===================================================================');
console.log('Exercício 5: ');
console.log();
let ehTriangulo = somaAngulosInternosTriangulo(a, b, c);
if (ehTriangulo) {
    console.log('Os ângulos são de um triângulo');
} else {
    console.log('Os ângulos não são de um triângulo.');
}

function somaAngulosInternosTriangulo(a, b, c) {
    if (a + b + c === 180) {
        return true;
    } else {
        return false;
    }
}

// Exercício 6

/*Fonte dos movimentos do xadrez: https://www.ludijogos.com/multiplayer/xadrez/regras/ */

console.log('===================================================================');
console.log('Exercício 6: ');
console.log();
let pecaXadrez = 'CAvalo';
console.log('Essa peça (', pecaXadrez.toLowerCase(), ')', movimentoPecaXadrez(pecaXadrez));

function movimentoPecaXadrez(pecaXadrez) {
    pecaXadrez = pecaXadrez.toLowerCase();
    switch (pecaXadrez) {
        case 'rei':
            return 'move-se na horizontal, vertical e diagonal, uma casa de cada vez.';
        case 'rainha': return 'move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.';
        case 'bispo': return 'move-se ao longo da diagonal. Não pode pular outras peças.';
        case 'cavalo': return 'move-se forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa. Pode pular outras peças.';
        case 'torre': return 'move-se pela vertical ou horizontal, mas não pode pular outras peças.';
        case 'peão': return 'move-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.';
        default: return 'não é uma peça de xadrez.';
    }
}

// Exercício 7
let nota = 70;
console.log('===================================================================');
console.log('Exercício 7: ');
console.log();
console.log('A nota do aluno foi: ');
console.log(calculaNota(nota));

function calculaNota(nota) {
    switch (true) {
        case (nota > 100 || nota < 0): return ('Nota inválida');
        case (nota >= 90): return ('A');
        case (nota >= 80): return ('B');
        case (nota >= 70): return ('C');
        case (nota >= 60): return ('D');
        case (nota >= 50): return ('E');
        default: return ('F');
    }
}

// Exercício 8
console.log('===================================================================');
console.log('Exercício 8: ');
console.log();
console.log('Existe par?: ');
console.log(existePar(a, b, c));

function existePar(a, b, c) {
    if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Exercício 9
console.log('===================================================================');
console.log('Exercício 9: ');
console.log();
console.log('Existe impar?: ');
console.log(!existePar(a, b, c));

// Exercício 10
console.log('===================================================================');
console.log('Exercício 10: ');
console.log();
let valorCusto = 10.00;
let valorVenda = 17.00;
console.log("O lucro nesse produto é de: ", calculaLucro(valorCusto, valorVenda));

function calculaLucro(valorCusto, valorVenda) {
    let valorCustoTotal = valorCusto + (valorCusto * 0.20);
    let lucro = valorVenda - valorCustoTotal;
    return lucro;
}

// Exercício 11
console.log('===================================================================');
console.log('Exercício 11: ');
let salarioBruto = 3000.00;
let salarioINSSDeduzido = salarioBruto - calculaINSS(salarioBruto);
let salarioLiquido = salarioINSSDeduzido - calculaIR(salarioINSSDeduzido);

console.log("O salário líquido é: ", salarioLiquido);

function calculaINSS(salarioBruto) {
    let aliquota = 0;
    if (salarioBruto > 0 && salarioBruto <= 1596.94) {
        aliquota = salarioBruto * 0.08;
    } else if (salarioBruto > 1596.94 && salarioBruto <= 2594.92) {
        aliquota = alarioBruto * 0.09;
    } else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
        aliquota = salarioBruto * 0.11;
    } else if (salarioBruto > 5189.82) {
        aliquota = salarioBruto * 0.11;
    }
    if (aliquota > 570.88) {
        aliquota = 570.88;
    }

    return aliquota;
}

function calculaIR(salarioINSSDeduzido) {
    let ir = 0;
    if (salarioINSSDeduzido > 0 && salarioINSSDeduzido <= 1903.98) {
        ir = 0;
    } else if (salarioINSSDeduzido > 1903.98 && salarioINSSDeduzido <= 2826.65) {
        ir = (salarioINSSDeduzido * 0.075) - 142.80;
    } else if (salarioINSSDeduzido > 2826.65 && salarioINSSDeduzido <= 3751.05) {
        ir = (salarioINSSDeduzido * 0.15) - 354.80;
    } else if (salarioINSSDeduzido > 3751.05 && salarioINSSDeduzido <= 4664.68) {
        ir = (salarioINSSDeduzido * 0.225) - 636.13;
    } else if (salario > 4664.68) {
        ir = (salarioINSSDeduzido * 0.275) - 869.36;
    }

    return ir;
}