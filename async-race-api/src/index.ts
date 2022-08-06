import './global.css';
import { createMainOnPage } from './components/createMainOnPage';
import { AppController } from './components/AppController/appController';

createMainOnPage();
const app = new AppController();
app.render();

