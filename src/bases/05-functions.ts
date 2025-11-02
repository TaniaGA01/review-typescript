function greet(name:string){
    return `Hola, ${name}`;
}

// const greet2 = (name:string) => {
//     return `Hola, ${name}`; // funcion de flecha con retorno explicito
// }
const greet2 = (name:string) => `Hola, ${name}`; // funcion de flecha con retorno implicito

const message = greet('Tania');
const message2 = greet2('lola');
console.log(message, message2);


interface User{
    uid: string,
    userName:string
}

function getUser():User{
    return{
        uid: "user123",
        userName:"lola"
    }
} 

// const getUser2 = () => {
//     return{
//         uid:"user123",
//         userName:"lola"
//     } // funcion de flecha con retorno explicito
// }

const getUser2 = ():User => ({ // funcion de flecha con retorno implicito para objetos se usa parentesis
    uid:"user123",
    userName:"lola"
})

const user = getUser();
const user2 = getUser2();
console.log(user, user2);

//CallBacks (pasar una funcion dentro de una funcion)

const myNumbers:number[] = [1,2,3,4,5];

// myNumbers.forEach( function(value){
//     console.log({value});    
// })

// myNumbers.forEach( (value) => {
//     console.log({ value })
// })

myNumbers.forEach(console.log); 

