const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

const myArray = [1, 2, 3];

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], '[1, 2, 4]');
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], '[1, 2, 4]');
assert.notDeepStrictEqual(myRemove(myArray, 3), myArray, myArray);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5) , [1, 2, 3, 4], '[1, 2, 4]');
