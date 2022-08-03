import './global.css';
import { addSelectPageButtons } from './components/pageButtons/addSelectPageButtons';
import { addSelectSettings } from './components/selectSettingsContainer/addSelectSettings';
import { createMainOnPage } from './components/createMainOnPage';
import { renderGarage } from './components/garageSection/renderGarage';
createMainOnPage();
addSelectPageButtons();
addSelectSettings();
renderGarage();