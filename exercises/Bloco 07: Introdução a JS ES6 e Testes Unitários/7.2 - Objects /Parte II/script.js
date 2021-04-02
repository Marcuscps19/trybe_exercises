console.log();
console.log('================= Exercício 1 =================');
console.log();

const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addsKeyValue = (object, key, value) => {
  object[key] = value;
};

addsKeyValue(lesson2, "turno", "manhã");
console.log(lesson1);

console.log();
console.log("================= Exercício 2 =================");
console.log();

const allKeys = (object) => console.log(Object.keys(object));
allKeys(lesson1);

console.log();
console.log("================= Exercício 3 =================");
console.log();

const objectLength = (object) => Object.keys(object).length;

console.log(`O tamanho do objeto é: ${objectLength(lesson1)}`);

console.log();
console.log("================= Exercício 4 =================");
console.log();

const objectValues = (object) => Object.values(object);

console.log(objectValues(lesson1));


console.log();
console.log("================= Exercício 5 =================");
console.log();

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

console.log();
console.log("================= Exercício 6 =================");
console.log();

const totalOfStudents = (allLessons) => {
    let totalStudents = 0;
    for(let key in allLessons){
        totalStudents += allLessons[key].numeroEstudantes;
    }
    return totalStudents;
}

console.log(totalOfStudents(allLessons));

console.log();
console.log("================= Exercício 7 =================");
console.log();

const getValueByNumber = (object, position) => Object.values(object)[position];
console.log(getValueByNumber(lesson1, 0));

console.log();
console.log("================= Exercício 8 =================");
console.log();

const isExistPair = (object, key, value) => {
    const entries = Object.entries(object);
    let exist = false;
    for (const n of entries){
      if(n[0] === key && n[1] === value)
       exist = true;
    }
    
     return exist;
}

console.log(isExistPair(lesson2, 'professor', 'Carlos'));


console.log();
console.log("================= Bônus 1 =================");
console.log();

const AttendedMathClass = (allLessons) => {
  let numberOfStudents = 0;
  for(let key in allLessons){
    const entries = allLessons[key];
    if(entries.materia === 'Matemática'){
      numberOfStudents += entries.numeroEstudantes;
    }
  }
  return numberOfStudents;
}
console.log(AttendedMathClass(allLessons));

console.log();
console.log("================= Bônus 2 =================");
console.log();

const teacherReport = (object, teacher) => {
  let numberOfStudents = 0;
  let classes = [];

  for(let key in object){
    const entries = object[key];
    if(entries.professor === teacher){
      classes.push(entries.materia);
      numberOfStudents += entries.numeroEstudantes;
    }
  }
  return {
    professor: teacher,
    aulas: classes,
    estudantes: numberOfStudents
  };
}

console.log(teacherReport(allLessons, 'Carlos'));