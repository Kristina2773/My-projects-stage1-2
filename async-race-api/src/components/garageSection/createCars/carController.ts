import { ICarItem } from '../../interfaces/interfaces';
import { Car } from './carView';
import { CarType } from '../../interfaces/interfaces';
import { DataController } from '../../data/dataController';
import { DataModal } from '../../data/dataModal';
import { setLocalStorage } from '../../commonFunction/localStorage/localStorage';
import { url } from '../../const/data-const';
export class CarController implements ICarItem {
  public data: CarType[];

  public readonly dataController: DataController;

  public readonly dataModal: DataModal;

  private url: string;

  constructor(data: CarType[]) {
    this.data = data;
    this.dataController = new DataController();
    this.dataModal = new DataModal();
    this.url = url;
  }

  public async render(): Promise<void> {
    this.clearCarContainer();
    await this.generateCar();
    this.createNewCar();
  }

  public createPaginationButtons(): void {
    this.createNextPage();
    this.createPreviousPage();
  }

  private clearCarContainer(): void {
    const cars = document.querySelector<HTMLDivElement>('.cars-in-garage');
    if (cars) {
      cars.innerHTML = '';
    }
  }

  private async generateCar(): Promise<void> {
    await Promise.all(this.data.map(async (element) => {
      const car = new Car(element.name, element.id, element.color);
      await car.render();
    }));
  }

  private createNewCar(): void {
    const dataController = new DataController();
    const createButton = document.querySelector<HTMLButtonElement>('.create-item-btn');
    createButton?.addEventListener('click', async () => {
      await dataController.postData();
      const updateData = await dataController.getData() as CarType[];
      if (typeof updateData !== 'string') {
        const element = updateData[updateData.length - 1];
        const car = new Car(element.name, element.id, element.color);
        await car.render();
      }
      const count = document.querySelector<HTMLDivElement>('.total-number');
      if (count) {
        count.textContent = String(Number(count.textContent) + 1);
      }
      const [createInput, createColor] = ['.input-create-item', '.input-create-color'].map((item) =>
        document.querySelector<HTMLInputElement>(item));
      if (createColor && createInput) {
        const initialColor = '#000000';
        createInput.value = '';
        createColor.value = initialColor;
      }
    });
  }

  public createHundredCars(): void {
    const btnGenerateItems = document.querySelector('.generate-btn') as HTMLButtonElement;
    btnGenerateItems.addEventListener('click', () => {
      this.generateHundredCars();
    });
  }

  public slicePageData(arr: CarType[], size: number): Array<CarType[]> {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      const chunk = arr.slice(i, i + size);
      res.push(chunk);
    }
    return res;
  }

  public formPaginationGarage(data: CarType[], page: number): CarType[] {
    const elemOnPage = 7;
    const result = this.slicePageData(data, elemOnPage)[page - 1];
    return result;
  }

  private getRandomNumber(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }

  private getRandomColor(): string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  private async generateOneCard(name: string, color: string): Promise<void> {
    await this.dataModal.postData(`${url}/garage`, { name: name, color: color });
    const data = await this.dataController.getData() as CarType[];
    if (typeof data !== 'string') {
      const activePage = JSON.parse(localStorage.getItem('activePage') as string) as number;
      const renderData = this.formPaginationGarage(data, activePage);
      await this.createCars(renderData, activePage);
    }
  }

  public async createCars(renderData: CarType[], activePage: number): Promise<void> {
    const pageNumber = document.querySelector<HTMLSpanElement>('.page-number');
    const count = document.querySelector<HTMLDivElement>('.total-number');
    const data = await this.dataController.getData() as CarType[];
    const noData = '0';
    if (!renderData && count) {
      count.innerHTML = noData;
    } else {
      renderData.forEach(async (elem) => {
        const car = new Car(elem.name, elem.id, elem.color);
        await car.render();
      });
    }

    if (pageNumber && count) {
      pageNumber.innerHTML = `#${activePage}`;
      count.innerHTML = String(data.length);
    }
  }

  public generateHundredCars(): void {
    const stamp: string[] = ['Mersedes', 'Lada', 'Skoda', 'Mitsubishi', 'Renault', 'Tesla', 'Acura',
      'Daewoo',
      'Dodge',
      'Ford',
      'Volvo',
      'Subaru',
      'Volkswagen',
      'Suzuki',
      'Opel',
      'Citroen',
      'Honda',
    ];

    const model: string[] = ['amg', 'benz', 'Granta', 'Priora', 'Largus', 'Vesta', 'Lancer', 'Pajero', 'Outlander',
      'Logan', 'Sandero', 'Model S', 'Model 3', 'Zdx', 'Mdz', 'Nexia',
      'Charger',
      'Focus',
      'S60',
      'V60',
      'Octavia',
      'Fabia',
      'Astra',
      'Polo',
      'Jimny',
    ];
    const countCar = 100;
    for (let i = 0; i < countCar; i += 1) {
      const stampNum = this.getRandomNumber(stamp.length - 1) <= 0 ? 0 : this.getRandomNumber(stamp.length - 1);
      const modelNum = this.getRandomNumber(model.length - 1) <= 0 ? 0 : this.getRandomNumber(model.length - 1);
      const name = `${stamp[stampNum]} ${model[modelNum]}`;
      const color = this.getRandomColor();
      this.generateOneCard(name, color).then((result) =>
        result, (error: Error) =>
        console.log(error));
    }
  }

  private async showNextPage(activePage: number, data: CarType[]): Promise<void> {
    const maxItemOnPage = 7;
    if (activePage < this.slicePageData(data, maxItemOnPage).length) {
      setLocalStorage('activePage', activePage + 1);
      await this.createCars(this.formPaginationGarage(data, activePage + 1), activePage + 1);
    }
  }

  private async showPreviousPage(activePage: number, data: CarType[]): Promise<void> {
    const defaultPage = 1;
    if (activePage > defaultPage) {
      setLocalStorage('activePage', activePage - 1);
      await this.createCars(this.formPaginationGarage(data, activePage - 1), activePage - 1);
    }
  }

  private createNextPage(): void {
    const nextPage = document.querySelector<HTMLButtonElement>('.next-page') as HTMLButtonElement;
    nextPage.addEventListener('click', async () => {
      const data = await this.dataController.getData() as CarType[];
      const page = JSON.parse(localStorage.getItem('activePage') as string) as number;
      await this.showNextPage(page, data);
    });
  }

  private createPreviousPage(): void {
    const previousPage = document.querySelector<HTMLButtonElement>('.prev-page') as HTMLButtonElement;
    previousPage.addEventListener('click', async () => {
      const data = await this.dataController.getData() as CarType[];
      const page = JSON.parse(localStorage.getItem('activePage') as string) as number;
      await this.showPreviousPage(page, data);
    });
  }
}
