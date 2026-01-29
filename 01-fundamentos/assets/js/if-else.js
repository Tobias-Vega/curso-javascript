let a = 5;

if (a >= 10) {
  // undefinded, null, una asignacion
  console.log('A es mayor a o igual a 10');
} else {
  console.log('A es menor a 10');
}

console.log('Fin del programa');

const hoy = new Date();

console.log(hoy);

let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes, ...
console.log({ dia });

if (dia === 0) {
  console.log('Domingo');
} else if (dia === 1) {
  console.log('Lunes');
} else if (dia === 2) {
  console.log('Martes');
} else {
  console.log('No es domingo, lunes o martes');
}

// sin usar If else, o Swtich, unicamente objetos

dia = 6;

// día de la semana

const diaLetras = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado',
};

const diaLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

console.log(diaLetras2[dia]);