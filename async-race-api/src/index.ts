import './global.css';
import { createMainOnPage } from './components/createMainOnPage';
import { AppView } from './components/AppView/appView';

createMainOnPage();
const app = new AppView();
app.renderPage();