// retornos default para caso não receba o argumento

// sem o default parameter
// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!

// uma solução não muito bonita
// const greeting = (user) => {
//     const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
//     console.log(`Welcome ${userDisplay}!`);
//   };
  
//   greeting(); // Welcome usuário!

// solução com default Parameter
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

// fixação

const multiply = (number, value = 1) => number * value;
  
  console.log(multiply(8));