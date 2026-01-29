
function saludar(nombre) {
  console.log(arguments)
  console.log('Hola ' + nombre);
}

const saludar2 = function(nombre) {
  console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
  console.log('Hola Flecha')

}
const saludarFlecha2 = (nombre) => {
  console.log('Hola ' + nombre);
}

saludar('Tobías', 20, false, 'Argentina');
// saludar2('Tobías');

saludarFlecha();
saludarFlecha2("Tobías");