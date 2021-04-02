function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();
createDaysOfDezember();

function createDaysOfDezember() {
  const dezDaysList = [
    29,
    30,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];

  const days = document.getElementById("days");
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const li = document.createElement("li");
    li.classList.add("day");
    if (
      dezDaysList[index] === 24 ||
      dezDaysList[index] === 25 ||
      dezDaysList[index] === 31
    ) {
      li.classList.add("holiday");
    }
    if (
      dezDaysList[index] === 4 ||
      dezDaysList[index] === 11 ||
      dezDaysList[index] === 18 ||
      dezDaysList[index] === 25
    ) {
      li.classList.add("friday");
    }
    li.innerHTML = dezDaysList[index];
    days.appendChild(li);
  }
}

let btnFeriados = "";
createBtnFeriados("Feriados");

function createBtnFeriados(feriados) {
  btnFeriados = document.createElement("button");
  btnFeriados.id = "btn-holiday";
  btnFeriados.innerText = feriados;
  const buttonsContainer = document.querySelector(".buttons-container");
  buttonsContainer.appendChild(btnFeriados);
}

btnFeriados.addEventListener("click", function btnFeriadosOnClick() {
  const holidays = document.getElementsByClassName("holiday");
  for (let index = 0; index < holidays.length; index += 1) {
    const bgColor = holidays[index].style.getPropertyValue("background-color");
    if (bgColor === "rgb(67, 129, 3)") {
      holidays[index].style.backgroundColor = "rgb(238,238,238)";
    } else {
      holidays[index].style.backgroundColor = "rgb(67, 129, 3)";
    }
  }
});

let btnFriday = "";
createBtnSextaFeira("Sexta-feira");

function createBtnSextaFeira(string) {
  btnFriday = document.createElement("button");
  btnFriday.innerText = "Sexta-feira";
  btnFriday.id = "btn-friday";
  const buttonsContainer = document.querySelector(".buttons-container");
  buttonsContainer.appendChild(btnFriday);
}

btnFriday.addEventListener("click", function btnFridayOnClick() {
  const fridays = document.getElementsByClassName("friday");
  const fridayArray = [4, 11, 18, 25];
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText === "Sextou") {
      console.log(fridayArray[index]);
      fridays[index].innerText = fridayArray[index];
    } else {
      fridays[index].innerText = "Sextou";
    }
  }
});

days.addEventListener("mouseover", function zoomIn(e) {
  if (e.target.classList.contains("day")) {
    e.target.style.fontSize = "2em";
  }
});

days.addEventListener("mouseout", function zoomOut(e) {
  if (e.target.classList.contains("day")) {
    e.target.style.fontSize = "20px";
  }
});

function myTasks(string) {
  const span = document.createElement("span");
  span.innerText = string;
  const tasks = document.querySelector(".my-tasks");
  tasks.appendChild(span);
}

function myTaskColor(cor) {
  const div = document.createElement("div");
  div.classList.add("task");
  div.style.setProperty("background-color", cor);
  const tasks = document.querySelector(".my-tasks");
  tasks.appendChild(div);
}

myTasks("Cozinhar");
myTaskColor("red");

function setTaskClass() {
  const divColor = document.getElementsByClassName("task");
  for (let index = 0; index < divColor.length; index += 1) {
    divColor[index].addEventListener("click", function selectedTask(e) {
      if (e.target.classList.contains("selected")) {
        e.target.classList.remove("selected");
      } else {
        e.target.classList.add("selected");
      }
    });
  }
}

setTaskClass();

function changeDayColor() {
  const days = document.getElementById("days");
  days.addEventListener("click", function changeColor(e) {
    let selected = document.querySelector(".selected");

    if (selected != null && e.target.classList.contains("day")) {
      if (
        e.target.style.getPropertyValue("color") !==
        selected.style.getPropertyValue("background-color")
      ) {
        e.target.style.setProperty(
          "color",
          selected.style.getPropertyValue("background-color")
        );
      } else {
        e.target.style.setProperty("color", "rgb(119,119,119)");
      }
    }
  });
}

changeDayColor();

const taskInput = document.getElementById("task-input");
function addsCompromise() {
  const btnAdd = document.getElementById("btn-add");

  btnAdd.addEventListener("click", function addCompromisso() {
    if (taskInput.value === "") {
      alert("ERRO: Adicione um valor.");
    } else {
      const list = document.querySelector(".task-list");
      const listItem = document.createElement("li");
      listItem.innerText = taskInput.value;
      list.appendChild(listItem);
      taskInput.value = "";
    }
  });
}

taskInput.addEventListener("keyup", function verifyInput(e) {
  if (e.keyCode === 13 && taskInput.value != "") {
    const list = document.querySelector(".task-list");
    const listItem = document.createElement("li");
    listItem.innerText = taskInput.value;
    list.appendChild(listItem);
    taskInput.value = "";
  }
});

addsCompromise();