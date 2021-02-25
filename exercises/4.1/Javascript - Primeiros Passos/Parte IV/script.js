let notaMax = 100;
let notaMin = 1;
let nota = Math.round(Math.random() * (notaMax-1) + notaMin);

if(nota >= 80){
    console.log("Parabéns, você foi aprovada(o)! Sua nota foi: ", nota);
}else if(nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera. Sua nota foi: ", nota);
} else {
    console.log ("Você foi reprovada(o). Sua nota foi: ", nota);
}

