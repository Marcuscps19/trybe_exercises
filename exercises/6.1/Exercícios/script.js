function createStateOptions() {
  const stateOptions = [
    "Selecione seu estado",
    "AC",
    "AL",
    "AM",
    "AP",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MG",
    "MS",
    "MT",
    "PA",
    "PB",
    "PE",
    "PI",
    "PR",
    "RJ",
    "RN",
    "RO",
    "RR",
    "RS",
    "SC",
    "SE",
    "SP",
    "TO",
  ];
  const selectState = document.getElementById("select_state");
  for (let index = 0; index < stateOptions.length; index += 1) {
    const option = document.createElement("option");
    selectState.appendChild(option).innerText = stateOptions[index];
    selectState.appendChild(option).value = stateOptions[index];
  }
}

function verifyIsNumber(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (isNaN(array[index])) {
      return true;
    }
  }
  return false;
}

function verifyDates(array) {
  let day = array[0];
  let month = array[1];
  let year = array[2];
  if (
    day > 0 &&
    day <= 31 &&
    month > 0 &&
    month <= 12 &&
    year >= 0 &&
    year.length === 4
  ) {
    return true;
  }
  return false;
}

function validateDate(date) {
  if (date.indexOf("/" === 2)) {
    if (date.indexOf("/" === 5)) {
      const array = date.split("/");
      const isNumber = verifyIsNumber(array);
      if (!isNumber) {
        if (verifyDates(array)) {
          return true;
        }
      }
    }
  }
  return false;
}

function checkDate() {
  const inputDate = document.getElementById("input_start_date");
  const date = inputDate.value;

  const userDate = validateDate(date);
  if (!userDate) {
    inputDate.value = "";
    alert("Data inválida.");
    return false;
  }
  return userDate;
}

function renderCurriculum(event) {
  event.preventDefault();
  const allElements = document.querySelectorAll(".input");
  for (let index = 0; index < allElements.length; index += 1) {
    if (allElements[index].type === "radio" && !allElements[index].checked) {
      continue;
    }

    const userInput = allElements[index].value;
    const dataUser = document.querySelector(".form-data");

    if (checkDate()) {
      const div = document.createElement("div");
      div.className = "div-cv";
      div.innerHTML = userInput;
      dataUser.appendChild(div);
    }
  }
}

const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", renderCurriculum);
window.onload = function () {
  createStateOptions();
};
