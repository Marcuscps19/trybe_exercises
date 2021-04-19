const sumArray = (array) => array.reduce((acc, number) => acc + number, 0);

const sumRandomNumbers = () => {
  const aleatoryNumbers = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50 + 1) ** 2
  );
  const sum = sumArray(aleatoryNumbers);

  if (sum >= 8000) throw new Error();

  return sum;
};

const sumArrayOfSums = (sum) =>
  sumArray([2, 3, 5, 10].map((number) => parseInt((sum / number).toFixed())));

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumArray = await sumArrayOfSums(sum);
    console.log(`A soma é: ${sumArray}`);
  } catch (error) {
    console.log('É mais de 8000! Essa promise deve estar quebrada!');
  }
};

fetchPromise();
