const exercises = require('./exercise4to5');
describe('exercises 4 and 5', () => {
    let mockUpperCase = jest.spyOn(exercises, 'toUpperCase').mockImplementation(str => str.toLowerCase());
    mockUpperCase.mockReturnValue('exercise4');
    jest.spyOn(exercises, 'firstLetter').mockImplementation(str => str.substring(str.length - 1));
    jest.spyOn(exercises, 'concat').mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

    it('exercise 4 - UpperCase', () => {

        expect(exercises.toUpperCase('EXERCISE4')).toBe('exercise4');
        expect(exercises.toUpperCase).toBeCalled();
        expect(exercises.toUpperCase).toBeCalledTimes(1);
        expect(exercises.toUpperCase).toHaveBeenCalledWith('EXERCISE4');
    });

    it('exercise 4 - firstLetter', () => {
        exercises.firstLetter.mockImplementation(str => str.substring(str.length - 1));

        expect(exercises.firstLetter('EXERCISE4')).toBe('4');
        expect(exercises.firstLetter).toBeCalled();
        expect(exercises.firstLetter).toBeCalledTimes(1);
        expect(exercises.firstLetter).toHaveBeenCalledWith('EXERCISE4');
    })

    it('exercise 4 - concat', () => {
        exercises.concat.mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

        expect(exercises.concat('um', 'dois', 'três')).toBe('umdoistrês');
        expect(exercises.concat).toBeCalled();
        expect(exercises.concat).toBeCalledTimes(1);
        expect(exercises.concat).toHaveBeenCalledWith('um', 'dois', 'três');
    })

    it('exercise 5', () => {
        mockUpperCase.mockRestore();
        mockUpperCase = jest.spyOn(exercises, 'toUpperCase').mockImplementation(str => str.toLowerCase());
    mockUpperCase.mockReturnValue('exercise4');
        expect(exercises.toUpperCase('EXERCISE4')).toBe('exercise4');
        expect(exercises.toUpperCase).toBeCalledTimes(1);
        mockUpperCase.mockRestore();
        expect(exercises.toUpperCase('exercise4')).toBe('EXERCISE4');
    });
});
