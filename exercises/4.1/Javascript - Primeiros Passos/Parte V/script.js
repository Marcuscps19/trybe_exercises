// 1. Crie uma variável para armazenar o estado da pessoa candidata ao processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
// 2. Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .

let array = ['aprovada', 'lista', 'reprovada'];
let arrayPositionSort = Math.round(Math.random() * ((array.length)-1) + 1);

switch(arrayPositionSort){
    case 1: console.log("Parabéns, você foi aprovada(o)!");break;
    case 2: console.log("Você está na nossa lista de espera.");break;
    case 3: console.log("Você foi reprovada(o)");
}
