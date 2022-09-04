import { DataController } from '../../data/dataController';
import { CarController } from '../../garageSection/createCars/carController';
import { CarType } from '../../interfaces/interfaces';
import { AppView } from '../AppView/appView';
import { createElementOnPage } from '../../commonFunction/createElementOnPage/createElementOnPage';
import { setLocalStorage } from '../../commonFunction/localStorage/localStorage';
export class AppController {
  public readonly dataController: DataController;

  constructor() {
    this.dataController = new DataController();
  }

  public async render(): Promise<void> {
    await this.createPageButtons();
    this.createMainOnPage();
    await this.createGarageView();
    this.createPages();
    await this.createPaginationButtons();
    await this.createHundredCars();
  }

  private createMainOnPage(): void {
    const body = document.querySelector('body') as HTMLElement;
    const main = createElementOnPage(document, 'main', 'main');
    body.append(main);
  }

  private async getData(): Promise<CarType[]> {
    const data = (await this.dataController.getData()) as CarType[];
    return data;
  }

  private async createDataCar(): Promise<void> {
    const data = await this.getData();
    const carController = new CarController(data);
    await carController.render();
  }

  private async createPageButtons(): Promise<void> {
    const data = await this.getData();
    const activePage = this.getActivePage();
    const appView = new AppView(data, activePage);
    appView.renderPageButtons();
  }

  private createPages(): void {
    const btnSelectGarage = document.querySelector('.btn-select-garage') as HTMLButtonElement;
    const btnSelectWinners = document.querySelector('.btn-select-winners') as HTMLButtonElement;
    const main = document.querySelector('.main') as HTMLElement;
    btnSelectGarage.addEventListener('click', async () => {
      main.innerHTML = '';
      await this.createGarageView();
    });
    btnSelectWinners.addEventListener('click', async () => {
      main.innerHTML = '';
      await this.createWinnerPage();
    });
  }

  private async createGarageView(): Promise<void> {
    const data = await this.getData();
    const activePage = this.getActivePage();
    const appView = new AppView(data, activePage);
    this.clearGarage();
    appView.renderGaragePage();
    await this.createDataCar();
    await this.createCars();
  }

  private async createWinnerPage(): Promise<void> {
    const data = await this.getData();
    const appView = new AppView(data, 1);
    appView.renderWinnerPage();
  }

  private getActivePage(): number {
    let activePage: number;
    const page = JSON.parse(localStorage.getItem('activePage') as string) as number;
    if (!page) {
      activePage = 1;
      setLocalStorage('activePage', activePage);
    } else {
      activePage = page;
    }
    return activePage;
  }

  private async createCars(): Promise<void> {
    const data = await this.getData();
    const carController = new CarController(data);
    const activePage = this.getActivePage();
    const renderData = carController.formPaginationGarage(data, activePage);
    await carController.createCars(renderData, activePage);
  }

  private clearGarage(): void {
    const main = document.querySelector('.main') as HTMLElement;
    main.innerHTML = '';
  }

  private async createPaginationButtons(): Promise<void> {
    const data = await this.getData();
    const carController = new CarController(data);
    carController.createPaginationButtons();
  }

  private async createHundredCars(): Promise<void> {
    const data = await this.getData();
    const carController = new CarController(data);
    carController.createHundredCars();
  }
}
