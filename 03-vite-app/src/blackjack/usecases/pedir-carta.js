
/**
 * 
 * @param {Array<string>} deck 
 * @returns {string} carta
 */

export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw new Error('No hay cartas en el deck');
  }

  return deck.pop();
};