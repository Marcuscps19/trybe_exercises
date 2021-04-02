let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

// Exercício 1
console.log("Exercício 1: ");

  console.log('Bem-vinda, '+ info.personagem + '!!');

// Exercício 2
console.log();
console.log("========================");
console.log("Exercício 2: ");

info['recorrente'] = 'Sim';

console.table(info);

// Exercício 3
console.log();
console.log("========================");
console.log("Exercício 3: ");

for( key in info ){
    console.log(key);
}

// Exercício 4
console.log();
console.log("========================");
console.log("Exercício 4: ");
console.log();

for( key in info ){
    console.log(info[key]);
}

// Exercício 5
console.log();
console.log("========================");
console.log("Exercício 5: ");
console.log();

let info2 = Object.create(info);
    info2.personagem = "Tio Patinhas",
    info2.origem = "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    info2.nota = "O último MacPatinhas",
    info2.recorrente = "Sim";


console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info.nota);
console.log((info.recorrente && info.recorrente ? "Ambos Recorrentes" : "Pelo menos um dos dois não é recorrente."));

