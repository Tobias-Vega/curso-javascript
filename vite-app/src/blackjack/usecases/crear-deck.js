import _ from 'underscore'

export const crearDeck = (tiposDeCarta, tiposEspeciales, deck) => {
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