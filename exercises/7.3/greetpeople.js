const assert = require('assert');

const greetPeople = (people) => {
    let greeting = 'Hello ';
    const newArray = [];
    for (const person in people) {
      newArray.push(`${greeting}${people[person]}`);
    }
    return newArray;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  assert.deepStrictEqual(greetPeople(parameter), result);