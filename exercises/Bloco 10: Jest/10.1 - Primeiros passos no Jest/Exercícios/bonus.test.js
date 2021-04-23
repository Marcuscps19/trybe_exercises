const searchEmployee = require('./bonus');

describe('Search Employee function tests', () => {
    it('isFunction', () => {
        expect(searchEmployee).toBeInstanceOf(Function);
    });
    it('Tests if the function throws an error in case of invalid id', () => {
        expect(() => searchEmployee('12345', 'firstName')).toThrow();
    });
    it('Tests whether the error message is: ID não identificada!', () => {
        expect(() => searchEmployee('12345', 'firstName')).toThrowError(new Error('ID não identificada!'));
    });
    it('Tests if the function throws an error in case of no param', () => {
        expect(() => searchEmployee()).toThrow();
      });
    it('Tests if the function throws an error in case of invalid information', () => {
        expect(() => searchEmployee('9852-2-2', 'fullName')).toThrow();
    });
    it('Tests wheter the error message in case of invalid information is: Informação indisponível.', () => {
        expect(() => searchEmployee('9852-2-2', 'fullName')).toThrowError(new Error('Informação indisponível.'));
    });
    it('Tests whether the firstName is returned.', () => {
        expect(searchEmployee('9852-2-2', 'firstName')).toBe('Jeff');
    });
    it('Tests whether the firstName is returned.', () => {
        expect(searchEmployee('5569-4', 'specialities')).toEqual(['Frontend', 'Redux', 'React', 'CSS']);
    });
    it('Tests whether the firstName is returned.', () => {
        expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
    });
});