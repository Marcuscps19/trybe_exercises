const sum = require('./exercise1');
const myRemove = require('./exercise2');
const myRemoveWithoutCopy = require('./exercise3');
const myFizzBuzz = require('./exercise4');
const exercise5 = require('./exercise5');
describe('Testes exercício 1', () => {
    test('4 + 5 = 9', () => {
        expect(9).toBe(sum(4, 5));
    });

    test('0 + 0 = 0', () => {
        expect(0).toBe(sum(0, 0));
    });

    test(`4 + '5' = parameters must be numbers`, () => {
        expect(() => sum(4 + '5')).toThrow();
    });

    test(`4 + '5' = parameters must be numbers`, () => {
        expect(() => sum(4 + '5')).toThrowError(new Error('parameters must be numbers'));
    });
});

describe('Testes exercício 2', () => {
    test('myRemove([1, 2, 3, 4], 3) = [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    test('myRemove([1, 2, 3, 4], 3) is not [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    const myArray = [1, 2, 3, 4];
    myRemove(myArray, 3);
    test('myRemove([1, 2, 3, 4], 3', () => {
        expect(myArray).toEqual([1, 2, 3, 4]);
    });

    test('myRemove([1, 2, 3, 4], 5) is [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

describe('Testes exercício 3', () => {
    test('myRemoveWithoutCopy([1, 2, 3, 4], 3) = [1, 2, 3]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    test('myRemoveWithoutCopy([1, 2, 3, 4], 3) is not [1, 2, 3, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    const myArray = [1, 2, 3, 4];
    myRemoveWithoutCopy(myArray, 4);

    test('myRemoveWithoutCopy([1, 2, 3, 4], 4', () => {
        expect(myArray).toEqual([1, 2, 3]);
    });

    test('myRemoveWithoutCopy([1, 2, 3, 4], 5) is [1, 2, 3, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

describe('Testes exercícios 4', () => {
    test('myFizzBuzz(15) === fizzbuzz', () => expect('fizzbuzz').toBe(myFizzBuzz(15)));

    test('myFizzBuzz(12) === fizz', () => expect('fizz').toBe(myFizzBuzz(12)));

    test('myFizzBuzz(10) === buzz', () => expect('buzz').toBe(myFizzBuzz(10)));

    test('myFizzBuzz(13) === 13', () => expect(13).toBe(myFizzBuzz(13)));

    test(`myFizzBuzz('teste') === false`, () => expect(myFizzBuzz('teste')).toBeFalsy());
});

describe('Testes exercícios 5', () => {
    test('exercise5.obj1 === exercise5.obj2', () => expect(exercise5.obj1).toEqual(exercise5.obj2));
    test('exercise5.obj1 === exercise5.obj3', () => expect(exercise5.obj1).not.toEqual(exercise5.obj3));
    test('exercise5.obj3 === exercise5.obj2', () => expect(exercise5.obj3).not.toEqual(exercise5.obj2));
});