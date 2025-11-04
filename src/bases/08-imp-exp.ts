//import myHerosList from "./data/heros.data"; // al usar export defaul puedo usar cualquier variable para los datos exportados como por ejemplo myHerosList

import { heros, type Hero, Owner } from "./data/heros.data"

const getHeroById = (id:number):Hero|undefined => {
    const hero = heros.find( (hero) => {
        return hero.id === id
    });

    return hero
}

// console.log(getHeroById(1));

export const getHeroByOwner = (owner:Owner.DC|Owner.Marvel):Hero[] => {
    const herosByOwner = heros.filter( hero => hero.owner === owner );
    return herosByOwner
}