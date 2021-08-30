const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ ,,p1 ] = personajes;
console.log(p1); // Devuelve Trunks

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros] = retornaArreglo();
console.log(letras);
console.log(numeros);

const getState = (valor) => {
    return [valor, () => {console.log('Hola mundo');}];
};

const [nombre, setNombre] = getState('Goku');
console.log(nombre);
setNombre();