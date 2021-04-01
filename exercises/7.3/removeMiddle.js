const assert = require("assert");

const removeMiddle = (words) => {
  const wordsLength = words.length;
  const positionOfMiddle = wordsLength / 2;
  const output = words.splice(positionOfMiddle, 1);
  return output;
};


const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
