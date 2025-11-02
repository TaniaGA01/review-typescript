const person = {
    name: 'Tony',
    age: 43,
    key: 'Ironman'
}

const { name:IronmanName, age, key } = person; // elemento destructurado

console.log(IronmanName, age, key);

interface Hero{
    name:string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({ name, age, key, rank }:Hero) => {
    return{
        keyName: key,
        user:{
            name,
            age
        },
        rank: rank
    }
}

const { rank, keyName, user:{ name } } = useContext(person);

console.log({ rank, keyName, name })