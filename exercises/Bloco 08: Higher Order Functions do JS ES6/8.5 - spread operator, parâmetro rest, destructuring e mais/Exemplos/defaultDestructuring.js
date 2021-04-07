// adiciona um valor default caso a propriedade não exista no objeto

// const person = {
//   name: "João",
//   lastName: "Jr",
//   age: 34,
// };

// const { nationality = "Brazilian" } = person;

// console.log(nationality);

// console.log();

// adiciona um valor default caso a propriedade não exista no array
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

// Fixação

const getNationality = ({ firstName, nationality = 'Brazilian' }) =>
  `${firstName} is ${nationality}`;

const person = {
  firstName: "João",
  lastName: "Jr II",
};

const otherPerson = {
  firstName: "Ivan",
  lastName: "Ivanovich",
  nationality: "Russian",
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
