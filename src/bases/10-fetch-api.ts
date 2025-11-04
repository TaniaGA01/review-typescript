import type { GyphyRandomResponse } from './data/gyphy-response'

const API_KEY = 'PGK8c7PJWeH0Wm2EAzrVFDy2C1dYrBaq';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }&tag=&rating=g`);

const createImageInsideDOM = (url:string) => {
    const imageElement = document.createElement('img');
    imageElement.src = url;

    document.body.append(imageElement);
}

myRequest
    .then( ( response ) => response.json() )
    .then( ({ data }:GyphyRandomResponse) => { // { data } para destructurar el elemento y evitar poner
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl);
    })
    .catch( err => {
        console.error( err );
    })