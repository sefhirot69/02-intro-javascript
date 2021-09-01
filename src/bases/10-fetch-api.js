// e9NDh0olczBjgyILGqOmmHjmnNoolbnY

const apiKey = 'e9NDh0olczBjgyILGqOmmHjmnNoolbnY';

const urlEndpoint = 'https://api.giphy.com/v1/gifs/random';

const peticion = fetch(`${urlEndpoint}?api_key=${apiKey}`);

peticion.then(resp => resp.json())
    .then(({data}) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);