const getImagen = async() => {
    
    try {
        const apiKey = 'e9NDh0olczBjgyILGqOmmHjmnNoolbnY';
        const urlEndpoint = 'https://api.giphy.com/v1/gifs/random';
        const resp = await fetch(`${urlEndpoint}?api_key=${apiKey}`);
        const {data} = await resp.json();

        return data.images.original;
    } catch (e) {
        // manejo del error
        console.error(e);
    }

}

getImagen()
    .then(({url}) => {
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);