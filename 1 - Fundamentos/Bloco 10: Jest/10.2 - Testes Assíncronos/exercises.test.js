const { uppercase, getUserName, getRepos } = require('./exercises');

describe('Exercise 1', () => {
    
    it('uppercase exercise1 to EXERCISE1', (done) => {
        uppercase('exercise1', (str) => {
            expect(str).toBe('EXERCISE1');
            done();
        });
    });
});

describe('Exercise 2', () => {

    it('exercise 2.1', async () => await expect(getUserName(4)).resolves.toEqual('Mark'));

    it('exercise 2.2', async () => {
        expect.assertions(1);
        try {
            await getUserName(2);
        } catch(error) {
            expect(error).toEqual({error: 'User with 2 not found.'});
        }
    });
});

// describe('Exercise 4', () => {
//     test('Exercise 4.1', () => {
//         return getRepos('https://api.github.com/orgs/tryber/repos').then(data => {
//             expect(data).toContain('sd-01-week4-5-project-todo-list');
//             expect(data).toContain('sd-01-week4-5-project-meme-generator');
//         });
//     });
// });

// 1 - beforeEach
// 1 - test 
// 1 - afterEach
// 1 -  beforeEach
// 2 - beforeEach
// 2 - test
// 1 - afterEach
// 2 - afterEach

// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });


