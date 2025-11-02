//Instrucciones del ejercicio : https://gist.github.com/Klerith/6db6ce73a652e3a5639673adc9be7895

const useState = (name:string, ) => [ name, (newName:string) => { console.log(newName) } ] as const;

const [ name, setName ] = useState('Goku');

console.log(name)
setName('Vegueta')