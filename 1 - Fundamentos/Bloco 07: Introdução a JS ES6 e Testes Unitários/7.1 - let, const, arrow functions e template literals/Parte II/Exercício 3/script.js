let counter = 0;
const counterText = document.querySelector('#counter');
counterText.innerText = counter;


document.querySelector('#button-counter').addEventListener('click', () => counterText.innerText = counter += 1);