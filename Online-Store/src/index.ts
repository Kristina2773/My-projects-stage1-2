// import App from './components/app/app';
import './global.css';
import './components/createcards/card.css';
import { createCard } from './components/createcards/card';
import data from './database.json';
import { sort } from './components/sorting/sort';
import { searchItem } from './components/search/search';

createCard(data);
sort();
searchItem();

// const app = new App();
// app.start();

// const select = <HTMLSelectElement>document.querySelector('.select');
// const sources = <HTMLDivElement>document.querySelector('.sources');

// select.addEventListener('change', () => {
//   sources.innerHTML = '';
//   const app = new App();
//   app.start();
// });
