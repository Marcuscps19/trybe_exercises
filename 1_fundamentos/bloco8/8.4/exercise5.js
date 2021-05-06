const assert = require("assert");

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

const containsA = () =>
  names.reduce(
    (acc, currentValue) =>
      currentValue.toLowerCase().includes("a")
        ? (acc += currentValue.toLowerCase().split("a").length - 1)
        : acc,
    0
  );

assert.deepStrictEqual(containsA(), 20);
