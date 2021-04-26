const assert = require("assert");

function wordLengths(arr) {
    const values = Object.values(arr);
    const newArray = [];

    for(let value of values){
        let valueLength = value.length;
        newArray.push(valueLength);
    }
    return newArray;
}

const words = ["sun", "potato", "roundabout", "pizza"];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, "function");
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
