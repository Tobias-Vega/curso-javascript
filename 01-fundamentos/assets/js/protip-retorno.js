// function crearPersona(nombre, apellido) {
//   return { nombre, apellido }
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });


const persona = crearPersona('Tobías', 'Vega');

console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
  // console.log({edad, args});
  return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');

console.log([casado, vivo, nombre, saludo])

const { apellido: nuevoApellido } = crearPersona('Tobías', 'Vega');
console.log({nuevoApellido});

const tony = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.70,
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {


  console.log({nombre});
  console.log({codeName});
  console.log({vivo});
  console.log({edad});
  console.log({trajes});
}

imprimePropiedades(tony);