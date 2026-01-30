/*
  2C = Two of Clubs
  2D = Two of Diamonds
  2H = Two of Hearts
  2S = Two of Spades
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

// Esta función crea una nueva baraja
const crearDeck = () => {

  for (let i = 2; i <= 10; i++) {
    for (const tipo of tipos) {
      deck.push(i + tipo)
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  return deck;
}

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {

  if (deck.length === 0) {
    throw 'No hay cartas en el deck';
  }

  const carta = deck.pop();

  console.log(deck);
  
  console.log(carta) // carta debe de ser de la baraja

  return carta;
}

pedirCarta();

const valorCarta = (carta) => {

  const valor = carta[0];

  console.log({valor})


}

valorCarta('2D')