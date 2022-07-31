import './cars.css';
import { createElementOnPage } from '../../createElementOnPage';

export function createCar(name: string, model: string, colorCar: string) {
  const carsInGarage = document.querySelector('.cars-in-garage');
  const car = createElementOnPage('div', 'car');
  car.innerHTML = `
  <div class="select-remove-btn-item">
    <button type="submit" class="select-car">SELECT</button>
    <button type="submit" class="remove-car">REMOVE</button>
    <span class="car-name-and-model">${name} ${model}</span>
  </div>
  <div class="control-buttons">
    <button class="start-btn">A</button>
    <button class="stop-btn active">B</button>
  </div>
  <div class ="car-and-flag-img">
    <svg class="car-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-car-estate" width="24" height="24" viewBox="0 0 24 24" fill = ${colorCar}>
    <path d="M3,6H16L19,10H21C22.11,10 23,10.89 23,12V15H21A3,3 0 0,1 18,18A3,3 0 0,1 15,15H9A3,3 0 0,1 6,18A3,3 0 0,1 3,15H1V8C1,6.89 1.89,6 3,6M2.5,7.5V10H10.5V7.5H2.5M12,7.5V10H17.14L15.25,7.5H12M6,13.5A1.5,1.5 0 0,0 4.5,15A1.5,1.5 0 0,0 6,16.5A1.5,1.5 0 0,0 7.5,15A1.5,1.5 0 0,0 6,13.5M18,13.5A1.5,1.5 0 0,0 16.5,15A1.5,1.5 0 0,0 18,16.5A1.5,1.5 0 0,0 19.5,15A1.5,1.5 0 0,0 18,13.5Z" />
    </svg>
    <img src = "./assets/img/flag.svg" alt="flag"  class="flag">
  </div>
  `
  carsInGarage?.append(car);
}