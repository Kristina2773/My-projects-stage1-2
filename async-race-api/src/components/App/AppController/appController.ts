import { DataController } from '../../data/dataController';
import { CarController } from '../../garageSection/createCars/carController';
import { CarType } from '../../interfaces/interfaces';
import { AppView } from '../AppView/appView';
import { createElementOnPage } from '../../commonFunction/createElementOnPage/createElementOnPage';

export class AppController {
  public readonly dataController: DataController;

  constructor() {
    this.dataController = new DataController();
  }

  public async render() {
    await this.renderPageButtons();
    this.createMainOnPage();
    await this.renderGarageView();
    this.renderPages();
  }

  private createMainOnPage() {
    const body = document.querySelector('body') as HTMLElement;
    const main = createElementOnPage(document, 'main', 'main');
    body.append(main);
  }

  private async renderDataCar() {
    const data = (await this.dataController.getData()) as CarType[];
    const carController = new CarController(data);
    carController.render();
  }

  private async renderPageButtons() {
    const data = (await this.dataController.getData()) as CarType[];
    const appView = new AppView(data);
    appView.renderPageButtons();
  }

  private renderPages() {
    const btnSelectGarage = document.querySelector('.btn-select-garage') as HTMLButtonElement;
    const btnSelectWinners = document.querySelector('.btn-select-winners') as HTMLButtonElement;
    const main = document.querySelector('.main') as HTMLElement;
    btnSelectGarage.addEventListener('click', async () => {
      main.innerHTML = '';
      await this.renderGarageView();
    });
    btnSelectWinners.addEventListener('click', async () => {
      main.innerHTML = '';
      await this.renderWinnerPage();
    });
  }

  private async renderGarageView() {
    const data = (await this.dataController.getData()) as CarType[];
    const appView = new AppView(data);
    appView.renderGaragePage();
    await this.renderDataCar();
  }

  private async renderWinnerPage() {
    const data = (await this.dataController.getData()) as CarType[];
    const appView = new AppView(data);
    appView.renderWinnerPage();
  }
}
