// 1. Crie uma variável para armazenar o estado do candidato ao processo seletivo, que pode ser: 'aprovado' , 'lista' ou 'reprovado' ;
// 2. Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado do candidato for 'aprovado' , 'lista' ou 'reprovado' . Como default , imprima a mensagem de 'não se aplica' .

let estadoProcessoSeletivo = 'lista';

switch(estadoProcessoSeletivo){
    case 'aprovado':
        console.log("Parabéns, você foi aprovado!");break;
    case 'lista':
        console.log("Você está na nossa lista de espera.");break;
    case 'reprovado':
        console.log("Você foi reprovado.");break;
    default: console.log('Não se aplica.');
}