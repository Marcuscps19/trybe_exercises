const assert = require("assert");

const verify = (password) => {
  if (
    verifyMaxLength(password, 8) &&
    hasLowerCase(password) &&
    hasUpperCase(password) &&
    hasNumber(password)
  ) {
    return true;
  }

  return false;
};

const hasLowerCase = (string) => string.toUpperCase() !== string;

const hasUpperCase = (string) => string.toLowerCase() !== string;

const hasNumber = (string) => {
  for (let char of string) {
    const isNumber = isNaN(char);
    if (isNumber === false) {
      return true;
    }
  }
  return false;
};

const verifyMaxLength = (string, length) => string.length >= length;

let password = "123";
let expected = false;

assert.strictEqual(verify(password), expected);

password = "123abcde";
expected = false;

assert.strictEqual(verify(password), expected);

password = "123Abcde";
expected = true;

assert.strictEqual(verify(password), expected);

password = "ABcAbcde";
expected = false;

assert.strictEqual(verify(password), expected);

password = "12345678";
expected = false;

assert.strictEqual(verify(password), expected);

