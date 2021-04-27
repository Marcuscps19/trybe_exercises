const fetch = require('node-fetch');
const fetchDog = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        return (data.status === 'success' ? resolve(data) : reject(data))
    });

module.exports = fetchDog;