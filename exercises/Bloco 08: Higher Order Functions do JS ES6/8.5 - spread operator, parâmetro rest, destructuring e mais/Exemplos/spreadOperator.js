// Concatenando arrays (cria um array novo, não altera os outros)
console.log('Concatenando arrays');
console.log();

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Pitaya', 'Kiwi', 'Melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Uva', 'Morango', 'Framboesa'];

const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItens];

console.log(fruitSalad(specialFruit, additionalItens));

//concatenando objetos, cria um objeto novo
console.log();
console.log('Concatenando objetos');
console.log();

const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  
  const customer = { ...people, ...about };
  console.log(customer); 

// Maior e menor números do array
console.log();
console.log('Maior e menor número do array:');
console.log();
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

// adicionando mais itens ao novo array
console.log();
console.log('Adicionando mais itens ao novo array');
console.log();

const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ];
console.log(numbers); // [ 1, 2, 3 ];