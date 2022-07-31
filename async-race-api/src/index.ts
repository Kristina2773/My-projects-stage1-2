// import App from './components/buildApp/app';

// const app = new App();
// app.start();
import './global.css';
import { addSelectPageButtons } from './components/pageButtons/addSelectPageButtons';
import { addSelectSettings } from './components/selectSettingsContainer/addSelectSettings';
import { createMainOnPage } from './components/createMainOnPage';
import { createGarage } from './components/garageSection/createGarage'
import {createCar} from './components/garageSection/createCars/createCars';
createMainOnPage();
addSelectPageButtons();
addSelectSettings();
createGarage(0, 1);
createCar('Skoda', 'Octavia', 'pink');