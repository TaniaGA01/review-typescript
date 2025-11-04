import type { GyphyRandomResponse } from './data/gyphy-response'

const API_KEY = 'PGK8c7PJWeH0Wm2EAzrVFDy2C1dYrBaq';

const createImageInsideDOM = (url:string) => {
    const imageElement = document.createElement('img');
    imageElement.src = url;

    document.body.append(imageElement);
}

const getRandomGifUrl = async ():Promise<string> => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }&tag=&rating=g`);
    const { data }:GyphyRandomResponse = await response.json();

    return data.images.original.url;

}

//getRandomGifUrl().then( (url) => createImageInsideDOM(url)); // url es el return data.images.original.url;

getRandomGifUrl().then( createImageInsideDOM ); // esto es igual a la linea de codigo acá eencima