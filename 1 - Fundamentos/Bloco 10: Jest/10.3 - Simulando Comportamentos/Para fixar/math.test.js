const math =  require('./math');
jest.mock('./math');

afterEach(math.subtrair.mockReset);

describe('tests', () => {
    it('mock subtrair', () => {
        math.subtrair.mockReturnValue(1);
        math.subtrair();
        expect(math.subtrair).toHaveBeenCalled();
        expect(math.subtrair).toHaveBeenCalledTimes(1);
        expect(math.subtrair(3, 2)).toBe(1);
    });

    it('mock multiplicar', () => {
        math.multiplicar.mockReturnValue(10);
        math.multiplicar();
        expect(math.multiplicar).toBeCalled();
        expect(math.multiplicar).toBeCalledTimes(1);
        expect(math.multiplicar(2,5)).toBe(10);
        expect(math.multiplicar).toBeCalledTimes(2);
    });

    it('mock somar', () => {
        math.somar.mockImplementation((a, b ) => a + b);
        math.somar();
        expect(math.somar).toBeCalled();
        expect(math.somar).toBeCalledTimes(1);
        expect(math.somar(2, 4)).toBe(6);
        expect(math.somar).toBeCalledWith(2, 4);
    });

    it('mock dividir', () => {
        math.dividir.mockReturnValue(15);
        math.dividir.mockReturnValueOnce(2);
        math.dividir.mockReturnValueOnce(5);
        
        expect(math.dividir(4, 2)).toBe(2);
        expect(math.dividir).toBeCalled();
        expect(math.dividir).toBeCalledTimes(1);
        expect(math.dividir(10, 2)).toBe(5);
        expect(math.dividir).toBeCalledTimes(2);
        expect(math.dividir()).toBe(15);
        expect(math.dividir).toBeCalledTimes(3);
        expect(math.dividir).toBeCalledWith(10, 2);
        expect(math.dividir).toBeCalledWith(4, 2);
    });

    it('mock subtrair - implementação original', () => {
        math.subtrair.mockReturnValue(20);
        math.subtrair();
        expect(math.subtrair).toHaveBeenCalled();
        expect(math.subtrair).toHaveBeenCalledTimes(1);
        expect(math.subtrair()).toBe(20);

        math.subtrair.mockReset();
        math.subtrair();
        expect(math.subtrair).toHaveBeenCalledTimes(1);
        expect(math.subtrair()).not.toBe(20);
    })
});