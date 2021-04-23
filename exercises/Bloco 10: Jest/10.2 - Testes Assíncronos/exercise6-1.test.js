const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByName = (name) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const animal = Animals.find((animal) => animal.name === name);
        (animal !== undefined) ? resolve(animal) : reject('Nenhum animal com esse nome!');
        });
    }));

  const findAnimalByAge = (age) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const animals = Animals.filter((animal) => animal.age === age);
        (animals.length !== 0) ? resolve(animals) : reject('Nenhum animal com essa idade!');
      })
    })
  );
  
  const getAnimal = async (name) => await findAnimalByName(name);
  const getAnimals = async (age) => await findAnimalByAge(age);
  describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimal('Bob').catch(error =>
          expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
    });
  });

  describe('Testando promise - findAnimalByAge', () => {
    describe('Quando existe animais com a idade procurado', () => {
      test('Retorne os objetos dos animais', () => {
        expect.assertions(1);
        return getAnimals(5).then(animals => {
          expect(animals).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
        });
      });
    });
  
    describe('Quando não existe animais com a idade procurada', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimals(0).catch(error =>
          expect(error).toEqual('Nenhum animal com essa idade!')
        );
      });
    });
  });