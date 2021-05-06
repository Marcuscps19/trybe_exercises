const service = require('./exercise7');

describe('exercise 7', () => {

    const responseValue = {
        'id': '7h3oGtrOfxc',
        'joke': 'Whiteboards ... are remarkable.',
        'status': 200
      };

    jest.spyOn(service, 'fetchJoke').mockResolvedValue(responseValue.joke);

    it('teste' , () => {
        expect(service.fetchJoke()).resolves.toBe(responseValue.joke);
    })
});