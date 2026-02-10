import './style.css';
import viteLogo from '../public/vite.svg'
import javascriptLogo from './javascript.svg';
import { RickAndMortyApp } from './rickandmorty/rick-and-morty-app';
import { UserApp } from './users/users-app';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
    
    </div>
  </div>
`;

const element = document.querySelector('.card');

// RickAndMortyApp(element);
UserApp(element);
