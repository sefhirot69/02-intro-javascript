//Funciones en JS
const saludar = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar2 = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar('as'));
console.log(saludar2('as2'));
console.log(saludar3('as3'));
console.log(saludar4());

const getUser = () => {
    return {
        uuid: 'ABC123',
        username: 'El_Papi122'
    };
};

const getUser2 = () => ({
    uuid: 'ABC123',
    username: 'El_Papi12223'
});

console.log(getUser());
console.log(getUser2());

const getUsuarioActivo = (nombre) => ({
    uuid: 'ABC567',
    username: nombre,
});

const usuarioActivo = getUsuarioActivo('Goku');
console.log(usuarioActivo);