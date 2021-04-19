const promise = new Promise((resolve, reject) => {
    const number = Math.random() * 11;

    if(number < 6) {
        return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
    } 

    resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
})