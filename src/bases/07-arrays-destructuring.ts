const characterNames = ['Goku', 'Vegueta', 'Trunks'];
const [ characterPosition1, characterPosition2 ] = characterNames;
const [ , p2 ] = characterNames;
const [ , , p3 ] = characterNames;

console.log({ characterPosition1, characterPosition2, p2, p3 });

const returnsArrayFn = () => {
    return [ 'ABC', 123 ] as const // El 'as const' vuelve la funcion unicamente de lectura y la restringe a un elemento string en primer lugar y un elemento numero en el segundo. Esto permite a TS saber cual es el tipo de cada elemento
}
const [ text, number ] = returnsArrayFn();

console.log( text + ' hola ', number + 1 );