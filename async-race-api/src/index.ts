import './global.css';
import { AppController } from './components/App/AppController/appController';
import { setLocalStorage } from './components/commonFunction/localStorage/localStorage';

const page = JSON.parse(localStorage.getItem('activePage') as string) as number;

if (page) {
  setLocalStorage('activePage', 1);
}
const app = new AppController();
app.render().then((result) =>
  result, (error: Error) =>
  console.log(error));
