const assert = require("assert");

const getLargestNumber = (array) => {
  let largestNumber = Math.max(...array);
  return largestNumber;
};

let parameter = [45, 8, 2, 50, 1, 7, 99];
let result = 99;

assert.strictEqual(getLargestNumber(parameter), result);

parameter = [-4, -8, -2, -50, -1, -7, -99];
result = -1;

assert.strictEqual(getLargestNumber(parameter), result);

parameter = [0];
result = 0;

assert.strictEqual(getLargestNumber(parameter), result);