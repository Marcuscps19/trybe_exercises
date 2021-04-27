let headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = "green";

let emergencyTasks = document.getElementsByClassName('emergency-tasks');
for (let index = 0; index < emergencyTasks.length; index += 1) {
    emergencyTasks[index].style.backgroundColor = "red";
}

let h3EmergencyTasks = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < h3EmergencyTasks.length; index += 1) {
    h3EmergencyTasks[index].style.backgroundColor = "purple";
    h3EmergencyTasks[index].style.opacity = 0.8;
}

let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
for (let index = 0; index < noEmergencyTasks.length; index += 1) {
    noEmergencyTasks[index].style.backgroundColor = "yellow";
}

let h3NoEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < h3NoEmergencyTasks.length; index += 1) {
    h3NoEmergencyTasks[index].style.backgroundColor = "black";
    h3NoEmergencyTasks[index].style.opacity = 0.8;
}

document.getElementById('container').style.backgroundColor = 'lightgrey';

document.getElementById('footer-container').style.backgroundColor = 'blue';