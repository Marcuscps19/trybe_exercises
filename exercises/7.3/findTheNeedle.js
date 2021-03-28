const assert = require('assert');

function findTheNeedle(arr, value) {
    let positionOfNeedle = -1;
    for(let key in arr){
        if(arr[key] === value){
            positionOfNeedle = key;
        }
    }
    return parseInt(positionOfNeedle);
}


let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);