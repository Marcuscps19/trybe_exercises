const assert = require('assert');

function addOne(arr) {
    const values = Object.values(arr);
    const newArray = [];
    for(let key of values){
        newArray.push(key + 1);
    }
    console.log(newArray);
    return newArray;
} 


const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);