//Desestructuración

const persona = {
    nombre: 'Ton',
    edad: 45,
    clave: 'Iroman',
    rango: 'Soldado'
};

const {nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const getContext = ({clave, edad, rango = 'Capitán'}) => {
    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.123123,
            lng: -12.32123,
        }
    };
}

const {nombreClave, anios, latlng} = getContext(persona);
const {lat, lng} = latlng

console.log(nombreClave, anios);
console.log(lat, lng);