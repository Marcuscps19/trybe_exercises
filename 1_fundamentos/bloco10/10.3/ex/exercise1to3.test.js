const aleatoryNumber = require('./exercise1to3');
jest.mock('./exercise1to3');

describe('exercises', () => {
    it('exercise 1', () => {
        aleatoryNumber.mockReturnValue(10);
        aleatoryNumber();
        expect(aleatoryNumber).toBeCalled();
        expect(aleatoryNumber).toBeCalledTimes(1);
        expect(aleatoryNumber()).toBe(10);
        expect(aleatoryNumber).toBeCalledTimes(2);
    });
    it('exercise 2', () => {
        aleatoryNumber.mockImplementationOnce((a, b) => a / b);
        expect(aleatoryNumber(10, 2)).toBe(5);
        expect(aleatoryNumber).toBeCalled();
        
        aleatoryNumber.mockClear();
        expect(aleatoryNumber()).toBe(10);
        expect(aleatoryNumber).toBeCalled();
        expect(aleatoryNumber).toBeCalledTimes(1);
    });

    it('exercise 3', () => {
        aleatoryNumber.mockClear();
        aleatoryNumber.mockImplementationOnce((a, b, c) => a * b * c);
        expect(aleatoryNumber(10, 2, 6)).toBe(120);
        expect(aleatoryNumber).toBeCalled();
        expect(aleatoryNumber).toBeCalledWith(10, 2, 6);
        expect(aleatoryNumber).toBeCalledTimes(1);
        aleatoryNumber.mockImplementationOnce((a) => a * 2);
        expect(aleatoryNumber(2)).toBe(4);
        expect(aleatoryNumber).toBeCalled();
        expect(aleatoryNumber).toBeCalledTimes(2);
        expect(aleatoryNumber).toBeCalledWith(2);
        expect(aleatoryNumber()).toBe(10);
    });
});