/**
 * 
 * @param {string} carta 
 * @param {number} turno 
 * @returns {void} 
 */

export const crearCarta = (carta, turno, divCartasJugadores) => {
  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add('carta');
  divCartasJugadores[turno].append(imgCarta);
};