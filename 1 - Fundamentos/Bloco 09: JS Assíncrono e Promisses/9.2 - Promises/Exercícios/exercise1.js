// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  const h2 = document.querySelector('#jokeContainer');

  return fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => h2.innerHTML= `${data.joke}`);
};

window.onload = () => fetchJoke();
