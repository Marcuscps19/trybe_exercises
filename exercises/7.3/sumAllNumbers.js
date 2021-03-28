const assert = require("assert");

function sumAllNumbers(arr) {
  let sum = 0;
  for (let value of arr) {
    sum += value;
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, "function");
assert.strictEqual(output, expected);
