// const product = {
//   name: "Smart TV Crystal UHD",
//   price: "1899.05",
//   seller: "Casas de Minas",
// };

// const { name } = product;
// console.log(name); // Smart TV Crystal UHD

// const { name, seller } = product;
// console.log(name);
// console.log(seller);

// Trocando nome das propriedades
console.log();
console.log("Trocando nome das propriedades");
console.log();

const student = {
  a: "Maria",
  b: "Turma B",
  c: "Matematica",
};

const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

// O exemplo acima é equivalente a: const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };
// const name = student.a;
// console.log(name); // Maria

// Passando valores de objetos como parâmetros em função:
console.log();
console.log("Passando valores de objetos como parâmetros em função:");
console.log();

const product = {
  name: "Smart TV Crystal UHD",
  price: "1899.05",
  seller: "Casas de Minas",
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
