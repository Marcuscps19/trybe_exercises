const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () =>
  Math.round(Math.random() * (dragon.strength - 15) + 15);

const warriorDamage = () =>
  Math.round(
    Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) +
      warrior.strength
  );

const damageAndManaSpentByTheWizard = () => {
  const turnStats = {
    damage: "Not enough mana",
    manaSpent: 0,
  };

  if (mage.mana >= 15) {
    mage.damage = Math.round(
      Math.random() * (mage.intelligence * 2 - mage.intelligence) +
        mage.intelligence
    );
    turnStats.damage = mage.damage;
    turnStats.manaSpent = 15;
    return turnStats;
  }
  return turnStats;
};

const gameActions = {
  warriorTurn: (warriorDamage) => {
    warrior.damage = warriorDamage();
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (damageAndManaSpentByTheWizard) => {
    const mageTurnStats = damageAndManaSpentByTheWizard();
    mage.damage = mageTurnStats.damage;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (dragonDamage) => {
    dragon.damage = dragonDamage();
    warrior.healthPoints -= dragon.damage;
    dragon.damage = dragonDamage();
    mage.healthPoints -= dragon.damage;
  },
  endOfTurn: () => {
    return battleMembers;
  },
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(damageAndManaSpentByTheWizard);
gameActions.dragonTurn(dragonDamage);


