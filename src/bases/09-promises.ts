const myPromise = new Promise<number>( (resolve, reject) => { // <number> indica que la prmesa resuelve un número
    setTimeout( () => {
        // resolve(100);
        reject('Mi amigo se perdió');
    }, 2000);
});

myPromise
    .then( (myMoney) => {// muestra el resolve
        console.log(`Tengo mi dinero ${ myMoney }`); 
    })
    .catch( (reason) => { // muestra el reject
        console.warn(reason);
    })
    .finally( () => {
        console.log('Pues a seguir con mi vida')
    })