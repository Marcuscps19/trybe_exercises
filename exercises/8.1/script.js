// // =================== Exercício 1 ===================

// const newEmployees = (newEmployee) => {
//     const employees = {
//       id1: personHired('Pedro Guerra'),
//       id2: personHired('Luiza Drumond'),
//       id3: personHired('Carla Paiva')
//     }
//     return employees;
//   };

//   function personHired(fullname) {
//     const employee = {
//         fullname,
//         email: `${fullname.split(' ').join('_').toLowerCase()}@trybe.com`
//     }

//     return employee;
//   }

//   console.log(newEmployees());

// // =================== Exercício 2 ===================

// const drawResult = (betNumber,  verifySortedNumber) => {
//     const aleatoryNumber = Math.floor(Math.random() * (5) + 1);
//     return verifySortedNumber(betNumber, aleatoryNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
// }

// const  isEquals = (number, aleatoryNumber) => number === aleatoryNumber;

// console.log(drawResult(3, isEquals));

// =================== Exercício 3 ===================

// const answers = (correctAnswer) => (userAnswer) => correctAnswer === userAnswer.toLowerCase();

// const correctAnswer = 'resposta correta';
// const userAnswer = 'ResPoSta CoRReta';

// console.log(answers(correctAnswer)(userAnswer));

// =================== Exercício 4 ===================

const answers4 = (correctAnswers, userAnswers, isCorrect) =>
  isCorrect(correctAnswers, userAnswers);

const isCorrect = (correctAnswers, userAnswers) => {
  let points = 0;
  for (let index in correctAnswers) {
    correctAnswers[index] === userAnswers[index]
      ? (points += 1)
      : userAnswers[index] === "N.A"
      ? points
      : (points -= 0.5);
  }
  return points;
};

console.log(
  answers4(["a", "e", "e", "d", "b"], ["a", "b", "e", "d", "N.A"], isCorrect)
);
