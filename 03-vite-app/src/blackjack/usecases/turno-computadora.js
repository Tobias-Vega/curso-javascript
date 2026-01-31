import { pedirCarta, determinarGanador, acumularPuntos, crearCarta } from './';

// turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck
 * @param {Array<Number>} puntosJugadores
 * @param {HTMLButtonElement} btnDetener
 * @param {HTMLElement} divCartasJugadores
 * @param {HTMLElement[]} puntosHTML
 * 
 * @returns {void}
 */

export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, btnDetener, divCartasJugadores, puntosHTML) => {

  if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');

  if ( !deck ) throw new Error('El deck es necesario');

  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosHTML, puntosJugadores);
    crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  determinarGanador(puntosJugadores, btnDetener);
};