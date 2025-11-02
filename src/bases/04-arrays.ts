const myArray:number[] = [1,2,3,4,5,6,7,8,9,10];
const myArray2 = [...myArray];
myArray2.push(11);

const myArray3 = structuredClone(myArray2);// es una mejor practica usar structuredClone para clonar arrays u objetos, ya que hace una copia profunda (deep copy) y evita problemas con referencias en memoria
myArray3.push(12);

console.log({myArray, myArray2, myArray3});