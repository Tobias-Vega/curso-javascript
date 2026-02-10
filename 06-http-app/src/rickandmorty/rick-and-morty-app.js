

/**
 * @returns {Promise<Object>} Character information
 */
const fetchCharacter = async () => {

  const res = await fetch('https://rickandmortyapi.com/api/character');

  const { results } = await res.json();

  console.log(results);
  
  return results;

  
}

/**
 *
 * @param {HTMLDivElement} element
 */
export const RickAndMortyApp = async (element) => {
  document.querySelector('#app-title').innerHTML = 'RickAndMortyApp App';
  element.innerHTML = 'Loading...';

  const character = await fetchCharacter();

  element.innerHTML = 'Tenemos data!!';
};
