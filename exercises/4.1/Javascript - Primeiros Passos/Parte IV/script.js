let max = 100;
let min = 1;
let nota = Math.round(Math.random() * ((max+1) - min) + min);

if(nota >= 80){
    console.log("Parabéns, você foi aprovado! Sua nota foi: ", nota);
}else if(nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera. Sua nota foi: ", nota);
}else {
    console.log("Você foi reprovado. Sua nota foi: ", nota);
}

