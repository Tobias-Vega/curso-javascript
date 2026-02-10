/**
 * @returns {Promise<Object>} Character information
 */
const fetchCharacter = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');

  const { results } = await res.json();

  console.log(results);

  return results;
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const RickAndMortyApp = async (element) => {
  document.querySelector('#app-title').innerHTML = 'RickAndMortyApp App';
  element.innerHTML = 'Loading...';

  const characterLabel = document.createElement('h3');
  const statusLabel = document.createElement('h3');
  const specieLabel = document.createElement('h3');
  const nextCharacterButton = document.createElement('button');
  nextCharacterButton.innerText = 'Next Character';

  let index = 0;
  const data = await fetchCharacter();

  const renderCharacter = () => {
    characterLabel.innerText = `Nombre: ${data[index].name}`;
    statusLabel.innerText = `Estado: ${data[index].status}`;
    specieLabel.innerText = `Especie: ${data[index].species}`;

    element.replaceChildren(
      characterLabel,
      statusLabel,
      specieLabel,
      nextCharacterButton,
    );
  };

  nextCharacterButton.addEventListener('click', () => {
    index++;

    if (index >= data.length) index = 0;

    renderCharacter();
  });

  renderCharacter();
};
