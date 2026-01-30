import { valorCarta } from './'

/**
 * 
 * @param {string} carta 
 * @param {number} turno 
 * @param {HTMLElement[]} puntosHTML 
 * @param {number[]} puntosJugadores 
 * @returns  {number}
 */

export const acumularPuntos = (carta, turno, puntosHTML, puntosJugadores) => {
  puntosJugadores[turno] += valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};