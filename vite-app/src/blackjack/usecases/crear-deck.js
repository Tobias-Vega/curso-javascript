import _ from 'underscore';


/**
 * 
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @param {Array<string>} deck 
 * @returns {Array}
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales, deck) => {

  if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('TiposDeCarta es obligatorio como un arreglo de string');

  if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('TiposEspeciales es obligatorio como un arreglo de string');

  deck = [];

  for (let i = 2; i <= 10; i++) {
    for (const tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  return _.shuffle(deck);
};