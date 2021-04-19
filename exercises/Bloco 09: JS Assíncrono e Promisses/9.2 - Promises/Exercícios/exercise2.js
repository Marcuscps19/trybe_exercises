const sumArray = (array) => array.reduce((acc, number) => acc + number, 0);

const promise = new Promise((resolve, reject) => {
  const aleatoryNumbers = new Array(10)
    .fill(null)
    .map(() => Math.floor(Math.random() * 50 + 1) ** 2);
  const sum = sumArray(aleatoryNumbers);

  if (sum < 8000) {
    return resolve(sum);
  }
  return reject(
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  );
})
  .then((sum) => {
    const array = [2, 3, 5, 10];
    return array.map((number) => parseInt((sum / number).toFixed()));
  })
  .then((array) => console.log(sumArray(array)))
  .catch((msg) => msg);
