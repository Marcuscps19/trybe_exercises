// Permite criar funções que recebem números ilimitados de argumentos

function quantosParams(...args) {
  console.log("parâmetros:", args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams("string", null, [1, 2, 3], {})); // Você passou 4 parâmetros para a função.


// Exemplo com reduce somando argumentos passados como parâmetro
console.log();
console.log('Exemplo com reduce somando argumentos passados como parâmetro');
console.log();
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88
console.log(sum(1,2,3,4));