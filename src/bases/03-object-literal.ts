interface Hero{
    firstName:string;
    lastName:string;
    age:number;
    address:Address
}

interface Address{
    zip:string;
    city:string;
}

const ironMan: Hero = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 40,
    address: {
    zip: '10880, 90265',
    city: 'Malibu, California',
    }
};

//const spiderMan = { ...ironMan }; // al clonar el objeto con el spread operator, se crea una nueva referencia en memoria pero solo para el objeto principal, no para los objetos anidados (shallow copy) que en este caso es el objeto address
const spiderMan = structuredClone(ironMan); // structuredClone hace una copia profunda (deep copy) del objeto, creando nuevas referencias en memoria para todos los niveles del objeto
spiderMan.firstName = 'Peter';
spiderMan.lastName = 'Parker';
spiderMan.age = 21;
spiderMan.address.city = 'New York';
spiderMan.address.zip = '10001, 10002';
spiderMan.address.zip = '10001, 10002';

console.log(ironMan, spiderMan);