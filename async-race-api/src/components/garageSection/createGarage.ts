import './garage.css';
import { createElementOnPage } from '../createElementOnPage';

export function createGarage(totalNumber: number, page: number) {
  const main = document.querySelector('.main');
  const garageContainer = createElementOnPage('div', 'garage-container');
  garageContainer.innerHTML = `
    <div class = "garage-title">
      <span class = "title">Garage</span>
      <span class = "total-number">(${totalNumber})</span>
    </div>
    <div class = "page-title">
      <span class = "subtitle">Page</span>
      <span class = "page">#${page}</span>
    </div>
    <div class = "cars-in-garage"></div>
  `
  main?.append(garageContainer);
}