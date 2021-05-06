const assert = require("assert");

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const flatten = () => arrays.reduce((acc, element) => [...acc, ...element]);
// const flatten = () => arrays.reduce((acc, element) => acc.concat(element));

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
